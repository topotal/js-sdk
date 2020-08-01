import { useContext } from 'react'
import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { ThemeContext } from '../../theme'
import { getDynamicGeometry, getDynamicMaterial } from './utils'
import { Size, Color, Variant } from './types'

type Props = {
  size: Size
  color: Color
  variant: Variant
  disabled: boolean
  loading: boolean
}

type Styles = {
  wrapper: ViewStyle
  title: TextStyle
}

export const useStyles = ({
  size,
  color,
  variant,
  disabled,
  loading,
}: Props) => {
  const theme = useContext(ThemeContext)
  const { height, sidePadding, textType } = getDynamicGeometry(size)
  const {
    fontColor,
    backgroundColor,
    borderColor,
    opacity,
  } = getDynamicMaterial(color, variant, disabled, loading)

  const styles = StyleSheet.create<Styles>({
    wrapper: {
      borderWidth: 1,
      borderRadius: theme.radius.level1,
      height,
      paddingHorizontal: sidePadding,
      backgroundColor: theme.color[backgroundColor],
      borderColor: theme.color[borderColor],
      opacity,
    },
    title: {
      fontSize: 15,
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
