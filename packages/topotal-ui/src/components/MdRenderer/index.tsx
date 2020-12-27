import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { lexer } from 'marked'
import VStack from '../VStack'
import Paragraph from './components/Paragraph'
import Code from './components/Code'
import Heading from './components/Heading'
import { normalizeTokens } from './utils'
import { NormalizedToken } from './types'

type Props = {
  markdown: string
  style?: StyleProp<ViewStyle>
  tokenFilter?: (token: NormalizedToken) => boolean
}

const MdRenderer: React.FC<Props> = ({
  markdown,
  style,
  tokenFilter = () => true,
}) => {
  const tokens = useMemo(() => {
    const rawToken = lexer(markdown)
    const normalizedToken = normalizeTokens(rawToken)
    return normalizedToken.filter(tokenFilter)
  }, [markdown, tokenFilter])

  return (
    <VStack style={style} gap={16}>
      {tokens.map((token, index) => {
        switch (token.type) {
          case 'paragraph':
            return <Paragraph key={index} token={token} />
          case 'code':
            return <Code key={index} token={token} />
          case 'heading':
            return <Heading key={index} token={token} />
          default:
            return null
        }
      })}
    </VStack>
  )
}

export default React.memo(MdRenderer)
