(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],p=0,f=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("0284"),i=n.n(o),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TissuePlayer",{attrs:{msg:"無限ティッシュ"}})],1)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tissue-player"},[n("div",{staticClass:"window-start"},[n("h1",[e._v(e._s(e.msg))]),n("p",[e._v("思う存分ティッシュを引き抜こう！！")]),n("button",{class:{disable:e.isDisplayPlayer},on:{click:e.onStart}},[e._v("START")]),n("p",{class:{disable:e.isDisplayPlayer}},[n("a",{attrs:{href:"https://dorasu-tech.dorasu.com/"}},[e._v("Dorasu Tech")]),n("br"),n("a",{attrs:{href:"https://www.photolibrary.jp/"}},[e._v("フォトライブラリー photolibrary")]),n("br"),n("a",{attrs:{href:"https://taira-komori.jpn.org/"}},[e._v("フリー効果音・無料効果音素材")]),n("br")])]),n("div",{staticClass:"window-player",class:{enable:e.isDisplayPlayer}},[n("video",{attrs:{src:"4621190_Trim.mp4","webkit-playsinline":"",playsinline:"",muted:"",autoplay:""},domProps:{muted:!0},on:{mousedown:function(t){return t.preventDefault(),e.onClick(t)},touchstart:function(t){return t.preventDefault(),e.onClick(t)}}})])])},l=[],u={name:"TissuePlayer",props:{msg:String},data:function(){return{audio:null,isDisplayPlayer:!1,clickCounter:0}},created:function(){this.initAudio()},methods:{initAudio:function(){this.audio=new Audio,this.audio.preload="auto",this.audio.src="tissue.mp3"},onStart:function(){console.log("onStart"),this.isDisplayPlayer=!0,this.audio.load()},onClick:function(e){console.log("onClick"),e.target.currentTime=0,e.target.play(),this.audio.currentTime=0,this.audio.play(),this.clickCounter++,this.$ga.event("TissuePlayer","click","テッシュクリック",this.clickCounter)}}},p=u,f=(n("b15d"),n("2877")),d=Object(f["a"])(p,c,l,!1,null,"90d5b346",null),h=d.exports,v={name:"App",components:{TissuePlayer:h},created:function(){this.$ga.page("/")}},y=v,g=(n("034f"),Object(f["a"])(y,a,s,!1,null,null,null)),b=g.exports,m=n("9483");console.log("register-service-worker"),Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].use(i.a,{id:"UA-158678917-2"}),new r["a"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},b15d:function(e,t,n){"use strict";var r=n("c68a"),o=n.n(r);o.a},c68a:function(e,t,n){}});
//# sourceMappingURL=app.c440d04e.js.map