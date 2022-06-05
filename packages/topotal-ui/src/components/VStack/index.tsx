import React from 'react'
import { BaseStack } from '../BaseStack'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const VStack = (props: Props): JSX.Element => (
  <BaseStack direction="column" {...props} />
)
