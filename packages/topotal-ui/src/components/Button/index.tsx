import React from 'react'
import { ActivityIndicator, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import { HStack } from '../HStack'
import { Text } from '../Text'
import { useStyles } from './styles'
import { Color, Size, Variant } from './types'

interface Props {
  title: string
  size?: Size
  color?: Color
  variant?: Variant
  disabled?: boolean
  loading?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: (e: React.BaseSyntheticEvent) => void
}

export const Button = React.memo<Props>(({
  title,
  size = 'large',
  color = 'primary',
  variant = 'contain',
  disabled = false,
  loading = false,
  onPress,
  style,
}) => {
  const { styles, indicatorColor, textType } = useStyles({
    size,
    color,
    variant,
    disabled,
    loading,
  })

  return (
    <TouchableOpacity
      disabled={disabled || loading}
      accessibilityRole="button"
      style={style}
      onPress={onPress}
    >
      <HStack
        gap={24}
        align="center"
        justify="center"
        style={styles.wrapper}
      >
        {loading ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <Text
            style={styles.title}
            type={textType}
            weight="bold"
          >
            {title}
          </Text>
        )}
      </HStack>
    </TouchableOpacity>
  )
})
