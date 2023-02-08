import { View } from 'react-native'
import { Text } from '../Text'
import { InputField } from '.'

export default {
  title: 'components/InputField',
}

export const Default = () => (
  <InputField
    title="Title"
    description="これは説明です。"
    errorMessage="Error Message"
  >
    <View style={{ borderWidth: 1, width: 300 }}>
      <Text>Child</Text>
    </View>
  </InputField>
)
