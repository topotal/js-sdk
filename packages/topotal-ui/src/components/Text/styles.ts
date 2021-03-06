import { useContext } from 'react'
import { StyleSheet, TextStyle } from 'react-native'
import { FontWeight, TextType, ThemeContext } from '../../theme'

interface Props {
  type: TextType
  weight: FontWeight
}

interface Styles {
  wrapper: TextStyle
}

export const useStyles = ({ type, weight }: Props) => {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      color: theme.color.primaryTextDark,
      margin: 0,
      ...theme.text.type[type],
      fontWeight: weight,
    },
  })

  return {
    styles,
  }
}
