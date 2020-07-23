import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { VStack } from '~/components'
import theme, { ThemeContext } from '~/theme'

const req = require.context('../src/', true, /.*\.stories\.tsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(storyFn => (
  <ThemeContext.Provider value={theme}>
    <VStack gap={16} style={{ padding: 24 }}>
      {storyFn()}
    </VStack>
  </ThemeContext.Provider>
))

configure(loadStories, module)