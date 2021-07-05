import React from 'react'
import { Story } from '@storybook/react'
import { Text } from '../Text'
import { List } from '.'

export default {
  title: 'components/List',
  argTypes: { onPressItem: { action: 'clicked' } },
}

interface Item {
  name: string
}

const defaultProps: React.ComponentProps<typeof List> = {
  data: [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
  ],
  renderItem: (item: Item) => (
    <Text>{item.name}</Text>
  ),
}

const Template: Story<React.ComponentProps<typeof List>> = (args) => (
  <List {...args}/>
)

export const Default: Story<React.ComponentProps<typeof List>> = Template.bind({})
Default.args = {
  ...defaultProps,
}

export const DisabledChangeBackground: Story<React.ComponentProps<typeof List>> = Template.bind({})
DisabledChangeBackground.args = {
  ...defaultProps,
  disabledChangeBackground: true,
}

export const Empty: Story<React.ComponentProps<typeof List>> = Template.bind({})
Empty.args = {
  data: [],
  emptyText: 'Sample Text',
  renderItem: (item: Item) => (
    <Text>{item.name}</Text>
  ),
}
