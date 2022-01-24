import { memo, useEffect, useRef } from 'react'
import { Animated, StyleProp, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'

interface Props {
  style?: StyleProp<ViewStyle>
}

export const Skelton = memo<Props>(({ style }) => {
  const fadeAnim = useRef(new Animated.Value(0.2)).current
  const { color } = useTheme()

  useEffect(() => {
    const anime = Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 750,
          useNativeDriver: false,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.2,
          duration: 750,
          useNativeDriver: false,
        }),
      ]),
    )
    anime.start()
  }, [fadeAnim])

  return (
    <Animated.View
      style={[{
        width: 100,
        height: 100,
        backgroundColor: color.secondaryTextDark,
        opacity: fadeAnim,
      }, style]}
    />
  )
})
