import React from 'react'
import { addDecorator } from '@storybook/react'
import { VStack } from '~/components'
import theme, { ThemeContext } from '~/theme'

addDecorator(storyFn => (
  <ThemeContext.Provider value={theme}>
    <VStack gap={16} style={{ padding: 24 }}>
      {storyFn()}
    </VStack>
  </ThemeContext.Provider>
))
