import React from 'react'
import { TextInput as BaseInput } from 'react-native'
import VStack from '../VStack'
import Text from '../Text'
import { useStyles } from './styles'
import { useTextInput } from './hooks'

type BaseProps = {
  innerRef?: React.Ref<BaseInput>
  error?: boolean
} & React.ComponentProps<typeof BaseInput>

type Props = BaseProps & React.RefAttributes<BaseInput>

const TextInput: React.FC<Props> = ({
  value = '',
  placeholder = '入力してください',
  autoCapitalize = 'none',
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
  const { styles } = useStyles({ isFocused, error })

  return (
    <VStack style={[styles.wrapper, style]}>
      <BaseInput
        {...rest}
        value={innerValue}
        autoCapitalize={autoCapitalize}
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
}

export default TextInput
