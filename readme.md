# VSCode Lint <img src="https://img.shields.io/badge/vscode--lint-集成Stylelint和Eslint的VSCode配置工具-66f.svg">

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/img-master)
[![version](https://img.shields.io/badge/version-0.0.1-f66.svg)](https://github.com/JowayYoung/img-master)
[![node](https://img.shields.io/badge/node-%3E%3D%2012.0.0-3c9.svg)](https://github.com/JowayYoung/img-master)
[![npm](https://img.shields.io/badge/npm-%3E%3D%206.9.0-3c9.svg)](https://github.com/JowayYoung/img-master)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/img-master)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/img-master)
[![coverage](https://img.shields.io/badge/coverage-100%25-09f.svg)](https://github.com/JowayYoung/img-master)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/img-master)

> `vscode-lint`是一个集成**Stylelint**和**Eslint**的VSCode配置工具，提供**css/sass/scss/less**、**js/ts**、**react**和**vue**的代码校验功能

**vscode-lint**用于`规范团队代码风格`和`校验团队代码语法`，增加整个项目的可维护性和接入性，减少无用代码和混乱码的产生。它的根本目的是一次安装全局使用，统一项目的`代码风格规范`和`代码语法校验`，养成规范的码字习惯，减少不必要的错误和隐患。

在此标注两个关键字，用于以下叙述。

- `Eslint`：表示`VSCode`里的插件
- `eslint`：表示`NPM`里的模块

### 安装

`npm i -g vscode-lint`

> 安装失败

- 切换**NPM镜像**为淘宝镜像：`npm config set registry https://registry.npm.taobao.org/`
- 重新执行安装命令：`npm i -g vscode-lint`

### 配置

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint`和`Eslint`，安装完成后重启`VSCode`
- 选择`文件 → 首选项 → 设置`，`设置`里可选`用户`和`工作区`
	- 用户：配置生效后会作用于全局项目(`若大部分项目都是单一的React应用或Vue应用推荐使用全局配置`)
	- 工作区：配置生效后只会作用于当前打开项目
- 点击`设置`右上角的中间图标`打开设置(json)`，对应文件是`settings.json`
- 插入以下配置：若在`用户`选项下插入以下配置，遇到别的项目需要覆盖配置时在`工作区`选项下插入`eslint.options.configFile`即可

```json
{
    "css.validate": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
    "eslint.nodePath": "path/vscode-lint/node_modules",
    "eslint.options": {
        "configFile": "path/vscode-lint/eslintrc.js"
    },
    "less.validate": false,
    "scss.validate": false,
    "stylelint.configBasedir": "path/vscode-lint",
    "stylelint.configOverrides": {
        "extends": "stylelint-config-standard",
        "rules": {
            "at-rule-empty-line-before": "never",
            "at-rule-no-unknown": [
                true,
                {
                    "ignoreAtRules": [
                        "content",
                        "each",
                        "error",
                        "extend",
                        "for",
                        "function",
                        "if",
                        "include",
                        "mixin",
                        "return",
                        "while"
                    ]
                }
            ],
            "color-hex-case": "lower",
            "comment-empty-line-before": "never",
            "declaration-colon-newline-after": null,
            "declaration-empty-line-before": "never",
            "function-linear-gradient-no-nonstandard-direction": null,
            "indentation": "tab",
            "no-descending-specificity": null,
            "no-missing-end-of-source-newline": null,
            "no-empty-source": null,
            "number-leading-zero": "never",
            "rule-empty-line-before": "never"
        }
    }
}
```

以上配置的`path`为`vscode-lint`模块所在的**NPM根目录**，可执行`npm config get prefix`获取**NPM根目录**并替换`path`。

- 假设执行`npm config get prefix`获取的**NPM根目录**为`E:/Node/prefix/node_modules`
- 将上述配置的`path`替换为`E:/Node/prefix/node_modules`

### 疑问

##### 更新eslint到v6+就会失效

很多同学反映`eslint 6+`在`VSCode`上失效，最高使用版本只能控制在`v5.16.0`。其实这本身就是配置问题，跟版本无关。本项目的`eslint`使用`v7`，只要配置正确就能正常使用。

上述安装行为使用了`NPM`，那么`settings.json`的`eslint.packageManager`必须配置为`npm`(小写)，但最新版本`Eslint`已默认此项，所以无需配置。若上述安装行为变成`yarn global add vscode-lint`，那么必须在`settings.json`里添加以下配置。

```json
{
    "eslint.packageManager": "yarn"
}
```

##### 首次安装Eslint并执行上述配置就会失效

首次安装`Eslint`可能会在`js/ts/jsx/tsx/vue文件`里看到以下警告。

```txt
Eslint is disabled since its execution has not been approved or denied yet. Use the light bulb menu to open the approval dialog.
```

说明`Eslint`被禁用了，虽然配置里无明确的禁用字段，但还是被禁用了。此时移步到`VSCode`右下角的工具栏，会看到`禁用图标+ESLINT`的标红按钮，单击它就会弹出一个弹框，选择`Allow Everywhere`就能启用`Eslint`的校验功能了。

### 组成

> 请自行根据项目选择以下配置文件

- **Stylelint**：用于校验`css/sass/scss/less`，无法使用文件导入的形式，故将配置书写进`settings.json`
- **Eslint**：用于校验`js/jsx/vue`
	- JS配置文件：`eslintrc.js`
	- React配置文件：`eslintrc.react.js`
	- Vue配置文件：`eslintrc.vue.js`
- **Tslint**：用于校验`ts/tsx/vue`(`Tslint`已被弃用，使用`Eslint`代替)
	- JS配置文件：`tslint.js`
	- React配置文件：`tslint.react.js`
	- Vue配置文件：`tslint.vue.js`

### 版权

MIT © [Joway Young](https://github.com/JowayYoung)

### 后记

若觉得`vscode-lint`对你有帮助，可在[Issue](https://github.com/JowayYoung/vscode-lint/issues)上`提出你的宝贵建议`，笔者会认真阅读并整合你的建议。喜欢`vscode-lint`的请给一个[Star](https://github.com/JowayYoung/vscode-lint)，或[Fork](https://github.com/JowayYoung/vscode-lint)本项目到自己的`Github`上，根据自身需求定制功能。

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![](https://static.yangzw.vip/frontend/account/IQ前端公众号.jpg)