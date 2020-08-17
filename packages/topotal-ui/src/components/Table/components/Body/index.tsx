import React from 'react'
import { ViewStyle } from 'react-native'
import { VStack } from '../../../..'
import Row from '../Row'

type RowElement = React.ReactElement<React.ComponentProps<typeof Row>>

type Props = {
  style?: ViewStyle
  children: RowElement | RowElement[]
}

const Body: React.FC<Props> = ({ style, children }) => {
  return (
    <VStack style={[styles.wrapper, style]}>
      {React.Children.map(children, (child, index) => {
        const element = child as RowElement
        return React.cloneElement(element, {
          style: {
            borderTopWidth: index === 0 ? 0 : 1,
            ...element.props.style,
          },
        })
      })}
    </VStack>
  )
}

type Styles = {
  wrapper: ViewStyle
}

const styles: Styles = {
  wrapper: {
  },
}

export default Body
