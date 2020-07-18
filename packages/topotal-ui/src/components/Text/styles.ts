import { useContext } from 'react'
import { StyleSheet, TextStyle } from 'react-native'
import { TextType, ThemeContext } from '~/theme'

type Props = {
  type: TextType
}

type Styles = {
  wrapper: TextStyle
}

export const useStyles = ({ type }: Props) => {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      color: theme.color.sumi,
      margin: 0,
      ...theme.text.type[type],
    },
  })

  return {
    styles,
  }
}
