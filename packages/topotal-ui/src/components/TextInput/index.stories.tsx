import React from 'react'
import TextInput from './'

export default { title: 'components/TextInput' }

export const all = () => (
  <>
    <TextInput />
    <TextInput placeholder="カスタムプレースホルダー" />
    <TextInput secureTextEntry />
    <TextInput error />
    <TextInput
      multiline
      style={{ height: 300 }}
    />
    <TextInput value="default value" onChangeText={value => console.info(value)}/>
  </>
)
