import React, { useCallback, useState } from 'react'
import { View, Image, ViewStyle, StyleProp } from 'react-native'
import { useStyles } from './styles'

export type Size = 'small' | 'medium' | 'large'

type Props = {
  uri: string
  size?: Size
  style?: StyleProp<ViewStyle>
}

const UserIcon: React.FC<Props> = ({
  uri,
  size = 'medium',
  style,
}) => {
  const [loaded, setLoaded] = useState(false)
  const { styles } = useStyles({ size, loaded })

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        source={{ uri }}
        style={styles.image}
        onLoad={handleLoad}
      />
    </View>
  )
}

export default React.memo(UserIcon)
