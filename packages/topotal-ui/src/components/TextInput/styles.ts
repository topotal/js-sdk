import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '~/theme'

type Styles = {
  wrapper: ViewStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

type Props = {
  isFocused: boolean
}

export const useStyles = ({ isFocused }: Props) => {
  const theme = useContext(ThemeContext)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      height: 48,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 48,
    },
    placeholder: {
      lineHeight: 48,
      paddingVertical: 0,
      paddingHorizontal: 16,
      color: theme.color.kemuri,
    },
    input: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 48,
      paddingVertical: 0,
      paddingHorizontal: 16,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: isFocused ? theme.color.primary : 'transparent',
      backgroundColor: theme.color.kasumi,
      borderRadius: theme.radius.level1,
      color: theme.color.sumi,
      ...theme.text.type.body,
    },
  })

  return {
    styles,
  }
}
