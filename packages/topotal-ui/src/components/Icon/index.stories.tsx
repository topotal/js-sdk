import React from 'react'
import Icon from '.'
import HStack from '../HStack'

export default {
  title: 'components/Icon',
}

const style = {
  borderWidth: 1,
  borderColor: 'black',
  tintColor: 'red',
}

export const Default = () => (
  <HStack gap={16}>
    <Icon name="done" style={style} />
    <Icon name="settings-black" style={style} />
    <Icon name="whatshot" style={style} />
    <Icon name="group" style={style} />
    <Icon name="memory" style={style} />
    <Icon name="book" style={style} />
    <Icon name="credit_card" style={style} />
    <Icon name="notifications_none" style={style} />
    <Icon name="domain" style={style} />
  </HStack>
)
