import { StyleSheet } from 'react-native'

export const useStyles = () => {
  const styles = StyleSheet.create({
    inputWrapper: {
      paddingVertical: 0,
      flexWrap: 'wrap',
    },
    textInput: {
      paddingLeft: 0,
    },
  })

  return {
    styles,
  }
}
