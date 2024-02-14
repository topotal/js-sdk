import { Picker as BasePicker } from '@react-native-picker/picker'
import { VStack } from '../VStack'
import { Picker } from '.'

export default {
  title: 'components/Picker',
}

const renderItems = () => (
  <>
    <Picker.Item label="item1" value="value_1" />
    <Picker.Item label="item2" value="value_2" />
    <Picker.Item label="item3" value="value_3" />
  </>
)

export const Default = () => (
  <VStack style={{ width: 100 }}>
    <Picker
      placeholder="Select"
      onChange={(value) => { console.info(value) }}
    >
      {renderItems()}
    </Picker>
  </VStack>
)

export const HasDefaultValue = () => (
  <Picker
    placeholder="Select"
    value="value_1"
  >
    {renderItems()}
  </Picker>
)

export const HasIcon = () => (
  <Picker
    placeholder="Select"
    startIconName="search"
  >
    {renderItems()}
  </Picker>
)

export const Small = () => (
  <Picker
    placeholder="Select"
    size="small"
  >
    {renderItems()}
  </Picker>
)

export const Medium = () => (
  <Picker
    placeholder="Select"
    size="medium"
  >
    {renderItems()}
  </Picker>
)

export const Error = () => (
  <Picker
    placeholder="Select"
    error
  >
    {renderItems()}
  </Picker>
)

export const Disabled = () => (
  <Picker
    placeholder="Select"
    disabled
  >
    {renderItems()}
  </Picker>
)

export const BasePickerComponent = () => {
  <BasePicker
    placeholder="Select"
    style={{ borderWidth: 1 }}
  >
    {renderItems()}
  </BasePicker>
}
