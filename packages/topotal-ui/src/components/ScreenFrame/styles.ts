import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  header: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      paddingHorizontal: 60,
      paddingBottom: 60,
      backgroundColor: color.background,
    },
    header: {
      height: 64,
      borderBottomWidth: 1,
      borderColor: color.borderLight,
    },
  })

  return {
    styles,
  }
}
