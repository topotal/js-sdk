import React from 'react'
import { isFragment } from 'react-is'
import { View, ViewStyle } from 'react-native'
import { getCellStyle } from './utils'
import { Direction, Align, Justify } from './types'
import { useStyles } from './styles'

type Props = React.ComponentProps<typeof View> & {
  direction: Direction
  gap?: number
  align?: Align
  justify?: Justify
  style?: ViewStyle
}

const createStyleInjectedChildren = (children: React.ReactNode, direction: Direction, gap: number): React.ReactNode => {
  return React.Children.map(children, (child, index) => {
    if (child === null) return child

    const element = child as React.ReactElement

    if (isFragment(child)) {
      return React.cloneElement(element, {
        children: createStyleInjectedChildren(element.props.children, direction, gap),
      })
    }

    return React.cloneElement(element, {
      style: [getCellStyle(direction, gap, index), element.props.style],
    })
  })
}

const BaseStack: React.FC<Props> = ({
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

export default BaseStack
