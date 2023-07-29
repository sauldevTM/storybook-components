import{j as _}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function o({label:l="No label",size:C="text-base",allCaps:f=!1,color:v,customColor:h}){return _.jsx("span",{className:`${C} ${f&&"uppercase"} ${v}`,style:{color:h},children:l})}try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"No label"},description:"How should the text look like?",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"text-base"},description:"How large should the label be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"text-sm"'},{value:'"text-base"'},{value:'"text-lg"'}]}},allCaps:{defaultValue:{value:"false"},description:"transform the label into uppercase",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"What color should the label be?",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},customColor:{defaultValue:null,description:"Set a Custom color",name:"customColor",required:!1,type:{name:"string"}}}}}catch{}const N={title:"UI/MyLabel",component:o,tags:["autodocs"],argTypes:{size:{control:{type:"select"}},color:{control:{type:"select"}},customColor:{control:{type:"color"}}}},e={args:{label:"Hello World",size:"text-base",allCaps:!1}},a={args:{...e.args,allCaps:!0}},r={args:{...e.args,color:"text-primary"}},s={args:{...e.args,size:"text-lg",customColor:"pink"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: "Hello World",
    size: "text-base",
    allCaps: false
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    ...Base.args,
    allCaps: true
  }
}`,...(i=(u=a.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Base.args,
    color: "text-primary"
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var y,b,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...Base.args,
    size: "text-lg",
    customColor: "pink"
  }
}`,...(x=(b=s.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const S=["Base","AllCaps","Color","CustomColor"];export{a as AllCaps,e as Base,r as Color,s as CustomColor,S as __namedExportsOrder,N as default};
//# sourceMappingURL=MyLabel.stories-449ee9a9.js.map
