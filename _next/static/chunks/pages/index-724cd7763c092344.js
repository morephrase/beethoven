(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(52754)}])},30663:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var n=i(26042),r=i(69396),o=i(85893),s=i(25886),a=i(48641),l=i(47741),d=i(29352),c=i(99534);function h(e){var t=e.children,i=(0,c.Z)(e,["children"]);return(0,o.jsx)(a.xv,(0,r.Z)((0,n.Z)({px:"1",color:"gray.200"},i),{children:t}))}var x=i(73973),u=i(28567),p=i(29907);var m=function(e){var t=e.data,i=e.textProps,c=e.onlySparkles,m=e.placement,g=e.aprLabel,C=e.sparklesSize,A=e.poolId,f=e.apr,j=s.xo,b=A&&Object.keys(p.$.warnings.poolList).includes(A),v=f||(0,u.j)(t.apr),w=t.items.find((function(e){return"Voting APR*"===e.title}));return b?(0,o.jsx)(a.Ug,{align:"center",children:(0,o.jsx)(a.xv,(0,r.Z)((0,n.Z)({},i),{children:"0.00%"}))}):(0,o.jsxs)(s.J2,{trigger:"hover",placement:m,children:[(0,o.jsxs)(a.Ug,{align:"center",children:[!c&&(0,o.jsxs)(a.xv,(0,r.Z)((0,n.Z)({fontSize:"1rem",fontWeight:"semibold",mr:"1"},i),{children:[v,g?" APR":""]})),(0,o.jsx)(j,{children:(0,o.jsx)(l.zx,{minWidth:"0",height:"auto",variant:"unstyled",_active:{outline:"none"},_focus:{outline:"none"},children:t.hasRewardApr?(0,o.jsx)(d.Z,{width:"sm"===C?18:24,height:"sm"===C?19:25}):(0,o.jsx)(a.xu,{color:"gray.200",children:(0,o.jsx)(x.Z,{size:"sm"===C?18:24})})})})]}),(0,o.jsxs)(s.yk,{w:"fit-content",bgColor:"beets.base.800",shadow:"2xl",children:[(0,o.jsx)(s.Yt,{bgColor:"whiteAlpha.100",children:(0,o.jsxs)(a.xv,{textAlign:"left",children:["Total APR",(0,o.jsx)("br",{}),(0,o.jsx)("span",{style:{fontSize:"1.5rem"},children:(0,u.j)(t.apr)})]})}),(0,o.jsxs)(a.xu,{p:"2",fontSize:"sm",bgColor:"whiteAlpha.200",children:[t.items.map((function(e,t){var i;return(0,o.jsxs)(a.xu,{children:[(0,o.jsxs)(a.kC,{children:[(0,u.j)(e.apr)," ",(0,o.jsx)(h,{children:e.title})]}),null===(i=e.subItems)||void 0===i?void 0:i.map((function(t,i){var n,r=1===(null===(n=e.subItems)||void 0===n?void 0:n.length),s=0===i;return(0,o.jsxs)(a.kC,{align:"center",children:[(0,o.jsx)(a.xu,{w:"1px",m:"0.25rem",h:r?"0.8rem":s?"1rem":"2rem",mt:r?"-0.5rem":s?"-0.3rem":"-1.7rem",bgColor:"gray.100"}),(0,o.jsx)(a.xu,{h:"1px",w:"0.75rem",mr:"0.25rem",ml:"-0.25rem",bgColor:"gray.100"}),(0,o.jsxs)(a.kC,{children:[(0,u.j)(t.apr)," ",(0,o.jsx)(h,{children:t.title})]})]},i)}))]},t)})),w&&(0,o.jsx)(a.xv,{color:"gray.200",fontSize:"sm",maxW:"300px",pt:"2",textAlign:"left",children:"* To receive Voting APR you must vote for incentivized pools in the bi-weekly gauge vote. APR is dependent on your vote distribution."})]})]})]})}},69819:function(e,t,i){"use strict";var n=i(26042),r=i(69396),o=i(99534),s=i(85893),a=i(25886),l=i(48641),d=i(3812),c=i(51797),h=i(44111),x=i.n(h),u=i(86742),p=i(92077),m=i.n(p);t.Z=function(e){var t=function(e){return(i-C+(-2.5*P+C/P))/(f-1)*e},i=e.width,p=e.tokenData,g=e.imageSize,C=void 0===g?32:g,A=e.maxAssetsPerLine,f=void 0===A?5:A,j=e.renderPopover,b=void 0===j||j,v=(0,o.Z)(e,["width","tokenData","imageSize","maxAssetsPerLine","renderPopover"]),w=a.xo,y=(0,c.yA)().getToken,k=null===p||void 0===p?void 0:p.map((function(e){return e.address})),B=(null===k||void 0===k?void 0:k.length)||0,Z=Math.min(B,f),D=null===p||void 0===p?void 0:p.map((function(e){return(0,n.Z)({},e)})),P=Math.min(B,f),E=(0,s.jsx)(l.kC,(0,r.Z)((0,n.Z)({},v),{position:"relative",height:"".concat(C,"px"),width:"".concat(t(P-1)+C+1,"px"),children:k&&k.slice(0,f).reverse().map((function(e,i){var n=y(e);return(0,s.jsx)(d.qE,{boxSize:"".concat(C,"px"),src:(null===n||void 0===n?void 0:n.logoURI)||void 0,left:"".concat(t(Z-i-1),"px"),bg:"#181729",position:"absolute",icon:(null===n||void 0===n?void 0:n.logoURI)?(0,s.jsx)(l.Cd,{size:"".concat(C,"px"),backgroundColor:"whiteAlpha.200"}):(0,s.jsx)(x(),{diameter:C,seed:(0,h.jsNumberForAddress)(e)})},i)}))}));return b?(0,s.jsxs)(a.J2,{trigger:"hover",children:[(0,s.jsx)(w,{children:(0,s.jsx)("button",{children:E})}),(0,s.jsx)(a.yk,{w:"fit-content",bgColor:"beets.base.800",shadow:"2xl",p:"1",children:null===D||void 0===D?void 0:D.map((function(e,t){var i;return(0,s.jsxs)(l.kC,{alignItems:"center",p:"1",children:[(0,s.jsx)(u.Z,{address:e.address,size:"xs"}),(0,s.jsx)(l.xv,{ml:"2",children:null===(i=y(e.address))||void 0===i?void 0:i.symbol}),e.weight?(0,s.jsx)(l.xv,{ml:"2",children:m()(e.weight).format("%")}):null]},t)}))})]}):E}},28567:function(e,t,i){"use strict";i.d(t,{j:function(){return s}});var n=i(92077),r=i.n(n),o=function(e){return parseFloat(e)<1e-7?"0.00%":r()(e).format("0.00%")};function s(e){return"GqlPoolAprRange"===e.__typename?"".concat(o(e.min)," - ").concat(o(e.max)):o(e.total)}},52754:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return ie},default:function(){return ne}});var n=i(85893),r=i(48641),o=i(83904),s=i(47741),a=i(76945),l=i(57438);function d(){var e=(0,o.Fg)(),t=(0,l.H)().chainId;return(0,n.jsxs)(r.kC,{height:{base:"auto",lg:"xl"},mx:{base:"-".concat(e.space[4]),xl:"-".concat(e.space[8])},overflow:"hidden",minHeight:"400px",backgroundImage:{base:"10"===t?"url('/images/hero-image-optimism-mobile.png')":"url('/images/hero-image-fantom-mobile.png')",md:"10"===t?"url('/images/hero-image-optimism.jpg')":"url('/images/hero-image-fantom.jpg')"},backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",boxShadow:"0px 0px 24px 0px rgba(0,0,0,0.25);",children:[(0,n.jsx)(r.kC,{flex:"1",mt:"20",pl:{base:"4",xl:"8"},mb:"12",alignItems:"center",children:(0,n.jsxs)(r.kC,{flexDirection:"column",width:{base:"auto",lg:"580px"},children:[(0,n.jsxs)(r.xv,{as:"h1",textStyle:{base:"h2",lg:"h1"},textTransform:"uppercase",color:"white",fontWeight:"semibold",children:["Welcome to",(0,n.jsx)("br",{}),"Beethoven X"]}),(0,n.jsx)(r.xv,{color:"white",as:"h5",textStyle:{base:void 0,lg:"h5"},fontSize:{base:"lg",lg:void 0},my:{base:"6",lg:"10"},mr:"8",children:"The future of DeFi re-imagineered. Your next generation Decentralised Exchange."}),(0,n.jsxs)(r.Ug,{spacing:"4",mb:{base:"6",lg:"10"},children:[(0,n.jsx)(a.p,{href:"/pools",chakraProps:{_hover:{textDecoration:"none"}},children:(0,n.jsx)(s.zx,{variant:"primary",width:{base:"130px",lg:"160px"},children:"Invest"})}),(0,n.jsx)(a.p,{href:"/swap",chakraProps:{_hover:{textDecoration:"none"}},children:(0,n.jsx)(s.zx,{width:{base:"130px",lg:"160px"},variant:"secondary",children:"Swap"})})]})]})}),(0,n.jsx)(r.xu,{flex:"1",display:{base:"none",md:"block"}})]})}var c=i(26042),h=i(69396),x=i(828),u=i(49511),p=i(23887),m=i(99534),g=i(30663),C=i(69819),A=i(92077),f=i.n(A);function j(e){var t=e.pool,i=(0,m.Z)(e,["pool"]),o=t.dynamicData.apr.apr,s="GqlPoolAprRange"===o.__typename?o.max:o.total,d=parseFloat(s)/365,x=(0,l.H)().investDisabled,u=t&&!Object.keys(x).includes(t.id);return(0,n.jsx)(r.fG,(0,h.Z)((0,c.Z)({as:"article",flex:"1"},i),{children:(0,n.jsxs)(r.kC,{bgColor:"whiteAlpha.100",height:"216px",borderRadius:"md",p:"4",flexDirection:"column",children:[(0,n.jsx)(r.xu,{fontSize:"lg",pb:"6",flex:"1",children:(0,n.jsx)(a.P,{href:"pool/".concat(t.id),children:(0,n.jsx)(r.xv,{noOfLines:2,children:t.name})})}),(0,n.jsx)(C.Z,{tokenData:t.displayTokens.map((function(e){return(0,c.Z)({address:e.address},e.weight&&{weight:e.weight})})),width:140,imageSize:32,renderPopover:!1}),(0,n.jsxs)(r.xu,{flex:"1",pt:"6",children:[(0,n.jsx)(g.Z,{textProps:{fontSize:"2xl",fontWeight:"normal",mr:"0",lineHeight:"26px"},data:t.dynamicData.apr,placement:"left",poolId:t.id}),(0,n.jsxs)(r.xv,{color:"gray.200",children:[u?f()(d).format("0.00[0]%"):"0.00%"," Daily"]})]})]})}))}function b(e){var t=e.children,i=(0,m.Z)(e,["children"]);return(0,n.jsx)(r.xu,(0,h.Z)((0,c.Z)({fontSize:{base:"3xl",xl:"4xl"},fontWeight:"bold",color:"white"},i),{children:t}))}function v(e){var t=e.children,i=(0,m.Z)(e,["children"]);return(0,n.jsx)(r.xu,(0,h.Z)((0,c.Z)({fontSize:{base:"xl",xl:"2xl"},fontWeight:"semibold",color:"white"},i),{children:t}))}var w=i(98352),y=i(71911);function k(e){var t=e.items,i=e.loading,o=e.cardHeight,s=void 0===o?"216px":o,a=(0,m.Z)(e,["items","loading","cardHeight"]);return(0,n.jsx)(r.xu,(0,h.Z)((0,c.Z)({sx:{".swiper-pagination":{bottom:"0px",display:"flex",alignItems:"flex-end",justifyContent:"center"},".swiper":{paddingBottom:"6"}}},a),{children:(0,n.jsx)(w.tq,{slidesPerView:2,spaceBetween:16,breakpoints:{720:{slidesPerView:3},992:{slidesPerView:2},1124:{slidesPerView:3}},pagination:{clickable:!0},modules:[y.tl],children:i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w.o5,{children:(0,n.jsx)(u.Od,{height:s})},"1"),(0,n.jsx)(w.o5,{children:(0,n.jsx)(u.Od,{height:s})},"2"),(0,n.jsx)(w.o5,{children:(0,n.jsx)(u.Od,{height:s})},"3")]}):t.map((function(e,t){return(0,n.jsx)(w.o5,{children:e},t)}))})}))}var B=i(27188),Z=i(97382),D=i(48708),P=i(67294),E=i(57290);function S(e){var t=e.pool,i=e.balance,o=e.balanceUSD,s=e.totalApr,d=(0,m.Z)(e,["pool","balance","balanceUSD","totalApr"]),x=s/365,u=(0,l.H)().investDisabled,p=t&&!Object.keys(u).includes(t.id);return(0,n.jsx)(r.fG,(0,h.Z)((0,c.Z)({as:"article",flex:"1"},d),{children:(0,n.jsxs)(r.kC,{bgColor:"whiteAlpha.100",borderRadius:"md",p:"4",flexDirection:"column",height:"327px",children:[(0,n.jsx)(r.xu,{fontSize:"lg",pb:"6",flex:"1",children:(0,n.jsx)(a.P,{href:"pool/".concat(t.id),children:(0,n.jsx)(r.xv,{noOfLines:2,children:t.name})})}),(0,n.jsx)(C.Z,{tokenData:t.displayTokens.map((function(e){return(0,c.Z)({address:e.address},e.weight&&{weight:e.weight})})),width:104,imageSize:28,renderPopover:!1}),(0,n.jsx)(r.xu,{mt:"6",color:"gray.200",fontSize:"sm",children:"My balance:"}),(0,n.jsx)(r.xu,{fontSize:"3xl",lineHeight:"38px",color:"white",children:(0,D.Rj)(o)}),(0,n.jsxs)(r.xu,{color:"gray.200",children:["0"!==i?"".concat((0,E.rY)(i)," BPT"):"","\xa0"]}),(0,n.jsx)(r.iz,{mt:"4",mb:"4"}),(0,n.jsxs)(r.xu,{children:[(0,n.jsx)(g.Z,{textProps:{fontSize:"lg",fontWeight:"normal",mr:"0",lineHeight:"20px"},data:t.dynamicData.apr,placement:"left",aprLabel:!0,poolId:t.id}),(0,n.jsxs)(r.xv,{color:"gray.200",children:[p?f()(x).format("0.00[0]%"):"0.00%"," Daily"]})]})]})}))}var F=i(96486);function R(e){var t,i=(0,B.v$)(),o=(i.stakedValueUSD,i.portfolioValueUSD),a=(i.loading,i.userPoolIds),l=i.usdBalanceForPool,d=i.bptBalanceForPool,m=(0,Z.PJ)().data,g=(null===m||void 0===m?void 0:m.featuredPoolGroups)||[],C=(0,x.Z)((0,Z.h$)(),2),A=C[0],f=C[1],w=(0,F.orderBy)((null===(t=f.data)||void 0===t?void 0:t.poolGetPools)||[],(function(e){return l(e.id)}),"desc"),y=a.join();return(0,P.useEffect)((function(){A({variables:{where:{idIn:a,poolTypeNotIn:["LINEAR","LIQUIDITY_BOOTSTRAPPING","UNKNOWN"]}}})}),[y]),(0,n.jsxs)(r.xu,(0,h.Z)((0,c.Z)({minWidth:"0"},e),{children:[(w.length>0||f.loading)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b,{mb:"10",children:"My investments"}),(0,n.jsxs)(r.xu,{mb:"10",children:[(0,n.jsx)(r.kC,{mb:"4",children:(0,n.jsx)(u.Od,{isLoaded:!f.loading,children:(0,n.jsx)(v,{children:1===w.length?"".concat((0,D.Rj)(o)," invested in 1 pool"):"".concat((0,D.Rj)(o)," invested across ").concat(w.length," pools")})})}),(0,n.jsx)(k,{items:w.map((function(e){var t=e.dynamicData.apr.apr,i="GqlPoolAprRange"===t.__typename?t.max:t.total;return(0,n.jsx)(S,{pool:e,balance:d(e.id),balanceUSD:l(e.id),totalApr:parseFloat(i)},e.id)})),loading:f.loading,cardHeight:"327px"})]})]}),(0,n.jsx)(b,{mb:"10",children:"Featured pools"}),g.map((function(e){return(0,n.jsxs)(r.xu,{mb:"8",children:[(0,n.jsxs)(r.kC,{mb:"4",alignItems:"center",children:[(0,n.jsx)(p.Ee,{src:e.icon,alt:"".concat(e.id,"-icon"),width:"24px",height:"24px"}),(0,n.jsx)(v,{ml:"2",children:e.title})]}),(0,n.jsx)(k,{items:e.items.map((function(e){switch(e.__typename){case"GqlPoolMinimal":return(0,n.jsx)(j,{pool:e},e.id);case"GqlFeaturePoolGroupItemExternalLink":return(0,n.jsxs)(r.kC,{alignItems:"flex-end",justifyContent:"center",height:"216px",overflowY:"hidden",children:[(0,n.jsx)(p.Ee,{src:e.image,width:"full",position:"absolute",top:"0",left:"0",bottom:"0",right:"0",height:"216px",alt:"".concat(e.id,"-image"),objectFit:{base:"cover",sm:"contain"}}),(0,n.jsx)(s.zx,{variant:"primary",as:"a",href:e.buttonUrl,target:"_blank",size:"md",_hover:{transform:"none",bgColor:"beets.highlight"},children:e.buttonText})]},e.id)}}))})]},e.id)}))]}))}var I=i(39653),L=i(52494);function V(e){return(0,n.jsx)(L.JO,(0,h.Z)((0,c.Z)({viewBox:"0 0 32 25",width:"32px",height:"25px"},e),{children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M16.891 21.9432H14.923L14.737 21.9121H14.4426L14.2877 21.8655C14.1017 21.85 13.9002 21.8345 13.7143 21.8034C13.4973 21.7723 13.2649 21.7568 13.0479 21.7102C12.8155 21.6791 12.5985 21.6169 12.3661 21.5859C11.4363 21.3994 10.5375 21.1353 9.65424 20.8246C9.12736 20.6381 8.60048 20.4206 8.0891 20.1876C8.02712 20.1565 7.96513 20.141 7.90315 20.1099L7.2368 20.6381C8.1046 21.1664 9.00339 21.6014 9.94867 21.9743C9.45278 22.9842 8.87942 23.9319 8.21308 24.833C8.13559 24.802 8.05811 24.7864 7.96513 24.7554C7.20581 24.5068 6.46199 24.2271 5.73366 23.9164C4.85036 23.5435 3.99806 23.124 3.17676 22.6579C2.44843 22.2384 1.73559 21.8034 1.03826 21.3218C0.759322 21.1353 0.495884 20.9333 0.216949 20.7314C0.154964 20.6847 0.108475 20.6381 0.108475 20.5449C0.108475 20.3274 0.0774818 20.1254 0.0619855 19.9079V19.8768L0.0309927 19.535V19.2709L0 19.0534V18.6961C0.0309927 18.3232 0.0309927 17.9037 0.0309927 17.4997C0.0309927 17.189 0.0309927 16.8783 0.0309927 16.5831V16.552L0.0619855 16.1014V16.0703C0.0929782 15.7907 0.108475 15.511 0.139467 15.2314C0.17046 14.8585 0.216949 14.4701 0.278935 14.0972C0.34092 13.6156 0.418402 13.1495 0.51138 12.6678C0.635351 12.0619 0.774818 11.456 0.914286 10.85C1.08475 10.1975 1.2862 9.54494 1.50315 8.90794C1.78208 8.11557 2.07651 7.33873 2.43293 6.57743C2.61889 6.15794 2.82034 5.73845 3.02179 5.31896C3.47119 4.41783 3.96707 3.53224 4.50944 2.67773C4.61792 2.50682 4.74189 2.33592 4.85036 2.14948C4.88136 2.08733 4.92785 2.05626 4.98983 2.02518C5.65617 1.71445 6.33802 1.43479 7.01986 1.1862C7.62421 0.968689 8.24407 0.766712 8.86392 0.580272C9.60775 0.362758 10.3516 0.191855 11.1109 0.0520244C11.2039 0.0364877 11.3123 0.0209507 11.4053 0.00541402C11.4983 -0.0101227 11.5138 0.00541431 11.5603 0.0830978C11.8392 0.611345 12.1027 1.13959 12.3351 1.68338C12.3351 1.68338 12.3351 1.71445 12.3661 1.74552C12.4746 1.74552 12.5831 1.72999 12.707 1.71445C12.7845 1.71445 12.8775 1.68338 12.955 1.66784C13.0634 1.6523 13.1719 1.63677 13.2804 1.62123C13.4199 1.62123 13.5593 1.60569 13.6988 1.59016H13.8538L13.9622 1.55908H14.1172L14.2722 1.52801H14.4426L14.6286 1.49694H14.8765L15.1554 1.46586H17.139L17.3869 1.49694H17.5729L17.7433 1.52801H17.8983L18.0533 1.55908H18.1617L18.3167 1.59016C18.5027 1.62123 18.7041 1.63677 18.8901 1.66784C19.045 1.68338 19.1845 1.69891 19.3395 1.71445C19.417 1.71445 19.4944 1.72999 19.5719 1.74552C19.6649 1.74552 19.6649 1.74552 19.7114 1.68338C19.7889 1.52801 19.8508 1.37264 19.9128 1.21728C20.0988 0.844396 20.2847 0.455978 20.4707 0.0830978C20.5017 0.020951 20.5327 0.005414 20.5947 0.0209507C21.2455 0.145244 21.9119 0.285075 22.5472 0.440442C23.3685 0.657955 24.1743 0.906542 24.9801 1.20174C25.6775 1.45033 26.3593 1.74552 27.0412 2.05626C27.1031 2.08733 27.1341 2.1184 27.1651 2.16501C27.3976 2.52236 27.6145 2.8797 27.847 3.23705C28.2034 3.8119 28.5288 4.4023 28.8542 5.00823C29.2416 5.76953 29.6136 6.53082 29.939 7.32319C30.2179 8.00681 30.4814 8.69042 30.6983 9.40511C30.9772 10.2907 31.2252 11.1918 31.4111 12.1085C31.5506 12.7455 31.6591 13.3825 31.7521 14.035C31.7985 14.4079 31.845 14.7963 31.876 15.1692C31.8915 15.3712 31.907 15.5887 31.9225 15.7907V15.8218L31.9535 16.1636V16.6452L31.9845 16.6763C31.9845 16.785 31.9845 16.8783 31.9845 16.987C31.9845 17.391 31.9845 17.8105 32 18.2144V18.2455C31.9845 18.4941 31.969 18.7271 31.969 18.9757C31.969 19.0223 31.969 19.0689 31.969 19.1V19.3952L31.938 19.5816V19.6127L31.8915 20.2808V20.3119C31.876 20.4362 31.8605 20.5605 31.845 20.7003C31.845 20.7314 31.7985 20.778 31.7676 20.7935C31.5351 20.9644 31.3027 21.1353 31.0547 21.3062C30.3264 21.8189 29.5671 22.3006 28.7923 22.7356C28.2189 23.0619 27.6455 23.3571 27.0567 23.6212C26.3748 23.9319 25.693 24.2271 24.9956 24.4757C24.6237 24.6155 24.2363 24.7398 23.8644 24.8641C23.7404 24.9107 23.7249 24.8952 23.663 24.7864C23.1826 24.1184 22.7487 23.4192 22.3458 22.689C22.2373 22.5025 22.1443 22.3006 22.0358 22.1141C22.0358 22.0986 22.0203 22.0675 22.0048 22.0364C22.9501 21.6636 23.8489 21.2285 24.7322 20.7003L24.0659 20.172C23.8489 20.2653 23.632 20.3585 23.415 20.4517C22.6867 20.778 21.9274 21.0421 21.1525 21.2751C20.5792 21.446 19.9903 21.5859 19.386 21.6946C19.1535 21.7412 18.9056 21.7723 18.6731 21.8034C18.5337 21.8189 18.3787 21.85 18.2392 21.8811C18.0533 21.8966 17.8673 21.9121 17.6814 21.9277C17.6039 21.9277 17.5264 21.9432 17.4489 21.9588H17.2785L17.108 21.9898H16.86L16.891 21.9432ZM10.5065 10.3839C10.5065 10.3839 10.4446 10.3839 10.4136 10.3995C10.3206 10.3995 10.2431 10.415 10.1501 10.4305C9.54576 10.5704 9.04988 10.8811 8.64697 11.3472C8.35254 11.689 8.15109 12.0619 8.01162 12.4814C7.91864 12.7766 7.84116 13.0718 7.84116 13.3825V13.9108C7.84116 13.9108 7.84116 14.0195 7.84116 14.0817C7.91864 14.672 8.1046 15.2158 8.44552 15.6975C8.80194 16.2102 9.26683 16.5831 9.87119 16.8006C10.0416 16.8627 10.2276 16.9249 10.4136 16.9249H10.9559C11.0644 16.9249 11.1574 16.9093 11.2659 16.8783C12.0407 16.6918 12.614 16.2257 13.0324 15.5576C13.3579 15.0449 13.5283 14.4701 13.5593 13.8641C13.5903 13.3204 13.5283 12.8076 13.3269 12.3105C13.0324 11.5492 12.5366 10.9743 11.7927 10.617C11.5138 10.4771 11.2194 10.3995 10.9094 10.3995C10.8939 10.3995 10.863 10.3839 10.8475 10.3839C10.739 10.3839 10.615 10.3839 10.5065 10.3839ZM24.1898 13.8797V13.367C24.1898 13.367 24.1898 13.2737 24.1743 13.2271C24.1278 12.7921 24.0039 12.3726 23.8024 11.9842C23.539 11.456 23.1516 11.0365 22.6402 10.7413C22.2993 10.5393 21.9274 10.3995 21.509 10.3995C21.4935 10.3995 21.478 10.3839 21.4625 10.3839C21.3385 10.3839 21.23 10.3839 21.1061 10.3839C20.9976 10.3995 20.8736 10.415 20.7651 10.4305C20.1918 10.5548 19.6959 10.85 19.3085 11.3006C18.7816 11.8754 18.5182 12.5746 18.4407 13.3514C18.3942 13.8641 18.4407 14.3769 18.6266 14.8585C18.8746 15.5732 19.3085 16.1636 19.9593 16.5675C20.2847 16.7695 20.6567 16.9093 21.0441 16.9404H21.5864C21.5864 16.9404 21.6794 16.9404 21.7259 16.9404C22.2993 16.8472 22.7797 16.5831 23.1826 16.1791C23.4925 15.8684 23.7404 15.4955 23.9109 15.0915C24.0659 14.7187 24.1588 14.3302 24.1743 13.9263V13.8952L24.1898 13.8797Z",fill:"currentColor"})})}))}function z(e){return(0,n.jsx)(L.JO,(0,h.Z)((0,c.Z)({viewBox:"0 0 30 24",width:"30px",height:"24px"},e),{children:(0,n.jsx)("g",{children:(0,n.jsx)("path",{d:"M29.5336 2.82767C28.4512 3.30598 27.2845 3.62954 26.0615 3.78429C27.3126 3.03869 28.2685 1.84291 28.7183 0.436108C27.5516 1.12544 26.2443 1.63189 24.8667 1.91325C23.7562 0.731536 22.1818 0 20.4388 0C17.0932 0 14.3802 2.71512 14.3802 6.06331C14.3802 6.54162 14.4365 6.99179 14.5349 7.44197C9.50248 7.18875 5.04644 4.78312 2.05231 1.11137C1.5322 2.01172 1.23701 3.05275 1.23701 4.16413C1.23701 6.26026 2.30533 8.11723 3.93594 9.20047C2.9379 9.17233 2.01014 8.89097 1.19484 8.4408V8.51114C1.19484 11.4513 3.27526 13.8992 6.05853 14.4478C5.55248 14.5885 5.01832 14.6589 4.45604 14.6589C4.06245 14.6589 3.68292 14.6166 3.31744 14.5463C4.09057 16.9519 6.32561 18.7104 8.96832 18.7526C6.88789 20.3845 4.28736 21.3552 1.44786 21.3552C0.955869 21.3552 0.477936 21.3271 0 21.2708C2.68487 23.0012 5.86174 24 9.29163 24C20.4247 24 26.5254 14.7573 26.5254 6.75264C26.5254 6.48535 26.5254 6.23212 26.5114 5.96483C27.6921 5.12075 28.7183 4.05158 29.5336 2.82767V2.82767Z",fill:"currentColor"})})}))}function M(e){return(0,n.jsx)(L.JO,(0,h.Z)((0,c.Z)({viewBox:"0 0 30 18",width:"30px",height:"18px"},e),{children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{d:"M8.49603 17.0054C3.81668 17.0054 0.0130708 13.2119 0 8.5158C0 3.81968 3.8036 0 8.48295 0C13.1754 0 16.979 3.8066 16.9921 8.5158C16.9921 13.1988 13.1885 17.0054 8.49603 17.0054Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M26.3517 8.50113C26.3517 10.2278 26.0903 11.9022 25.4236 13.4981C25.1099 14.2437 24.7178 14.924 24.1558 15.5257C23.7506 15.9574 23.2931 16.2975 22.7311 16.4806C21.973 16.7161 21.2671 16.5853 20.6136 16.1667C19.9993 15.7742 19.5418 15.2248 19.1627 14.6231C18.5484 13.642 18.1955 12.5563 17.9602 11.4313C17.7119 10.2802 17.6334 9.11594 17.6727 7.93864C17.738 6.3035 18.0386 4.70761 18.7314 3.21636C19.0451 2.54922 19.4242 1.92133 19.9601 1.385C20.3783 0.966409 20.8489 0.63938 21.437 0.495488C22.169 0.312353 22.8487 0.469326 23.463 0.887922C24.1035 1.30652 24.561 1.89517 24.9531 2.53614C25.5151 3.47798 25.855 4.51139 26.0772 5.58404C26.2863 6.55204 26.3778 7.53312 26.3778 8.52729L26.3517 8.50113Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M26.8193 8.37282C26.8585 7.57488 26.8977 6.6592 26.9631 5.7566C27.0546 4.65779 27.1984 3.55898 27.5382 2.49941C27.6297 2.21162 27.7604 1.93692 27.8911 1.6753C27.9565 1.55757 28.048 1.43984 28.1525 1.34827C28.3225 1.1913 28.5447 1.17822 28.7015 1.34827C28.8322 1.49216 28.9629 1.66222 29.0544 1.83227C29.3159 2.34243 29.4466 2.89184 29.5642 3.44125C29.7472 4.33076 29.8518 5.24644 29.9171 6.14903C30.0086 7.40482 30.0217 8.67369 29.9694 9.92947C29.9302 10.989 29.8256 12.0486 29.6426 13.0951C29.525 13.7622 29.3812 14.4294 29.0936 15.0573C29.0152 15.2404 28.9107 15.4105 28.78 15.5543C28.5447 15.829 28.2963 15.816 28.0611 15.5543C27.8519 15.3189 27.7212 15.0311 27.6166 14.7433C27.3944 14.1285 27.2507 13.5006 27.1592 12.8596C27.0546 12.1533 26.9762 11.4469 26.9239 10.7405C26.8716 9.9818 26.8585 9.23617 26.8193 8.35974V8.37282Z",fill:"currentColor"})]})}))}var U=i(44153);function G(e){var t=e.item,i=t.image,o=t.source,s=t.text,a=t.timestamp,l=t.url,d=t.discussionUrl;return(0,n.jsxs)(r.xu,{bgColor:"whiteAlpha.100",borderRadius:"md",p:"4",children:[i&&(0,n.jsx)(p.Ee,{width:"full",src:i,borderRadius:"md"}),(0,n.jsxs)(r.kC,{mt:"4",mb:"6",alignItems:"center",children:[(0,n.jsxs)(r.xu,{color:"gray.200",flex:"1",children:[(0,U.Z)(new Date(a),{addSuffix:!0})," ",(0,n.jsxs)(r.rU,{color:"beets.highlight",href:l,target:"_blank",children:["via ",(0,F.capitalize)(o)]})]}),"twitter"===o&&(0,n.jsx)(z,{color:"#0090FF"}),"discord"===o&&(0,n.jsx)(V,{color:"#7A91E3"}),"medium"===o&&(0,n.jsx)(M,{color:"white"})]}),(0,n.jsx)(r.xu,{whiteSpace:"pre-line",children:s}),d&&(0,n.jsx)(r.xu,{mt:"2",children:(0,n.jsx)(r.rU,{href:d,target:"_blank",children:"Join the discussion"})})]})}function H(e){var t=(0,x.Z)((0,I.kt)(!1),2),i=(t[0],t[1].on,(0,Z.Nv)({fetchPolicy:"cache-only"}).data),o=(null===i||void 0===i?void 0:i.newsItems)||[];return(0,n.jsxs)(r.xu,(0,h.Z)((0,c.Z)({},e),{children:[(0,n.jsx)(b,{mb:"10",children:"What's new"}),(0,n.jsx)(v,{mb:"4",children:"Latest community updates"}),(0,n.jsx)(r.xu,{children:(0,n.jsx)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(1, 1fr)"},columnGap:{base:"0",md:"4",lg:"0"},rowGap:"4",children:o.map((function(e){return(0,n.jsx)(r.P4,{children:(0,n.jsx)(G,{item:e})},e.id)}))})})]}))}var _=i(25675),T=i.n(_),O={src:"/_next/static/media/why-us.ffdb0871.png",height:500,width:1314,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEVGRkMPEhEWFxkvLx8lHSFcnX8nGiIlIhYWGRYiIh0WDxL8HDWpAAAAC3RSTlMSbzQIRVeGUU9oqdQRcRkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAfSURBVHicY2Bh4mBiYmdlZWBk5GJkY2TnZAADZmYGAAT6AE4azwFQAAAAAElFTkSuQmCC"},W={src:"/_next/static/media/why-us-OP.52a0a9f6.png",height:500,width:1301,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAJFBMVEUcERBeFA01Oz00OD9AHx9xDBUxJSJtfHA1Hx07GSFKtI8oDhB+fYPfAAAADHRSTlNvEiw8CB1NVmiKWasnnV7oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBiQEAIAgDsWt5FNx/XxPCYfdZ4DH0RSpVpj4FDABcwWGHxAAAAABJRU5ErkJggg=="};function J(e){var t=(0,l.H)().chainId;return(0,n.jsxs)(r.xu,(0,h.Z)((0,c.Z)({},e),{children:[(0,n.jsx)(b,{mb:"8",children:"Built for the Future - Accessible, Innovative"}),(0,n.jsx)(r.xu,{mr:{base:"0",lg:"20"},children:"Designed to evolve and adapt, Beethoven X provides all the tools necessary for anyone to participate in the future of finance."}),(0,n.jsx)(r.xu,{my:"6",display:"flex",justifyContent:"center",children:(0,n.jsx)(T(),{src:"10"===t?W:O,width:"657px",height:"250px"})}),(0,n.jsxs)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",md:"repeat(3, 1fr)"},gap:"8",children:[(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:{base:"2",md:"6"},children:"For Traders"}),(0,n.jsx)(r.xu,{children:"Take advantage of optimal swap rates, minimal slippage and concentrated liquidity as the Smart Order Router seeks to find traders the most optimal price."})]}),(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:{base:"2",md:"6"},children:"For Investors"}),(0,n.jsx)(r.xu,{children:"Flip traditional finance on its head with customisable crypto index funds; eliminate the middleman and earn yield on your portfolio."})]}),(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:{base:"2",md:"6"},children:"For Protocols"}),(0,n.jsx)(r.xu,{children:"Beethoven X leverages constant innovation to bring to its users novel primitives that are tailored to meet the demands of an ever-changing marketplace."})]})]})]}))}var Y={src:"/_next/static/media/beets-token-info.a4774f48.png",height:506,width:932,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAMFBMVEVMaXEFAhwPAIEDBRYEBRhfAAAbEr1wAgIAAA4GADQECBsCRjsAV0EFAhEAXD4AfFPYF5MJAAAADnRSTlMAOQljSvYb/iyYed7tWf4gOPkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAnSURBVHicBcGHAQAgDMCg1G7n/98KYCdEBohnr6tQnr3fBErCdPABC+gAqKcSMAMAAAAASUVORK5CYII="},N={src:"/_next/static/media/beets-token-info-OP.5f265e1e.png",height:506,width:932,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAALVBMVEUJBgZMaXEcKhwHCAg9QUFfAAAKCwtxAgEABQUSBwwIDAoESTMCWD0Ae1QAWz5L9wxIAAAADXRSTlM7AAlkG/ZW/iyYed7tMFD7CwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACdJREFUeJwFwYkBACAIxLCegIDf/uOaIKbDEET2fiYqss9dQoVPG/oKJwCbitwZTAAAAABJRU5ErkJggg=="};function X(e){var t=(0,l.H)().chainId;return(0,n.jsxs)(r.xu,(0,h.Z)((0,c.Z)({},e),{children:[(0,n.jsx)(b,{mb:"8",children:"Governance redefined"}),(0,n.jsx)(r.xu,{display:"flex",justifyContent:"center",mb:"8",alignItems:"center",children:(0,n.jsx)(T(),{src:"10"===t?N:Y,width:"466px",height:"253px"})}),(0,n.jsx)(r.xu,{mb:"10",children:"Bringing power back to the people: The BEETs token grants users the ability to influence the evolution of the protocol through decentralized governance; make sure your voice is heard and have your say in decisions that shape the future of Beethoven X."}),(0,n.jsx)(s.zx,{variant:"primary",as:"a",href:"https://docs.beets.fi/beets/tokenomics",target:"_blank",children:"BEETS tokenomics"})]}))}function q(e){var t=e.title,i=e.description,o=e.url,s=e.last;return(0,n.jsx)(r.xu,{borderBottomWidth:s?0:1,borderBottomColor:"beets.base.500",mb:"6",pb:"6",children:(0,n.jsxs)(r.xu,{children:[(0,n.jsx)(r.rU,{fontSize:"lg",fontWeight:"semibold",mb:"4",href:o,target:"_blank",children:t}),(0,n.jsx)(r.xu,{children:i})]})})}function Q(e){return(0,n.jsxs)(r.xu,(0,h.Z)((0,c.Z)({},e),{children:[(0,n.jsx)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(2, 1fr)"},mb:"16",children:(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(b,{mb:"8",children:"Learning the notes"}),(0,n.jsx)(r.xu,{children:"DeFi can be confusing; whether you\u2019re a beginner or a seasoned veteran, we want to provide you with information that helps. Check out the resources below to learn more about DeFi, Beethoven X and the technology we provide."})]})}),(0,n.jsxs)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(3, 1fr)"},gap:"12",children:[(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:"8",children:"Beethoven X Basics"}),(0,n.jsx)(q,{title:"Weighted Pools",description:"From multiple assets, customized token weightings and dynamic swap fees, weighted pools are the industry standard when it comes to tailored investment strategies. Discover more about this unique type of liquidity pool and how you can get the most out of it.",url:"https://beethovenxio.medium.com/learning-the-notes-weighted-pools-3d3af2d2ebc6"}),(0,n.jsx)(q,{title:"Boosted Pools",description:"Boosted pools make it possible for idle liquidity to be deposited into revenue generating protocols adding an additional source of yield for users. Learn more about this nascent technology and how they are changing the landscape for sustainable liquidity.",url:"https://beethovenxio.medium.com/boosted-pools-the-future-of-liquidity-provision-reimagined-7f99113ab2a2"}),(0,n.jsx)(q,{title:"Gauge Voting",description:"30% of all the Beethoven X emissions are distributed to liquidity pools based on a bi-weekly gauge vote. Learn all about how to get involved, the mechanics of the gauge vote, bribes, snapshots and more.",url:"https://beethovenxio.medium.com/beethoven-x-gauge-vote-maximising-your-melody-fbeb10e5711b",last:!0})]}),(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:"8",children:"DeFi 101"}),(0,n.jsx)(q,{title:"Getting started: What is DeFi?",description:"Discover a brand new way to manage your finances. Decentralized Finance (DeFi) is an emerging industry that removes the control banks and institutions have over financial services. Permissionless and decentralized, DeFi is revolutionizing the financial world as we know it.",url:"https://blockbytes.com/2022/06/15/core-series-defi/"}),(0,n.jsx)(q,{title:"Basics: How to set up a MetaMask wallet",description:"To begin your DeFi journey, you first need a web3 wallet. From the basics of setting one up to your first transactions, learn all there is to know about navigating MetaMask in DeFi.",url:"https://blockbytes.com/2022/05/26/how-to-set-up-metamask-for-web-3/",last:!0})]}),(0,n.jsxs)(r.P4,{children:[(0,n.jsx)(v,{mb:"8",children:"Other resources"}),(0,n.jsx)(q,{title:"Blockbytes",description:"Blockbytes is a next-generation multi-media and education platform built to empower users in the wonderful world of web3. From deep dives into individual protocols, AMAs, newsletters and weekly live shows, BlockBytes has become a staple for anyone looking to learn more about DeFi.",url:"https://blockbytes.com/"}),(0,n.jsx)(q,{title:"Balancer (balancer.fi)",description:"Beethoven X is an official friendly fork built on top of Balancer. Take a deep dive into the foundations that made it all possible and learn all there is to know about the wonders of Balancer technology.",url:"https://docs.balancer.fi/"}),(0,n.jsxs)(r.xu,{flex:"1",mb:"12",children:[(0,n.jsx)(v,{mb:"8",children:"Want to dive even deeper?"}),(0,n.jsx)(s.zx,{variant:"primary",as:"a",href:"https://docs.beets.fi",target:"_blank",children:"Check out our Docs"})]})]})]})]}))}function K(){return(0,n.jsxs)(r.xu,{children:[(0,n.jsx)(d,{}),(0,n.jsxs)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(3, 1fr)"},columnGap:{base:"0",lg:"16"},rowGap:"12",mt:{base:"12",lg:"16",xl:"20"},borderBottomWidth:2,borderBottomColor:"gray.100",pb:"24",children:[(0,n.jsx)(r.P4,{colSpan:2,maxW:"100%",children:(0,n.jsx)(R,{})}),(0,n.jsx)(r.P4,{children:(0,n.jsx)(H,{})})]}),(0,n.jsxs)(r.rj,{templateColumns:{base:"repeat(1, 1fr)",lg:"repeat(3, 1fr)"},columnGap:{base:"0",lg:"16"},rowGap:"12",mt:"20",borderBottomWidth:2,borderBottomColor:"gray.100",pb:"24",children:[(0,n.jsx)(r.P4,{colSpan:2,children:(0,n.jsx)(J,{})}),(0,n.jsx)(r.P4,{children:(0,n.jsx)(X,{})})]}),(0,n.jsx)(r.xu,{mt:"20",children:(0,n.jsx)(Q,{})})]})}var $=i(9008),ee=i.n($),te=i(11163);var ie=!0,ne=function(){return function(){var e=(0,te.useRouter)().push,t=(0,P.useRef)(!1);(0,P.useEffect)((function(){if(window.location.hash&&!t.current){var i=window.location.hash;if(t.current=!0,0===i.indexOf("#/pool/")){var n=i.slice(7,74);e("/pool/".concat(n))}else 0===i.indexOf("#/pools")?e("/pools"):0===i.indexOf("#/trade")&&e("/swap")}}))}(),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ee(),{children:(0,n.jsx)("title",{children:"Beethoven X"})}),(0,n.jsx)(K,{})]})}},9008:function(e,t,i){e.exports=i(5443)}},function(e){e.O(0,[1826,4153,8352,9774,2888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=index-724cd7763c092344.js.map