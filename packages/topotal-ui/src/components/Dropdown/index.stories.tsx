import React, { useState } from 'react'
import { Button, VStack, Text } from '@topotal/topotal-ui'
import Dropdown from '.'

export default {
  title: 'components/Dropdown',
}

export const Default = () => {
  const [visible, setVisible] = useState(false)
  return (
    <VStack style={{ width: 300 }}>
      <Button title="Show Dropdown" onPress={() => { setVisible(true) }}/>
      <Dropdown visible={visible} onPressBackground={() => { setVisible(false) }}>
        <VStack style={{ padding: 24 }}>
          <Text>Dropdown Children</Text>
        </VStack>
      </Dropdown>
    </VStack>
  )
}
