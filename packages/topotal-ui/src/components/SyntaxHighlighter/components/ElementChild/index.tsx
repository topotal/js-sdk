import React, { useMemo } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { StyleSheetData } from '../../types'
import { Child } from '../Child'

interface Props {
  style?: StyleProp<TextStyle>
  childLevel: number
  childIndex: number
  childData: rendererNode
  stylesheet: StyleSheetData
}

export const ElementChild = React.memo<Props>(({
  style,
  childLevel,
  childIndex,
  childData,
  stylesheet,
}) => {
  const color = useMemo(() => {
    const lastItemIndex = childData.properties?.className ? childData.properties.className.length - 1 : 0
    const className = childData.properties?.className[lastItemIndex] || 'hljs'
    return stylesheet[className]?.color || stylesheet['hljs']?.color || ''
  }, [childData.properties?.className, stylesheet])

  return (
    <Text style={[{ color }, style]}>
      {childData.children?.map((data, index) => (
        <Child
          key={`syntax_highlighter_${childLevel}_${childIndex}_${index}`}
          childLevel={childLevel + 1}
          childIndex={index}
          stylesheet={stylesheet}
          childData={data}
        />
      ))}
    </Text>
  )
})
