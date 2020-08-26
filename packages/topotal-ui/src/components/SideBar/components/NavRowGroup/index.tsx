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
  style?: ViewStyle
  onPressRow: (path: string) => void
}

const NavRowGroup: React.FC<Props> = ({
  index,
  label,
  items,
  style,
  onPressRow,
}) => {
  const { styles } = useStyles({ index })

  return (
    <VStack style={[styles.wrapper, style]} gap={8}>
      {label ? (
        <Text type="caption" style={styles.label}>{label}</Text>
      ) : null}
      <VStack>
        {items.map(item => (
          <NavRow
            key={item.path}
            label={item.label}
            path={item.path}
            onPress={onPressRow}
          />
        ))}
      </VStack>
    </VStack>
  )
}

export default NavRowGroup
