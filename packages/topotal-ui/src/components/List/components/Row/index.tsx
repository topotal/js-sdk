import React, { useCallback } from 'react'
import { Pressable, StyleProp, ViewStyle } from 'react-native'
import { useStyles } from './styles'

interface Props<T = any> {
  item: T
  index: number
  hovered: boolean
  style?: StyleProp<ViewStyle>
  renderItem: (item: T, index: number) => React.ReactElement | null
  onHoverIn: (index: number) => void
  onPress?: (item: T) => void
}

export const Row = React.memo<Props>(({
  item,
  index,
  hovered = false,
  style,
  renderItem,
  onPress,
  onHoverIn,
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
    onHoverIn(index)
  }, [index, onHoverIn])

  return (
    <Pressable
      style={[styles.wrapper, style]}
      onPress={handlePress}
      onHoverIn={handleHoverIn}
    >
      {renderItem(item, index)}
    </Pressable>
  )
})
