import { useCallback, useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import { TagData } from '.'

interface Props {
  value?: TagData[]
  onChange?: (value: TagData[]) => void
}

export const useTagInput = ({
  value,
  onChange,
}: Props) => {
  const [innerValue, setInnerValue] = useState<TagData[]>(value || [])
  const { innerValue: textValue, handleChange: handleTextChange } = useInputValue<string>({ value: '' })
  const [compositionFnished, setCompositionFinished] = useState(true)
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

      if (!textValue || !compositionFnished) return

      handleTextChange('')

      if (innerValue.find(tag => tag.value === textValue)) {
        return
      }
      const newValue = [...innerValue, { label: textValue, value: textValue }]
      setInnerValue(newValue)
      onChange?.(newValue)
    }
  }, [compositionFnished, handleTextChange, innerValue, onChange, textValue])

  const handlePressRemoveTag = useCallback((targetTagData: TagData) => {
    const newValue = [...innerValue].filter(tagData => tagData.value !== targetTagData.value)
    setInnerValue(newValue)
    onChange?.(newValue)
  }, [innerValue, onChange])

  const handleBlurInput = useCallback(() => {
    handleTextChange('')
    handleBlur()
  }, [handleBlur, handleTextChange])

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
    handleTextChange,
  }
}
