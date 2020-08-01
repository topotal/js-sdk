import React, { useCallback } from 'react'
import { TouchableHighlight } from 'react-native'
import { Text } from '../../..'
import { NavItem } from '../..'
import { useStyles } from './styles'

type Props = {
  item: NavItem
  onPress?: (path: string) => void
}

const NavRow: React.FC<Props> = ({ item, onPress }) => {
  const { styles } = useStyles()

  const handlePress = useCallback(() => {
    onPress && onPress(item.path)
  }, [item.path, onPress])

  return (
    <TouchableHighlight
      style={styles.wrapper}
      onPress={handlePress}
    >
      <Text style={styles.label}>
        {item.label}
      </Text>
    </TouchableHighlight>
  )
}

export default NavRow
