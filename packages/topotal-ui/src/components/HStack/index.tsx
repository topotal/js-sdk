import React from 'react'
import { BaseStack } from '..'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const HStack: React.FC<Props> = props => (
  <BaseStack direction="row" {...props} />
)
