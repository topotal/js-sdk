import { useContext } from 'react'
import { StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { Color, Size, Variant } from './types'
import { getDynamicGeometry, getDynamicMaterial } from './utils'

interface Props {
  size: Size
  color: Color
  variant: Variant
  disabled: boolean
  loading: boolean
  hovered: boolean
}

interface Styles {
  wrapper: ViewStyle
  title: TextStyle
}

export const useStyles = ({
  size,
  color,
  variant,
  disabled,
  loading,
  hovered,
}: Props) => {
  const theme = useContext(ThemeContext)
  const { height, sidePadding, textType } = getDynamicGeometry(size)
  const {
    fontColor,
    backgroundColor,
    borderColor,
    opacity,
  } = getDynamicMaterial(
    color,
    variant,
    disabled,
    loading,
    hovered,
  )

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      borderWidth: 1,
      borderRadius: theme.radius.level1,
      height,
      paddingHorizontal: sidePadding,
      backgroundColor: theme.color[backgroundColor],
      borderColor: theme.color[borderColor],
      overflow: 'hidden',
      opacity,
    },
    title: {
      textAlign: 'center',
      lineHeight: height,
      width: '100%',
      color: theme.color[fontColor],
    },
  })

  return {
    styles,
    indicatorColor: theme.color[fontColor],
    textType: textType,
  }
}
