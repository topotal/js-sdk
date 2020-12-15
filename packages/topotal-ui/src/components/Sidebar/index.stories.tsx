import React from 'react'
import Sidebar, { NavItem } from '.'
import HStack from '../HStack'

export default { title: 'components/Sidebar' }

const items: NavItem[] = [
  {
    iconName: 'whatshot',
    label: 'item2_1',
    path: 'path2_1',
    as: 'as2_1',
  },
  {
    iconName: 'done',
    label: 'item2_2',
    path: 'path2_2',
  },
  {
    iconName: 'settings-black',
    label: 'item2_3',
    path: 'path2_3',
  },
]

export const All = () => (
  <HStack gap={16}>
    <Sidebar
      currentPath="as2_1"
      items={items}
      close
      onPressNavRow={(path, as) => { console.info(path, as) }}
    />
    <Sidebar
      currentPath="as2_1"
      items={items}
      onPressNavRow={(path, as) => { console.info(path, as) }}
    />
  </HStack>
)
