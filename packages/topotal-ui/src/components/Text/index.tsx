import React from 'react'
import { Text as BaseText, TextStyle } from 'react-native'
import { TextType, FontWeight } from '../../theme'
import { useStyles } from './styles'

type Props = {
  type?: TextType
  weight?: FontWeight
  style?: TextStyle
}

const Text: React.FC<Props> = ({
  type = 'body',
  weight = 'normal',
  style,
  children,
}) => {
  const { styles } = useStyles({ type, weight })
  return (
    <BaseText style={[styles.wrapper, style]}>
      {children}
    </BaseText>
  )
}

export default Text
