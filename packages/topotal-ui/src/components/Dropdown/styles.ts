import { StyleSheet, useWindowDimensions } from 'react-native'
import { Measure } from 'src'
import { useTheme } from '../../theme'
import { CardPositionAlign } from '.'

interface Props {
  align: CardPositionAlign
  wrapperMeasure: Measure
}

export const useStyles = ({ align, wrapperMeasure }: Props) => {
  const { width: windowWidth } = useWindowDimensions()
  const { color } = useTheme()
  const topPosition = wrapperMeasure.pageY
  const leftPosition = wrapperMeasure.pageX
  const rightPosition = windowWidth - (wrapperMeasure.pageX + wrapperMeasure.width)

  const styles = StyleSheet.create({
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
      top: topPosition,
      left: align === 'left' ? leftPosition : undefined,
      right: align === 'right' ? rightPosition : undefined,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: color.borderLight,
      backgroundColor: color.surface,
      shadowColor: color.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 8,
      shadowOpacity: 0.5,
    },
  })

  return {
    styles,
  }
}
