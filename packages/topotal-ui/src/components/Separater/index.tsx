import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import { HStack } from '../HStack'
import { Text } from '../Text'
import { useStyles } from './styles'

interface Props {
  text: string
  style?: StyleProp<ViewStyle>
  testID?: string
}

export const Separater = React.memo<Props>(({ text, style, testID }) => {
  const { styles } = useStyles()

  return (
    <HStack
      gap={16}
      align="center"
      justify="space-between"
      style={style}
    >
      <View style={styles.border} />
      <Text
        type="small_body"
        weight="bold"
        style={styles.text}
        testID={`${testID}_text`}
      >
        {text}
      </Text>
      <View style={styles.border} />
    </HStack>
  )
})
