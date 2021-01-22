import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import Text from '../../../Text'
import { unescapeHTML } from '../../utils'

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
      {unescapeHTML(token.text)}
    </Text>
  )
}

export default React.memo(Strong)
