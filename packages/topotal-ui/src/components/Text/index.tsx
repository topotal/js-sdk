import React from 'react'
import { Text as BaseText, TextStyle } from 'react-native'
import { TextType } from '~/theme'
import { useStyles } from './styles'

type Props = {
  type?: TextType
  style?: TextStyle
}

const Text: React.FC<Props> = ({ type = 'body', style, children }) => {
  const { styles } = useStyles({ type })
  return <BaseText style={[styles.wrapper, style]}>{children}</BaseText>
}

export default Text
