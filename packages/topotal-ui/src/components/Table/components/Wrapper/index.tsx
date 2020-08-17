import React from 'react'
import { ViewStyle } from 'react-native'
import { VStack } from '../../../'
import Head from '../Head'
import Body from '../Body'

type Props = {
  style?: ViewStyle
  children: [
    React.ReactElement<React.ComponentProps<typeof Head>>,
    React.ReactElement<React.ComponentProps<typeof Body>>,
  ]
}

const Wrapper: React.FC<Props> = ({ style, children }) => {
  return (
    <VStack style={[styles.wrapper, style]}>
      {children}
    </VStack>
  )
}

type Styles = {
  wrapper: ViewStyle
}

const styles: Styles = {
  wrapper: {
    borderWidth: 1,
  },
}

export default Wrapper
