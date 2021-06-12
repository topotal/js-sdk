import React from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'
import { ChildData, StyleSheetData } from '../../types'
import { ElementChild } from '../ElementChild'

interface Props {
  style?: StyleProp<TextStyle>
  childLevel: number
  childIndex: number
  childData: ChildData
  stylesheet: StyleSheetData
}

export const Child = React.memo<Props>(({
  style,
  childLevel,
  childIndex,
  childData,
  stylesheet,
}) => {
  switch (childData.type) {
    case 'text':
      return (
        <Text style={style}>
          {childData.value}
        </Text>
      )
    case 'element':
      return (
        <ElementChild
          style={style}
          childLevel={childLevel + 1}
          childIndex={childIndex}
          childData={childData}
          stylesheet={stylesheet}
        />
      )
  }
})
