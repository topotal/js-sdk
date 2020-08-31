import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { useTheme } from '../../../../theme'

type Styles = {
  wrapper: ViewStyle
  label: TextStyle
}

type Props = {
  selected: boolean
}

export const useStyles = ({ selected }: Props) => {
  const { color } = useTheme()

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      height: 40,
      paddingHorizontal: 24,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: selected ? color.katana : 'transparent',
    },
    label: {
      color: color.yuki,
    },
  })

  return {
    styles,
  }
}
