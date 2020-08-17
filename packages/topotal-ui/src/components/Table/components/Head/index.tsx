import React from 'react'
import { ViewStyle } from 'react-native'
import { VStack } from '../../../..'
import Row from '../Row'

type RowElement = React.ReactElement<React.ComponentProps<typeof Row>>

type Props = {
  style?: ViewStyle
  children?: RowElement | RowElement[]
}

const Head: React.FC<Props> = ({ style, children }) => {
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
    backgroundColor: 'gray',
    borderBottomWidth: 1,
  },
}

export default Head
