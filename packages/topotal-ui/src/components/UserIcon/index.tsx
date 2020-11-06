import React from 'react'
import { View, Image, ViewStyle } from 'react-native'
import { useStyles } from './styles'

export type Size = 'medium' | 'large'

type Props = {
  uri: string
  size?: Size
  style?: ViewStyle
}

const UserIcon: React.FC<Props> = ({
  uri,
  size = 'medium',
  style,
}) => {
  const { styles } = useStyles({ size })

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        source={{ uri }}
        style={styles.image}
      />
    </View>
  )
}

export default UserIcon
