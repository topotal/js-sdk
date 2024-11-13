import { Pressable, View } from 'react-native'
import { Story } from '@storybook/react'
import { Text } from '../Text'
import { List, Props as ListProps } from '.'

export default {
  title: 'components/List',
}

interface Item {
  name: string
}

const defaultProps: ListProps<Item> = {
  data: [
    { name: 'item1' },
    { name: 'item2' },
    { name: 'item3' },
  ],
  renderItem: (item) => (
    <Pressable
      style={{ width: 100 }}
      onPress={() => { console.info('hoge') }}
    >
      <Text>{item.name}</Text>
    </Pressable>
  ),
}

const Template: Story<ListProps<Item>> = (args) => (
  <List<Item> {...args}/>
)

export const Default: Story<ListProps<Item>> = Template.bind({})
Default.args = {
  ...defaultProps,
}

export const DisabledChangeBackground: Story<ListProps<Item>> = Template.bind({})
DisabledChangeBackground.args = {
  ...defaultProps,
  disabledChangeBackground: true,
}

export const ItemDisabled: Story<ListProps<Item>> = Template.bind({})
ItemDisabled.args = {
  ...defaultProps,
  itemDisabled: (item) => item.name === 'item2',
}

export const DefaultEmptyView: Story<ListProps<Item>> = Template.bind({})
DefaultEmptyView.args = {
  ...defaultProps,
  data: [],
}

export const CustomEmptyView: Story<ListProps<Item>> = Template.bind({})
CustomEmptyView.args = {
  ...defaultProps,
  data: [],
  emptyView: (
    <View
      style={{
        height: 60,
        backgroundColor: '#0CC',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Custom Empty View</Text>
    </View>
  ),
}
