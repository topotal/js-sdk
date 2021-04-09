import React from 'react'
import { TextInput as BaseInput } from 'react-native'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { useTextInput } from './hooks'
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
  const {
    innerValue,
    isFocused,
    showPlaceholder,
    handleBlur,
    handleChangeText,
    handleFocus,
  } = useTextInput({ value, onChangeText })
  const { styles } = useStyles({ isFocused, multiline, error })

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
        onChangeText={handleChangeText}
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
