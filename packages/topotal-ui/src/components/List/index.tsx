import React, { useCallback, useState } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { Row } from './components/Row'
import { useStyles } from './styles'

interface Props<T = any> {
  data: T[]
  style?: StyleProp<ViewStyle>
  renderItem: (item: T, index: number) => React.ReactElement | null
  emptyText?: string
  keyExtractor?: (item: T, index: number) => string
  onPressItem?: (item: T) => void
}

export const List: React.FC<Props> = ({
  data,
  style,
  emptyText = 'No items found',
  renderItem,
  keyExtractor,
  onPressItem,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>()
  const { styles } = useStyles()

  const handleHoverInRow = useCallback((targetIndex: number) => {
    setHoveredIndex(targetIndex)
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
              renderItem={renderItem}
              onPress={onPressItem}
              onHoverIn={handleHoverInRow}
            />
          )
        })
      ) : (
        <VStack
          style={styles.emptyView}
          align="center"
          justify="center"
        >
          <Text
            style={styles.emptyText}
            weight="bold"
          >
            {emptyText}
          </Text>
        </VStack>
      )}
    </VStack>
  )
}
