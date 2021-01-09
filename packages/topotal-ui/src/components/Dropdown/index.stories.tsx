import React, { useState } from 'react'
import Button from '../Button'
import VStack from '../VStack'
import Text from '../Text'
import ScrollView from '../ScrollView'
import Dropdown from '.'

export default {
  title: 'components/Dropdown',
}

export const Default = () => {
  const [visible, setVisible] = useState(false)
  return (
    <ScrollView style={{ height: 500, borderWidth: 1, borderColor: 'red' }}>
      <VStack style={{ paddingTop: 250, height: 1000 }}>
        <Button title="Show Dropdown" onPress={() => { setVisible(true) }}/>
        <Dropdown visible={visible} onPressBackground={() => { setVisible(false) }}>
          <VStack style={{ padding: 24 }}>
            <Text>Dropdown Children</Text>
          </VStack>
        </Dropdown>
      </VStack>
    </ScrollView>
  )
}
