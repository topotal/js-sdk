import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { SyntaxHighlighter, Text, VStack } from '../../..'
import { NormalizedToken } from '../../types'
import { Heading } from '../Heading'
import { List } from '../List'
import { Paragraph } from '../Paragraph'

interface Props {
  token: NormalizedToken
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}

export const Switcher = React.memo<Props>(({ token, style }) => {
  return (
    <VStack gap={16}>
      {(() => {
        switch (token.type) {
          case 'paragraph':
            return (
              <Paragraph
                style={style}
                token={token}
              />
            )
          case 'code':
            return (
              <SyntaxHighlighter
                style={style}
                language={token.lang || ''}
                code={token.text}
              />
            )
          case 'heading':
            return (
              <Heading
                style={style}
                token={token}
              />
            )
          case 'list':
            return (
              <List
                style={style}
                token={token}
              />
            )
          case 'space':
            return null
          case 'text':
            return <Text style={style}>{token.text}</Text>
          default:
            return <Text style={style}>{token?.raw}</Text>
        }
      })()}
    </VStack>
  )
})
