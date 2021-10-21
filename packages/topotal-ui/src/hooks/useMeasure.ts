import { useCallback, useRef, useState } from 'react'
import { Dimensions, NativeMethods } from 'react-native'
import { useOnlyOnceEffect } from './useOnlyOnceEffect'

export interface Measure {
  x: number
  y: number
  width: number
  height: number
  pageX: number
  pageY: number
}

const defaultMeasure: Measure = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  pageX: 0,
  pageY: 0,
}

export const useMeasure = <T extends NativeMethods>() => {
  const ref = useRef<T>()
  const [measure, setMeasure] = useState<Measure>(defaultMeasure)

  const updateMeasure = useCallback(() => {
    if (!ref.current) return
    ref.current.measure((x, y, width, height, pageX, pageY) => {
      setMeasure({ x, y, width, height, pageX, pageY })
    })
  }, [])

  const resetMeasure = useCallback(() => {
    setMeasure(defaultMeasure)
  }, [])

  useOnlyOnceEffect(() => {
    const subscription = Dimensions.addEventListener('change', handleResize)
    return () => {
      subscription.remove()
    }
  })

  const handleResize = useCallback(() => {
    updateMeasure()
  }, [updateMeasure])

  return {
    ref,
    measure,
    setMeasure,
    updateMeasure,
    resetMeasure,
  }
}
