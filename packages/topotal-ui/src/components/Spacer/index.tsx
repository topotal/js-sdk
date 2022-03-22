import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  testId?: string
}

export const Spacer = React.memo<Props>(({ style }) => {
  return (
    <View style={[{ flex: 1 }, style]} />
  )
})
