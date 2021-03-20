import { useMemo } from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import { useTheme } from '../../../../theme'

interface Styles {
  wrapper: ViewStyle
  text: TextStyle
}

export const useStyles = () => {
  const { color, radius } = useTheme()

  const styles: Styles = useMemo(() => ({
    wrapper: {
      backgroundColor: color.surfaceDark,
      borderRadius: radius.level1,
      padding: 16,
    },
    text: {
      color: color.primaryTextLight,
    },
  }), [
    color.primaryTextLight,
    color.surfaceDark,
    radius.level1,
  ])

  return {
    styles,
  }
}
