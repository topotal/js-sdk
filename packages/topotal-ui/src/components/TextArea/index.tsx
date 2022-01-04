import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import { InputFrame } from '../InputFrame'
import { Text } from '../Text'
import { useStyles } from './styles'

type BaseProps = {
  innerRef?: Ref<BaseInput>
  error?: boolean
  disabled?: boolean
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline' | 'editable'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextArea = memo<Props>(({
  value = '',
  autoCapitalize = 'none',
  error = false,
  disabled = false,
  innerRef,
  style,
  onChangeText,
  ...rest
}) => {
  const { innerValue, handleChange } = useInputValue<string>({
    value,
    onChange: onChangeText,
  })
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles, placeholderColor } = useStyles()

  return (
    <InputFrame
      style={[styles.wrapper, style]}
      error={error}
      focus={isFocused}
      disabled={disabled}
      renderInput={({ style }) => (
        <>
          <Text style={[style, styles.dummyText]}>
            {innerValue.replace(/\n$/g, '\n ')}
          </Text>
          <BaseInput
            {...rest}
            focusable={!disabled}
            value={innerValue}
            autoCapitalize={autoCapitalize}
            multiline
            placeholderTextColor={placeholderColor}
            onChangeText={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[style, styles.input]}
          />
        </>
      )}
    />
  )
})
