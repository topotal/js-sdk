import React from 'react'
import { BaseStack } from '../BaseStack'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const VStack: React.FC<Props> = props => (
  <BaseStack direction="column" {...props} />
)
