import { memo } from 'react'
import { StyleProp, TextInput as BaseInput, View, ViewStyle } from 'react-native'
import { Tag, TagData } from '../Tag'
import { HStack, InputFrame, Text, VStack } from '..'
import { useTagInput } from './hooks'
import { useStyles } from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  value?: TagData[]
  error?: boolean
  // TODO: size?: InputFrameSize
  placeholder?: string
  disabled?: boolean
  onChange?: (value: TagData[]) => void
  testID?: string
}

export const TagInput = memo<Props>(({
  style,
  value,
  error,
  placeholder = 'Insert new item...',
  disabled,
  onChange,
  testID,
}) => {
  const { styles, placeholderColor } = useStyles()
  const {
    innerValue,
    textValue,
    isFocused,
    ref,
    handleBlurInput,
    handleFocus,
    handlePressKey,
    handlePressRemoveTag,
    handleTextChange,
  } = useTagInput({
    value,
    onChange,
  })

  return (
    <VStack style={style}>
      <InputFrame
        error={error}
        focus={isFocused}
        disabled={disabled}
        renderInput={({ style }) => (
          <HStack
            style={[style, styles.inputWrapper]}
            align="flex-start"
          >
            {innerValue.map(tagData => (
              <Tag
                key={tagData.value}
                tagData={tagData}
                onPressRemove={handlePressRemoveTag}
              />
            ))}
            <BaseInput
              ref={element => ref.current = element}
              style={[style, styles.textInput]}
              accessible={!disabled}
              aria-disabled={disabled}
              value={textValue}
              multiline={false}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              onKeyPress={handlePressKey}
              onChangeText={handleTextChange}
              onFocus={handleFocus}
              onBlur={handleBlurInput}
              testID={`${testID}_input`}
            />
          </HStack>
        )}
      />
      {textValue && isFocused ? (
        <View style={styles.dropdown}>
          <HStack style={styles.dropdownContainer}>
            <Text>Press Enter...</Text>
          </HStack>
        </View>
      ) : null}
    </VStack>
  )
})
