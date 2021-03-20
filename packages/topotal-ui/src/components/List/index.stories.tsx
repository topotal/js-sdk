import React from 'react'
import { Story } from '@storybook/react'
import { Text } from '../Text'
import { List } from '.'

export default {
  title: 'components/List',
}

interface Item {
  name: string
}

const Template: Story<React.ComponentProps<typeof List>> = (args) => (
  <List {...args}/>
)

export const Default: Story<React.ComponentProps<typeof List>> = Template.bind({})
Default.args = {
  data: [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
  ],
  renderItem: (item: Item) => (
    <Text>{item.name}</Text>
  ),
}

export const Empty: Story<React.ComponentProps<typeof List>> = Template.bind({})
Empty.args = {
  data: [],
  emptyText: 'Sample Text',
  renderItem: (item: Item) => (
    <Text>{item.name}</Text>
  ),
}
