import React, { useMemo } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { lexer } from 'marked'
import { VStack } from '../VStack'
import { Switcher } from './components/Switcher'
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
      {tokens.map((token, index) => (
        <Switcher token={token} key={index} />
      ))}
    </VStack>
  )
})
