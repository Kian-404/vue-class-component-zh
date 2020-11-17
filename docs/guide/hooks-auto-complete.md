# Hooks 自动完成

`Vue Class Component` 提供了内置的钩子类型，可为 `TypeScript` 的类组件声明中的 `data`，`render` 和其他生命周期钩子函数实现自动完成。 要启用它，你需要导入位于`vue-class-component/hooks` 的钩子类型。

```ts
// main.ts
import 'vue-class-component/hooks' // import hooks type to enable auto-complete
import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
```

你如果想要使其与自定义钩子函数一起使用，你可以自己手动添加它：

```ts
import Vue from 'vue'
import { Route, RawLocation } from 'vue-router'

declare module 'vue/types/vue' {
  // Augment component instance type
  interface Vue {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void

    beforeRouteLeave?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void

    beforeRouteUpdate?(
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: Vue) => void)) => void
    ): void
  }
}
```


