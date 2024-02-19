import{j as t,V as R}from"./index-FBWzmZge.js";import{r as i}from"./index-4g5l5LRQ.js";import{f as s}from"./index-ggz9vPCQ.js";import{T as _}from"./index-2q6owiuR.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LgXL2HH1.js";import"./index-B0s6Peb0.js";import"./index-MT7WmrMi.js";import"./index-Ed39mVia.js";import"./index-aKRnNsEw.js";import"./index-7jojP3g7.js";import"./index-jmm5gWkb.js";import"./index-0tTWSQQD.js";import"./index-maDx5jV0.js";const Z={title:"components/TextArea"},o=()=>t.jsx(s,{placeholder:`textarea
textarea`}),r=()=>t.jsx(s,{value:`textarea
textarea`,disabled:!0}),$=[{label:"@hoge",value:"@hoge"},{label:"@fuga",value:"@fuga"}],a=()=>{const[n,p]=i.useState(!1),O=i.useRef(null),[u,d]=i.useState("");return t.jsx(s,{ref:O,value:u,completionView:n?t.jsx(R,{children:$.map(e=>t.jsx(_,{children:e.label},e.value))}):null,onChange:e=>{const v=e.nativeEvent.text,{selectionStart:I}=e.target;v.slice(0,I).match(/ @[\w!-~]*$/)?p(!0):p(!1),d(v)},onKeyPress:e=>{e.nativeEvent.key==="Enter"&&(e.preventDefault(),d(u+"hoge"),setTimeout(()=>{console.info(e.target.setSelectionRange(0,0))},0))}})},l=()=>t.jsx(s,{value:"press some kind of key",onKeyPress:n=>console.log(n.nativeEvent.key)}),m=()=>t.jsx(s,{value:"press command + enter",onCmdEnterPress:()=>console.log("command and enter pressed")}),c=()=>t.jsx(s,{value:"press some kind of key or command + enter",onKeyPress:n=>console.log(n.nativeEvent.key),onCmdEnterPress:()=>console.log("command and enter pressed")});var x,f,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"() => <TextArea placeholder={'textarea\\ntextarea'} />",...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,y,E;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"() => <TextArea value={'textarea\\ntextarea'} disabled />",...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var C,S,P;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [showCompletion, setShowCompletion] = useState(false);
  const ref = useRef<TextInput | null>(null);
  const [value, setValue] = useState('');
  return <TextArea ref={ref} value={value} completionView={showCompletion ? <View>
          {completionItems.map(item => <Text key={item.value}>
              {item.label}
            </Text>)}
        </View> : null} onChange={event => {
    const text = (event.nativeEvent.text as string);
    const {
      selectionStart
    } = (event.target as any);
    const lastChar = text.slice(0, selectionStart);
    if (lastChar.match(/ @[\\w!-~]*$/)) {
      setShowCompletion(true);
    } else {
      setShowCompletion(false);
    }
    setValue(text);
  }} onKeyPress={(event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
    if (event.nativeEvent.key === 'Enter') {
      event.preventDefault();
      setValue(value + 'hoge');
      setTimeout(() => {
        console.info(((event.target as unknown) as HTMLInputElement).setSelectionRange(0, 0));
      }, 0);
    }
  }} />;
}`,...(P=(S=a.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var T,k,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:'() => <TextArea value="press some kind of key" onKeyPress={event => console.log(event.nativeEvent.key)} />',...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var K,j,A;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`() => <TextArea value="press command + enter" onCmdEnterPress={() => console.log('command and enter pressed')} />`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var V,b,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`() => <TextArea value="press some kind of key or command + enter" onKeyPress={event => console.log(event.nativeEvent.key)} onCmdEnterPress={() => console.log('command and enter pressed')} />`,...(D=(b=c.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const ee=["Default","Disabled","Completion","OnKeyPress","OnCmdEnterPress","OnKeyPressAndCmdEnterPress"];export{a as Completion,o as Default,r as Disabled,m as OnCmdEnterPress,l as OnKeyPress,c as OnKeyPressAndCmdEnterPress,ee as __namedExportsOrder,Z as default};
