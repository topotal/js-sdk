import { StyleProp, TextInput as BaseInput, ViewStyle } from 'react-native'
import { Tag, TagData } from '../Tag'
import { HStack, InputFrame, VStack } from '..'
import { SelectDropdown } from './components/SelectDropdown'
import { useSelectTagInput } from './hooks'
import { useStyles } from './styles'

interface Props<T> {
  style?: StyleProp<ViewStyle>
  value?: T[]
  items: T[]
  error?: boolean
  // TODO: size?: InputFrameSize
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  autoFocus?: boolean
  maxDropdownItems?: number
  testID?: string
  renderItem: (item: T, active: boolean, pressable: boolean) => JSX.Element
  tagDataGenarator: (item: T) => TagData
  pressableChecker?: (item: T) => boolean
  onFocus?: () => void
  onBlur?: () => void
  onChange?: (value: T[]) => void
  onChangeText?: (text: string) => void
}

export const SelectTagInput = <T, >({
  style,
  value,
  items,
  error,
  placeholder = 'Insert new item...',
  disabled,
  autoFocus,
  loading = false,
  maxDropdownItems,
  testID,
  tagDataGenarator,
  pressableChecker,
  renderItem,
  onFocus,
  onBlur,
  onChange,
  onChangeText,
}: Props<T>): JSX.Element => {
  const { styles, placeholderColor } = useStyles()
  const {
    textInputRef,
    innerValue,
    textValue,
    filteredItems,
    currentIndex,
    showDropdown,
    updateTextValue,
    setCurrentIndex,
    handleFocus,
    handleBlur,
    handleHoverInDropdown,
    handleHoverOutDropdown,
    handlePressKey,
    handlePressRemoveTag,
    handlePressItem,
  } = useSelectTagInput<T>({
    value,
    items,
    maxDropdownItems,
    tagDataGenarator,
    onFocus,
    onBlur,
    onChange,
    onChangeText,
  })

  return (
    <VStack style={style}>
      <InputFrame
        error={error}
        focus={showDropdown}
        disabled={disabled}
        renderInput={({ style }) => (
          <HStack
            style={[style, styles.inputWrapper]}
            align="flex-start"
          >
            {innerValue.map(item => {
              const tagData = tagDataGenarator(item)
              return (
                <Tag
                  key={tagData.value}
                  tagData={tagData}
                  onPressRemove={handlePressRemoveTag}
                />
              )
            })}
            <BaseInput
              ref={element => textInputRef.current = element}
              style={[style, styles.textInput]}
              accessible={!disabled}
              value={textValue}
              multiline={false}
              placeholder={placeholder}
              placeholderTextColor={placeholderColor}
              autoFocus={autoFocus}
              onKeyPress={handlePressKey}
              onChangeText={updateTextValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              testID={`${testID}_input`}
            />
          </HStack>
        )}
      />
      {showDropdown ? (
        <SelectDropdown
          items={filteredItems}
          currentIndex={currentIndex}
          loading={loading}
          renderItem={renderItem}
          tagDataGenarator={tagDataGenarator}
          pressableChecker={pressableChecker}
          onPressItem={handlePressItem}
          onHoverIn={handleHoverInDropdown}
          onHoverOut={handleHoverOutDropdown}
          onHoverItem={setCurrentIndex}
          onFocusItem={setCurrentIndex}
        />
      ) : null}
    </VStack>
  )
}
