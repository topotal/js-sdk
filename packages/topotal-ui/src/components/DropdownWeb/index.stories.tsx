import React, { useState } from 'react'
import Button from '../Button'
import VStack from '../VStack'
import Text from '../Text'
import DropdownWeb from '.'

export default {
  title: 'components/DropdownWeb',
}

export const Default = () => {
  const [visible, setVisible] = useState(false)
  return (
    <VStack style={{ width: 300, height: 2500, paddingTop: 200 }}>
      <Button title="Show Dropdown" onPress={() => { setVisible(true) }}/>
      <DropdownWeb visible={visible} onPressBackground={() => { setVisible(false) }}>
        <VStack style={{ padding: 24 }}>
          <Text>Dropdown Children</Text>
        </VStack>
      </DropdownWeb>
    </VStack>
  )
}
