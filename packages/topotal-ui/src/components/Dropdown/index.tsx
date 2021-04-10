import React from 'react'
import { Modal, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'

export type CardPositionAlign = 'left' | 'right'

interface Props {
  visible?: boolean
  style?: StyleProp<ViewStyle>
  align?: CardPositionAlign
  onPressBackground?: () => void
}

export const Dropdown: React.FC<Props> = ({
  visible = false,
  style,
  align = 'left',
  children,
  onPressBackground,
}) => {
  const { wrapperRef, styles } = useStyles({ align })

  return (
    <View
      style={[styles.wrapper, style]}
      ref={element => { wrapperRef.current = element || undefined }}
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
