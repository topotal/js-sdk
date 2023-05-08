import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'

interface Styles {
  border: ViewStyle
  text: TextStyle
}

export const useStyles = () => {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create<Styles>({
    border: {
      flex: 1,
      height: 1,
      backgroundColor: theme.color.borderLight,
    },
    text: {
      color: theme.color.cancel,
    },
  })

  return {
    styles,
  }
}
