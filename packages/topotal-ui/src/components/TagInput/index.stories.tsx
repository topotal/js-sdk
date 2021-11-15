import { TagInput } from '.'

export default {
  title: 'components/TagInput',
}

export const Default = () => (
  <TagInput
    onChange={value => { console.info(value) }}
  />
)
