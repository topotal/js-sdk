import { ReactElement } from 'react'
import type { StyleProp, ViewStyle } from 'react-native'
import { View } from 'react-native'
import { HStack } from '..'
import { useStyles } from './styles'

export type InputFrameSize = 'small' | 'medium' | 'large'

interface RenderInputProps {
  style?: StyleProp<ViewStyle>
  testId?: string
}

interface Props {
  style?: StyleProp<ViewStyle>
  focus?: boolean
  error?: boolean
  size?: InputFrameSize
  disabled?: boolean
  renderLeftItem?: () => ReactElement | null
  renderInput: (props: RenderInputProps) => ReactElement | null
}

export const InputFrame = ({
  style,
  focus = false,
  error = false,
  size = 'large',
  disabled = false,
  renderLeftItem,
  renderInput,
}: Props): JSX.Element => {
  const { styles } = useStyles({
    size,
    focus,
    error,
    hasLeftItem: !!renderLeftItem,
    disabledPointerEvents: disabled,
  })

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
      </View>
    </HStack>
  )
}
