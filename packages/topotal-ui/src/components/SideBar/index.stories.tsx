import React from 'react'
import SideBar from '.'

export default { title: 'components/SideBar' }

export const All = () => (
  <SideBar
    items={[
      {
        label: 'test1',
        path: 'path1',
      },
      {
        label: 'test2',
        path: 'path2',
      },
      {
        label: 'test3',
        path: 'path3',
      },
    ]}
    onPressNavRow={(path) => { console.info(path) }}
  />
)
