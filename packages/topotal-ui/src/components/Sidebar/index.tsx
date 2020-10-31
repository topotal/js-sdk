import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import VStack from '../VStack'
import NavRow from './components/NavRow'
import { useStyles } from './styles'

export type NavItem = {
  label: string
  path: string
  as?: string
}

type Props = {
  items: NavItem[]
  currentPath?: string
  close?: boolean
  style?: StyleProp<ViewStyle>
  onPressNavRow: (path: string, as?: string) => void
}

const SideBar: React.FC<Props> = ({
  items,
  currentPath,
  close = false,
  style,
  onPressNavRow,
}) => {
  const { styles } = useStyles({ close })

  return (
    <VStack style={[styles.wrapper, style]}>
      <VStack style={styles.list} gap={4}>
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
              close={close}
              onPress={onPressNavRow}
            />
          )
        })}
      </VStack>
    </VStack>
  )
}

export default React.memo(SideBar)
