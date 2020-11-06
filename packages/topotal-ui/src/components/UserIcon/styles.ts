import { useMemo } from 'react'
import { ViewStyle, ImageStyle } from 'react-native'
import { useTheme } from '../../theme'
import { Size } from '.'

const getDynamicStyle = (size: Size) => {
  switch (size) {
    case 'large':
      return {
        width: 32,
        height: 32,
        borderRadius: 16,
      }
    case 'medium':
      return {
        width: 24,
        height: 24,
        borderRadius: 12,
      }
  }
}

type Styles = {
  wrapper: ViewStyle
  image: ImageStyle
}

type Props = {
  size: Size
}

export const useStyles = ({ size }: Props) => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => {
    const { width, height, borderRadius } = getDynamicStyle(size)

    return {
      wrapper: {
        width,
        height,
        borderRadius,
        backgroundColor: color.borderLight,
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
  }, [color.borderLight, color.surface, size])

  return {
    styles,
  }
}