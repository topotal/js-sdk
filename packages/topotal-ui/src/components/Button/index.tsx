import React from 'react'
import { TouchableOpacity, ActivityIndicator } from 'react-native'
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
  onPress?: (e: React.BaseSyntheticEvent) => void
}

const Button: React.FC<Props> = ({
  title,
  size = 'large',
  color = 'primary',
  variant = 'contain',
  disabled = false,
  loading = false,
  ...rest
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
      {...rest}
    >
      <HStack gap={24} align="center" justify="center" style={styles.wrapper}>
        {loading ? (
          <ActivityIndicator color={indicatorColor} />
        ) : (
          <Text type={textType} style={styles.title}>
            {title}
          </Text>
        )}
      </HStack>
    </TouchableOpacity>
  )
}

export default Button
