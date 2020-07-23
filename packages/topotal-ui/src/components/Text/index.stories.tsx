import React from 'react'
import Text from './'

export default { title: 'components/Text' }

export const all = () => (
  <>
    <Text type="display4">Sample Text サンプルテキスト: display4</Text>
    <Text type="display3">Sample Text サンプルテキスト: display3</Text>
    <Text type="display2">Sample Text サンプルテキスト: display2</Text>
    <Text type="display1">Sample Text サンプルテキスト: display1</Text>
    <Text type="caption">Sample Text サンプルテキスト: caption</Text>
    <Text type="body">Sample Text サンプルテキスト: body</Text>
    <Text type="small_caption">
      Sample Text サンプルテキスト: small_Caption
    </Text>
    <Text type="small_body">Sample Text サンプルテキスト: small_body</Text>
    <Text type="x_small_caption">
      Sample Text サンプルテキスト: x_small_caption
    </Text>
    <Text type="x_small_body">
      Sample Text サンプルテキスト: x_small_body
    </Text>
  </>
)