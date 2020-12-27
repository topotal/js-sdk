import React from 'react'
import { StyleProp, Text as BaseText, TextStyle } from 'react-native'
import { TextType, FontWeight } from '../../theme'
import { useStyles } from './styles'

type BaseTextProps = React.ComponentProps<typeof BaseText>

type Props = BaseTextProps & {
  type?: TextType
  weight?: FontWeight
  style?: StyleProp<TextStyle>
}

const Text: React.FC<Props> = ({
  type = 'body',
  weight = 'normal',
  style,
  children,
  ...rest
}) => {
  const { styles } = useStyles({ type, weight })
  return (
    <BaseText
      {...rest}
      style={[styles.wrapper, style]}
    >
      {children}
    </BaseText>
  )
}

export default Text
