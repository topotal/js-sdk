import{j as i}from"./index-C19Z7ebk.js";import{c as a}from"./index-qG8QhJRO.js";import"./index-BS1Ahyye.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-bQVzNpnV.js";import"./index-DVaO3OZA.js";import"./extends-CCbyfPlC.js";import"./index-C-ccZ4uZ.js";import"./index-CXOEo_ad.js";import"./index-B-tRbuPw.js";import"./index-B7E4H2Lj.js";import"./index-Do7bR3wk.js";import"./index-hvGZvQJJ.js";import"./index-BWnoVj4o.js";import"./index-CLPokHI7.js";const H={title:"components/MdRenderer"},m=`
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
<script>alert()<\/script>
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

<script>alert(0)<\/script>

**<script>alert(0)<\/script>**

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
`,t=()=>i.jsx(a,{markdown:m});var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"() => <MdRenderer markdown={markdown} />",...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,H as default};
