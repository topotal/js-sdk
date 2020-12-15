import React from 'react'
import Icon from '.'
import HStack from '../HStack'

export default {
  title: 'components/Icon',
}

const style = {
  borderWidth: 1,
  borderColor: 'black',
}

export const Default = () => (
  <HStack gap={16}>
    <Icon name="done-black" style={style} />
    <Icon name="settings-black" style={style} />
  </HStack>
)
