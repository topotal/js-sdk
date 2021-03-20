import React, { useCallback, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView as BaseScrollView } from 'react-native'
import { ScrollManipulaterContext } from '../../theme'

type Props = React.ComponentProps<typeof BaseScrollView>

export const ScrollView: React.FC<Props> = ({
  scrollEventThrottle = 16,
  onScroll,
  ...rest
}) => {
  const scrollYRef = useRef(0)

  const handleScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollYRef.current = event.nativeEvent.contentOffset.y
    if (onScroll) {
      onScroll(event)
    }
  }, [onScroll])

  const getScrollY = useCallback(() => {
    return scrollYRef.current
  }, [])

  return (
    <ScrollManipulaterContext.Provider
      value={{ getScrollY }}
    >
      <BaseScrollView
        {...rest}
        scrollEventThrottle={scrollEventThrottle}
        onScroll={handleScroll}
      />
    </ScrollManipulaterContext.Provider>
  )
}
