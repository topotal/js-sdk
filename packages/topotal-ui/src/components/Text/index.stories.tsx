import React from 'react'
import { textStyles, TextType } from '../../theme'
import { VStack } from '../VStack'
import { Text } from './'

export default { title: 'components/Text' }

export const all = () => (
  <VStack gap={16}>
    {Object.entries(textStyles).map(([key, value]) => (
      <VStack key={key} gap={16}>
        <Text type={(key as TextType)}>
            Sample Text サンプルテキスト: {key} {value.fontSize}px LineHeight {value.lineHeight}px
        </Text>
        <Text type={(key as TextType)} weight="bold">
            Sample Text サンプルテキスト: {key} {value.fontSize}px LineHeight {value.lineHeight}px bold
        </Text>
      </VStack>
    ))}
  </VStack>
)
