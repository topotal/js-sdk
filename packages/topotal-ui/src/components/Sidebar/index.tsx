import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import VStack from '../VStack'
import NavRowGroup from './components/NavRowGroup'
import { useStyles } from './styles'

export type NavItem = {
  label: string
  path: string
  as?: string
  icon?: string
}

type Props = {
  itemGroups: NavItem[]
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
      <NavRowGroup
        items={itemGroups}
        currentPath={currentPath}
        onPressRow={onPressNavRow}
      />
    </VStack>
  )
}

export default React.memo(SideBar)
