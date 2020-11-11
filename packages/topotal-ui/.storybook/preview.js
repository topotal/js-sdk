import React from 'react'
import { addDecorator } from '@storybook/react'
import { VStack } from '../src/components'
import { ThemeContext, defaultTheme } from '../src/theme'

addDecorator(storyFn => (
  <ThemeContext.Provider value={defaultTheme}>
    <VStack gap={16} style={{ padding: 24 }}>
      {storyFn()}
    </VStack>
  </ThemeContext.Provider>
))
