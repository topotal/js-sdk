import { useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { useTheme } from '../../../../theme'

interface Styles {
  wrapper: ViewStyle
}

interface Props {
  firstItem: boolean
  hovered: boolean
  pressable: boolean
}

export const useStyles = ({
  firstItem,
  hovered,
  pressable,
}: Props) => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => ({
    wrapper: {
      minHeight: 20,
      borderTopWidth: firstItem ? 0 : 1,
      borderColor: color.borderLight,
      backgroundColor: hovered ? color.background : color.surface,
      cursor: pressable ? 'pointer' : 'default',
    },
  }), [
    color.background,
    color.borderLight,
    color.surface,
    firstItem,
    hovered,
    pressable,
  ])

  return {
    styles,
  }
}
