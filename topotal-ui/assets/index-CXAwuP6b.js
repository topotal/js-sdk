import{_ as K,T as x,u as Q,a as U,b as V,g as X,p as Y,s as Z,c as ee,d as oe,e as te,f as b,h as ne,i as re,k as ae,l as le,m as se,n as ie,t as de,o as ue}from"./index-CWaB2qs2.js";import{r as a}from"./index-BS1Ahyye.js";var Se=["hrefAttrs","numberOfLines","onClick","onLayout","onPress","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture","selectable"],ce=Object.assign({},ne,re,ae,le,se,ie,de,ue,{href:!0,lang:!0,pointerEvents:!0}),Re=e=>Y(e,ce),pe=a.forwardRef((e,C)=>{var l=e.hrefAttrs,n=e.numberOfLines,s=e.onClick,g=e.onLayout,r=e.onPress,w=e.onMoveShouldSetResponder,k=e.onMoveShouldSetResponderCapture,y=e.onResponderEnd,P=e.onResponderGrant,L=e.onResponderMove,M=e.onResponderReject,T=e.onResponderRelease,A=e.onResponderStart,E=e.onResponderTerminate,O=e.onResponderTerminationRequest,W=e.onScrollShouldSetResponder,_=e.onScrollShouldSetResponderCapture,j=e.onSelectionChangeShouldSetResponder,D=e.onSelectionChangeShouldSetResponderCapture,$=e.onStartShouldSetResponder,q=e.onStartShouldSetResponderCapture,R=e.selectable,G=K(e,Se),i=a.useContext(x),S=a.useRef(null),H=Q(),z=H.direction;U(S,g),V(S,{onMoveShouldSetResponder:w,onMoveShouldSetResponderCapture:k,onResponderEnd:y,onResponderGrant:P,onResponderMove:L,onResponderReject:M,onResponderRelease:T,onResponderStart:A,onResponderTerminate:E,onResponderTerminationRequest:O,onScrollShouldSetResponder:W,onScrollShouldSetResponderCapture:_,onSelectionChangeShouldSetResponder:j,onSelectionChangeShouldSetResponderCapture:D,onStartShouldSetResponder:$,onStartShouldSetResponderCapture:q});var B=a.useCallback(c=>{s!=null?s(c):r!=null&&(c.stopPropagation(),r(c))},[s,r]),p=i?"span":"div",N=e.lang!=null?X(e.lang):null,d=e.dir||N,F=d||z,o=Re(G);if(o.dir=d,i||(o.dir=d??"auto"),(s||r)&&(o.onClick=B),o.style=[n!=null&&n>1&&{WebkitLineClamp:n},i===!0?t.textHasAncestor$raw:t.text$raw,n===1&&t.textOneLine,n!=null&&n>1&&t.textMultiLine,e.style,R===!0&&t.selectable,R===!1&&t.notSelectable,r&&t.pressable],e.href!=null&&(p="a",l!=null)){var h=l.download,f=l.rel,u=l.target;h!=null&&(o.download=h),f!=null&&(o.rel=f),typeof u=="string"&&(o.target=u.charAt(0)!=="_"?"_"+u:u)}var I=ee(o),J=oe(S,I,C);o.ref=J;var v=te(p,o,{writingDirection:F});return i?v:a.createElement(x.Provider,{value:!0},v)});pe.displayName="Text";var m={backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",color:"black",display:"inline",font:"14px System",listStyle:"none",margin:0,padding:0,position:"relative",textAlign:"start",textDecoration:"none",whiteSpace:"pre-wrap",wordWrap:"break-word"},t=Z.create({text$raw:m,textHasAncestor$raw:b(b({},m),{},{color:"inherit",font:"inherit",textAlign:"inherit",whiteSpace:"inherit"}),textOneLine:{maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"},textMultiLine:{display:"-webkit-box",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",WebkitBoxOrient:"vertical"},notSelectable:{userSelect:"none"},selectable:{userSelect:"text"},pressable:{cursor:"pointer"}});export{pe as T};
