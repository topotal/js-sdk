import { useCallback, useEffect, useState } from 'react'
import { Dimensions, ScaledSize } from 'react-native'

const defaultScaledSize: ScaledSize = {
  width: 0,
  height: 0,
  scale: 1,
  fontScale: 1,
}

export const useDimensions = () => {
  const [screenScaledSize, setScreenScaledSize] = useState(defaultScaledSize)
  const [windowScaledSize, setWindowScaledSize] = useState(defaultScaledSize)

  useEffect(() => {
    setScreenScaledSize(Dimensions.get('screen'))
    setWindowScaledSize(Dimensions.get('window'))
  }, [])

  const handleChange = useCallback(({ screen, window: win }: { window: ScaledSize; screen: ScaledSize }) => {
    setScreenScaledSize(screen)
    setWindowScaledSize(win)
  }, [])

  useEffect(() => {
    Dimensions.addEventListener('change', handleChange)
    return () => {
      Dimensions.removeEventListener('change', handleChange)
    }
  }, [handleChange, setScreenScaledSize, setWindowScaledSize])

  return {
    screenScaledSize,
    windowScaledSize,
  }
}
