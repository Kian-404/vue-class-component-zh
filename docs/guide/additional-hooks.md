# 附带的钩子函数

如果你使用了某些 `Vue`的插件如 [Vue Router](https://router.vuejs.org/)，你可能希望类组件解析它们提供的钩子函数。 在这种情况下，`Component.registerHooks`允许你注册这些钩子函数：

```js
// class-component-hooks.js
import Component from 'vue-class-component'

// Register the router hooks with their names
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate'
])
```

注册完这些钩子函数之后，类组件可以在方法属性中实现它们：

```js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class HelloWorld extends Vue {
  // The class component now treats beforeRouteEnter,
  // beforeRouteUpdate and beforeRouteLeave as Vue Router hooks
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  }

  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  }

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
```

建议你将这些注册代码写入到一个单独的文件中，因为你必须在任何组件定义之前对其进行注册。你可以通过在主文件的顶部放置钩子注册的 `import` 语句来确保执行顺序：

```js
// main.js

// Make sure to register before importing any components
import './class-component-hooks'

import Vue from 'vue'
import App from './App'

new Vue({
  el: '#app',
  render: h => h(App)
})
```