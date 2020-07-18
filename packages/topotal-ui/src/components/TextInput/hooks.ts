import { useState } from 'react'

type Props = {
  defaultValue: string
  onChangeText?: (text: string) => void
}

export const useTextInput = ({ defaultValue, onChangeText }: Props) => {
  const [value, setValue] = useState(defaultValue)
  const [isFocused, setIsFocused] = useState(false)

  const handleChangeText = (newValue: string) => {
    setValue(newValue)
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
    showPlaceholder: !isFocused && !value,
    handleChangeText,
    handleFocus,
    handleBlur,
  }
}
