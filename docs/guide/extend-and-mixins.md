# 继承和混入

## Extend

你可以用存在的类组件作为继承组件的原生类。想象一下你又如下的父组件：

```js
// super.js
import Vue from 'vue'
import Component from 'vue-class-component'

// Define a super class component
@Component
export default class Super extends Vue {
  superValue = 'Hello'
}
```

你可以使用原始类继承语法进行扩展：

```js
import Super from './super'
import Component from 'vue-class-component'

// Extending the Super class component
@Component
export default class HelloWorld extends Super {
  created() {
    console.log(this.superValue) // -> Hello
  }
}
```

注意每个父类都必须是一个类组件。换句话说，它需要继承 `Vue`构造函数作为超类，并且由`@Component`装饰器进行装饰。

## Mixins

`Vue Class Component` 提供了 `mixins` 函数在类风格中去使用  [mixins](https://vuejs.org/v2/guide/mixins.html)。通过使用 `mixins`，`TypeScript`可以推断`mixin`类型并在组件类型上继承它们。

例如定义混入 `Hello` 和 `World`

```js
// mixins.js
import Vue from 'vue'
import Component from 'vue-class-component'

// You can declare mixins as the same style as components.
@Component
export class Hello extends Vue {
  hello = 'Hello'
}

@Component
export class World extends Vue {
  world = 'World'
}
```

在类风格组件中使用它们

```js
import Component, { mixins } from 'vue-class-component'
import { Hello, World } from './mixins'

// Use `mixins` helper function instead of `Vue`.
// `mixins` can receive any number of arguments.
@Component
export class HelloWorld extends mixins(Hello, World) {
  created () {
    console.log(this.hello + ' ' + this.world + '!') // -> Hello World!
  }
}
```

和父类相同，所有的 `mixins` 必须被定义为类组件。
