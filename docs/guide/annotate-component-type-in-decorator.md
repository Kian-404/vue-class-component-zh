# 装饰器组件类型

在某些情况下，你想在 `@Component` 装饰器参数中的函数上使用组件类型。 例如，要访问监听函数中的组件方法：

```ts
@Component({
  watch: {
    postId(id: string) {
      // To fetch post data when the id is changed.
      this.fetchPost(id) // -> Property 'fetchPost' does not exist on type 'Vue'.
    }
  }
})
class Post extends Vue {
  postId: string

  fetchPost(postId: string): Promise<void> {
    // ...
  }
}
```

上面的代码产生类型错误，显示监听函数中不存在 `fetchPost`。 发生这种情况是因为 `@Component` 装饰器参数中的此类型是基本Vue类型。

要使用你自己的组件类型(在本例中为`Post`)，可以通过装饰器的 `type` 参数对其进行注释。

```ts
// Annotate the decorator with the component type 'Post' so that `this` type in
// the decorator argument becomes 'Post'.
@Component<Post>({
  watch: {
    postId(id: string) {
      this.fetchPost(id) // -> No errors
    }
  }
})
class Post extends Vue {
  postId: string

  fetchPost(postId: string): Promise<void> {
    // ...
  }
}
```
