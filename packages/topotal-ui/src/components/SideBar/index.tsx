import React from 'react'
import { VStack } from '~/components'
import NavRow from './components/NavRow'

export type NavItemValue = NavItem

type NavItem = {
  label: string
  path: string
  icon?: string
  items?: NavItemValue[]
}

type Props = {
  items: NavItem[]
}

const SideBar: React.FC<Props> = ({ items }) => {
  return (
    <VStack>
      {items.map((_item, index) => (
        <NavRow key={index}/>
      ))}
    </VStack>
  )
}

export default SideBar
