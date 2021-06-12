import React from 'react'
import { ScrollView } from 'react-native'

export const PreTag: React.FC = (props) => {
  return (
    <ScrollView
      {...props}
      style={{
        padding: 16,
        backgroundColor: '#333',
      }}
    />
  )
}
