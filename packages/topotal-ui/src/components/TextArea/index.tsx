import { memo, Ref } from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocus } from '../../hooks/useFocusBlur'
import { useInputValue } from '../../hooks/useInputValue'
import { FocusOutline } from '../FocusOutline'
import { HStack } from '../HStack'
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
  const { styles } = useStyles({ isFocused, error })
  const showPlaceholder = !innerValue

  return (
    <FocusOutline
      focus={isFocused}
      style={[styles.wrapper, style]}
      borderRadiusLevel="level1"
    >
      <Text style={styles.dummyText}>
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
