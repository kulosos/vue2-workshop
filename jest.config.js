module.exports = {
  globals: {
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue', 'node'],
    transform: {
      '^.+\\.vue$': '@vue/vue2-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    'ts-jest': {
      diagnostics: false,
    }
  },
  preset: '@vue/cli-plugin-unit-jest/presets/typescript',
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
  ],
  testMatch: ['**/?(*.)+(spec|test|cdc-test).ts?(x)'],
}
