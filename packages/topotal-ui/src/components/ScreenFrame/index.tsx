import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { VStack, HStack, Text } from '../..'
import { useStyles } from './styles'

type Props = {
  title: string
  style?: StyleProp<ViewStyle>
}

const ScreenFrame: React.FC<Props> = ({
  title,
  style,
  children,
}) => {
  const { styles } = useStyles()

  return (
    <VStack
      style={[styles.wrapper, style]}
      gap={24}
    >
      <HStack>
        <Text type="display2">
          {title}
        </Text>
      </HStack>
      <VStack gap={16}>
        {children}
      </VStack>
    </VStack>
  )
}

export default ScreenFrame
