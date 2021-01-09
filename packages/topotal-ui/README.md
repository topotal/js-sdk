# `@topotal/topotal-ui`

This is the component county of the UI that we developed at topotal

## Usage

Use `ThemeProvider` in the root of your application

```
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@topotal/topotal-ui'
import App from '~/App'

ReactROM.render(
  (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
  document.getElementById('app'),
)
```
