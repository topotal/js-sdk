import React, { useMemo } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { ElementChildData, StyleSheetData } from '../../types'
import { Child } from '../Child'

interface Props {
  style?: StyleProp<TextStyle>
  childData: ElementChildData
  stylesheet: StyleSheetData
}

export const ElementChild = React.memo<Props>(({
  style,
  childData,
  stylesheet,
}) => {
  const color = useMemo(() => {
    const lastItemIndex = childData.properties.className.length - 1
    const className = childData.properties.className[lastItemIndex] || 'hljs'
    return stylesheet[className].color
  }, [childData.properties.className, stylesheet])

  return (
    <Text style={[{ color }, style]}>
      {childData.children.map((data, index) => (
        <Child
          key={`hoge_${index}`}
          stylesheet={stylesheet}
          childData={data}
        />
      ))}
    </Text>
  )
})
