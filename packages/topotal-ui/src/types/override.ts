import 'react-native'

declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean
  }

  interface PressableProps {
    onHoverIn?: (event: GestureResponderEvent) => void
    onHoverOut?: (event: GestureResponderEvent) => void
  }
}
