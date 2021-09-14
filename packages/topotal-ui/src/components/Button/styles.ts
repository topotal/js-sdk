import { useContext } from 'react'
import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { Color, Size, Variant } from './types'
import { getDynamicGeometry, getDynamicMaterial } from './utils'

interface Props {
  size: Size
  color: Color
  variant: Variant
  disabled: boolean
  loading: boolean
  hovering: boolean
}

interface Styles {
  wrapper: ViewStyle
  container: ViewStyle
  indicator: ViewStyle
  title: TextStyle
  icon: ImageStyle
}

export const useStyles = ({
  size,
  color,
  variant,
  disabled,
  loading,
  hovering,
}: Props) => {
  const theme = useContext(ThemeContext)
  const {
    height,
    sidePadding,
    iconSize,
    textType,
  } = getDynamicGeometry(size)
  const {
    fontColor,
    backgroundColor,
    borderColor,
    opacity,
  } = getDynamicMaterial(
    color,
    variant,
    disabled,
    loading,
    hovering,
  )

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      borderWidth: 1,
      borderRadius: theme.radius.level1,
      backgroundColor: theme.color[backgroundColor],
      borderColor: theme.color[borderColor],
      overflow: 'hidden',
      opacity,
      ...(Platform.OS === 'web' ? {
        boxShadow: '0px transparent',
        outlineWidth: 0,
        outlineOffset: 0,
        outlineStyle: 'none',
      } : {}) as ViewStyle,
    },
    container: {
      height,
      paddingHorizontal: sidePadding,
    },
    indicator: {
      transform: [{
        scale: size === 'small' ? 0.7 : 1,
      }],
    },
    title: {
      textAlign: 'center',
      lineHeight: height,
      color: theme.color[fontColor],
    },
    icon: {
      width: iconSize,
      height: iconSize,
      tintColor: theme.color[fontColor],
    },
  })

  return {
    styles,
    indicatorColor: theme.color[fontColor],
    textType,
  }
}
