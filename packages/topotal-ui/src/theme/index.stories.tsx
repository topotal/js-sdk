import { Text, View } from 'react-native'
import { defaultTheme, ThemeColor } from '.'

interface Props {
  name: string
  color: string
}

const ColorRow = ({
  name,
  color,
}: Props): JSX.Element => {
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

export default {
  title: 'theme',
  component: ColorRow,
}

export const Color = () => (
    <View style={{ padding: 24 }}>
      {(Object.keys(defaultTheme.color) as (keyof ThemeColor)[]).map(key => (
        <ColorRow
          key={key}
          name={key}
          color={defaultTheme.color[key]}
        />
      ))}
    </View>
)
