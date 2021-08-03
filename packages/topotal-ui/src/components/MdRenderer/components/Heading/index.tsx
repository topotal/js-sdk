import React, { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import { Tokens } from 'marked'
import { useTheme } from '../../../../theme'
import { Text } from '../../../Text'
import { unescapeHTML } from '../../utils'

interface Props {
  token: Tokens.Heading
  firstRow?: boolean
  style?: StyleProp<TextStyle>
}

export const Heading = React.memo<Props>(({
  token,
  firstRow,
  style,
}) => {
  const { text } = useTheme()
  const type = useMemo(() => {
    switch (token.depth) {
      case 1: return 'display4'
      case 2: return 'display3'
      case 3: return 'display2'
      case 4: return 'display1'
      default: return 'body'
    }
  }, [token.depth])
  const textStyle = text.type[type]
  const diff = Math.floor((textStyle?.lineHeight || 0) / 8) * 3
  const marginTop = firstRow ? 0 : diff + 16

  return (
    <Text
      style={[style, { marginTop }]}
      type={type}
      weight="bold"
    >
      {unescapeHTML(token.text)}
    </Text>
  )
})
