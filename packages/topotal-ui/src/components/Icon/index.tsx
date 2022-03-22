import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import { useTheme } from '../../theme'
import { useStyles } from './styles'

interface Props {
  name: string
  style?: StyleProp<ImageStyle>
  testId?: string
}

export const Icon = React.memo<Props>(({
  name,
  style,
}) => {
  const { styles } = useStyles()
  const { iconBasePath } = useTheme()

  return (
    <Image
      style={[styles.wrapper, style]}
      source={{
        uri: `${iconBasePath}/${name}.svg`,
      }}
    />
  )
})
