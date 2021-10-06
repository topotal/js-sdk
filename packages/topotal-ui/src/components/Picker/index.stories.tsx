import { Picker } from '.'

export default {
  title: 'components/Picker',
}

const rednerItems = () => (
  <>
    <Picker.Item label="item1" value="value_1" />
    <Picker.Item label="item2" value="value_2" />
    <Picker.Item label="item3" value="value_3" />
  </>
)

export const Default = () => (
  <Picker
    placeholder="Select"
    onChange={(value) => { console.info(value) }}
  >
    {rednerItems()}
  </Picker>
)

export const HasDefaultValue = () => (
  <Picker
    placeholder="Select"
    value="value_1"
  >
    {rednerItems()}
  </Picker>
)

export const Medium = () => (
  <Picker
    placeholder="Select"
    size="medium"
  >
    {rednerItems()}
  </Picker>
)

export const Error = () => (
  <Picker
    placeholder="Select"
    error
  >
    {rednerItems()}
  </Picker>
)
