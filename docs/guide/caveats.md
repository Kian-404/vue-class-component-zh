# 类组件的注意事项

Vue类组件通过实例化底层的原始构造函数，将类属性收集为Vue实例数据。 尽管我们可以像本地类方式那样定义实例数据，但有时我们需要知道其工作方式。

## `this` value in property initializer

如果你定义箭头函数作为类属性并在其中访问 `this`，它将无法正常工作。 这是因为`this`只是初始化类属性时Vue实例的代理对象：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComp extends Vue {
  foo = 123

  // DO NOT do this
  bar = () => {
    // Does not update the expected property.
    // `this` value is not a Vue instance in fact.
    this.foo = 456
  }
}
```
在这种情况下，你可以简单地定义方法代替类属性，因为Vue会自动绑定实例：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyComp extends Vue {
  foo = 123

  // DO this
  bar() {
    // Correctly update the expected property.
    this.foo = 456
  }
}
```

## Always use lifecycle hooks instead of `constructor`

当调用原始构造函数初始化组件数据时，建议不要自己声明`constructor`：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Posts extends Vue {
  posts = []

  // DO NOT do this
  constructor() {
    fetch('/posts.json')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
```

上面的代码打算在组件初始化时获取列表，但是由于Vue类组件的工作方式，获取列表将被意外调用两次。

推荐编写像 `created` 之类的生命周期函数代替 `constructor`：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Posts extends Vue {
  posts = []

  // DO this
  created() {
    fetch('/posts.json')
      .then(res => res.json())
      .then(posts => {
        this.posts = posts
      })
  }
}
```