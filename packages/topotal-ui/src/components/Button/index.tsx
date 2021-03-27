import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Pressable, StyleProp, ViewStyle } from 'react-native'
import { HStack, Icon, Text } from '..'
import { useStyles } from './styles'
import { Color, Size, Variant } from './types'

interface Props {
  title: string
  size?: Size
  color?: Color
  variant?: Variant
  disabled?: boolean
  loading?: boolean
  startIconName?: string
  endIconName?: string
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
  startIconName,
  endIconName,
  style,
  onPress,
}) => {
  const [hovered, setHovered] = useState(false)
  const {
    styles,
    indicatorColor,
    textType,
  } = useStyles({
    size,
    color,
    variant,
    disabled,
    loading,
    hovered,
  })

  const handleHoverIn = useCallback(() => {
    setHovered(true)
  }, [])

  const handleHoverOut = useCallback(() => {
    setHovered(false)
  }, [])

  return (
    <Pressable
      disabled={disabled || loading}
      accessibilityRole="button"
      style={style}
      onPress={onPress}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
    >
      <HStack
        gap={8}
        align="center"
        justify="center"
        style={styles.wrapper}
      >
        {loading ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <>
            {startIconName ? (
              <Icon
                style={styles.icon}
                name={startIconName}
              />
            ) : null}
            <Text
              style={styles.title}
              type={textType}
              weight="bold"
            >
              {title}
            </Text>
            {endIconName ? (
              <Icon
                style={styles.icon}
                name={endIconName}
              />
            ) : null}
          </>
        )}
      </HStack>
    </Pressable>
  )
})
