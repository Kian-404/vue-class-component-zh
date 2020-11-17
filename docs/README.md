# 总览

`Vue Class Component` 是一个库，可以让你使用`Class`语法的样式编写你的`Vue`组件。 例如，下面是一个用`Vue Class Component`编写的简单计数器组件：

```vue
<template>
  <div>
    <button v-on:click="decrement">-</button>
    {{ count }}
    <button v-on:click="increment">+</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

// Define the component in class-style
@Component
export default class Counter extends Vue {
  // Class properties will be component data
  count = 0

  // Methods will be component methods
  increment() {
    this.count++
  }

  decrement() {
    this.count--
  }
}
</script>
```

如示例所示，可以通过使用`@Component`装饰器为类添加注释，从而以直观和标准的类语法定义组件数据和方法。 您可以简单地用`class-style`的组件替换组件定义，因为它与组件定义的普通`options`对象样式等效。

通过以类样式定义组件，不仅可以更改语法，还可以利用某些`ECMAScript`语言功能，例如类继承和装饰器。 `Vue Class Component`还提供了一个[`mixins` helper](guide/extend-and-mixins.md#Mixins)用于`mixin`继承，以及一个[`createDecorator` function](guide/custom-decorators.md)更容易的创建你的装饰器。


你也许还想查看`@Prop`和`@Watch`装饰器，链接地址[Vue Property Decorator](https://github.com/kaorun343/vue-property-decorator)