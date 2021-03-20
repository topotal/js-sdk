import { useCallback, useEffect, useState } from 'react'

interface Props {
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
    innerValue,
    isFocused,
    showPlaceholder: !isFocused && !innerValue,
    handleChangeText,
    handleFocus,
    handleBlur,
  }
}
