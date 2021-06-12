import React from 'react'
import { MdRenderer } from '.'

export default {
  title: 'components/MdRenderer',
}

const markdown = `## Overviev
text text

[link](https://google.com)

text in [link](https://google.com).

let's

text **Bold text** normal text

long text long text long text long text long text long text
long text long text long text long text long text long text
long text long text long text long text long text long text

### h3

#### h4

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
