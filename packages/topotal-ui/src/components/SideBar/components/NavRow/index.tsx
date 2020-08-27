import React, { useCallback } from 'react'
import { TouchableHighlight } from 'react-native'
import Text from '../../../Text'
import { useStyles } from './styles'

type Props = {
  label: string
  path: string
  as?: string
  onPress?: (path: string, as?: string) => void
}

const NavRow: React.FC<Props> = ({
  label,
  path,
  as,
  onPress,
}) => {
  const { styles } = useStyles()

  const handlePress = useCallback(() => {
    onPress && onPress(path, as)
  }, [path, as, onPress])

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
