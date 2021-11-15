import { memo, useCallback } from 'react'
import { Image, Pressable, StyleProp, ViewStyle } from 'react-native'
import { HStack, Text } from '../../..'
import { TagData } from '../..'
import { useStyles } from './styles'

interface Props {
  style?: StyleProp<ViewStyle>
  tagData: TagData
  onPressRemove: (tagData: TagData) => void
}

const removeIcon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iIzAwMDAwMCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXoiLz48L3N2Zz4='

export const Tag = memo<Props>(({
  style,
  tagData,
  onPressRemove,
}) => {
  const { styles } = useStyles()

  const handlePressRemove = useCallback(() => {
    onPressRemove(tagData)
  }, [onPressRemove, tagData])

  return (
    <HStack
      align="flex-end"
      style={[styles.wrapper, style]}
    >
      <HStack
        gap={4}
        align="center"
        style={styles.container}
      >
        <Text style={styles.label}>
          {tagData.label}
        </Text>
        <Pressable onPress={handlePressRemove}>
          <Image
            style={styles.removeIcon}
            source={{ uri: removeIcon }}
          />
        </Pressable>
      </HStack>
    </HStack>
  )
})
