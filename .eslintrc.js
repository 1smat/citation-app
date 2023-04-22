module.exports = {
	root: true,
	env: {
	  node: true
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
	  parser: '@typescript-eslint/parser',
	  sourceType: 'module',
	  ecmaVersion: 2020
	},
	extends: [
	  'plugin:vue/vue3-recommended',
	  'plugin:@typescript-eslint/recommended',
	  'prettier'
	],
	plugins: ['prettier'],
	rules: {
	  'prettier/prettier': 'error',
	  '@typescript-eslint/explicit-module-boundary-types': 'off'
	}
  }
  