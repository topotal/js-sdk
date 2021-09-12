import { ThemeColor } from '../../theme'

export const getBorderColor = (isFocused: boolean, error: boolean): keyof ThemeColor => {
  if (error) return 'error'
  if (isFocused) return 'primary'
  return 'borderLight'
}
