import { useMemo } from 'react'
import { ViewStyle } from 'react-native'
import { useTheme } from '../../theme'
import { CardPosition } from '.'

type Styles = {
  wrapper: ViewStyle
  background: ViewStyle
  card: ViewStyle
}

type Props = {
  cardPosition?: CardPosition
}

export const useStyles = ({ cardPosition }: Props) => {
  const { color } = useTheme()

  const styles = useMemo<Styles>(() => ({
    wrapper: {
      width: '100%',
      height: 0,
    },
    background: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    card: {
      position: 'absolute',
      top: cardPosition?.y || 0,
      left: cardPosition?.x || 0,
      width: cardPosition?.width || 0,
      opacity: cardPosition ? 1 : 0,
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
  }), [cardPosition, color.borderLight, color.surface])

  return {
    styles,
  }
}
