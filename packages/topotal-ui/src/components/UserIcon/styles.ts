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

    return {
      wrapper: {
        width,
        height,
        borderRadius,
        backgroundColor: loaded ? color.surface : color.borderLight,
        borderColor: color.surface,
        borderWidth: 1,
        overflow: 'hidden',
      },
      image: {
        width: width - 1,
        height: height - 1,
        padding: 1,
      },
    }
  }, [color.borderLight, color.surface, size, loaded])

  return {
    styles,
  }
}
