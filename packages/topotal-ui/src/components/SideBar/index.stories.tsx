import React from 'react'
import SideBar from '.'

export default { title: 'components/SideBar' }

export const All = () => (
  <SideBar items={[
    {
      label: 'test',
      path: '',
    },
    {
      label: 'test',
      path: '',
    },
    {
      label: 'test',
      path: '',
    },
  ]} />
)
