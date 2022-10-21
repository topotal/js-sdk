import { useCallback, useState } from 'react'
import { HStack } from '../HStack'
import { Text } from '../Text'
import { SelectTagInput } from '.'

export default {
  title: 'components/SelectTagInput',
}

interface Item {
  value: string
  label: string
}

const tagDataGenarator = (item: Item) => item

const fetchedItems: Item[] = [
  { value: 'hoge', label: 'hoge' },
  { value: 'fuga', label: 'fuga' },
  { value: 'piyo', label: 'piyo' },
]

export const Default = () => {
  const [items, setItems] = useState<Item[]>([])

  const handleFocus = useCallback(() => {
    setTimeout(() => {
      setItems(fetchedItems)
    }, 1000)
  }, [])

  return (
    <SelectTagInput
      items={items}
      tagDataGenarator={tagDataGenarator}
      loading={items.length === 0}
      renderItem={(item: Item, active: boolean) => (
        <HStack style={{ paddingHorizontal: 16, height: 40, alignItems: 'center' }}>
          <Text weight={active ? 'bold' : 'normal'}>{item.label}</Text>
        </HStack>
      )}
      onChange={(value: Item[]) => { console.info(value) }}
      onFocus={handleFocus}
    />
  )
}
