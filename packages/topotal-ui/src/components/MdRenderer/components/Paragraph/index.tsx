import React, { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import { Text } from '../../../Text'
import { normalizeTokens, unescapeHTML } from '../../utils'
import { CodeSpan } from '../CodeSpan'
import { Link } from '../Link'
import { Strong } from '../Strong'

interface Props {
  token: Tokens.Paragraph | Tokens.Text | Tokens.Tag
  style?: StyleProp<TextStyle>
}

export const Paragraph = React.memo<Props>(({
  token,
  style,
}) => {
  const tokens = useMemo(() => {
    // TODO: 型定義ファイルが誤っているので治す
    return normalizeTokens((token as any)?.tokens || [])
  }, [token])

  return (
    <Text style={style}>
      {tokens.length ? tokens.map((token, index) => {
        switch (token.type) {
          case 'text':
            return unescapeHTML(token.text)
          case 'strong':
            return <Strong key={index} token={token} />
          case 'link':
            return <Link key={index} token={token} />
          case 'codespan':
            return <CodeSpan key={index} token={token} />
          default:
            return null
        }
      }) : unescapeHTML(token.text)}
    </Text>
  )
})
