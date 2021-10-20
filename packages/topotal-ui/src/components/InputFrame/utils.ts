import type { InputFrameSize } from '.'

export const getGeometryStyles = (size: InputFrameSize, hasLeftItem = false) => {
  const lineHeight = 24

  switch (size) {
    case 'small':
      return {
        height: 24,
        lineHeight,
        paddingLeft: hasLeftItem ? 4 : 8,
        paddingRight: 8,
        paddingVertical: (24 - lineHeight) / 2,
      }
    case 'medium':
      return {
        height: 32,
        lineHeight,
        paddingLeft: hasLeftItem ? 8 : 16,
        paddingRight: 16,
        paddingVertical: (32 - lineHeight) / 2,
      }
    case 'large':
      return {
        height: 40,
        lineHeight,
        paddingLeft: hasLeftItem ? 8 : 16,
        paddingRight: 16,
        paddingVertical: (40 - lineHeight) / 2,
      }
  }
}
