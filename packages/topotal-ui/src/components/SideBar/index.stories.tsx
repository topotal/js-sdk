import React from 'react'
import Sidebar from '.'

export default { title: 'components/Sidebar' }

export const All = () => (
  <Sidebar
    currentPath="as2_1"
    itemGroups={[
      {
        items: [
          {
            label: 'item1_1',
            path: 'path1_1',
          },
        ],
      },
      {
        label: 'Group2',
        items: [
          {
            label: 'item2_1',
            path: 'path2_1',
            as: 'as2_1',
          },
          {
            label: 'item2_2',
            path: 'path2_2',
          },
          {
            label: 'item2_3',
            path: 'path2_3',
          },
        ],
      },
      {
        items: [
          {
            label: 'item3_1',
            path: 'path3_1',
          },
        ],
      },
    ]}
    onPressNavRow={(path, as) => { console.info(path, as) }}
  />
)
