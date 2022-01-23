import type { ImageStyle } from 'react-native'
import { useTheme } from '../../theme'

interface Styles {
  icon: ImageStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = {
    icon: {
      width: '50%',
      height: '50%',
      tintColor: color.secondaryTextDark,
    },
  }

  return {
    styles,
    placeholderColor: color.secondaryTextDark,
  }
}
