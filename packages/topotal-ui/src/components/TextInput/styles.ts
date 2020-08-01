import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native'
import { ThemeContext, Color } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

type Props = {
  isFocused: boolean
  error?: boolean
}

const getBorderColor = (isFocused: boolean, error: boolean): keyof Color => {
  if (isFocused) {
    return 'primary'
  }

  if (error) {
    return 'negative'
  }

  return 'transparent'
}

export const useStyles = ({ isFocused, error = false }: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(isFocused, error)

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
      borderColor: theme.color[borderColor],
      backgroundColor: theme.color.kasumi,
      borderRadius: theme.radius.level1,
      color: theme.color.sumi,
      ...theme.text.type.body,
      ...(Platform.OS === 'web' ? { outlineWidth: 0 } : {}),
    },
  })

  return {
    styles,
  }
}
