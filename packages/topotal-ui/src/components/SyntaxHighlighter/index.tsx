import React from 'react'
import { ScrollView, StyleProp, View, ViewStyle } from 'react-native'
import ReactSyntaxHighlighter from 'react-syntax-highlighter'
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { PreTag } from './components/PreTag'
import { Renderer } from './components/Renderer'

interface Props {
  code: string
  language: string
  style?: StyleProp<ViewStyle>
  testID?: string
}

export const SyntaxHighlighter = React.memo<Props>(({
  code,
  language,
  style,
  testID,
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
        testID={`${testID}_syntax_highlighter`}
      >
        {code}
      </ReactSyntaxHighlighter>
    </View>
  )
})
