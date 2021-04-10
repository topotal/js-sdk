import { useEffect, useMemo } from 'react'
import { View, ViewStyle } from 'react-native'
import { useDimensions } from '../../hooks/useDimensions'
import { useMeasure } from '../../hooks/useMeasure'
import { useScrollManipulater, useTheme } from '../../theme'
import { CardPositionAlign } from '.'

interface Styles {
  wrapper: ViewStyle
  background: ViewStyle
  card: ViewStyle
}

interface Props {
  align: CardPositionAlign
}

export const useStyles = ({ align }: Props) => {
  const { ref: wrapperRef, measure: wrapperMeasure, updateMeasure } = useMeasure<View>()
  const { getScrollY } = useScrollManipulater()
  const { windowScaledSize } = useDimensions()
  const scrollY = getScrollY()
  const { color } = useTheme()
  const topPosition = wrapperMeasure.pageY - scrollY
  const leftPosition = wrapperMeasure.pageX
  console.info(windowScaledSize)
  const rightPosition = windowScaledSize.width - (wrapperMeasure.pageX + wrapperMeasure.width)

  useEffect(() => {
    updateMeasure()
  }, [updateMeasure])

  const styles = useMemo<Styles>(() => {
    return {
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
    }
  }, [align, color.borderLight, color.shadow, color.surface, leftPosition, rightPosition, topPosition])

  return {
    wrapperRef,
    styles,
  }
}
