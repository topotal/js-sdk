import React from 'react'
import { Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'

type Props = {
  visible?: boolean
  style?: StyleProp<ViewStyle>
  onPressBackground?: () => void
}

const DropdownWeb: React.FC<Props> = ({
  visible = false,
  style,
  children,
  onPressBackground,
}) => {
  const { styles } = useStyles()

  return (
    <View style={[styles.wrapper, style]}>
      {visible ? (
        <>
          <Pressable
            style={styles.background}
            onPress={onPressBackground}
          />
          <View style={styles.card} >
            {children}
          </View>
        </>
      ) : null}
    </View>
  )
}

export default DropdownWeb
