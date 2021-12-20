const { join } = require("path");

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jquery: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:promise/recommended"
	],
	parser: "@babel/eslint-parser",
	parserOptions: {
		babelOptions: {
			cwd: join(__dirname, "..")
		},
		ecmaVersion: "latest",
		requireConfigFile: false,
		sourceType: "module"
	},
	plugins: [
		"html",
		"import",
		"promise"
	],
	root: true,
	rules: {
		/* eslint-disable quote-props */
		"eol-last": ["error", "never"],
		"handle-callback-err": ["error", "err"],
		"import/no-unresolved": ["off"], // import
		"indent": ["error", "tab"],
		"lines-between-class-members": ["error", "never"],
		"multiline-ternary": ["off"],
		"no-async-promise-executor": ["off"],
		"no-console": ["off"],
		"no-extend-native": ["off"],
		"no-new": ["off"],
		"no-proto": ["off"],
		"no-return-assign": ["off"],
		"no-sequences": ["off"],
		"no-tabs": ["off"],
		"no-unreachable": ["off"],
		"no-useless-constructor": ["off"],
		"no-var": ["error"],
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "double"],
		"semi": ["error", "always"],
		"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
		"space-before-function-paren": ["error", "never"]
		/* eslint-enable quote-props */
	}
};