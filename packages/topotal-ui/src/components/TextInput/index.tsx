import { memo, Ref, useCallback } from 'react'
import { NativeSyntheticEvent, TextInput as BaseInput, TextInputKeyPressEventData } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import type { InputFrameSize } from '../InputFrame'
import { InputFrame } from '../InputFrame'
import { Icon } from '..'
import { useStyles } from './styles'

type BaseProps = {
  innerRef?: Ref<BaseInput>
  error?: boolean
  size?: InputFrameSize
  disabled?: boolean
  startIconName?: string
  testID?: string
  onCmdEnterPress?: VoidFunction
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline' | 'editable'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextInput = memo<Props>(({
  value = '',
  autoCapitalize = 'none',
  error = false,
  size = 'large',
  disabled = false,
  startIconName,
  innerRef,
  style,
  testID,
  onKeyPress,
  onChangeText,
  onCmdEnterPress,
  ...rest
}) => {
  const { innerValue, handleChange } = useInputValue<string>({
    value,
    onChange: onChangeText,
  })
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles, placeholderColor } = useStyles()
  const handleKeyPress = useCallback((event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    const { key } = event.nativeEvent
    const keyEvents = event.nativeEvent as any

    if((event.nativeEvent.key === 'Enter' && keyEvents.metaKey) || (key === 'Enter' && keyEvents.ctrlKey)) {
      onCmdEnterPress?.()
      return
    }

    onKeyPress?.(event)
  }, [onCmdEnterPress, onKeyPress])

  return (
    <InputFrame
      style={style}
      size={size}
      error={error}
      focus={isFocused}
      disabled={disabled}
      renderLeftItem={startIconName ? () => (
        <Icon
          name={startIconName}
          style={styles.icon}
        />
      ) : undefined}
      renderInput={({ style }) => (
        <BaseInput
          {...rest}
          accessible={!disabled}
          value={innerValue}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={placeholderColor}
          multiline={false}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          style={style}
          testID={testID}
        />
      )}
    />
  )
})
