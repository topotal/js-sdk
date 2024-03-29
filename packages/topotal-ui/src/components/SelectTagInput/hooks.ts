import { useCallback, useMemo, useRef, useState } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputKeyPressEventData } from 'react-native'
import { useFocus, useHover, useInputValue } from '../../hooks'
import { TagData } from '../Tag'

interface Props<T> {
  value?: T[]
  items: T[],
  maxDropdownItems?: number
  tagDataGenarator: (item: T) => TagData
  onFocus?: () => void
  onBlur?: () => void
  onChange?: (value: T[]) => void
  onChangeText?: (text: string) => void
}

const emptyValue: never[] = []

export const useSelectTagInput = <T>({
  value = emptyValue,
  items,
  maxDropdownItems,
  tagDataGenarator,
  onFocus,
  onBlur,
  onChange,
  onChangeText,
}: Props<T>) => {
  const textInputRef = useRef<TextInput | null>()
  const { innerValue, handleChange: setInnerValue } = useInputValue<T[]>({ value })
  const { innerValue: textValue, handleChange: setTextValue } = useInputValue<string>({ value: '' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = useMemo(() => {
    const innerValueTagData = innerValue.map(tagDataGenarator)
    // 選択済みのものを除外
    const newItems = items.filter(item => {
      return !innerValueTagData.find(tagData => {
        return tagData.value === tagDataGenarator(item).value
      })
    })
    // 未入力であれば最大数まで全て返す
    if (!textValue) return newItems.slice(0, maxDropdownItems)
    // 入力値にマッチするものを返す
    return newItems.filter(item => tagDataGenarator(item).label.includes(textValue))
      .slice(0, maxDropdownItems) // 最大表示数で絞る
  }, [innerValue, tagDataGenarator, items, textValue, maxDropdownItems])

  const updateTextValue = useCallback((newValue: string) => {
    setTextValue(newValue)
    setCurrentIndex(0)
    onChangeText?.(newValue)
  }, [onChangeText, setTextValue])

  const updateInnerValue = useCallback((newValue: T[]) => {
    setInnerValue(newValue)
    updateTextValue('')
    onChange?.(newValue)
  }, [onChange, setInnerValue, updateTextValue])

  const {
    isFocused: isFocusedInput,
    handleFocus: handleFocusInput,
    handleBlur: handleBlurInput,
  } = useFocus()

  const {
    hovering: isHoveringDropdown,
    handleHoverIn: handleHoverInDropdown,
    handleHoverOut: handleHoverOutDropdown,
  } = useHover()

  const handleFocus = useCallback(() => {
    handleFocusInput()
    onFocus?.()
  }, [handleFocusInput, onFocus])

  const handleBlur = useCallback(() => {
    handleBlurInput()
    onBlur?.()
  }, [handleBlurInput, onBlur])

  const handlePressKey = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    switch (event.nativeEvent.key) {
      case 'Backspace':
        if (textValue || innerValue.length === 0) return
        event.preventDefault()
        updateInnerValue(innerValue.slice(0, -1))
        return
      case 'Enter':
        if (!filteredItems[currentIndex]) return
        event.preventDefault()
        updateInnerValue([...innerValue, filteredItems[currentIndex]])
        return
      case 'ArrowUp':
        event.preventDefault()
        setCurrentIndex(currentIndex => Math.max(0, currentIndex - 1))
        return
      case 'ArrowDown':
        event.preventDefault()
        setCurrentIndex(currentIndex => Math.min(filteredItems.length - 1, currentIndex + 1))
        return
    }
  }, [currentIndex, filteredItems, innerValue, textValue, updateInnerValue])

  const handlePressRemoveTag = useCallback((target: TagData) => {
    const newValue = [...innerValue].filter(item => tagDataGenarator(item).value !== target.value)
    updateInnerValue(newValue)
    // Click により Input からフォーカスが外れるため Input にフォーカスを戻す
    textInputRef.current?.focus()
  }, [innerValue, tagDataGenarator, updateInnerValue])

  const handlePressItem = useCallback((item: T) => {
    updateInnerValue([...innerValue, item])
    updateTextValue('')
    // Click により Input からフォーカスが外れるため Input にフォーカスを戻す
    textInputRef.current?.focus()
  }, [innerValue, updateInnerValue, updateTextValue])

  return {
    textInputRef,
    innerValue,
    textValue,
    filteredItems,
    currentIndex,
    showDropdown: isFocusedInput || isHoveringDropdown,
    updateTextValue,
    setCurrentIndex,
    handlePressKey,
    handlePressRemoveTag,
    handleFocus,
    handleBlur,
    handleBlurInput,
    handleHoverInDropdown,
    handleHoverOutDropdown,
    handlePressItem,
  }
}
