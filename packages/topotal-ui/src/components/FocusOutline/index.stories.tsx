import { View } from 'react-native'
import { FocusOutline } from '.'

export default {
  title: 'components/FocusOutline',
}

export const Unfocus = () => (
  <FocusOutline>
    <View style={{ height: 20, borderWidth: 1 }}/>
  </FocusOutline>
)

export const Focus = () => (
  <FocusOutline focus>
    <View style={{ height: 20, borderWidth: 1 }}/>
  </FocusOutline>
)

export const FocusAndRadius = () => (
  <FocusOutline focus borderRadiusLevel="level1">
    <View style={{ height: 20, borderWidth: 1, borderRadius: 4 }}/>
  </FocusOutline>
)
