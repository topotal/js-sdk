import { TextType, ThemeColor } from '../../theme'

export type Size = 'small' | 'medium' | 'large'
export type Color = 'primary' | 'negative' | 'cancel' | 'positive'
export type Variant = 'contain' | 'outline' | 'text'

export interface DynamicGeometry {
  height: number
  sidePadding: number
  textType: TextType
}

export interface DynamicMaterial {
  opacity: number
  backgroundColor: keyof ThemeColor
  borderColor: keyof ThemeColor
  fontColor: keyof ThemeColor
}
