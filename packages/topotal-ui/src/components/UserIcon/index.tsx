import React, { useCallback, useState } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'

export type Size = 'small' | 'medium' | 'large'

interface Props {
  uri: string
  size?: Size
  style?: StyleProp<ViewStyle>
}

export const UserIcon = React.memo<Props>(({
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
})
