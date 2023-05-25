import { GestureResponderEvent, Pressable, View } from 'react-native'
import { HStack, TagData, Text } from '../../..'
import { Row } from './components/Row'
import { useStyles } from './styles'

interface Props<T> {
  items: T[]
  currentIndex: number
  loading: boolean
  renderItem: (item: T, active: boolean, pressable: boolean) => JSX.Element
  tagDataGenarator: (item: T, index: number) => TagData
  pressableChecker?: (item: T) => boolean
  onPressItem: (item: T) => void
  onHoverIn: () => void
  onHoverOut: (event: GestureResponderEvent) => void
  onHoverItem: (index: number) => void
  onFocusItem: (index: number) => void
}

export const SelectDropdown = <T, >({
  items,
  currentIndex,
  loading,
  renderItem,
  tagDataGenarator,
  pressableChecker,
  onPressItem,
  onHoverIn,
  onHoverOut,
  onHoverItem,
  onFocusItem,
}: Props<T>) => {
  const { styles } = useStyles()

  return (
    <View style={styles.dropdown}>
      <Pressable
        style={styles.dropdownContainer}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
      >
        {(() => {
          if (loading) {
            return (
              <HStack style={styles.loading} align="center" justify="center">
                <Text weight="bold" style={styles.loadingText}>
                  Loading...
                </Text>
              </HStack>
            )
          }

          if (items.length) {
            return items.map((item, index) => (
              <Row
                key={tagDataGenarator(item, index).value}
                index={index}
                item={item}
                active={index === currentIndex}
                renderItem={renderItem}
                pressable={pressableChecker ? pressableChecker(item) : true}
                onPress={onPressItem}
                onHover={onHoverItem}
                onFocus={onFocusItem}
              />
            ))
          }

          return (
            <HStack style={styles.noOptions} align="center" justify="center">
              <Text weight="bold" style={styles.noOptionsText}>
                No options
              </Text>
            </HStack>
          )
        })}
      </Pressable>
    </View>
  )
}
