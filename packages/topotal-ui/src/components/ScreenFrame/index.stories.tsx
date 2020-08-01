import React from 'react'
import { Text } from '..'
import ScreenFrame from '.'

export default { title: 'components/ScreenFrame' }

export const all = () => (
  <ScreenFrame title="サンプルタイトル">
    <Text>中身</Text>
  </ScreenFrame>
)
