import React from 'react'
import { Text, Button } from '..'
import ScreenFrame from '.'

export default { title: 'components/ScreenFrame' }

export const all = () => (
  <ScreenFrame
    title="サンプルタイトル"
    header={(
      <Button
        title="header button"
        size="small"
        variant="outline"
      />
    )}
  >
    <Text>中身</Text>
  </ScreenFrame>
)
