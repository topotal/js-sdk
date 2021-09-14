import { ThemeColor } from '../../theme'
import { Size } from '..'

export const getBorderColor = (isFocused: boolean, error: boolean): keyof ThemeColor => {
  if (error) return 'error'
  if (isFocused) return 'primary'
  return 'borderLight'
}

export const getGeometryStyles = (size: Size, startIconName?: string) => {
  switch (size) {
    case 'medium':
      return {
        height: 32,
        lineHeight: 24,
        paddingLeft: startIconName ? 8 : 16,
        paddingRight: 16,
      }
    case 'large':
      return {
        height: 40,
        lineHeight: 24,
        paddingLeft: startIconName ? 8 : 16,
        paddingRight: 16,
      }
  }

}
