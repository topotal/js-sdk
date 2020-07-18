import React from 'react'
import { storiesOf } from '@storybook/react'
import Separater from '.'

storiesOf('components/Separater', module).add('default', () => (
  <Separater text="テキスト" />
))
