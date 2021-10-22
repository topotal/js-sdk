import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocus, useFocusOutlineStyle, useInputValue } from '../../hooks'
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
} & Omit<React.ComponentProps<typeof BaseInput>, 'multiline'>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextInput = memo<Props>(({
  value = '',
  placeholder = '',
  autoCapitalize = 'none',
  error = false,
  size = 'large',
  disabled = false,
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
  const { styles: focusOutlineStyles } = useFocusOutlineStyle({ focus: isFocused, disabledPointerEvents: disabled })

  return (
    <InputFrame
      style={[style, focusOutlineStyles.wrapper]}
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
          focusable={!disabled}
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
