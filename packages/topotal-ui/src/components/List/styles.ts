import { TextStyle, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

interface Styles {
  wrapper: ViewStyle
  emptyView: ViewStyle
  emptyText: TextStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = {
    wrapper: {
      borderColor: color.borderLight,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      overflow: 'hidden',
    },
    emptyView: {
      backgroundColor: color.background,
      height: '100%',
      paddingHorizontal: 24,
    },
    emptyText: {
      color: color.secandaryTextDark,
    },
  }

  return {
    styles,
  }
}
