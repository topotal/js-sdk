import { useMemo } from 'react'
import { ImageStyle, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'
import { UserIconSize } from '.'

const getDynamicStyle = (size: UserIconSize) => {
  switch (size) {
    case 'large':
      return {
        width: 48,
        height: 48,
        borderRadius: 24,
      }
    case 'medium':
      return {
        width: 32,
        height: 32,
        borderRadius: 16,
      }
    case 'small':
      return {
        width: 24,
        height: 24,
        borderRadius: 12,
      }
  }
}

interface Styles {
  wrapper: ViewStyle
  image: ImageStyle
}

interface Props {
  size: UserIconSize
  loaded: boolean
}

export const useStyles = ({ size, loaded }: Props) => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => {
    const { width, height, borderRadius } = getDynamicStyle(size)
    const borderWidth = 1

    return {
      wrapper: {
        width,
        height,
        borderRadius,
        backgroundColor: loaded ? color.surface : color.borderLight,
        borderColor: color.surface,
        borderWidth,
        overflow: 'hidden',
      },
      image: {
        width: width - (borderWidth * 2),
        height: width - (borderWidth * 2),
        padding: 1,
      },
    }
  }, [color.borderLight, color.surface, size, loaded])

  return {
    styles,
  }
}
