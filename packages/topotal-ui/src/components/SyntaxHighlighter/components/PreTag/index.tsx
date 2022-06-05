import React from 'react'
import { ScrollView } from 'react-native'

type Props = React.ComponentProps<typeof ScrollView>

export const PreTag= (props: Props): JSX.Element => {
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
