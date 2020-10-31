import React from 'react'
import Sidebar from '.'

export default { title: 'components/Sidebar' }

export const All = () => (
  <Sidebar
    currentPath="as2_1"
    itemGroups={[
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
    ]}
    onPressNavRow={(path, as) => { console.info(path, as) }}
  />
)
