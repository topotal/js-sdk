import React from 'react'
import Text from './'

export default { title: 'components/Text' }

export const all = () => (
  <>
    <Text type="display2">Sample Text サンプルテキスト: display2 18px LineHeight 26px</Text>
    <Text type="display2" weight="bold">
      Sample Text サンプルテキスト: display2 18px LineHeight 26px
    </Text>
    <Text type="display1">Sample Text サンプルテキスト: display1 14px LineHeight 20px</Text>
    <Text type="display1" weight="bold">Sample Text サンプルテキスト: display1 14px LineHeight 20px</Text>
    <Text type="body">Sample Text サンプルテキスト: body 12px LineHeight 17px</Text>
    <Text type="body" weight="bold">Sample Text サンプルテキスト: body 12px LineHeight 17px</Text>
    <Text type="small_body">Sample Text サンプルテキスト: small_body 10px  LineHeight 14px</Text>
    <Text type="small_body" weight="bold">Sample Text サンプルテキスト: small_body 10px  LineHeight 14px</Text>
  </>
)

export const Hoge = () => (
  <Text accessibilityRole="link">Sample Text サンプルテキスト</Text>
)
