# `@topotal/eslint-config-typescript`

[![npm version](https://badge.fury.io/js/%40topotal%2Feslint-config-typescript.svg)](https://badge.fury.io/js/%40topotal%2Feslint-config-typescript)

This is a common ESlint setting for TypeScript used within Topotal

## Installation

```
yarn add -D @topotal/eslint-config-typescript
```

If your npm version is lower than v6, please also install the peerDependencies package.

```
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

## Usage

Add `@topotal/eslunt-config-typescript` to `eslintrc` extends.

```json
{
  "extends": [
    "@topotal/exlint-config-typescript"
  ]
}
```
