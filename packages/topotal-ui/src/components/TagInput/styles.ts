import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    inputWrapper: {
      paddingVertical: 0,
      flexWrap: 'wrap',
    },
    textInput: {
      paddingLeft: 0,
    },
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
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: color.borderLight,
      borderRadius: 4,
    },
  })

  return {
    styles,
  }
}
