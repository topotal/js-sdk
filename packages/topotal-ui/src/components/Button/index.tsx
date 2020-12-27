import React from 'react'
import { TouchableOpacity, ActivityIndicator, StyleProp, ViewStyle } from 'react-native'
import Text from '../Text'
import HStack from '../HStack'
import { Size, Color, Variant } from './types'
import { useStyles } from './styles'

type Props = {
  title: string
  size?: Size
  color?: Color
  variant?: Variant
  disabled?: boolean
  loading?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: (e: React.BaseSyntheticEvent) => void
}

const Button: React.FC<Props> = ({
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
      <HStack gap={24} align="center" justify="center" style={styles.wrapper}>
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
}

export default Button
