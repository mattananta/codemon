/* eslint-env node */
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    rules: {
      'react/display-name': 'off',
      eqeqeq: "off",
			"no-unused-vars": "error",
			"prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
  },
]);
