import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import Text from '../Text'
import VStack from '../VStack'
import HStack from '../HStack'
import Spacer from '../Spacer'
import { useStyles } from './styles'

type Props = {
  title: string
  header?: React.ReactNode
  style?: StyleProp<ViewStyle>
}

const ScreenFrame: React.FC<Props> = ({
  title,
  header,
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
        <Spacer />
        {header}
      </HStack>
      <VStack gap={16}>
        {children}
      </VStack>
    </VStack>
  )
}

export default ScreenFrame
