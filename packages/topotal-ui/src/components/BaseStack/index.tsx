import React from 'react'
import { isFragment } from 'react-is'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'
import { Align, Direction, Justify } from './types'
import { getCellStyle, isDOMTypeElement } from './utils'

interface Props extends React.ComponentProps<typeof View> {
  direction: Direction
  gap?: number
  align?: Align
  justify?: Justify
  style?: StyleProp<ViewStyle>
  testID?: string
}

const createStyleInjectedChildren = (children: React.ReactNode, direction: Direction, gap: number): React.ReactNode => {
  let currentIndex = -1
  return React.Children.map(children, (child) => {
    if (child === null) return null
    currentIndex++

    const element = child as React.ReactElement

    if (isFragment(child)) {
      return React.cloneElement(element, {
        children: createStyleInjectedChildren(element.props.children, direction, gap),
      })
    }

    if (isDOMTypeElement(element)) {
      return element
    }

    if (typeof element === 'string') {
      return element
    }

    return React.cloneElement(element, {
      style: [getCellStyle(direction, gap, currentIndex), element.props.style],
    })
  })
}

export const BaseStack = ({
  direction,
  gap = 0,
  align = 'stretch',
  justify = 'flex-start',
  style,
  children,
  testID,
  ...rest
}: Props): JSX.Element => {
  const styles = useStyles({
    direction,
    align,
    justify,
  })

  return (
    <View style={[styles.wrapper, style]} testID={testID} {...rest}>
      {createStyleInjectedChildren(children, direction, gap)}
    </View>
  )
}
