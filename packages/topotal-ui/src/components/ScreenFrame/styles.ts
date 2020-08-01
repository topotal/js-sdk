import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      padding: 24,
      backgroundColor: color.kasumi,
    },
  })

  return {
    styles,
  }
}
