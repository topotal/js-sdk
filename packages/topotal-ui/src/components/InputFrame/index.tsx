import { ReactElement } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { View } from 'react-native'
import { HStack, Text } from '..'
import { useStyles } from './styles'

export type InputFrameSize = 'medium' | 'large'

interface RenderInputProps {
  style?: StyleProp<ViewStyle>
}

interface Props {
  style?: StyleProp<ViewStyle>
  placeholder?: string
  showPlaceholder?: boolean
  focus?: boolean
  error?: boolean
  size?: InputFrameSize
  renderLeftItem?: () => ReactElement | null
  renderInput: (props: RenderInputProps) => ReactElement | null
}

export const InputFrame = ({
  style,
  placeholder = '',
  showPlaceholder = false,
  focus = false,
  error = false,
  size = 'large',
  renderLeftItem,
  renderInput,
}: Props): JSX.Element => {
  const { styles } = useStyles({ size, focus, error, hasLeftItem: !!renderLeftItem })

  return (
    <HStack style={[styles.wrapper, style]} align="stretch">
      {renderLeftItem ? (
        <HStack
          justify="center"
          align="center"
          style={styles.leftItemWrapper}
        >
          {renderLeftItem()}
        </HStack>
      ) : null}
      <View style={styles.inputWrapper}>
        {renderInput({
          style: styles.input,
        })}
        {showPlaceholder ? (
          <HStack
            style={styles.placeholderWrapper}
            pointerEvents="none"
          >
            <Text
              type="body"
              style={styles.placeholder}
            >
              {placeholder}
            </Text>
          </HStack>
        ) : null}
      </View>
    </HStack>
  )
}
