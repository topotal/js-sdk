import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { Size } from '.'

interface Styles {
  picker: TextStyle
  arrowIcon: ImageStyle
  arrowIconWrapper: ViewStyle
}

interface Props {
  hasValue: boolean
  size: Size
}

const getIconSize = (size: Size) => {
  switch (size) {
    case 'large':
    case 'medium':
      return 24
    case 'small':
      return 16
  }
}

export const useStyles = ({ hasValue, size }: Props) => {
  const styles = StyleSheet.create<Styles>({
    picker: {
      borderWidth: 0,
      backgroundColor: 'transparent',
      opacity: hasValue ? 1 : 0,
      ...(Platform.OS === 'web' ? {
        cursor: 'pointer',
        appearance: 'none',
      } : {}),
    },
    arrowIconWrapper: {
      position: 'absolute',
      right: 8,
    },
    arrowIcon: {
      width: getIconSize(size),
      height: getIconSize(size),
    },
  })

  return {
    styles,
  }
}
