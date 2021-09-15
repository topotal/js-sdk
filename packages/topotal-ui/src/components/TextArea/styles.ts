import { StyleSheet, TextStyle, ViewStyle } from 'react-native'

interface Styles {
  wrapper: ViewStyle
  dummyText: TextStyle
  input: TextStyle
}

export const useStyles = () => {
  const styles = StyleSheet.create<Styles>({
    wrapper: {
      height: 'auto',
      minHeight: 80,
    },
    dummyText: {
      width: '100%',
      height: '100%',
      opacity: 0,
    },
    input: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
  })

  return {
    styles,
  }
}
