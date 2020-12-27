import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

type Props = {
  style?: StyleProp<ViewStyle>
}

const Spacer: React.FC<Props> = ({ style }) => {
  return (
    <View style={[{ flex: 1 }, style]} />
  )
}

export default Spacer
