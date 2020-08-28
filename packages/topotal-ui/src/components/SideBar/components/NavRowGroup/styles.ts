import { useMemo } from 'react'
import { useTheme } from '../../../../theme'

type Props = {
  index: number
}

export const useStyles = ({ index }: Props) => {
  const { color } = useTheme()

  const styles = useMemo(() => ({
    wrapper: {
      paddingVertical: 8,
      borderTopWidth: index === 0 ? 1 : 0,
      borderBottomWidth: 1,
      borderColor: color.katana,
    },
    label: {
      color: color.yuki,
      paddingHorizontal: 24,
      lineHeight: 32,
    },
  }), [color, index])

  return {
    styles,
  }
}
