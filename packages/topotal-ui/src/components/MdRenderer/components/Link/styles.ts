import { TextStyle } from 'react-native'
import { useTheme } from '../../../../theme'

interface Styles {
  wrapper: TextStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = {
    wrapper: {
      color: color.primary,
      textDecorationLine: 'underline',
    },
  }

  return {
    styles,
  }
}
