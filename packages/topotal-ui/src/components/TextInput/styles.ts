import { useContext } from 'react'
import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { getBorderColor, getGeometryStyles } from './utils'
import { Size } from '.'

interface Styles {
  wrapper: ViewStyle
  iconWrapper: ViewStyle
  icon: ImageStyle
  placeholderWrapper: ViewStyle
  placeholder: TextStyle
  input: TextStyle
}

interface Props {
  isFocused: boolean
  error: boolean
  size: Size
  startIconName?: string
}

export const useStyles = ({
  isFocused,
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
      minHeight: height,
      maxHeight: height,
    },
    iconWrapper: {
      position: 'absolute',
      zIndex: 1,
      top: 1,
      left: 1,
      bottom: 1,
      width: height - 2,
      height: height - 2,
      borderRightWidth: 1,
      borderColor: theme.color.borderLight,
    },
    icon: {
      width: height / 2,
      height: height / 2,
      tintColor: theme.color.secandaryTextDark,
    },
    placeholderWrapper: {
      position: 'absolute',
      top: 1,
      left: 1,
      right: 1,
      bottom: 1,
      paddingVertical,
      paddingLeft: startIconName ? paddingLeft + height : paddingLeft,
      paddingRight,
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
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
      paddingVertical,
      paddingLeft: startIconName ? paddingLeft + height : paddingLeft,
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
