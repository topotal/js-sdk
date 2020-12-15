import React from 'react'
import { Image, ImageStyle, ViewStyle, View } from 'react-native'
import { useTheme } from '../../theme'

export type IconName =
  'settings-black' |
  'done-black'

type Props = {
  name: IconName
  style?: ViewStyle
}

const Icon: React.FC<Props> = ({
  name,
  style,
}) => {
  const { iconBasePath } = useTheme()

  return (
    <View style={[styles.wrapper, style]}>
      <Image
        style={styles.image}
        source={{
          uri: `${iconBasePath}/${name}.svg`,
        }}
      />
    </View>
  )
}

type Styles = {
  wrapper: ViewStyle
  image: ImageStyle
}

const styles: Styles = {
  wrapper: {
    width: 32,
    minWidth: 16,
    minHeight: 16,
  },
  image: {
    width: '100%',
    paddingTop: '100%',
  },
}

export default React.memo(Icon)
