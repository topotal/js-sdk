/* eslint-disable no-irregular-whitespace */
import React from 'react'
import { MdRenderer } from '.'

export default {
  title: 'components/MdRenderer',
}

const markdown = `

# H1

## H2

### H3

#### H4

##### H5

###### H6

text text

[link](https://google.com)

text in [link](https://google.com).

   let's こんにちはさようなら

　全角スペース　全角スペース

text **Bold text** normal text

long text long text long text long text long text long text
long text long text long text long text long text long text
long text long text long text long text long text long text

### h3

#### h4

\`\`\`html
<script>alert()</script>
\`\`\`

\`\`\`javascript
function hoge {
  console.info('hoge');
}
\`\`\`

\`\`\`ruby
class Greeter
  def initialize(name)
    @name = name.capitalize
  end

  def salute
    puts "Hello #{@name}!"
  end
end

g = Greeter.new("world")
g.salute
\`\`\`

`

export const Default = () => (
  <MdRenderer markdown={markdown} />
)
