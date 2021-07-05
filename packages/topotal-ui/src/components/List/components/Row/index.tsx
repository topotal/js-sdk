import React, { useCallback } from 'react'
import { GestureResponderEvent, Pressable, StyleProp, ViewStyle } from 'react-native'
import { useStyles } from './styles'

interface Props<T = any> {
  item: T
  index: number
  hovered: boolean
  style?: StyleProp<ViewStyle>
  disabledChangeBackground?: boolean,
  renderItem: (item: T, index: number) => React.ReactElement | null
  onHoverIn: (index: number) => void
  onHoverOut: (index: number) => void
  onPress?: (item: T) => void
}

export const Row = React.memo<Props>(({
  item,
  index,
  hovered = false,
  disabledChangeBackground = false,
  style,
  renderItem,
  onPress,
  onHoverIn,
  onHoverOut,
}) => {
  const { styles } = useStyles({
    firstItem: index === 0,
    hovered,
    pressable: !!onPress,
  })

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(item)
    }
  }, [item, onPress])

  const handleHoverIn = useCallback(() => {
    if (disabledChangeBackground) return
    onHoverIn(index)
  }, [disabledChangeBackground, index, onHoverIn])

  const handleHoverOut = useCallback((event: GestureResponderEvent) => {
    if (event.type === 'pointerleave') {
      onHoverOut(index)
    }
  }, [index, onHoverOut])

  return (
    <Pressable
      style={[styles.wrapper, style]}
      onPress={handlePress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      onStartShouldSetResponderCapture={() => false}
      onMoveShouldSetResponderCapture={() => false}
    >
      {renderItem(item, index)}
    </Pressable>
  )
})
