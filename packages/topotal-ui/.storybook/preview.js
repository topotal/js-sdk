import React from 'react'
import { addDecorator } from '@storybook/react'
import { VStack } from '../src/components'
import { ThemeContext, defaultTheme } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const iconBasePath = process.env.STORYBOOK_ASSETS_PATH ? process.env.STORYBOOK_ASSETS_PATH + '/icons' : '/icons'

addDecorator(storyFn => (
  <ThemeContext.Provider
    value={{
      ...defaultTheme,
      iconBasePath,
    }}>
    <VStack gap={16} style={{ padding: 24 }}>
      {storyFn()}
    </VStack>
  </ThemeContext.Provider>
))
