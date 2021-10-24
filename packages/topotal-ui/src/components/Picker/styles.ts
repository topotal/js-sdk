import { ImageStyle, Platform, StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  picker: TextStyle
  arrowIcon: ImageStyle
  arrowIconWrapper: ViewStyle
}

interface Props {
  hasValue: boolean
}

export const useStyles = ({ hasValue }: Props) => {
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
      width: 24,
      height: 24,
    },
  })

  return {
    styles,
  }
}
