import { ReactElement } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { Image, Picker as BasePicker } from 'react-native'
import { useFocus, useInputValue } from '../../hooks'
import { InputFrame, InputFrameSize } from '../InputFrame'
import { useStyles } from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  value?: string
  size?: InputFrameSize
  placeholder?: string
  error?: boolean
  children: ReactElement<typeof BasePicker.Item> | Array<ReactElement<typeof BasePicker.Item>>
  onChange?: (value: string) => void
}

const arrowIconBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAP0lEQVRYw+3U2wkAMAjAQDfP6O0K/QkUzDmA+JxJkiT/Y85D4KbArQK3UbizwB037kbhLi3uXeCeHv2fJMlGFxq+Y5MR7CqIAAAAAElFTkSuQmCC'

export const Picker = Object.assign((({
  style,
  value = '',
  size = 'large',
  placeholder = '',
  error = false,
  children,
  onChange,
}: Props) => {
  const { innerValue, handleChange } = useInputValue({ value, onChange })
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles } = useStyles({ hasValue: !!innerValue })

  return (
    <InputFrame
      style={style}
      focus={isFocused}
      placeholder={placeholder}
      size={size}
      error={error}
      showPlaceholder={!innerValue}
      renderInput={({ style }) => (
        <>
          <BasePicker
            style={[style, styles.picker]}
            selectedValue={innerValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onValueChange={handleChange}
          >
            <BasePicker.Item label="--" value="" />
            {children}
          </BasePicker>
          <Image
            style={styles.arrowIcon}
            width={24}
            height={24}
            source={{ uri: arrowIconBase64 }}
          />
        </>
      )}
    />
  )
}), {
  Item: BasePicker.Item,
})
