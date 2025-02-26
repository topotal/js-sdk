const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');

module.exports = {
  files: ['**/*.{jsx,tsx}'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  plugins: {
    'react': reactPlugin,
    'react-hooks': reactHooksPlugin,
  },
  rules: {
    'react/jsx-quotes': 0,
    'jsx-quotes': 'error',
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],
    'react-hooks/exhaustive-deps': ['error', {
      'additionalHooks': '(useAsync|useAsyncFn)'
    }],
    'react/jsx-key': ['error'],
    'react/jsx-newline': ['error', { 'prevent': true }],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  }
};
