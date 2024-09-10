import{j as e}from"./index-BC0nXnaC.js";import{V as B}from"./index-D5S00zfD.js";import{B as t}from"./index-ZAojrbz8.js";import"./index-N3ghgXzs.js";import"./index-CgYaVfUA.js";import"./index-B_CD9V4r.js";import{r}from"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BNZ4CFqE.js";import"./index-fVnO6Xu2.js";import"./index-BQ1Xo2by.js";import"./extends-CCbyfPlC.js";import"./index-BtM5VmRH.js";import"./index-CgdANHCz.js";import"./index-Dw-bkfFf.js";var z=function(){return z=Object.assign||function(n){for(var l,o=1,u=arguments.length;o<u;o++){l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(n[s]=l[s])}return n},z.apply(this,arguments)};function P(){var i=r.useRef(!1),n=r.useCallback(function(){return i.current},[]);return r.useEffect(function(){return i.current=!0,function(){i.current=!1}},[]),n}function w(i,n,l){n===void 0&&(n=[]),l===void 0&&(l={loading:!1});var o=r.useRef(0),u=P(),s=r.useState(l),x=s[0],v=s[1],O=r.useCallback(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];var j=++o.current;return x.loading||v(function(a){return z(z({},a),{loading:!0})}),i.apply(void 0,g).then(function(a){return u()&&j===o.current&&v({value:a,loading:!1}),a},function(a){return u()&&j===o.current&&v({error:a,loading:!1}),a})},n);return[x,O]}const G={title:"components/Button"},C=i=>new Promise(n=>setTimeout(n,i)),m=()=>{const[{loading:i},n]=w(async()=>{console.info("hoge"),await C(1e3)},[]);return e.jsx(t,{title:"テスト",loading:i,onPress:n})},d=()=>e.jsxs(B,{gap:8,align:"flex-start",children:[e.jsx(t,{title:"Save",color:"basic",size:"small"}),e.jsx(t,{title:"Save",color:"basic",size:"medium"}),e.jsx(t,{title:"Save",color:"basic",size:"small",variant:"outline"}),e.jsx(t,{title:"Save",color:"basic",size:"medium",variant:"outline"}),e.jsx(t,{title:"Save",color:"basic",size:"small",variant:"text"}),e.jsx(t,{title:"Save",color:"basic",size:"medium",variant:"text"}),e.jsx(t,{title:"Post",size:"small"}),e.jsx(t,{title:"Post",size:"small",disabled:!0}),e.jsx(t,{title:"Post",size:"medium"}),e.jsx(t,{title:"Post",size:"large"}),e.jsx(t,{title:"Post",size:"small",variant:"outline"}),e.jsx(t,{title:"Post",size:"medium",variant:"outline"}),e.jsx(t,{title:"Post",size:"small",variant:"text"}),e.jsx(t,{title:"Post",size:"medium",variant:"text"}),e.jsx(t,{title:"Save",color:"success",size:"small"}),e.jsx(t,{title:"Save",color:"success",size:"medium"}),e.jsx(t,{title:"Save",color:"success",size:"small",variant:"outline"}),e.jsx(t,{title:"Save",color:"success",size:"medium",variant:"outline"}),e.jsx(t,{title:"Save",color:"success",size:"small",variant:"text"}),e.jsx(t,{title:"Save",color:"success",size:"medium",variant:"text"}),e.jsx(t,{title:"Delete",color:"error",size:"small"}),e.jsx(t,{title:"Delete",color:"error",size:"medium"}),e.jsx(t,{title:"Delete",color:"error",size:"small",variant:"outline"}),e.jsx(t,{title:"Delete",color:"error",size:"medium",variant:"outline"}),e.jsx(t,{title:"Delete",color:"error",size:"small",variant:"text"}),e.jsx(t,{title:"Delete",color:"error",size:"medium",variant:"text"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"small"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"medium"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"small",variant:"outline"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"medium",variant:"outline"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"small",variant:"text"}),e.jsx(t,{title:"Cancel",color:"cancel",size:"medium",variant:"text"}),e.jsx(t,{title:"Warning",color:"warning",size:"small"}),e.jsx(t,{title:"Warning",color:"warning",size:"medium"}),e.jsx(t,{title:"Warning",color:"warning",size:"small",variant:"outline"}),e.jsx(t,{title:"Warning",color:"warning",size:"medium",variant:"outline"}),e.jsx(t,{title:"Warning",color:"warning",size:"small",variant:"text"}),e.jsx(t,{title:"Warning",color:"warning",size:"medium",variant:"text"}),e.jsx(t,{title:"送信",size:"small",loading:!0}),e.jsx(t,{title:"送信",size:"medium",loading:!0}),e.jsx(t,{title:"送信",size:"large",loading:!0}),e.jsx(t,{title:"送信",startIconName:"done"}),e.jsx(t,{title:"送信",endIconName:"done"}),e.jsx(t,{title:"送信",size:"medium",startIconName:"done"}),e.jsx(t,{title:"送信",size:"medium",endIconName:"done"}),e.jsx(t,{title:"送信",size:"small",startIconName:"done"}),e.jsx(t,{title:"送信",size:"small",endIconName:"done"}),e.jsx(t,{title:"",size:"small",endIconName:"done"}),e.jsx(t,{title:"",size:"medium",endIconName:"done"}),e.jsx(t,{title:"",size:"large",endIconName:"done"}),e.jsx(t,{title:"InnerOutline",innerOutline:!0,variant:"outline"}),e.jsxs(B,{gap:8,style:{width:120},children:[e.jsx(t,{title:"InnerOutline",size:"medium",innerOutline:!0,variant:"outline"}),e.jsx(t,{startIconName:"done",title:"InnerOutline",size:"medium",innerOutline:!0,variant:"outline"}),e.jsx(t,{endIconName:"done",title:"InnerOutline",size:"medium",innerOutline:!0,variant:"outline"})]}),e.jsx(t,{title:"AI",color:"ai",size:"small",endIconName:"done"}),e.jsx(t,{title:"AI Medium",color:"ai",size:"medium",endIconName:"done"}),e.jsx(t,{title:"AI Large",color:"ai",size:"large",endIconName:"done"}),e.jsx(t,{title:"AI Outline",color:"ai",variant:"outline"})]});var I,f,p;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [{
    loading
  }, submit] = useAsyncFn(async () => {
    console.info('hoge');
    await sleep(1000);
  }, []);
  return <Button title="テスト" loading={loading} onPress={submit} />;
}`,...(p=(f=m.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var S,N,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => <VStack gap={8} align="flex-start">
    <Button title="Save" color="basic" size="small" />
    <Button title="Save" color="basic" size="medium" />
    <Button title="Save" color="basic" size="small" variant="outline" />
    <Button title="Save" color="basic" size="medium" variant="outline" />
    <Button title="Save" color="basic" size="small" variant="text" />
    <Button title="Save" color="basic" size="medium" variant="text" />
    <Button title="Post" size="small" />
    <Button title="Post" size="small" disabled />
    <Button title="Post" size="medium" />
    <Button title="Post" size="large" />
    <Button title="Post" size="small" variant="outline" />
    <Button title="Post" size="medium" variant="outline" />
    <Button title="Post" size="small" variant="text" />
    <Button title="Post" size="medium" variant="text" />
    <Button title="Save" color="success" size="small" />
    <Button title="Save" color="success" size="medium" />
    <Button title="Save" color="success" size="small" variant="outline" />
    <Button title="Save" color="success" size="medium" variant="outline" />
    <Button title="Save" color="success" size="small" variant="text" />
    <Button title="Save" color="success" size="medium" variant="text" />
    <Button title="Delete" color="error" size="small" />
    <Button title="Delete" color="error" size="medium" />
    <Button title="Delete" color="error" size="small" variant="outline" />
    <Button title="Delete" color="error" size="medium" variant="outline" />
    <Button title="Delete" color="error" size="small" variant="text" />
    <Button title="Delete" color="error" size="medium" variant="text" />
    <Button title="Cancel" color="cancel" size="small" />
    <Button title="Cancel" color="cancel" size="medium" />
    <Button title="Cancel" color="cancel" size="small" variant="outline" />
    <Button title="Cancel" color="cancel" size="medium" variant="outline" />
    <Button title="Cancel" color="cancel" size="small" variant="text" />
    <Button title="Cancel" color="cancel" size="medium" variant="text" />
    <Button title="Warning" color="warning" size="small" />
    <Button title="Warning" color="warning" size="medium" />
    <Button title="Warning" color="warning" size="small" variant="outline" />
    <Button title="Warning" color="warning" size="medium" variant="outline" />
    <Button title="Warning" color="warning" size="small" variant="text" />
    <Button title="Warning" color="warning" size="medium" variant="text" />
    <Button title="送信" size="small" loading={true} />
    <Button title="送信" size="medium" loading={true} />
    <Button title="送信" size="large" loading={true} />
    <Button title="送信" startIconName="done" />
    <Button title="送信" endIconName="done" />
    <Button title="送信" size="medium" startIconName="done" />
    <Button title="送信" size="medium" endIconName="done" />
    <Button title="送信" size="small" startIconName="done" />
    <Button title="送信" size="small" endIconName="done" />
    <Button title="" size="small" endIconName="done" />
    <Button title="" size="medium" endIconName="done" />
    <Button title="" size="large" endIconName="done" />
    <Button title="InnerOutline" innerOutline variant="outline" />
    <VStack gap={8} style={{
    width: 120
  }}>
      <Button title="InnerOutline" size="medium" innerOutline variant="outline" />
      <Button startIconName="done" title="InnerOutline" size="medium" innerOutline variant="outline" />
      <Button endIconName="done" title="InnerOutline" size="medium" innerOutline variant="outline" />
    </VStack>
    <Button title="AI" color="ai" size="small" endIconName="done" />
    <Button title="AI Medium" color="ai" size="medium" endIconName="done" />
    <Button title="AI Large" color="ai" size="large" endIconName="done" />
    <Button title="AI Outline" color="ai" variant="outline" />
  </VStack>`,...(b=(N=d.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const H=["Test","All"];export{d as All,m as Test,H as __namedExportsOrder,G as default};
