import { ReactNode } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { BorderRadius, ThemeColor } from '../../theme'
import { useStyles } from './styles'

interface Props {
  focus?: boolean
  borderRadiusLevel?: keyof BorderRadius
  outlineColor?: keyof ThemeColor
  style?: StyleProp<ViewStyle>
  children?: ReactNode
}

export const FocusOutline = ({
  focus = false,
  borderRadiusLevel,
  style,
  children,
}: Props): JSX.Element => {
  const { styles } = useStyles({ focus, borderRadiusLevel })

  return (
    <View style={[styles.wrapper, style]}>
      {children}
      <View
        style={styles.outline}
        pointerEvents="none"
      />
    </View>
  )
}
