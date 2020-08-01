import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { VStack } from '~/components'
import NavRow from './components/NavRow'
import { useStyles } from './styles'

type NavItemValue = NavItem
export type NavItem = {
  label: string
  path: string
  icon?: string
  items?: NavItemValue[]
}

type Props = {
  items: NavItem[]
  style?: StyleProp<ViewStyle>
  onPressNavRow?: (path: string) => void
}

const SideBar: React.FC<Props> = ({
  items,
  style,
  onPressNavRow,
}) => {
  const { styles } = useStyles()

  return (
    <VStack style={[styles.wrapper, style]}>
      {items.map((item, index) => (
        <NavRow
          key={index}
          item={item}
          onPress={onPressNavRow}
        />
      ))}
    </VStack>
  )
}

export default SideBar
