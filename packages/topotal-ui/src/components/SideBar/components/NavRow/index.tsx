import React, { useCallback } from 'react'
import { TouchableHighlight } from 'react-native'
import Text from '../../../Text'
import { useStyles } from './styles'

type Props = {
  label: string
  path: string
  onPress?: (path: string) => void
}

const NavRow: React.FC<Props> = ({
  label,
  path,
  onPress,
}) => {
  const { styles } = useStyles()

  const handlePress = useCallback(() => {
    onPress && onPress(path)
  }, [path, onPress])

  return (
    <TouchableHighlight
      style={styles.wrapper}
      onPress={handlePress}
    >
      <Text style={styles.label}>
        {label}
      </Text>
    </TouchableHighlight>
  )
}

export default NavRow
