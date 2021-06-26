import { useContext } from 'react'
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeColor, ThemeContext } from '../../theme'

interface Styles {
  wrapper: ViewStyle
  dummyText: TextStyle
  outline: ViewStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  inputWrapper: ViewStyle
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
  const height = 40
  const lineHeight = 24
  const paddingVertical = (height - lineHeight) / 2
  const paddingHorizontal = 16

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: multiline ? 80 : height,
      maxHeight: multiline ? 240 : height,
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
      paddingVertical,
      paddingHorizontal,
      lineHeight,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingVertical,
      paddingHorizontal,
    },
    placeholder: {
      lineHeight,
      color: theme.color.secandaryTextDark,
    },
    inputWrapper: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    input: {
      ...theme.text.type.body,
      width: '100%',
      height: '100%',
      paddingVertical,
      paddingHorizontal,
      minHeight: lineHeight,
      lineHeight,
      color: theme.color.primaryTextDark,
      ...(Platform.OS === 'web' ? {
        outlineWidth: 0,
      } : {}),
    },
  })

  return {
    styles,
  }
}
