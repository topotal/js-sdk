import { View } from 'react-native'
import { InputFrame } from '.'

export default {
  title: 'components/InputFrame',
}

export const Small = () => (
  <InputFrame
    size="small"
    showPlaceholder
    placeholder="Placeholder"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)

export const Medium = () => (
  <InputFrame
    size="medium"
    showPlaceholder
    placeholder="Placeholder"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)

export const Large = () => (
  <InputFrame
    size="large"
    showPlaceholder
    placeholder="Placeholder"
    renderInput={({ style }) => (
      <View style={style} />
    )}
  />
)
