import { useContext } from 'react'
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeColor, ThemeContext } from '../../theme'

interface Styles {
  wrapper: ViewStyle
  dummyText: TextStyle
  outline: ViewStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

interface Props {
  isFocused: boolean
  multiline: boolean
  error: boolean
}

const getBorderColor = (isFocused: boolean, error: boolean): keyof ThemeColor => {
  if (error) {
    return 'error'
  }

  if (isFocused) {
    return 'primary'
  }

  return 'borderLight'
}

export const useStyles = ({
  isFocused,
  multiline,
  error,
}: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(isFocused, error)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: multiline ? 80 : 40,
      maxHeight: multiline ? 240 : 40,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
      ...(Platform.OS === 'web' ? {
        resize: multiline ? 'vertical' : 'none',
      } : {}),
    },
    outline: {
      position: 'absolute',
      top: -3,
      left: -3,
      right: -3,
      bottom: -3,
      opacity: isFocused ? 1 : 0,
      borderRadius: theme.radius.level1 + 2,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: theme.color.primaryLight,
    },
    dummyText: {
      width: '100%',
      height: '100%',
      opacity: 0,
      padding: 16,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: 40,
    },
    placeholder: {
      lineHeight: 40,
      paddingVertical: 0,
      paddingHorizontal: 16,
      color: theme.color.secandaryTextDark,
    },
    input: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      padding: 16,
      color: theme.color.primaryTextDark,
      ...theme.text.type.body,
      ...(Platform.OS === 'web' ? {
        outlineWidth: 0,
      } : {}),
    },
  })

  return {
    styles,
  }
}
