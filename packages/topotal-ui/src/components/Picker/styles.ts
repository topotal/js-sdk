import { ImageStyle, Platform, StyleSheet, TextStyle } from 'react-native'

interface Styles {
  picker: TextStyle
  arrowIcon: ImageStyle
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
    arrowIcon: {
      position: 'absolute',
      right: 8,
      width: 24,
      height: 24,
    },
  })

  return {
    styles,
  }
}
