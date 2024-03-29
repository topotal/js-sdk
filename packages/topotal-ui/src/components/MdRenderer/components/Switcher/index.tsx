import { StyleProp, TextStyle, ViewStyle } from 'react-native'
import { SyntaxHighlighter, Text, VStack } from '../../..'
import { NormalizedToken } from '../../types'
import { Blockquote } from '../Blockquote'
import { Heading } from '../Heading'
import { List } from '../List'
import { Paragraph } from '../Paragraph'

interface Props {
  token: NormalizedToken
  firstRow?: boolean
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>
}

export const Switcher = ({ token, firstRow, style }: Props): JSX.Element => {
  return (
    <VStack gap={16}>
      {(() => {
        switch (token.type) {
          case 'paragraph':
          case 'text':
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
                firstRow={firstRow}
              />
            )
          case 'list':
            return (
              <List
                style={style}
                token={token}
              />
            )
          case 'blockquote':
            return (
              <Blockquote
                style={style}
                token={token}
              />
            )
          case 'html':
            return (
              <Text style={style}>
                {token.text}
              </Text>
            )
          case 'space':
          default:
            return null
        }
      })()}
    </VStack>
  )
}
