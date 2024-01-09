import { useCallback, useState } from 'react'
import { HStack } from '../HStack'
import { TagData } from '../Tag'
import { Text } from '../Text'
import { SelectTagInput } from '.'

export default {
  title: 'components/SelectTagInput',
}

const tagDataGenarator = (item: TagData) => item

const fetchedItems: TagData[] = [
  { value: 'poge', label: 'poge', iconUrl: 'https://randomuser.me/api/portraits/women/57.jpg' },
  { value: 'noPress', label: 'noPress' },
  { value: 'piyo', label: 'piyo' },
  { value: 'puyo', label: 'puyo' },
  { value: 'puku', label: 'puku' },
  { value: 'puke', label: 'puke' },
]

export const Default = () => {
  const [items, setItems] = useState<TagData[]>([])

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
      renderItem={(item: TagData, active: boolean, pressable: boolean) => (
        <HStack style={{ paddingHorizontal: 16, height: 40, alignItems: 'center' }}>
          <Text
            style={{ color: pressable ? 'black' : 'gray' }}
            weight={active ? 'bold' : 'normal'}
          >
            {item.label}
          </Text>
        </HStack>
      )}
      pressableChecker={(item: TagData) => item.value !== 'noPress'}
      maxDropdownItems={10}
      onChange={(value: TagData[]) => { console.info(value) }}
      onFocus={handleFocus}
    />
  )
}
