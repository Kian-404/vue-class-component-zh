# 自定义装饰器

你可以通过创建自己的装饰器来扩展此库的功能。 `Vue Class Component` 提供了 `createDecorator` 帮助去创建自定义的装饰器。 `createDecorator`期望回调函数作为第一个参数，并且该回调函数的接收的参数如下：

- `options`: Vue组件选项对象。改变这个对象将会影响提供的组件。
- `key`: 装饰器应用的属性或者方法的键。
- `parameterIndex`: 如果自定义修饰符用于参数，则修饰参数的索引。

例如创建一个 `log` 装饰器，该装饰器在装饰方法被调用时输出方法名称和传递的参数的日志消息。

```js
// decorators.js
import { createDecorator } from 'vue-class-component'

// Declare Log decorator.
export const Log = createDecorator((options, key) => {
  // Keep the original method for later.
  const originalMethod = options.methods[key]

  // Wrap the method with the logging logic.
  options.methods[key] = function wrapperMethod(...args) {
    // Print a log.
    console.log(`Invoked: ${key}(`, ...args, ')')

    // Invoke the original method.
    originalMethod.apply(this, args)
  }
})
```

使用装饰器方法

```js
import Vue from 'vue'
import Component from 'vue-class-component'
import { Log } from './decorators'

@Component
class MyComp extends Vue {
  // It prints a log when `hello` method is invoked.
  @Log
  hello(value) {
    // ...
  }
}
```

在上面的代码中，当 `hello` 方法被调用时传递参数 `42`，下面的日志将会被打印：

```
Invoked: hello( 42 )
```