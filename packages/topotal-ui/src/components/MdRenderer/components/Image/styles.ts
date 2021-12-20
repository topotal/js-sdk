import { StyleSheet } from 'react-native'

interface Props {
  size: [number, number]
}

export const useStyles = ({ size }: Props) => {
  const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      maxWidth: size[0],
    },
    image: {
      width: '100%',
      height: '100%',
    },
  })

  return {
    styles,
  }
}
