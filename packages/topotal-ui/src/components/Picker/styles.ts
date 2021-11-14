import { Platform, StyleSheet } from 'react-native'
import { useTheme } from '../..'
import { Size } from '.'

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
  const { color } = useTheme()

  const styles = StyleSheet.create({
    picker: {
      borderWidth: 0,
      backgroundColor: 'transparent',
      opacity: hasValue ? 1 : 0,
      ...(Platform.OS === 'web' ? {
        cursor: 'pointer',
        appearance: 'none',
      } : {}),
    },
    placeholder: {
      position: 'absolute',
      color: color.secandaryTextDark,
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
