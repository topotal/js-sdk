import { StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  list: ViewStyle
}

type Props = {
  close: boolean
}

export const useStyles = ({ close }: Props) => {
  const { color } = useTheme()
  const width = close ? 64 : 230

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      width,
      minWidth: width,
      paddingVertical: 24,
      backgroundColor: color.surfaceDark,
    },
    list: {
      paddingVertical: 8,
      paddingHorizontal: close ? 8 : 16,
    },
  })

  return {
    styles,
  }
}
