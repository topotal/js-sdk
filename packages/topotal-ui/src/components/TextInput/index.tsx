import React from 'react'
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ReturnKeyTypeOptions,
  KeyboardTypeOptions,
  TextInput as BaseInput,
  ViewStyle,
  StyleProp,
} from 'react-native'
import VStack from '../VStack'
import Text from '../Text'
import { useStyles } from './styles'
import { useTextInput } from './hooks'

type BaseProps = {
  defaultValue?: string
  placeholder?: string
  required?: boolean
  editable?: boolean
  error?: boolean
  secureTextEntry?: boolean
  innerRef?: React.Ref<BaseInput>
  returnKeyType?: ReturnKeyTypeOptions
  keyboardType?: KeyboardTypeOptions
  style?: StyleProp<ViewStyle>
  onChange?: (event: NativeSyntheticEvent<TextInputChangeEventData>) => void
  onChangeText?: (text: string) => void
  onSubmitEditing?: () => void
}

type Props = BaseProps & React.RefAttributes<BaseInput>

const TextInput: React.FC<Props> = ({
  defaultValue = '',
  placeholder = '入力してください',
  editable = true,
  secureTextEntry,
  returnKeyType,
  keyboardType,
  innerRef,
  style,
  onChange,
  onChangeText,
  onSubmitEditing,
}) => {
  const {
    isFocused,
    showPlaceholder,
    handleBlur,
    handleChangeText,
    handleFocus,
  } = useTextInput({ defaultValue, onChangeText })
  const { styles } = useStyles({ isFocused })

  return (
    <VStack style={[styles.wrapper, style]}>
      <BaseInput
        editable={editable}
        defaultValue={defaultValue}
        autoCapitalize="none"
        onChange={onChange}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmitEditing={onSubmitEditing}
        secureTextEntry={secureTextEntry}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        style={styles.input}
        ref={innerRef}
      />
      {showPlaceholder ? (
        <VStack style={styles.placeholderWrapper} pointerEvents="none">
          <Text style={styles.placeholder}>{placeholder}</Text>
        </VStack>
      ) : null}
    </VStack>
  )
}

export default TextInput
