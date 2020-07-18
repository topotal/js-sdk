import { useContext } from 'react'
import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { ThemeContext } from '~/theme'

type Styles = {
  border: ViewStyle
  text: TextStyle
}

export const useStyles = () => {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create<Styles>({
    border: {
      flex: 1,
      height: 1,
      backgroundColor: theme.color.kemuri,
    },
    text: {
      color: theme.color.katana,
    },
  })

  return {
    styles,
  }
}
