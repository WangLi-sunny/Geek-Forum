(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b43e8a8"],{"00fd":function(t,e,n){var i=n("9e69"),o=Object.prototype,a=o.hasOwnProperty,r=o.toString,s=i?i.toStringTag:void 0;function c(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(c){}var o=r.call(t);return i&&(e?t[s]=n:delete t[s]),o}t.exports=c},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"29f3":function(t,e){var n=Object.prototype,i=n.toString;function o(t){return i.call(t)}t.exports=o},"2a07":function(t,e,n){"use strict";n("8952")},"2b3e":function(t,e,n){var i=n("585a"),o="object"==typeof self&&self&&self.Object===Object&&self,a=i||o||Function("return this")();t.exports=a},3729:function(t,e,n){var i=n("9e69"),o=n("00fd"),a=n("29f3"),r="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;function u(t){return null==t?void 0===t?s:r:c&&c in Object(t)?o(t):a(t)}t.exports=u},"408c":function(t,e,n){var i=n("2b3e"),o=function(){return i.Date.now()};t.exports=o},"4cef":function(t,e){var n=/\s/;function i(t){var e=t.length;while(e--&&n.test(t.charAt(e)));return e}t.exports=i},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},"839e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item"},[n("div",{staticClass:"item-content"},[n("router-link",{attrs:{to:{name:"user",params:{loginname:t.item.author.loginname}}}},[n("img",{attrs:{src:t.item.author.avatar_url,alt:""}})]),t.item.visit_count?n("div",{staticClass:"cell"},[n("span",{staticClass:"reply"},[t._v(t._s(t.item.reply_count))]),t._v("/ "),n("span",{staticClass:"reads"},[t._v(t._s(t.item.visit_count))])]):t._e(),t.item.top?n("span",{staticClass:"top active"},[t._v("置顶")]):t.item.good?n("span",{staticClass:"top active"},[t._v("精华")]):"/all"===t.$route.path||"/"===t.$route.path?n("span",{staticClass:"top"},[t._v(t._s(t._f("transformTab")(t.item.tab)))]):t._e(),n("router-link",{staticClass:"title",attrs:{to:{name:"details",params:{id:t.item.id}}}},[t._v(t._s(t.item.title))]),n("span",{staticClass:"time"},[t._v(t._s(t._f("moment")(t.item.last_reply_at,"from","now")))])],1)])},o=[],a=n("c1df"),r=n.n(a);r.a.locale("zh-cn");var s={props:["item"]},c=s,u=(n("a377"),n("2877")),l=Object(u["a"])(c,i,o,!1,null,null,null);e["a"]=l.exports},8952:function(t,e,n){},"8d74":function(t,e,n){var i=n("4cef"),o=/^\s+/;function a(t){return t?t.slice(0,i(t)+1).replace(o,""):t}t.exports=a},"9e69":function(t,e,n){var i=n("2b3e"),o=i.Symbol;t.exports=o},a377:function(t,e,n){"use strict";n("b1c7")},b047:function(t,e,n){var i=n("1a8c"),o=n("408c"),a=n("b4b0"),r="Expected a function",s=Math.max,c=Math.min;function u(t,e,n){var u,l,f,d,p,v,m=0,b=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError(r);function _(e){var n=u,i=l;return u=l=void 0,m=e,d=t.apply(i,n),d}function y(t){return m=t,p=setTimeout(j,e),b?_(t):d}function w(t){var n=t-v,i=t-m,o=e-n;return h?c(o,f-i):o}function x(t){var n=t-v,i=t-m;return void 0===v||n>=e||n<0||h&&i>=f}function j(){var t=o();if(x(t))return O(t);p=setTimeout(j,w(t))}function O(t){return p=void 0,g&&u?_(t):(u=l=void 0,d)}function C(){void 0!==p&&clearTimeout(p),m=0,u=v=l=p=void 0}function T(){return void 0===p?d:O(o())}function L(){var t=o(),n=x(t);if(u=arguments,l=this,v=t,n){if(void 0===p)return y(v);if(h)return clearTimeout(p),p=setTimeout(j,e),_(v)}return void 0===p&&(p=setTimeout(j,e)),d}return e=a(e)||0,i(n)&&(b=!!n.leading,h="maxWait"in n,f=h?s(a(n.maxWait)||0,e):f,g="trailing"in n?!!n.trailing:g),L.cancel=C,L.flush=T,L}t.exports=u},b1c7:function(t,e,n){},b4a8:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"topicsList"},[t.postList.value.length&&!t.isloading?i("div",{staticClass:"list"},[t._l(t.postList.value,(function(t){return i("TopicsItem",{key:t.id,attrs:{item:t}})})),t.loading?i("div",{staticClass:"loading"},[i("img",{attrs:{src:n("cf1c"),alt:""}})]):t._e()],2):i("el-skeleton",{attrs:{rows:16,animated:""}})],1)},o=[],a=n("5530"),r=(n("caad"),n("839e")),s=n("2f62"),c=n("b047"),u=n.n(c),l={components:{TopicsItem:r["a"]},props:["tab"],data:function(){return{page:2,loading:!1,isloading:!1}},watch:{tab:{immediate:!0,handler:function(t){var e=this;["all","ask",void 0,"dev","share","good","job"].includes(t)||this.$router.push({name:"err"}),this.page=2;var n=t||"all";this.isloading=!0,this.getList({tab:n}).then((function(){return e.isloading=!1}))}}},computed:Object(a["a"])({},Object(s["d"])(["postList"])),methods:Object(a["a"])({scroll:u()((function(){var t=this,e=document.documentElement.scrollHeight,n=window.innerHeight||document.documentElement.clientHeight,i=window.scrollY;e-n-i<=100&&this.postList.value.length&&(this.page++,this.loading=!0,this.getList({tab:this.tab||"all",page:this.page}).then((function(e){t.loading=!1,t.flag=!0}),(function(e){t.$message.error("到底了"),t.loading=!1,t.flag=!1})))}),500)},Object(s["b"])(["getList"])),mounted:function(){window.addEventListener("scroll",this.scroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.scroll)}},f=l,d=(n("2a07"),n("2877")),p=Object(d["a"])(f,i,o,!1,null,null,null);e["default"]=p.exports},b4b0:function(t,e,n){var i=n("8d74"),o=n("1a8c"),a=n("ffd6"),r=NaN,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function f(t){if("number"==typeof t)return t;if(a(t))return r;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=i(t);var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?r:+t}t.exports=f},caad:function(t,e,n){"use strict";var i=n("23e7"),o=n("4d64").includes,a=n("44d2");i({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},cf1c:function(t,e,n){t.exports=n.p+"img/loading.304b37c0.gif"},ffd6:function(t,e,n){var i=n("3729"),o=n("1310"),a="[object Symbol]";function r(t){return"symbol"==typeof t||o(t)&&i(t)==a}t.exports=r}}]);
//# sourceMappingURL=chunk-9b43e8a8.406c63fd.js.map