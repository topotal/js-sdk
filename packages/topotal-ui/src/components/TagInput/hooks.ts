import { useCallback, useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native'
import { useFocus } from '../../hooks'
import { TagData } from '.'

interface Props {
  value?: TagData[]
  onChange?: (value: TagData[]) => void
}

export const useTagInput = ({ value, onChange }: Props) => {
  const [innerValue, setInnerValue] = useState<TagData[]>(value || [])
  const [textValue, setTextValue] = useState('')
  const [compositionFinished, setCompositionFinished] = useState(true)
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const ref = useRef<TextInput | null>()

  const handleCompositionStart = useCallback(() => {
    setCompositionFinished(false)
  }, [])

  const handleCompositionEnd = useCallback(() => {
    setCompositionFinished(true)
  }, [])

  const handlePressKey = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === 'Enter') {
      event.preventDefault()

      if (!textValue || !compositionFinished) return

      setTextValue('')
      if (innerValue.find(tag => tag.value === textValue)) return
      const newValue = [...innerValue, { label: textValue, value: textValue }]
      setInnerValue(newValue)
      onChange?.(newValue)
    }
  }, [compositionFinished, setTextValue, innerValue, onChange, textValue])

  const handlePressRemoveTag = useCallback((targetTagData: TagData) => {
    const newValue = [...innerValue].filter(tagData => tagData.value !== targetTagData.value)
    setInnerValue(newValue)
    onChange?.(newValue)
  }, [innerValue, onChange])

  const handleBlurInput = useCallback(() => {
    setTextValue('')
    handleBlur()
  }, [handleBlur, setTextValue])

  useEffect(() => {
    const inputElement = ref.current as unknown as HTMLInputElement
    inputElement?.addEventListener('compositionstart', handleCompositionStart)
    inputElement?.addEventListener('compositionend', handleCompositionEnd)
    return () => {
      inputElement?.removeEventListener('compositionstart', handleCompositionStart)
      inputElement?.removeEventListener('compositionend', handleCompositionEnd)
    }
  }, [handleCompositionEnd, handleCompositionStart])

  return {
    innerValue,
    textValue,
    isFocused,
    ref,
    handlePressKey,
    handlePressRemoveTag,
    handleFocus,
    handleBlurInput,
    handleTextChange: setTextValue,
  }
}
