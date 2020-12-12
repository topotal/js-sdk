import React from 'react'
import { Text, Button } from '..'
import ScreenFrame from '.'
import { View } from 'react-native'

export default { title: 'components/ScreenFrame' }

export const Default = () => (
  <View style={{ width: '100%', height: 500 }}>
    <ScreenFrame
      title="Sample Title"
      header={(
        <Button
          title="header button"
          size="small"
          variant="outline"
        />
      )}
    >
      <Text>Content</Text>
    </ScreenFrame>
  </View>
)
