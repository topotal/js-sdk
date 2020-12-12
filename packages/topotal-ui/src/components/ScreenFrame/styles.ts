import { useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  container: ViewStyle
  header: ViewStyle
  content: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles: Styles = useMemo(() => ({
    wrapper: {
      paddingHorizontal: 60,
      paddingBottom: 60,
      backgroundColor: color.background,
      width: '100%',
      height: '100%',
    },
    container: {
      width: '100%',
      maxWidth: 960,
      flex: 1,
    },
    header: {
      height: 64,
      borderBottomWidth: 1,
      borderColor: color.borderLight,
    },
    content: {
      flex: 1,
    },
  }), [color.background, color.borderLight])

  return {
    styles,
  }
}
