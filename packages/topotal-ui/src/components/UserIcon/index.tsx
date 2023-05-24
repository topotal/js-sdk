import React, { useCallback, useState } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'

export type UserIconSize = 'extraSmall' | 'small' | 'medium' | 'large'

interface Props {
  uri: string
  size?: UserIconSize
  style?: StyleProp<ViewStyle>
  testID?: string
}

export const UserIcon = React.memo<Props>(({
  uri,
  size = 'medium',
  style,
  testID,
}) => {
  const [loaded, setLoaded] = useState(false)
  const { styles } = useStyles({ size, loaded })

  const handleLoad = useCallback(() => {
    setLoaded(true)
  }, [])

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        testID={testID}
        source={{ uri }}
        style={styles.image}
        onLoad={handleLoad}
      />
    </View>
  )
})
