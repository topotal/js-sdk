import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      width: 230,
      minWidth: 230,
      paddingTop: 80,
      paddingBottom: 24,
      backgroundColor: color.surfaceDark,
    },
  })

  return {
    styles,
  }
}