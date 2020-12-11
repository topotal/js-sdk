import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native'
import { ThemeContext, ThemeColor } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  dummyText: TextStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

type Props = {
  isFocused: boolean
  multiline: boolean
  error: boolean
}

const getBorderColor = (error: boolean): keyof ThemeColor => {
  if (error) {
    return 'error'
  }

  return 'borderLight'
}

export const useStyles = ({
  isFocused,
  multiline,
  error,
}: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(error)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: multiline ? 80 : 40,
      maxHeight: multiline ? 240 : 40,
      overflow: 'hidden',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
      ...(Platform.OS === 'web' ? {
        resize: multiline ? 'vertical' : 'none',
      } : {}),
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
