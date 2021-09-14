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
  inputWrapper: ViewStyle
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
    paddingRight,
    paddingLeft,
  } = getGeometryStyles(size, startIconName)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      minHeight: height,
      maxHeight: height,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: theme.color[borderColor],
      backgroundColor: isFocused ? theme.color.transparent : theme.color.background,
      borderRadius: theme.radius.level1,
    },
    iconWrapper: {
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
    inputWrapper: {
      flex: 1,
      height: height - 2,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      ...theme.text.type.body,
      flex: 1,
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
    placeholderWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      paddingLeft,
      paddingRight,
    },
    placeholder: {
      lineHeight,
      color: theme.color.secandaryTextDark,
    },
  })

  return {
    styles,
  }
}
