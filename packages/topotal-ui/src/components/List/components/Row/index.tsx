import React, { useCallback } from 'react'
import { MouseEvent, Pressable, StyleProp, ViewStyle } from 'react-native'
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
  itemDisabled?: (item: T) => boolean
}

export const Row = React.memo<Props>(({
  item,
  index,
  hovered = false,
  disabledChangeBackground = false,
  style,
  renderItem,
  itemDisabled,
  onPress,
  onHoverIn,
  onHoverOut,
}) => {
  const disabled = itemDisabled?.(item) ?? false
  const { styles } = useStyles({
    firstItem: index === 0,
    hovered,
    pressable: !!onPress,
    disabled,
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

  const handleHoverOut = useCallback((event: MouseEvent) => {
    if (event.type === 'pointerleave') {
      onHoverOut(index)
    }
  }, [index, onHoverOut])

  return (
    <Pressable
      style={[styles.wrapper, style]}
      disabled={disabled}
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
