import{j as t,V as R}from"./index-CWlY1mBF.js";import{r as i}from"./index-CBqU2yxZ.js";import{f as n}from"./index-Csl2fWRy.js";import{T as _}from"./index-Ithvx5T6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BScxPdS3.js";import"./index-BNZ4CFqE.js";import"./extends-CCbyfPlC.js";import"./index-hJCXZwW-.js";import"./index-CWv6xqnD.js";import"./index-C-DQKNxf.js";import"./index-D6zhU4Mp.js";import"./index-BtM5VmRH.js";import"./index-BK3wfexn.js";import"./index-C48Letuc.js";const ee={title:"components/TextArea"},o=()=>t.jsx(n,{placeholder:`textarea
textarea`}),r=()=>t.jsx(n,{value:`textarea
textarea`,disabled:!0}),$=[{label:"@hoge",value:"@hoge"},{label:"@fuga",value:"@fuga"}],a=()=>{const[s,p]=i.useState(!1),O=i.useRef(null),[u,d]=i.useState("");return t.jsx(n,{ref:O,value:u,completionView:s?t.jsx(R,{children:$.map(e=>t.jsx(_,{children:e.label},e.value))}):null,onChange:e=>{const v=e.nativeEvent.text,{selectionStart:I}=e.target;v.slice(0,I).match(/ @[\w!-~]*$/)?p(!0):p(!1),d(v)},onKeyPress:e=>{e.nativeEvent.key==="Enter"&&(e.preventDefault(),d(u+"hoge"),setTimeout(()=>{console.info(e.target.setSelectionRange(0,0))},0))}})},l=()=>t.jsx(n,{value:"press some kind of key",onKeyPress:s=>console.log(s.nativeEvent.key)}),m=()=>t.jsx(n,{value:"press command + enter",onCmdEnterPress:s=>{console.info(s)}}),c=()=>t.jsx(n,{value:"press some kind of key or command + enter",onKeyPress:s=>console.log(s.nativeEvent.key),onCmdEnterPress:()=>console.log("command and enter pressed")});var x,f,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:"() => <TextArea placeholder={'textarea\\ntextarea'} />",...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var E,h,y;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:"() => <TextArea value={'textarea\\ntextarea'} disabled />",...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var C,P,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
}`,...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var T,k,w;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:'() => <TextArea value="press some kind of key" onKeyPress={event => console.log(event.nativeEvent.key)} />',...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,K,j;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => <TextArea value="press command + enter" onCmdEnterPress={(event: TextAreaCmdEnterPressEvent) => {
  console.info(event);
}} />`,...(j=(K=m.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var V,b,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`() => <TextArea value="press some kind of key or command + enter" onKeyPress={event => console.log(event.nativeEvent.key)} onCmdEnterPress={() => console.log('command and enter pressed')} />`,...(D=(b=c.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const te=["Default","Disabled","Completion","OnKeyPress","OnCmdEnterPress","OnKeyPressAndCmdEnterPress"];export{a as Completion,o as Default,r as Disabled,m as OnCmdEnterPress,l as OnKeyPress,c as OnKeyPressAndCmdEnterPress,te as __namedExportsOrder,ee as default};
