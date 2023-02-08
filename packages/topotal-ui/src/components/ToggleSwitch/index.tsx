import { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, StyleProp, View, ViewStyle } from 'react-native'
import { useFocus, useFocusOutlineStyle } from '../../hooks'
import { useTheme } from '../../theme'

interface Props {
  style?: StyleProp<ViewStyle>
  value?: boolean
  onChange?: (value: boolean) => void
}

const ON_POSITION = 32
const OFF_POSITION = 0

export const ToggleSwitch = ({
  style,
  value = false,
  onChange,
}: Props) => {
  const [innerValue, setValue] = useState(value)
  const { color } = useTheme()
  const fadeAnim = useRef(new Animated.Value(innerValue ? ON_POSITION : OFF_POSITION)).current
  const { isFocused, handleFocus, handleBlur } = useFocus()
  const { styles: focusStyles } = useFocusOutlineStyle({ focus: isFocused })

  const handleChange = useCallback(() => {
    const newValue = !innerValue
    setValue(newValue)
    onChange?.(newValue)
  }, [innerValue, onChange])

  useEffect(() => {
    setValue(value)
  }, [value])

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: innerValue ? ON_POSITION : OFF_POSITION,
        duration: 200,
        useNativeDriver: true,
      }
    ).start()
  }, [fadeAnim, innerValue])

  return (
    <View style={[{
      width: 64,
      height: 32,
    }, style]}>
      <label>
        <View
          style={{
            width: 64,
            height: 32,
            padding: 3,
            borderRadius: 16,
            backgroundColor: innerValue ? color.success : color.borderLight,
            ...focusStyles.wrapper,
          }}
        >
          <Animated.View
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              backgroundColor: '#fff',
              transform: [
                {
                  translateX: fadeAnim,
                },
              ],
            }}
          />
          <input
            style={{
              position: 'absolute',
              opacity: 0,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              cursor: 'pointer',
            }}
            type="checkbox"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
      </label>
    </View>
  )
}