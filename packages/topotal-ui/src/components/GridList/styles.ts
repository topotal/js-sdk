import { ViewStyle } from 'react-native'

interface Styles {
  container: ViewStyle
  cell: ViewStyle
}

interface Props {
  maxItemWidth: number
}

export const useStyles = ({
  maxItemWidth,
}: Props) => {
  const styles: Styles = {
    container: {
      width: '100%',
    },
    cell: {
      maxWidth: maxItemWidth,
      flex: 1,
    },
  }

  return {
    styles,
  }
}
