import { ReactElement, ReactNode, useCallback, useState } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { VStack } from '../VStack'
import { DefaultEmptyView } from './components/DefaultEmptyView'
import { Row } from './components/Row'
import { useStyles } from './styles'

export interface Props<T> {
  data: T[]
  style?: StyleProp<ViewStyle>
  renderItem: (item: T, index: number) => ReactElement | null
  emptyView?: ReactNode
  disabledChangeBackground?: boolean
  keyExtractor?: (item: T, index: number) => string
  onPressItem?: (item: T) => void
}

export const List = <T, >({
  data,
  style,
  emptyView,
  disabledChangeBackground = false,
  renderItem,
  keyExtractor,
  onPressItem,
}: Props<T>): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number>()
  const { styles } = useStyles()

  const handleHoverInRow = useCallback((targetIndex: number) => {
    setHoveredIndex(targetIndex)
  }, [])

  const handleHoverOutInRow = useCallback(() => {
    setHoveredIndex(undefined)
  }, [])

  return (
    <VStack style={[styles.wrapper, style]}>
      {data.length ? (
        data.map((item, index) => {
          const key = keyExtractor ? keyExtractor(item, index) : index
          return (
            <Row
              key={key}
              item={item}
              index={index}
              hovered={index === hoveredIndex}
              disabledChangeBackground={disabledChangeBackground}
              renderItem={renderItem}
              onPress={onPressItem}
              onHoverIn={handleHoverInRow}
              onHoverOut={handleHoverOutInRow}
            />
          )
        })
      ) : (
        <View style={styles.emptyViewWrapper}>
          {emptyView || (<DefaultEmptyView />)}
        </View>
      )}
    </VStack>
  )
}
