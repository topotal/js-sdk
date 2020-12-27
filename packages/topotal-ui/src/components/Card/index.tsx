import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import VStack from '../VStack'
import HStack from '../HStack'
import { useStyles } from './styles'

export type Level = 1 | 2

type Props = {
  header?: React.ReactNode
  footer?: React.ReactNode
  level?: Level
  style?: StyleProp<ViewStyle>
}

const Card: React.FC<Props> = ({
  header,
  footer,
  level = 1,
  style,
  children,
}) => {
  const { styles } = useStyles({ level })

  return (
    <VStack style={[styles.wrapper, style]}>
      {header ? (
        <HStack
          style={styles.header}
          align="center"
          gap={8}
        >
          {header}
        </HStack>
      ) : null}
      <VStack style={styles.body}>
        {children}
      </VStack>
      {footer ? (
        <HStack
          style={styles.footer}
          align="center"
          gap={8}
        >
          {footer}
        </HStack>
      ) : null}
    </VStack>
  )
}

export default Card
