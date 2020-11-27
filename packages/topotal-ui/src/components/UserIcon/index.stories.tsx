import React from 'react'
import { Story } from '@storybook/react'
import UserIcon from '.'

export default { title: 'components/UserIcon' }

type Props = React.ComponentProps<typeof UserIcon>

const Template: Story<Props> = (args) => (
  <UserIcon {...args} />
)

const defaultProps: Props = {
  size: 'medium',
  uri: 'https://pbs.twimg.com/profile_images/984048384343330816/tIAct4a9_400x400.jpg',
}

export const Small = Template.bind({})
Small.args = {
  ...defaultProps,
  size: 'small',
}

export const Medium = Template.bind({})
Medium.args = {
  ...defaultProps,
  size: 'medium',
}

export const Large = Template.bind({})
Large.args = {
  ...defaultProps,
  size: 'large',
}
