import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import VStack from '../VStack'
import NavRowGroup from './components/NavRowGroup'
import { useStyles } from './styles'

type NavItemValue = NavItem
export type NavItem = {
  label: string
  path: string
  as?: string
  icon?: string
}

export type NavItemGroup = {
  label?: string
  items: NavItemValue[]
}

type Props = {
  itemGroups: NavItemGroup[]
  currentPath?: string
  style?: StyleProp<ViewStyle>
  onPressNavRow: (path: string, as?: string) => void
}

const SideBar: React.FC<Props> = ({
  itemGroups,
  currentPath,
  style,
  onPressNavRow,
}) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]}>
      <VStack>
        {itemGroups.map((itemGroup, index) => (
          <NavRowGroup
            key={index}
            index={index}
            label={itemGroup.label}
            items={itemGroup.items}
            currentPath={currentPath}
            onPressRow={onPressNavRow}
          />
        ))}
      </VStack>
    </VStack>
  )
}

export default React.memo(SideBar)
