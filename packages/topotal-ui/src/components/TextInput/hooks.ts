import { useState, useEffect } from 'react'

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

  const handleChangeText = (newValue: string) => {
    setInnerValue(newValue)
    onChangeText && onChangeText(newValue)
  }

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return {
    isFocused,
    showPlaceholder: !isFocused && !innerValue,
    handleChangeText,
    handleFocus,
    handleBlur,
  }
}
