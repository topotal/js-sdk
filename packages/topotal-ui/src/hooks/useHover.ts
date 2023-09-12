import { useCallback, useState } from 'react'
import { MouseEvent } from 'react-native'

export const useHover = () => {
  const [hovering, setHovering] = useState(false)

  const handleHoverIn = useCallback(() => {
    setHovering(true)
  }, [])

  const handleHoverOut = useCallback((event: MouseEvent) => {
    if (event.type === 'pointerleave') {
      setHovering(false)
    }
  }, [])

  return {
    hovering,
    handleHoverIn,
    handleHoverOut,
  }
}
