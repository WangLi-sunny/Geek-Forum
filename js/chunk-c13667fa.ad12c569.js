(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c13667fa"],{"505c":function(e,t,s){},"9d27":function(e,t,s){"use strict";s("ef3c")},a9c4:function(e,t,s){"use strict";s("505c")},b2a7:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message"},[s("Panel",{staticClass:"old",scopedSlots:e._u([{key:"header",fn:function(){return[s("router-link",{staticClass:"gohome",attrs:{to:"/"}},[e._v("首页")]),s("span",{staticClass:"xx"},[e._v("/")]),s("span",{staticClass:"sconent"},[e._v("新消息")])]},proxy:!0},e.hasnot_read_messages.length?{key:"content",fn:function(){return e._l(e.hasnot_read_messages,(function(e){return s("MessageItem",{key:e.id,attrs:{item:e}})}))},proxy:!0}:{key:"content",fn:function(){return[s("span",[e._v("暂无消息")])]},proxy:!0}],null,!0)}),s("Panel",{staticClass:"old",scopedSlots:e._u([{key:"header",fn:function(){return[s("span",{staticClass:"gohome"},[e._v("过往消息")])]},proxy:!0},e.has_read_messages.length?{key:"content",fn:function(){return e._l(e.has_read_messages,(function(e){return s("MessageItem",{key:e.id,attrs:{item:e}})}))},proxy:!0}:{key:"content",fn:function(){return[s("span",[e._v("暂无消息")])]},proxy:!0}],null,!0)})],1)},a=[],r=s("5530"),o=s("f34a"),c=s("2f62"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-item"},[s("router-link",{attrs:{to:{name:"user",params:{loginname:e.item.author.loginname}}}},[e._v(e._s(e.item.author.loginname))]),s("span",[e._v("回复了你的话题")]),s("router-link",{attrs:{to:{name:"details",params:{id:e.item.topic.id}}}},[e._v(e._s(e.item.topic.title))])],1)},u=[],l={props:["item"]},m=l,_=(s("9d27"),s("2877")),d=Object(_["a"])(m,i,u,!1,null,null,null),f=d.exports,p={components:{Panel:o["a"],MessageItem:f},created:function(){this.getMessage(),this.changeRead()},computed:Object(r["a"])({},Object(c["d"])({has_read_messages:function(e){return e.message.has_read_messages},hasnot_read_messages:function(e){return e.message.hasnot_read_messages}})),methods:Object(r["a"])({},Object(c["b"])(["getMessage","changeRead"]))},g=p,h=(s("a9c4"),Object(_["a"])(g,n,a,!1,null,null,null));t["default"]=h.exports},ef3c:function(e,t,s){}}]);
//# sourceMappingURL=chunk-c13667fa.ad12c569.js.map