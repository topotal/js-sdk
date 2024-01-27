import React from 'react'
import { Preview } from '@storybook/react'
import { VStack } from '../src/components'
import { ThemeContext, defaultTheme } from '../src/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const iconBasePath = import.meta.env.STORYBOOK_ASSETS_PATH ? import.meta.env.STORYBOOK_ASSETS_PATH + '/icons' : '/icons'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeContext.Provider
        value={{
          ...defaultTheme,
          iconBasePath,
        }}>
        <VStack gap={16} style={{ padding: 24 }}>
          <Story />
        </VStack>
      </ThemeContext.Provider>
    ),
  ],
};

export default preview;
