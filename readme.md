# VSCode Lint <img src="https://img.shields.io/badge/vscode--lint-集成Stylelint与Eslint的VSCode配置工具-66f.svg">

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/vscode-lint)
[![version](https://img.shields.io/badge/version-0.0.7-f66.svg)](https://github.com/JowayYoung/vscode-lint)
[![node](https://img.shields.io/badge/node-%3E%3D12.0.0-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![npm](https://img.shields.io/badge/npm-%3E%3D6.9.0-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/vscode-lint)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/vscode-lint)
[![coverage](https://img.shields.io/badge/coverage-100%25-09f.svg)](https://github.com/JowayYoung/vscode-lint)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/vscode-lint)

> `vscode-lint`是一个集成**Stylelint**与**Eslint**的VSCode配置工具，提供`html/css/scss/less/js/ts/jsx/tsx/vue文件`的代码校验功能

**vscode-lint**用于约束团队成员的`编码规范`与`编码风格`，从而增加项目代码的`可维护性`与`可接入性`，保障项目整体质量，可减少`无用代码`、`重复代码`、`错误代码`和`漏洞代码`的产生几率。它的根本目的是**一次部署全局运行**，统一所有项目的`编码规范`与`编码风格`，养成规范的码字习惯，减少不必要的错误与隐患。

`vscode-lint`依赖以下`NPM模块`的最新版本。

[![postcss](https://img.shields.io/badge/postcss-8.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![babel](https://img.shields.io/badge/babel-7.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![typescript](https://img.shields.io/badge/typescript-4.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![stylelint](https://img.shields.io/badge/stylelint-14.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![eslint](https://img.shields.io/badge/eslint-8.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)
[![eslint](https://img.shields.io/badge/typescript--eslint-5.x.x-3c9.svg)](https://github.com/JowayYoung/vscode-lint)

为了方便表述，统一以下名词。

- 以下提及的**Stylelint**与**Eslint**均为`VSCode插件`
- 以下提及的**stylelint**与**eslint**均为`NPM模块`

### 安装

`npm i -g vscode-lint`

> 安装失败

- 切换**NPM镜像**为淘宝镜像：`npm config set registry https://registry.npm.taobao.org/`
- 重新执行安装命令：`npm i -g vscode-lint`

### 配置

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint`与`Eslint`，安装完毕重启`VSCode`
- 选择`文件→首选项→设置`，`设置`中可选`用户`或`工作区`
	- **用户**：配置生效后会作用于全局项目(`若大部分项目都是单一的React应用或Vue应用推荐使用全局配置`)
	- **工作区**：配置生效后只会作用于当前打开项目
- 点击`设置`右上角中间图标`打开设置(json)`，打开的对应文件是`settings.json`
- 插入以下配置并重启`VSCode`：为了保障每次修改完毕都能正常格式化代码，必须重启`VSCode`

```json
{
	// 默认自定义配置
	"css.validate": false,
	"less.validate": false,
	"scss.validate": false,
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll.stylelint": true
	},
	// 扩展自定义配置
	"eslint.nodePath": "path/vscode-lint/node_modules",
	"eslint.options": {
		"overrideConfigFile": "path/vscode-lint/eslint/eslintrc.js" // 可变⚠️
	},
	"stylelint.configBasedir": "path/vscode-lint",
	"stylelint.configFile": "path/vscode-lint/stylelint/stylelintrc.js",
	"stylelint.customSyntax": "postcss-html", // 可变⚠️
	"stylelint.stylelintPath": "path/vscode-lint/node_modules/stylelint",
	"stylelint.validate": ["html", "css", "scss", "less", "vue"]
}
```

以上配置的`path`为`vscode-lint`模块所在的**NPM根目录**，可执行`npm config get prefix`获取**NPM根目录**并替换`path`。

- 执行`npm config get prefix`获取的**NPM根目录**，例如是`E:/Node/prefix/node_modules`
- 将上述配置的`path`替换为`E:/Node/prefix/node_modules`

**请保持VSCode及其所有插件均为最新版本**，防止因版本问题导致`Stylelint`与`Eslint`失效。

### 结构

请根据项目自行选择以下配置文件。

- **stylelint文件夹**
	- [x] [stylelintrc.js](https://github.com/JowayYoung/vscode-lint/blob/master/stylelint/stylelintrc.js)：校验`html/css/scss/less/vue文件`
- **eslint文件夹**：校验`html/js/jsx/vue文件`
	- [x] [eslintrc.js](https://github.com/JowayYoung/vscode-lint/blob/master/eslint/eslintrc.js)：校验`html/js文件`
	- [x] [eslintrc.react.js](https://github.com/JowayYoung/vscode-lint/blob/master/eslint/eslintrc.react.js)：校验`html/jsx文件`
	- [x] [eslintrc.vue.js](https://github.com/JowayYoung/vscode-lint/blob/master/eslint/eslintrc.vue.js)：校验`html/vue文件`
- **tslint文件夹**：校验`html/ts/tsx/vue文件`(`Tslint`已弃用，使用`Eslint`代替)
	- [x] [tsconfig.json](https://github.com/JowayYoung/vscode-lint/blob/master/tslint/tsconfig.json)：配置`TypeScript`
	- [x] [tslintrc.js](https://github.com/JowayYoung/vscode-lint/blob/master/tslint/tslintrc.js)：校验`html/ts文件`
	- [x] [tslintrc.react.js](https://github.com/JowayYoung/vscode-lint/blob/master/tslint/tslintrc.react.js)：校验`html/tsx文件`
	- [x] [tslintrc.vue.js](https://github.com/JowayYoung/vscode-lint/blob/master/tslint/tslintrc.vue.js)：校验`html/vue文件`

> Stylelint

校验不同类型代码需实时修改`stylelint.customSyntax`的值。

- [x] **CSS/SCSS**：`postcss-scss`
- [x] **LESS**：`postcss-less`
- [x] **HTML/VUE**：`postcss-html`

> Eslint

校验不同类型代码需实时修改`eslint.options.overrideConfigFile`的值。

- [x] **JS**：`path/vscode-lint/eslint/eslintrc.js`
- [x] **React**：`path/vscode-lint/eslint/eslintrc.react.js`
- [x] **Vue**：`path/vscode-lint/eslint/eslintrc.vue.js`
- [x] **TS**：`path/vscode-lint/tslint/tslintrc.js`
- [x] **React TS**：`path/vscode-lint/tslint/tslintrc.react.js`
- [x] **Vue TS**：`path/vscode-lint/tslint/tslintrc.vue.js`

### 疑问

##### 更新eslint到v6+就会失效

很多同学反映`eslint 6+`在`VSCode`上失效，最高使用版本只能控制在`v5.16.0`。其实这本身就是配置问题，跟版本无关。本项目的`eslint`使用`v8`，只要配置正确就能正常使用。

上述安装行为使用了`NPM`，那么`settings.json`的`eslint.packageManager`必须配置为`npm`(小写)，但最新版本`Eslint`已默认此项，所以无需配置。若上述安装行为变成`yarn global add vscode-lint`，那么必须在`settings.json`中添加以下配置。

```json
{
	"eslint.packageManager": "yarn"
}
```

##### 首次安装Eslint并执行上述配置就会失效

首次安装`Eslint`可能会在`js/ts/jsx/tsx/vue文件`的控制台中看到以下警告。

```txt
Eslint is disabled since its execution has not been approved or denied yet. Use the light bulb menu to open the approval dialog.
```

说明`Eslint`被禁用了，虽然配置中无明确的禁用字段，但还是被禁用了。此时移步到`VSCode`右下角的工具栏，会看到`禁用图标+ESLINT`的标红按钮，单击它就会弹出一个弹框，选择`Allow Everywhere`就能启用`Eslint`的校验功能了。

### 版权

MIT © [JowayYoung](https://github.com/JowayYoung)

### 后记

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![IQ前端](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/131dd0053e87483d89518a15a5fe211f~tplv-k3u1fbpfcp-zoom-1.image)