import { Tag } from '.'

export default {
  title: 'components/Tag',
}

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
