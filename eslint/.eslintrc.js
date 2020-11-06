module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	extends: [
		"standard"
	],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module"
	},
	plugins: [
		"html"
	],
	root: true,
	rules: {
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
	}
};