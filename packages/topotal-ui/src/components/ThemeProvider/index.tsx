import React from 'react'
import { defaultTheme, Theme, ThemeContext } from '../../theme'

interface Props {
  theme?: Theme
  testId?: string
}

export const ThemeProvider: React.FC<Props> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
