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

### URL

https://topotal.com

文中に URL だと https://topotal.com どうなるのか

## List

- item1
  - item1-1
    - item1-1-1
      \`\`\`js
      console.info('hoge')
      \`\`\`
    - item1-1-2
  - item1-2
  - item1-3
- item2
  - item2-1
- item3
- [link](https://topotal.com) item

1. item1
1. item2
    1. item2-1
1. item3
    1. item3-1

## Code

これは文中に存在する \`code\` です

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

\`\`\`
cd {{sample}} | grep hoge
\`\`\`

## 文中の不等号

Nav1 > Nav2 > Nav3
Nav1 < Nav2 < Nav3

## 引用

> これは引用文です

> これは複数行の引用文です。
これは複数行の引用文です。

## エスケープ

文中でエスケープ \\<br\\> する

いきなりエスケープ

\\<br\\>

## 画像

![サンプル画像](http://topotal.com/images/infrastructure_as_code.svg)

\`\`\`markdown
![サンプル画像](http://topotal.com/images/infrastructure_as_code.svg)
\`\`\`

<img width="200" height="200" src="http://topotal.com/images/infrastructure_as_code.svg">

\`\`\`markdown
<img width="200" height="200" src="http://topotal.com/images/infrastructure_as_code.svg">
\`\`\`


## XSS Test

<script>alert(0)</script>

**<script>alert(0)</script>**

\\<script\\>alert(0)\\<\\/script\\>

\`\`\`"><img/onerror="alert(location)"src=.>
aaa
\`\`\`

\`\`\`.py "onmousemove='alert(1)'"
print(0)
\`\`\`

<form action="http://api.example.com/change_password" method="POST">
  <input type="hidden" name="password" value="hack" />
  <input type="submit" value="これ見て！" />
</form>

<iframe src="https://qiita.com"></iframe>
`

export const Default = () => (
  <MdRenderer markdown={markdown} />
)
