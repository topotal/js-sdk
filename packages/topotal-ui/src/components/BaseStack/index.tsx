import React from 'react'
import { isFragment } from 'react-is'
import { StyleProp, View, ViewStyle } from 'react-native'
import { useStyles } from './styles'
import { Align, Direction, Justify } from './types'
import { getCellStyle } from './utils'

interface Props extends React.ComponentProps<typeof View> {
  direction: Direction
  gap?: number
  align?: Align
  justify?: Justify
  style?: StyleProp<ViewStyle>
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

    return React.cloneElement(element, {
      style: [getCellStyle(direction, gap, currentIndex), element.props.style],
    })
  })
}

export const BaseStack: React.FC<Props> = ({
  direction,
  gap = 0,
  align = 'stretch',
  justify = 'flex-start',
  style,
  children,
  ...rest
}) => {
  const styles = useStyles({
    direction,
    align,
    justify,
  })

  return (
    <View style={[styles.wrapper, style]} {...rest}>
      {createStyleInjectedChildren(children, direction, gap)}
    </View>
  )
}
