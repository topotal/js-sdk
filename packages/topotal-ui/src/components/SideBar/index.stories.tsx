import React from 'react'
import Sidebar from '.'

export default { title: 'components/Sidebar' }

export const All = () => (
  <Sidebar
    itemGroups={[
      {
        label: 'Group1',
        items: [
          {
            label: 'item1',
            path: 'path1',
            as: 'as1',
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
    onPressNavRow={(path, as) => { console.info(path, as) }}
  />
)
