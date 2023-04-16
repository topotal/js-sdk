import { StyleSheet } from 'react-native'
import { Measure, useTheme } from '../..'

interface Props {
  cursorMeasure: Measure
}

export const useStyles = ({ cursorMeasure }: Props) => {
  const { color } = useTheme()

  const styles = StyleSheet.create({
    wrapper: {
      height: 'auto',
      minHeight: 80,
    },
    dummyText: {
      width: '100%',
      height: '100%',
      opacity: 0,
    },
    dummyCursor: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    input: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
    completion: {
      position: 'absolute',
      top: cursorMeasure.y,
      left: cursorMeasure.x,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: color.borderLight,
      backgroundColor: color.surface,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 8,
      shadowOpacity: 0.1,
    },
  })

  return {
    styles,
    placeholderColor: color.secondaryTextDark,
  }
}
