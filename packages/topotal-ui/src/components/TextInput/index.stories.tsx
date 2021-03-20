import React from 'react'
import { TextInput } from './'

export default { title: 'components/TextInput' }

export const all = () => (
  <>
    <TextInput />
    <TextInput placeholder="カスタムプレースホルダー" />
    <TextInput secureTextEntry />
    <TextInput error />
    <TextInput value="default value" onChangeText={value => console.info(value)}/>
    <TextInput multiline />
  </>
)
