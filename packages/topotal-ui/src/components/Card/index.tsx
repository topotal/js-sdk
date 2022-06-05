import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { HStack } from '../HStack'
import { VStack } from '../VStack'
import { useStyles } from './styles'

export type Level = 1 | 2

interface Props {
  header?: React.ReactNode
  footer?: React.ReactNode
  level?: Level
  style?: StyleProp<ViewStyle>
  testID?: string
  children?: React.ReactNode
}

export const Card = ({
  header,
  footer,
  level = 1,
  style,
  children,
  testID,
}: Props): JSX.Element => {
  const { styles } = useStyles({ level })

  return (
    <VStack style={[styles.wrapper, style]} testID={testID}>
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
