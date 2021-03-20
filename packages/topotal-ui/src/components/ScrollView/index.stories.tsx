import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView } from '.'

export default {
  title: 'components/ScrollView',
}

export const Default = () => (
  <ScrollView style={{ width: 300, height: 500 }}>
    <View
      style={{
        height: 1000,
        borderWidth: 1,
        borderColor: 'red',
      }}
    >
      <Text>Child</Text>
    </View>
  </ScrollView>
)
