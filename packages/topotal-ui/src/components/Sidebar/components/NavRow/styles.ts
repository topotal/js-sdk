import { ViewStyle, TextStyle, ImageStyle } from 'react-native'
import { useTheme } from '../../../../theme'

type Styles = {
  wrapper: ViewStyle
  content: ViewStyle
  icon: ImageStyle
  label: TextStyle
}

type Props = {
  selected: boolean
  close: boolean
}

export const useStyles = ({ selected, close }: Props) => {
  const { color } = useTheme()

  const styles: Styles = {
    wrapper: {
      paddingVertical: 4,
    },
    content: {
      height: 48,
      paddingHorizontal: close ? 11 : 16,
      backgroundColor: selected ? 'rgba(255, 255, 255, 0.1)' : color.transparent,
      opacity: selected ? 1 : 0.5,
      borderRadius: 8,
      overflow: 'hidden',
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: color.primaryTextLight,
    },
    label: {
      color: color.primaryTextLight,
    },
  }

  return {
    styles,
  }
}
