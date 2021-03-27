import { TextType, ThemeColor } from '../../theme'

export type Size = 'small' | 'medium' | 'large'
export type Color = 'primary' | 'error' | 'cancel' | 'success'
export type Variant = 'contain' | 'outline' | 'text'

export interface DynamicGeometry {
  height: number
  sidePadding: number
  iconSize: number
  textType: TextType
}

export interface DynamicMaterial {
  opacity: number
  backgroundColor: keyof ThemeColor
  borderColor: keyof ThemeColor
  fontColor: keyof ThemeColor
}
