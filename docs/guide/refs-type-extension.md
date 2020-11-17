# `$refs` 类型扩展

组件的 `$refs` 类型声明为处理所有可能的 `ref` 类型的最广泛的类型。 虽然理论上是正确的，但在大多数情况下，每个 `ref` 在实践中仅具有特定的元素或组件。

你可以通过重写类组件中的 `$refs` 类型来指定特定的`ref`类型：

```vue
<template>
  <input ref="input">
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class InputFocus extends Vue {
  // annotate refs type.
  // The symbol `!` (definite assignment assertion)
  // is needed to get rid of compilation error.
  $refs!: {
    input: HTMLInputElement
  }

  mounted() {
    // Use `input` ref without type cast.
    this.$refs.input.focus()
  }
}
</script>
```
在上面的例子中，你可以直接访问 `input` 类型而无需类型转换，因为在类组件上指定了 `$refs.input`类型。 
你可以访问类型为type的$ refs.input在类型上指定为类的$ refs.input`类型时，无需输入类型即可访问。

注意，它应该是类型注释(使用冒号 `:`),而不是值的分配(`=`)。
