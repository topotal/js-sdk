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
  disabled: boolean
}


export const useStyles = ({
  firstItem,
  hovered,
  pressable,
  disabled,
}: Props) => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => ({
    wrapper: {
      minHeight: 20,
      borderTopWidth: firstItem ? 0 : 1,
      borderColor: color.borderLight,
      opacity: disabled ? 0.5 : 1,
      backgroundColor: hovered ? color.background : color.surface,
      cursor: pressable ? 'pointer' : 'default',
      pointerEvents: disabled ? 'none' : 'auto',
    },
  }), [
    color.background,
    color.borderLight,
    color.surface,
    firstItem,
    hovered,
    pressable,
    disabled,
  ])

  return {
    styles,
  }
}
