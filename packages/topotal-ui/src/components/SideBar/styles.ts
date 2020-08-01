import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      paddingTop: 80,
      paddingBottom: 24,
      backgroundColor: color.sumi,
    },
  })

  return {
    styles,
  }
}
