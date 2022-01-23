import { StyleSheet } from 'react-native'
import { useTheme } from '../../../../theme'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      paddingVertical: 24,
      paddingHorizontal: 16,
    },
    text: {
      color: color.secondaryTextDark,
    },
  })

  return {
    styles,
  }
}
