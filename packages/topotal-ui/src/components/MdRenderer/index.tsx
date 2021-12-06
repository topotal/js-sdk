import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Lexer } from 'marked'
import { VStack } from '../VStack'
import { Switcher } from './components/Switcher'
import { NormalizedToken } from './types'
import { normalizeTokens } from './utils'

const lexer = new Lexer({ sanitize: false })

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
    const rawToken = lexer.lex(markdown)
    const normalizedToken = normalizeTokens(rawToken)
    return normalizedToken.filter(tokenFilter)
  }, [markdown, tokenFilter])

  return (
    <VStack style={style} gap={16}>
      {tokens.map((token, index) => (
        <Switcher
          token={token}
          key={index}
          firstRow={index === 0}
        />
      ))}
    </VStack>
  )
})
