# `@topotal/topotal-ui`

[![npm version](https://badge.fury.io/js/%40topotal%2Ftopotal-ui.svg)](https://badge.fury.io/js/%40topotal%2Ftopotal-ui)

This is the component county of the UI that we developed at topotal

## Installation

```
yarn add @topotal/topotal-ui
```

## Usage

Use `ThemeProvider` in the root of your application

```jsx
import ReactDOM from 'react-dom'
import { ThemeProvider, Button } from '@topotal/topotal-ui'

ReactROM.render(
  (
    <ThemeProvider>
      <Button color="primary" />
    </ThemeProvider>
  ),
  document.getElementById('app'),
)
```
