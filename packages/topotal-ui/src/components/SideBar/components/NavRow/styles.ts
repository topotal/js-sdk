import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { useTheme } from '~/theme'

type Styles = {
  wrapper: ViewStyle
  label: TextStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      height: 40,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      color: color.yuki,
    },
  })

  return {
    styles,
  }
}
