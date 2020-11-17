# 安装

## Vue CLI 安装

你可以很容易的使用[Vue CLI](https://cli.vuejs.org/)来安装`Vue Class Component`。运行如下命令创建一个新的项目：

```sh
$ vue create hello-world
```
系统将询问你是否使用预设。 选择"Manually select features":

![](../assets/vue-cli-1.png)

选择 `TypeScript`用来使用`Vue Class Component`。你也可以添加你需要的其他的功能：

![](../assets/vue-cli-2.png)

输入`y`去选择使用`Use class-style component syntax?`:

![](../assets/vue-cli-3.png)

你也可以根据自己的喜好配置其他功能。完成此安装过程后，`Vue CLI`会创建一个新的安装使用`Vue Class Component`的项目目录。

## 手动安装

如果你喜欢手动设置，请通过npm安装它并配置你的构建工具。

### npm

你可以使用`npm`命令安装`Vue Class Component`。 请确保已经安装了`Vue`核心库，因为`Vue Class Component`依赖它：

```sh
$ npm install --save vue vue-class-component
```

如果你更喜欢`yarn`也可以用`yarn`命令来安装:

```sh
$ yarn add --save vue vue-class-component
```

### 构建设置

要使用 `Vue Class Component`你需要配置[TypeScript](https://www.typescriptlang.org/) 或者[Babel](https://babeljs.io/) 因为你的项目依赖[ECMAScript stage 1 decorators](https://github.com/wycats/javascript-decorators/blob/master/README.md) 需要进行转换才能在浏览器上运行。

::: warning
它不支持 stage 2 装饰器，因为TypeScript Transpiler现在仅支持旧的装饰器规范。
:::

#### TypeScript

在你的项目的根目录下创建 `tsconfig.json`并且指明 `experimentalDecorators` 配置以便可以转化装饰器语法。

```json {7}
{
  "compilerOptions": {
    "target": "es5",
    "module": "es2015",
    "moduleResolution": "node",
    "strict": true,
    "experimentalDecorators": true
  }
}
```

#### Babel

安装 `@babel/plugin-proposal-decorators` 和 `@babel/plugin-proposal-class-properties`:

```sh
$ npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties
```

然后在你的根目录下配置 `.babelrc`文件：

```json
{
  "plugins": [
    ["@babel/proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }]
  ]
}
```

注意由于 `Vue Class Component`现在仅支持 `stage 1(legacy)` 装饰器规范，因此需要 `legacy`和 `loose` 选项。

## CDN

[unpkg.com](https://unpkg.com/)提供了基于 `npm`的 CDN连接。你可以替换 ulr中的 `@latest`部分来选择特定版本的 `Vue Class Component` (例如: `https://unpkg.com/vue-class-component@7.2.2/dist/vue-class-component.js` 使用7.2.2的版本)。

```html
<!-- UMD build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.js"></script>

<!-- UMD minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.min.js"></script>

<!-- ES Module build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.js"></script>

<!-- ES Module minified build -->
<script src="https://unpkg.com/vue-class-component@latest/dist/vue-class-component.esm.browser.min.js"></script>
```

## 不同的版本

`Vue Class Component` 针对不同的环境和用途提供不同的构建版本。

- **开发环境**
  - `vue-class-component.js` (UMD)
  - `vue-class-component.common.js` (CommonJS)
  - `vue-class-component.esm.js` (ES Module for bundlers)
  - `vue-class-component.esm.browser.js` (ES Module for browsers)
- **生产环境 (minified)**
  - `vue-class-component.min.js` (UMD)
  - `vue-class-component.esm.browser.min.js` (ES Module for browsers)
