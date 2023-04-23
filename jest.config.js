module.exports = {
	testEnvironment: 'jsdom',
	moduleFileExtensions: ['js', 'json', 'vue'],
	transform: {
		'^.+\\.js?$': 'babel-jest',
		'^.+\\.ts$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
} 