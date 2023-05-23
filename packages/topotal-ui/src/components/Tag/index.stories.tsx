import { Tag } from '.'

export default {
  title: 'components/Tag',
}

const iconUrl = 'https://randomuser.me/api/portraits/men/1.jpg'

export const Default = () => (
  <Tag
    tagData={{
      label: 'test',
      value: 'test',
    }}
  />
)

export const WithRemoveButton = () => (
  <Tag
    tagData={{
      label: 'test',
      value: 'test',
    }}
    onPressRemove={() => { console.log('onPressRemove') }}
  />
)

export const WithIcon = () => (
  <Tag
    tagData={{
      label: 'leonard wagner',
      value: 'test',
      iconUrl,
    }}
  />
)


export const WithIconAndRemoveButton = () => (
  <Tag
    tagData={{
      label: 'leonard wagner',
      value: 'test',
      iconUrl,
    }}
    onPressRemove={() => { console.log('onPressRemove') }}
  />
)

