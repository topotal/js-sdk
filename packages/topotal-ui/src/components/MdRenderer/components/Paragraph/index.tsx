import React, { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import { Text } from '../../../Text'
import { normalizeTokens, unescapeHTML } from '../../utils'
import { Link } from '../Link'
import { Strong } from '../Strong'

interface Props {
  token: Tokens.Paragraph
  style?: StyleProp<TextStyle>
}

export const Paragraph = React.memo<Props>(({
  token,
  style,
}) => {
  const tokens = useMemo(() => {
    // TODO: 型定義ファイルが誤っているので治す
    return normalizeTokens((token as any).tokens)
  }, [token])

  return (
    <Text style={style}>
      {tokens.map((token, index) => {
        switch (token.type) {
          case 'text':
            return unescapeHTML(token.text)
          case 'strong':
            return <Strong key={index} token={token} />
          case 'link':
            return <Link key={index} token={token} />
          default:
            return null
        }
      })}
    </Text>
  )
})
