import React from 'react'
import { ViewStyle } from 'react-native'
import { VStack, Text } from '../../../..'

type Props = {
  style?: ViewStyle
}

const Cell: React.FC<Props> = ({ style, children }) => {
  return (
    <VStack style={[styles.wrapper, style]}>
      <Text>{children}</Text>
    </VStack>
  )
}

type Styles = {
  wrapper: ViewStyle
}

const styles: Styles = {
  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
}

export default Cell
