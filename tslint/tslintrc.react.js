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
		createDefaultProgram: true,
		ecmaFeatures: { jsx: true },
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		sourceType: "module",
		tsconfigRootDir: __dirname
	},
	plugins: [
		"html",
		"react",
		"@typescript-eslint"
	],
	root: true,
	rules: {
		/* eslint-disable quote-props */
		"@typescript-eslint/indent": ["error", "tab"], // ts
		"@typescript-eslint/no-inferrable-types": ["off"], // ts
		"@typescript-eslint/quotes": ["error", "double"], // ts
		"@typescript-eslint/semi": ["error", "always"], // ts
		"@typescript-eslint/space-before-function-paren": ["error", "never"], // ts
		"eol-last": ["error", "never"],
		"handle-callback-err": ["error", "err"],
		"indent": ["error", "tab"],
		"jsx-quotes": ["error", "prefer-double"], // react
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
		"space-before-function-paren": ["error", "never"],
		"switch-colon-spacing": ["error"]
		/* eslint-enable quote-props */
	}
};