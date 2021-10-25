module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	extends: [
		"standard-with-typescript",
		"plugin:vue/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		ecmaVersion: 2021,
		extraFileExtensions: [".vue"],
		parser: "@typescript-eslint/parser",
		project: "./tsconfig.json",
		sourceType: "module"
	},
	plugins: [
		"html",
		"vue",
		"@typescript-eslint"
	],
	root: true,
	rules: {
		"@typescript-eslint/indent": [
			"error",
			"tab"
		],
		"@typescript-eslint/quotes": [
			"error",
			"double"
		],
		"@typescript-eslint/semi": [
			"error",
			"always"
		],
		"@typescript-eslint/space-before-function-paren": [
			"error",
			"never"
		],
		"eol-last": [
			"error",
			"never"
		],
		"handle-callback-err": [
			"error",
			"err"
		],
		indent: [
			"error",
			"tab"
		],
		"lines-between-class-members": [
			"error",
			"never"
		],
		"multiline-ternary": [
			"off"
		],
		"no-async-promise-executor": [
			"off"
		],
		"no-console": [
			"off"
		],
		"no-extend-native": [
			"off"
		],
		"no-new": [
			"off"
		],
		"no-proto": [
			"off"
		],
		"no-return-assign": [
			"off"
		],
		"no-sequences": [
			"off"
		],
		"no-tabs": [
			"off"
		],
		"no-unreachable": [
			"off"
		],
		"no-useless-constructor": [
			"off"
		],
		"no-var": [
			"error"
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"operator-linebreak": [
			"error",
			"before"
		],
		quotes: [
			"error",
			"double"
		],
		semi: [
			"error",
			"always"
		],
		"space-before-function-paren": [
			"error",
			"never"
		],
		"vue/component-definition-name-casing": [
			"error",
			"kebab-case"
		],
		"vue/component-tags-order": [
			"error",
			{ order: ["template", "style", "script"] }
		],
		"vue/html-indent": [
			"error",
			"tab"
		],
		"vue/html-self-closing": [
			"off"
		],
		"vue/max-attributes-per-line": [
			"off"
		],
		"vue/mustache-interpolation-spacing": [
			"error",
			"never"
		],
		"vue/name-property-casing": [
			"error",
			"kebab-case"
		],
		"vue/singleline-html-element-content-newline": [
			"off"
		]
	}
};