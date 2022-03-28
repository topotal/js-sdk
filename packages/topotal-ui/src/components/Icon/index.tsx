import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import { useTheme } from '../../theme'
import { useStyles } from './styles'

interface Props {
  name: string
  style?: StyleProp<ImageStyle>
  testID?: string
}

export const Icon = React.memo<Props>(({
  name,
  style,
  testID,
}) => {
  const { styles } = useStyles()
  const { iconBasePath } = useTheme()

  return (
    <Image
      testID={testID}
      style={[styles.wrapper, style]}
      source={{
        uri: `${iconBasePath}/${name}.svg`,
      }}
    />
  )
})
