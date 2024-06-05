import { TextType, ThemeColor } from '../../theme'

export type Size = 'small' | 'medium' | 'large'
export type Color = 'basic' | 'primary' | 'error' | 'cancel' | 'success' | 'warning' | 'ai'
export type Variant = 'contain' | 'outline' | 'text'

export interface DynamicGeometry {
  height: number
  sidePadding: number
  iconSize: number
  textType: TextType
  fontWeight: 'bold' | 'normal'
}

export interface DynamicMaterial {
  opacity: number
  backgroundColor: keyof ThemeColor
  borderColor: keyof ThemeColor
  fontColor: keyof ThemeColor
}
