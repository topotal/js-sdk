import { useContext } from 'react'
import { Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { getBorderColor } from './utils'

interface Styles {
  wrapper: ViewStyle
  dummyText: TextStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

interface Props {
  isFocused: boolean
  error: boolean
}

export const useStyles = ({ isFocused, error }: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(isFocused, error)
  const lineHeight = 24
  const paddingVertical = (40 - lineHeight) / 2

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      minHeight: 80,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
    },
    dummyText: {
      width: '100%',
      height: '100%',
      opacity: 0,
      paddingVertical,
      paddingHorizontal: 16,
      lineHeight,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingVertical,
      paddingHorizontal: 16,
    },
    placeholder: {
      lineHeight,
      color: theme.color.secandaryTextDark,
    },
    input: {
      ...theme.text.type.body,
      position: 'absolute',
      width: '100%',
      height: '100%',
      paddingVertical,
      paddingHorizontal: 16,
      minHeight: lineHeight,
      lineHeight,
      color: theme.color.primaryTextDark,
      ...(Platform.OS === 'web' ? {
        boxShadow: '0px transparent',
        outlineWidth: 0,
        outlineOffset: 0,
        outlineStyle: 'none',
      } : {}),
    },
  })

  return {
    styles,
  }
}
