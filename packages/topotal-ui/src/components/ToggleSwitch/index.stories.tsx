import { ToggleSwitch } from '.'

export default { title: 'components/ToggleSwitch' }

type Props = React.ComponentProps<typeof ToggleSwitch>

const defaultProps: Props = {
  onChange: (value: boolean) => {
    console.info(value)
  },
}

export const Default = () => (
  <ToggleSwitch {...defaultProps} />
)

export const Medium = () => (
  <ToggleSwitch {...{ ...defaultProps, size: 'medium' }} />
)

export const Small = () => (
  <ToggleSwitch {...{ ...defaultProps, size: 'small' }} />
)
