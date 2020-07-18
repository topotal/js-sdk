import React from 'react'
import BaseStack from '../BaseStack'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

const VStack: React.FC<Props> = props => (
  <BaseStack direction="column" {...props} />
)

export default VStack
