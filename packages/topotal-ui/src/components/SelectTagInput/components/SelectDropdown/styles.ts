import { StyleSheet } from 'react-native'
import { useTheme } from '../../../../theme'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    dropdown: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
    },
    dropdownContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: color.borderLight,
      borderRadius: 4,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    noOptions: {
      height: 40,
    },
    noOptionsText: {
      color: color.secondaryTextDark,
    },
    loading: {
      height: 40,
    },
    loadingText: {
      color: color.secondaryTextDark,
    },
  })

  return {
    styles,
    placeholderColor: color.secondaryTextDark,
  }
}
