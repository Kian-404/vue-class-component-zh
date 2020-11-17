# 类组件

`@Component` 装饰器确保你的 `class` 是一个 `Vue` 组件

```js
import Vue from 'vue'
import Component from 'vue-class-component'

// HelloWorld class will be a Vue component
@Component
export default class HelloWorld extends Vue {}
```

## Data

初始化 `data` 可以声明为类属性：

```vue
<template>
  <div>{{ message }}</div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component data
  message = 'Hello World!'
}
</script>
```

在上面的组件中 `message` 数据在 `<div>` 元素中渲染出 `Hello World!` 。

请注意，如果属性的初始值是 `undefined`，则 `class` 属性将是不起作用的，这意味着将不会检测到对属性的更改：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // `message` will not be reactive value
  message = undefined
}
```
去避免这样使用，你可以使用 `null`或者使用 `data` 钩子函数代替：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // `message` will be reactive with `null` value
  message = null

  // See Hooks section for details about `data` hook inside class.
  data() {
    return {
      // `hello` will be reactive as it is declared via `data` hook.
      hello: undefined
    }
  }
}
```

## Methods

组件的 `methods`可以直接被定义为类的方法属性：

```vue
<template>
  <button v-on:click="hello">Click</button>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declared as component method
  hello() {
    console.log('Hello World!')
  }
}
</script>
```

## Computed Properties

计算属性可以被定义为类的 `getter / setter` 属性：

```vue
<template>
  <input v-model="name">
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  firstName = 'John'
  lastName = 'Doe'

  // Declared as computed property getter
  get name() {
    return this.firstName + ' ' + this.lastName
  }

  // Declared as computed property setter
  set name(value) {
    const splitted = value.split(' ')
    this.firstName = splitted[0]
    this.lastName = splitted[1] || ''
  }
}
</script>
```

## Hooks

`data`, `render` 和所有的 `Vue` 生命周期函数都可以直接声明为类的原型方法，但是你不能在实例本身调用它们。当声明自定义方法的时候，你应该避免使用这些保留的名称。

```jsx
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // Declare mounted lifecycle hook
  mounted() {
    console.log('mounted')
  }

  // Declare render function
  render() {
    return <div>Hello World!</div>
  }
}
```

## Other Options

对应所有其他的选项，把它们都传递给装饰器函数：

```vue
<template>
  <OtherComponent />
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import OtherComponent from './OtherComponent.vue'

@Component({
  // Specify `components` option.
  // See Vue.js docs for all available options:
  // https://vuejs.org/v2/api/#Options-Data
  components: {
    OtherComponent
  }
})
export default class HelloWorld extends Vue {}
</script>
```