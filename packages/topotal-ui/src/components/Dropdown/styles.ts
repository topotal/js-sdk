import { StyleSheet, useWindowDimensions } from 'react-native'
import { Measure } from 'src'
import { useTheme } from '../../theme'
import { CardPositionAlign } from '.'

interface Props {
  align: CardPositionAlign
  wrapperMeasure: Measure
}

const getPostion = (align: CardPositionAlign, windowWidth: number, windowHeight: number, wrapperMeasure: Measure) => {
  switch (align) {
    case 'left':
      return {
        top: wrapperMeasure.pageY,
        left: wrapperMeasure.pageX,
      }
    case 'right':
      return {
        top: wrapperMeasure.pageY,
        right: windowWidth - (wrapperMeasure.pageX + wrapperMeasure.width),
      }
    case 'right-bottom':
      return {
        left: wrapperMeasure.pageX + wrapperMeasure.width,
        bottom: windowHeight - wrapperMeasure.pageY,
      }
  }
}

export const useStyles = ({ align, wrapperMeasure }: Props) => {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions()
  const { color } = useTheme()
  const position = getPostion(align, windowWidth, windowHeight, wrapperMeasure)

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
      ...position,
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
