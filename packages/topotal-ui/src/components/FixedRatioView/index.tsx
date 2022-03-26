import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { VStack } from '..'

interface Props {
  style?: StyleProp<ViewStyle>
  ratio: [number, number]
  testID?: string
}

export const FixedRatioView: React.FC<Props> = ({
  style,
  ratio,
  children,
  testID,
}) => {
  const [xRatio, yRatio] = ratio

  return (
    <VStack
      style={[{
        width: '100%',
        position: 'relative',
      }, style]}
      testID={testID}
    >
      <View
        style={{
          paddingTop: `${yRatio / xRatio * 100}%`,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </View>
    </VStack>
  )
}
