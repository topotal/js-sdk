import { memo, ReactElement, useEffect, useMemo } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useMeasure } from '../../hooks/useMeasure'
import { divideArrIntoPieces, timesMap } from '../../utils'
import { HStack, VStack } from '..'
import { useStyles } from './styles'

interface Props<T = any> {
  items: T[]
  maxItemWidth: number
  gap?: number
  style?: StyleProp<ViewStyle>
  renderItem: (item: T) => ReactElement | null
  endItem?: () => ReactElement | null
}

export const GridList = memo<Props>(({
  items,
  maxItemWidth,
  gap = 0,
  style,
  renderItem,
  endItem,
}) => {
  const innerItems = useMemo(() => {
    const tmpItems = [...items]
    if (endItem) {
      tmpItems.push('end')
    }
    return tmpItems
  }, [endItem, items])
  const { ref, measure, updateMeasure } = useMeasure()
  const columnLength = Math.max(Math.floor(measure.width / maxItemWidth) + 1, 1)
  const divivedItems = useMemo(() => {
    return columnLength ? divideArrIntoPieces(innerItems, columnLength) : []
  }, [columnLength, innerItems])
  const emptyCellLength = useMemo(() => {
    if (!divivedItems.length) return 0
    const lastRowItems = divivedItems[divivedItems.length - 1]
    return columnLength - lastRowItems.length
  }, [divivedItems, columnLength])
  const { styles } = useStyles({ maxItemWidth })

  useEffect(() => {
    updateMeasure()
  }, [updateMeasure])

  return (
    <View
      style={[{
        opacity: measure.width ? 1 : 0,
      }, style]}
      ref={element => { ref.current = element || undefined }}
    >
      <VStack
        style={styles.container}
        align="stretch"
        gap={gap}
      >
        {divivedItems.map((rowItems, rowIndex) => {
          const isLastRow = rowIndex === divivedItems.length - 1
          return (
            <HStack
              key={`row_${rowIndex}`}
              gap={gap}
            >
              {rowItems.map((item, columnIndex) => (
                <VStack
                  key={`item_${rowIndex}_${columnIndex}`}
                  style={styles.cell}
                >
                  {item === 'end' && endItem ? endItem() : renderItem(item)}
                </VStack>
              ))}
              {isLastRow ? timesMap(emptyCellLength, (index) => (
                <VStack
                  key={`empty_item_${index}`}
                  style={styles.cell}
                />
              )) : null}
            </HStack>
          )
        })}
      </VStack>
    </View>
  )
})
