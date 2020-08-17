import { ViewStyle, TextStyle } from 'react-native'
import { useTheme } from '../../../../theme'

type Styles = {
  wrapper: ViewStyle
  text: TextStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = {
    wrapper: {
      flex: 1,
      paddingHorizontal: 8,
      justifyContent: 'center',
    },
    text: {
      color: color.yuki,
    },
  }

  return {
    styles,
  }
}
