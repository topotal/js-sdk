import { useCallback, useState } from 'react'
import { expect } from '@storybook/jest'
import { StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
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

const Component = () => {
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

export default {
  title: 'components/SelectTagInput',
  component: Component,
}

type Story = StoryObj<typeof Component>

export const Default: Story = {}

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const SelectTag: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      canvas.getByPlaceholderText('Insert new item...')
    ).toBeInTheDocument()

    await userEvent.tab()
    await userEvent.keyboard('piyo')

    await sleep(1200)
    await expect(
      canvas.getByTestId(
        'selectDropdown0'
      )
    ).toBeInTheDocument()

    await userEvent.keyboard('{Enter}')

    await expect(
      canvas.getByText('piyo')
    ).toBeInTheDocument()
  },
}
