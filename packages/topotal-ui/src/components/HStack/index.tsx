import React from 'react'
import BaseStack from '../BaseStack'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

const HStack: React.FC<Props> = props => (
  <BaseStack direction="row" {...props} />
)

export default HStack
