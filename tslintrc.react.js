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
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 2021,
		project: "./tsconfig.json",
		sourceType: "module"
	},
	plugins: [
		"html",
		"react",
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
		"jsx-quotes": [
			"error",
			"prefer-double"
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
		"sort-keys": [
			"error",
			"asc",
			{ caseSensitive: false, natural: true }
		],
		"space-before-function-paren": [
			"error",
			"never"
		]
	},
	settings: {
		react: { version: "detect" }
	}
};