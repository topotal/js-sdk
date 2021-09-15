import type { InputFrameSize } from '.'

export const getGeometryStyles = (size: InputFrameSize, hasLeftItem = false) => {
  const lineHeight = 24

  switch (size) {
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
