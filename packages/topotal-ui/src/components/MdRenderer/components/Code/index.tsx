import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Tokens } from 'marked'
import { Text } from '../../../Text'
import { VStack } from '../../../VStack'
import { useStyles } from './styles'

interface Props {
  token: Tokens.Code
  style?: StyleProp<ViewStyle>
}

export const Code = React.memo<Props>(({
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
})
