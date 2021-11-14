import type { TextStyle, ViewStyle } from 'react-native'
import { Platform, StyleSheet } from 'react-native'
import { useFocusOutlineStyle } from '../../hooks'
import type { ThemeColor } from '../../theme'
import { useTheme } from '../../theme'
import type { InputFrameSize } from '.'
import { getGeometryStyles } from './utils'

interface Styles {
  wrapper: ViewStyle
  leftItemWrapper: ViewStyle
  inputWrapper: ViewStyle
  input: TextStyle
}

interface Props {
  focus: boolean
  error: boolean
  size: InputFrameSize
  hasLeftItem?: boolean
  disabledPointerEvents?: boolean
}

export const getBorderColor = (focus: boolean, error: boolean): keyof ThemeColor => {
  if (error) return 'error'
  if (focus) return 'primary'
  return 'borderLight'
}

export const useStyles = ({
  focus,
  error,
  size,
  hasLeftItem = false,
  disabledPointerEvents = false,
}: Props) => {
  const { color, text, radius } = useTheme()
  const { styles: focusOutlineStyle } = useFocusOutlineStyle({ focus, disabledPointerEvents })
  const borderColor = getBorderColor(focus, error)
  const {
    height,
    lineHeight,
    paddingRight,
    paddingLeft,
    paddingVertical,
  } = getGeometryStyles(size, hasLeftItem)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
      width: '100%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: color[borderColor],
      backgroundColor: focus ? color.transparent : color.background,
      borderRadius: radius.level1,
      overflow: 'hidden',
      ...focusOutlineStyle.wrapper,
    },
    leftItemWrapper: {
      width: height - 2,
      borderRightWidth: 1,
      borderColor: color.borderLight,
      backgroundColor: color.background,
    },
    inputWrapper: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      ...text.type.body,
      flex: 1,
      paddingLeft,
      paddingRight,
      paddingVertical,
      minHeight: height,
      lineHeight,
      color: color.primaryTextDark,
      ...(Platform.OS === 'web' ? {
        boxShadow: '0px transparent',
        outlineWidth: 0,
        outlineOffset: 0,
        outlineStyle: 'none',
      } : {}),
    },
  })

  return {
    styles,
  }
}
