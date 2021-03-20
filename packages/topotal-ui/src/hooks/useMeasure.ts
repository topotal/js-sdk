import { useCallback, useRef, useState } from 'react'
import { NativeMethods } from 'react-native'
import { useOnlyOnceEffect } from './useOnlyOnceEffect'

export interface Measure {
  x: number
  y: number
  width: number
  height: number
  pageX: number
  pageY: number
}

export const useMeasure = <T extends NativeMethods>() => {
  const ref = useRef<T>()
  const [measure, setMeasure] = useState<Measure>()

  const updateMeasure = useCallback(() => {
    if (!ref.current) return
    ref.current.measure((x, y, width, height, pageX, pageY) => {
      setMeasure({ x, y, width, height, pageX, pageY })
    })
  }, [])

  useOnlyOnceEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
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
  }
}
