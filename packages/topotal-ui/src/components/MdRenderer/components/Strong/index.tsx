import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { marked } from 'marked'
import { Text } from '../../../Text'

interface Props {
  token: marked.Tokens.Strong
  style?: StyleProp<TextStyle>
}

export const Strong = React.memo<Props>(({
  token,
  style,
}) => {
  return (
    <Text style={style} weight="bold">
      {token.text}
    </Text>
  )
})
