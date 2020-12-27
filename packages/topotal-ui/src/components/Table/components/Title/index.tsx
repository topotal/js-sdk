import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { VStack, Text } from '../../../..'
import { useStyles } from './styles'

type Props = {
  style?: StyleProp<ViewStyle>
}

const TableHeader: React.FC<Props> = ({ style, children }) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]}>
      <Text
        type="body"
        weight="bold"
        style={styles.text}
      >
        {children}
      </Text>
    </VStack>
  )
}

export default TableHeader
