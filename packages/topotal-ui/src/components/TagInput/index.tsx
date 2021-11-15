import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { NativeSyntheticEvent, StyleProp, TextInput as BaseInput, TextInput, TextInputKeyPressEventData, ViewStyle } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import { HStack, InputFrame } from '..'
import { Tag } from './components/Tag'
import { useStyles } from './styles'

export interface TagData {
  label: string
  value: string
}

interface Props {
  style?: StyleProp<ViewStyle>
  value?: TagData[]
  error?: boolean
  // TODO: size?: InputFrameSize
  placeholder?: string
  disabled?: boolean
  onChange?: (value: TagData[]) => void
}

const defaultValue: TagData[] = []

export const TagInput = memo<Props>(({
  style,
  value = defaultValue,
  error,
  placeholder = 'Incert new item...',
  disabled,
  onChange,
}) => {
  const [innerValue, setInnerValue] = useState<TagData[]>(value)
  const { innerValue: textValue, handleChange: handleTextChange } = useInputValue<string>({ value: '' })
  const [compositionFnished, setCompositionFinished] = useState(true)
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles } = useStyles()
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

  useEffect(() => {
    const inputElement = ref.current as unknown as HTMLInputElement
    inputElement?.addEventListener('compositionstart', handleCompositionStart)
    inputElement?.addEventListener('compositionend', handleCompositionEnd)
    return () => {
      inputElement?.removeEventListener('compositionstart', handleCompositionStart)
      inputElement?.removeEventListener('compositionend', handleCompositionEnd)
    }
  }, [handleCompositionEnd, handleCompositionStart])

  return (
    <InputFrame
      style={style}
      error={error}
      focus={isFocused}
      disabled={disabled}
      renderInput={({ style }) => (
        <HStack
          style={[style, styles.inputWrapper]}
          align="flex-start"
        >
          {innerValue.map(tagData => (
            <Tag
              key={tagData.value}
              tagData={tagData}
              onPressRemove={handlePressRemoveTag}
            />
          ))}
          <BaseInput
            ref={element => ref.current = element}
            style={[style, styles.textInput]}
            focusable={!disabled}
            value={textValue}
            multiline={false}
            placeholder={placeholder}
            onKeyPress={handlePressKey}
            onChangeText={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </HStack>
      )}
    />
  )
})
