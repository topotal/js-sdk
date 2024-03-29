import { useCallback, useState } from 'react'
import { StoryObj } from '@storybook/react'
import { userEvent } from '@storybook/testing-library'
import { act } from '@testing-library/react'
import { HStack } from '../HStack'
import { TagData } from '../Tag'
import { Text } from '../Text'
import { SelectTagInput } from '.'

const tagDataGenarator = (item: TagData) => item

const fetchedItems: TagData[] = [
  { value: 'poge', label: 'poge', iconUrl: 'https://randomuser.me/api/portraits/women/57.jpg' },
  { value: 'noPress', label: 'noPress' },
  { value: 'piyo', label: 'piyo' },
  { value: 'puyo', label: 'puyo' },
  { value: 'puku', label: 'puku' },
  { value: 'puke', label: 'puke' },
]

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

const Component = () => {
  const [items, setItems] = useState<TagData[]>([])

  const handleFocus = useCallback(async () => {
    await sleep(1000)
    await act(() => {
      setItems(fetchedItems)
    })
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

export default {
  title: 'components/SelectTagInput',
  component: Component,
}

type Story = StoryObj<typeof Component>

export const Default: Story = {}


export const SuggestSelected: Story = {
  play: async () => {
    await userEvent.tab()
    await userEvent.keyboard('piyo')

    await sleep(1200)
    await userEvent.keyboard('{Enter}')
  },
}
