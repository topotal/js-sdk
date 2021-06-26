import { ThemeColor } from '../../theme'
import { Size } from '..'

export const getBorderColor = (isFocused: boolean, error: boolean): keyof ThemeColor => {
  if (error) return 'error'
  if (isFocused) return 'primary'
  return 'borderLight'
}

export const getGeometryStyles = (size: Size) => {
  let height: number
  let lineHeight: number
  switch (size) {
    case 'medium':
      height = 32
      lineHeight = 24
      break
    case 'large':
      height = 40
      lineHeight = 24
      break
  }

  return {
    height,
    lineHeight,
    paddingVertical: (height - lineHeight) / 2,
    paddingHorizontal: 16,
  }
}
