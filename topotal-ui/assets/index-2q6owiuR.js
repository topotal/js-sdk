import{d as Q,a as U,c as V,f as X,k as Y,m as Z,t as ee,s as oe,_ as te,T as x,u as ne,b as re,e as ae,g as le,h as se,i as ie,l as de,n as ue,o as b,p as Se}from"./index-FBWzmZge.js";import{r as a}from"./index-4g5l5LRQ.js";var ce=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],Re=Object.assign({},Q,U,V,X,Y,Z,ee,oe,{href:!0,lang:!0,pointerEvents:!0}),pe=e=>Se(e,Re),C=a.forwardRef((e,g)=>{var l=e.hrefAttrs,n=e.numberOfLines,s=e.onClick,w=e.onLayout,r=e.onPress,k=e.onMoveShouldSetResponder,y=e.onMoveShouldSetResponderCapture,P=e.onResponderEnd,L=e.onResponderGrant,M=e.onResponderMove,T=e.onResponderReject,A=e.onResponderRelease,E=e.onResponderStart,O=e.onResponderTerminate,W=e.onResponderTerminationRequest,_=e.onScrollShouldSetResponder,j=e.onScrollShouldSetResponderCapture,D=e.onSelectionChangeShouldSetResponder,$=e.onSelectionChangeShouldSetResponderCapture,q=e.onStartShouldSetResponder,G=e.onStartShouldSetResponderCapture,R=e.selectable,H=te(e,ce),i=a.useContext(x),S=a.useRef(null),z=ne(),B=z.direction;re(S,w),ae(S,{onMoveShouldSetResponder:k,onMoveShouldSetResponderCapture:y,onResponderEnd:P,onResponderGrant:L,onResponderMove:M,onResponderReject:T,onResponderRelease:A,onResponderStart:E,onResponderTerminate:O,onResponderTerminationRequest:W,onScrollShouldSetResponder:_,onScrollShouldSetResponderCapture:j,onSelectionChangeShouldSetResponder:D,onSelectionChangeShouldSetResponderCapture:$,onStartShouldSetResponder:q,onStartShouldSetResponderCapture:G});var N=a.useCallback(c=>{s!=null?s(c):r!=null&&(c.stopPropagation(),r(c))},[s,r]),p=i?"span":"div",F=e.lang!=null?le(e.lang):null,d=e.dir||F,I=d||B,o=pe(H);if(o.dir=d,i||(o.dir=d??"auto"),(s||r)&&(o.onClick=N),o.style=[n!=null&&n>1&&{WebkitLineClamp:n},i===!0?t.textHasAncestor$raw:t.text$raw,n===1&&t.textOneLine,n!=null&&n>1&&t.textMultiLine,e.style,R===!0&&t.selectable,R===!1&&t.notSelectable,r&&t.pressable],e.href!=null&&(p="a",l!=null)){var h=l.download,f=l.rel,u=l.target;h!=null&&(o.download=h),f!=null&&(o.rel=f),typeof u=="string"&&(o.target=u.charAt(0)!=="_"?"_"+u:u)}var J=se(o),K=ie(S,J,g);o.ref=K;var v=de(p,o,{writingDirection:I});return i?v:a.createElement(x.Provider,{value:!0},v)});C.displayName="Text";var m={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},t=ue.create({text$raw:m,textHasAncestor$raw:b(b({},m),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});const ve=C;export{ve as T};
