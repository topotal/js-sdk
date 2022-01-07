import { ReactElement } from 'react'
import { Image, StyleProp, View, ViewStyle } from 'react-native'
import { Picker as BasePicker } from '@react-native-picker/picker'
import { useFocus, useInputValue } from '../../hooks'
import { InputFrame, InputFrameSize } from '../InputFrame'
import { Text } from '..'
import { useStyles } from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  value?: string
  size?: InputFrameSize
  placeholder?: string
  error?: boolean
  disabled?: boolean
  children: ReactElement<typeof BasePicker.Item> | Array<ReactElement<typeof BasePicker.Item>>
  onChange?: (value: string) => void
}

export type Size = InputFrameSize

const arrowIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAP0lEQVRYw+3U2wkAMAjAQDfP6O0K/QkUzDmA+JxJkiT/Y85D4KbArQK3UbizwB037kbhLi3uXeCeHv2fJMlGFxq+Y5MR7CqIAAAAAElFTkSuQmCC'

export const Picker = Object.assign((({
  style,
  value = '',
  size = 'large',
  placeholder = '',
  error = false,
  disabled = false,
  children,
  onChange,
}: Props) => {
  const { innerValue, handleChange } = useInputValue({ value, onChange })
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles } = useStyles({ hasValue: !!innerValue, size })

  return (
    <InputFrame
      style={style}
      focus={isFocused}
      size={size}
      error={error}
      renderInput={({ style }) => (
        <>
          <BasePicker
            style={[style, styles.picker]}
            selectedValue={innerValue}
            enabled={!disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onValueChange={handleChange}
          >
            {innerValue ? null : (
              <BasePicker.Item label="--" value="" />
            )}
            {children}
          </BasePicker>
          {innerValue ? null : (
            <View pointerEvents="none" style={styles.placeholderWrapper}>
              <Text style={[style, styles.placeholder]}>
                {placeholder}
              </Text>
            </View>
          )}
          <View pointerEvents="none" style={styles.arrowIconWrapper}>
            <Image
              style={styles.arrowIcon}
              source={{ uri: arrowIconBase64 }}
            />
          </View>
        </>
      )}
    />
  )
}), {
  Item: BasePicker.Item,
})
