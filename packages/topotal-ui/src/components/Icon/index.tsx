import React from 'react'
import { Image, ImageStyle } from 'react-native'
import { useTheme } from '../../theme'

export type IconName =
  'settings-black' |
  'done' |
  'whatshot' |
  'group' |
  'memory' |
  'book' |
  'credit_card' |
  'notifications_none' |
  'domain'

type Props = {
  name: IconName
  style?: ImageStyle
}

const Icon: React.FC<Props> = ({
  name,
  style,
}) => {
  const { iconBasePath } = useTheme()
  return (
    <Image
      style={[styles.wrapper, style]}
      source={{
        uri: `${iconBasePath}/${name}.svg`,
      }}
    />
  )
}

type Styles = {
  wrapper: ImageStyle
}

const styles: Styles = {
  wrapper: {
    width: 24,
    height: 24,
  },
}

export default React.memo(Icon)
