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
    <TextInput size="medium" />
    <TextInput size="medium" placeholder="カスタムプレースホルダー" />
    <TextInput size="medium" secureTextEntry />
    <TextInput size="medium" error />
    <TextInput size="medium" value="default value" onChangeText={value => console.info(value)}/>
    <TextInput size="medium" multiline />
  </>
)
