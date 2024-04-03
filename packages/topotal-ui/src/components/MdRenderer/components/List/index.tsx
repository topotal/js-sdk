import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { marked } from 'marked'
import { useTheme } from '../../../../theme'
import { NormalizedToken, Text, VStack } from '../../..'
import { Switcher } from '../Switcher'

interface Props {
  token: marked.Tokens.List
  level?: number
  style?: StyleProp<ViewStyle>
}

const bulletUnicodes = [
  '\u2022',
  '\u25E6',
  '\u25AA',
]

export const List = React.memo<Props>(({
  token,
  level = 0,
  style,
}) => {
  const { text } = useTheme()
  const bulletUnicode = bulletUnicodes[level % 3]

  return (
    <VStack
      style={[style]}
      role={'list'}
    >
      {token.items.map((item, index) => {
        const tokens = (item as any).tokens as NormalizedToken[]
        return (
          <VStack
            key={index}
            style={{
              paddingLeft: text.type.body.lineHeight,
            }}
            role={'listitem'}
          >
            <Text
              style={{
                position: 'absolute',
                left: 0,
                textAlign: 'center',
                minWidth: text.type.body.lineHeight,
              }}
              selectable={false}
            >
              {token.ordered ? `${index + 1}.` : bulletUnicode}
            </Text>
            {tokens.map((token, index) => (
              <Switcher
                key={index}
                token={token}
              />
            ))}
          </VStack>
        )
      })}
    </VStack>
  )
})
