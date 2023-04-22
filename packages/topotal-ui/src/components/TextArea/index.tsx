import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react'
import { NativeSyntheticEvent, TextInput as BaseInput, TextInput, TextInputKeyPressEventData, TextInputSelectionChangeEventData, View } from 'react-native'
import { useFocus, useMeasure } from '../../hooks'
import { InputFrame } from '../InputFrame'
import { Text } from '../Text'
import { useStyles } from './styles'

export interface TextAreaCompletionItem {
  label: string
  value: string
}

type BaseProps = {
  error?: boolean
  disabled?: boolean
  testID?: string
  completionView?: React.ReactNode
  onCmdEnterPress?: VoidFunction
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline' | 'editable'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextArea = forwardRef(({
  value,
  autoCapitalize = 'none',
  error = false,
  disabled = false,
  completionView,
  style,
  testID,
  onChangeText,
  onSelectionChange,
  onCmdEnterPress,
  ...rest
}: Props, ref: ForwardedRef<TextInput>) => {
  const [innerValue, setInnerValue] = useState<string>(value || '')
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const [selectionStart, setSelectionStart] = useState(0)
  const inputText = innerValue.replace(/\n$/g, '\n ')
  const { ref: cursorRef, measure: cursorMeasure, updateMeasure } = useMeasure<View>()
  const { styles, placeholderColor } = useStyles({ cursorMeasure })

  const handleSelectionChange = useCallback((event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) => {
    setSelectionStart(event.nativeEvent.selection.start)
    updateMeasure()
    onSelectionChange?.(event)
  }, [onSelectionChange, updateMeasure])

  const handleChangeText = useCallback((text: string) => {
    setInnerValue(text)
    onChangeText?.(text)
  }, [onChangeText])

  const handleKeyPress = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const { key } = event.nativeEvent
    const keyEvents = event.nativeEvent as any

    if((event.nativeEvent.key === 'Enter' && keyEvents.metaKey) || (key === 'Enter' && keyEvents.ctrlKey)) {
      onCmdEnterPress?.()
    }
  }, [onCmdEnterPress])

  useEffect(() => {
    setInnerValue(value || '')
  }, [value])

  return (
    <InputFrame
      style={[styles.wrapper, style]}
      error={error}
      focus={isFocused}
      disabled={disabled}
      renderInput={({ style }) => (
        <>
          {/** テキストエリアの高さを自動で広げていくためにダミーのテキストを表示させている */}
          <Text style={[style, styles.dummyText]}>
            {inputText.slice(0, selectionStart)}
            <View ref={element => { cursorRef.current = element || undefined }} style={styles.dummyCursor} />
            {inputText.slice(selectionStart)}
          </Text>
          <BaseInput
            ref={ref}
            {...rest}
            value={value}
            focusable={!disabled}
            autoCapitalize={autoCapitalize}
            multiline
            placeholderTextColor={placeholderColor}
            onChangeText={handleChangeText}
            onSelectionChange={handleSelectionChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyPress={handleKeyPress}
            style={[style, styles.input]}
            testID={testID}
          />
          {isFocused && completionView ? (
            <View style={styles.completion}>
              {completionView}
            </View>
          ) : null}
        </>
      )}
    />
  )
})
