import { useMemo } from 'react'
import { FlexStyle, Platform, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

type Styles = {
  wrapper: ViewStyle
  background: ViewStyle
  card: ViewStyle
}

export const useStyles = () => {
  const { color } = useTheme()

  const styles = useMemo<Styles>(
    () => ({
      wrapper: {
        width: '100%',
        height: 0,
      },
      background: {
        ...Platform.select<ViewStyle>({
          web: {
            position: 'fixed' as FlexStyle['position'],
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        }),
      },
      card: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        minWidth: '100%',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: color.borderLight,
        backgroundColor: color.surface,
        shadowColor: '#ccc', // TODO: シャドウの色をtopotal-ui上で定義する
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 8,
        shadowOpacity: 0.5,
      },
    }),
    [color.borderLight, color.surface],
  )

  return {
    styles,
  }
}
