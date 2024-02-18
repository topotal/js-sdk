import{j as t}from"./index-FBWzmZge.js";import{V as N}from"./index-7jojP3g7.js";import{B as e}from"./index-FEBaJnz7.js";import"./index-0tTWSQQD.js";import"./index-LgXL2HH1.js";import"./index-maDx5jV0.js";import{r}from"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-B0s6Peb0.js";import"./index-2q6owiuR.js";import"./index-MT7WmrMi.js";import"./index-jmm5gWkb.js";import"./index-aKRnNsEw.js";import"./index-Ed39mVia.js";var z=function(){return z=Object.assign||function(i){for(var l,o=1,u=arguments.length;o<u;o++){l=arguments[o];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(i[s]=l[s])}return i},z.apply(this,arguments)};function C(){var n=r.useRef(!1),i=r.useCallback(function(){return n.current},[]);return r.useEffect(function(){return n.current=!0,function(){n.current=!1}},[]),i}function w(n,i,l){i===void 0&&(i=[]),l===void 0&&(l={loading:!1});var o=r.useRef(0),u=C(),s=r.useState(l),x=s[0],v=s[1],P=r.useCallback(function(){for(var g=[],c=0;c<arguments.length;c++)g[c]=arguments[c];var j=++o.current;return x.loading||v(function(a){return z(z({},a),{loading:!0})}),n.apply(void 0,g).then(function(a){return u()&&j===o.current&&v({value:a,loading:!1}),a},function(a){return u()&&j===o.current&&v({error:a,loading:!1}),a})},i);return[x,P]}const G={title:"components/Button"},E=n=>new Promise(i=>setTimeout(i,n)),m=()=>{const[{loading:n},i]=w(async()=>{console.info("hoge"),await E(1e3)},[]);return t.jsx(e,{title:"テスト",loading:n,onPress:i})},d=()=>t.jsxs(N,{gap:8,align:"flex-start",children:[t.jsx(e,{title:"Save",color:"basic",size:"small"}),t.jsx(e,{title:"Save",color:"basic",size:"medium"}),t.jsx(e,{title:"Save",color:"basic",size:"small",variant:"outline"}),t.jsx(e,{title:"Save",color:"basic",size:"medium",variant:"outline"}),t.jsx(e,{title:"Save",color:"basic",size:"small",variant:"text"}),t.jsx(e,{title:"Save",color:"basic",size:"medium",variant:"text"}),t.jsx(e,{title:"Post",size:"small"}),t.jsx(e,{title:"Post",size:"small",disabled:!0}),t.jsx(e,{title:"Post",size:"medium"}),t.jsx(e,{title:"Post",size:"large"}),t.jsx(e,{title:"Post",size:"small",variant:"outline"}),t.jsx(e,{title:"Post",size:"medium",variant:"outline"}),t.jsx(e,{title:"Post",size:"small",variant:"text"}),t.jsx(e,{title:"Post",size:"medium",variant:"text"}),t.jsx(e,{title:"Save",color:"success",size:"small"}),t.jsx(e,{title:"Save",color:"success",size:"medium"}),t.jsx(e,{title:"Save",color:"success",size:"small",variant:"outline"}),t.jsx(e,{title:"Save",color:"success",size:"medium",variant:"outline"}),t.jsx(e,{title:"Save",color:"success",size:"small",variant:"text"}),t.jsx(e,{title:"Save",color:"success",size:"medium",variant:"text"}),t.jsx(e,{title:"Delete",color:"error",size:"small"}),t.jsx(e,{title:"Delete",color:"error",size:"medium"}),t.jsx(e,{title:"Delete",color:"error",size:"small",variant:"outline"}),t.jsx(e,{title:"Delete",color:"error",size:"medium",variant:"outline"}),t.jsx(e,{title:"Delete",color:"error",size:"small",variant:"text"}),t.jsx(e,{title:"Delete",color:"error",size:"medium",variant:"text"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"small"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"medium"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"small",variant:"outline"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"medium",variant:"outline"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"small",variant:"text"}),t.jsx(e,{title:"Cancel",color:"cancel",size:"medium",variant:"text"}),t.jsx(e,{title:"Warning",color:"warning",size:"small"}),t.jsx(e,{title:"Warning",color:"warning",size:"medium"}),t.jsx(e,{title:"Warning",color:"warning",size:"small",variant:"outline"}),t.jsx(e,{title:"Warning",color:"warning",size:"medium",variant:"outline"}),t.jsx(e,{title:"Warning",color:"warning",size:"small",variant:"text"}),t.jsx(e,{title:"Warning",color:"warning",size:"medium",variant:"text"}),t.jsx(e,{title:"送信",size:"small",loading:!0}),t.jsx(e,{title:"送信",size:"medium",loading:!0}),t.jsx(e,{title:"送信",size:"large",loading:!0}),t.jsx(e,{title:"送信",startIconName:"done"}),t.jsx(e,{title:"送信",endIconName:"done"}),t.jsx(e,{title:"送信",size:"medium",startIconName:"done"}),t.jsx(e,{title:"送信",size:"medium",endIconName:"done"}),t.jsx(e,{title:"送信",size:"small",startIconName:"done"}),t.jsx(e,{title:"送信",size:"small",endIconName:"done"}),t.jsx(e,{title:"",size:"small",endIconName:"done"}),t.jsx(e,{title:"",size:"medium",endIconName:"done"}),t.jsx(e,{title:"",size:"large",endIconName:"done"}),t.jsx(e,{title:"InnerOutline",innerOutline:!0,variant:"outline"})]});var B,f,p;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [{
    loading
  }, submit] = useAsyncFn(async () => {
    console.info('hoge');
    await sleep(1000);
  }, []);
  return <Button title="テスト" loading={loading} onPress={submit} />;
}`,...(p=(f=m.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var S,b,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`() => <VStack gap={8} align="flex-start">
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
  </VStack>`,...(I=(b=d.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const H=["Test","All"];export{d as All,m as Test,H as __namedExportsOrder,G as default};
