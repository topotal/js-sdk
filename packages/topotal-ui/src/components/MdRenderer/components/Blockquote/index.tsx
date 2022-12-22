import { StyleProp, TextStyle } from 'react-native'
import { marked } from 'marked'
import { useTheme } from '../../../../theme'
import { Text } from '../../../Text'

interface Props {
  style?: StyleProp<TextStyle>
  token: marked.Tokens.Blockquote
}

export const Blockquote = ({ style, token }: Props) => {
  const { color } = useTheme()

  return (
    <Text
      style={[{
        paddingLeft: 16,
        borderLeftWidth: 4,
        borderLeftColor: color.cancelLight,
        color: color.cancel,
      }, style]}
    >
      {token.text}
    </Text>
  )
}
