import { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { marked } from 'marked'
import { Text } from '../../../Text'
import { normalizeTokens, unescapeHTML } from '../../utils'
import { CodeSpan } from '../CodeSpan'
import { Image } from '../Image'
import { Link } from '../Link'
import { Strong } from '../Strong'

interface Props {
  token: marked.Tokens.Paragraph | marked.Tokens.Text | marked.Tokens.Tag | marked.Tokens.HTML
  style?: StyleProp<TextStyle>
}

export const Paragraph = ({
  token,
  style,
}: Props): JSX.Element => {
  const tokens = useMemo(() => {
    // TODO: 型定義ファイルが誤っているので治す
    return normalizeTokens((token as any)?.tokens || [])
  }, [token])

  return (
    <Text style={style}>
      {tokens.length ? tokens.map((token, index) => {
        switch (token.type) {
          case 'text':
          case 'html':
            return unescapeHTML(token.text)
          case 'escape':
            return (<span key={index} dangerouslySetInnerHTML={{ __html: token.text }}/>)
          case 'strong':
            return <Strong key={index} token={token} />
          case 'link':
            return <Link key={index} token={token} />
          case 'codespan':
            return <CodeSpan key={index} token={token} />
          case 'image':
            return <Image key={index} token={token} />
          default:
            return null
        }
      }) : unescapeHTML(token.text)}
    </Text>
  )
}
