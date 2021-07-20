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
        sidePadding: 24,
        iconSize: 13,
        textType,
      }
    case 'medium':
      return {
        height: 32,
        sidePadding: 40,
        iconSize: 14,
        textType,
      }
    case 'large':
      return {
        height: 40,
        sidePadding: 48,
        iconSize: 16,
        textType,
      }
  }
}

export const getDynamicMaterial = (
  color: Color,
  variant: Variant,
  disabled: boolean,
  loading: boolean,
  hovered: boolean,
): DynamicMaterial => {
  const opacity = disabled || loading ? 0.5 : 1
  const lightColor = `${color}Light` as keyof ThemeColor
  const darkColor = `${color}Dark` as keyof ThemeColor

  switch (variant) {
    case 'outline':
      return {
        opacity,
        backgroundColor: hovered ? lightColor : 'transparent',
        borderColor: color,
        fontColor: color,
      }
    case 'text':
      return {
        opacity,
        backgroundColor: hovered ? lightColor : 'transparent',
        borderColor: 'transparent',
        fontColor: color,
      }
    case 'contain':
      return {
        opacity,
        backgroundColor: hovered ? darkColor : color,
        borderColor: 'transparent',
        fontColor: 'primaryTextLight',
      }
  }
}
