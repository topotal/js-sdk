import React from 'react'
import { View, ViewStyle, TouchableOpacity } from 'react-native'
import Cell from '../Cell'
import TableHeader from '../Title'

type Props = {
  style?: ViewStyle
  children?: (
    React.ReactElement<React.ComponentProps<typeof TableHeader>>[] |
    React.ReactElement<React.ComponentProps<typeof Cell>>[]
  )
  onPress?: () => void
}

const Row: React.FC<Props> = ({
  style,
  children,
  onPress,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      {onPress ? (
        <TouchableOpacity
          style={styles.touchArea}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      ) : children}
    </View>
  )
}

type Styles = {
  wrapper: ViewStyle
  touchArea: ViewStyle
}

const styles: Styles = {
  wrapper: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  touchArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
}

export default Row
