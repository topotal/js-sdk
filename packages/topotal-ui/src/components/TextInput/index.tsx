import React from 'react'
import { TextInput as BaseInput } from 'react-native'
import { useFocusBlur } from '../../hooks/useFocusBlur'
import { useInputValue } from '../../hooks/useInputValue'
import { HStack } from '../HStack'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { useStyles } from './styles'

export type Size = 'medium' | 'large'

type BaseProps = {
  innerRef?: React.Ref<BaseInput>
  error?: boolean
  size?: Size
} & React.ComponentProps<typeof BaseInput>

type Props = BaseProps & React.RefAttributes<BaseInput>

export const TextInput = React.memo<Props>(({
  value = '',
  placeholder = '入力してください',
  autoCapitalize = 'none',
  multiline = false,
  error = false,
  size = 'large',
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
  const { styles } = useStyles({
    isFocused,
    multiline,
    error,
    size,
  })
  const showPlaceholder = !isFocused && !innerValue

  return (
    <VStack style={[styles.wrapper, style]}>
      <VStack
        style={styles.outline}
        pointerEvents="none"
      />
      {multiline ? (
        <Text style={styles.dummyText}>
          {innerValue.replace(/\n$/g, '\n ')}
        </Text>
      ) : null}
      <HStack
        align="center"
        style={styles.inputWrapper}
      >
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
      </HStack>
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
    </VStack>
  )
})
