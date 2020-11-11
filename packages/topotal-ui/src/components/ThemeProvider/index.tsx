import React from 'react'
import { defaultTheme, Theme, ThemeContext } from '../../theme'

type Props = {
  theme?: Theme
}

const ThemeProvider: React.FC<Props> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
