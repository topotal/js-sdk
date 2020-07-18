import React from 'react'
import { View, ViewStyle } from 'react-native'
import HStack from '../HStack'
import Text from '../Text'
import { useStyles } from './styles'

type Props = {
  text: string
  style?: ViewStyle
}

const Separater: React.FC<Props> = ({ text, style }) => {
  const { styles } = useStyles()

  return (
    <HStack gap={16} align="center" justify="space-between" style={style}>
      <View style={styles.border} />
      <Text type="small_body" style={styles.text}>
        {text}
      </Text>
      <View style={styles.border} />
    </HStack>
  )
}

export default Separater
