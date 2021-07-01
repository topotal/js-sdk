import { useContext } from 'react'
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { Color, Size, Variant } from './types'
import { getDynamicGeometry, getDynamicMaterial } from './utils'

interface Props {
  size: Size
  color: Color
  variant: Variant
  disabled: boolean
  loading: boolean
  hovered: boolean
}

interface Styles {
  wrapper: ViewStyle
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
  hovered,
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
    hovered,
  )

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      borderWidth: 1,
      borderRadius: theme.radius.level1,
      height,
      paddingHorizontal: sidePadding,
      backgroundColor: theme.color[backgroundColor],
      borderColor: theme.color[borderColor],
      overflow: 'hidden',
      opacity,
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
