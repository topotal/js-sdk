import React from 'react'
import { BaseStack } from '..'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const HStack = (props: Props): JSX.Element => (
  <BaseStack direction="row" {...props} />
)
