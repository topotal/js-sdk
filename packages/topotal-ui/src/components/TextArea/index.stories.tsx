import { TextArea } from '.'

export default {
  title: 'components/TextArea',
}

export const Default = () => (
  <TextArea
    placeholder={'textarea\ntextarea'}
  />
)

export const Disabled = () => (
  <TextArea
    value={'textarea\ntextarea'}
    disabled
  />
)
