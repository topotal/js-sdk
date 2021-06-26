import { useCallback, useState } from 'react'

export const useFocusBlur = () => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    isFocused,
    handleFocus,
    handleBlur,
  }
}
