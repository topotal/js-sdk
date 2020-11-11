import React from 'react'
import { defaultTheme } from '../../theme'
import HStack from '../HStack'
import UserIcon from '.'

export default { title: 'components/UserIcon' }

export const List = () => (
  <HStack
    gap={16}
    style={{
      padding: 24,
      backgroundColor: defaultTheme.color.background,
    }}
  >
    <UserIcon
      size="large"
      uri="https://pbs.twimg.com/profile_images/984048384343330816/tIAct4a9_400x400.jpg"
    />
    <UserIcon
      uri="https://pbs.twimg.com/profile_images/984048384343330816/tIAct4a9_400x400.jpg"
    />
  </HStack>
)
