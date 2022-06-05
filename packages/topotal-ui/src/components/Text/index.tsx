import React from 'react'
import { StyleProp, Text as BaseText, TextStyle } from 'react-native'
import { FontWeight, TextType } from '../../theme'
import { useStyles } from './styles'

interface Props extends React.ComponentProps<typeof BaseText> {
  type?: TextType
  weight?: FontWeight
  style?: StyleProp<TextStyle>
  testID?: string
}

export const Text = ({
  type = 'body',
  weight = 'normal',
  style,
  children,
  testID,
  ...rest
}: Props): JSX.Element => {
  const { styles } = useStyles({ type, weight })
  return (
    <BaseText
      {...rest}
      style={[styles.wrapper, style]}
      testID={testID}
    >
      {children}
    </BaseText>
  )
}
