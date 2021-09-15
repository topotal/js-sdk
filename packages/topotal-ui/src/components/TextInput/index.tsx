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
  startIconName?: string
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextInput = memo<Props>(({
  value = '',
  placeholder = '',
  autoCapitalize = 'none',
  error = false,
  size = 'large',
  startIconName,
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
      style={style}
      size={size}
      error={error}
      focus={isFocused}
      placeholder={placeholder}
      showPlaceholder={!innerValue}
      renderLeftItem={startIconName ? () => (
        <Icon
          name={startIconName}
          style={styles.icon}
        />
      ) : undefined}
      renderInput={({ style }) => (
        <BaseInput
          {...rest}
          value={innerValue}
          autoCapitalize={autoCapitalize}
          multiline={false}
          onChangeText={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={style}
        />
      )}
    />
  )
})
