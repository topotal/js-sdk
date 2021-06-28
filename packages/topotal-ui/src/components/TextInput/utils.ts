import { ThemeColor } from '../../theme'
import { Size } from '..'

export const getBorderColor = (isFocused: boolean, error: boolean): keyof ThemeColor => {
  if (error) return 'error'
  if (isFocused) return 'primary'
  return 'borderLight'
}

export const getGeometryStyles = (size: Size, startIconName?: string) => {
  let height: number
  let lineHeight: number
  let paddingLeft: number
  switch (size) {
    case 'medium':
      height = 32
      lineHeight = 24
      paddingLeft = startIconName ? height + 6 : 16
      break
    case 'large':
      height = 40
      lineHeight = 24
      paddingLeft = startIconName ? height + 2 : 16
      break
  }

  return {
    height,
    lineHeight,
    paddingVertical: (height - lineHeight) / 2,
    paddingLeft,
    paddingRight: 16,
  }
}
