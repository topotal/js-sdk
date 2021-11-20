import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      borderColor: color.borderLight,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      overflow: 'hidden',
    },
    emptyViewWrapper: {
      backgroundColor: color.background,
    },
  })

  return {
    styles,
  }
}
