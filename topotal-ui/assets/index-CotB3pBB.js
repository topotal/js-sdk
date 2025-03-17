import{U as N,_ as F,V,s as K,d as L,v as j,f as S}from"./index-CsMwEyaY.js";import{_ as E}from"./extends-CF3RwP-h.js";import{i as k,D as $}from"./index-DsB9b_Jd.js";import{r as R,R as d}from"./index-BS1Ahyye.js";import{g as G}from"./_commonjsHelpers-BosuxZz1.js";function x(o,e){(e==null||e>o.length)&&(e=o.length);for(var r=0,t=Array(e);r<e;r++)t[r]=o[r];return t}function de(o,e){if(o){if(typeof o=="string")return x(o,e);var r={}.toString.call(o).slice(8,-1);return r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set"?Array.from(o):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(o,e):void 0}}var H={_currentlyFocusedNode:null,currentlyFocusedField(){return document.activeElement!==this._currentlyFocusedNode&&(this._currentlyFocusedNode=null),this._currentlyFocusedNode},focusTextInput(o){o!==null&&(this._currentlyFocusedNode=o,document.activeElement!==o&&N.focus(o))},blurTextInput(o){o!==null&&(this._currentlyFocusedNode=null,document.activeElement===o&&N.blur(o))}},U=()=>{H.blurTextInput(H.currentlyFocusedField())},Y=["onScroll","onTouchMove","onWheel","scrollEnabled","scrollEventThrottle","showsHorizontalScrollIndicator","showsVerticalScrollIndicator","style"];function W(o){return{nativeEvent:{contentOffset:{get x(){return o.target.scrollLeft},get y(){return o.target.scrollTop}},contentSize:{get height(){return o.target.scrollHeight},get width(){return o.target.scrollWidth}},layoutMeasurement:{get height(){return o.target.offsetHeight},get width(){return o.target.offsetWidth}}},timeStamp:Date.now()}}function P(o,e){var r=Date.now()-o;return e>0&&r>=e}var Z=R.forwardRef((o,e)=>{var r=o.onScroll,t=o.onTouchMove,l=o.onWheel,n=o.scrollEnabled,i=n===void 0?!0:n,a=o.scrollEventThrottle,C=a===void 0?0:a,M=o.showsHorizontalScrollIndicator,g=o.showsVerticalScrollIndicator,v=o.style,_=F(o,Y),h=R.useRef({isScrolling:!1,scrollLastTick:0}),f=R.useRef(null),y=R.useRef(null);function m(s){return B=>{i&&s&&s(B)}}function T(s){s.stopPropagation(),s.target===y.current&&(s.persist(),f.current!=null&&clearTimeout(f.current),f.current=setTimeout(()=>{D(s)},100),h.current.isScrolling?P(h.current.scrollLastTick,C)&&u(s):b(s))}function b(s){h.current.isScrolling=!0,u(s)}function u(s){h.current.scrollLastTick=Date.now(),r&&r(W(s))}function D(s){h.current.isScrolling=!1,r&&r(W(s))}var w=M===!1||g===!1;return R.createElement(V,E({},_,{onScroll:T,onTouchMove:m(t),onWheel:m(l),ref:L(y,e),style:[v,!i&&z.scrollDisabled,w&&z.hideScrollbar]}))}),z=K.create({scrollDisabled:{overflowX:"hidden",overflowY:"hidden",touchAction:"none"},hideScrollbar:{scrollbarWidth:"none"}});function I(o){return function(){return o}}var p=function(){};p.thatReturns=I;p.thatReturnsFalse=I(!1);p.thatReturnsTrue=I(!0);p.thatReturnsNull=I(null);p.thatReturnsThis=function(){return this};p.thatReturnsArgument=function(o){return o};var q=p,X=q,J=X,Q=J;const ee=G(Q);var oe=["contentContainerStyle","horizontal","onContentSizeChange","refreshControl","stickyHeaderIndices","pagingEnabled","forwardedRef","keyboardDismissMode","onScroll","centerContent"],A={},re=16;class te extends d.Component{constructor(){super(...arguments),this._scrollNodeRef=null,this._innerViewRef=null,this.isTouching=!1,this.lastMomentumScrollBeginTime=0,this.lastMomentumScrollEndTime=0,this.observedScrollSinceBecomingResponder=!1,this.becameResponderWhileAnimating=!1,this.scrollResponderHandleScrollShouldSetResponder=()=>this.isTouching,this.scrollResponderHandleStartShouldSetResponderCapture=e=>this.scrollResponderIsAnimating(),this.scrollResponderHandleTerminationRequest=()=>!this.observedScrollSinceBecomingResponder,this.scrollResponderHandleTouchEnd=e=>{var r=e.nativeEvent;this.isTouching=r.touches.length!==0,this.props.onTouchEnd&&this.props.onTouchEnd(e)},this.scrollResponderHandleResponderRelease=e=>{this.props.onResponderRelease&&this.props.onResponderRelease(e);var r=H.currentlyFocusedField();!this.props.keyboardShouldPersistTaps&&r!=null&&e.target!==r&&!this.observedScrollSinceBecomingResponder&&!this.becameResponderWhileAnimating&&(this.props.onScrollResponderKeyboardDismissed&&this.props.onScrollResponderKeyboardDismissed(e),H.blurTextInput(r))},this.scrollResponderHandleScroll=e=>{this.observedScrollSinceBecomingResponder=!0,this.props.onScroll&&this.props.onScroll(e)},this.scrollResponderHandleResponderGrant=e=>{this.observedScrollSinceBecomingResponder=!1,this.props.onResponderGrant&&this.props.onResponderGrant(e),this.becameResponderWhileAnimating=this.scrollResponderIsAnimating()},this.scrollResponderHandleScrollBeginDrag=e=>{this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e)},this.scrollResponderHandleScrollEndDrag=e=>{this.props.onScrollEndDrag&&this.props.onScrollEndDrag(e)},this.scrollResponderHandleMomentumScrollBegin=e=>{this.lastMomentumScrollBeginTime=Date.now(),this.props.onMomentumScrollBegin&&this.props.onMomentumScrollBegin(e)},this.scrollResponderHandleMomentumScrollEnd=e=>{this.lastMomentumScrollEndTime=Date.now(),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e)},this.scrollResponderHandleTouchStart=e=>{this.isTouching=!0,this.props.onTouchStart&&this.props.onTouchStart(e)},this.scrollResponderHandleTouchMove=e=>{this.props.onTouchMove&&this.props.onTouchMove(e)},this.scrollResponderIsAnimating=()=>{var e=Date.now(),r=e-this.lastMomentumScrollEndTime,t=r<re||this.lastMomentumScrollEndTime<this.lastMomentumScrollBeginTime;return t},this.scrollResponderScrollTo=(e,r,t)=>{if(typeof e=="number")console.warn("`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.");else{var l=e||A;e=l.x,r=l.y,t=l.animated}var n=this.getScrollableNode(),i=e||0,a=r||0;n!=null&&(typeof n.scroll=="function"?n.scroll({top:a,left:i,behavior:t?"smooth":"auto"}):(n.scrollLeft=i,n.scrollTop=a))},this.scrollResponderZoomTo=(e,r)=>{k("zoomToRect is not implemented")},this.scrollResponderScrollNativeHandleToKeyboard=(e,r,t)=>{this.additionalScrollOffset=r||0,this.preventNegativeScrollOffset=!!t,N.measureLayout(e,this.getInnerViewNode(),this.scrollResponderTextInputFocusError,this.scrollResponderInputMeasureAndScrollToKeyboard)},this.scrollResponderInputMeasureAndScrollToKeyboard=(e,r,t,l)=>{var n=$.get("window").height;this.keyboardWillOpenTo&&(n=this.keyboardWillOpenTo.endCoordinates.screenY);var i=r-n+l+this.additionalScrollOffset;this.preventNegativeScrollOffset&&(i=Math.max(0,i)),this.scrollResponderScrollTo({x:0,y:i,animated:!0}),this.additionalOffset=0,this.preventNegativeScrollOffset=!1},this.scrollResponderKeyboardWillShow=e=>{this.keyboardWillOpenTo=e,this.props.onKeyboardWillShow&&this.props.onKeyboardWillShow(e)},this.scrollResponderKeyboardWillHide=e=>{this.keyboardWillOpenTo=null,this.props.onKeyboardWillHide&&this.props.onKeyboardWillHide(e)},this.scrollResponderKeyboardDidShow=e=>{e&&(this.keyboardWillOpenTo=e),this.props.onKeyboardDidShow&&this.props.onKeyboardDidShow(e)},this.scrollResponderKeyboardDidHide=e=>{this.keyboardWillOpenTo=null,this.props.onKeyboardDidHide&&this.props.onKeyboardDidHide(e)},this.flashScrollIndicators=()=>{this.scrollResponderFlashScrollIndicators()},this.getScrollResponder=()=>this,this.getScrollableNode=()=>this._scrollNodeRef,this.getInnerViewRef=()=>this._innerViewRef,this.getInnerViewNode=()=>this._innerViewRef,this.getNativeScrollRef=()=>this._scrollNodeRef,this.scrollTo=(e,r,t)=>{if(typeof e=="number")console.warn("`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.");else{var l=e||A;r=l.x,e=l.y,t=l.animated}this.scrollResponderScrollTo({x:r||0,y:e||0,animated:t!==!1})},this.scrollToEnd=e=>{var r=(e&&e.animated)!==!1,t=this.props.horizontal,l=this.getScrollableNode(),n=t?l.scrollWidth:0,i=t?0:l.scrollHeight;this.scrollResponderScrollTo({x:n,y:i,animated:r})},this._handleContentOnLayout=e=>{var r=e.nativeEvent.layout,t=r.width,l=r.height;this.props.onContentSizeChange(t,l)},this._handleScroll=e=>{this.props.keyboardDismissMode==="on-drag"&&U(),this.scrollResponderHandleScroll(e)},this._setInnerViewRef=e=>{this._innerViewRef=e},this._setScrollNodeRef=e=>{this._scrollNodeRef=e,e!=null&&(e.getScrollResponder=this.getScrollResponder,e.getInnerViewNode=this.getInnerViewNode,e.getInnerViewRef=this.getInnerViewRef,e.getNativeScrollRef=this.getNativeScrollRef,e.getScrollableNode=this.getScrollableNode,e.scrollTo=this.scrollTo,e.scrollToEnd=this.scrollToEnd,e.flashScrollIndicators=this.flashScrollIndicators,e.scrollResponderZoomTo=this.scrollResponderZoomTo,e.scrollResponderScrollNativeHandleToKeyboard=this.scrollResponderScrollNativeHandleToKeyboard);var r=j(this.props.forwardedRef);r(e)}}scrollResponderHandleStartShouldSetResponder(){return!1}scrollResponderHandleResponderReject(){ee(!1,"ScrollView doesn't take rejection well - scrolls anyway")}scrollResponderFlashScrollIndicators(){}scrollResponderTextInputFocusError(e){console.error("Error measuring text field: ",e)}render(){var e=this.props,r=e.contentContainerStyle,t=e.horizontal,l=e.onContentSizeChange,n=e.refreshControl,i=e.stickyHeaderIndices,a=e.pagingEnabled;e.forwardedRef,e.keyboardDismissMode,e.onScroll;var C=e.centerContent,M=F(e,oe),g={};l&&(g={onLayout:this._handleContentOnLayout});var v=!t&&Array.isArray(i),_=v||a?d.Children.map(this.props.children,(u,D)=>{var w=v&&i.indexOf(D)>-1;return u!=null&&(w||a)?d.createElement(V,{style:[w&&c.stickyHeader,a&&c.pagingEnabledChild]},u):u}):this.props.children,h=d.createElement(V,E({},g,{children:_,collapsable:!1,ref:this._setInnerViewRef,style:[t&&c.contentContainerHorizontal,C&&c.contentContainerCenterContent,r]})),f=t?c.baseHorizontal:c.baseVertical,y=t?c.pagingEnabledHorizontal:c.pagingEnabledVertical,m=S(S({},M),{},{style:[f,a&&y,this.props.style],onTouchStart:this.scrollResponderHandleTouchStart,onTouchMove:this.scrollResponderHandleTouchMove,onTouchEnd:this.scrollResponderHandleTouchEnd,onScrollBeginDrag:this.scrollResponderHandleScrollBeginDrag,onScrollEndDrag:this.scrollResponderHandleScrollEndDrag,onMomentumScrollBegin:this.scrollResponderHandleMomentumScrollBegin,onMomentumScrollEnd:this.scrollResponderHandleMomentumScrollEnd,onStartShouldSetResponder:this.scrollResponderHandleStartShouldSetResponder,onStartShouldSetResponderCapture:this.scrollResponderHandleStartShouldSetResponderCapture,onScrollShouldSetResponder:this.scrollResponderHandleScrollShouldSetResponder,onScroll:this._handleScroll,onResponderGrant:this.scrollResponderHandleResponderGrant,onResponderTerminationRequest:this.scrollResponderHandleTerminationRequest,onResponderTerminate:this.scrollResponderHandleTerminate,onResponderRelease:this.scrollResponderHandleResponderRelease,onResponderReject:this.scrollResponderHandleResponderReject}),T=Z;k(T!==void 0,"ScrollViewClass must not be undefined");var b=d.createElement(T,E({},m,{ref:this._setScrollNodeRef}),h);return n?d.cloneElement(n,{style:m.style},b):b}}var O={flexGrow:1,flexShrink:1,transform:"translateZ(0)",WebkitOverflowScrolling:"touch"},c=K.create({baseVertical:S(S({},O),{},{flexDirection:"column",overflowX:"hidden",overflowY:"auto"}),baseHorizontal:S(S({},O),{},{flexDirection:"row",overflowX:"auto",overflowY:"hidden"}),contentContainerHorizontal:{flexDirection:"row"},contentContainerCenterContent:{justifyContent:"center",flexGrow:1},stickyHeader:{position:"sticky",top:0,zIndex:10},pagingEnabledHorizontal:{scrollSnapType:"x mandatory"},pagingEnabledVertical:{scrollSnapType:"y mandatory"},pagingEnabledChild:{scrollSnapAlign:"start"}}),le=d.forwardRef((o,e)=>d.createElement(te,E({},o,{forwardedRef:e})));le.displayName="ScrollView";export{le as F,H as T,de as _,x as a};
