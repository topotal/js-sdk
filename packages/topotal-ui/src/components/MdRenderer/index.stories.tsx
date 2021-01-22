import React from 'react'
import MdRenderer from '.'

export default {
  title: 'components/MdRenderer',
}

const markdown = `## Overviev
text text

[link](https://google.com)

text in [link](https://google.com).

let's

**Bold text**

### h3

#### h4

\`\`\`JavaScript
function hoge {
  console.info('hoge');
}
\`\`\`

`

export const Default = () => (
  <MdRenderer markdown={markdown} />
)
