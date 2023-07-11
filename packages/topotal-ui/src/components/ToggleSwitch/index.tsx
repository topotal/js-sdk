import { useCallback, useEffect, useRef, useState } from 'react'
import { Animated, StyleProp, View, ViewStyle } from 'react-native'
import { useFocus, useFocusOutlineStyle } from '../../hooks'
import { useTheme } from '../../theme'
import { getStylefromSize } from './utils'


export type ToggleSwitchSize = 'large' | 'medium' | 'small'
interface Props {
  style?: StyleProp<ViewStyle>
  value?: boolean
  size?: ToggleSwitchSize
  onChange?: (value: boolean) => void
}


export const ToggleSwitch = ({
  style,
  value = false,
  size = 'large',
  onChange,
}: Props) => {
  const [innerValue, setValue] = useState(value)
  const toggleStyles = getStylefromSize(size)
  const { color } = useTheme()
  const fadeAnim = useRef(new Animated.Value(innerValue ? toggleStyles.onPosition : toggleStyles.offPosition)).current
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
        toValue: innerValue ? toggleStyles.onPosition : toggleStyles.offPosition,
        duration: 200,
        useNativeDriver: true,
      }
    ).start()
  }, [fadeAnim, innerValue, toggleStyles])

  return (
    <View style={[{
      width: toggleStyles.width,
      height: toggleStyles.height,
    }, style]}>
      <label>
        <View
          style={{
            width: toggleStyles.width,
            height: toggleStyles.height,
            padding: toggleStyles.paddingInner,
            borderRadius: 16,
            backgroundColor: innerValue ? color.success : color.borderLight,
            ...focusStyles.wrapper,
          }}
        >
          <Animated.View
            style={{
              width: toggleStyles.animatedWidth,
              height: toggleStyles.animatedHeight,
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
