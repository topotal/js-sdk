import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Lexer } from 'marked'
import { VStack } from '../VStack'
import { Switcher } from './components/Switcher'
import { NormalizedToken } from './types'
import { normalizeTokens } from './utils'

interface Props {
  markdown: string
  style?: StyleProp<ViewStyle>
  tokenFilter?: (token: NormalizedToken) => boolean
  testID?: string
}

export const MdRenderer = React.memo<Props>(({
  markdown,
  style,
  tokenFilter = () => true,
  testID,
}) => {
  const tokens = useMemo(() => {
    const lexer = new Lexer({ sanitize: false })
    const rawToken = lexer.lex(markdown)
    const normalizedToken = normalizeTokens(rawToken)
    return normalizedToken.filter(tokenFilter)
  }, [markdown, tokenFilter])

  return (
    <VStack style={style} gap={16} testID={testID}>
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
