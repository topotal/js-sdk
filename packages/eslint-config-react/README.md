# `@topotal/eslint-config-react`

[![npm version](https://badge.fury.io/js/%40topotal%2Feslint-config-react.svg)](https://badge.fury.io/js/%40topotal%2Feslint-config-react)

This is a common ESlint setting for React used within Topotal

## Installation

```
yarn add -D @topotal/eslint-config-react
```

If your npm version is lower than v6, please also install the peerDependencies package.

```
yarn add -D eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

### Legacy ESLint Configuration (ESLint v8 and below)

Add `@topotal/eslint-config-react` to `eslintrc` extends.

```json
{
  "extends": [
    "@topotal/eslint-config-react"
  ]
}
```

### Flat ESLint Configuration (ESLint v9 and above)

In your `eslint.config.js`:

```js
const topotalReactConfig = require('@topotal/eslint-config-react/flat');

module.exports = [
  topotalReactConfig,
  // other configs...
];
```
