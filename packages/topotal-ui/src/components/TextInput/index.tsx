import React from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocusBlur } from '../../hooks/useFocusBlur'
import { useInputValue } from '../../hooks/useInputValue'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { useStyles } from './styles'

type BaseProps = {
  innerRef?: React.Ref<BaseInput>
  error?: boolean
} & React.ComponentProps<typeof BaseInput>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextInput = React.memo<Props>(({
  value = '',
  placeholder = '入力してください',
  autoCapitalize = 'none',
  multiline = false,
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
  const {
    isFocused,
    handleFocus,
    handleBlur,
  } = useFocusBlur()
  const { styles } = useStyles({ isFocused, multiline, error })
  const showPlaceholder = !isFocused && !innerValue

  return (
    <VStack style={[styles.wrapper, style]}>
      <Text style={styles.dummyText}>
        {innerValue.replace(/\n$/g, '\n ')}
      </Text>
      <VStack style={styles.outline} />
      <BaseInput
        {...rest}
        value={innerValue}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={styles.input}
      />
      {showPlaceholder ? (
        <VStack
          style={styles.placeholderWrapper}
          pointerEvents="none"
        >
          <Text
            type="body"
            style={styles.placeholder}
          >
            {placeholder}
          </Text>
        </VStack>
      ) : null}
    </VStack>
  )
})
