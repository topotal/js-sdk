import React, { useCallback, useRef } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView as BaseScrollView } from 'react-native'
import { ScrollManipulaterContext } from '../../theme'

type Props = React.ComponentProps<typeof BaseScrollView>

const ScrollView: React.FC<Props> = ({
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

  return (
    <ScrollManipulaterContext.Provider
      value={{ scrollY: scrollYRef.current }}
    >
      <BaseScrollView
        {...rest}
        scrollEventThrottle={scrollEventThrottle}
        onScroll={handleScroll}
      />
    </ScrollManipulaterContext.Provider>
  )
}

export default ScrollView
