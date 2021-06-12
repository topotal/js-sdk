import React from 'react'
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { PreTag } from './components/PreTag'
import { Renderer } from './components/Renderer'

interface Props {
  code: string
  language: string
  style?: StyleProp<ViewStyle>
}

export const SyntaxHighlighter = React.memo<Props>(({
  code,
  language,
  style,
}) => {
  return (
    <View
      style={[{
        width: '100%',
        borderRadius: 4,
        overflow: 'hidden',
      }, style]}
    >
      <ReactSyntaxHighlighter
        renderer={Renderer}
        language={language}
        style={vs2015}
        PreTag={PreTag}
        CodeTag={ScrollView}
      >
        {code}
      </ReactSyntaxHighlighter>
    </View>
  )
})
