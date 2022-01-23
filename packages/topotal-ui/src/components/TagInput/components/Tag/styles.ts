import { StyleSheet } from 'react-native'
import { useTheme } from '../../../..'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      height: 32,
      marginRight: 8,
    },
    container: {
      paddingLeft: 8,
      paddingRight: 4,
      borderRadius: 16,
      backgroundColor: color.secondaryTextDark,
    },
    label: {
      color: color.primaryTextLight,
    },
    removeIcon: {
      width: 16,
      height: 16,
      tintColor: color.primaryTextLight,
      opacity: 0.5,
    },
  })

  return {
    styles,
  }
}
