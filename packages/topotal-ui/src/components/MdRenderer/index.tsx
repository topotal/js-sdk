import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { lexer } from 'marked'
import { VStack } from '../VStack'
import { Code } from './components/Code'
import { Heading } from './components/Heading'
import { Paragraph } from './components/Paragraph'
import { NormalizedToken } from './types'
import { normalizeTokens } from './utils'

interface Props {
  markdown: string
  style?: StyleProp<ViewStyle>
  tokenFilter?: (token: NormalizedToken) => boolean
}

export const MdRenderer = React.memo<Props>(({
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
})
