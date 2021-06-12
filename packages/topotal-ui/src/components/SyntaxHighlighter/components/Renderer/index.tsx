import React from 'react'
import { Text } from 'react-native'
import { ChildData, StyleSheetData } from '../../types'
import { Child } from '../Child'

interface Props {
  rows: ChildData[]
  stylesheet: StyleSheetData
}

export const Renderer: React.FC<Props> = ({
  rows,
  stylesheet,
}) => {
  return (
    <Text style={{ fontFamily: 'Consolas, Monaco, monospace' }}>
      {rows.map((rowData, index) => (
        <Child
          key={`syntax_highlighter_0_0_${index}`}
          childLevel={1}
          childIndex={index}
          childData={rowData}
          stylesheet={stylesheet}
        />
      ))}
    </Text>
  )
}
