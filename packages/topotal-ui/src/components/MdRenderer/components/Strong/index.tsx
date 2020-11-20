import React from 'react'
import { TextStyle } from 'react-native'
import { Tokens } from 'marked'
import Text from '../../../Text'

type Props = {
  token: Tokens.Strong
  style?: TextStyle
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
