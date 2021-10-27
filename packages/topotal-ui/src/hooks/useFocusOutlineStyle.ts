import { Platform, ViewStyle } from 'react-native'
import { useTheme } from '../theme'

interface Styles {
  wrapper: ViewStyle
}

interface Props {
  focus?: boolean
  disabledPointerEvents?: boolean
}

export const useFocusOutlineStyle = ({
  focus = false,
  disabledPointerEvents = false,
}: Props) => {
  const { color } = useTheme()

  const styles: Styles = {
    wrapper: {
      ...(Platform.OS === 'web' ? {
        boxShadow: focus ? `${color.focus} 0px 0px 0px 3px` : '',
        outlineWidth: 0,
        outlineOffset: 0,
        outlineStyle: 'none',
        pointerEvents: disabledPointerEvents ? 'none' : 'auto',
      } : {}) as ViewStyle,
    },
  }

  return {
    styles,
  }
}
