import { memo } from 'react'
import { StyleProp, TextInput as BaseInput, View, ViewStyle } from 'react-native'
import { HStack, InputFrame, Text, VStack } from '..'
import { Tag } from './components/Tag'
import { useTagInput } from './hooks'
import { useStyles } from './styles'

export interface TagData {
  label: string
  value: string
}

interface Props {
  style?: StyleProp<ViewStyle>
  value?: TagData[]
  error?: boolean
  // TODO: size?: InputFrameSize
  placeholder?: string
  disabled?: boolean
  onChange?: (value: TagData[]) => void
  testId?: string
}

export const TagInput = memo<Props>(({
  style,
  value,
  error,
  placeholder = 'Insert new item...',
  disabled,
  onChange,
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
              focusable={!disabled}
              value={textValue}
              multiline={false}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              onKeyPress={handlePressKey}
              onChangeText={handleTextChange}
              onFocus={handleFocus}
              onBlur={handleBlurInput}
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
