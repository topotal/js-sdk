import React, { useState } from 'react'
import { ScrollView } from '../ScrollView'
import { Text } from '../Text'
import { VStack } from '../VStack'
import { Button } from '..'
import { CardPositionAlign, Dropdown } from '.'

export default {
  title: 'components/Dropdown',
}

const Template = ({ align }: { align: CardPositionAlign }) => {
  const [visible, setVisible] = useState(false)
  return (
    <ScrollView style={{ height: 500, borderWidth: 1, borderColor: 'red' }}>
      <VStack
        align="center"
        style={{ paddingTop: 250, height: 1000 }}
      >
        <VStack style={{ width: 250 }}>
          <Button
            title="Show Dropdown"
            onPress={() => { setVisible(true) }}
          />
          <Dropdown
            align={align}
            visible={visible}
            onPressBackground={() => { setVisible(false) }}
          >
            <VStack style={{ padding: 24 }}>
              <Text>long text long text long text long text long text long text long text  long text long text </Text>
            </VStack>
          </Dropdown>
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export const AlignLeft = () => (
  <Template align="left" />
)

export const AlignRight = () => (
  <Template align="right" />
)
