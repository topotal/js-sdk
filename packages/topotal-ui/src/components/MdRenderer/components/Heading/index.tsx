import React, { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import { Text } from '../../../Text'
import { unescapeHTML } from '../../utils'

interface Props {
  token: Tokens.Heading
  style?: StyleProp<TextStyle>
}

export const Heading = React.memo<Props>(({
  token,
  style,
}) => {
  const type = useMemo(() => {
    switch (token.depth) {
      case 1: return 'display4'
      case 2: return 'display3'
      case 3: return 'display2'
      case 4: return 'display1'
      default: return 'body'
    }
  }, [token.depth])

  return (
    <Text
      style={style}
      type={type}
      weight="bold"
    >
      {unescapeHTML(token.text)}
    </Text>
  )
})
