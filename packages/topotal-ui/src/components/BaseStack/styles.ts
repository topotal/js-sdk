import { StyleSheet, ViewStyle } from 'react-native'
import { Align, Direction, Justify } from './types'

interface Props {
  direction: Direction
  align: Align
  justify: Justify
}

interface Style {
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
