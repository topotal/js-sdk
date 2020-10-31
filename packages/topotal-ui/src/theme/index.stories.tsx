import React from 'react'
import { View, Text } from 'react-native'
import { storiesOf } from '@storybook/react'
import theme, { ThemeColor } from '.'

type Props = {
  name: string
  color: string
}

const ColorRow: React.FC<Props> = ({
  name,
  color,
}) => {
  return (
    <View
      style={{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 40,
          height: 40,
          borderColor: '#000',
          backgroundColor: color,
        }}
      />
      <Text style={{ marginLeft: 8, width: 120, fontWeight: 'bold' }}>{name}</Text>
      <Text style={{ marginLeft: 8 }}>{color}</Text>
    </View>
  )
}

storiesOf('theme/color', module)
  .add('color', () => (
    <View style={{ padding: 24 }}>
      {(Object.keys(theme.color) as (keyof ThemeColor)[]).map(key => (
        <ColorRow
          key={key}
          name={key}
          color={theme.color[key]}
        />
      ))}
    </View>
  ), { info: { disable: true }})
