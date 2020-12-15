import React, { useCallback } from 'react'
import { TouchableHighlight, ViewStyle } from 'react-native'
import Icon from '../../../Icon'
import HStack from '../../../HStack'
import Text from '../../../Text'
import { NavItem } from '../..'
import { useStyles } from './styles'

type Props = {
  item: NavItem
  selected?: boolean
  close?: boolean
  style?: ViewStyle
  onPress?: (path: string, as?: string) => void
}

const NavRow: React.FC<Props> = ({
  item,
  selected = false,
  close = false,
  style,
  onPress,
}) => {
  const { styles } = useStyles({ selected, close })

  const handlePress = useCallback(() => {
    onPress && onPress(item.path, item.as)
  }, [item.path, item.as, onPress])

  return (
    <TouchableHighlight
      style={[styles.wrapper, style]}
      disabled={selected}
      onPress={handlePress}
    >
      <HStack
        style={styles.content}
        align="center"
        gap={16}
      >
        <Icon
          style={styles.icon}
          name={item.iconName}
        />
        {close ? null : (
          <Text style={styles.label}>
            {item.label}
          </Text>
        )}
      </HStack>
    </TouchableHighlight>
  )
}

export default NavRow
