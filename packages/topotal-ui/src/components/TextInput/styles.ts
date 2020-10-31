import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native'
import { ThemeContext, ThemeColor } from '../../theme'

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

const getBorderColor = (error: boolean): keyof ThemeColor => {
  if (error) {
    return 'error'
  }

  return 'borderLight'
}

export const useStyles = ({ isFocused, error = false }: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(error)

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
      color: theme.color.secandaryTextDark,
    },
    input: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
      color: theme.color.primaryTextDark,
      ...theme.text.type.body,
      ...(Platform.OS === 'web' ? { outlineWidth: 0 } : {}),
    },
  })

  return {
    styles,
  }
}
