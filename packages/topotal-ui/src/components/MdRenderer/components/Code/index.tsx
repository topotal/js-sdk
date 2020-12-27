import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Tokens } from 'marked'
import VStack from '../../../VStack'
import Text from '../../../Text'
import { useStyles } from './styles'

type Props = {
  token: Tokens.Code
  style?: StyleProp<ViewStyle>
}

const Code: React.FC<Props> = ({
  token,
  style,
}) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]}>
      <Text style={styles.text} weight="bold">
        {token.text}
      </Text>
    </VStack>
  )
}

export default Code
