(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1355:function(t,e,n){"use strict";n.d(e,"a",function(){return y});var r,a,o,c=n(0),i=n.n(c),u=n(543),l=n.n(u),p=(n(542),n(529),n(13)),f=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},s=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),d=p.a.p.withConfig({displayName:"Prompt"})(a||(a=f(["\n  color: #979797;\n"],["\n  color: #979797;\n"]))),m=p.a.p.withConfig({displayName:"Data"})(o||(o=f(["\n  font-size: 25px;\n  color: #001529;\n  margin-top: 10px;\n  //margin-left: 20px;\n"],["\n  font-size: 25px;\n  color: #001529;\n  margin-top: 10px;\n  //margin-left: 20px;\n"]))),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){return i.a.createElement(l.a,{className:this.props.className},i.a.createElement(d,null,this.props.prompt),i.a.createElement(m,{style:{fontSize:this.props.fontSize}},this.props.data))},e}(i.a.Component)},1563:function(t,e,n){"use strict";n.r(e);var r,a=n(0),o=n.n(a),c=n(4),i=n(553),u=n.n(i),l=(n(534),n(549)),p=n.n(l),f=(n(529),n(543)),s=n.n(f),d=(n(542),n(98)),m=n.n(d),y=(n(148),n(1355)),h=n(90),v=n(82),w=n(13),b=function(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t},E=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),O=function(t,e,n,r){var a,o=arguments.length,c=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,r);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(c=(o<3?a(c):o>3?a(e,n,c):a(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},g=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},j=function(t,e,n,r){return new(n||(n=Promise))(function(a,o){function c(t){try{u(r.next(t))}catch(t){o(t)}}function i(t){try{u(r.throw(t))}catch(t){o(t)}}function u(t){t.done?a(t.value):new n(function(e){e(t.value)}).then(c,i)}u((r=r.apply(t,e||[])).next())})},x=function(t,e){var n,r,a,o,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return c.label++,{value:o[1],done:!1};case 5:c.label++,r=o[1],o=[0];continue;case 7:o=c.ops.pop(),c.trys.pop();continue;default:if(!(a=(a=c.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){c=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){c.label=o[1];break}if(6===o[0]&&c.label<a[1]){c.label=a[1],a=o;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(o);break}a[2]&&c.ops.pop(),c.trys.pop();continue}o=e.call(t,c)}catch(t){o=[6,t],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}};function _(t){return o.a.createElement(p.a,{md:t.width,sm:24,xs:24},t.children)}var P=Object(w.a)(y.a).withConfig({displayName:"StyledCard"})(R||(R=b(["\n  \n"],["\n  \n"])));function S(t){var e=t.data,n=e.startDate,r=e.currentRatio,a=(e.currentVolume,e.name),c=(e.price,e.profit,e.quantity,e.quotaId);return o.a.createElement(_,{width:9},o.a.createElement(P,{prompt:"标的",data:o.a.createElement(o.a.Fragment,null,a," ",c)}),o.a.createElement(P,{prompt:"开始时间",data:n}),o.a.createElement(P,{prompt:"占比",data:r.toFixed(2)+" %"}))}function z(t){var e=t.data,n=e.currentVolume,r=e.price,a=e.profit,c=e.quantity;return o.a.createElement(_,{width:15},o.a.createElement(s.a,{title:"交易详情"},o.a.createElement(u.a,null,o.a.createElement(_,{width:12},o.a.createElement(P,{prompt:"数量",data:c,fontSize:26})),o.a.createElement(_,{width:12},o.a.createElement(P,{prompt:"单价",data:r.toFixed(2)+" ¥",fontSize:26}))),o.a.createElement(u.a,null,o.a.createElement(_,{width:12},o.a.createElement(P,{prompt:"总价",data:n.toFixed(2)+" ¥",fontSize:26})),o.a.createElement(_,{width:12},o.a.createElement(P,{prompt:"收益",data:a.toFixed(2)+" %",fontSize:26})))))}var R,k=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.renderItem=function(){return j(e,void 0,void 0,function(){var t,e,n,r;return x(this,function(a){switch(a.label){case 0:return t=this.props.invreq.invreqId,[4,this.service.getProductOverviewData(t)];case 1:return e=a.sent(),n=e.futuresOverview,r=e.spotOverview,[2,o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(S,{data:n}),o.a.createElement(z,{data:n})),o.a.createElement(m.a,null),o.a.createElement(u.a,null,o.a.createElement(S,{data:r}),o.a.createElement(z,{data:r})))]}})})},e}var n,r;return E(e,t),e.prototype.render=function(){return o.a.createElement("h3",null,"目前没有配置商品市场。")},O([c.Inject,g("design:type","function"==typeof(n=void 0!==h.a&&h.a)?n:Object)],e.prototype,"service",void 0),O([c.Inject,g("design:type","function"==typeof(r=void 0!==v.a&&v.a)?r:Object)],e.prototype,"quotaSvc",void 0),e}(o.a.Component);e.default=k},529:function(t,e,n){"use strict";n(34),n(563)},534:function(t,e,n){"use strict";n(34),n(563)}}]);