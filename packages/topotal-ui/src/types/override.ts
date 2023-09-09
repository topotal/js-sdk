import { MouseEvent } from 'react-native'

declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean
  }

  interface PressableProps {
    onHoverIn?: null | ((event: MouseEvent) => void) | undefined;
    onHoverOut?: null | ((event: MouseEvent) => void) | undefined;
  }

  interface PickerProps {
    onFocus?: () => void
    onBlur?: () => void
  }
}
