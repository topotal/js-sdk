import React from 'react'
import { ViewStyle } from 'react-native'
import VStack from '../../../VStack'
import { NavItem } from '../..'
import NavRow from '../NavRow'
import { useStyles } from './styles'

type Props = {
  items: NavItem[]
  currentPath?: string
  style?: ViewStyle
  onPressRow: (path: string, as?: string) => void
}

const NavRowGroup: React.FC<Props> = ({
  items,
  currentPath,
  style,
  onPressRow,
}) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]} gap={4}>
      {items.map(item => {
        const selected = (
          item.as === currentPath ||
          item.path === currentPath
        )
        return (
          <NavRow
            key={item.path}
            label={item.label}
            path={item.path}
            as={item.as}
            selected={selected}
            onPress={onPressRow}
          />
        )
      })}
    </VStack>
  )
}

export default NavRowGroup
