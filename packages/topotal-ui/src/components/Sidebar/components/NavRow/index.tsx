import React, { useCallback } from 'react'
import { View, TouchableHighlight, ViewStyle } from 'react-native'
import HStack from '../../../HStack'
import Text from '../../../Text'
import { useStyles } from './styles'

type Props = {
  label: string
  path: string
  as?: string
  selected?: boolean
  close?: boolean
  style?: ViewStyle
  onPress?: (path: string, as?: string) => void
}

const NavRow: React.FC<Props> = ({
  label,
  path,
  as,
  selected = false,
  close = false,
  style,
  onPress,
}) => {
  const { styles } = useStyles({ selected, close })

  const handlePress = useCallback(() => {
    onPress && onPress(path, as)
  }, [path, as, onPress])

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
        <View style={styles.icon} />
        {close ? null : (
          <Text style={styles.label}>
            {label}
          </Text>
        )}
      </HStack>
    </TouchableHighlight>
  )
}

export default NavRow
