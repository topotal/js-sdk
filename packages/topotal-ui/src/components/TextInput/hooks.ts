import { useState, useEffect, useCallback } from 'react'

type Props = {
  value: string
  onChangeText?: (text: string) => void
}

export const useTextInput = ({ value, onChangeText }: Props) => {
  const [innerValue, setInnerValue] = useState(value)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setInnerValue(value)
  }, [value])

  const handleChangeText = useCallback((newValue: string) => {
    setInnerValue(newValue)
    onChangeText && onChangeText(newValue)
  }, [onChangeText])

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    isFocused,
    showPlaceholder: !isFocused && !innerValue,
    handleChangeText,
    handleFocus,
    handleBlur,
  }
}
