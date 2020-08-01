import { TextType, Color as ThemeColor } from '~/theme'
import { Size, Color, Variant, DynamicMaterial, DynamicGeometry } from './types'

export const getTypeBySize = (size: Size): TextType => {
  switch (size) {
    case 'large':
      return 'display1'
    case 'medium':
      return 'body'
    case 'small':
      return 'small_body'
  }
}

export const getBaseColor = (color: Color): keyof ThemeColor => {
  switch (color) {
    case 'secondary':
      return 'secondary'
    case 'negative':
      return 'negative'
    case 'cancel':
      return 'katana'
    case 'light':
      return 'yuki'
    case 'primary':
      return 'primary'
  }
}

export const getTitleColor = (
  color: Color,
  variant: Variant,
): keyof ThemeColor => {
  const isContain = variant === 'contain'

  switch (color) {
    case 'secondary':
      return isContain ? 'yuki' : 'secondary'
    case 'negative':
      return isContain ? 'yuki' : 'negative'
    case 'cancel':
      return isContain ? 'yuki' : 'katana'
    case 'light':
      return isContain ? 'primary' : 'yuki'
    case 'primary':
      return isContain ? 'yuki' : 'primary'
  }
}

export const getDynamicGeometry = (size: Size): DynamicGeometry => {
  const textType = getTypeBySize(size)
  switch (size) {
    case 'small':
      return {
        height: 24,
        sidePadding: 24,
        textType,
      }
    case 'medium':
      return {
        height: 40,
        sidePadding: 40,
        textType,
      }
    case 'large':
      return {
        height: 48,
        sidePadding: 48,
        textType,
      }
  }
}

export const getDynamicMaterial = (
  color: Color,
  variant: Variant,
  disabled: boolean,
  loading: boolean,
): DynamicMaterial => {
  const baseColor = getBaseColor(color)
  const opacity = disabled || loading ? 0.5 : 1
  const fontColor = getTitleColor(color, variant)

  switch (variant) {
    case 'outline':
      return {
        opacity,
        backgroundColor: 'transparent',
        borderColor: baseColor,
        fontColor,
      }
    case 'text':
      return {
        opacity,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        fontColor,
      }
    case 'contain':
      return {
        opacity,
        backgroundColor: baseColor,
        borderColor: 'transparent',
        fontColor,
      }
  }
}
