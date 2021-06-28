import { useContext } from 'react'
import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { getBorderColor, getGeometryStyles } from './utils'
import { Size } from '.'

interface Styles {
  wrapper: ViewStyle
  iconWrapper: ViewStyle
  icon: ImageStyle
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
  size: Size
  startIconName?: string
}

export const useStyles = ({
  isFocused,
  multiline,
  error,
  size,
  startIconName,
}: Props) => {
  const theme = useContext(ThemeContext)
  const borderColor = getBorderColor(isFocused, error)
  const {
    height,
    lineHeight,
    paddingVertical,
    paddingRight,
    paddingLeft,
  } = getGeometryStyles(size, startIconName)

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
    iconWrapper: {
      position: 'absolute',
      top: 0,
      left: 16,
      width: height - 2,
      height: height - 2,
    },
    icon: {
      width: height / 2,
      height: height / 2,
      tintColor: theme.color.secandaryTextDark,
    },
    dummyText: {
      width: '100%',
      height: '100%',
      opacity: 0,
      paddingVertical,
      paddingLeft,
      paddingRight,
      lineHeight,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingVertical,
      paddingLeft,
      paddingRight,
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
      paddingLeft,
      paddingRight,
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
