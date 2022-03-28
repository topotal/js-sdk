import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
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
          focusable={!disabled}
          value={innerValue}
          autoCapitalize={autoCapitalize}
          placeholderTextColor={placeholderColor}
          multiline={false}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={style}
          testID={testID}
        />
      )}
    />
  )
})
