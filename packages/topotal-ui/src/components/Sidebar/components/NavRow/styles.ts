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
      height: 48,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: selected ? 'rgba(255, 255, 255, 0.1)' : color.transparent,
      borderRadius: 8,
    },
    label: {
      color: color.primaryTextLight,
    },
  })

  return {
    styles,
  }
}
