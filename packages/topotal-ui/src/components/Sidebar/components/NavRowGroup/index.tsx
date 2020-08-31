import React from 'react'
import { ViewStyle } from 'react-native'
import VStack from '../../../VStack'
import Text from '../../../Text'
import { NavItem } from '../..'
import NavRow from '../NavRow'
import { useStyles } from './styles'

type Props = {
  index: number
  label?: string
  items: NavItem[]
  currentPath?: string
  style?: ViewStyle
  onPressRow: (path: string, as?: string) => void
}

const NavRowGroup: React.FC<Props> = ({
  index,
  label,
  items,
  currentPath,
  style,
  onPressRow,
}) => {
  const { styles } = useStyles({ index })

  return (
    <VStack style={[styles.wrapper, style]} gap={4}>
      {label ? (
        <Text type="caption" style={styles.label}>{label}</Text>
      ) : null}
      <VStack>
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
    </VStack>
  )
}

export default NavRowGroup
