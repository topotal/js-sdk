import { useMemo } from 'react'
import { useTheme } from '../../../../theme'

export const useStyles = () => {
  const { color } = useTheme()

  const styles = useMemo(() => ({
    wrapper: {
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    label: {
      color: color.primaryTextLight,
      lineHeight: 32,
    },
  }), [color])

  return {
    styles,
  }
}
