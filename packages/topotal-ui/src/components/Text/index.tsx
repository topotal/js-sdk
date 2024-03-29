import React, { ForwardedRef, forwardRef } from 'react'
import { StyleProp, Text as BaseText, TextStyle } from 'react-native'
import { FontWeight, TextType } from '../../theme'
import { HrefProps } from '../../types'
import { useStyles } from './styles'

interface Props extends React.ComponentProps<typeof BaseText>, HrefProps {
  type?: TextType
  weight?: FontWeight
  style?: StyleProp<TextStyle>
  testID?: string
}

export const Text = forwardRef(({
  type = 'body',
  weight = 'normal',
  style,
  children,
  testID,
  ...rest
}: Props, ref: ForwardedRef<BaseText>): JSX.Element => {
  const { styles } = useStyles({ type, weight })
  return (
    <BaseText
      {...rest}
      style={[styles.wrapper, style]}
      testID={testID}
      ref={ref}
    >
      {children}
    </BaseText>
  )
})
