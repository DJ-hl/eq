(function(){"use strict";var e={613:function(e,t,o){var s=o(7195),r=function(){var e=this,t=e._self._c;return t("div",["home"===e.showType?t("home",{on:{goTest:e.goTest}}):"question"===e.showType?t("choose",{on:{over:e.onOver}}):"intro"===e.showType?t("intro",{attrs:{number:e.number},on:{goHome:e.goHome}}):e._e()],1)},n=[],c=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("img",{attrs:{src:o(5878),alt:""}}),t("div",{staticClass:"animate__animated animate__bounceIn animate__infinite animate__slow start",on:{click:function(t){return e.$emit("goTest")}}},[t("img",{attrs:{src:o(8718),alt:""}})])])},i=[],u=o(1001),a={},x=(0,u.Z)(a,c,i,!1,null,null,null),l=x.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("Alert",{attrs:{type:"success"}},[e._v("第 "+e._s(e.current+1)+" 题，共 "+e._s(e.questions.length)+" 题")]),t("div",{staticClass:"line"},[t("p",[e._v("进度：")]),t("Progress",{attrs:{percent:e.percent,"stroke-width":20,"stroke-color":["#108ee9","#87d068"],status:"active","text-inside":""}})],1),e._l(e.questions,(function(o,s){return t("div",{key:s,staticClass:"list-tab"},[e.current===s?t("div",[t("Alert",[t("div",{staticStyle:{"line-height":"1.5"}},[e._v(" 题目 "+e._s(s+1)+" ："+e._s(o.question)+" ")])]),t("List",{staticStyle:{margin:"20px 0 40px 0"},attrs:{border:""}},e._l(o.answer,(function(o,s){return t("ListItem",{key:s,class:[e.chooseScore==o.score&&"active"]},[t("div",{staticStyle:{width:"100%"},on:{click:function(t){return e.chooseAnswer(o.score)}}},[e._v(" "+e._s(e.answerMap[s])+"："+e._s(o.text)+" ")])])})),1)],1):e._e()])})),t("Button",{attrs:{size:"large",type:"primary",long:"",disabled:-1==e.chooseScore},on:{click:e.goNext}},[e._v(e._s(-1!=e.chooseScore?"下一题":"选择答案"))])],2)},h=[];const p=[{question:"我有能力克服各种困难",answer:[{text:"是的",score:6},{text:"不一定",score:3},{text:"不是的",score:0}]},{question:"如果我能到一个新的环境，我要把生活安排的",answer:[{text:"和从前相仿",score:6},{text:"不一定",score:3},{text:"和从前不一样",score:0}]},{question:"一生中，我觉得自己能达到我所预想的目标",answer:[{text:"是的",score:6},{text:"不一定",score:3},{text:"不是的",score:0}]},{question:"不知为什么，有些人总是回避或冷淡我",answer:[{text:"不是的",score:6},{text:"不一定",score:3},{text:"是的",score:0}]},{question:"在大街上，我常常避开我不愿打招呼的人",answer:[{text:"从未如此",score:6},{text:"偶尔如此",score:3},{text:"有时如此",score:0}]},{question:"我集中精力工作时，假如有人在旁边高谈阔论",answer:[{text:"我仍能专心工作",score:6},{text:"介于A.C之间",score:3},{text:"我不能专心且感到愤怒",score:0}]},{question:"我不论到什么地方，都能清楚地辨别方向",answer:[{text:"是的",score:6},{text:"不一定",score:3},{text:"不是的",score:0}]},{question:"我热爱所学的专业和所从事的工作",answer:[{text:"是的",score:6},{text:"不一定",score:3},{text:"不是的",score:0}]},{question:"气候的变化不会影响我的情绪",answer:[{text:"是的",score:6},{text:"介于A.C之间",score:3},{text:"不是的",score:0}]},{question:"我从不因流言蜚语而生气",answer:[{text:"是的",score:5},{text:"介于A.C之间",score:2},{text:"不是的",score:0}]},{question:"我善于控制自己的面部表情",answer:[{text:"是的",score:5},{text:"不太确定",score:2},{text:"不是的",score:0}]},{question:"在就寝时，我常常",answer:[{text:"极易入睡",score:5},{text:"介于A.C之间",score:2},{text:"不易入睡",score:0}]},{question:"有人侵扰我时，我",answer:[{text:"不露声色",score:5},{text:"介于A.C之间",score:2},{text:"大声抗议，以泄己愤",score:0}]},{question:"在和人争辩或工作出现失误后，我常常感到震颤、筋疲力竭，而不能继续安心工作",answer:[{text:"不是的",score:5},{text:"介于A.C之间",score:2},{text:"是的",score:0}]},{question:"我常常被一些无所谓的小事困扰",answer:[{text:"不是的",score:5},{text:"介于A.C之间",score:2},{text:"是的",score:0}]},{question:"我宁愿住在僻静的郊区，也不愿住在嘈杂的市区",answer:[{text:"不是的",score:5},{text:"不太确定",score:2},{text:"是的",score:0}]},{question:"我被朋友、同事起过绰号挖苦过",answer:[{text:"从来没有",score:5},{text:"偶尔有过",score:2},{text:"这是常有的事",score:0}]},{question:"有一种食物使我吃后呕吐",answer:[{text:"没有",score:5},{text:"记不清",score:2},{text:"有",score:0}]},{question:"除去看见的世界外，我的心中没有另外一个世界",answer:[{text:"没有",score:5},{text:"记不清",score:2},{text:"有",score:0}]},{question:"我会想到若干年后有什么使自己极为不安的事",answer:[{text:"从来没有想过",score:5},{text:"偶尔想到过",score:2},{text:"经常想到",score:0}]},{question:"我常常觉得自己的家庭对自己不好，但是我又确切地知道他们的确对我很好",answer:[{text:"否",score:5},{text:"说不清楚",score:2},{text:"是",score:0}]},{question:"每天我一回家就立刻把门关上",answer:[{text:"否",score:5},{text:"不清楚",score:2},{text:"是",score:0}]},{question:"我坐在小房间里把门关上，但仍觉得心理不安",answer:[{text:"否",score:5},{text:"偶尔是",score:2},{text:"是",score:0}]},{question:"当一件事需要我做决定时，我常觉得很难",answer:[{text:"否",score:5},{text:"偶尔是",score:2},{text:"是",score:0}]},{question:"我常常用抛硬币、翻纸牌、抽签之类的游戏来预测吉凶",answer:[{text:"否",score:5},{text:"偶尔是",score:2},{text:"是",score:0}]},{question:"为了工作我早出晚归，早上起床我常常感到疲惫不堪",answer:[{text:"是",score:0},{text:"否",score:5}]},{question:"在某种心境下，我会因为困惑陷入空想，将工作搁置下来",answer:[{text:"是",score:0},{text:"否",score:5}]},{question:"我的神经脆弱，稍有刺激就会使我战栗",answer:[{text:"是",score:0},{text:"否",score:5}]},{question:"睡梦中，我常常被噩梦惊醒",answer:[{text:"是",score:0},{text:"否",score:5}]},{question:"工作中，我愿意挑战艰巨的任务",answer:[{text:"从不",score:1},{text:"几乎不",score:2},{text:"一半时间",score:3},{text:"大多数时间",score:4},{text:"总是",score:5}]},{question:"我常发现别人好的意愿",answer:[{text:"从不",score:1},{text:"几乎不",score:2},{text:"一半时间",score:3},{text:"大多数时间",score:4},{text:"总是",score:5}]},{question:"我能听取不同的意见，包括对自己的批评",answer:[{text:"从不",score:1},{text:"几乎不",score:2},{text:"一半时间",score:3},{text:"大多数时间",score:4},{text:"总是",score:5}]},{question:"我时常勉励自己，对未来充满希望",answer:[{text:"从不",score:1},{text:"几乎不",score:2},{text:"一半时间",score:3},{text:"大多数时间",score:4},{text:"总是",score:5}]}];var w={data(){return{questions:p,current:0,answerMap:{0:"A",1:"B",2:"C",3:"D",4:"E",5:"F"},chooseScore:-1,scoreSum:0}},computed:{percent(){return parseInt(this.current/p.length*100)}},methods:{chooseAnswer(e){this.chooseScore=e},goNext(){this.scoreSum=this.scoreSum+this.chooseScore,this.chooseScore=-1,this.current=this.current+1,this.current===p.length&&this.$emit("over",this.scoreSum)}}},d=w,v=(0,u.Z)(d,f,h,!1,null,"1e25a7a0",null),m=v.exports,q=function(){var e=this,t=e._self._c;return t("div",{staticClass:"intro"},[t("div",{staticClass:"eq-text"},[e._v("测试完成，你的 EQ 值为")]),t("i-circle",{attrs:{percent:100,"stroke-color":"#ff9900"}},[t("span",{staticClass:"circle-inner"},[t("animate-number",{staticStyle:{"font-size":"30px","text-align":"center",display:"block"},attrs:{from:"0",to:e.$attrs.number,duration:"1500",easing:"easeOutQuad","from-color":"#44CC00","to-color":"#ec4949"}})],1)]),t("Button",{staticClass:"retry",attrs:{type:"info",shape:"circle",icon:"ios-ionic"},on:{click:function(t){return e.$emit("goHome")}}},[e._v("重新测试")])],1)},g=[],_={},y=(0,u.Z)(_,q,g,!1,null,null,null),b=y.exports,C={components:{home:l,choose:m,intro:b},data(){return{showType:"home",number:0}},methods:{goTest(){this.showType="question"},onOver(e){this.showType="intro",this.number=e},goHome(){this.showType="home"}}},S=C,O=(0,u.Z)(S,r,n,!1,null,null,null),T=O.exports,k=o(4385),A=o.n(k),j=o(5042),P=o.n(j);s["default"].use(P()),s["default"].use(A()),s["default"].config.productionTip=!1,new s["default"]({render:e=>e(T)}).$mount("#app")},5878:function(e,t,o){e.exports=o.p+"img/bg.88ca97b8.png"},8718:function(e,t,o){e.exports=o.p+"img/start1.94ce96e8.png"}},t={};function o(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,r,n){if(!s){var c=1/0;for(x=0;x<e.length;x++){s=e[x][0],r=e[x][1],n=e[x][2];for(var i=!0,u=0;u<s.length;u++)(!1&n||c>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[u])}))?s.splice(u--,1):(i=!1,n<c&&(c=n));if(i){e.splice(x--,1);var a=r();void 0!==a&&(t=a)}}return t}n=n||0;for(var x=e.length;x>0&&e[x-1][2]>n;x--)e[x]=e[x-1];e[x]=[s,r,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/EQProject/"}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,c=s[0],i=s[1],u=s[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(u)var x=u(o)}for(t&&t(s);a<c.length;a++)n=c[a],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(x)},s=self["webpackChunkeqproject"]=self["webpackChunkeqproject"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(613)}));s=o.O(s)})();