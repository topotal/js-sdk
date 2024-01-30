import{j as o}from"./index-FBWzmZge.js";import{r as s}from"./index-4g5l5LRQ.js";import{d as u,H as g}from"./index-lIJI5F2f.js";import{T as d}from"./index-7jojP3g7.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-SVvfGQqz.js";import"./index-B0s6Peb0.js";import"./index-MT7WmrMi.js";import"./index-Ed39mVia.js";import"./index-aKRnNsEw.js";import"./index-2q6owiuR.js";import"./index-jmm5gWkb.js";import"./index-0tTWSQQD.js";import"./index-maDx5jV0.js";const P={title:"components/SelectTagInput"},b=t=>t,h=[{value:"poge",label:"poge",iconUrl:"https://randomuser.me/api/portraits/women/57.jpg"},{value:"noPress",label:"noPress"},{value:"piyo",label:"piyo"},{value:"puyo",label:"puyo"},{value:"puku",label:"puku"},{value:"puke",label:"puke"}],a=()=>{const[t,i]=s.useState([]),m=s.useCallback(()=>{setTimeout(()=>{i(h)},1e3)},[]);return o.jsx(u,{items:t,tagDataGenarator:b,loading:t.length===0,renderItem:(e,p,c)=>o.jsx(g,{style:{paddingHorizontal:16,height:40,alignItems:"center"},children:o.jsx(d,{style:{color:c?"black":"gray"},weight:p?"bold":"normal",children:e.label})}),pressableChecker:e=>e.value!=="noPress",maxDropdownItems:10,onChange:e=>{console.info(e)},onFocus:m})};var n,r,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const [items, setItems] = useState<TagData[]>([]);
  const handleFocus = useCallback(() => {
    setTimeout(() => {
      setItems(fetchedItems);
    }, 1000);
  }, []);
  return <SelectTagInput items={items} tagDataGenarator={tagDataGenarator} loading={items.length === 0} renderItem={(item: TagData, active: boolean, pressable: boolean) => <HStack style={{
    paddingHorizontal: 16,
    height: 40,
    alignItems: 'center'
  }}>
          <Text style={{
      color: pressable ? 'black' : 'gray'
    }} weight={active ? 'bold' : 'normal'}>
            {item.label}
          </Text>
        </HStack>} pressableChecker={(item: TagData) => item.value !== 'noPress'} maxDropdownItems={10} onChange={(value: TagData[]) => {
    console.info(value);
  }} onFocus={handleFocus} />;
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,P as default};
