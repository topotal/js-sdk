import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  testID?: string
}

export const Spacer = React.memo<Props>(({ style, testID }) => {
  return (
    <View style={[{ flex: 1 }, style]} testID={testID} />
  )
})
