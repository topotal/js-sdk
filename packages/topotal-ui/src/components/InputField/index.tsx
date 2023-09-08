import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { useTheme } from '../../theme'
import { HStack, Text, VStack } from '../'

interface Props {
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
  title?: string
  description?: string
  optional?: boolean
  errorMessage?: string
}

export const InputField = ({
  style,
  children,
  title,
  description,
  optional,
  errorMessage,
}: Props): JSX.Element => {
  const { color } = useTheme()

  return (
    <VStack style={style} gap={8}>
      <VStack>
        <></>
        <HStack gap={8} align="center">
          {title ? (
            <Text weight="bold">
              {title}
            </Text>
          ) : null}
          {optional ? (
            <Text
              type="small_body"
              style={{ color: color.secondaryTextDark }}
            >
              (Optional)
            </Text>
          ) : null}
        </HStack>
        {description ? (
          <Text>
            {description}
          </Text>
        ) : null}
      </VStack>
      <VStack>
        {children}
      </VStack>
      {errorMessage ? (
        <Text
          type="small_body"
          style={{ color: color.error }}
        >
          {errorMessage}
        </Text>
      ) : null}
    </VStack>
  )
}
