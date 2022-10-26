import React from 'react'
import { UserIcon } from '.'

export default { title: 'components/UserIcon' }

type Props = React.ComponentProps<typeof UserIcon>

const defaultProps: Props = {
  size: 'medium',
  uri: 'https://randomuser.me/api/portraits/men/1.jpg',
}

export const Small = () => (
  <UserIcon {...defaultProps} size="small" />
)

export const Medium = () => (
  <UserIcon {...defaultProps} size="medium" />
)

export const Large = () => (
  <UserIcon {...defaultProps} size="large" />
)
