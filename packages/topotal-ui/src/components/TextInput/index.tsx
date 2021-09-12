import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocus } from '../../hooks/useFocusBlur'
import { useInputValue } from '../../hooks/useInputValue'
import { FocusOutline } from '../FocusOutline'
import { HStack } from '../HStack'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { useStyles } from './styles'

export type Size = 'medium' | 'large'

type BaseProps = {
  innerRef?: Ref<BaseInput>
  error?: boolean
  size?: Size
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
  const { styles } = useStyles({
    isFocused,
    error,
    size,
    startIconName,
  })
  const showPlaceholder = !innerValue

  return (
    <FocusOutline
      focus={isFocused}
      style={[styles.wrapper, style]}
      borderRadiusLevel="level1"
    >
      {startIconName ? (
        <HStack
          justify="center"
          align="center"
          style={styles.iconWrapper}
        >
          <Icon
            name={startIconName}
            style={styles.icon}
          />
        </HStack>
      ) : null}
      <BaseInput
        {...rest}
        value={innerValue}
        autoCapitalize={autoCapitalize}
        multiline={false}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
      />
      {showPlaceholder ? (
        <HStack
          style={styles.placeholderWrapper}
          pointerEvents="none"
        >
          <Text
            type="body"
            style={styles.placeholder}
          >
            {placeholder}
          </Text>
        </HStack>
      ) : null}
    </FocusOutline>
  )
})
