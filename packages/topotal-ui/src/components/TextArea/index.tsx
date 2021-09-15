import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import { InputFrame } from '../InputFrame'
import { Text } from '../Text'
import { useStyles } from './styles'

type BaseProps = {
  innerRef?: Ref<BaseInput>
  error?: boolean
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextArea = memo<Props>(({
  value = '',
  placeholder = '',
  autoCapitalize = 'none',
  error = false,
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
  const { styles } = useStyles()

  return (
    <InputFrame
      style={[styles.wrapper, style]}
      error={error}
      placeholder={placeholder}
      showPlaceholder={!innerValue}
      focus={isFocused}
      renderInput={({ style }) => (
        <>
          <Text style={[style, styles.dummyText]}>
            {innerValue.replace(/\n$/g, '\n ')}
          </Text>
          <BaseInput
            {...rest}
            value={innerValue}
            autoCapitalize={autoCapitalize}
            multiline
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
