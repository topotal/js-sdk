import { View } from 'react-native'
import { InputFrame } from '.'

export default {
  title: 'components/InputFrame',
}

export const Small = () => (
  <InputFrame
    size="small"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)

export const Medium = () => (
  <InputFrame
    size="medium"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)

export const Large = () => (
  <InputFrame
    size="large"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)
