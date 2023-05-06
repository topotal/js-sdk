import React, { ForwardedRef, forwardRef } from 'react'
import { View } from 'react-native'
import { BaseStack } from '..'

type Props = Omit<React.ComponentProps<typeof BaseStack>, 'direction'>

export const HStack = forwardRef((props: Props, ref: ForwardedRef<View>): JSX.Element => (
  <BaseStack direction="row" {...props} ref={ref} />
))
