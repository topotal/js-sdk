import { BaseSyntheticEvent, memo } from 'react'
import { ActivityIndicator, Pressable, StyleProp, ViewStyle } from 'react-native'
import { useFocus, useFocusOutlineStyle, useHover } from '../../hooks'
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
  innerOutline?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: (e: BaseSyntheticEvent) => void
  testID?: string
}

export const Button = memo<Props>(({
  title,
  size = 'large',
  color = 'primary',
  variant = 'contain',
  disabled = false,
  loading = false,
  startIconName,
  endIconName,
  innerOutline = false,
  style,
  onPress,
  testID,
}) => {
  const { hovering, handleHoverIn, handleHoverOut } = useHover()
  const { isFocused, handleBlur, handleFocus } = useFocus()
  const { styles: focusOutlineStyles } = useFocusOutlineStyle({ focus: isFocused, innerOutline })
  const { styles, indicatorColor, textType } = useStyles({
    size,
    color,
    variant,
    disabled,
    loading,
    hovering,
  })

  return (
    <Pressable
      style={[
        styles.wrapper,
        focusOutlineStyles.wrapper,
        style,
      ]}
      disabled={disabled || loading}
      accessibilityRole="button"
      onPress={onPress}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      testID={testID}
    >
      <HStack
        gap={8}
        align="center"
        justify="center"
        style={styles.container}
      >
        {loading ? (
          <ActivityIndicator
            color={indicatorColor}
            style={styles.indicator}
          />
        ) : (
          <>
            {startIconName ? (
              <Icon
                style={styles.icon}
                name={startIconName}
              />
            ) : null}
            {title ? (
              <Text
                style={styles.title}
                type={textType}
                weight="bold"
              >
                {title}
              </Text>
            ) : null}
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
