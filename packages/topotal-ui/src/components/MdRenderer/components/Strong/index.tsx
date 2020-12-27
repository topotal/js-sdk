import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import Text from '../../../Text'

type Props = {
  token: Tokens.Strong
  style?: StyleProp<TextStyle>
}

const Strong: React.FC<Props> = ({
  token,
  style,
}) => {
  return (
    <Text style={style} weight="bold">
      {token.text}
    </Text>
  )
}

export default Strong
