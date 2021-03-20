import { ImageStyle } from 'react-native'

interface Styles {
  wrapper: ImageStyle
}

export const useStyles = () => {
  const styles: Styles = {
    wrapper: {
      width: 24,
      height: 24,
    },
  }

  return {
    styles,
  }
}
