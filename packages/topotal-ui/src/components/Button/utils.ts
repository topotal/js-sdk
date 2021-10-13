import { TextType, ThemeColor as ThemeColor } from '../../theme'
import { Color, DynamicGeometry, DynamicMaterial, Size, Variant } from './types'

export const getTypeBySize = (size: Size): TextType => {
  switch (size) {
    case 'large': return 'display1'
    case 'medium': return 'body'
    case 'small': return 'small_body'
  }
}

export const getDynamicGeometry = (size: Size): DynamicGeometry => {
  const textType = getTypeBySize(size)
  switch (size) {
    case 'small':
      return {
        height: 24,
        sidePadding: 8,
        iconSize: 13,
        textType,
        fontWeight: 'normal',
      }
    case 'medium':
      return {
        height: 32,
        sidePadding: 24,
        iconSize: 14,
        textType,
        fontWeight: 'bold',
      }
    case 'large':
      return {
        height: 40,
        sidePadding: 40,
        iconSize: 16,
        textType,
        fontWeight: 'bold',
      }
  }
}

export const getHasColorMaterial = (
  color: Exclude<Color, 'basic'>,
  variant: Variant,
  disabled: boolean,
  loading: boolean,
  hovering: boolean,
): DynamicMaterial => {
  const opacity = disabled || loading ? 0.5 : 1
  const lightColor = `${color}Light` as keyof ThemeColor
  const darkColor = `${color}Dark` as keyof ThemeColor

  switch (variant) {
    case 'outline':
      return {
        opacity,
        backgroundColor: hovering ? lightColor : 'transparent',
        borderColor: color,
        fontColor: color,
      }
    case 'text':
      return {
        opacity,
        backgroundColor: hovering ? lightColor : 'transparent',
        borderColor: 'transparent',
        fontColor: color,
      }
    case 'contain':
      return {
        opacity,
        backgroundColor: hovering ? darkColor : color,
        borderColor: 'transparent',
        fontColor: 'primaryTextLight',
      }
  }
}

const getBasicColorMaterial = (
  variant: Variant,
  disabled: boolean,
  loading: boolean,
  hovering: boolean,
): DynamicMaterial => {
  const opacity = disabled || loading ? 0.5 : 1

  switch (variant) {
    case 'outline':
      return {
        opacity,
        backgroundColor: hovering ? 'secandaryTextLight' : 'transparent',
        borderColor: 'borderLight',
        fontColor: 'primaryTextDark',
      }
    case 'text':
      return {
        opacity,
        backgroundColor: hovering ? 'secandaryTextLight' : 'transparent',
        borderColor: 'transparent',
        fontColor: 'primaryTextDark',
      }
    case 'contain':
      return {
        opacity,
        backgroundColor: hovering ? 'secandaryTextDark' : 'cancelLight',
        borderColor: 'transparent',
        fontColor: 'primaryTextDark',
      }
  }
}

export const getDynamicMaterial = (
  color: Color,
  variant: Variant,
  disabled: boolean,
  loading: boolean,
  hovering: boolean,
): DynamicMaterial => {
  switch (color) {
    case 'basic':
      return getBasicColorMaterial(
        variant,
        disabled,
        loading,
        hovering
      )
    default:
      return getHasColorMaterial(
        color,
        variant,
        disabled,
        loading,
        hovering
      )
  }
}
