import React from 'react'
import SideBar from '.'

export default { title: 'components/SideBar' }

export const All = () => (
  <SideBar
    itemGroups={[
      {
        label: 'Group1',
        items: [
          {
            label: 'item1',
            path: 'path1',
          },
          {
            label: 'item2',
            path: 'path2',
          },
          {
            label: 'item3',
            path: 'path3',
          },
        ],
      },
      {
        items: [
          {
            label: 'item1',
            path: 'path1',
          },
        ],
      },
    ]}
    onPressNavRow={(path) => { console.info(path) }}
  />
)
