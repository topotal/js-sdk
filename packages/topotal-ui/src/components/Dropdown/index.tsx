import { ReactNode, useCallback, useEffect } from 'react'
import { Modal, Pressable, StyleProp, View, ViewStyle } from 'react-native'
import { useMeasure } from '../../hooks'
import { useStyles } from './styles'

export type CardPositionAlign = 'left' | 'right'

interface Props {
  visible?: boolean
  style?: StyleProp<ViewStyle>
  align?: CardPositionAlign
  children?: ReactNode
  onPressBackground: () => void
  testID?: string
}

export const Dropdown = ({
  visible = false,
  style,
  align = 'left',
  children,
  onPressBackground,
  testID,
}: Props): JSX.Element | null => {
  const {
    ref: wrapperRef,
    measure: wrapperMeasure,
    updateMeasure,
    setMeasure,
    resetMeasure,
  } = useMeasure<View>()
  const { styles } = useStyles({ align, wrapperMeasure })

  useEffect(() => {
    if (visible) {
      updateMeasure()
    } else {
      resetMeasure()
    }
  }, [resetMeasure, setMeasure, updateMeasure, visible])

  const handleScroll = useCallback(() => {
    if (visible) {
      onPressBackground()
    }
  }, [onPressBackground, visible])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  if (!visible) {
    return null
  }

  return (
    <View
      style={[styles.wrapper, style]}
      ref={element => { wrapperRef.current = element || undefined }}
    >
      {wrapperMeasure.width === 0 && wrapperMeasure.height === 0 ? null : (
        <Modal visible transparent>
          <Pressable
            testID={`${testID}_background`}
            style={styles.background}
            onPress={onPressBackground}
          />
          <View style={styles.card} >
            {children}
          </View>
        </Modal>
      )}
    </View>
  )
}
