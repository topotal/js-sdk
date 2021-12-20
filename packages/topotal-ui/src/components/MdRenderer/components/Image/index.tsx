import { useCallback, useEffect, useState } from 'react'
import { Image as BaseImage, StyleProp, ViewStyle } from 'react-native'
import { marked } from 'marked'
import { FixedRatioView } from '../../..'
import { useStyles } from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  token: marked.Tokens.Image
}

export const Image = ({ style, token }: Props) => {
  const [size, setSize] = useState<[number, number]>([0, 0])
  const { styles } = useStyles({ size })

  const handleGetSize = useCallback((width: number, height: number) => {
    setSize([width, height])
  }, [])

  useEffect(() => {
    BaseImage.getSize(token.href, handleGetSize)
  }, [handleGetSize, token.href])

  return (
    <FixedRatioView style={[styles.wrapper, style]} ratio={size}>
      <BaseImage
        style={styles.image}
        accessibilityLabel={token.text}
        source={{ uri: token.href }}
      />
    </FixedRatioView>
  )
}
