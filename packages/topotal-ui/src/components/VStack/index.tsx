import React, { ForwardedRef, forwardRef } from 'react'
import { View } from 'react-native'
import { BaseStack } from '../BaseStack'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const VStack = forwardRef((props: Props, ref: ForwardedRef<View>): JSX.Element => (
  <BaseStack direction="column" {...props} ref={ref} />
))
