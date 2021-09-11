import { useContext } from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import { BorderRadius, ThemeContext } from '../../theme'

interface Styles {
  wrapper: ViewStyle
  outline: ViewStyle
}

interface Props {
  focus: boolean
  borderRadiusLevel?: keyof BorderRadius
}

export const useStyles = ({ focus, borderRadiusLevel }: Props) => {
  const { color, radius } = useContext(ThemeContext)
  const borderWidth = 3

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      position: 'relative',
    },
    outline: {
      position: 'absolute',
      top: -borderWidth,
      left: -borderWidth,
      right: -borderWidth,
      bottom: -borderWidth,
      opacity: focus ? 1 : 0,
      borderRadius: borderRadiusLevel ? radius[borderRadiusLevel] + borderWidth : 0,
      borderStyle: 'solid',
      borderWidth,
      borderColor: color.focus,
    },
  })

  return {
    styles,
  }
}
