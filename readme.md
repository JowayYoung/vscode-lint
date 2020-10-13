# VSCode Lint

**vscode-lint**是一个集成**stylelint**和**eslint**的配置工具，用于`规范团队代码风格`和`校验团队代码语法`，增加整个项目的可维护性和接入性，减少无用代码和混乱码的产生。它的根本目的是统一项目的代码风格规范和代码语法校验，养成规范的码字习惯，减少不必要的错误和隐患。

### 使用

> `vscode-lint`是一个标准化的NPM模块，需全局安装和结合VSCode使用，以下配置以`Windows系统`为例，`Mac系统`配置同理

##### 安装

`npm i vscode-lint`

##### 配置

- 打开`VSCode`
- 选择左边`工具栏`的`插件`，搜索并安装`Stylelint`和`Eslint`，安装完成后重启`VSCode`
- 选择`文件 → 首选项 → 设置`，`设置`里可选`用户`和`工作区`
	- 用户：配置生效后会作用于全局项目(`如果大部分项目都是单一的React应用或Vue应用推荐使用全局配置`)
	- 工作区：配置生效后只会作用于当前打开的项目
- 点击`设置`右上角的中间图标`打开设置(json)`
- 插入以下配置：如果在`用户`选项下插入以下配置，遇到别的项目需要覆盖配置时在`工作区`选项下插入`eslint.options-configFile`即可

```json
{
    "eslint.nodePath": "path/vscode-lint/node_modules",
    "eslint.options": {
        "configFile": "path/vscode-lint/.eslintrc.json",
        "plugins": [
            "html"
        ]
    },
    "eslint.validate": [
        "html",
        "javascript",
        "javascriptreact",
        "vue"
    ],
    "stylelint.config": {
        "configFile": "path/vscode-lint/.stylelintrc.json"
    }
}
```

以上配置的`path`为`vscode-lint`模块所在的npm根目录，可执行`npm config get prefix`获取**npm根目录**并替换`path`。

### 组成

> 请自行根据项目选择以下配置文件

- **stylelint**：用于校验`css`、`sass`、`scss`、`less`
	- CSS配置文件：`.stylelintrc.json`
	- Sass配置文件：`同上`
	- Scss配置文件：`同上`
	- Less配置文件：`同上`
- **eslint**：用于校验`js`、`react`、`vue`
	- JS配置文件：`.eslintrc.json`
	- React配置文件：`.eslintrc-react.json`
	- Vue配置文件：`.eslintrc-vue.json`
