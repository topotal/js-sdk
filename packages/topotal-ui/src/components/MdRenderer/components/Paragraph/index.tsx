import React, { useMemo } from 'react'
import { TextStyle } from 'react-native'
import { Tokens } from 'marked'
import { normalizeTokens } from '../../utils'
import Text from '../../../Text'
import Strong from '../Strong'
import Link from '../Link'

type Props = {
  token: Tokens.Paragraph
  style?: TextStyle
}

const Paragraph: React.FC<Props> = ({
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
            return token.text
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
}

export default Paragraph
