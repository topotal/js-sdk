import{j as i}from"./index-FBWzmZge.js";import{M as a}from"./index-ggz9vPCQ.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LgXL2HH1.js";import"./index-B0s6Peb0.js";import"./index-MT7WmrMi.js";import"./index-Ed39mVia.js";import"./index-aKRnNsEw.js";import"./index-2q6owiuR.js";import"./index-7jojP3g7.js";import"./index-jmm5gWkb.js";import"./index-0tTWSQQD.js";import"./index-maDx5jV0.js";const k={title:"components/MdRenderer"},m=`
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
`,t=()=>i.jsx(a,{markdown:m});var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"() => <MdRenderer markdown={markdown} />",...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,k as default};
