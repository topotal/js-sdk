import 'react-native'

declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean
  }

  interface PressableProps {
    onHoverIn?: () => void
    onHoverOut?: () => void
  }
}
