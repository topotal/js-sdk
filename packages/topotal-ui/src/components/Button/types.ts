import { Color as ThemeColor, TextType } from '../../theme'

export type Size = 'small' | 'medium' | 'large'
export type Color = 'primary' | 'secondary' | 'negative' | 'cancel' | 'light'
export type Variant = 'contain' | 'outline' | 'text'

export type DynamicGeometry = {
  height: number
  sidePadding: number
  textType: TextType
}

export type DynamicMaterial = {
  opacity: number
  backgroundColor: keyof ThemeColor
  borderColor: keyof ThemeColor
  fontColor: keyof ThemeColor
}
