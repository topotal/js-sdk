declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean
  }

  interface PickerProps {
    onFocus?: () => void
    onBlur?: () => void
  }
}
