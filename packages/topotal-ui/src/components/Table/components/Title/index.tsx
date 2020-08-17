import React from 'react'
import { ViewStyle } from 'react-native'
import { VStack, Text } from '../../../..'
import { useStyles } from './styles'

type Props = {
  style?: ViewStyle
}

const TableHeader: React.FC<Props> = ({ style, children }) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]}>
      <Text
        type="caption"
        style={styles.text}
      >
        {children}
      </Text>
    </VStack>
  )
}

export default TableHeader
