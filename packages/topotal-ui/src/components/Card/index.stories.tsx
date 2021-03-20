import React from 'react'
import { defaultTheme } from '../../theme'
import { Spacer } from '../Spacer'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { Card } from '.'

export default { title: 'components/Card' }

export const List = () => (
  <VStack
    gap={16}
    style={{
      backgroundColor: defaultTheme.color.background,
      padding: 24,
    }}
  >
    <Card
      level={1}
      header={(
        <Text weight="bold">header</Text>
      )}
      footer={(
        <>
          <Text>left</Text>
          <Spacer />
          <Text>right</Text>
        </>
      )}
    >
      <Text>test</Text>
    </Card>
    <Card
      level={2}
      header={(
        <Text weight="bold">header</Text>
      )}
      footer={(
        <Text>footer</Text>
      )}
    >
      <Text>test</Text>
    </Card>
  </VStack>
)
