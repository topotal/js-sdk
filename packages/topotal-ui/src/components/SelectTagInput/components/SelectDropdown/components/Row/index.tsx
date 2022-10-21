import { useCallback } from 'react'
import { Pressable } from 'react-native'
import { useTheme } from '../../../../../../theme'

interface Props<T> {
  index: number
  item: T
  active: boolean
  renderItem: (item: T, active: boolean) => JSX.Element
  onPress: (item: T) => void
  onHover: (index: number) => void
  onFocus: (index: number) => void
}

export const Row = <T, >({
  index,
  item,
  active,
  renderItem,
  onPress,
  onHover,
  onFocus,
}: Props<T>) => {
  const { color } = useTheme()

  const handlePress = useCallback(() => {
    onPress(item)
  }, [item, onPress])

  const handleHover = useCallback(() => {
    onHover(index)
  }, [index, onHover])

  const handleFocus = useCallback(() => {
    onFocus(index)
  }, [index, onFocus])

  return (
    <Pressable
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: color.borderLight,
        borderTopWidth: index !== 0 ? 1 : 0,
        backgroundColor: active ? color.background : color.surface,
      }}
      onPress={handlePress}
      onHoverIn={handleHover}
      onFocus={handleFocus}
    >
      {renderItem(item, active)}
    </Pressable>
  )
}
