import { ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  overlay: ViewStyle
  container: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = {
    overlay: {
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, .5)', // TODO: use theme color
    },
    container: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      minWidth: 400,
      padding: 24,
      backgroundColor: color.yuki,
    },
  }

  return {
    styles,
  }
}
