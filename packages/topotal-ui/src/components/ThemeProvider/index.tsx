import React from 'react'
import { defaultTheme, Theme, ThemeContext } from '../../theme'

interface Props {
  theme?: Theme
  children?: React.ReactNode
}

export const ThemeProvider = ({
  theme = defaultTheme,
  children,
}: Props): JSX.Element => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
