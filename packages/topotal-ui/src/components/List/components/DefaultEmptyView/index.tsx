import { memo } from 'react'
import { Text, VStack } from '../../..'
import { useStyles } from './styles'

export const DefaultEmptyView = memo(() => {
  const { styles } = useStyles()

  return (
    <VStack
      style={styles.wrapper}
      align="center"
      justify="center"
    >
      <Text
        style={styles.text}
        weight="bold"
      >
        No items found
      </Text>
    </VStack>
  )
})
