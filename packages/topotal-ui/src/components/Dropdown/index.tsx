import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Modal, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { useMeasure } from '../../hooks/useMeasure'
import { useScrollManipulater } from '../../theme'
import { useStyles } from './styles'

export interface CardPosition {
  x: number,
  y: number,
  width: number,
}

interface Props {
  visible?: boolean
  style?: StyleProp<ViewStyle>
  onPressBackground?: () => void
}

export const Dropdown: React.FC<Props> = ({
  visible = false,
  style,
  children,
  onPressBackground,
}) => {
  const { ref, measure, updateMeasure } = useMeasure<View>()
  const { getScrollY } = useScrollManipulater()
  const scrollY = getScrollY()
  const [cardPosition, setCardPosition] = useState<CardPosition>()
  const { styles } = useStyles({ cardPosition })

  useLayoutEffect(() => {
    updateMeasure()
  }, [updateMeasure])

  useEffect(() => {
    setCardPosition({
      x: measure?.pageX!,
      y: measure?.pageY! - scrollY,
      width: measure?.width!,
    })
  }, [measure, scrollY])

  return (
    <View
      style={[styles.wrapper, style]}
      ref={element => { ref.current = element || undefined }}
    >
      <Modal visible={visible} transparent>
        <Pressable
          style={styles.background}
          onPress={onPressBackground}
        />
        <View style={styles.card} >
          {children}
        </View>
      </Modal>
    </View>
  )
}
