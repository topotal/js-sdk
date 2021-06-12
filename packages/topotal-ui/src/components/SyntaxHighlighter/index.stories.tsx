import React from 'react'
import { SyntaxHighlighter } from '.'

export default {
  title: 'components/SyntaxHilighter',
}

const sampleCode = `import React from 'react';
import { ScrollView } from 'react-native';

export const PreTag: React.FC = (props) => {
  return (
    <ScrollView
      style={{
        padding: 16,
        backgroundColor: '#333',
      }}
    />
  )
}`


export const Default = () => (
  <SyntaxHighlighter
    code={sampleCode}
    language="typescript"
  />
)
