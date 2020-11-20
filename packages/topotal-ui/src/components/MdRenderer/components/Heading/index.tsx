import React, { useMemo } from 'react'
import { TextStyle } from 'react-native'
import { Tokens } from 'marked'
import Text from '../../../Text'

type Props = {
  token: Tokens.Heading
  style?: TextStyle
}

const Heading: React.FC<Props> = ({
  token,
  style,
}) => {
  const type = useMemo(() => {
    switch (token.depth) {
      case 4: return 'display1'
      case 3: return 'display2'
      default: return 'body'
    }
  }, [token.depth])

  return (
    <Text
      style={style}
      type={type}
      weight="bold"
    >
      {token.text}
    </Text>
  )
}

export default React.memo(Heading)
