# Props 定义

`Vue Class Component` 组件没有提供用于 `props` 的专用API。但是，您可以使用 `Vue.extend` API 来做到这一点：

```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use defined props by extending GreetingProps.
@Component
export default class Greeting extends GreetingProps {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```

当 `Vue.extend` 推断定义的prop类型时，可以通过扩展它在类组件中使用它们。

如果你有一个父组件或者 `mixins` 要去继承，用 `mixins` 辅助器去结合定义 `props` 和父组件：

```vue
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component, { mixins } from 'vue-class-component'
import Super from './super'

// Define the props by using Vue's canonical way.
const GreetingProps = Vue.extend({
  props: {
    name: String
  }
})

// Use `mixins` helper to combine defined props and a mixin.
@Component
export default class Greeting extends mixins(GreetingProps, Super) {
  get message(): string {
    // this.name will be typed
    return 'Hello, ' + this.name
  }
}
</script>
```
