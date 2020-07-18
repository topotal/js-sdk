import { StyleSheet, ViewStyle } from 'react-native'
import { Direction, Align, Justify } from './types'

type Props = {
  direction: Direction
  align: Align
  justify: Justify
}

type Style = {
  wrapper: ViewStyle
}

export const useStyles = ({ direction, align, justify }: Props) => {
  return StyleSheet.create<Style>({
    wrapper: {
      display: 'flex',
      flexDirection: direction,
      alignItems: align,
      justifyContent: justify,
    },
  })
}
