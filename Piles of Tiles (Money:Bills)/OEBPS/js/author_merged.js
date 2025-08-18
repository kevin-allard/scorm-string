/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default;try{s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2]}catch(err){parser = new DOMParser(), htmlDoc = parser.parseFromString(c[1]+o.replace(vt,"<$1></$2>")+c[2], 'text/html'), el = jQuery(htmlDoc).contents()[0].childNodes[1].childNodes[0],s.append(el)};i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);
var closeAllModals;
var click, savesuspendData, gradableInterval = 0;
// var customKeyboardLanguageData = {
//   french:["À","à ","Â","â","Ä","ä","Ç","ç","È","è","É","é","Ê","ê","Ë","ë","Î","î","Ï","ï","Ô","ô","Œ","œ","Ù","ù","Û","û","Ü","ü","Ÿ","ÿ","«","»","€"],
// 		spanish:["Á","á","É","é","Í","í","Ó","ó","Ú","ú","Ñ","ñ","¡","¿","Ü","ü"],
// 		german:["Ä","ä","Ö","ö","ß","Ü","ü","€"]
// }
var customKeyboardLanguageData = [
  {subject:"FRA",french:["À","à","Â","â","Ä","ä","Ç","ç","È","è","É","é","Ê","ê","Ë","ë","Î","î","Ï","ï","Ô","ô","Œ","œ","Ù","ù","Û","û","Ü","ü","Ÿ","ÿ","«","»","€"]},
  {subject:"ESP",spanish:["Á","á","É","é","Í","í","Ó","ó","Ú","ú","Ñ","ñ","¡","¿","Ü","ü"]},
  {subject:"GER", german:["Ä","ä","Ö","ö","ß","Ü","ü","€"]}
]
var aggregatedDataGlossaryList = [];
var tempScopeActiveKeyboardLanguage = [];
var certificateUserData = {
  "userFirstName": "",
  "userLastName": "",
  "courseName": "",
  "courseCompletionDate": "",
  "courseCompletionTime": "",
  "isGradaOrPercentage": "percentage",
  "courseCompletionScore": "",
  "certificateStyle": "certificate-style1",
  "clientId": "",
  "userToken":"",
  "passingStatus":""
}
$(function () {

  landscapeTrigger = setInterval(() => {
    if (typeof window.isLandScapeActivity != "undefined" && window.localeJson) {
      // send message to player for landscape mode  
      var message = {
        "nextBtnText": window.localeJson.nextBtnText ? window.localeJson.nextBtnText : "Next",
        "previousBtnTxt": window.localeJson.previousBtnTxt ? window.localeJson.previousBtnTxt : "Back",
        "StartCourseText": window.localeJson.StartCourseText ? window.localeJson.StartCourseText : "Start Course",
        "endBtnText": window.localeJson.endBtnText ? window.localeJson.endBtnText : "Finish",
        "isLandscapeActivity": window.isLandScapeActivity ? window.isLandScapeActivity : false
      }
      window.parent.postMessage(message, "*");
      clearInterval(landscapeTrigger);
    }
  }, 100);

  $('.paragraph-selectPrv').addClass('component-holder');

  $('video').each(function (index, video) {
    if ($(video).find('track').length) {
      var div = document.createElement('div');
      div.classList.add('tracksPreloadDiv');
      div.style.display = "none";
      $(div).append($(video).find('track'));
      $(div).insertBefore(video);
    }
  });

  try {
    if (window.client == 'CL' || window.parent.client == 'CL') {
      $('.submit-btn').addClass('hide');
    }
  } catch (error) {
    if (error instanceof DOMException) {
      console.log('Cross-origin access blocked:', error);
      // If cross-origin access is blocked, check only the local client
      if (window.client == 'CL') {
        $('.submit-btn').addClass('hide');
      }
    } else {
      // Handle other potential errors
      console.error('An unexpected error occurred:', error);
    }
  }

  //auto shuffling text divs
  $(".questionShuffleEnable.question-container-box").each(function () {
    var randomNumber = Math.random();
    var divs = $(this).find('.question-container');
    for (var i = 0; i < divs.length; i++) $(divs[i]).remove();
    // the fisher yates algorithm, from http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array
    var i = divs.length;
    if (i == 0) return false;
    while (--i) {
      var j = Math.floor(randomNumber * (i + 1));
      var tempi = divs[i];
      var tempj = divs[j];
      divs[i] = tempj;
      divs[j] = tempi;
    }
    for (var i = 0; i < divs.length; i++) {
      var x = i;
      $(divs[i]).appendTo($(this));
      $(divs[i]).attr("question-index", i);
      $(divs[i]).find(".question-number").text(x + 1);
    }
  });
  $(".highLighted").removeClass(".highLighted");
  var srollTop, srollTopBody, height;
  console.log("in player")
  $('.audio-source').each(function (idx, audioSource) {
    if ($(audioSource).find('figcaption').text() == "") {
      $(audioSource).find('figcaption').hide();
      $(audioSource).find('figure').css('background-color', '');
    }
    if ($(audioSource).find("audio").attr("data-audiosrc") == "#") {
      $(audioSource).css("display", "none");
    }
    if ($(audioSource).attr("selectedskin") == "style2") {
      $(audioSource).find('.audioBorder').css('border', 'none !important');
    }
  });
  if ($("[data-type*='multiple-choice-template']").length > 0) {
    $('.icheck').iCheck();
  }
  if ($("[data-type*='true-false-template']").length > 0) {
    $('.icheck').iCheck();
  }
  $(".htmlStyleSet img[data-link-src]").each(function () {
    if ($(this).attr("src") == "") {
      $(this).attr("src", $(this).attr("data-link-src"));
    }
  });
  if ($("[data-type*='fill-in-the-blank']").length > 0) {
    $("select.inputbox-selected.js-input option[value]").each(function () {
      var valueText = $(this).attr("value").replace(/>/g, "&gt;").replace(/</g, "&lt;");
      $(this).attr("value", valueText);
      var parser = new DOMParser();
      var el = parser.parseFromString(valueText, "text/html");
      var elem = $(el).contents()[0].childNodes[1].childNodes[0];
      $(this).html(elem);

    });
    $(".js-form-row.fib-without-option input.inputbox-selected[data-correct-answer]").each(function () {
      var valueText = $(this).attr("data-correct-answer").replace(/>/g, "&gt;").replace(/</g, "&lt;");
      $(this).attr("data-correct-answer", valueText);
    });
    // $('.fib select').easyDropDown({
    //     wrapperClass: 'selectbox'
    // });

  }
  // submitAllActivityBasedOnReaderPostMessage(event);

  $('audio, video').attr('preload', 'auto');

  $('.shortLongAnsComponent .questionText').attr('contenteditable', 'false');
  $('.shortLongAnsComponent .shortAnsText, .shortLongAnsComponent .longAnsText').attr('placeholder', 'Your Answer').removeAttr('disabled');

  $('.identifyTheClipComponent .questionText').attr('contenteditable', 'false');
  $('.identifyTheClipComponent .shortAnsText, .identifyTheClipComponent .longAnsText').attr('placeholder', 'Your Answer').removeAttr('disabled');


  var submitBtns = $(".submit-btn"),
    resetBtns = $(".reset-btn .resetTooltipText"),
    showMeBtns = $(".showme-btn .showmeTooltipText"),
    tryAgainBtns = $(".tryagn-btn");

  /*$('.mcq-submit').html('');
  $('.mcq-reset').html('');
  $('.mcq-show-me').html('');
  $('.mcq-try-again').html('');

  $('.imgLabel-submit').html('');
  $('.imgLabel-reset').html('');
  $('.imgLabel-show-me').html('');
  $('.imgLabel-try-again').html('');

  $('.fib-submit').html('');
  $('.fib-reset').html('');
  $('.fib-show-me').html('');
  $('.fib-try-again').html('');

  $('.highLight-submit').html('');
  $('.highLight-reset').html('');
  $('.highLight-show-me').html('');
  $('.highLight-try-again').html('');

  $('.correction-submit').html('');
  $('.correction-reset').html('');
  $('.correction-show-me').html('');
  $('.correction-try-again').html('');

  $('.sorting-submit').html('');
  $('.sorting-reset').html('');
  $('.sorting-show-me').html('');
  $('.sorting-try-again').html('');

  $('.mtp-submit').html('');
  $('.mtp-reset').html('');
  $('.mtp-show-me').html('');
  $('.mtp-try-again').html('');*/

  if (submitBtns.length > 0 || resetBtns.length > 0 || showMeBtns.length > 0 || tryAgainBtns.length > 0) {
    for (var i = 0; i < submitBtns.length; i++) {
      $(submitBtns[i]).html('');
    }

    for (var i = 0; i < resetBtns.length; i++) {
      $(resetBtns[i]).html('');
    }

    for (var i = 0; i < showMeBtns.length; i++) {
      $(showMeBtns[i]).html('');
    }

    for (var i = 0; i < tryAgainBtns.length; i++) {
      $(tryAgainBtns[i]).html('');
    }
  }

  var onLocalizationLoad = function () {

    // This below code is commented puposly against the ticket of https://hurixpdg.atlassian.net/browse/S50I-1754
    // this will only be uncomment if Nidhi can add a dynamic class in list view preview.

    // if(window.pageMargin){
    //   if($('.preview-row-container').length){
    //     $('.preview-row-container > div').each(function(index, item){
    //       var newItem = document.createElement('article');
    //       newItem.innerHTML = item.innerHTML;          
    //       item.parentNode.replaceChild(newItem, item);
    //     });
    //   }else{
    //     $('body > div').each(function(index,item){
    //       var newItem = document.createElement('article');
    //       newItem.innerHTML = item.innerHTML;          
    //       item.parentNode.replaceChild(newItem, item);
    //     });
    //   }      
    //   $('.customClass:not([data-type="image"], [data-type="video"])').attr('data-pagemargin', 'narrow');
    //   $('.customClass[data-type="chapter-headingNew-h1"]').attr('data-pagemargin', 'fullwidth');
    //   $('.customClass[data-type="header"], .customClass[data-type="paragraph"]').attr('data-pagemargin', window.pageMargin);
    // }

    // if(window.defaultFontName){
    //   $(":root")[0].style.setProperty('--defaultFont',window.defaultFontName);
    // 	$('body').addClass('defaultFontName');
    // }

    var submitBtns = $(".submit-btn"),
      resetBtns = $(".reset-btn .resetTooltipText"),
      showMeBtns = $(".showme-btn .showmeTooltipText"),
      tryAgainBtns = $(".tryagn-btn");
    if (window.localeJson) {
      if ($('.fib-with-option .dropdownbtn').length > 0) {
        $.each($('.fib-with-option .dropdownbtn'), function (index, obj) {
          var tempText = $($(obj).find('span.chosenAns')[0]).text();
          if (tempText == "Select Answer" && window.localeJson && window.localeJson['select_answer']) {
            $($(obj).find('span.chosenAns')[0]).text(window.localeJson['select_answer']);
          }

          // $($(obj).parents('.fib-with-option').find('ul li')[0]).text(window.localeJson['select_answer']);
        });
      }

      if ($('[data-type="shortLongAns"]').length > 0 && typeof window.localeJson['your_answer'] != "undefined") {
        $('[data-type="shortLongAns"]').find('input, textarea').attr('placeholder', window.localeJson['your_answer']);
      }
      if ($('[data-type="identify-the-clip"]').length > 0 && typeof window.localeJson['your_answer'] != "undefined") {
        $('[data-type="identify-the-clip"]').find('input, textarea').attr('placeholder', window.localeJson['your_answer']);
      }
      if ($('[data-type="multiple-choice-template"]').length > 0 && typeof window.localeJson['mcq_ind_corr'] != "undefined" && typeof window.localeJson['mcq_ind_incorr'] != "undefined") {
        $('[data-type="multiple-choice-template"]').find('.multiple-choice .individual-feedback .correct').text(window.localeJson['mcq_ind_corr']);
        $('[data-type="multiple-choice-template"]').find('.multiple-choice .individual-feedback .incorrect').text(window.localeJson['mcq_ind_incorr']);
      }
      if ($('[data-type="true-false-template"]').length > 0 && typeof window.localeJson['mcq_ind_corr'] != "undefined" && typeof window.localeJson['mcq_ind_incorr'] != "undefined") {
        $('[data-type="true-false-template"]').find('.multiple-choice .individual-feedback .correct').text(window.localeJson['mcq_ind_corr']);
        $('[data-type="true-false-template"]').find('.multiple-choice .individual-feedback .incorrect').text(window.localeJson['mcq_ind_incorr']);
      }

      if ($('[data-type="group-interactivity-template"]').length > 0 && typeof window.localeJson['attempted_message'] != "undefined" && typeof window.localeJson['correct_answers'] != "undefined" && typeof window.localeJson['incorrect_answers'] != "undefined" && typeof window.localeJson['partially_correct_answers'] != "undefined") {
        $('[data-type="group-interactivity-template"]').find('[data-localize="attempted_message"]').text(window.localeJson['attempted_message']);
        $('[data-type="group-interactivity-template"]').find('[data-localize="correct_answers"]').text(window.localeJson['correct_answers']);
        $('[data-type="group-interactivity-template"]').find('[data-localize="incorrect_answers"]').text(window.localeJson['incorrect_answers']);
        $('[data-type="group-interactivity-template"]').find('[data-localize="partially_correct_answers"]').text(window.localeJson['partially_correct_answers']);
        $('[data-type="group-interactivity-template"]').find('[data-localize="nextBtnText"]').text(window.localeJson['nextBtnText']);
        $('[data-type="group-interactivity-template"]').find('[data-localize="previousBtnTxt"]').text(window.localeJson['previousBtnTxt']);
      }

      if ($('[data-localize="of"]').length) {
        $('[data-localize="of"]').text(window.localeJson['of']);
      }

      if ($('[data-type="wordsearch"]').length > 0 && typeof window.localeJson['wordsearch_words'] != "undefined") {
        $('[data-type="wordsearch"]').find('.wordsearch .lbl-words').text(window.localeJson['wordsearch_words']);
      }

      /*$('.mcq-submit').attr('data-localize','submit');
      $('.mcq-reset').attr('data-localize','reset_me');
      $('.mcq-show-me').attr('data-localize','show_me');
      $('.mcq-try-again').attr('data-localize','try_again');
      

      $('.imgLabel-submit').attr('data-localize','submit');
      $('.imgLabel-reset').attr('data-localize','reset_me');
      $('.imgLabel-show-me').attr('data-localize','show_me');
      $('.imgLabel-try-again').attr('data-localize','try_again');

      $('.fib-submit').attr('data-localize','submit');
      $('.fib-reset').attr('data-localize','reset_me');
      $('.fib-show-me').attr('data-localize','show_me');
      $('.fib-try-again').attr('data-localize','try_again');

      $('.highLight-submit').attr('data-localize','submit');
      $('.highLight-reset').attr('data-localize','reset_me');
      $('.highLight-show-me').attr('data-localize','show_me');
      $('.highLight-try-again').attr('data-localize','try_again');

      $('.correction-submit').attr('data-localize','submit');
      $('.correction-reset').attr('data-localize','reset_me');
      $('.correction-show-me').attr('data-localize','show_me');
      $('.correction-try-again').attr('data-localize','try_again');

      $('.sorting-submit').attr('data-localize','submit');
      $('.sorting-reset').attr('data-localize','reset_me');
      $('.sorting-show-me').attr('data-localize','show_me');
      $('.sorting-try-again').attr('data-localize','try_again');

      $('.mtp-submit').attr('data-localize','submit');
      $('.mtp-reset').attr('data-localize','reset_me');
      $('.mtp-show-me').attr('data-localize','show_me');
      $('.mtp-try-again').attr('data-localize','try_again');
*/



      if (submitBtns.length > 0 || resetBtns.length > 0 || showMeBtns.length > 0 || tryAgainBtns.length > 0) {
        for (var i = 0; i < submitBtns.length; i++) {
          $(submitBtns[i]).attr('data-localize', 'submit').attr('title', window.localeJson['submit']).html(window.localeJson['submit']);
        }

        for (var i = 0; i < resetBtns.length; i++) {
          $(resetBtns[i]).attr('data-localize', 'reset_me').attr('title', window.localeJson['reset_me']).html(window.localeJson['reset_me']);
        }

        for (var i = 0; i < showMeBtns.length; i++) {
          $(showMeBtns[i]).attr('data-localize', 'show_me').attr('title', window.localeJson['show_me']).html(window.localeJson['show_me']);
        }

        for (var i = 0; i < tryAgainBtns.length; i++) {
          $(tryAgainBtns[i]).attr('data-localize', 'try_again').attr('title', window.localeJson['try_again']).html(window.localeJson['try_again']);
        }
      }



      // $("[data-localize=submit]").attr('title',window.localeJson['submit']).html(window.localeJson['submit']);
      /* $("[data-localize=reset_me]").attr('title',window.localeJson['reset_me']);
       $("[data-localize=reset_me]").html(window.localeJson['reset_me']);*/
      // $("[data-localize=show_me]").attr('title',window.localeJson['show_me']).html(window.localeJson['show_me']);
      // $("[data-localize=try_again]").attr('title',window.localeJson['try_again']).html(window.localeJson['try_again']);
      $('.correction-Strik').attr('title', window.localeJson['strike']);

      /* $('.submit-btn').attr('title',window.localeJson['submit']);
       $('.reset-btn').attr('title',window.localeJson['reset_me']);
       $('.showme-btn').attr('title',window.localeJson['show_me']);
       $('.tryagn-btn').attr('title',window.localeJson['try_again']);
       $('.correction-Strik').attr('title',window.localeJson['strike']);*/
    } else {
      /*$('.mcq-submit').html('Submit');
    $('.mcq-reset').html('Reset');
    $('.mcq-show-me').html('Show Me');
    $('.mcq-try-again').html('Try Again');

    $('.imgLabel-submit').html('Submit');
    $('.imgLabel-reset').html('Reset');
    $('.imgLabel-show-me').html('Show Me');
    $('.imgLabel-try-again').html('Try Again');

    $('.fib-submit').html('Submit');
    $('.fib-reset').html('Reset');
    $('.fib-show-me').html('Show Me');
    $('.fib-try-again').html('Try Again');

    $('.highLight-submit').html('Submit');
    $('.highLight-reset').html('Reset');
    $('.highLight-show-me').html('Show Me');
    $('.highLight-try-again').html('Try Again');

    $('.correction-submit').html('Submit');
    $('.correction-reset').html('Reset');
    $('.correction-show-me').html('Show Me');
    $('.correction-try-again').html('Try Again');

    $('.sorting-submit').html('Submit');
    $('.sorting-reset').html('Reset');
    $('.sorting-show-me').html('Show Me');
    $('.sorting-try-again').html('Try Again');

    $('.mtp-submit').html('Submit');
    $('.mtp-reset').html('Reset');
    $('.mtp-show-me').html('Show Me');
    $('.mtp-try-again').html('Try Again');*/

      if (submitBtns.length > 0 || resetBtns.length > 0 || showMeBtns.length > 0 || tryAgainBtns.length > 0) {
        for (var i = 0; i < submitBtns.length; i++) {
          $(submitBtns[i]).html('Submit');
        }

        for (var i = 0; i < resetBtns.length; i++) {
          $(resetBtns[i]).html('Reset');
        }

        for (var i = 0; i < showMeBtns.length; i++) {
          $(showMeBtns[i]).html('Show Me');
        }

        for (var i = 0; i < tryAgainBtns.length; i++) {
          $(tryAgainBtns[i]).html('Try Again');
        }
      }
    }
  };
  setTimeout(function () {
    onLocalizationLoad();
  }, 500);

  var videoPreload = function () {
    /*****Set height to video as per resolution as not preloaded*******/
    $('video').each(function () {
      if ($(this).attr('data-resolution') && !$(this).attr('data-setup').match(/(width|height)/)) {
        $(this).parent().css('height', $(this).width() / $(this).attr('data-resolution'));
      }

    });
  }
  var audiovideoREsourcing = function () {
    $('video').each(function () {
      $(this).parent().removeClass('vjs-controls-disabled').css({
        'z-index': '99'
      });
      if ($(this).attr('src') == 'undefined' || $(this).attr('src') === undefined || $(this).attr('src') == "") {
        var temp = $(this).attr('data-Correct') || $(this).attr('data-videosrc');
        $(this).attr('src', temp);
        $(this).find('source').attr('src', temp);
      }
    });
    $('audio').each(function () {
      if ($(this).attr('src') == 'undefined' || $(this).attr('src') === undefined || $(this).attr('src') == "") {
        var temp = $(this).parents('.audio-source').attr('data-Correct') || $(this).attr('data-audiosrc');
        $(this).attr('src', temp);
        $(this).find('source').attr('src', temp);
      }
    });
    if ($('audio').length) {
      audiojs.events.ready(function () {
        var as = audiojs.createAll();
      });
    }
    setTimeout(() => {
      $('.auth-equation-holder').each(function (i) {
        $(this).empty();
        setLatexData(this, $(this).attr('data-equation-latex'));
        if ($(this).parents(".component-holder") && $(this).parents(".component-holder").hasClass("drag-and-drop")) {
          setTimeout(() => {
            let hgt = $(this).height() + 20;
            let wdt = $(this).width() + 20;
            $(this).parents('.form-control-wrap').height(hgt).css('min-width', wdt);
            if ($(this).parents('.form-control-wrap').attr('datadragwidth') !== undefined) {
              $(this).parents('.form-control-wrap').css('width', $(this).parents('.form-control-wrap').attr('datadragwidth'))
            } else {
              $(this).parents('.form-control-wrap').css('width', 'auto')
            }
          }, 1000);
        }
      });
    }, 1000);
  }

  function setLatexData(mathHolder, encodedString) {
    decodedLatex = JSON.parse(decodeURIComponent(encodedString)).latex;
    $(mathHolder).text(decodedLatex);
    temml.render(decodedLatex, mathHolder);
  }
  if (navigator.userAgent.match(/(iPad)/i)) {
    /****Do not preload videos to fix loader not disappearing issue in kitaboo/docketzoom readers in ios9*******/
    setTimeout(function () {
      videoPreload()
    })
  } else {
    $('video').attr('preload', 'auto');
  }
  /***********layout media query fix in two page mode Readium *******************/
  var loadHtmlCss = setInterval(function () {
    // audiovideoREsourcing();
    if ($('html').css('column-count') === '2') {
      $('html').addClass('readium-multiple-column');
      clearInterval(loadHtmlCss);
    }
  }, 100);
  setTimeout(function () {
    clearInterval(loadHtmlCss);
    // audiovideoREsourcing();
  }, 3000);
  /***********layout media query fix in two page mode Readium *******************/
  var zoomEnabledImages = $('img + .color-box-icon').prev('img');
  $('.color-box-icon').remove();
  zoomEnabledImages.addClass('color-box-icon');
  if ($('.container-fluid').length === 0) {
    $('script[type="math/mml"]').contents().unwrap();
  }

  // $('.mcq-submit').off('click').click(function(event){
  //   event.preventDefault();
  //   var $eventTarget = $(event.target),
  //     $form = $eventTarget.parents('form'),
  //     attempts = $eventTarget.data('attempts'),
  //     isCustom = false,
  //     isAllCorrectIncluded = false,
  //     totalAttempts = $eventTarget.data('no-of-attempts') ? Number($eventTarget.data('no-of-attempts')): 1;
  //   attempts ? attempts++ : attempts = 1;

  //   if($form.find('input[iscorrect=true]').length === $form.find('.checked input[iscorrect=true]').length){
  //     attempts = totalAttempts;
  //     isAllCorrectIncluded = true;
  //   }
  //   isCustom = $form.find('.mcq-try-again:visible').length;
  //   if(attempts === totalAttempts || isCustom) {
  //     // $form.find('.checked').parents('.form-row').find(".individual-feedback").css({'display':'block'});
  //     $form.find('.checked').parents('.form-row').removeClass('green-border').addClass('red-border');
  //     $form.find('.checked input[iscorrect=true]').parents('.form-row').removeClass('red-border').addClass('green-border');
  //     $form.find('input').prop('disabled',true);
  //     $form.find('ins').css('cursor', 'default');
  //     // $form.find(".mcq-show-me").removeClass('disabled');
  //     if($form.find('.red-border').length !== 0 && $eventTarget.data('no-of-attempts') && !isCustom && totalAttempts!==1 && !isAllCorrectIncluded) {
  //       Example.show("That's incorrect, this was your last attempt.", '', $form,'incorrect_last_try');

  //     }
  //     if($form.find('.green-border').length !== 0) {
  //       // Example.show("That's incorrect, this was your last attempt.", '', $form,'incorrect_last_try');
  //       Example.show('This is correct','',$form,'correct');
  //     }
  //     if($form.find('.red-border').length !== 0 && isCustom == true) {
  //       Example.show('Please try again', '', $form, 'incorrect_message');
  //     }
  //   }else{
  //     var correctInput = $form.find('.checked input[iscorrect=true]');
  //     $form.trigger('reset');
  //     $form.find('input').iCheck('update');
  //     $(correctInput).iCheck('check').parents('.form-row').addClass('green-border');
  //     $(correctInput).prop('disabled',true);
  //     $form.find('.checked').find('ins').css('cursor', 'default');
  //     // $form.find('.checked').parents('.form-row').find(".individual-feedback").css({'display':'block'});
  //     Example.show('Please try again', '', $form, 'incorrect_message');

  //   }
  //   $form.find('.mcq-try-again').removeClass('disabled');
  //   $eventTarget.data('attempts',attempts).addClass('disabled');
  //   $form.find(".reset").addClass('disabled');



  // });
  // $('.mcq-show-me').off('click').click(function(event){
  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   $form.find('input').prop('disabled',false);
  //   $form.find('input').prop("checked",false);
  //   $form.find('input').removeAttr('checked').iCheck('update');

  //   $form.find('input[iscorrect=true]').prop( "checked", true );
  //   $form.find('input[iscorrect=true]').iCheck('update');
  //   $form.find('input[iscorrect=true]').iCheck('check');

  //   $form.find('input').prop('disabled',true);
  //   $form.find('.mcq-submit,.mcq-try-again,.mcq-show-me,.reset').addClass('disabled');
  //   $form.find('.green-border').removeClass('green-border');
  //   $form.find('input[iscorrect=true]').parents('.form-row').addClass('green-border');
  //   $form.find(".individual-feedback").css({'display':'none'});
  //   // $form.find('.green-border').find(".individual-feedback").css({'display':'block'});
  //   // $form.find('.red-border').find(".individual-feedback").css({'display':'none'});
  //   Example.show('This is correct','',$form,'correct');
  //   $form.find('.red-border').removeClass('red-border');
  //   //$form.find('.mcq-options').removeClass('mcq-options');
  // });
  // $('.mcq-try-again').off('click').click(function(event){
  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   $form.trigger('reset');
  //   $form.find('input').prop('disabled',false);
  //   $form.find('input').iCheck('update');
  //   $form.find('.mcq-body').removeClass('add-individual-feedback');
  //   $form.find('.form-row').find(".individual-feedback").css({'display':'none'});
  //   $form.find('.mcq-submit,.mcq-try-again').addClass('disabled');
  //   $form.find('.mcq-submit').data('attempts', '');
  //   $form.find('.red-border,.green-border').removeClass('red-border green-border');
  //   $form.find('ins').css('cursor', 'pointer');
  // });

  // $('.mcq-submit,.fib-submit,.mtp-try-again,.mtp-submit,.highLight-try-again,.reset,.highLight-reset,.correction-reset,.sorting-reset,.imgLabel-reset,.mtp-reset').addClass('disabled');



  // $('.fib-show-me').off('click').click(function(event){
  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   $form.find('input,select').prop('disabled',true);
  //   $form.find('select').easyDropDown('disable');
  //   $form.find('.fib-submit,.fib-try-again,.fib-show-me,.reset').addClass('disabled');
  //   var rows = $form.find('.form-row'),
  //           blanks,
  //           rowCounter,
  //           correctAnswer,
  //           blankCounter;
  //       for (rowCounter = 0; rowCounter < rows.length; rowCounter++) {
  //           blanks = $(rows[rowCounter]).find('.js-form-row');
  //           for(blankCounter = 0; blankCounter < blanks.length; blankCounter++) {
  //             if($form.find('.fib-body').hasClass('with-option-body')) {
  //                 correctAnswer = $(blanks[blankCounter]).find('select').data('correctoption-index');
  //                 $(blanks[blankCounter]).find('select')[0].selectedIndex = correctAnswer + 1;
  //                 $(blanks[blankCounter]).find('select').easyDropDown('select' , correctAnswer + 1);
  //                 $(blanks[blankCounter]).find('select,.selected').removeClass('incorrect').addClass('correct').prop('disabled',true);
  //                 $(blanks[blankCounter]).find('.incorrect-tick').removeClass('incorrect-tick icon-Close').addClass('correct-tick icon-Check');
  //                 //$(blanks[blankCounter]).find('.hide-carat').removeClass('hide-carat');
  //               } else {
  //                 correctAnswer = String($(blanks[blankCounter]).find('input').data('correct-answer'));
  //                 $(blanks[blankCounter]).find('input').val(correctAnswer);
  //                 $(blanks[blankCounter]).find('input').removeClass('incorrect').addClass('correct').prop('disabled',true);
  //                 $(blanks[blankCounter]).find('.form-control-wrap').removeClass('incorrect-attempt').addClass('correct-attempt');
  //                 $(blanks[blankCounter]).find('.incorrect-tick').removeClass('incorrect-tick icon-Close').addClass('correct-tick icon-Check');
  //               }
  //           } 
  //       }
  // });
  // $('.fib-try-again').off('click').click(function(event){
  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   $form.trigger('reset');
  //   $form.find('input,select').prop('disabled',false);
  //   $form.find('.hide-carat').removeClass('hide-carat');
  //   $form.find('select').easyDropDown('enable');
  //   $form.find('input,select').prop('disabled',false);
  //   $form.find('.selectbox li').removeClass('active');
  //   $form.find('.fib-submit,.fib-try-again').addClass('disabled');
  //   $form.find('.fib-submit').data('attempts', '');
  //   $form.find('.correct,.incorrect').removeClass('correct incorrect');
  //   $form.find('.correct-tick,.incorrect-tick').remove();
  //   $form.find('.correct-attempt,.incorrect-attempt').removeClass('correct-attempt incorrect-attempt');
  //   if(window.localeJson){
  //         if($('.fib-with-option .selectbox').length > 0) {
  //           $.each($('.fib-with-option .selectbox'),function(index, obj){
  //             $($(obj).find('span.selected')[0]).text(window.localeJson['select_answer']);
  //             $($(obj).find('ul li')[0]).text(window.localeJson['select_answer']);
  //           });
  //         }
  //       }
  // });

  // $('.fib-submit').off('click').click(function(event){
  //   click=true;
  //   event.preventDefault();
  //   var $eventTarget = $(event.target),
  //     $form = $eventTarget.parents('form'),
  //     attempts = $eventTarget.data('attempts'),
  //     isCustom = false,
  //     isAllCorrectIncluded = false,
  //     totalAttempts = $eventTarget.data('no-of-attempts') ? Number($eventTarget.data('no-of-attempts')): 1;
  //   attempts ? attempts++ : attempts = 1;

  //   isCustom = $form.find('.fib-try-again:visible').length;
  //   $form.find('.correct,.incorrect').removeClass('correct incorrect');
  //   $form.find('.correct-tick,.incorrect-tick').remove();
  //     var rows = $form.find('.form-row'),
  //           blanks,
  //           rowCounter,
  //           correctAnswer,
  //           blankCounter,
  //           currenrAnswer,
  //           isWithOption = false,
  //           selector;
  //   if($form.find('.fib-body').hasClass('with-option-body')) {
  //     isWithOption = true;
  //     selector = 'select,.selected';
  //   } else {
  //     selector = 'input';
  //   }
  //   for (rowCounter = 0; rowCounter < rows.length; rowCounter++) {
  //           blanks = $(rows[rowCounter]).find('.js-form-row');
  //           for(blankCounter = 0; blankCounter < blanks.length; blankCounter++) {
  //             if(isWithOption) {
  //               correctAnswer = $(blanks[blankCounter]).find(selector).data('correctoption-index') + 1;
  //               currenrAnswer = $(blanks[blankCounter]).find(selector)[0].selectedIndex;
  //             } else {
  //               correctAnswer = String($(blanks[blankCounter]).find(selector).data('correct-answer'));
  //               correctAnswer = correctAnswer.trim();
  //               currenrAnswer = $(blanks[blankCounter]).find(selector).val();
  //             }
  //               $(blanks[blankCounter]).find('.carat').addClass('hide-carat');
  //               if(correctAnswer === currenrAnswer) {
  //                   $(blanks[blankCounter]).find(selector).addClass('correct').prop('disabled',true);
  //                   $(blanks[blankCounter]).find('select').easyDropDown('disable');
  //                   $(blanks[blankCounter]).find('.form-control-wrap').append('<span class="correct-tick icon-Check" style="position:absolute;"></span>').addClass('correct-attempt');
  //               } 
  //               else {
  //                   if(isWithOption) {
  //                     if(correctAnswer !== currenrAnswer){
  //                       $(blanks[blankCounter]).find(selector).addClass('incorrect');
  //                       $(blanks[blankCounter]).find('.form-control-wrap').append('<span class="incorrect-tick icon-Close" style="position:absolute;"></span>').addClass('incorrect-attempt');
  //                     }
  //                   }else{
  //                       var temp1=true;
  //                       if(currenrAnswer.split("/;").length>1){
  //                         var temp=correctAnswer.split("/;");
  //                         var ans=temp[0].trim();
  //                         temp.forEach(function(val, key) {
  //                           if(key>0){
  //                             temp[key]=val.trim();
  //                             ans=ans+'/;'+temp[key];
  //                           }
  //                         });

  //                         var tempp=currenrAnswer.split("/;");
  //                         var ans1=tempp[0].trim();
  //                         tempp.forEach(function(val, key) {
  //                           if(key>0){
  //                             ans1=ans1+'/;'+val.trim();
  //                           }
  //                         });
  //                         if(ans===ans1 && temp1===true){
  //                           temp1=false;
  //                           $(blanks[blankCounter]).find(selector).addClass('correct').prop('disabled',true);
  //                           $(blanks[blankCounter]).find('select').easyDropDown('disable');
  //                           $(blanks[blankCounter]).find('.form-control-wrap').append('<span class="correct-tick icon-Check" style="position:absolute;"></span>').addClass('correct-attempt');
  //                         }
  //                       }
  //                       var temp=correctAnswer.split("/;");
  //                       temp.forEach(function(val, key) {
  //                         if(val.trim()===currenrAnswer.trim() && temp1===true){
  //                             temp1=false;
  //                             $(blanks[blankCounter]).find(selector).addClass('correct').prop('disabled',true);
  //                             $(blanks[blankCounter]).find('select').easyDropDown('disable');
  //                             $(blanks[blankCounter]).find('.form-control-wrap').append('<span class="correct-tick icon-Check" style="position:absolute;"></span>').addClass('correct-attempt');
  //                         }

  //                       });
  //                       if(correctAnswer !== currenrAnswer && temp1===true){
  //                           $(blanks[blankCounter]).find(selector).addClass('incorrect');
  //                           $(blanks[blankCounter]).find('.form-control-wrap').append('<span class="incorrect-tick icon-Close" style="position:absolute;"></span>').addClass('incorrect-attempt');
  //                       }
  //                       temp1=true;
  //                   }

  //               }

  //           }
  //       }
  //   if($form.find('.incorrect').length === 0) {
  //     attempts = totalAttempts;
  //     isAllCorrectIncluded = true;
  //     $form.find('.reset').addClass('disabled');
  //   }
  //   if(attempts === totalAttempts || isCustom) {
  //     $form.find(selector).prop('disabled',true);
  //     $form.find('select').easyDropDown('disable');
  //     $form.find('.fib-submit').addClass("disabled");
  //     // $form.find('.fib-show-me').removeClass('disabled');

  //     if($form.find('.incorrect').length !== 0 && $eventTarget.data('no-of-attempts') && !isCustom && totalAttempts!==1 && !isAllCorrectIncluded) {
  //       Example.show("That's incorrect, this was your last attempt.", '', $form,'incorrect_last_try');
  //     }
  //   } else {
  //     Example.show('Please try again', '', $form, 'incorrect_message');
  //   }
  //   $form.find('.fib-try-again').removeClass("disabled");
  //   $form.find('.reset').removeClass("disabled");
  //   $eventTarget.data('attempts',attempts).addClass('disabled');
  //   $form.find('.reset').addClass('disabled'); 

  // });
  //   $('.form-row .icheck').on('ifChecked', function(event) {
  //   var $form = $(event.target).parents('form');
  //   var color=$(event.target).parents('.component-holder').css('border-color');
  //   if($(event.target).parents('.component-holder').hasClass('mcq_full_bleed_style2')){
  //      var color = color.replace(")", ",5%)");
  //    $(event.target).parents('.form-row').css('background-color', color);
  //   }else if($(event.target).parents('.component-holder').hasClass('card-style2')||$(event.target).parents('.component-holder').hasClass('mcq_full_bleed_style1')){
  //    $(event.target).parents('.form-row').css({'border-color': color ,'box-shadow':'0px 0px 3px'});
  //   }
  //   });
  // $('.form-row .icheck').on('ifUnchecked', function(event) {
  //   var $form = $(event.target).parents('form');
  //    $(event.target).parents('.form-row').css({'background-color': "" , 'box-shadow':'','border-color': ''});
  // });
  // setTimeout(function() {
  //   $('.fib .form-row input').removeAttr('disabled');
  // }, 1000);
  // $('.fib .form-row input').on('keyup', function(event) {
  //   if(event.keycode==13){
  //     event.preventDefault();
  //   }
  //   var $eventTarget = $(event.target),
  //     $form = $eventTarget.parents('form'),
  //     $inputs = $form.find('input');
  //   $form.find('.incorrect-tick').remove();
  //   $form.find('.incorrect-attempt').removeClass('incorrect-attempt');
  //   for(var i = 0; i < $inputs.length; i++) {
  //     if($($inputs[i]).val().trim() === '') {
  //       $form.find('.fib-submit').addClass('disabled');
  //       $form.find('.reset').removeClass('disabled');
  //       return;
  //     }
  //   }
  //   $form.find('.fib-submit').removeClass('disabled');
  //   $form.find('.reset').removeClass('disabled');

  // });
  //   $('.fib .form-row select').on('change', function(event) {
  //     var $eventTarget = $(event.target),
  //       $form = $eventTarget.parents('form'),
  //       $inputs = $form.find('select');
  //     if($eventTarget.prop('disabled')) {
  //       return;
  //     }
  //     $form.find('.incorrect-tick').parents('.form-control-wrap').find('.hide-carat').removeClass('hide-carat');
  //     $form.find('.incorrect-tick').remove();
  // if(event.currentTarget.selectedIndex == 0) {
  //     if(window.localeJson)
  //     $($(event.currentTarget).parents('.selectbox').find('span.selected')[0]).text(window.localeJson['select_answer']);
  //     else{
  //       $($(event.currentTarget).parents('.selectbox').find('span.selected')[0]).text("Select Answer");
  //     }
  // }
  //     for(var i = 0; i < $inputs.length; i++) {
  //       if($($inputs[i])[0].selectedIndex === 0) {
  //         $form.find('.fib-submit').addClass('disabled');
  //         $form.find('.reset').removeClass('disabled');

  //         return;
  //       }
  //     }
  //     $form.find('.fib-submit').removeClass('disabled');
  //     $form.find('.reset').removeClass('disabled');

  //   });
  var compareTwoArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (var i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  var getCurrentAnswerArray = function (currentElement) {
    var currArray = [];
    currentElement.find('.checked').each(function (index, value) {
      currArray.push($(value).parents('.form-row').find('.mcq-options').html());
    });
    return currArray;
  };

  var getCorrectAnswerArray = function ($form) {
    if (typeof $form.parents('.col-sm-12').data('mcq-answers') === 'number') {
      return ($form.parents('.col-sm-12').data('mcq-answers') + '').split(',');
    } else {
      return $form.parents('.col-sm-12').data('mcq-answers').split(',');
    }
  };

  var slider_pager_width = function (isResize) {
    // $(".slideshow").find("video").trigger('pause');
    setTimeout(function () {
      resizeSlideHeight();
      $(".youtube-padding").each(function (i) {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      });
    });
    // setInterval(() => {
    //   $(window).trigger('resize');
    // }, 1000);

    // let myInterval = setInterval(myTimer, 1000);
    // function myTimer() {
    //   $(window).trigger('resize');
    // }
    // setTimeout(() => {
    //   // $(window).trigger('resize');
    //   clearInterval(myInterval);
    // }, 10000);

    var slideshowTemplates = $('.slideshow , .flashcard');
    $.each(slideshowTemplates, function (index, value) {
      var pager_width = $(value).find('.bx-pager').width(),
        pager_length = $(value).find('.bx-pager .bx-pager-item').length,
        pager_item_width = Math.floor(pager_width / pager_length);
      if (isResize && sliders[index]) {
        sliders[index].settings.startSlide = sliders[index].slider.getCurrentSlide();
        sliders[index].slider.reloadSlider(sliders[index].settings);
        // $(value).find('.bx-controls-direction div').css('position','absolute').attr('href', '#/');
        $(value).find('.bx-controls-direction div').css('position', 'absolute');
      }
      $(value).find('.bx-pager-item').css('width', pager_item_width);
    });
  };

  var highlightOptions = function (currentElement, correctAnswer) {
    currentElement.find('.checked').parents('.form-row').removeClass('green-border').addClass('red-border');
    currentElement.find('.checked input[data-iscorrect=true]').parents('.form-row').removeClass('red-border').addClass('green-border');
  };

  $('.bxslider-container').addClass('previewSlider');

  // $('.slider ul').css('padding','0');
  var sliders = [];

  function initSliders(targetSlider, targetPager, index, customOptionsAutoSlide, customOptionsPauseDuration) {
    if (typeof customOptionsAutoSlide == "undefined") {
      customOptionsAutoSlide = false;
    } else {
      customOptionsAutoSlide = (customOptionsAutoSlide == 'true')
    }
    if (typeof customOptionsPauseDuration == "undefined") {
      customOptionsPauseDuration = 3;
    } else {
      customOptionsPauseDuration = parseInt(customOptionsPauseDuration);
    }
    if ($(targetSlider).parents(".slideShowFullBleed").length > 0) {
      $(targetSlider).parents(".customClass").addClass("full-bleed");
    }
    $(targetPager).css("display", "block");
    sliders[index] = {};
    sliders[index].settings = {
      infiniteLoop: customOptionsAutoSlide ? true : false,
      hideControlOnEnd: true,
      pager: true,
      mode: 'horizontal',
      useCSS: false,
      speed: 500,
      auto: customOptionsAutoSlide,
      pause: customOptionsPauseDuration * 1000,
      nextText: '',
      prevText: '',
      pagerType: 'short',
      pager: true,
      ariaLive: true,
      ariaHidden: true,
      adaptiveHeight: true,
      onSlideAfter: function () {
        $(this).parents(".component-holder.slideshow").find('.bx-controls-direction').removeClass("pointerEventNone");
      },
      onSlideBefore: function ($slideElement, oldIndex, newIndex) {

        var cardlength = $(this).parents('.customClass').find('.card').length;
        var width = (100 / cardlength) * (newIndex + 1);
        $(this).parents('.customClass').find('.Style2Progress').css('width', width + '%');
        if (width == 100) {
          $(this).parents('.customClass').find('.Style2Progress').css('border-top-right-radius', '10px');
        } else {
          $(this).parents('.customClass').find('.Style2Progress').css('border-top-right-radius', '0');
        }

        $(this).parents(".component-holder.slideshow").find('.bx-controls-direction').addClass("pointerEventNone");
        $slideElement.parents('.bxslider').find('video').trigger('pause');
        $slideElement.parents('.bxslider').find(".youtube-padding").each(function (i) {
          if (typeof $(this)[i] != "undefined" && typeof $(this)[i].contentWindow != "undefined") {
            $(this)[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
          }
        });
      },
      onSliderLoad: function () {
        slider_pager_width();
        $('.slider .bx-viewport').css({
          'overflow': ''
        });

        var arrData = $('.slider .bx-viewport');
        $.each(arrData, function (index, obj) {
          var bxViewportHt = $(obj).height() - 50;
          // $(obj).find('.video-js').css('max-height','unset');
          // $(obj).find('.video-js').find('video').css('max-height','unset');
          // $(obj).find('.video-js').find('video').css('min-height','412px');
          // $(obj).css('min-height','412px');
          // $(obj).find('.video-js').css('min-height','412px');
          $(obj).find('.video-js').css('font-size', 'x-small');
        });
        // $('.slider .bx-viewport .video-js').css('max-height',$('.slider .bx-viewport').height() - 50);
        $(window).load(function () {
          //console.log("Window load");

          $(window).trigger('resize');

        });
        // $('.slideshow[data-asset-color]').each(function(index, value) {
        //  var assetcolor=$(this).attr('data-asset-color');
        //   if($(".component-holder").hasClass("slideshow-style-2")){
        //        $(this).find('.bx-pager').css('background-color',assetcolor);  
        //        $(this).find('.bx-controls-direction').find('.bx-prev.disabled').css('color', '#cccccc'); 
        //        $(this).find('.bx-controls-direction').find('.bx-next').css('color','white'); 
        //        }
        //        else{
        //         $(this).find('.bx-controls-direction').find('.bx-prev').css('color',assetcolor);  
        //         $(this).find('.bx-controls-direction').find('.bx-next').css('color',assetcolor); 
        //       }
        // });
        var assetcolor = $(targetSlider).parents(".customClass").find(".slideshow").attr('data-asset-color');
        if ($(targetSlider).parents(".customClass").find(".slideshow").hasClass("style-1")) {
          $(targetSlider).parents(".customClass").find('.bx-pager.bx-default-pager').css('background-color', "");
          $(targetSlider).parents(".customClass").find('.bx-controls-direction').find('.bx-prev, .bx-next').css('color', assetcolor);
          if (assetcolor == "transparent") {
            $(targetSlider).parents(".customClass").find('.bx-controls-direction').find('.bx-prev, .bx-next').css('color', "");
          }
        } else if ($(targetSlider).parents(".customClass").find(".slideshow").hasClass("style-2")) {
          $(targetSlider).parents(".customClass").find('.bx-pager.bx-default-pager').css('background-color', assetcolor);
          $(targetSlider).parents(".customClass").find('.bx-controls-direction').find('.bx-prev, .bx-next').css('color', "");
        } else if ($(targetSlider).parents(".customClass").find(".slideshow").hasClass("style-3")) {
          $(targetSlider).parents(".customClass").find('.bx-pager.bx-default-pager').css('background-color', "");
          $(targetSlider).parents(".customClass").find('.bx-controls-direction').find('.bx-prev, .bx-next').css('color', assetcolor);
          if (assetcolor == "transparent") {
            $(targetSlider).parents(".customClass").find('.bx-controls-direction').find('.bx-prev, .bx-next').css('color', "");
          }
        }
      }
    };
    // $(targetSlider).destroySlider();
    sliders[index].slider = $(targetSlider).bxSlider(sliders[index].settings);
    if (typeof sliders[index].slider.redrawSlider === 'function') {
      sliders[index].slider.redrawSlider();
    }
    //sliders[index].slider.redrawSlider();

  }

  $('[data-type="slideshow"] .slider').each(function (index, value) {
    var targetSlider = "#" + $(this).find('.bxslider').attr('id');
    var targetPager = "#" + $(this).parent().find('.bx-pager-custom').attr('id');
    $(targetSlider).bxSlider = "";
    $(targetPager).bxSlider = "";
    $(targetPager).addClass('bx-pager')
    //console.log(targetSlider, targetPager, $(this));
    initSliders(targetSlider, targetPager, index, $(this).attr('data-options-autoslide'), $(this).attr('data-options-pauseduration'));
  });

  $('[data-type="flashcard"] .slider').each(function (index, value) {
    var targetSlider = "#" + $(this).find('.bxslider').attr('id');
    var targetPager = "#" + $(this).parent().find('.bx-pager-custom').attr('id');
    $(targetSlider).bxSlider = "";
    $(targetPager).bxSlider = "";
    $(targetPager).addClass('bx-pager')
    //console.log(targetSlider, targetPager, $(this));
    initSliders(targetSlider, targetPager, index, $(this).attr('data-options-autoSlide'), $(this).attr('data-options-pauseDuration'));
  });

  // $('.bx-controls-direction div').css('position','absolute').attr('href', '#/');
  $('.bx-controls-direction div').css('position', 'absolute');


  slider_pager_width();

  var Example = (function () {
    "use strict";

    var that = {};

    that.show = function (text, className, parent, localized_name) {
      var elem = $.parseHTML('<div class="inline-alert"><span>' + text + '</span></div>');
      $(parent).append(elem);
      $(parent).find('.inline-alert span').attr('data-localize', '["' + localized_name + '"]');
      if (window.localeJson) {
        $(parent).find('.inline-alert span').text(window.localeJson[localized_name]);
      }
      $(elem).delay(200).fadeIn().delay(1500).fadeOut(function () {
        $(elem).remove()
      });
    };

    return that;
  }());

  var adjustHeroheaderHeight = function () {
    $('[chapter-heading-template]').each(function (index, value) {
      if ($(value).hasClass('image-masked')) {
        var height = $(value).width() / $(value).find('.chapter-heading-h1').attr('data-mask-ratio'),
          bgSize = '100%';
        $(value).css({
          'min-height': height,
          'height': height
        });
        if ($(value).find('.chapter-heading-h1').height() > height) {
          $("<img>").attr("src", $(value).find('.chapter-heading-h1').css('background-image').replace('url(', '').replace(')', '').replace(/"/g, '')).load(function () {
            var originalBgY = $(value).width() * (this.height / this.width);
            var newBgy = originalBgY * ($(value).height() / height);
            $(value).find('.chapter-heading-h1').css('background-size', bgSize + ' ' + newBgy + 'px');
          })
        } else {
          $(value).find('.chapter-heading-h1').css('background-size', bgSize);
        }
        return;
      }
      // if(!$(value).attr('data-max-width')) {
      //  $(value).attr('data-max-width', $(value).height()); 
      // }
      if ($(value).find('.chapter-heading-h1').css('background-image') !== 'none') {
        $("<img>").attr("src", $(value).find('.chapter-heading-h1').css('background-image').replace('url(', '').replace(')', '').replace(/"/g, '')).load(function () {
          var height,
            widthPerc;
          if ($(value).find('.chapter-heading-h1').css('background-size') !== '100% 100%') {
            widthPerc = $(value).width() * Number($(value).find('.chapter-heading-h1').css('background-size').replace('%', '')) / 100;
          } else {
            widthPerc = $(value).width();
          }
          height = widthPerc * this.height / this.width;
          // if($(value).attr('data-max-width')) {
          //  height > $(value).attr('data-max-width') ? height = $(value).attr('data-max-width'): '';
          // }
          $(value).css({
            'min-height': height,
            'height': height
          });
        });
      }
    });
  }
  var adjustInlineHtmlPayerSize = function () {
    var inlinePlayContainer,
      htmldefaultContent;
    $('.html-interactivity').each(function (index, value) {
      inlinePlayContainer = $(value).find('.inline-play-container');
      htmldefaultContent = $(value).find('.html-interactive-content');
      if (inlinePlayContainer.length !== 0 && !inlinePlayContainer.hasClass('hide-img')) {
        htmldefaultContent.removeClass('hide-img');
        inlinePlayContainer.addClass('hide-img');
        inlinePlayContainer.css('width', htmldefaultContent.css('width'));
        inlinePlayContainer.css('height', htmldefaultContent.css('height'));
        htmldefaultContent.addClass('hide-img');
        inlinePlayContainer.removeClass('hide-img');
      }
    });
  }
  var defaultSidebarView = function () {
    // $('.asidebar input').prop('checked', false);
    $('.asidebar').each(function (index, value) {
      $(value).find('.toggle-box + label + p').css('visibility') !== 'visible' ? ($(value).find('input').prop('checked') ? $(value).find('input').prop('checked', true) : '') : '';
    });
  }
  // adjustHeroheaderHeight();
  defaultSidebarView();

  function iframeMessage(event) {
    if (typeof event.data == "object") {
      var objData = {
        'submit': '.submit-btn',
        'reset': '.reset-btn',
        'show_me': '.showme-btn',
        'try_again': '.tryagn-btn'
      }
      if (event.data.buttonData != undefined) {
        $.each(event.data.buttonData, function (index, element) {
          if (objData.hasOwnProperty(index)) {
            if (element) {
              $(objData[index]).attr("style", "display: inline-block !important");
            } else {
              $(objData[index]).attr("style", "display: none !important");
            }
          }
        });
      }
      $(window).trigger("resize");
      savesuspendData = event.data.sccomData;
    }
    $('.white_center_bg_main').css('overflow', 'hidden !important');
  }

  window.addEventListener("message", receiveMessage, false);

  function receiveMessage(event) {    
    if(isValidJSON(event.data)){
        if (typeof event.data == "string" && !(JSON.parse(event.data).event == 'infoDelivery' || JSON.parse(event.data).event == 'apiInfoDelivery')) {
          setTimeout(function () {
            slider_pager_width(true);
            if (navigator.userAgent.match(/(iPad)/i)) {
              videoPreload();
            }
            // audiovideoREsourcing();
          });

          var debounced = check.debounce(50);
          $(window).on('scroll', debounced);
          // adjustHeroheaderHeight();
          adjustInlineHtmlPayerSize();
          defaultSidebarView();
      }
    }
    else if(event.data.message === "SampleAnswersLayer") {
      document.querySelectorAll('[data-sampletaginfo]').forEach(el => {
          console.log(el);
          try {
              let data = JSON.parse(el.getAttribute('data-sampletaginfo').replace(/&quot;/g, '"'));
              
              if (data.Sample_Answers && data.Sample_Answers.includes("On")) {
                  console.log("Found matching element:", el);
                  
                  let $questionContainer = $(el).closest('.question-container');
  
                  if(event.data.enableSampleAnswers) {
                      $questionContainer.show();
                  } else {
                      $questionContainer.hide();
                  }
              }
          } catch (error) {
              console.error("Error parsing data-sampletaginfo:", error);
          }
      });
    }
  
    else if(event.data.message == "tigEnable"){
      console.log("tig Enable --",event.data);
    }
  }

  function isValidJSON(data) {
    try {
        JSON.parse(data);
        return true;
    } catch (e) {
        return false;
    }
}

  
  try {
    if (window.client == 'CL' || window.parent.client == 'CL') {
      window.parent.addEventListener("message", receiveMessageFromIFream, false);
    }
  } catch (error) {
    if (error instanceof DOMException) {
      console.log('Cross-origin access blocked:', error);
      // If cross-origin access is blocked, check only the local client
      if (window.client == 'CL') {
        window.parent.addEventListener("message", receiveMessageFromIFream, false);
      }
    } else {
      // Handle other potential errors
      console.error('An unexpected error occurred:', error);
    }
  }

  function receiveMessageFromIFream(event) {
    if (typeof event.data == "string") {
      if (event.data != undefined && event.data === 'ifremStepChange') {
        $('audio').each(function (index, item) {
          item.pause();
          item.currentTime = 0;  
          $(item).removeClass('playing').parents('.playing').removeClass('playing');
        });
        $('video').each(function (index, item) {
          item.pause(); 
          item.currentTime = 0;
        });
        $('.video-iframe-container').each(function () {
          var src = $(this)[0].getAttribute('src');
          if (src && src.indexOf('youtube.com/embed') != -1) {
            $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
          }
        });
      }
    }
    else if(event.data.message === "SampleAnswersLayer") {
      document.querySelectorAll('[data-sampletaginfo]').forEach(el => {
          console.log(el);
          try {
              let data = JSON.parse(el.getAttribute('data-sampletaginfo').replace(/&quot;/g, '"'));
              
              if (data.Sample_Answers && data.Sample_Answers.includes("On")) {
                  console.log("Found matching element:", el);
                  
                  let $questionContainer = $(el).closest('.question-container');
  
                  if(event.data.enableSampleAnswers) {
                      $questionContainer.show();
                  } else {
                      $questionContainer.hide();
                  }
              }
          } catch (error) {
              console.error("Error parsing data-sampletaginfo:", error);
          }
      });
    }
    else if(event.data.message == "tigEnable"){
      console.log("tig Enable --",event.data);
    }
  }



  //*************************************************************** */
  //*************************************************************** */
  //***********************Reader Functionality Settings Start******************/
  //*************************************************************** */
  //*************************************************************** */

  window.readerMargin = $('.customClass[data-type="paragraph"], .customClass[data-type="header"], .customClass[data-type="tablesNew"]').eq(0).attr('data-pagemargin');
  if (window.readerMargin == "" || window.readerMargin == undefined || window.readerMargin == null || window.readerMargin == "null") {
    window.readerMargin = "narrow";
    setTimeout(() => {
      window.kitabooMarginChange(window.readerMargin);
    }, 0);
  }
  
  


  window.readerExistingJson = {};
  // This is default reader Margin Sample, Do Not Un-comment;

  // window.readerJson = { 
  //   "font":"open_sans",
  //   "fontSize":"small", 
  //   "align":"left", 
  //   "lineSpacing":"small",
  //   "margin":"narrow", 
  //   "modeBackground":"#ffffff",    
  //   "modeForeground":"#000000",    
  //   "readingMode":"day"
  // }

  window.kitabooReaderCommonFunction = function (readerJson) {
    var intialState = false;
    if (Object.keys(window.readerExistingJson).length == 0) {
      intialState = true;
      window.readerExistingJson = readerJson;
    }
    if (readerJson.font != undefined && (window.readerExistingJson.font != readerJson.font || intialState)) {
      window.kitaboosetFontFamily(readerJson.font, readerJson);
    }
    if (readerJson.fontSize != undefined && (window.readerExistingJson.fontSize != readerJson.fontSize || intialState)) {
      window.kitabooTexFontChange(readerJson.fontSize, readerJson);
    }
    if (readerJson.align != undefined && (window.readerExistingJson.align != readerJson.align || intialState)) {
      window.kitabooTextAlignChange(readerJson.align, readerJson);
    }
    if (readerJson.lineSpacing != undefined && (window.readerExistingJson.lineSpacing != readerJson.lineSpacing || intialState)) {
      window.kitaboosetLineHeight(readerJson.lineSpacing, readerJson);
    }
    if (readerJson.margin != undefined && (window.readerExistingJson.margin != readerJson.margin || intialState)) {
      window.kitabooMarginChange(readerJson.margin, readerJson);
    }
    if (readerJson.readingMode != undefined && (window.readerExistingJson.readingMode != readerJson.readingMode || intialState)) {
      window.kitabooSwitchDayNightMode(readerJson.readingMode, readerJson);
    }
    window.readerExistingJson = readerJson;
  }


  window.kitabooMarginChange = function (option, json) {
    if (option == "default") {
      if (typeof window.readerMargin != "string" || window.readerMargin == undefined) {
        window.readerMargin = "narrow"
      }
      $('.customClass[data-type="header"], .customClass[data-type="paragraph"], .customClass[data-type="tablesNew"]').attr('data-pagemargin', window.readerMargin);
    } else {
      $('.customClass[data-type="header"], .customClass[data-type="paragraph"], .customClass[data-type="tablesNew"]').attr('data-pagemargin', option);
    }
  }

  window.kitaboosetLineHeight = function (readerlineheight, json) {
    switch (readerlineheight) {
      case 'small':
        $(":root")[0].style.setProperty('--readerLineheight', 1.4);
        break;

      case 'medium':
        $(":root")[0].style.setProperty('--readerLineheight', 1.6);
        break;

      case 'large':
        $(":root")[0].style.setProperty('--readerLineheight', 1.8);
        break;
    }
    $('body').addClass('readerLineheight');
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
    if (readerlineheight == 'default') {
      $("body").removeClass('readerLineheight');
    }
  }
  window.kitaboosetFontFamily = function (fontfamily, json) {
    $(":root")[0].style.setProperty('--readerfontFamily', fontfamily);
    $('body').addClass('readerfontFamily');
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
    if (fontfamily == 'default') {
      $("body").removeClass('readerfontFamily');
    }
  }

  window.kitabooSwitchMode = function (mode, modeBackground, modeForeground) {
    $(":root")[0].style.setProperty("--dayNightMode-background-color", modeBackground);
    $(":root")[0].style.setProperty("--dayNightMode-color", modeForeground);
  }
  window.kitabooSwitchDayNightMode = function (mode, json) {
    console.log("mode");
    if (json != undefined && json.modeBackground != undefined && json.modeForeground != undefined) {
      var modeBackground = json.modeBackground;
      var modeForeground = json.modeForeground;
    } else {
      var modeBackground = "";
      var modeForeground = "";

      switch (mode) {
        case 'night':
          modeBackground = "#000000";
          modeForeground = "#FEFEFE";
          break;

        case 'day':
          modeBackground = "#FFFFFF";
          modeForeground = "#333333";
          break;

        case 'sepia':
          modeBackground = "#EEE9D7";
          modeForeground = "#804715";
          break;
      }
    }
    window.kitabooSwitchMode(mode, modeBackground, modeForeground);
    $("body").addClass('dayNightMode');
    if (mode == 'default') {
      $("body").removeClass('dayNightMode');
    }
  }
  window.kitabooTextAlignChange = function (option, json) {
    console.log(option);
    $(":root")[0].style.setProperty("--text_align", option);
    $("body").addClass('reader_text-align');
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
    if (option == 'default') {
      $("body").removeClass('reader_text-align');
    }
  }

  window.kitabooTexFontChange = function (font_size, json) {
    $(":root")[0].style.setProperty("--font_size", font_size);
    $("body").addClass('reader_font-size');
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
    if (font_size == 'default') {
      $("body").removeClass('reader_font-size');
    }
    if (font_size == 'xx-large') {
      $('.reader_font-size .sc-button-holder').addClass('reader_font_pading');
      $('.reader_font-size .correction .inputbox-selected').addClass('reader_font_pading');
      $('.reader_font-size .paragraph-container.blockquote').addClass('reader_font_pading');
    } else {
      $('.reader_font-size .sc-button-holder').removeClass('reader_font_pading');
      $('.reader_font-size .correction .inputbox-selected').removeClass('reader_font_pading');
      $('.reader_font-size .paragraph-container.blockquote').removeClass('reader_font_pading');
    }
  }

  window.kitabooTexFontSizeChange = function (font_size, json) {
    console.log(font_size);
    var tempFontSize = ""
    switch (font_size) {
      case "1":
        tempFontSize = "small"
        break;
      case "2":
        tempFontSize = "medium"
        break;
      case "3":
        tempFontSize = "large"
        break;
      case "4":
        tempFontSize = "x-large"
        break;
      case "5":
        tempFontSize = "xx-large"
        break;
    }
    window.kitabooTexFontChange(tempFontSize, '');
  }
  window.kitabooResetReaderSetting = function () {
    $("body").removeClass('dayNightMode');
    $("body").removeClass('readerLineheight');
    $("body").removeClass('readerfontFamily');
    $("body").removeClass('reader_text-align');
    $("body").removeClass('reader_font-size');
    $(".reader_font_pading").removeClass('reader_font_pading');
    window.kitabooMarginChange('narrow');
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
  }

  //*************************************************************** */
  //**************************Reader Functionality Settings End***********/
  //*************************************************************** */

  $(window).bind('resize', function () {
    setTimeout(function () {
      // slider_pager_width(true);
      if (navigator.userAgent.match(/(iPad)/i)) {
        videoPreload();
      }
      // audiovideoREsourcing();
    });
    // adjustHeroheaderHeight();
    adjustInlineHtmlPayerSize();
    resizeSlideHeight();
    // defaultSidebarView();
  });
  // $('body').on('click tap touchstart', '.video-js', function(e){
  //   var $video = $(e.currentTarget).find('video');
  //   $video.removeClass('hide-controls');
  //   if($(e.currentTarget).find('.vjs-big-play-button').css('display') === 'block') {
  //     $video.addClass('hide-opacity');
  //     setTimeout(function() {
  //       $video.addClass('hide-controls');
  //       $video.removeClass('hide-opacity');
  //       audiovideoREsourcing();
  //     },500)
  //   }
  // });
  // if ibooks then disable colorbox popup
  if (window.location.href.indexOf('ibooks') === -1) {
    var timeout;
    var lastTap = 0;
    $('.color-box-icon').on('touchend', function (event) {
      var currentTime = new Date().getTime();
      var tapLength = currentTime - lastTap;
      clearTimeout(timeout);
      if (tapLength < 500 && tapLength > 0) {
        if ($(event.currentTarget).parents().hasClass('slider')) {
          sliderZoomClick(event);
        } else {
          colorboxImageClick(event, $(this).attr('src'));
        }
      }
      lastTap = currentTime;
    });
    $('.color-box-icon').on('dblclick', function (e) {
      if ($(e.currentTarget).parents().hasClass('slider')) {
        sliderZoomClick(e);
      } else {
        colorboxImageClick(e, $(this).attr('src'));
      }

    });
    if (!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)) {
      $('.previewSlider .slider').hover(function (e) {
        $(e.currentTarget).addClass('hover');
      }, function (e) {
        $(e.currentTarget).removeClass('hover');
      })
    }
    if (!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)) {
      $(".video-js").css('font-size', '16px');
    }

    var colorboxImageClick = function (e, imageSrc) {
      e.preventDefault();
      var a = $(e.currentTarget).next()[0].outerHTML;
      $("<img>").attr("src", imageSrc).load(function () {
        var width, height, iskitabooReader = true,
          colorboxHtml;
        width = this.width;
        height = this.height;
        if (window.location.href.indexOf('BOOKS') === -1) {
          iskitabooReader = false;
          colorboxHtml = '<div style="height:' + height + 'px;width:' + width + 'px;"><img src="' + imageSrc + '" class="cboxPhoto" alt="Image"></div>' + $(a)[0].outerHTML;
        } else {
          colorboxHtml = '<img src="' + imageSrc + '" class="cboxPhoto" alt="Image">' + $(a)[0].outerHTML;
        }
        $.colorbox({
          html: colorboxHtml,
          onComplete: function () {
            var resizedWidth,
              resizedHeight,
              imgHeight;
            $('.cboxPhoto').unbind().click($.colorbox.close);
            if (!iskitabooReader) {
              $('#cboxLoadedContent img').parent().css({
                'width': $('#cboxLoadedContent').css('width'),
                'height': $('#cboxLoadedContent').css('height')
              })
            }
            $('#cboxLoadedContent img').load(function () {
              imgHeight = $('#cboxLoadedContent img')[0].height - $('#cboxLoadedContent figcaption').height();
              resizedWidth = (width / height) * (imgHeight);
              resizedHeight = $('#cboxLoadedContent figcaption').height();
              $('#cboxLoadedContent figcaption').css('max-width', resizedWidth + 'px');
              if (resizedHeight !== $('#cboxLoadedContent figcaption').height()) {
                imgHeight = $('#cboxLoadedContent img')[0].height - $('#cboxLoadedContent figcaption').height();
                resizedWidth = (width / height) * (imgHeight);
              }
              $.colorbox.resize({
                innerWidth: resizedWidth,
                innerHeight: $('#cboxLoadedContent img').height()
              })
              if (!iskitabooReader) {
                $('#cboxLoadedContent img').unwrap();
                $('#cboxLoadedContent img').wrap('<div></div>');
                $('#cboxLoadedContent img').parent().css({
                  'width': resizedWidth,
                  'height': imgHeight + 'px'
                })
              }
            })
          },
          maxWidth: '98%',
          maxHeight: '98%',
          transition: 'none',
          onOpen: function () {
            $('html').css({
              overflow: 'hidden'
            });
          },
          onClosed: function () {
            $('html').css({
              overflow: ''
            });
            $('#cboxContent figcaption').remove();
          }
        });
      });
    }
  }

  var sliderZoomClick = function (e) {
    var slide = $(e.currentTarget).parents('.bxslider').find('>li:not(".bx-clone")'),
      data = [],
      mediaSrc,
      sliderParent = $(e.currentTarget).parents('.slider-parent'),
      currentSlideIndex = slide.index($(e.currentTarget).parents('li'));
    $(slide).each(function (index, element) {
      if ($(element).find('img').length === 0) {
        if ($(element).find('video').length === 0) {
          mediaSrc = $(element).find('iframe').attr('src');
        } else {
          mediaSrc = $(element).find('video').parent().attr('src');
        }
      } else {
        mediaSrc = $(element).find('img').attr('src');
      }

      var figcaption = $(element).find('figcaption').html(),
        thumbData = {},
        div;
      thumbData.src = mediaSrc;
      thumbData.thumb = $(sliderParent.find('.custom-pager')[index]).find('img').attr('src');
      thumbData.subHtml = figcaption;
      if ($(element).find('video').length !== 0) {
        div = document.createElement('div');
        $(div).append($(element).find('video').clone())
        $(div).find('video').addClass('lg-html5').addClass('video-js vjs-default-skin vjs-big-play-centered').removeClass('vjs-tech').removeAttr('src');
        $(div).find(".video-js").css('font-size', 'x-small');
        thumbData.html = $(div).html()
      }
      data.push(thumbData);
    });

    $(e.currentTarget).lightGallery({
      selector: '.lightSlider li',
      loop: false,
      counter: false,
      download: false,
      autoplayControls: false,
      progressBar: false,
      pullCaptionUp: true,
      showThumbByDefault: true,
      thumbnail: true,
      toogleThumb: false,
      thumbWidth: 45,
      thumbContHeight: 50,
      thumbMargin: 1,
      currentPagerPosition: 'middel',
      fullScreen: false,
      zoom: false,
      subHtmlSelectorRelative: true,
      controls: false,
      dynamic: true,
      dynamicEl: data,
      videojs: true,
      imagejs: true,
      index: currentSlideIndex
    });
  }

  document.addEventListener('play', function (e) {

    $('video').not(e.target).trigger('pause');
    $('audio').not(e.target).each(function() {
      $(this)
        .trigger('pause')                               
        .removeClass('playing')                         
        .find('.playing').removeClass('playing')  
        .end()
        .parents('.playing').removeClass('playing');  
    });

  }, true);
  if ($('.container-fluid').length !== 0) {
    window.parent.$('#loader').hide();
    $('#preventFluctuateDiv').show();
    // $('#loader').show();
    $('body').css('overflow', 'hidden');
    $(window).load(function () {
      $('#loader').hide();
      $('body').css('overflow', '');
      $("body").scrollTop(window.parent.scrollPosition);
    });
  }

  /* activate pause for lightbulb video if scrolled out of viewport */
  var check = function () {
    $('audio').each(function () {
      //$(this)[0].pause(); // Stop playing
    });

    $('video').each(function () {
      var visible = $(this).isOnScreen(0.5, 0.5);
      if (visible) {
        //$(this)[0].play(); // uncommet this line to start auto playing of videos
      } else {
        $(this)[0].pause();
      }
    });

    /* fixed for youtube pause video when scroll */
    $('.video-iframe-container').each(function () {
      var visible = $(this).isOnScreen(0.5, 0.5);
      var src = $(this)[0].getAttribute('src');
      if (src && src.indexOf('youtube.com/embed') != -1 && !visible) {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      }
      // else if(src && src.indexOf('vimeo.com') != -1 && !visible){
      //   // let iframe = $(this)[0];
      //   let player = $f(this);
      //   // player.pause();
      //   player.api("pause");
      // }
    });
  }

  $(window).on('scroll', function () {
    $('.audiojs').each(function () {
      //$(this)[0].pause(); // Stop playing
      var visible = $(this).isOnScreen(0.5, 0.5);
      if (!visible) {
        var attr = $(this).find('audio').parents('.customClass').find('.component-holder').attr("playinbackground");
        if (attr && !JSON.parse(attr)) {
          // if ($(this).parents(".ITCForm").length >= 1) {
            $(this).find('audio')[0].pause();
            $(this).removeClass('playing').find('.playing').removeClass('playing');
          // } else {
          //   $(this).find('audio')[0].pause();
          // }
        }
      }
    });

    $('video').each(function () {
      var visible = $(this).isOnScreen(0.5, 0.5);
      if (!visible) {
        $(this)[0].pause();
      }
    });

    /* fixed for youtube pause video when scroll */
    $('.video-iframe-container').each(function () {
      var visible = $(this).isOnScreen(0.5, 0.5);
      var src = $(this)[0].getAttribute('src');
      if (src && src.indexOf('youtube.com/embed') != -1 && !visible) {
        $(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
      }
      // else if(src && src.indexOf('vimeo.com') != -1 && !visible){
      //   // let iframe = $(this)[0];
      //   let player = $f(this);
      //   // player.pause();
      //   player.api("pause");
      // }
    });
  });

  /*var debounced = check.debounce(50);
  $(window).on('scroll', debounced);*/
  if ($('.container-fluid').length !== 0) {
    var getQueryVariable = function getQueryVariable(variable, query) {
      var query = (!query) ? window.location.search.substring(1) : query,
        i, pair,
        vars = query.split("&");
      // for (i=0;i<vars.length;i++) {
      //     pair = vars[i].split("=");
      //     if (pair[0] == variable) {
      //         return pair[1];
      //     }
      // }
      for (i = 0; i < vars.length; i++) {
        if (variable == 'courseId') {
          pair = vars[i].split("courseId=");
          return pair[1];
        } else if (variable == 'userToken') {
          pair = vars[i + 1].split("userToken=");
          return pair[1];
        } else if (variable == 'mode') {
          if (vars.length > 2) {
            pair = vars[i + 2].split("mode=");
            return pair[1];
          } else {
            return undefined;
          }
        }
      }
    }

    var host = window.parent.host,
      courseId = getQueryVariable('courseId'),
      userToken = getQueryVariable('userToken'),
      fetchPageUrl = '/services/htmlEditorServices/fetchPage/courseId/pageId/userToken',
      fetchTOCUrl = '/services/htmlEditorServices/fetchTOC/courseId/userToken',
      pages,
      currentIndex = $('.page-end').length - 1;


    fetchPageUrl = fetchPageUrl.replace('courseId', courseId).replace('userToken', userToken);
    fetchTOCUrl = fetchTOCUrl.replace('courseId', courseId).replace('userToken', userToken);

    // $.ajax({
    //   method:'GET',
    //   url: host + fetchTOCUrl,
    //   success: function(response)
    //   {
    //     pages = response;
    //   },
    //   error: function(data)
    //   {

    //   }
    // });
    $(document).ajaxStart(function () {
      $('#loader').css('display', 'block');
      $('body').css('overflow', 'hidden');
    });
    $(document).ajaxStop(function () {
      setTimeout(function () {
        $('#loader').css('display', 'none');
        $('body').css('overflow', '');
        $("#html-interactivity-valid").modal('hide');
      }, 1000);
    });
    var frame = window.parent.$('.previewed-html')[0],
      iframedoc = frame.contentDocument || frame.contentWindow.document,
      orgIframe = window.parent.$('.orginal-html').contents().find('.row-fluid');
    var loadPageContentOnScroll = function loadPageContentOnScroll() {
      var wrap = $('.preview-container')[0],
        dataContainer = $('.preview-container .row-fluid')[0],
        contentHeight = wrap.offsetHeight,
        y = window.pageYOffset + window.innerHeight,
        startString = "<body class='white_center_bg_main' tabindex='0' style='-ms-user-select:text;'>";
      if (y >= contentHeight) {
        return;
        // Ajax call to get more dynamic data goes here
        // currentIndex++;
        // if(currentIndex >= pages.length) {
        // }
        // // window.parent.$('#loader').show();
        // $.ajax({
        //   url: host + fetchPageUrl.replace('pageId', pages[currentIndex].pageId),
        //   type: "GET",
        //   cache: false,
        //   async: false,
        //   processData:false,
        //   success: function(data)
        //   {
        //     var scrollPosition = $("body").scrollTop(),
        //       previewHtml;
        //     if(data.previewHtml.indexOf(startString) !== -1) {
        //       previewHtml = data.previewHtml.slice(data.previewHtml.indexOf(startString) + startString.length, data.previewHtml.indexOf("</body>"));
        //     } else {
        //       previewHtml = data.previewHtml;
        //     }
        //     orgIframe.text(orgIframe.text() + previewHtml + '<div class="clearfix page-end" style="margin:0px; padding:0px"></div><hr>');

        //     iframedoc.open();
        //       iframedoc.writeln(window.parent.tillBody + '<div class="container-fluid preview-container"><div class="row-fluid">' + orgIframe.text() + '</div></div>' + window.parent.afteBody);
        //       iframedoc.close();

        //       window.parent.scrollPosition = scrollPosition;
        //   },
        //   error: function(data)
        //   {
        //     window.parent.$('#loader').hide();
        //   }
        // });
      }
    }
    $(window).on('scroll', loadPageContentOnScroll);
  } else {
    // $('.slideshow img').attr('src', function(){
    //  return this.src + '?isKitaboo=true';
    // })
  }
  $('.image-source').parents('.flex-container').not($('.video-source').parents('.flex-container')).addClass('flexible');

  window.stopAudioVideo = function () {
    console.log('stopAudioVideostopAudioVideostopAudioVideostopAudioVideostopAudioVideostopAudioVideo');
    
    $('audio').each(function (index, item) {
      this.pause(); // Stop playing
      item.currentTime = 0;  
      $(item).removeClass('playing').parents('.playing').removeClass('playing');
    });
    $('video').each(function (index, item) {
      item.currentTime = 0;  
      this.pause(); // Stop playing
    });
    
    $('.video-iframe-container').each(function () {
			var src = $(this)[0].getAttribute('src');
			if (src && src.indexOf('youtube.com/embed') != -1) {
				$(this)[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			}
		});

  };

  closeAllModals = function () {
    $.colorbox.close();
    $('.external-html-template [data-dismiss="modal"]').click();
    $('.lg-close').click();
  }
  //comment for font stye
  // $('[style]').each(function(index, value) {
  //   var styleAttr = $(value).attr('style');


  //   if(styleAttr.indexOf('font-size') !== -1) {

  //     $(value).css('font-size', 'inherit');
  //     // if($(value).hasClass("video-js")){$(value).css('font-size', 'inherit !important');}
  //     //set vedio progress bar for video dimension changes
  //       var style=$("figure").css("width");
  //       if(style >= "200px"){
  //       $(value).css('font-size', 'x-small');
  //     }
  //     if(Number($(value).css('font-size').replace('px','')) >= 32) {
  //               $(value).css('line-height', 1.2);
  //           } else {
  //               $(value).css('line-height', 1.5);
  //           }
  //   }
  //   if(styleAttr.indexOf('line-height') !== -1) {
  //     if(Number($(value).css('font-size').replace('px','')) >= 32) {
  //               $(value).css('line-height', 1.2);
  //           } else {
  //               $(value).css('line-height', 1.5);
  //           }
  //   }
  // });

  var changeInlineHtmlPayerLink = function () {
    
    $('.html-interactivity').each(function (index, value) {

      var a = $(value).attr('data-link'),
        b,
        kitaboo_authoring = 'kitaboo_authoring',
        kitaboo_authoring_index = a.indexOf('kitaboo_authoring') + kitaboo_authoring.length;
      var checked = a.substring(kitaboo_authoring_index + 1, a.length);
      var partial = checked.substring(checked.indexOf('/'), a.length);

      var getQueryVariable = function getQueryVariable(variable, query) {
        var query = (!query) ? window.location.search.substring(1) : query,
          i, pair,
          vars = query.split("&");
        // for (i=0;i<vars.length;i++) {
        //     pair = vars[i].split("=");
        //     if (pair[0] == variable) {
        //         return pair[1];
        //     }
        // }
        for (i = 0; i < vars.length; i++) {
          if (variable == 'courseId') {
            pair = vars[i].split("courseId=");
            return pair[1];
          } else if (variable == 'userToken') {
            pair = vars[i + 1].split("userToken=");
            return pair[1];
          } else if (variable == 'mode') {
            if (vars.length > 2) {
              pair = vars[i + 2].split("mode=");
              return pair[1];
            } else {
              return undefined;
            }
          }
        }
      }

      if (window.location.search == "" || window.parent.client == 'CL') {
        b = a;
      } else {
        b = a.substring(0, kitaboo_authoring_index + 1) + getQueryVariable('userToken') + partial;
      }

      // if (window.location.search == "" || window.parent.client == 'CL' || getQueryVariable('userToken') !== undefined )  {
          $(value).attr('data-link', b);
      // }

      if ($(value).find('object').length !== 0) {
        // $(value).find('object').attr('data', $(value).attr("data-link"));
        var url = $(value).attr("data-link");
        var clone = $(value).find('object').clone();
        var parent = $(value).find('object').parent();
        clone.attr('data', url);
        clone.attr('data-htmlurl', url);
        $(value).find('object').remove();
        parent.append(clone);
      }



    });
  }
  changeInlineHtmlPayerLink();
  if (navigator.userAgent.match(/iPad/i) || navigator.platform.match(/iPhone/i)) {
    $('.external-html-template .modal-body').css('overflow', 'auto');
  }
  $('.inline-play-container .modal-header .icon-Close').on('click touch', function (event) {
    event.stopPropagation();
    $(event.currentTarget).parents('.html-interactivity').find('.inline-play-container').addClass('hide-img');
    $(event.currentTarget).parents('.html-interactivity').find('.html-interactive-content').removeClass('hide-img');
  });

  if (navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)/i)) {
    $('[data-link]').each(function (index, value) {
      if ($(value).find('object').length === 0) {
        $(value).find('.html-interactive-content').append('<a href="' + $(value).attr("data-link") + '"></a>');
      } else {
        //?isKitaboo=true -- avoid default popup from appearing in kitaboo reader
        $(value).find('object').attr('data', $(value).attr("data-link"));
      }
      $(value).removeAttr('data-link');
    });
    $('.htmlStyleSet').each(function (index, item) {
      if ($(this).find('object').length > 0) {
        $(this).find('.html-interactive-content').hide();
      }
    });
    $('.htmlStyleSet').click(function (event) {
      if ($(event.currentTarget).find('object').length === 0) {
        /* passing parameter to iphone, ipad, ipod, andriod for activity animation */
        // $(event.currentTarget).find('.html-interactive-content a')[0].click();
        srollTop = $(window.frameElement).parents('#scrolled-content-frame').scrollTop();
        srollTopBody = $(window.frameElement).parents('#maincontainer').scrollTop();
        height = $(window.frameElement).css('height');
        /***end**/
        $($(window.frameElement).parents('#myController').find('header')[0]).children('#second_menu').children().find('.device-holder').children('span').addClass('frominteractivity');
        $($(window.frameElement).parents('#myController').find('header')[0]).children('#second_menu').children().find('.device-holder').children('button').addClass('frominteractivity');

        $('#html-loader').show();
        //?isKitaboo=true -- avoid default popup from appearing in kitaboo reader
        var htmlIntLink = $(event.currentTarget).find('.html-interactivity').data('link');
        if (typeof htmlIntLink == "undefined") {
          htmlIntLink = $(event.currentTarget).find('.html-interactivity').find('a').attr('href')
        }
        $('#external-html-template iframe').attr('src', htmlIntLink);
        $('.external-html-template .icon-Collapse').removeClass('icon-Collapse').addClass('icon-Expand');
        $('.external-html-template .modal-dialog').removeClass('default-modal-dim').addClass('full-modal-dim');

        $(window.frameElement).parents('#scrolled-content-frame').scrollTop(0).css('overflow-y', 'hidden');
        /***end**/
        $('#external-html-template').modal('show');
        $('#html-loader').hide();
      } else {
        if ($(event.currentTarget).find('.html-interactive-content').hasClass('hide-img')) {
          return;
        }
        // $(event.currentTarget).find('.inline-play-container').css('width', $(event.currentTarget).find('.html-interactive-content').css('width'));
        $(event.currentTarget).find('.inline-play-container').css('height', $(event.currentTarget).find('.html-interactive-content').css('height'));
        $(event.currentTarget).find('.inline-play-container').css('min-height', '500px');
        $(event.currentTarget).find('.inline-play-container').removeClass('hide-img');
        $(event.currentTarget).find('.html-interactive-content').addClass('hide-img');
      }
      $('.html-inline-loader').hide();
    });
  } else {
    $('.htmlStyleSet').each(function (index, item) {
      if ($(this).find('object').length > 0) {
        $(this).find('.html-interactive-content').hide();
      }
    });
    $('.htmlStyleSet').click(function (event) {
      // $('.attempts-message').text('Please try again');
      if ($(event.currentTarget).find('object').length === 0) {
        /***Save scrolltop of scrolled-content-frame for readium***/
        /***Save scrolltop of maincontainer for kitaboo reader***/
        srollTop = $(window.frameElement).parents('#scrolled-content-frame').scrollTop();
        srollTopBody = $(window.frameElement).parents('#maincontainer').scrollTop();
        height = $(window.frameElement).css('height');
        /***end**/
        $($(window.frameElement).parents('#myController').find('header')[0]).children('#second_menu').children().find('.device-holder').children('span').addClass('frominteractivity');
        $($(window.frameElement).parents('#myController').find('header')[0]).children('#second_menu').children().find('.device-holder').children('button').addClass('frominteractivity');

        $('#html-loader').show();
        //?isKitaboo=true -- avoid default popup from appearing in kitaboo reader
        $('#external-html-template iframe').attr('src', $(event.currentTarget).find('.html-interactivity').data('link'));
        $('.external-html-template .icon-Collapse').removeClass('icon-Collapse').addClass('icon-Expand');
        $('.external-html-template .modal-dialog').removeClass('default-modal-dim').addClass('full-modal-dim');
        /***Set iframe height to 100vh and scrolled-content-frame scroll top to zero***/
        // if($(window.frameElement).parents('#preview').hasClass('tablet-port')){
        //    $(window.frameElement).css({
        //   'height': '95vh'
        //     }); 
        // }
        // else if($(window.frameElement).parents('#preview').hasClass('tablet-land')){
        //   $(window.frameElement).css({
        //   'height': '100vh'
        //     });
        // }
        // else if($(window.frameElement).parents('#preview').hasClass('mobile-port')){
        //   $(window.frameElement).css({
        //   'height': '90vh'
        //     });
        // }
        // else if($(window.frameElement).parents('#preview').hasClass('mobile-land')){
        //   $(window.frameElement).css({
        //   'height': '59vh'
        //     });
        //     }
        //   else{
        //     $(window.frameElement).css({
        //   'height': '100vh'
        //     });
        //   }

        $(window.frameElement).parents('#scrolled-content-frame').scrollTop(0).css('overflow-y', 'hidden');
        /***end**/
        $('#external-html-template').modal('show');
        $('#html-loader').hide();
        $('.html-inline-loader').hide();
      } else {
        if ($(event.currentTarget).find('.html-interactive-content').hasClass('hide-img')) {
          return;
        }
        $('.html-inline-loader').hide();
        $('#html-loader').hide();
        // $(event.currentTarget).find('.html-inline-loader').show();
        $(event.currentTarget).find('.inline-play-container').css('width', '100%');
        $(event.currentTarget).find('.inline-play-container').css('height', $(event.currentTarget).find('.html-interactive-content').css('height'));
        $(event.currentTarget).find('.inline-play-container').css('min-height', '500px');
        $(event.currentTarget).find('.inline-play-container').removeClass('hide-img');
        $(event.currentTarget).find('.html-interactive-content').addClass('hide-img');
      }
      $('.html-inline-loader').hide();
      $(event.currentTarget).parents('.row-fluid.row-fluid-margin').css('margin', '0');
      $(event.currentTarget).parents('.row-fluid.row-fluid-margin').find('.customClass').css('display', 'none');
      $(window.frameElement).parents('#myController').find('.components-panel.newTocPanel').hide();
    });

    $('#external-html-template').on('hidden.bs.modal', function () {
      $('#external-html-template iframe').attr('src', 'about:blank');
      /***Set iframe height to original height and scrolled-content-frame & maincontainer scroll top to original position***/
      // $(window.frameElement).parents('#scrolled-content-frame').scrollTop(srollTop).css('overflow-y',''),
      //     $(window.frameElement).css({
      //   'height': ''
      //     }),
      // $(window.frameElement).parents('#maincontainer').scrollTop(srollTopBody);
      /***end**/
    });
    $('.external-html-template .icon-Expand').off('click touch').click(function (event) {

      if ($(event.currentTarget).hasClass('icon-Expand')) {

        $('.external-html-template .modal-dialog').removeClass('default-modal-dim').addClass('full-modal-dim');
        $(event.currentTarget).removeClass('icon-Expand').addClass('icon-Collapse');
      } else {

        $('.external-html-template .modal-dialog').removeClass('full-modal-dim').addClass('default-modal-dim');
        $(event.currentTarget).removeClass('icon-Collapse').addClass('icon-Expand');
      }
    });
    $('.external-html-template .icon-Close').on('click touch', function () {
      $($(window.frameElement).parents('#myController').find('header')[0]).children('#second_menu').children().find('.device-holder').children('span,button').removeClass('frominteractivity');
      $(event.currentTarget).parents('.row-fluid.row-fluid-margin').css('margin', '');
      $(event.currentTarget).parents('.row-fluid.row-fluid-margin').find('.customClass').css('display', 'block');
      $(window.frameElement).parents('#myController').find('.components-panel.newTocPanel').show();
    })
  }
  window.addEventListener('load', function () {
    var debounced = check.debounce(50);
    $(window).on('scroll', debounced);
    resizeSlideHeight();
  });
  // window.addEventListener('load',function(){
  window.addEventListener("message", iframeMessage, false);
  onLocalizationLoad();


  $(".authoring-div").each(function () {
    var temp = $(this).find('.reset'),
      corr = $(this).find('.correction-reset'),
      fib = $(this).find('.fib-reset'),
      highlght = $(this).find('.highLight-reset'),
      imgLbl = $(this).find('.imgLabel-reset'),
      mtp = $(this).find('.mtp-reset'),
      mcq = $(this).find('.mcq-reset'),
      srtng = $(this).find('.sorting-reset'),
      dataType = $(this).attr('data-type'),
      booleanChk = false,
      objData = '';

    switch (dataType) {
      case 'fill-in-the-blank':
        booleanChk = fib.length;
        objData = fib;
        break;
      case 'multiple-choice-template':
        booleanChk = mcq.length;
        objData = mcq;
        break;
      case 'true-false-template':
        booleanChk = mcq.length;
        objData = mcq;
        break;
      case 'correction':
        booleanChk = corr.length;
        objData = corr;
        break;
      case 'imagelabelling':
        booleanChk = imgLbl.length;
        objData = imgLbl;
        break;
      case 'highlight':
        booleanChk = highlght.length;
        objData = highlght;
        break;
      case 'sorting':
        booleanChk = srtng.length;
        objData = srtng;
        break;
      case 'match-the-pairs':
        booleanChk = mtp.length;
        objData = mtp;
        break;
      default:
        booleanChk = 0;
        objData = '';
    }

    // onLocalizationLoad();

    // if(temp!==undefined && temp.length==0){
    //   if(booleanChk == 0) {
    //     var div=document.createElement('div');
    //     $(div).addClass('resetButton btn reset reset-btn');
    //     $(div).html('Reset');
    //     $(div).attr('data-localize','reset_me');
    //     if(window.localeJson){
    //       $(div).html(window.localeJson['reset_me']);
    //       $(div).attr('title',window.localeJson['reset_me']);
    //       onLocalizationLoad();
    //     }
    //     $(this).find('.btns').prepend(div);
    //   }
    //   else{ 
    //     objData.remove();
    //     var div=document.createElement('div');
    //     $(div).addClass('resetButton btn reset reset-btn');
    //     $(div).html('Reset');
    //     $(div).attr('data-localize','reset_me');
    //     if(window.localeJson){
    //       $(div).html(window.localeJson['reset_me']);
    //       $(div).attr('title',window.localeJson['reset_me']);
    //       onLocalizationLoad();
    //     }
    //     $(this).find('.btns').prepend(div);
    //   }
    // }
    $(".video-js").css("font-size", "x-small");
    $('.kaltura-youtube-container').parents('.slide_img_editor').css('display', 'contents');
  });
  // attempt issue after reload
  $(".authoring-div").each(function () {
    var attemptissue = $(this).find('.submit-btn');
    var attemptissue1 = $(attemptissue).attr('data-no-of-attempts');
    if (attemptissue1 == undefined) {
      $(this).find('.submit-btn').attr('data-no-of-attempts', '3');
    }
  });
  // reset function for mcq
  // $('.multiple-choice .reset').off('click').click(function(event){
  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   $form.trigger('reset');
  //   $form.find('.mcq-body').find(".iradio").removeClass('checked');
  //   if($form.find(".mcq-options").prev().hasClass("checked")){    
  //      $form.find(".mcq-options").prev().removeClass("checked");   
  //     }
  // });
  //  // reset function for fib
  // $('.fib .reset').off('click').click(function(event){

  //   event.preventDefault();
  //   var $form = $(event.target).parents('form');
  //   if(click==true){
  //     $form.find('input').each(function(e){
  //         if(!$(this).hasClass('correct')){
  //          $(this).val('');
  //         }
  //     })
  //     $form.find("select").each(function(e){
  //         if(!$(this).hasClass('correct')){
  //           this.selectedIndex = 0;
  //           $(this).easyDropDown('select',0);
  //           $($(this).parents('.selectbox').find('span.selected')[0]).text(window.localeJson['select_answer']);
  //         }
  //     });   

  //   }else{
  //     $form.trigger('reset');
  //     $form.find("select").each(function(e){
  //         if(!$(this).hasClass('correct')){
  //           this.selectedIndex = 0;
  //           $(this).easyDropDown('select',0);
  //           if(window.localeJson)
  //           $($(this).parents('.selectbox').find('span.selected')[0]).text(window.localeJson['select_answer']);
  //           else
  //           $($(this).parents('.selectbox').find('span.selected')[0]).text("Select Answer");

  //         }
  //     });
  //     // if(window.localeJson){
  //     //   if($('.fib-with-option .selectbox').length > 0) {
  //     //     $.each($('.fib-with-option .selectbox'),function(index, obj){
  //     //       $($(obj).find('span.selected')[0]).text(window.localeJson['select_answer']);
  //     //       $($(obj).find('ul li')[0]).text(window.localeJson['select_answer']);
  //     //     });
  //     //   }
  //     // }
  //   }
  //   $form.find('.incorrect').removeClass('incorrect');
  //   $form.find('.incorrect-tick').remove();

  // }); 
  //reset function for mtp
  // $('.mtp .reset').off('click').click(function(event){
  //    event.preventDefault();
  //    var $form = $(event.target).parents('form');
  //    $form.find('.mtp-submit').addClass('disabled');
  //    $form.trigger('reset');


  //    $.each($form.find('.block1:not(.e1correct)').find('.sort-drag').find('input:hidden'), function(index, elem) {
  //        var inputVal = $form.find(elem).val(),
  //            mappedData = inputVal.split('_');

  //        var obj = {
  //            'inputVal': inputVal
  //        };
  //        // if (mappedData[0] !== mappedData[1]) {
  //            $form.find(elem).val(mappedData[0]);
  //                // Getter
  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");

  //                $form.find('#drag-' + mappedData[0]).draggable({
  //                    'disabled': false
  //                }).css('opacity', 1);
  //                $form.find('#drop-' + mappedData[1]).droppable({
  //                    'disabled': false
  //                });
  //                $form.find('#drop-' + mappedData[1]).removeClass('dropped');
  //                $form.find('#drop-' + mappedData[1] + ' .circle-half').css('opacity', 0);
  //                $('#' + inputVal).remove();


  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");
  //                var tempId=$form.find('#drop-' + mappedData[0]).attr("id");
  //                $form.find('path').each(function(){
  //                        var tempPath= $form.find(this).attr("pathid");
  //                      if(tempId===tempPath){
  //                      $form.find(this).remove();

  //                    }

  //                }); 
  //            // }
  //        });
  //    $.each($form.find('.block2:not(.e2correct)').find('.sort-drag').find('input:hidden'), function(index, elem) {
  //        var inputVal = $form.find(elem).val(),
  //            mappedData = inputVal.split('_');

  //        var obj = {
  //            'inputVal': inputVal
  //        };
  //        // if (mappedData[0] !== mappedData[1]) {
  //            $form.find(elem).val(mappedData[0]);
  //                // Getter
  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");

  //                $form.find('#drag-' + mappedData[0]).draggable({
  //                    'disabled': false
  //                }).css('opacity', 1);
  //                $form.find('#drop-' + mappedData[1]).droppable({
  //                    'disabled': false
  //                });
  //                $form.find('#drop-' + mappedData[1]).removeClass('dropped');
  //                $form.find('#drop-' + mappedData[1] + ' .circle-half').css('opacity', 0);
  //                $('#' + inputVal).remove();


  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");
  //                var tempId=$form.find('#drop-' + mappedData[0]).attr("id");
  //                $form.find('path').each(function(){
  //                        var tempPath= $form.find(this).attr("pathid");
  //                      if(tempId===tempPath){
  //                      $form.find(this).remove();

  //                    }

  //                }); 
  //            // }
  //        });
  //    $.each($form.find('.img1 .img11:not(.e1correctbox)').parent().find('.sort-drag').find('input:hidden'), function(index, elem) {
  //        var inputVal = $form.find(elem).val(),
  //            mappedData = inputVal.split('_');

  //        var obj = {
  //            'inputVal': inputVal
  //        };
  //        // if (mappedData[0] !== mappedData[1]) {
  //            $form.find(elem).val(mappedData[0]);
  //                // Getter
  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");

  //                $form.find('#drag-' + mappedData[0]).draggable({
  //                    'disabled': false
  //                }).css('opacity', 1);
  //                $form.find('#drop-' + mappedData[1]).droppable({
  //                    'disabled': false
  //                });
  //                $form.find('#drop-' + mappedData[1]).removeClass('dropped');
  //                $form.find('#drop-' + mappedData[1] + ' .circle-half').css('opacity', 0);
  //                $('#' + inputVal).remove();


  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");
  //                var tempId=$form.find('#drop-' + mappedData[0]).attr("id");
  //                $form.find('path').each(function(){
  //                        var tempPath= $form.find(this).attr("pathid");
  //                      if(tempId===tempPath){
  //                      $form.find(this).remove();

  //                    }

  //                }); 
  //            // }
  //        });
  //    $.each($form.find('.img2 .img22:not(.e2correctbox)').parent().find('.sort-drag').find('input:hidden'), function(index, elem) {
  //        var inputVal = $form.find(elem).val(),
  //            mappedData = inputVal.split('_');

  //        var obj = {
  //            'inputVal': inputVal
  //        };
  //        // if (mappedData[0] !== mappedData[1]) {
  //            $form.find(elem).val(mappedData[0]);
  //                // Getter
  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");

  //                $form.find('#drag-' + mappedData[0]).draggable({
  //                    'disabled': false
  //                }).css('opacity', 1);
  //                $form.find('#drop-' + mappedData[1]).droppable({
  //                    'disabled': false
  //                });
  //                $form.find('#drop-' + mappedData[1]).removeClass('dropped');
  //                $form.find('#drop-' + mappedData[1] + ' .circle-half').css('opacity', 0);
  //                $('#' + inputVal).remove();


  //                var disabled = $form.find('#drag-' + mappedData[0]).draggable("option", "disabled");
  //                var tempId=$form.find('#drop-' + mappedData[0]).attr("id");
  //                $form.find('path').each(function(){
  //                        var tempPath= $form.find(this).attr("pathid");
  //                      if(tempId===tempPath){
  //                      $form.find(this).remove();

  //                    }

  //                }); 
  //        });
  // }) 
  // reset function for Correction
  // $(".correction .reset").off('click').click(function(event){
  //     event.preventDefault();
  //     var $form = $(this).parents('.correction-editor');
  //     $form.find(".strikeWord").each(function(i){
  //         $(this).find('span').each(function(i){
  //                 var cnt = $(this).contents();
  //                     $(this).replaceWith(cnt);
  //             });
  //         var strikeContent=$(this).html();
  //         var temp=$(this).parents(".selectedStrikeWord").children(".correctionText").children().children().hasClass("myWords");
  //         if(temp==false){
  //         $(this).replaceWith(strikeContent);
  //        }
  //     });
  //     $form.find(".inputbox-selected").each(function(i){
  //         var x= $(this).parents(".correctionText");
  //         var y= $(this).parents(".correctionText").parent().children();
  //         if($(this).hasClass("myWords")===false){
  //            $(x).remove(); 
  //            $(y).removeClass('strikeWord');

  //         }    
  //     })     
  // }); 
  // reset function for sorting
  // $('.sorting .reset').off('click').click(function(event){
  //     event.preventDefault();
  //     counter = 0;
  //     var $eventTarget = $(event.target),
  //     $form = $(event.target).parents('form');
  //       if($(this).attr('click',true)){
  //         $form.find(".sort-select").each(function(i){
  //         correctAnswer = $form.find(this).attr('data-id');
  //         currenrAnswer = $form.find(this).next().attr('data-id');
  //               if( $form.find(this).next().hasClass('sort-correct')) {
  //                  $form.find(this).css('opacity', '0.5');

  //               } else {
  //                  $form.find(this).next().remove();
  //                  $form.find(this).parents().removeClass("dropped");
  //                  $form.find(this).parents().css('height','unset');
  //                 $(".added").each(function(i) {
  //                   dragId = $(this).attr('data-id');
  //                   if(correctAnswer === dragId){
  //                   $form.find(this).css('opacity', '1');
  //                   $(this).draggable('enable');
  //                   $form.find(this).addClass("draggable-div ui-draggable");
  //                   $form.find(this).removeClass("added");
  //                   } 
  //                 })

  //               }
  //         })

  //       }else{
  //          $form.find( ".sort-with-row" ).each(function(i){
  //          $(this).find('.draggable-div').remove();
  //          $(this).removeClass("dropped");
  //          $form.find('.preview-sort .inputbox-selected').css('opacity', '1');
  //          $form.find('.preview-sort .inputbox-selected').addClass("draggable-div ui-draggable");
  //          $form.find('.preview-sort .added').draggable('enable');
  //          $form.find('.preview-sort .inputbox-selected').removeClass("added");


  //         })

  //       }
  //    }); 
  // reset function for IL
  // $('.imageLabelling .reset').off('click').click(function(event){
  //   event.preventDefault();
  //       var $eventTarget = $(event.target),
  //       $form = $eventTarget.parents('.image-labelling-form');
  //       if($(this).attr('click',true)){
  //           $form.find(".tag-number,.square-tag-number").each(function(i){

  //               if($(this).hasClass("labelCorrect")==false){

  //                 var x=$(this).attr("id");
  //                 $(this).parent().removeClass("dropped");
  //                     $(".imageLabelling .labelPreview").css('border', '1px solid #000');
  //             var y=$(event.currentTarget).parents(".imageLabelling").find('#'+x+'placeholder');
  //             $(y).append(this);
  //             $(this).removeClass("labelCorrect");
  //             $(this).removeClass("labelInCorrect");                
  //               }

  //               $(this).draggable('enable');
  //             });
  //             $form.find(".Text-Container,.square-Text-Container").each(function(i){  

  //               if($(this).hasClass("labelCorrect")==false){

  //                 $(this).parent().removeClass("dropped");
  //             var x=$(this).attr("id");
  //             var y=$(event.currentTarget).parents(".imageLabelling").find('#'+x+'placeholder1');
  //             $(y).prepend(this);
  //             $(this).removeClass("labelCorrect");
  //             $(this).removeClass("labelInCorrect");  
  //               }

  //               $(this).draggable('enable');

  //             });
  //       }else{
  //         $form.find(".tag-number,.square-tag-number").each(function(i){
  //           var x=$(this).attr("id");
  //           var y=$(event.currentTarget).parents(".imageLabelling").find('#'+x+'placeholder');
  //           $(y).append(this);
  //           $(this).removeClass("labelCorrect");
  //           $(this).removeClass("labelInCorrect"); 
  //               $form.find(".dropped").css('border', '1px solid #000');
  //               $(this).draggable('enable');
  //           $form.find(".dropped").removeClass("dropped");
  //         });
  //         $form.find(".Text-Container,.square-Text-Container").each(function(i){  
  //           $(this).removeClass("labelInCorrect");
  //           var x=$(this).attr("id");
  //           var y=$(event.currentTarget).parents(".imageLabelling").find('#'+x+'placeholder1');
  //           $(y).prepend(this);
  //           $(this).removeClass("labelCorrect");
  //           $(this).removeClass("labelInCorrect"); 
  //           $(this).draggable('enable');
  //           $form.find(".dropped").removeClass("dropped");


  //             });
  //       }
  //   }); 
  $(document).on('click touch', '#vjs-settings-btn', function (event) {

    var isFullScreen = videojs($(event.target).parents('.customClass').find('video')[0]).isFullscreen();

    if (isFullScreen) {
      var source = $(event.target).parents('.customClass').find('.videoSettingPanelOverlay')
      var destination = $(event.target).parents('.customClass').find('.video-js')
      source.detach().appendTo(destination);
    } else {
      var source = $(event.target).parents('.customClass').find('.videoSettingPanelOverlay')
      var destination = $(event.target).parents('.customClass').find('figure')
      source.detach().appendTo(destination);
    }

    if ($(event.target).parents('.customClass').find('#transcript:visible').length) {
      if ($(event.target).parents('.customClass[data-type="clickToReveal"]').length > 0) {
        var videoHeight = $(event.target).parents('.customClass').find('.video-source').height();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', videoHeight - 240 + 'px');
        var descriptionHeight = $(event.target).parents('.customClass').find('.description-text').height();
        $(event.target).parents('.customClass').find('.aboveText .videoSettingPanelOverlay').css('top', descriptionHeight + 40 + 'px');
      } else {
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 250px)');
      }
    } else {
      if ($(event.target).parents('.customClass[data-type="clickToReveal"]').length > 0) {
        var videoHeight = $(event.target).parents('.customClass').find('.video-source').height();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', videoHeight - 40 + 'px');
        // $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 90px)');
      } else {
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 50px)');
      }
    }

    if ($(event.target).parents('.customClass').find('.videoSettingPanelOverlay:visible').length) {
      $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').hide();
    } else {
      $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').show();
    }
  });
  $(document).on('click touch', '.videoSettingPanelOverlayCloseBtn', function (event) {
    $(event.target).parents('.videoSettingPanelOverlay').hide();
  });

  $(document).on('click touch', '.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li', function (event) {
    var trackId = $(event.target).attr('data-trackId');
    if (trackId == undefined) {
      trackId = $(event.target).parents('[data-trackId]').attr('data-trackId');
    }
    var tracks = $(event.target).parents('.customClass').find('video')[0].textTracks;
    for (var i = 0; i < tracks.length; i++) {
      tracks[i].mode = 'hidden';
    }
    tracks[trackId].mode = "showing";
    if (tracks[trackId].label == "Arabic") {
      $(event.target).parents('.customClass').find('#transcript').addClass('rtl');
    } else {
      $(event.target).parents('.customClass').find('#transcript').removeClass('rtl');
    }
    $(event.target).parents('.videoTacksList').find('li').each(function (index, item) {
      $(item).find('span').removeClass('icon-Check');
    });
    $(event.target).parents('.videoTacksList').find('li').eq(trackId).find('span').addClass('icon-Check');

    var video = $(event.target).parents('.customClass').find('video')[0];
    var cues = tracks[trackId].cues;
    var cuesLength = cues.length;
    var trackHTML = '';

    for (var i = 0; i < cuesLength; i++) {
      var dataBegin = cues[i].startTime;
      var cueTime = secondsToTime(cues[i].startTime);
      var cueText = cues[i].text;
      trackHTML += '<div class="transcript-line" data-begin="' + dataBegin + '"> <span class="transcript-timestamp">' + cueTime + '</span> <span class="transcript-text">' + cueText + '</span> </div> '
    }
    var transcriptContent = '<div class="transcript-body">' + trackHTML + '</div>';
    $(video).parents('.customClass').find('#transcript').html('');
    $(video).parents('.customClass').find('#transcript').append(transcriptContent);

  });

  $(document).on('click touch', '.videoSettingsToggleSection .transcripToggle .slider', function (event) {
    if ($(event.target).parents('.customClass[data-type="clickToReveal"]').length > 0) {
      if ($(event.target).siblings('input')[0].checked) {
        $(event.target).parents('.customClass').find('#transcript').hide();
        var videoHeight = $(event.target).parents('.customClass').find('.video-source').height();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', videoHeight - 40 + 'px');
        // $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 90px)');
      } else {
        $(event.target).parents('.customClass').find('#transcript').removeClass('nghidedata').show();
        var videoHeight = $(event.target).parents('.customClass').find('.video-source').height();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', videoHeight - 240 + 'px');
        var descriptionHeight = $(event.target).parents('.customClass').find('.description-text').height();
        $(event.target).parents('.customClass').find('.aboveText .videoSettingPanelOverlay').css('top', descriptionHeight + 40 + 'px');
        // $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 290px)');
      }
    } else {
      if ($(event.target).siblings('input')[0].checked) {
        $(event.target).parents('.customClass').find('#transcript').hide();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 50px)');
      } else {
        $(event.target).parents('.customClass').find('#transcript').removeClass('nghidedata').show();
        $(event.target).parents('.customClass').find('.videoSettingPanelOverlay').css('height', 'calc(100% - 250px)');
      }
    }
  });

  $(document).on('click touch', '.videoSettingsToggleSection .captionToggle .slider', function (event) {
    var video = $(event.target).parents('.customClass').find('video')[0];

    if ($(event.target).siblings('input')[0].checked) {
      for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = 'hidden';
      }
      var idx = $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li .icon-Check').parent().index();
      $(video).attr('data-resumeCC', idx);
    } else {
      var idx = $(video).attr('data-resumeCC');
      if (idx == undefined) {
        idx = video.textTracks.length - 1;
      }
      for (var i = 0; i < video.textTracks.length; i++) {
        if (i == idx) {
          video.textTracks[i].mode = 'showing';
          // $(event.target).parents('.customClass').find('#transcript').removeClass('rtl');
          $(event.target).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li .icon-Check').removeClass('icon-Check');
          $(event.target).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li span').eq(i).addClass('icon-Check');
        } else {
          video.textTracks[i].mode = 'hidden';
        }
      }
    }
  });

  $(document).on('click', '#transcript .transcript-line', function (event) {
    var video = $(event.target).parents('.customClass').find('video')[0];
    var cueTime = $(event.currentTarget).attr('data-begin');
    videojs(video).player().currentTime(cueTime);
  });

  var getQueryVariable = function getQueryVariable(variable, query) {
    var query = (!query) ? window.location.search.substring(1) : query,
      i, pair,
      vars = query.split("&");
    for (i = 0; i < vars.length; i++) {
      if (variable == 'courseId') {
        pair = vars[i].split("courseId=");
        return pair[1];
      } else if (variable == 'userToken') {
        pair = vars[i + 1].split("userToken=");
        return pair[1];
      } else if (variable == 'mode') {
        if (vars.length > 2) {
          pair = vars[i + 2].split("mode=");
          return pair[1];
        } else {
          return undefined;
        }
      }
    }
  }

  if ($(document).find('.preview-row-container', '.white_center_bg_main').length > 0) {
    if ($("[data-type*='audio']").length > 0 || $("[data-type*='multiple-choice-template']").length > 0 || $("[data-type*='true-false-template']").length > 0 || $("[data-type*='flashcard']").length > 0 || $("[data-type*='clickToReveal']").length > 0) {
      audiojs.events.ready(function () {
        var as = audiojs.createAll();
        audiovideoREsourcing();
      });
      $('audio').each(function (index, item) {
        if ($(item).attr('data-audiosrc') == '#' || $(item).attr('data-audiosrc') == undefined) {
          $(item).parents('.audiojs').find('.play-pause, .scrubber').addClass('blank-audio');
        }
      });
    }

    if ($("[data-type*='video']").length > 0 || $("[data-type*='multiple-choice-template']").length > 0 || $("[data-type*='true-false-template']").length > 0 || $("[data-type*='slideshow']").length > 0 || $("[data-type*='flashcard']").length > 0 || $("[data-type*='clickToReveal']").length > 0) {
      $('.video-js').each(function (index, video) {

        if (video.nodeName == "DIV") {
          var value = video;
          if ($(value).find('video').length !== 0) {
            poster = $(value).find('video').attr('poster') ? $(value).find('video').attr('poster') : '';
            $video = $(value).find('video').addClass('video-js vjs-16-9 vjs-default-skin vjs-big-play-centered').removeClass('vjs-tech').attr({
              'data-setup': '{}',
              'poster': poster
            }).removeAttr('src').attr('controls', 'controls');
            $videoSource = $video.attr('data-correct');
            $video.find('source').attr('src', $videoSource);
            $(value).children().eq(0).remove();
            $(value).prepend($video);
          }
        }
        if (video.nodeName != "DIV") {
          if ($(video).parents('.customClass').find('track').length) {
            // preloadVideoTracks(video);
            var captionEnable = $(video).attr('data-caption-enable') == "true" ? true : false;
            var transcriptEnable = $(video).attr('data-transcript-enable') == "true" ? true : false;
            var trackMainList = $(video).parents('.customClass').find('.tracksPreloadDiv track').clone();
            var transcriptContainer = $(video).parents('.customClass').find('#transcript');

            videojs(video).src($(video).attr('data-videosrc'));
            var player = videojs(video);
            player.on('fullscreenchange', function (e) {
              var isFullScreen = this.isFullscreen_;
              if (isFullScreen) {
                var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                var destination = $(this.el_).parents('.customClass').find('.video-js');
                source.detach().appendTo(destination);
              } else {
                var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                var destination = $(this.el_).parents('.customClass').find('figure');
                source.detach().appendTo(destination);
              }
            });
            player.ready(function () {

              // var video = element.find('video')[0];
              $(video).find('track').remove();
              // var trackMainList = $(video).scope().fieldData.settings.tracks;

              for (var t = 0; t < trackMainList.length; t++) {
                track = document.createElement("track");
                track.kind = "captions";
                track.label = trackMainList[t].label;
                track.dataset.src = trackMainList[t].dataset.src;

                var a = trackMainList[t].dataset.ogSrc;
                var splitArr = a.split('/');
                splitArr[8] = getQueryVariable('userToken');
                var resourceUrl = splitArr.join('/');

                track.src = resourceUrl;
                track.dataset.ogSrc = trackMainList[t].dataset.ogSrc;
                track.dataset.text = trackMainList[t].dataset.text;
                if (t == 0) {
                  track.default = true;
                } else {
                  track.default = false;
                }
                track.addEventListener("load", trackLoaded);
                track.addEventListener("cuechange", trackCueChange);
                video.appendChild(track);
              }

              if (!transcriptEnable) {
                $(transcriptContainer).hide();
              }
              $(video).parents('.customClass').find('.videoSettingsToggleSection .transcripToggle input')[0].checked = transcriptEnable;
              if (captionEnable) {
                for (var i = 0; i < video.textTracks.length; i++) {
                  if (i == video.textTracks.length - 1) {
                    video.textTracks[i].mode = 'showing';
                  } else {
                    video.textTracks[i].mode = 'hidden';
                  }
                }
              } else {
                for (var i = 0; i < video.textTracks.length; i++) {
                  video.textTracks[i].mode = 'hidden';
                }
                $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li span').eq(video.textTracks.length - 1).addClass('icon-Check')
              }
              $(video).parents('.customClass').find('.videoSettingsToggleSection .captionToggle input')[0].checked = captionEnable;
              var trackList = '';
              var tracks = video.textTracks
              for (var i = 0; i < tracks.length; i++) {
                if (tracks[i].mode == "showing") {
                  var span = '<span class="icon-Check"></span>';
                } else {
                  var span = '<span class=""></span>';
                }
                trackList += '<li data-trackId="' + i + '"><p>' + tracks[i].label + '</p>' + span + '</li>';
              }
              $(video).parents('.customClass').find('.videoSettingPanelOverlay').hide();
              $(video).parents('.customClass').find('.videoSettingPanelOverlay').append('<a class="videoSettingPanelOverlayCloseBtn"><span class="icon-Close"></span></a>')
              $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList').html('');
              $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList').append(trackList);
              $(video).parents('.customClass').find('.vjs-settings-button').remove();

              var settingIconTarget = $(video).parents('.customClass').find('.vjs-control-bar .vjs-fullscreen-control');
              $('<div id="vjs-settings-btn" class="vjs-settings-button vjs-control vjs-menu-button icon-Settings"></div>').insertBefore(settingIconTarget);

              // $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoTacksList li').eq(0).trigger('click');
            });


          } else {
            videojs(video).src($(video).attr('data-videosrc'));
            $(video).parents('.customClass').find('.videoSettingPanelOverlay').hide();
            $(video).parents('.customClass').find('#transcript').html('');
            $(video).parents('.customClass').find('.vjs-settings-button').remove();
          }
        }
      });
    }
    audiovideoREsourcing();
  } else {
    audiovideoREsourcing();
  }

  if ($("[data-type*='slideshow']").length > 0) {
    resizeSlideHeight();
  }
  if (window.isGradableActivity) {
    if ($('.style2NavigationBtns').length) {
      $('.style2NavigationBtns').addClass('style2NavBtnsPadding');
    }
  } else {
    if ($('.style2NavigationBtns').length) {
      if ($('.style2NavigationBtns').hasClass('style2NavBtnsPadding')) {
        $('.style2NavigationBtns').removeClass('style2NavBtnsPadding')
      }
    }
  }


});
$(document).ready(function () {
  window.parent.postMessage({
    'player': 'ready'
  }, '*');
  $('.group-interactivity-container.style2 .question-container-box').each((index, item) => {
    let len = $(item).find('.question-container').length;
    $(item).width(len * 100 + "%");
    $(item).css('display','');
    $(item).attr('activeSlide', 1);
    $(item).find('.question-container').css('min-width', 'calc(100% / ' + len + ')').css('max-width', 'calc(100% / ' + len + ')');
    $(item).parents('.group-interactivity-container').find('.style2NavigationBtns .numbersContainer .number').eq(0).addClass('active');
  });

  var customClassObjects = [].slice.call(document.querySelectorAll(".preview-row-container .customClass .headerTitle, .preview-row-container .customClass .header-data"));
  let customClassScrollObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // var pageNo = parseInt($(entry.target).parents('.customClass').attr('data-saved-index').split('-')[1]);
        // var uiid = 'ui-id-' + $(entry.target).parents('.customClass').attr('data-saved-index').split('ui-id-')[1];
        var dataTocUid = $(entry.target).parents('.customClass').attr('data-saved-index');
        if ($(entry.target).parents('.customClass').attr('data-type') == 'chapter-headingNew-h1' || $(entry.target).parents('.customClass').attr('data-type') == 'header') {
          // console.log(dataTocUid);
          $(window.parent.document.body).find('.pageSubContent li').removeClass('activeTocItem');
          $(window.parent.document.body).find('.pageSubContent li[data-toc-uid=' + dataTocUid + ']').addClass('activeTocItem');

                // $(window.parent.document.body).find('.pageSubContent').removeClass('active');
                // $(window.parent.document.body).find('.pageSubContent li[data-toc-uid='+dataTocUid+']').parents('.pageSubContent').addClass('active');
              }		    
            }
          });
        });
      customClassObjects.forEach(function(customClass) {
        customClassScrollObserver.observe(customClass);
      });
      setTimeout(() => {
        if($('.preview-row-container').length){
          $(window.parent.document.body).find('.pageSubContent li').removeClass('activeTocItem');
          $(window.parent.document.body).find('.pageSubContent li').eq(0).addClass('activeTocItem');
        }
        if($('#applyToAllStyleSetting').length){
          var applyAllStyleSettingJson = JSON.parse($('#applyToAllStyleSetting').html());
          processOfflineApplyToAllStyleSetting(applyAllStyleSettingJson);
        }else if(window.applyAllStyleSettingJson != undefined || window.parent.applyAllStyleSettingJson != undefined){
          if(window.applyAllStyleSettingJson != undefined){
            processOfflineApplyToAllStyleSetting(window.applyAllStyleSettingJson);
          }else if(window.parent.applyAllStyleSettingJson != undefined){
            processOfflineApplyToAllStyleSetting(window.parent.applyAllStyleSettingJson);
          }
        }
        if(window.defaultFontName){
          $(":root")[0].style.setProperty('--defaultFont', window.defaultFontName);
          $('body article').addClass('defaultFontName');
        }
        if(window.applyAllStyleSettingJson && window.applyAllStyleSettingJson.defaultFontName){
          $(":root")[0].style.setProperty('--defaultFont', window.applyAllStyleSettingJson.defaultFontName);
          $('body article').addClass('defaultFontName');
        }
        $('.customClass[data-type="multiple-choice-template"] .component-holder.card-style3 .form-row').each(function(idx, itm){
          let color = $(itm).find('label.mcq-options').css('background-color');
          $(itm).css('background-color', color);
          $(itm).find('label.mcq-options').css('background-color', '');
        })
        $('.customClass[data-type="true-false-template"] .component-holder.card-style3 .form-row').each(function(idx, itm){
          let color = $(itm).find('label.mcq-options').css('background-color');
          $(itm).css('background-color', color);
          $(itm).find('label.mcq-options').css('background-color', '');
        })
      }, 500);	
      selectionFix();
      if (window.isGradableActivity) {
        if ($('.customClass[data-type="group-interactivity-template"]').length) {
          $('.customClass[data-type="group-interactivity-template"]').find('.group-interactivity-btn .showMeReset_container').empty();
        }
      }
      if($('body article').parents('.preview-row-container').length){
        $('body article').removeClass('hide');
        $('body .authoringLoader').addClass('hide');
      }
      if (!window.isGradableActivity) {
        $('body article').removeClass('hide');
        $('body .authoringLoader').addClass('hide');
      }
      if (typeof apiHandle != "undefined" && apiHandle == null) {
        $('body article').removeClass('hide');
        $('body .authoringLoader').addClass('hide');
      }
      if (window.gradableActivitySettingsJSON && !window.gradableActivitySettingsJSON.durationEnable) {
        $('body article').find('.groupActivityAssessmentTimingContainer').css('display', 'none');
      }
});     

window.initGradableScreen = function(){
  if(apiHandle && window.isGradableActivity && $('.customClass[data-type="group-interactivity-template"]').length > 0){
    $('body article').hide();
    $('body article').removeClass('hide');
    $('body .authoringLoader').addClass('hide');
    if(!window.gradableActivitySettingsJSON.durationEnable){
      window.gradableActivitySettingsJSON.durationMin = 0;
      window.gradableActivitySettingsJSON.durationSec = 0;
      window.gradableActivitySettingsJSON.ogTime = "0:0";
    }
    let gradableJSON = window.gradableActivitySettingsJSON;
    let mcqCount = $('.customClass[data-type="multiple-choice-template"]').length;
    let fibCount = $('.customClass[data-type="fill-in-the-blank"] .fib-questions .form-row').length;
    let mtpCount = $('.customClass[data-type="match-the-pairs"]').length;
    let ILCount = $('.customClass[data-type="imagelabelling"]').length;
    let highlightCount = $('.customClass[data-type="highlight"] .highLight-questions .form-row').length;
    let ShortLongCount = $('.customClass[data-type="shortLongAns"]').length;
    let identifyTheClipCount = $('.customClass[data-type="identify-the-clip"]').length;
    let correctionCount = $('.customClass[data-type="correction"] .correction-questions .form-row').length;
    let categorizeCount = $('.customClass[data-type="Categorize"]').length;
    let questionCount = mcqCount + fibCount + mtpCount + ILCount + highlightCount + ShortLongCount + correctionCount + identifyTheClipCount + categorizeCount;
    let appendingContainer;

    // $('.group-interactivity-container .group-interactivity-btn .sc-submit.submit-btn').addClass('gradableActivitySubmitBtn');

    if (!gradableJSON.points) {
      gradableJSON['points'] = 0;
    }
    if ($('.preview-row-container').length > 0) {
      appendingContainer = $('.preview-row-container');
    } else {
      appendingContainer = $('body');
    }
    let durationHtml = '';
    if (window.gradableActivitySettingsJSON.durationEnable) {
      durationHtml = `and ` + gradableJSON.durationMin + `.` + gradableJSON.durationSec + ` minutes`
    }
    var parser = new DOMParser();
    var appendhtml = `
    <div class="gradableActivitySummaryContainer">
      <div class="gradableHeaderSection">
        <h3>` + gradableJSON.courseName + `</h3>
        <p>You have 1 attempt ` + durationHtml + ` to complete 
        the assessment.</p>
      </div>
      <div class="gradableBodySection">
        <div class="gradableBox">
          <div class="gradableScoringDetails">
            <div class="pointsItem"><span class="header-kitaboo-icon icon-Feedback"></span><span class="itemDetail"><span class="highlight">` + questionCount + `</span><br />Questions</span></div>
            <div class="pointsItem"><span class="header-kitaboo-icon icon-Total"></span><span class="itemDetail"><span class="highlight">` + gradableJSON.points + `</span> Points<br />Per Question</span></div>
          </div>
          <div class="gradableScoringDetails">
            <div class="pointsItem gradableDuration"><span class="header-kitaboo-icon icon-Duration"></span><span class="itemDetail"><span class="highlight">` + gradableJSON.durationMin + `:` + gradableJSON.durationSec + `</span> min<br />Duration</span></div>
            <div class="pointsItem"><span class="header-kitaboo-icon icon-Total"></span><span class="itemDetail"><span class="highlight">` + (questionCount * gradableJSON.points) + `</span> Points<br />Total Points</span></div>
          </div>
        </div>
        <div class="gradableStartBtnContainer">
          <button class="startGradableActivity">Start Assessment</button>
        </div>
      </div>
    </div>
    `;
    var el = parser.parseFromString(appendhtml, "text/html");
    appendingContainer.append($(el).contents()[0].childNodes[1].childNodes[0]);

    if (!window.gradableActivitySettingsJSON.durationEnable) {
      $('.gradableBox').css("display", "flex");
      $('.gradableBox').css("margin-top", "5%");
      $('.gradableDuration').css("display", "none");
      $('.groupActivityAssessmentTimingContainer').css("display", "none");
      $('.gradableActivitySummaryContainer .gradableBodySection .gradableScoringDetails:nth-child(1)').css("border", "none");
      $('.gradableActivitySummaryContainer .gradableBodySection .gradableScoringDetails:nth-child(2)').css("border-left", "1px solid #D8D8D8");
    }

    $(document).on('click', '.startGradableActivity', function (event) {
      $('body article').show();
      $('.gradableActivitySummaryContainer').remove();
      window.gradableMins = window.gradableActivitySettingsJSON.durationMin;
      window.gradableSec = window.gradableActivitySettingsJSON.durationSec;
      $('.groupActivityAssessmentTimingContainer .minutes').html(window.gradableMins);
      $('.groupActivityAssessmentTimingContainer .seconds').html(window.gradableSec);
      let d = new Date();
      let tm = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      // $('.customClass').attr('activityStartTime', tm);
      // $('.customClass').attr('latencyTime', tm);
      $('.customClass').each(function (index, item) {
        if (!$(item).attr('activityStartTime')) {
          $(item).attr('activityStartTime', tm);
        }
        if (!$(item).attr('latencyTime')) {
          $(item).attr('latencyTime', tm);
        }
      });
      gradableTimingFunction();
      if ($('[data-type="match-the-pairs"]').length) {
        mtpResize();
      }
      if ($('[data-type="fill-in-the-blank"]').length) {
        fibDragDropResizing();
      }
      $(window).trigger('resize');
      setTimeout(() => {
        $("[data-type='flashcard']").each(function () {
          var width = $(this).width();
          $(this).find('.bxslider .slideshowContainer').css('width', (width - 30) + 'px');
        });
      }, 500);
      if($('.customClass[data-type="group-interactivity-template"]').eq(0).find('.group-interactivity-container').hasClass('style2')){
        $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('id', 'activeAssessment');
      }
    });

    // send message to player for Gradable Activity mode  
    if (window.isGradableActivity) {
      var message = {
        "isGradableActivity": window.isGradableActivity ? window.isGradableActivity : false
      }
      window.parent.postMessage(message, "*");
    }
    
  } else {
    $('body article').removeClass('hide');
    $('body .authoringLoader').addClass('hide');
  }
}

window.gradableAssessmentComplete = function(scoObj){
  let appendingContainer;
  let gradableJSON = window.gradableActivitySettingsJSON;
  
  let startTime = window.gradableActivitySettingsJSON.durationMin +":"+ window.gradableActivitySettingsJSON.durationSec;
  let endTime = window.gradableActivitySettingsJSON.ogTime
  if(window.gradableActivitySettingsJSON.durationEnable){
      endTime = window.gradableMins+":"+ window.gradableSec;
  }
  // let endTime = window.gradableMins+":"+ window.gradableSec;
  let finalTime = window.timeDiff(startTime, endTime);
  let totalMarks = Number(scoObj.marks.correct + scoObj.marks.incorrect + scoObj.marks.partialCorrect + scoObj.marks.unanticipated) * window.gradableActivitySettingsJSON.points;
  let subTitle = "You have attempted the asessment in "+ finalTime +" minutes."
  let totalPoints = Math.round(+(window.gradableActivitySettingsJSON.points * scoObj.marks.marks)) +`/`+totalMarks;

  let score = scoObj.marks.correct * scoObj.gradableActivitySettingsJSON.points;
  let maxScore = scoObj.marks.total * scoObj.gradableActivitySettingsJSON.points;
  let passingPercentage = window.gradableActivitySettingsJSON.passingPercentage;
  let percent = +((scoObj.gradableActivitySettingsJSON.points * scoObj.marks.marks)/maxScore) * 100;
  let passingStatus = "failed";
  if(percent >= passingPercentage){
    passingStatus = 'passed';
  }

  let resultObj = {};
  resultObj.courseName = gradableJSON.courseName;
  resultObj.subTitle = subTitle;
  resultObj.correct = scoObj.marks.correct;
  resultObj.incorrect = scoObj.marks.incorrect;
  resultObj.partialCorrect = scoObj.marks.partialCorrect;
  resultObj.unanticipated = scoObj.marks.unanticipated;
  resultObj.finalTime = finalTime;
  resultObj.totalPoints = totalPoints;
  resultObj.showAnswer = gradableJSON.showAnswer;
  resultObj.passingStatus = passingStatus;
  resultObj.correctFeedback = gradableJSON.correctFeedback;
  resultObj.incorrectFeedback = gradableJSON.incorrectFeedback;
  resultObj.manualFeedback = gradableJSON.manualFeedback;
  resultObj.showViewAssessmentBtn = true;
  resultObj.source = 'player';

  window.showGradableResult(resultObj);
  window.clearGradableInterval();
  if (window.isCertificateEnableForCourse) {
    window.createAssessmentCertificate(resultObj, certificateTemplate[certificateTemplate.length-1]);
  }
}

window.createAssessmentCertificate = function (resultObj, certificateObj) {
  var baseUrl = "https://qawidgets.kitaboo.com/";
  if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_US'){
    baseUrl = "https://widgets.kitaboo.com/";
  }else if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_EU'){
    baseUrl = "https://widget.kitaboo.eu/";
  }
  var urlParams = "CAPS/kwidget/services/assessment/certificate";
  var certJSON = JSON.parse(certificateObj.metadata);
  var totalMarks = resultObj.totalPoints.split('/')[1];
  var marksObtained = resultObj.totalPoints.split('/')[0];
  var percentObtained = (marksObtained / totalMarks) * 100;
  var score = Math.round(percentObtained) + '%';
  certificateUserData.passingStatus = resultObj.passingStatus;
  if (certJSON.settings.scoreType == 'cert-grade') {
    var floorScore = Math.round(percentObtained);
    switch (true) {
      case floorScore >= 90 && floorScore <= 100:
        score = 'A+';
        break;
      case floorScore >= 85 && floorScore <= 89:
        score = 'A';
        break;
      case floorScore >= 80 && floorScore <= 84:
        score = 'A-';
        break;
      case floorScore >= 75 && floorScore <= 79:
        score = 'B+';
        break;
      case floorScore >= 70 && floorScore <= 74:
        score = 'B';
        break;
      case floorScore >= 65 && floorScore <= 69:
        score = 'B-';
        break;
      case floorScore >= 60 && floorScore <= 64:
        score = 'C+';
        break;
      case floorScore >= 55 && floorScore <= 59:
        score = 'C';
        break;
      case floorScore >= 50 && floorScore <= 54:
        score = 'C-';
        break;
      case floorScore >= 40 && floorScore <= 49:
        score = 'D';
        break;
      case floorScore >= 0 && floorScore <= 39:
        score = 'F';
        break;
      default:
        score = Math.round(percentObtained) + '%';
        break;
    }
  }
  var date = new Date();
  var data = {
    "courseId": certificateObj.courseID.toString(),
    "courseName": certificateObj.courseName,
    "userFirstName": certificateUserData.userFirstName,
    "userLastName": "",
    "isGradaOrPercentage": certJSON.settings.scoreType == "cert-percentage" ? "percentage" : "grade",
    "courseCompletionScore": score,
    "certificateStyle": certJSON.activeStyle,
    "courseCompletionDate": date.getDate() + ' ' + date.toLocaleString('default', {'month': 'long'}) + ' ' + date.getFullYear(),
    "courseCompletionTime": (date.getHours() < 10? '0':'')+ date.getHours() + ':' + (date.getMinutes() < 10? '0':'')+ date.getMinutes()
  };
  certificateUserData.courseName = certificateObj.courseName;
  certificateUserData.courseCompletionDate = date.getDate() + ' ' + date.toLocaleString('default', {'month': 'long'}) + ' ' + date.getFullYear();
  certificateUserData.courseCompletionTime = (date.getHours() < 10? '0':'')+ date.getHours() + ':' + (date.getMinutes() < 10? '0':'')+ date.getMinutes();
  certificateUserData.isGradaOrPercentage = certJSON.settings.scoreType == "cert-percentage" ? "percentage" : "grade";
  certificateUserData.courseCompletionScore = score;
  certificateUserData.certificateStyle = certJSON.activeStyle;
  certificateUserData.clientId = certificateObj.clientID;
  $.ajax({
    url: baseUrl + urlParams,
    type: 'POST',
    contentType: 'application/json',
    headers: {
      'userToken': certificateUserData.userToken,
      "apiKey": "ActivitySchedularAPIKey"
    },
    data: JSON.stringify(data),

    success: function (responseData) {
      console.log(responseData);
      var resp = responseData.assessmentCertificateList[responseData.assessmentCertificateList.length - 1];
      if (certificateUserData.passingStatus == "passed") {
        $('.viewCertificate').removeClass('hideCertificate');
      } else if (certificateUserData.passingStatus == "failed") {
        if (!(window.gradableActivitySettingsJSON.points && window.gradableActivitySettingsJSON.passingPercentage)) {
          $('.viewCertificate').removeClass('hideCertificate');
        }
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}

window.getCertificateData = function (resultObj) {
  var baseUrl = "https://qawidgets.kitaboo.com/";
  if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_US'){
    baseUrl = "https://widgets.kitaboo.com/";
  }else if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_EU'){
    baseUrl = "https://widget.kitaboo.eu/";
  }
  var urlParams = "CAPS/kwidget/services/assessment/certificate";
  var certJSON = JSON.parse(window.certificateTemplate[1].metadata) ;
  var totalMarks = resultObj.totalPoints.split('/')[1];
  var marksObtained = resultObj.totalPoints.split('/')[0];
  var percentObtained = (marksObtained / totalMarks) * 100;
  var score = Math.round(percentObtained) + '%';
  certificateUserData.passingStatus = resultObj.passingStatus;
  if (certJSON.settings.scoreType == 'cert-grade') {
    var floorScore = Math.round(percentObtained);
    switch (true) {
      case floorScore >= 90 && floorScore <= 100:
        score = 'A+';
        break;
      case floorScore >= 85 && floorScore <= 89:
        score = 'A';
        break;
      case floorScore >= 80 && floorScore <= 84:
        score = 'A-';
        break;
      case floorScore >= 75 && floorScore <= 79:
        score = 'B+';
        break;
      case floorScore >= 70 && floorScore <= 74:
        score = 'B';
        break;
      case floorScore >= 65 && floorScore <= 69:
        score = 'B-';
        break;
      case floorScore >= 60 && floorScore <= 64:
        score = 'C+';
        break;
      case floorScore >= 55 && floorScore <= 59:
        score = 'C';
        break;
      case floorScore >= 50 && floorScore <= 54:
        score = 'C-';
        break;
      case floorScore >= 40 && floorScore <= 49:
        score = 'D';
        break;
      case floorScore >= 0 && floorScore <= 39:
        score = 'F';
        break;
      default:
        score = Math.round(percentObtained) + '%';
        break;
    }
  }
  certificateUserData.courseCompletionScore = score;
  $.ajax({
    url: baseUrl + urlParams,
    type: 'GET',
    contentType: 'application/json',
    headers: {
      'userToken': certificateUserData.userToken,
      "courseId": window.certificateTemplate[window.certificateTemplate.length - 1].courseID,
      "apiKey": "ActivitySchedularAPIKey"
    },
    success: function (responseData) {
      console.log(responseData);
      var resp = responseData.assessmentCertificateList[responseData.assessmentCertificateList.length - 1];
      certificateUserData.courseName = resp.courseName;
      certificateUserData.courseCompletionDate = resp.courseCompletionDate;
      certificateUserData.courseCompletionTime = resp.courseCompletionTime;
      certificateUserData.isGradaOrPercentage = resp.isGradaOrPercentage;
      certificateUserData.certificateStyle = resp.certificateStyle
      certificateUserData.clientId = resp.clientId;
      certificateUserData.userFirstName = resp.userFirstName;
      if (certificateUserData.passingStatus == "passed") {
        $('.viewCertificate').removeClass('hideCertificate');
      } else if (certificateUserData.passingStatus == "failed") {
        if (!(window.gradableActivitySettingsJSON.points && window.gradableActivitySettingsJSON.passingPercentage)) {
          $('.viewCertificate').removeClass('hideCertificate');
        }
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
}

window.showGradableResult = function (resultObj) {
  window.stopAudioVideo();
  $('.gradableActivitySummaryContainer').remove();
  $('body article').hide();
  if ($('.preview-row-container').length > 0) {
    appendingContainer = $('.preview-row-container');
  } else {
    appendingContainer = $('body');
  }

  let tempTime = window.gradableActivitySettingsJSON.durationMin + ":" + window.gradableActivitySettingsJSON.durationSec;
  let timeTaken2 = tempTime;
  if (tempTime != window.gradableActivitySettingsJSON.ogTime) {
    if (resultObj.source == 'player') {
      let temp = window.timeDiff(tempTime, resultObj.finalTime)
      timeTaken2 = window.timeDiff(window.gradableActivitySettingsJSON.ogTime, temp);
    } else {
      timeTaken2 = window.timeDiff(window.gradableActivitySettingsJSON.ogTime, tempTime);
    }
  } else {
    if (resultObj.remainingTime) {
      timeTaken2 = window.timeDiff(window.gradableActivitySettingsJSON.ogTime, resultObj.remainingTime);
    } else {
      timeTaken2 = resultObj.finalTime;
    }
  }
  if (resultObj.showAnswer == "auto") {
    let showUnanticipated = "";
    let minWidth = '';

    if ($('.customClass[data-type="shortLongAns"]').length) {
      minWidth = '25%';
      showUnanticipated = `<div class="pointsItem" style="min-width: ` + minWidth + `; border-right: 1px solid #D8D8D8;"><span class="header-kitaboo-icon icon-partial-Marking"></span><span class="itemDetail"><span class="highlight">` + resultObj.partialCorrect + `</span><br />Partial</span></div>
      <div class="pointsItem" style="min-width: ` + minWidth + `"><span class="header-kitaboo-icon icon-unanticipated"></span><span class="itemDetail"><span class="highlight">` + resultObj.unanticipated + `</span><br />Unanticipated</span></div>`;
    } else {
      minWidth = '33%';
      showUnanticipated = `<div class="pointsItem" style="min-width: ` + minWidth + `"><span class="header-kitaboo-icon icon-partial-Marking"></span><span class="itemDetail"><span class="highlight">` + resultObj.partialCorrect + `</span><br />Partial</span></div>`;
    }
    var parser = new DOMParser();
    var appendhtml = `
    <div class="gradableActivitySummaryContainer">
    <div class="gradableHeaderSection">
      <h3>` + resultObj.courseName + `</h3>
    </div>
    <div class="gradableBodySection">
      <div class="gradableScoringDetails gradableScoringAfterSubmit">
        <div class="pointsItem" style="min-width: ` + minWidth + `"><span class="header-kitaboo-icon icon-Check"></span><span class="itemDetail"><span class="highlight">` + resultObj.correct + `</span><br />Correct</span></div>
        <div class="pointsItem" style="min-width: ` + minWidth + `; border-right: 1px solid #D8D8D8;"><span class="header-kitaboo-icon icon-Close"></span><span class="itemDetail"><span class="highlight">` + resultObj.incorrect + `</span><br />Incorrect</span></div> 
        ` + showUnanticipated + ` 
        <div class="pointsItem gradableDuration" style="min-width: ` + minWidth + `"><span class="header-kitaboo-icon icon-Duration"></span><span class="itemDetail"><span class="highlight">` + timeTaken2 + `</span> min<br />Time Taken</span></div>
        <div class="pointsItem" style="min-width: ` + minWidth + `"><span class="header-kitaboo-icon icon-Total"></span><span class="itemDetail"><span class="highlight">` + resultObj.totalPoints + `</span><br />Your Score/Total Points</span></div>
      </div>
      <div class="gradableStartBtnContainer">
        <!-- <button class="startGradableActivity">Start Assessment</button> -->
      </div>
    </div>
  </div>
  `;
    var el = parser.parseFromString(appendhtml, "text/html");
    appendingContainer.append($(el).contents()[0].childNodes[1].childNodes[0]);
    if (!window.gradableActivitySettingsJSON.durationEnable) {
      $('.gradableScoringAfterSubmit').css("width", "740px");
      $('.gradableBox').css("margin-top", "5%");
      $('.gradableDuration').css("display", "none");
      //  $('.gradableScoringAfterSubmit .pointsItem:nth-child(2)').css("border-right","none");
      //  $('.gradableScoringAfterSubmit .pointsItem:nth-child(3)').css({"border-bottom":"none","margin-left":"2px"});
    }
    if (resultObj.passingStatus == 'failed') {
      if (resultObj.incorrectFeedback == "" && resultObj.totalPoints != '0/0') {
        resultObj.incorrectFeedback = "You have failed the assessment."
        appendingContainer.find(".gradableBodySection .gradableStartBtnContainer").append(`
          <div class="passingFeedback" style="color: red;">` + resultObj.incorrectFeedback + `</div>
        `);
      }
      if (resultObj.totalPoints == '0/0') {
        resultObj.correctFeedback = "You have successfully completed the assessment activity."
        appendingContainer.find(".gradableBodySection .gradableStartBtnContainer").append(`
          <div class="passingFeedback" style="color: green;">` + resultObj.correctFeedback + `</div>
        `);
      }
      // appendingContainer.find(".gradableBodySection .gradableStartBtnContainer").append(`
      //   <div class="passingFeedback" style="color: red;">` + resultObj.incorrectFeedback + `</div>
      // `);
    } else {
      if (resultObj.correctFeedback == "") {
        resultObj.correctFeedback = "You have passed the assessment."
      }
      appendingContainer.find(".gradableBodySection .gradableStartBtnContainer").append(`
        <div class="passingFeedback" style="color: green;">` + resultObj.correctFeedback + `</div>
      `);
    }
    // let showHideCertificateBtn = "";
    // if(window.isCertificateEnableForCourse){
    //   showHideCertificateBtn = "";
    // }else{
    //   showHideCertificateBtn = "style='display: none;'";
    // }
    if (resultObj.showViewAssessmentBtn) {
      appendingContainer.find(".gradableBodySection .gradableStartBtnContainer").append(`
          <button class="viewGradableActivityResult">View Assessment</button>
          <button class="viewCertificate hideCertificate">View Certificate</button>
      `);
    }
  } else {
    if (resultObj.manualFeedback == "") {
      resultObj.manualFeedback = "Thank you for submitting the assessment. <br/> You have successfully submitted your assignment. The teacher will review your assignment and provide the result shortly."
    }
    var parser = new DOMParser();
    var appendhtml = `
    <div class="gradableActivitySummaryContainer" id="manualFeedbackSummaryContainer">
    <div class="gradableBodySection">
      <img src="./images/assesmentSubmitted.png" alt="assessment-submitted" class="gradableAssesmentImage" />
      <div class="gradableMessageSection">
          <p>` + resultObj.manualFeedback + `</p>
      </div>
    </div>
  </div>
    `;
    var el = parser.parseFromString(appendhtml, "text/html");
    appendingContainer.append($(el).contents()[0].childNodes[1].childNodes[0]);
  }

  $(window).scrollTop(0);
  $(document).on('click', '.viewGradableActivityResult', function (event) {
    $('.gradableActivitySummaryContainer').remove();
    $('body article').show();
    if ($('[data-type="match-the-pairs"]').length) {
      mtpResize();
    }
    if ($('[data-type="fill-in-the-blank"]').length) {
      fibDragDropResizing();
    }
    if ($('[data-type="flashcard"]').length) {
      setTimeout(() => {
        $("[data-type='flashcard']").each(function () {
          var width = $(this).width();
          $(this).find('.bxslider .slideshowContainer').css('width', (width - 30) + 'px');
        });
      }, 500);
    }
    if($('.customClass[data-type="group-interactivity-template"]').eq(0).find('.group-interactivity-container').hasClass('style2')){
      $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('id', 'activeAssessment');
    }
    setTimeout(() => {
      $('.auth-equation-holder').each(function (i) {
        $(this).empty();
        setLatexData(this, $(this).attr('data-equation-latex'));
        if ($(this).parents(".component-holder") && $(this).parents(".component-holder").hasClass("drag-and-drop")) {
          setTimeout(() => {
            let hgt = $(this).height() + 20;
            let wdt = $(this).width() + 20;
            $(this).parents('.form-control-wrap').height(hgt).css('min-width', wdt);
            if ($(this).parents('.form-control-wrap').attr('datadragwidth') !== undefined) {
              $(this).parents('.form-control-wrap').css('width', $(this).parents('.form-control-wrap').attr('datadragwidth'))
            } else {
              $(this).parents('.form-control-wrap').css('width', 'auto')
            }
          }, 1000);
        }
      });
    }, 1000);
  });
  $(document).on('click', '.viewCertificate', function (event) {
    $('.gradableActivitySummaryContainer').hide();
    window.showCertificate();
  });
  $(document).on('click', '.certificateControlContainer .backbtncontainer', function (event) {
    $('.certificateContainer').remove();
    $('.gradableActivitySummaryContainer').show();
  });
  // $(document).on('click', '.certificateControlContainer .printcertificate', function (event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   event.stopImmediatePropagation();

  //   var HTML_Width = $(".certificate-mainPage").width();
  //   var HTML_Height = $(".certificate-mainPage").height();
  //   var top_left_margin = 0;
  //   var PDF_Width = HTML_Width + (top_left_margin * 2);
  //   var PDF_Height = HTML_Height + (top_left_margin * 2);
  //   var canvas_image_width = HTML_Width;
  //   var canvas_image_height = HTML_Height;

  //   html2canvas(document.querySelector(".certificate-mainPage"), {quality: 2, scale: 2}).then(canvas => {
  //     var img = canvas.toDataURL("image/png");
  //     var pdf = new jsPDF('l', 'pt', [PDF_Width, PDF_Height]);
  //     pdf.addImage(img, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
  //     pdf.autoPrint();
  //     window.open(pdf.output("bloburl", { filename: "certificate.pdf" }),"_blank");
  //   });
  // });
  $(document).on('click', '.certificateControlContainer .downloadcertificate', function (event) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    $(this).attr('disabled', 'disabled');
    $(this).text('Downloading...');
    var HTML_Width = $(".certificate-mainPage").width();
    var HTML_Height = $(".certificate-mainPage").height();
    var top_left_margin = 0;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = HTML_Height + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    html2canvas(document.querySelector(".certificate-mainPage"), {quality: 2, scale: 2}).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var pdf = new jsPDF('l', 'pt', [PDF_Width, PDF_Height]);
      pdf.addImage(img, 'PNG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
      let devicetype = sessionStorage.getItem('devicetype');
      if(devicetype){
        pdf.save("certificate.pdf");
        $('.certificateControlContainer .downloadcertificate').removeAttr('disabled').text('Download');
      }else{
        var fd = new FormData();
        fd.append('file', new Blob([pdf.output('arraybuffer')], {type: "application/pdf"}));
        var baseUrl = "https://qawidgets.kitaboo.com/";
        if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_US'){
          baseUrl = "https://widgets.kitaboo.com/";
        }else if($('body article').data("platform") == 'prod' && $('body article').data("lang") == 'en_EU'){
          baseUrl = "https://widget.kitaboo.eu/";
        }
        var urlParams = "CAPS/kwidget/services/assessment/uploadCertificate";
        const url = baseUrl + urlParams;
        const method = 'post';
        const xhr = new XMLHttpRequest();  
        xhr.open(method, url);
        xhr.setRequestHeader('userToken', certificateUserData.userToken);
        xhr.setRequestHeader('courseId', window.certificateTemplate[window.certificateTemplate.length - 1].courseID);
        xhr.setRequestHeader('apiKey', "ActivitySchedularAPIKey");
        xhr.send(fd);
        xhr.addEventListener('loadend', () => {
          if (xhr.status === 200) {
            var urlParams1 = "CAPS/kwidget/services/assessment/certificate"
            $.ajax({
              url: baseUrl + urlParams1,
              type: 'GET',
              contentType: 'application/json',
              headers: {
                'userToken': certificateUserData.userToken,
                "courseId": window.certificateTemplate[window.certificateTemplate.length - 1].courseID,
                "apiKey": "ActivitySchedularAPIKey"
              },
              success: function (responseData) {
                console.log(responseData.certificateUrl);
                var link = document.createElement("a");
                link.setAttribute('download', 'Certificate.pdf');
                link.href = responseData.certificateUrl;
                document.body.appendChild(link);
                link.click();
                link.remove();
                $('.certificateControlContainer .downloadcertificate').removeAttr('disabled').text('Download');
              },
              error: function (error) {
                console.log('Error Fetching Certificate');
                $('.certificateControlContainer .downloadcertificate').removeAttr('disabled').text('Download');
              }
            });
          } else {
            console.log('Error Uploading Certificate');
            $('.certificateControlContainer .downloadcertificate').removeAttr('disabled').text('Download');
          }
        });
      }
    });
  }); 
}

window.showCertificate = function(){
  $('.certificateContainer').remove();
  let appendingContainer;
  if ($('.preview-row-container').length > 0) {
    appendingContainer = $('.preview-row-container');
  } else {
    appendingContainer = $('body');
  }
  var parser = new DOMParser();
  let appendhtml =  window.certificateTemplate[window.certificateTemplate.length - 1].template;
  // <div class="langdropdowncontainer"><span class="icon-Language langdropdowncontainerIcon"></span><select class="certificateLanguageSelect"><option>English</option></select></div>
  // <div class="printcontainer">
  // <span class="icon-Print printcontainerIcon"></span>
  // <button class="printcertificate">Print</button></div>
  let template = `
  <div class="certificateContainer">
    <div class="certificateControlContainer">
      <div class="backandlangcontainer">
        
        <div class="backbtncontainer">
        <span class="icon-back-arrow certBackIcon"></span>
        <button class="certificateback">Back</button></div>
        
      </div>
      <div class="printdownloadcontainer">
        <div class="downloadcontainer">
        <span class="icon-Download downloadcontainerIcon"></span>
        <button class="downloadcertificate">Download</button></div>
      </div>
    </div>
    <div class="certificateContentContainer">`+appendhtml+`</div>
  </div>
  `;
  var el = parser.parseFromString(template, "text/html");
  appendingContainer.append($(el).contents()[0].childNodes[1].childNodes[0]);
  $('.certificate-mainPage').find('.certificate-studentname').text(certificateUserData.userFirstName);
  $('.certificate-mainPage').find('.certificate-courseName').text(certificateUserData.courseName);
  $('.certificate-mainPage').find('.certificate-date').text(certificateUserData.courseCompletionDate);
  $('.certificate-mainPage').find('.certificate-time').text(certificateUserData.courseCompletionTime);
  $('.certificate-mainPage').find('.certificate-score').text(certificateUserData.courseCompletionScore);
  if(typeof JSConfetti != 'undefined'){
    var jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiColors: [
        "#ffbe0b","#fb5607","#ff006e","#8338ec","#3a86ff","#9b5de5","#f15bb5","#fee440","#00bbf9","#00f5d4"
      ],
    });    
    var applause = new Audio('images/applause.mp3');
    applause.loop = false;
    applause.play();
  }
}

window.timeAddition = function (startTime, endTime) {

  let startMin = startTime.split(':')[0];
  let startSec = startTime.split(':')[1];

  let endMin = endTime.split(':')[0];
  let endSec = endTime.split(':')[1];

  let totalMin = Number(startMin * 60) + Number(endMin * 60);
  let totalSec = Number(startSec) + Number(endSec);

  let finalTime = totalMin + totalSec;

  let finalMin = Math.floor(finalTime / 60);
  let finalSec = finalTime % 60;

  return finalMin + ':' + finalSec;
}

window.timeDiff = function (startTime, endTime) {
  let count = startTime.split(':').length;
  if (count == 2) {
    let startMin = startTime.split(':')[0];
    let startSec = startTime.split(':')[1];
    let endMin = endTime.split(':')[0];
    let endSec = endTime.split(':')[1];
    let totalStart = Number(startMin * 60) + Number(startSec);
    let totalEnd = Number(endMin * 60) + Number(endSec);
    let finalTime = totalStart - totalEnd;
    let finalMin = Math.floor(finalTime / 60);
    let finalSec = finalTime % 60;
    return finalMin + ':' + finalSec;
  } else if (count == 3) {
    let startHr = startTime.split(':')[0];
    let startMin = startTime.split(':')[1];
    let startSec = startTime.split(':')[2];
    let endHr = endTime.split(':')[0];
    let endMin = endTime.split(':')[1];
    let endSec = endTime.split(':')[2];
    let totalStart = Number(startHr * 3600) + Number(startMin * 60) + Number(startSec);
    let totalEnd = Number(endHr * 3600) + Number(endMin * 60) + Number(endSec);
    let finalTime = totalEnd - totalStart;
    let finalHr = Math.floor(finalTime / 3600);
    finalTime = finalTime - (finalHr * 3600);
    let finalMin = Math.floor(finalTime / 60);
    let finalSec = finalTime % 60;
    return finalHr + ':' + finalMin + ':' + finalSec;
  }
}

window.clearGradableInterval = function (data = 'normal') {
  if (gradableInterval != 0) {
    window.clearInterval(gradableInterval);
    gradableInterval = 0;
    window.gradableMins = 0;
    window.gradableSec = 0;
  }
  if (data == 'timeout') {
    if (window.gradableActivitySettingsJSON.durationEnable) {
      window.gradableActivitySettingsJSON.incorrectFeedback = "Session Timed Out!";
      let gradableJSON = window.gradableActivitySettingsJSON;
      let finalTime = window.gradableActivitySettingsJSON.durationMin + ":" + window.gradableActivitySettingsJSON.durationSec;
      let subTitle = "You have attempted the asessment in " + finalTime + " minutes.";
      let mcqCount = $('.customClass[data-type="multiple-choice-template"]').length;
      let fibCount = $('.customClass[data-type="fill-in-the-blank"] .fib-questions .form-row').length;
      let questionCount = mcqCount + fibCount;
      let startTime = gradableJSON.durationMin + ":" + gradableJSON.durationSec;
      let totalMarks = Number(questionCount) * window.gradableActivitySettingsJSON.points;
      let totalPoints = 0 + "/" + totalMarks;
      let passingStatus = "failed";

      let resultObj = {};
      resultObj.courseName = gradableJSON.courseName;
      resultObj.subTitle = subTitle;
      resultObj.correct = 0;
      resultObj.incorrect = 0;
      resultObj.partialCorrect = 0;
      resultObj.finalTime = startTime;
      resultObj.totalPoints = totalPoints;
      resultObj.showAnswer = gradableJSON.showAnswer;
      resultObj.passingStatus = passingStatus;
      resultObj.correctFeedback = gradableJSON.correctFeedback;
      resultObj.incorrectFeedback = gradableJSON.incorrectFeedback;
      resultObj.manualFeedback = gradableJSON.manualFeedback;

      resultObj.showViewAssessmentBtn = false;
      resultObj.source = 'player';

      window.showGradableResult(resultObj);

      LMSCommunicator.setLessonStatus('incomplete');
      LMSCommunicator.setScore(0);
      LMSCommunicator.setMaximumScore(totalMarks);
      LMSCommunicator.setMinimumScore(0);

      let pageNo = $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('data-page-no');
      let componentkey = $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('data-saved-index');
      let scoObj = {};
      scoObj.remainingTime = "0:0";
      scoObj.lessonStatus = 'incomplete';
      scoObj.pageId = pageNo;
      scoObj.componentkey = componentkey;
      saveAction(event, scoObj);
    }
  }
}

function gradableTimingFunction() {
  if (gradableInterval == 0) {
    gradableInterval = setInterval(() => {
      if (window.gradableSec == 0) {
        if (window.gradableMins == 0) {
          console.log('Assessment Time Completed, Please submit Assessment.');
          window.clearGradableInterval('timeout');
        } else {
          window.gradableMins = window.gradableMins - 1;
          window.gradableSec = 59;
        }
      } else {
        window.gradableSec = window.gradableSec - 1;
        if (apiHandle) {
          let pageNo = $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('data-page-no');
          let componentkey = $('.customClass[data-type="group-interactivity-template"]').eq(0).attr('data-saved-index');
          let time = window.gradableMins + ":" + window.gradableSec;
          let scoObj = {};
          scoObj.remainingTime = time;
          scoObj.pageId = pageNo;
          scoObj.componentkey = componentkey;
          saveAction(event, scoObj);
        }
      }
      var addedMins = "";
      var addedSecs = "";
      if (window.gradableMins < 10) {
        addedMins = "0"
      } else {
        addedMins = ""
      }
      if (window.gradableSec < 10) {
        addedSecs = "0"
      } else {
        addedSecs = ""
      }
      $('.groupActivityAssessmentTimingContainer .minutes').html(addedMins + window.gradableMins);
      $('.groupActivityAssessmentTimingContainer .seconds').html(addedSecs + window.gradableSec);
      if ($('.groupActivityAssessmentTimingContainer .timePieChart').length) {
        let ogTime = (parseInt(window.gradableActivitySettingsJSON.ogTime.split(':')[0]) * 60) + (parseInt(window.gradableActivitySettingsJSON.ogTime.split(':')[1]));
        let spendTime = (parseInt(window.gradableMins) * 60) + (parseInt(window.gradableSec));
        let spendPercentage = (100 - ((spendTime / ogTime) * 100)).toFixed(2);
        $('.groupActivityAssessmentTimingContainer .timePieChart').css("background-image", "conic-gradient(#3E5274 " + spendPercentage + "%, #FFFFFF 0%)");
      }
    }, 1000);
  }
}

$("[data-type='flashcard'] .style-2").each(function () {
  var maxHeight = $(this).height();
  $(this).find('.style-2').find('.bx-prev, .bx-next').each(function () {
    $(this).find('.style-2').find('.bx-prev').addClass('style2Templateprev');
    $(this).find('.style-2').find('.bx-next').addClass('style2Templatenext');
    $(this).css("max-height", maxHeight);
  });
});

function processOfflineApplyToAllStyleSetting(data) {
  console.log(data);
  for (const [key, value] of Object.entries(data)) {
    if (key == "chapter-headingNew-h1") {
      if (value.styleSettingFlag) {
        console.log(value.styleSettingJson);
        $('[data-type="chapter-headingNew-h1"] .chapter-heading[data-applyall="accept"]').each(function (i, item) {
          // var pageNo = $(item).parents('.customClass').attr('data-page-no');
          // var uniqueId = $(item).parents('.customClass').attr('data-saved-index');			
          var className = value.styleSettingJson.styleClass;
          var bgColor = value.styleSettingJson.settings.bgColor;
          var opacityLevel = value.styleSettingJson.settings.opacityColortitle;
          var dividerColor = value.styleSettingJson.settings.dividerColor;
          var isImageAvailable = value.styleSettingJson.settings.imgOrColorBoolean;
          var imageUrl = value.styleSettingJson.settings.imageUrl;
          var isChapterNumberContainer = value.styleSettingJson.settings.labeltext;
          var isAuthorNameAllowed = value.styleSettingJson.settings.allowAuthorName;
          var isDividerAllowed = value.styleSettingJson.settings.allowDivider;
          var activeStyleLabelText = value.styleSettingJson.settings.activeStyleLabelText;

          if (isImageAvailable == "bg-image") {
            $(item).find('.overlay').before('<div class=""><img data-imgsrc="' + imageUrl + '" alt="" class="croppingImg bg-image" data-og-img="' + imageUrl + '" src="' + imageUrl + '" /></div>')
          } else {
            $(item).find('.croppingImg').css('opacity', '0');
          }
          $(item).removeClass('card-style-1 card-style-2 card-style-3 card-style-4 full-bleed-1 full-bleed-2 chapter-14').addClass(className);
          $(item).css('background-color', bgColor);
          $(item).find('.overlay').css('opacity', opacityLevel);
          if (className == "card-style-1" || className == "card-style-3") {
            $(item).find('.chapterContainer').css('background-color', '#f77664').css('opacity', '1');
            if ($(item).find('.chapterName').length == 0 && $(item).find('.chapterNumber').length == 0) {
              $(item).find('.chapterContainer').append('<div class="chapterName">Chapter</div><div class="chapterNumber">01</div>');
            }
            // $(item).find('.titleAuthorName').hide();
          } else if (className == "card-style-2" || className == "full-bleed-1") {
            // $(item).find('.titleAuthorName').hide();
          } else if (className == "card-style-4") {
            $(item).find('.chapterContainer').css('opacity', '1');
            if ($(item).find('.chapterName').length == 0 && $(item).find('.chapterNumber').length == 0) {
              $(item).find('.chapterContainer').append('<div class="chapterName">Chapter</div><div class="chapterNumber">01</div>');
            }
            if ($(item).find('.titleAuthorName').length == 0) {
              $(item).find('.titleTextContent').append('<div class="titleAuthorName"></div>');
            }
            $(item).find('.titleTextContent hr').remove();
            $(item).find('.titleAuthorName').before('<hr class="" style="border-color: ' + dividerColor + '" />');
          } else if (className == "full-bleed-2") {
            var bgColorpanel = value.styleSettingJson.settings.bgColorpanel
            $(item).find('.chapterContainer').css('background-color', bgColorpanel).css('opacity', '1');
            if ($(item).find('.chapterName').length == 0 && $(item).find('.chapterNumber').length == 0) {
              $(item).find('.chapterContainer').append('<div class="chapterName">Chapter</div><div class="chapterNumber">01</div>');
            }
            if ($(item).find('.titleAuthorName').length == 0) {
              $(item).find('.titleTextContent').append('<div class="titleAuthorName"></div>');
            }
          }
          $(item).find('span').removeAttr('style');

          var overlayBgcolor = value.styleSettingJson.settings.bgColortitle
          var overlayOpacity = value.styleSettingJson.settings.opacityColortitle
          $(item).find('.overlay').css('background-color', overlayBgcolor).css('opacity', overlayOpacity);

          if (activeStyleLabelText != undefined) {
            $(item).removeClass('labeltext1 labeltext2 labeltext3 labeltext4').addClass(activeStyleLabelText);
          }

          if (!isChapterNumberContainer) {
            $(item).find('.chapterContainer').hide();
          }

          if (!isAuthorNameAllowed) {
            $(item).find('.titleAuthorName').hide();
          }

          if (!isDividerAllowed) {
            $(item).find('hr').hide();
          }
        });
      }
    } else if (key == "h2-style" || key == "h3-style" || key == "h4-style" || key == "h5-style" || key == "h6-style") {
      if (value.styleSettingFlag) {
        $('[data-type="header"] [data-applyall="accept"] .' + key).each(function (i, item) {
          var className = value.styleSettingJson.settings.styleClass;
          var iconClass = value.styleSettingJson.settings.iconClass;
          var componentColor = value.styleSettingJson.settings.componentColor
          var fontSize = parseFloat($(item).css('font-size').slice(0, -2)) / 16 + 'rem';
          var nodeName = $(item)[0].nodeName.toLocaleLowerCase();

          $(item).css('border-color', componentColor);
          $(item).removeClass('card-style-1 card-style-2 card-style-3 card-style-4').addClass(className);
          $(item).siblings('.header-icon-image').remove();
          if (className == 'card-style-4') {
            $(item).before('<span class="header-icon-image ' + iconClass + ' ' + nodeName + '-style-icon" style="color: ' + componentColor + ';font-size: ' + fontSize + ';"></span>');
          }
        });
      }
    } else if (key == "paragraph") {
      if (value.styleSettingFlag) {
        $('[data-type="paragraph"] [data-applyall="accept"] .paragraph-container').each(function (i, item) {
          if ($(item).find('span:not(#asideInlineText, #InlineImage, #inline-image-caption)').length == 0) {
            var html = $(item).html();
            var newHtml = '<span>' + html + '</span>';
            $(item).html(newHtml);
          }
          var customClass = value.styleSettingJson.customClass;
          $(item).removeClass('defaultText blockTextParagraph blockquote dropCapflag emphasisText buttontext buttonBorderText').addClass(customClass);

          if (customClass == 'blockquote' && $(item).siblings('.authorName').length == 0) {
            $(item).after('<div class="authorName">Author</div>');
          }

          if (customClass != 'blockquote') {
            $(item).siblings('.authorName').remove();
          }
        });
      }
    }
  }
}

function secondsToTime(timeInSeconds) {
  var hour = Math.floor(timeInSeconds / 3600);
  var min = Math.floor(timeInSeconds % 3600 / 60);
  var sec = Math.floor(timeInSeconds % 60);
  sec = (sec < 10) ? '0' + sec : sec;
  min = (hour > 0 && min < 10) ? '0' + min : min;
  if (hour > 0) {
    return hour + ':' + min + ':' + sec;
  }
  return min + ':' + sec;
}

function trackCueChange(event) {
  var video = event.target.parentElement;
  var cueTime = event.target.track.activeCues[0].startTime;
  var transcriptBody = $(video).parents('.customClass').find('#transcript .transcript-body')[0];
  var activeCue = $(video).parents('.customClass').find('#transcript [data-begin=' + cueTime + ']')[0];
  $(transcriptBody).find('.transcript-line').removeClass('is-active');
  $(activeCue).addClass('is-active');
  transcriptBody.scrollTop = activeCue.offsetTop;
}

function trackLoaded(event) {
  var video = event.target.parentElement;
  var cues = event.target.track.cues;
  var cuesLength = cues.length;
  var trackHTML = '';

  for (var i = 0; i < cuesLength; i++) {
    var dataBegin = cues[i].startTime;
    var cueTime = secondsToTime(cues[i].startTime);
    var cueText = cues[i].text;
    trackHTML += '<div class="transcript-line" data-begin="' + dataBegin + '"> <span class="transcript-timestamp">' + cueTime + '</span> <span class="transcript-text">' + cueText + '</span> </div> '
  }
  if (this.label == "Arabic") {
    $(video).parents('.customClass').find('#transcript').addClass('rtl');
  } else {
    $(video).parents('.customClass').find('#transcript').removeClass('rtl');
  }
  var transcriptContent = '<div class="transcript-body">' + trackHTML + '</div>';
  $(video).parents('.customClass').find('#transcript').html('');
  $(video).parents('.customClass').find('#transcript').append(transcriptContent);

  var trackindex = $(video).find('track').index(this);
  $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li span').removeClass('icon-Check');
  $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li span').eq(trackindex).addClass('icon-Check');
}

async function preloadVideoTracks(video) {
  var isPreview = $(document).find('.preview-row-container').length;
  $(video).find('track').each(function (index, item) {
    if (isPreview) {
      var getQueryVariable = function getQueryVariable(variable, query) {
        var query = (!query) ? window.location.search.substring(1) : query,
          i, pair,
          vars = query.split("&");
        for (i = 0; i < vars.length; i++) {
          if (variable == 'courseId') {
            pair = vars[i].split("courseId=");
            return pair[1];
          } else if (variable == 'userToken') {
            pair = vars[i + 1].split("userToken=");
            return pair[1];
          } else if (variable == 'mode') {
            if (vars.length > 2) {
              pair = vars[i + 2].split("mode=");
              return pair[1];
            } else {
              return undefined;
            }
          }
        }
      }
      var a = $(item).attr('data-og-src');
      var splitArr = a.split('/');
      splitArr[8] = getQueryVariable('userToken');
      var resourceUrl = splitArr.join('/');
      // $(item).attr('src', URL.createObjectURL(trackBlob));
      $(item).attr('src', resourceUrl);
      // $(item).attr('data-text', text);
      item.addEventListener("load", trackLoaded);
      item.addEventListener("cuechange", trackCueChange);
      // return Promise.resolve(true);
      // fetch(resourceUrl)
      //   .then(function(response) {
      //       response.text().then(function(text) {
      //           const trackBlob = new Blob([text], {
      //               type:"text/plain;charset=utf-8"
      //           });						
      //           $(item).attr('src', URL.createObjectURL(trackBlob));
      //           $(item).attr('data-text', text);
      //           item.addEventListener("load", trackLoaded);
      //           item.addEventListener("cuechange", trackCueChange);
      //           return Promise.resolve(true);

      //       });
      //   });
    } else {
      item.addEventListener("load", trackLoaded);
      item.addEventListener("cuechange", trackCueChange);
      $(item).attr('src', item.dataset.src);
      // return Promise.resolve(true);
    }

  });
}

function revertVideojsStructure() {
  $('.video-js').each(function (index, video) {
    if (video.nodeName == "DIV" || video.nodeName == "div") {
      var value = video;
      if ($(value).find('video').length !== 0) {
        poster = $(value).find('video').attr('poster') ? $(value).find('video').attr('poster') : '';
        $video = $(value).find('video').addClass('video-js vjs-16-9 vjs-default-skin vjs-big-play-centered').removeClass('vjs-tech').attr({
          'data-setup': '{}',
          'poster': poster
        }).removeAttr('src').attr('controls', 'controls');
        $(value).children().eq(0).remove();
        $(value).prepend($video);
      }
    }
  });
}

$.fn.isOnScreen = function (x, y) {

  if (x == null || typeof x == 'undefined') x = 1;
  if (y == null || typeof y == 'undefined') y = 1;

  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var height = this.outerHeight();
  var width = this.outerWidth();

  if (!width || !height) {
    return false;
  }

  var bounds = this.offset();
  bounds.right = bounds.left + width;
  bounds.bottom = bounds.top + height;

  var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

  if (!visible) {
    return false;
  }

  var deltas = {
    top: Math.min(1, (bounds.bottom - viewport.top) / height),
    bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
    left: Math.min(1, (bounds.right - viewport.left) / width),
    right: Math.min(1, (viewport.right - bounds.left) / width)
  };

  //console.log(deltas);

  return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

};

$('.shortLongAnsComponent .longAnsText').on('input', function (e) {
  $(this).css('height', 'auto');
  var scrollHeight = $(this)[0].scrollHeight;
  $(this).css('height', scrollHeight + 'px');
});
$('.identifyTheClipComponent .longAnsText').on('input', function (e) {
  $(this).css('height', 'auto');
  var scrollHeight = $(this)[0].scrollHeight;
  $(this).css('height', scrollHeight + 'px');
});

// $(document).on('mouseover', 'a.custmtitle', function(e){
//   $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.tooltippop').remove();
//   $(window.parent.$('.previewed-html')[0].contentDocument.body).append('<div class="col-md-12 tooltippop" style="display: block;"><div class="col-md-2 internalpopicon"><span class="internalpopIcon"></span></div><div class="col-md-6 internaltextData"><span class="tooltiptextdata"></span></div><div class="col-md-2 internalEditIcon"><span class="icon-Edit editiconinternal" ng-click="addEditHyperLink()"></span></div><div class="col-md-2 internalUnlinktIcon"><span class="icon-Unlink" ng-click="unlinkinternalurl()"></span></div></div>');
//     // tooltippop.css("display", "block");
//     $("span.tooltiptextdata").text(e.currentTarget.dataset.tooltipText);
//     $("span.internalpopIcon").attr("data-nodename", e.currentTarget.dataset.nodename);

//         var x = e.clientX,
//         y = e.clientY;
//         $('.tooltippop').css('top',(y + 3) + 'px');
//         $('.tooltippop').css('left',(x + 20) + 'px');
//         $('.tooltippop').css("display", "block");
//   });
//   $(document).on('mouseover', 'div.tooltippop', function(){
//     $('.tooltippop').css("display", "block");
//   });
//     $(document).on('mouseout', 'a.custmtitle', function(){
//         $('.tooltippop').css("display", "none");
//       });
//   $(document).on('mouseout', 'div.tooltippop', function(){
//     $('.tooltippop').css("display", "none");
//   });

// $('video').each(function(index, video){
//   if($(video).find('track').length){
//     var div = document.createElement('div');
//     div.classList.add('tracksPreloadDiv');
//     div.style.display = "none";
//     $(div).append($(video).find('track'));
//     $(div).insertBefore(video);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  if ($('.preview-row-container').length == 0) {
    revertVideojsStructure();
  }
  var lazy = [].slice.call(document.querySelectorAll("img, video, object"));
  if ("IntersectionObserver" in window) {
    let lazyObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (entry.target.nodeName.toLowerCase() == "img") {
            let lazyImage = entry.target;
            // lazyImage.src = lazyImage.dataset.imgsrc;
            if (lazyImage.dataset.imgsrc != undefined && !lazyImage.dataset.imgsrc.includes('undefined')) {
              lazyImage.src = lazyImage.dataset.imgsrc;
            }
            // lazyImage.srcset = lazyImage.dataset.srcset;
            lazyImage.classList.remove("lazy");
            lazyObserver.unobserve(lazyImage);
          } else if (entry.target.nodeName.toLowerCase() == "video") {
            if ($('.preview-row-container').length == 0) {
              let lazyVideo = entry.target;
              lazyVideo.src = lazyVideo.dataset.videosrc;
              $(lazyVideo).find('source').attr('src', lazyVideo.dataset.videosrc);
              $(lazyVideo).find('track').each(function (idx, track) {
                $(track).attr('src', $(track).attr('data-tracksrc'));
              });
              lazyVideo.classList.remove("lazy");
              lazyObserver.unobserve(lazyVideo);
              if ($(lazyVideo).parents('.customClass').find('track').length || $(lazyVideo).parents('.customClass').find('.tracksPreloadDiv').length) {
                var captionEnable = $(lazyVideo).attr('data-caption-enable') == "true" ? true : false;
                var transcriptEnable = $(lazyVideo).attr('data-transcript-enable') == "true" ? true : false;
                if ($(lazyVideo).parents('.customClass').find('.tracksPreloadDiv').length) {
                  var preloadTracks = $(lazyVideo).parents('.customClass').find('.tracksPreloadDiv track');
                  $(lazyVideo).append(preloadTracks);
                }
                preloadVideoTracks(lazyVideo);

                videojs(lazyVideo).src($(lazyVideo).attr('data-videosrc'));
                var player = videojs(lazyVideo);
                player.on('fullscreenchange', function (e) {
                  var isFullScreen = this.isFullscreen_;
                  if (isFullScreen) {
                    var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                    var destination = $(this.el_).parents('.customClass').find('.video-js');
                    source.detach().appendTo(destination);
                  } else {
                    var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                    var destination = $(this.el_).parents('.customClass').find('figure');
                    source.detach().appendTo(destination);
                  }
                });
                player.ready(function () {

                  var video = lazyVideo;

                  $(video).removeAttr('controls');

                  if (!transcriptEnable) {
                    $(transcriptContainer).hide();
                  }
                  $(video).parents('.customClass').find('.videoSettingsToggleSection .transcripToggle input')[0].checked = transcriptEnable;
                  if (captionEnable) {
                    for (var i = 0; i < video.textTracks.length; i++) {
                      if (i == video.textTracks.length - 1) {
                        video.textTracks[i].mode = 'showing';
                      } else {
                        video.textTracks[i].mode = 'hidden';
                      }
                    }
                  } else {
                    for (var i = 0; i < video.textTracks.length; i++) {
                      video.textTracks[i].mode = 'hidden';
                    }
                    $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList li span').eq(video.textTracks.length - 1).addClass('icon-Check')
                  }
                  $(video).parents('.customClass').find('.videoSettingsToggleSection .captionToggle input')[0].checked = captionEnable;
                  var trackList = '';
                  var tracks = video.textTracks
                  for (var i = 0; i < tracks.length; i++) {
                    if (tracks[i].mode == "showing") {
                      var span = '<span class="icon-Check"></span>';
                    } else {
                      var span = '<span class=""></span>';
                    }
                    trackList += '<li data-trackId="' + i + '"><p>' + tracks[i].label + '</p>' + span + '</li>';
                  }
                  $(video).parents('.customClass').find('.videoSettingPanelOverlay').hide();
                  $(video).parents('.customClass').find('.videoSettingPanelOverlay').append('<a class="videoSettingPanelOverlayCloseBtn"><span class="icon-Close"></span></a>')
                  $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList').html('');
                  $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoLanguageSelectorSection .videoTacksList').append(trackList);
                  $(video).parents('.customClass').find('.vjs-settings-button').remove();

                  var settingIconTarget = $(video).parents('.customClass').find('.vjs-control-bar .vjs-fullscreen-control');
                  $('<div id="vjs-settings-btn" class="vjs-settings-button vjs-control vjs-menu-button icon-Settings"></div>').insertBefore(settingIconTarget);

                  // $(video).parents('.customClass').find('.videoSettingPanelOverlay .videoTacksList li').eq(0).trigger('click');
                });
              } else {
                videojs(lazyVideo).src($(lazyVideo).attr('data-videosrc'));
                var player = videojs(lazyVideo);
                player.on('fullscreenchange', function (e) {
                  var isFullScreen = this.isFullscreen_;
                  if (isFullScreen) {
                    var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                    var destination = $(this.el_).parents('.customClass').find('.video-js');
                    source.detach().appendTo(destination);
                    if (($(this.el_).parents('.customClass')).attr('data-type') == "slideshow") {
                      $(this.el_).parents('.customClass').find('.video-js').addClass("SlideshowVideoFullScreen");
                      $(this.el_).parents('.customClass').find('.video-js').css('max-height', 'unset!important');
                      $(this.el_).parents('.customClass').find('.bx-viewport .video-js .vjs-tech').css('max-height', 'unset!important');
                    }
                  } else {
                    var source = $(this.el_).parents('.customClass').find('.videoSettingPanelOverlay');
                    var destination = $(this.el_).parents('.customClass').find('figure');
                    source.detach().appendTo(destination);
                    if (($(this.el_).parents('.customClass')).attr('data-type') == "slideshow") {
                      $(this.el_).parents('.customClass').find('.video-js').removeClass("SlideshowVideoFullScreen");
                      $(this.el_).parents('.customClass').find('.video-js').css('max-height', '350px');
                      $(this.el_).parents('.customClass').find('.bx-viewport .video-js .vjs-tech').css('max-height', '350px');
                    }
                  }
                });

                $(lazyVideo).parents('.customClass').find('.videoSettingPanelOverlay').hide();
                $(lazyVideo).parents('.customClass').find('#transcript').html('');
                $(lazyVideo).parents('.customClass').find('.vjs-settings-button').remove();
                $(lazyVideo).removeAttr('controls');
                // $(video).removeAttr('controls');
              }
            }

          } else if ($(entry.target).hasClass('audio-source')) {
            let audioSrc = entry.target.dataset.correct
            let lazyAudio = $(entry.target).find('audio')[0];
            if (!audioSrc) {
              audioSrc = lazyAudio.dataset.correct || lazyAudio.dataset.audiosrc
            }
            lazyAudio.src = audioSrc
            if ($(lazyAudio).hasClass('lazy')) {
              lazyAudio.src = audioSrc;
              $(lazyAudio).find('source').attr('src', audioSrc);
              // lazyAudio.src = lazyAudio.dataset.audiosrc;
              // $(lazyAudio).find('source').attr('src', lazyAudio.dataset.audiosrc);
              // lazyImage.srcset = lazyImage.dataset.srcset;
              lazyAudio.classList.remove("lazy");
            }
            lazyObserver.unobserve(entry.target);
            $('audio').each(function (index, audio) {

              var audioParent = $(audio).parents('.audiojs')[0];
              if (audioParent) {
                $(audioParent).replaceWith(audio);
              }


            });

            audiojs.events.ready(function () {
              var as = audiojs.createAll();
            });
            $('audio').each(function (index, item) {
              if ($(item).attr('data-audiosrc') == '#' || $(item).attr('data-audiosrc') == undefined) {
                $(item).parents('.audiojs').find('.play-pause, .scrubber').addClass('blank-audio');
              }
            });
          } else if (entry.target.nodeName.toLowerCase() == "object") {
            let lazyObject = entry.target;
            lazyObject.classList.remove("lazy");
            lazyObserver.unobserve(lazyObject);

            var url = $(lazyObject).attr('data-htmlurl')
            var clone = $(lazyObject).clone();
            var parent = $(lazyObject).parent();
            clone.attr('data', url);
            $(lazyObject).remove();
            parent.append(clone);
          }
        }
      });
    });
    lazy.forEach(function (lazy) {
      lazyObserver.observe(lazy);
    });
    if ($.isFunction($.fn.localize)) {
      var opts = {
        language: "en",
        pathPrefix: "localization/"
      };
      $("[data-localize]").localize("player", opts);
    }
  } else {
    // Possibly fall back to a more compatible method here
    console.log('Intersection Observer Not Supported');
  }
});

(function ($) {
  $.fn.hasScrollBar = function () {
    var e = this.get(0);
    return {
      vertical: e.scrollHeight > e.clientHeight,
      horizontal: e.scrollWidth > e.clientWidth
    };
  }


})(jQuery);



Function.prototype.debounce = function (threshold) {
  var callback = this;
  var timeout;
  return function () {
    var context = this,
      params = arguments;
    window.clearTimeout(timeout);
    timeout = window.setTimeout(function () {
      callback.apply(context, params);
    }, threshold);
  };
};


//when the word selected for highlight is not in a span
function wrapSelectedText() {
  var Selected = window.getSelection().anchorNode.parentElement;
  var selection = window.getSelection().getRangeAt(0);
  var selectedText = selection.extractContents();
  var span = document.createElement("span");
  $(span).addClass('selectedDiv highlighted');
  span.appendChild(selectedText);
  selection.insertNode(span);
  $('#tooltip1').hide();
}

function DeleteSelectedText() {
  var clear = window.getSelection().anchorNode.parentElement;
  if ($(clear).hasClass('selectedText')) {
    $(clear).removeClass('highlighted');
    $('#tooltip1').hide();
  } else {
    $(clear).contents().unwrap();
    $('#tooltip1').hide();
  }
}


function resizeSlideHeight() {
  //console.log("IN");
  // $("[data-type='slideshow']").each(function(index, item){
  //   // var slideshowTarget = $("#target").closest(".sd-item").find(".slide-show");
  //   var slideshowTarget = $(item).find(".slide-show");
  //   var maxHeight = $(slideshowTarget.find(".bxslider li")[0]).find(".slide_img_editor").height();
  //   for(var i = 1; i<slideshowTarget.find(".bxslider li").length; i++){
  //     var tempHeight = $(slideshowTarget.find(".bxslider li")[i]).find(".slide_img_editor").height();
  //     if(maxHeight > tempHeight)
  //     {
  //       tempHeight=maxHeight;
  //     }else{
  //       maxHeight=tempHeight;
  //     }
  //   }
  //   slideshowTarget.find(".bxslider li").css('height',maxHeight);
  //   slideshowTarget.find(".bxslider").css('height',maxHeight);
  //   slideshowTarget.find(".bx-viewport").css('height',maxHeight);
  //   var slideWidth = $("#target .slider").width();
  //   $("#target .bxslider li").css('width',slideWidth);
  //   $(".bxslider li").css('width',slideWidth);
  // });

  //   setTimeout(function(){
  //   $("[data-type='slideshow']").each(function(index, item){
  //       $(this).find(".slideshowContainer").each(function(){
  //           $(this).css("height","");
  //       });
  //       var slideHeight = $(this).find(".bx-viewport").height();
  //       $(this).find(".slideshowContainer").each(function(){
  //           $(this).css("height",slideHeight);
  //       });
  //     });
  // }, 500);
  setTimeout(function () {
    $("[data-type='slideshow'] .slideMediaContainer").each(function () {
      var maxHeight = $(this).height();
      $(this).find(".image-style, .video-iframe-container.youtube-padding").each(function () {
        $(this).css("max-height", maxHeight);
      });
      $(this).find(".video-js .vjs-tech").each(function () {
        // $(this).css("max-height","inherit");
      });
    });
    $("[data-type='flashcard'] .style-2").each(function () {
      $(this).find('.bx-prev').addClass('style2PreviewTemplateprev');
      $(this).find('.bx-next').addClass('style2PreviewTemplatenext');
    });
    $("[data-type='slideshow'] .bxslider").each(function (index, item) {
      let len = $(this).find('.slideshowContainer').length;
      let width = (100 * len) + "%";
      $(this).css('width', width);
      let slideWidth = 100 / len + "%";
      $(this).find('.slideshowContainer').css('width', slideWidth);
    });
    $("[data-type='slideshow']").each(function (index, item) {
      var activeSlideNum = $("[data-type='slideshow'] .slideshowContainer[aria-hidden='false']").index();
      var slideParentWidth = $(item).find('.bxslider').width();
      var slideCount = $(item).find('.slideshowContainer').length;
      var scrolltoSlideWidth = "-" + ((slideParentWidth / slideCount) * activeSlideNum) + 'px';
      $(item).find('.bxslider').css('left', scrolltoSlideWidth)
    });
  }, 100);
}


function selectionFix() {

  var lastSelEvent = null;
  var lastSelInputEvent = null;
  var lastDblClickEvent = null;
  var selchangeModTs = null;
  var tripleclickFixBound = false;
  var selStartTimout = null;

  $(document).on('selectstart selectionchange', function (e) //non-inputs
    {
      fixEventTS(e);
      lastSelEvent = e;

      if ((selchangeModTs != null) && (new Date().getTime() - selchangeModTs < 50)) //ie11+ fix otherwise get self-loop with our selection changes generating this event
        return;

      handleSelEvent(e);
    });

  if ('onselect' in document.documentElement) {
    $(document).on('select', function (e) //input/textarea
      {
        fixEventTS(e);
        lastSelInputEvent = e;
        handleSelEvent(e);
      });
  }

  $(document).on('click', function (e) {
    if (typeof e.originalEvent !== 'undefined' && typeof e.originalEvent.detail !== 'undefined') {
      multiclickHandlerfunction(e);
    } else {
      fixEventTS(e);
      if (!tripleclickFixBound) {

        $(document).on('dblclick', function (e) {
          fixEventTS(e);
          selchangeModTs = null;
          lastDblClickEvent = e;
          handleSelEvent(e);
        });
        tripleclickFixBound = true;
      }
      if ((lastDblClickEvent != null) && (e.timeStamp - lastDblClickEvent.timeStamp < 300)) {
        lastDblClickEvent = e;
        selchangeModTs = null;
        handleSelEvent(e);
      }
    }

  });

  function multiclickHandlerfunction(e) {
    if (e.originalEvent.detail === 2 || e.originalEvent.detail === 3) {
      fixEventTS(e);
      selchangeModTs = null;
      lastDblClickEvent = e;
      handleSelEvent(e);
    }
  }

  function fixEventTS(e) {
    if (typeof e.timeStamp == 'undefined') //IE 8
    {
      e.timeStamp = new Date().getTime();
    }
  }

  function handleSelEvent(e) {
    if (lastDblClickEvent === null)
      return;

    if (((e.type === 'selectstart') || (e.type === 'selectionchange') || (e.type === 'dblclick') || (e.type === 'click')) && (lastSelEvent != null) && (Math.abs(lastDblClickEvent.timeStamp - lastSelEvent.timeStamp) < 1000)) // different order of events in different browsers...
    {
      switch (lastSelEvent.type) {
        case 'selectstart':
        case 'selectionchange':
          clearTimeout(selStartTimout);
          selStartTimout = setTimeout(handleSelChange, (/msie\s|trident\/|edge\//i.test(window.navigator.userAgent) ? 150 : 0));
          break;
      }
    }

    if (((e.type === 'select') || (e.type === 'dblclick') || (e.type === 'click')) && (lastSelInputEvent != null) && (Math.abs(lastDblClickEvent.timeStamp - lastSelInputEvent.timeStamp) < 1000)) {
      handleSel(lastSelInputEvent);
    }
  }

  function handleSel(e) {
    if (typeof (e.target.selectionEnd) != 'undefined') {
      //left whitespace
      while (/\s$/.test(e.target.value.substr(e.target.selectionEnd - 1, 1)) && e.target.selectionEnd > 0) {
        e.target.selectionEnd -= 1;
      }
      //right whitespace
      while (/^s/.test(e.target.value.substr(e.target.selectionStart - 1, 1)) && e.target.selectionStart > 0) {
        e.target.selectionStart += 1;
      }
    }
  }

  function handleSelChange() {
    if (rangy) {
      var sel = rangy.getSelection();
    }
    if (sel && !sel.isCollapsed) {
      selchangeModTs = new Date().getTime();
      sel.trim();
    } else if (typeof document.selection != 'undefined') //IE 10- input/textArea case
    {
      var range = document.selection.createRange();

      if (range && range.text && range.text.toString()) {
        while ((range.text != '') && /[\s\S]+\s$/.test(range.text.toString())) {
          selchangeModTs = new Date().getTime();
          range.moveEnd('character', -1);
          range.select();
        }
        while ((range.text != '') && /^\s[\s\S]+/.test(range.text.toString())) {
          selchangeModTs = new Date().getTime();
          range.moveStart('character', 1);
          range.select();
        }
      }
    }
  }

}

// $(document).ready(function(){
//   $("a.custmtitle").each(function(){
//       if($(this).parents().hasClass('preview-row-container')){
//           $(this).removeAttr("href");
//           $(this).removeAttr("target");
//       }
//   });
// });
$(document).on('mouseover', 'a.custmtitle', function (e) {
  if ($(window.parent.$('.directPreview')).length > 0) {
    $("a.custmtitle").each(function () {
      if ($(this).hasClass('custmtitle')) {
        $(this).removeClass('elementActive');
      }
    });
    $("span.tooltiptextdata").text(e.currentTarget.dataset.tooltipText);
    $("span.internalpopIcon").attr("data-nodename", e.currentTarget.dataset.nodename);
    $("span.internalpopIcon").attr("data-widgeticon", e.currentTarget.dataset.widgeticon);

    var lineheight = parseInt($(event.target).parent().css('line-height').slice(0, -2));
    var p = $(this);
    var offset = p.offset();

    $('.tooltippop').css('top', (offset.top + lineheight - 15) + 'px');
    $('.tooltippop').css('left', (offset.left + 30) + 'px');
    $('.tooltippop').css("display", "block");
  }
});
$(document).on('mouseover', 'div.tooltippop', function () {
  $('.tooltippop').css("display", "block");
});
$(document).on('mouseout', 'a.custmtitle', function () {
  $('.tooltippop').css("display", "none");
});
$(document).on('mouseout', 'div.tooltippop', function () {
  $('.tooltippop').css("display", "none");
});

$(document).on('click touch', 'a.custmtitle', function (e) {
  if ($(window.parent.$('.directPreview')).length > 0) {
    // $("a.custmtitle").each(function(){
    if ($(window.parent.$('.directPreview')).length > 0) {
      $(this).removeAttr("href");
      $(this).removeAttr("target");
      var uid = e.currentTarget.dataset.hashvalue;
      if (uid != undefined) {
        $("[data-saved-index=" + uid + "]")[0].scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }
});

$("a.custmtitle").on('click touch', function (e) {
  if ($(this).parents().hasClass('preview-row-container')) {
    $(this).removeAttr("href");
    $(this).removeAttr("target");
    var uid = e.currentTarget.dataset.hashvalue;
    if (uid != undefined) {
      $("[data-saved-index=" + uid + "]")[0].scrollIntoView({
        behavior: 'smooth'
      });
    }
  } else if ($(this).parents().hasClass('epubviewer')) {
    $(this).removeAttr("target");

  }
});

// $("a.custmtitle").mouseover(function(event) {
//   if($(this).parents().hasClass('white_center_bg_main')){
//         $(this).removeAttr("target");
//          $('.white_center_bg_main').find('.tooltippop').remove();
//       $('.white_center_bg_main').append('<div class="col-md-12 tooltippop" style="display: none;"><div class="col-md-2 internalpopicon"><span class="internalpopIcon"></span></div><div class="col-md-6 internaltextData"><span class="tooltiptextdata"></span></div><div class="col-md-2 internalEditIcon"><span class="icon-Edit editiconinternal" ng-click="addEditHyperLink()"></span></div><div class="col-md-2 internalUnlinktIcon"><span class="icon-Unlink" ng-click="unlinkinternalurl()"></span></div></div>');

//     }
//     else{
//     $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.tooltippop').remove();
//     $(window.parent.$('.previewed-html')[0].contentDocument.body).append('<div class="col-md-12 tooltippop" style="display: none;"><div class="col-md-2 internalpopicon"><span class="internalpopIcon"></span></div><div class="col-md-6 internaltextData"><span class="tooltiptextdata"></span></div><div class="col-md-2 internalEditIcon"><span class="icon-Edit editiconinternal" ng-click="addEditHyperLink()"></span></div><div class="col-md-2 internalUnlinktIcon"><span class="icon-Unlink" ng-click="unlinkinternalurl()"></span></div></div>');
//     // tooltippop.css("display", "block");
//     }
//     $("span.tooltiptextdata").text(event.currentTarget.dataset.tooltipText);
//     $("span.internalpopIcon").attr("data-nodename", event.currentTarget.dataset.nodename);
//     $("span.internalpopIcon").attr("data-widgeticon", event.currentTarget.dataset.widgeticon);

//         var lineheight = parseInt($(event.target).parent().css('line-height').slice(0,-2));
//         var p = $(this);
//         var offset = p.offset();
//         if($(this).parents().hasClass('row-fluid-margin-for-mobile-port') || $(this).parents().hasClass('row-fluid-margin-for-mobile-land') || $(this).parents().hasClass('row-fluid-margin-for-tablet-port') || $(this).parents().hasClass('row-fluid-margin-for-tablet-land')){
//           $('.tooltippop').addClass('tooltippopDevice')
//         }
//         else{
//           $(".tooltippopDevice").removeClass("tooltippopDevice");
//         }
//         $('.tooltippop').css('top',(offset.top + lineheight - 15) + 'px');
//         $('.tooltippop').css('left',(offset.left+30) + 'px');
//         $('.tooltippop').css("display", "block");

// });

// $( "a.custmtitle").mouseout(function(e) {  

//     $('.tooltippop').css("display", "none");

// });

$(document).on('click touch', 'a.glossary-element', function (event) {
  event.preventDefault();
  event.stopPropagation();
  if ($(window.parent.$('.directPreview')).length > 0) {
    $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.preview-row-container').find('.glossarytooltippop').remove();
    // $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.glossarytooltippop')[1].remove();
    $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.preview-row-container').append('<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style="padding-right: 10px;"><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>');

    var id = parseInt(event.currentTarget.dataset.glossaryId);
    var glossarydata = window.glosseryListForSearch;
    for (let index = 0; index < glossarydata.length; index++) {
      if (glossarydata[index].id === id) {
        if (glossarydata[index].imagePath != "") {
          $(".glossaryImage").attr("src", glossarydata[index].imagePath);
          // document.getElementsByClassName("glossaryImage").src = "images/mt-15.jpg";
          // con.glossaryListforSearch[index].imagePath;
          // con.Glossary.PopImage = con.glossaryListforSearch[index].imagePath;
        } else {
          $(".glossaryImage").attr("src", "");
          $(".glossaryImage").parents('.glossaryimgdiv').hide();
        }
        if ($(".glossaryImage").attr("src") != "") {
          $(".glossaryImage").css({
            'height': '100%',
            'margin': '0 auto'
          });
          // $(".glossaryImage").css({'max-height':'200px', 'margin':'0 auto'});
          $(".glossaryimgdiv").css({
            'background-color': '#E8F1F6'
          });
          $(".glossaryImage").parents('.glossaryimgdiv').show();
        } else {
          // $(".glossaryImage").css({'height':'unset', 'width':''});
          $(".glossaryImage").parents('.glossaryimgdiv').hide();
        }
        $("span.glossaryPopTerm").text(glossarydata[index].term);
        $("span.glossaryPopDefinition").text(glossarydata[index].definition);
      }
    }

    var lineheight = parseInt($(event.target).parent().css('line-height').slice(0, -2));
    var p = $(this);
    var offset = p.offset();
    if ($(this).parents().hasClass('row-fluid-margin')) {
      $('.preview-row-container').find('.glossarytooltippop').addClass('tooltippopDevicedesktopPort');
    } else {
      $(".tooltippopDevice").removeClass("tooltippopDevicedesktopPort");
    }
    if ($(this).parents().hasClass('row-fluid-margin-for-tablet-port')) {
      $('.preview-row-container').find('.glossarytooltippop').addClass('tooltippopDeviceTabPort');
    } else {
      $(".tooltippopDevice").removeClass("tooltippopDeviceTabPort");
    }
    if ($(this).parents().hasClass('row-fluid-margin-for-tablet-land')) {
      $('.preview-row-container').find('.glossarytooltippop').addClass('tooltippopDeviceTabLand');
    } else {
      $(".tooltippopDevice").removeClass("tooltippopDeviceTabLand");
    }
    if ($(this).parents().hasClass('row-fluid-margin-for-mobile-port') || $(this).parents().hasClass('row-fluid-margin-for-mobile-land')) {
      $('.preview-row-container').find('.glossarytooltippop').addClass('tooltippopDeviceMobilePort')
    } else {
      $(".tooltippopDeviceMobile").removeClass("tooltippopDeviceMobilePort");
    }
    if ($(this).parents().hasClass('row-fluid-margin-for-mobile-land')) {
      $('.preview-row-container').find('.glossarytooltippop').addClass('tooltippopDeviceMobileLand')
    } else {
      $(".tooltippopDeviceMobile").removeClass("tooltippopDeviceMobileLand");
    }
    var offsettop = offset.top + $('.preview-row-container').scrollTop() + 20;
    $('.preview-row-container').find('.glossarytooltippop').css('top', offsettop + 'px');

    var articlewidth = $('.preview-row-container').eq(0).width();
    var popupwidth = $('.glossarytooltippop').width();
    var rowfluidmargin = parseInt($('.row-fluid').css('margin-left').slice(0, -2));
    if (offset.left - rowfluidmargin > articlewidth - popupwidth) {
      var offsetleft = articlewidth - popupwidth;
    } else {
      var offsetleft = offset.left - rowfluidmargin;
    }
    $('.preview-row-container').find('.glossarytooltippop').css('left', offsetleft + 'px');
    $('.preview-row-container').find('.glossarytooltippop').css("display", "block");
  } else {

    $('.white_center_bg_main').find('.glossarytooltippop').remove();

    var parser = new DOMParser();
    var appendglossary = '<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style="padding-right: 10px;"><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>';

    var el = parser.parseFromString(appendglossary, "text/html");
    $('.white_center_bg_main').append($(el).contents()[0].childNodes[1].childNodes[0]);

    //   var lineheight = parseInt($(event.target).parent().css('line-height').slice(0,-2));
    //     var p = $(this);
    //     var offset = p.offset();

    //     $('.glossarytooltippop').css('top',(offset.top + lineheight - 15) + 'px');
    //     $('.glossarytooltippop').css('left',(offset.left+30) + 'px');
    // $('.glossarytooltippop').css("display", "block");

    var id = parseInt(event.currentTarget.dataset.glossaryId);
    // var idx= window.glossaryListforSearch.findIndex(x => x.glossaryTermId == id);

    for (let index = 0; index < window.glossaryListforSearch.length; index++) {
      if (window.glossaryListforSearch[index].glossaryTermId === id) {
        if (window.glossaryListforSearch[index].imagePath != "") {
          $(".glossaryImage").attr("src", window.glossaryListforSearch[index].imagePath);
          // document.getElementsByClassName("glossaryImage").src = "images/mt-15.jpg";
          // con.glossaryListforSearch[index].imagePath;
          // con.Glossary.PopImage = con.glossaryListforSearch[index].imagePath;
        }
        if ($(".glossaryImage").attr("src") == undefined) {
          // $(".glossaryImage").css({'height':'unset', 'width':''});
          $(".glossaryImage").parents(".glossaryimgdiv").hide();

        } else {
          $(".glossaryImage").css({
            'height': '100%',
            'margin': '0 auto',
            'margin-top': '10px;'
          });
          $(".glossaryimgdiv").css({
            'background-color': '#E8F1F6'
          });
          $(".glossaryImage").parents(".glossaryimgdiv").show();
        }
        $("span.glossaryPopTerm").text(window.glossaryListforSearch[index].term);
        $("span.glossaryPopDefinition").text(window.glossaryListforSearch[index].definition);
      }
    }


    //  $('.white_center_bg_main').find('.glossarytooltippop').remove();
    // $('.white_center_bg_main').append('<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style=""><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>');

    // $('.white_center_bg_main').append('<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style=""><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>');

    //    var parser = new DOMParser();
    //    var appendglossary = '<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style=""><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>';

    //    var el = parser.parseFromString(appendglossary, "text/html");
    //    $('.white_center_bg_main').append($(el).contents()[0].childNodes[1].childNodes[0]);

    var lineheight = parseInt($(event.target).parent().css('line-height').slice(0, -2));
    var p = $(this);
    var offset = p.offset();
    var offsetleft = 0;
    if (offset.left < 70) {
      offsetleft = 70;
    } else if (offset.left > window.innerWidth - 500) {
      offsetleft = window.innerWidth - 500;
    } else {
      offsetleft = offset.left;
    }

    $('.glossarytooltippop').css('top', (offset.top + lineheight + 10) + 'px');
    $('.glossarytooltippop').css('left', offsetleft + 'px');
    $('.glossarytooltippop').css("display", "block");

  }

});


// $("a.glossary-element").click(function(event) {

//   if($(this).parents().hasClass('white_center_bg_main')){
//    var id = parseInt(event.currentTarget.dataset.glossaryId);
//       var idx= window.glossaryListforSearch.findIndex(x => x.glossaryTermId == id);
//         $(this).removeAttr("target");
//          $('.white_center_bg_main').find('.glossarytooltippop').remove();
//       $('.white_center_bg_main').append('<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style=""><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>');

//       var lineheight = parseInt($(event.target).parent().css('line-height').slice(0,-2));
//         var p = $(this);
//         var offset = p.offset();

//         $('.glossarytooltippop').css('top',(offset.top + lineheight - 15) + 'px');
//         $('.glossarytooltippop').css('left',(offset.left+30) + 'px');
//         $('.glossarytooltippop').css("display", "block");
//     }
//     else{
//     var glossarydata = window.parent.$('.previewed-html')[0].contentWindow.glossaryListforSearch;
//     $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.glossarytooltippop').remove();
//     $(window.parent.$('.previewed-html')[0].contentDocument.body).append('<div class="col-md-12 glossarytooltippop"><div class="col-md-12 glossaryimgdiv" style="padding: 0 !important;"><img class="glossaryImage" style="margin: 10px 0px;"></div><div class="col-md-12" style=""><span class="glossaryPopTerm pull-left" style="font-size: 14px; font-weight: bold;"></span></div><div class="col-md-12" style=""><span class="glossaryPopDefinition pull-left" style="text-align: justify; font-size: 12px;"></span></div></div>');


//      var id = parseInt(event.currentTarget.dataset.glossaryId);
//         for (let index = 0; index < glossarydata.length; index++) {
//           if (glossarydata[index].id === id) {
//             if (glossarydata[index].imagePath != "") {
//               $(".glossaryImage").attr("src", glossarydata[index].imagePath);
//               // document.getElementsByClassName("glossaryImage").src = "images/mt-15.jpg";
//               // con.glossaryListforSearch[index].imagePath;
//               // con.Glossary.PopImage = con.glossaryListforSearch[index].imagePath;
//             }
//             if($(".glossaryImage").attr("src")==undefined){
//               $(".glossaryImage").css({'height':'unset', 'width':''});
//             }
//             else{
//               $(".glossaryImage").css({'max-height':'300px', 'width':'300px', 'margin':'0 auto'});
//               $(".glossaryimgdiv").css({'background-color':'#E8F1F6'});

//             }
//             $("span.glossaryPopTerm").text(glossarydata[index].term);
//             $("span.glossaryPopDefinition").text(glossarydata[index].definition);
//           }
//         }

//         var lineheight = parseInt($(event.target).parent().css('line-height').slice(0,-2));
//         var p = $(this);
//         var offset = p.offset();
//         if($(this).parents().hasClass('row-fluid-margin-for-mobile-port') || $(this).parents().hasClass('row-fluid-margin-for-mobile-land') || $(this).parents().hasClass('row-fluid-margin-for-tablet-port') || $(this).parents().hasClass('row-fluid-margin-for-tablet-land')){
//           $('.glossarytooltippop').addClass('tooltippopDevice')
//         }
//         else{
//           $(".tooltippopDevice").removeClass("tooltippopDevice");
//         }
//         $('.glossarytooltippop').css('top',(offset.top + lineheight - 15) + 'px');
//         $('.glossarytooltippop').css('left',(offset.left+30) + 'px');
//         $('.glossarytooltippop').css("display", "block");
//     }

// });
var activeGllasryAudio, glossaryAssetsList, videoPlayer;
$("a.glossary-element").on('click touch', function (e) {
  e.preventDefault();
  e.stopImmediatePropagation();
  var event = e;
  var glossarydata = window.glossaryListforSearch ? window.glossaryListforSearch : window.parent.glossaryListforSearch;
  let tempAggregatedDataGlossaryList = getAggregatedDataGlossaryList(glossarydata);
  var isGlossaryTermIdRepeated = 0;
  var langList = [];
  console.log(tempAggregatedDataGlossaryList);

  if ($(this).parents().hasClass('white_center_bg_main')) {
    $(".elementActive").removeClass("elementActive");
    $('.white_center_bg_main').find('.glossarytooltippop').remove();
    var parser = new DOMParser();
    var appendglossary = '<div class="col-md-12 glossarytooltippop"><div class="glossary__tab"><span class="icon-Image glossary__tab__btn glossary_media_active_tab" title="Image"></span><span class="icon-audio glossary__tab__btn" title="Audio"></span><span class="icon-Video glossary__tab__btn" title="Video"></span> <span class="icon-Link glossary__tab__btn" title="Url"></span></div> <div class="glossary_media-container"><div class="img-container col-md-12 glossaryimgdiv"><img  class="glossaryImage" src=""></div><div class="audio-container col-md-12 hide"><div class="audio-player"> <div class="controls" id="glossaryAudio_player"><div class="play-container"><div class="toggle-play play"></div></div><div class="timeline"><div class="progress"></div></div><div class="time"> <div class="current">0:00</div><div class="divider">/</div> <div class="length">0:00</div></div> <div class="volume-container"><div class="volume-button"><div class="volume icono-volumeMedium"><i class="fas fa-volume-up"></i></div><span style="color: blue;font-size: 14px;margin-left: 7px;display:none">1X</span></div><div class="volume-slider"><div class="volume-percentage"></div></div></div> </div> </div> </div><div class="video-container col-md-12 hide"><video id="glossary_video_palyer" primary-video video-js vjs-default-skin vjs-big-play-centered awesome_video_class authoring-div tag no-border item-border" title="Video" controls="controls"><source class="glossary_video_palyer"  src="" type="video/mp4">Your browser does not support the video tag.</video></div><div class="url-container col-md-12 hide"><span style="background-color: #dbe3fe;padding: 7px;color: blue;display: flex;word-break: break-all;white-space: break-spaces;"></span></div><div class="col-md-12 glossary__trem" style=""><span class="glossaryPopTerm pull-left" style="font-size: 1.25rem; font-weight: bold;"></span> </div><div class="col-md-12 glossary__def" style="padding-right: 10px;"><span class="glossaryPopDefinition pull-left" style="text-align: left; font-size: 1.125rem;"></span></div><div class="glossary__dropdown col-md-12" style="padding: 0px 20px 20px;"> <div class="gl_label col-md-4" style="padding: 0px 27px 0px 0px;font-size:1.2rem;">Language:</div> <div class="gl-dropdown col-md-8" style="padding: 0px; display: flex;align-items: center;"><select class ="glossary_lang"  id="glossary_lang"> </select><span class="icon-Down" style="position: relative;right: 22px;width: 0%;"></span></div> </div></div></div>';
    var el = parser.parseFromString(appendglossary, "text/html");
    $('.glossary_lang').html('');
    $('.white_center_bg_main').append($(el).contents()[0].childNodes[1].childNodes[0]);
    var id = parseInt(e.currentTarget.dataset.glossaryId);
    for (let index = 0; index < window.glossaryListforSearch.length; index++) {
      if (window.glossaryListforSearch[index].glossaryTermId === id && isGlossaryTermIdRepeated != id) {
        isGlossaryTermIdRepeated = id;
        aggregatedDataGlossaryList = tempAggregatedDataGlossaryList[glossarydata[index].term];
        $(".glossary_audio_track").attr("src", glossarydata[index].audioPath ? glossarydata[index].audioPath : '');
        $(".glossary_video_palyer").attr("src", glossarydata[index].videoPath ? glossarydata[index].videoPath : "");
        $(".url-container span").text(glossarydata[index].url);
        activeGllasryAudio = glossarydata[index].audioPath;
        if (glossarydata[index].imagePath != "") {
          $(".glossaryImage").attr("src", glossarydata[index].imagePath);
        }
        if ($(".glossaryImage").attr("src") != undefined && $(".glossaryImage").attr("src") != '') {
          $(".glossaryImage").css({
            'height': '100%',
            'margin': '0 auto'
          });
          $(".glossaryimgdiv").css({
            'background-color': '#E8F1F6'
          });
          $(".glossaryImage").parents('.glossaryimgdiv').show();

        } else {
          $(".glossaryImage").parents('.glossaryimgdiv').hide();
        }
        if (aggregatedDataGlossaryList.length > 1) {
          aggregatedDataGlossaryList.forEach((value, index) => {
            // ad filter for lang
            if (!langList.includes(value.lang)) {
              langList.push(value.lang)
              // var data = "<option value='" + value.lang + "'>" + value.lang + "</option>";
              // $('.glossary_lang').append(data);
            }
          });
          if (langList.length > 1) {
            langList.forEach((value, index) => {
              // ad filter for lang
              $('.glossary__dropdown').css('display', 'flex');
              var data = "<option value='" + value + "'>" + value + "</option>";
              $('.glossary_lang').append(data);

            });
          } else {
            $('.glossary__dropdown').css('display', 'none');
          }
          document.getElementById('glossary_lang').value = glossarydata[index].lang;
        } else {
          $('.glossary__dropdown').css('display', 'none');
        }
        $("span.glossaryPopTerm").text(window.glossaryListforSearch[index].term);
        $("span.glossaryPopDefinition").text(glossarydata[index].definition);
        $(this).addClass('elementActive');
        data = glossarydata[index];
        hideGlossaryTab(data, false);
      }
    }


    var lineheight = parseInt($(event.target).parent().css('line-height').slice(0, -2));
    var p = $(this);
    var offset = p.offset();
    var offsetleft = 0;
    if (offset.left < 70) {
      offsetleft = 70;
    } else if (offset.left > window.innerWidth - 448) {
      offsetleft = window.innerWidth - 448;
    } else {
      offsetleft = offset.left;
    }
    $('.glossarytooltippop').css('top', (offset.top + lineheight + 15) + 'px');
    $('.glossarytooltippop').css('left', offsetleft + 'px');
    $('.glossarytooltippop').css("display", "block");
    var mediaContainer = document.querySelector('.glossary_media-container');
    if (mediaContainer) {
      mediaContainer.scrollTop = 0;
    }

    // checkPopupSpaceforOpen(event);
  } else {
    $(".elementActive").removeClass("elementActive");
    var glossarydata = window.parent.$('.previewed-html')[0].contentWindow.glossaryListforSearch;
    $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.preview-row-container').find('.glossarytooltippop').remove();
    $(window.parent.$('.previewed-html')[0].contentDocument.body).find('.preview-row-container').append(`
      <div class="col-md-12 glossarytooltippop">
          <div class="glossary__tab">
              <span class="icon-Image glossary__tab__btn glossary_media_active_tab" title="Image"></span>
              <span class="icon-audio glossary__tab__btn" title="Audio"></span>
              <span class="icon-Video glossary__tab__btn" title="Video"></span>
              <span class="icon-Link glossary__tab__btn" title="Url"></span>
          </div> 
          <div class="glossary_media-container">
              <div class="img-container col-md-12 glossaryimgdiv">
                  <img class="glossaryImage" src="">
              </div>
              <div class="audio-container col-md-12 hide">
                  <div class="audio-player"> 
                      <div class="controls" id="glossaryAudio_player">
                          <div class="play-container">
                              <div class="toggle-play play"></div>
                          </div>
                          <div class="timeline">
                              <div class="progress"></div>
                          </div>
                          <div class="time"> 
                              <div class="current">0:00</div>
                              <div class="divider">/</div> 
                              <div class="length">0:00</div>
                          </div>
                          <div class="volume-container">
                              <div class="volume-button">
                                  <div class="volume icono-volumeMedium">
                                      <i class="fas fa-volume-up"></i>
                                  </div>
                                  <span style="color: blue; font-size: 14px; margin-left: 7px; display: none">1X</span>
                              </div>
                              <div class="volume-slider">
                                  <div class="volume-percentage"></div>
                              </div>
                          </div> 
                      </div> 
                  </div>
              </div>
              <div class="video-container col-md-12 hide">
                  <video id="glossary_video_palyer" class="primary-video video-js vjs-default-skin vjs-big-play-centered awesome_video_class authoring-div tag no-border item-border" title="Video" controls>
                      <source class="glossary_video_palyer" src="" type="video/mp4">Your browser does not support the video tag.
                  </video>
              </div>
              <div class="url-container col-md-12 hide">
                  <span style="background-color: #dbe3fe; padding: 7px; color: blue; display: flex; word-break: break-all; white-space: break-spaces;"></span>
              </div>
              <div class="col-md-12 glossary__trem">
                  <span class="glossaryPopTerm pull-left" style="font-size: 1.25rem; font-weight: bold;"></span> 
              </div>
              <div class="col-md-12 glossary__def" style="padding-right: 10px;">
                  <span class="glossaryPopDefinition pull-left" style="text-align: left; font-size: 1.125rem;"></span>
              </div>
              <div class="glossary__dropdown col-md-12" style="padding: 0px 20px 20px;">
                  <div class="gl_label col-md-4" style="padding: 0px 27px 0px 0px; font-size: 1.2rem;">Language:</div>
                  <div class="gl-dropdown col-md-8" style="padding: 0px; display: flex;align-items: center;">
                      <select class="glossary_lang" id="glossary_lang"></select>
                       <span class="icon-Down" style="position: relative;right: 22px;width: 0%;"></span>
                  </div>
              </div>
          </div>
      </div>
  `);
    $('.glossary_lang').html('');
    if ($(".glossaryImage").attr("src") != undefined) {
      // $(".glossaryImage").css({'max-height':'200px', 'margin':'0 auto'});
      $(".glossaryImage").css({
        'height': '100%',
        'margin': '0 auto'
      });
      $(".glossaryimgdiv").css({
        'background-color': '#E8F1F6'
      });
      $(".glossaryImage").parents('.glossaryimgdiv').show();
    } else {
      $(".glossaryImage").parents('.glossaryimgdiv').hide();
    }
    var id = parseInt(event.currentTarget.dataset.glossaryId);
    var data = "";
    for (let index = 0; index < glossarydata.length; index++) {
      if (glossarydata[index].id === id || glossarydata[index].glossaryTermId == id) {
        console.log(tempAggregatedDataGlossaryList);
        aggregatedDataGlossaryList = tempAggregatedDataGlossaryList[glossarydata[index].term];
        let isPreview = $(document).find('.preview-row-container').length;
        if ((aggregatedDataGlossaryList[0].imagePath || aggregatedDataGlossaryList[0].videoPath || aggregatedDataGlossaryList[0].audioPath) && isPreview) {
          let resData = [];
          hideGlossaryTab(aggregatedDataGlossaryList[0], false);
          if (aggregatedDataGlossaryList[0].imagePath) {
            resData.push(aggregatedDataGlossaryList[0].imagePath)
          }
          if (aggregatedDataGlossaryList[0].videoPath) {
            resData.push(aggregatedDataGlossaryList[0].videoPath)
          }
          if (aggregatedDataGlossaryList[0].audioPath) {
            resData.push(aggregatedDataGlossaryList[0].audioPath)
          }

          fetchGlossaryAssetDetailsById(resData,
            function (responseData) {
              if (glossarydata[index].imagePath != "") {
                $(".glossaryImage").attr("src", getAssetsUrl(glossarydata[index].imagePath));
              }
              $(".glossary_audio_track").attr("src", glossarydata[index].audioPath ? getAssetsUrl(glossarydata[index].audioPath) : '');
              $(".glossary_video_palyer").attr("src", glossarydata[index].videoPath ? getAssetsUrl(glossarydata[index].videoPath) : "");
              setTimeout(function () {
                var video = document.getElementById('glossary_video_palyer');
                if (video) {
                  videoPlayer = videojs(video);
                  videoPlayer.src({
                    type: 'video/mp4',
                    src: getAssetsUrl(glossarydata[index].videoPath)
                  });
                } else {
                  console.error("Video element not found or ID is incorrect.");
                }
              }, 500);
              activeGllasryAudio = glossarydata[index].audioPath ? getAssetsUrl(glossarydata[index].audioPath) : "";
              if ($(".glossaryImage").attr("src") == undefined || glossarydata[index].imagePath == "") {
                // $(".glossaryImage").css({'height':'unset', 'width':''});
                $(".glossaryImage").parents(".glossaryimgdiv").hide();
              } else {
                //  $(".glossaryImage").css({'max-height':'200px', 'margin':'0 auto', 'margin-top': '10px;'});
                $(".glossaryImage").css({
                  'height': '100% !imp',
                  'margin': '0 auto',
                  'margin-top': '10px;'
                });
                $(".glossaryimgdiv").css({
                  'background-color': '#E8F1F6',
                  'display': 'block'
                });
                $(".glossaryImage").parents(".glossaryimgdiv").show();
              }

              $("span.glossaryPopTerm").text(glossarydata[index].term);

              if (aggregatedDataGlossaryList.length > 1) {
                $('.glossary__dropdown').css('display', 'flex');
                aggregatedDataGlossaryList.forEach((value, index) => {
                  var data = "<option value='" + value.lang + "'>" + value.lang + "</option>";
                  $('.glossary_lang').append(data);
                });
              } else {
                $('.glossary__dropdown').css('display', 'none');
              }
              $(".url-container span").text(glossarydata[index].url)
              data = glossarydata[index];
              hideGlossaryTab(data, false);
              // checkPopupSpaceforOpen(event);
            },
            function (statusCode, textStatus, errorThrown) {
              console.error('Error:', statusCode, textStatus, errorThrown);
              // Handle errors here
            });
        } else {
          data = glossarydata[index];
          $('.img-container').addClass('hide');
          $('.glossary__dropdown').css('display', 'none');
          hideGlossaryTab(data, false);
        }
        $("span.glossaryPopTerm").text(glossarydata[index].term);
        $("span.glossaryPopDefinition").text(glossarydata[index].definition);
      }
    }
    var mediaContainer = document.querySelector('.glossary_media-container');
    if (mediaContainer) {
      mediaContainer.scrollTop = 0;
    }
  }

  if (audio) {
    const audioPlayer = document.querySelector(".audio-player");
    const playBtn = audioPlayer.querySelector(".controls .toggle-play");
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");
    audio.pause();
  }
  if (videoPlayer) {
    videoPlayer.pause();
  } else if (document.getElementById('glossary_video_palyer')) {
    document.getElementById('glossary_video_palyer').pause();
  }
  var lineheight = parseInt($(event.target).parent().css('line-height').slice(0, -2));
  var p = $(this);
  var offset = p.offset();
  if ($(this).parents().hasClass('row-fluid-margin')) {
    $('.glossarytooltippop').addClass('tooltippopDevicedesktopPort');
  } else {
    $(".tooltippopDevice").removeClass("tooltippopDevicedesktopPort");
  }
  if ($(this).parents().hasClass('row-fluid-margin-for-tablet-port')) {
    $('.glossarytooltippop').addClass('tooltippopDeviceTabPort');
  } else {
    $(".tooltippopDevice").removeClass("tooltippopDeviceTabPort");
  }
  if ($(this).parents().hasClass('row-fluid-margin-for-tablet-land')) {
    $('.glossarytooltippop').addClass('tooltippopDeviceTabLand');
  } else {
    $(".tooltippopDevice").removeClass("tooltippopDeviceTabLand");
  }
  if ($(this).parents().hasClass('row-fluid-margin-for-mobile-port') || $(this).parents().hasClass('row-fluid-margin-for-mobile-land')) {
    $('.glossarytooltippop').addClass('tooltippopDeviceMobilePort')
  } else {
    $(".tooltippopDeviceMobile").removeClass("tooltippopDeviceMobilePort");
  }
  if ($(this).parents().hasClass('row-fluid-margin-for-mobile-land')) {
    $('.glossarytooltippop').addClass('tooltippopDeviceMobileLand')
  } else {
    $(".tooltippopDeviceMobile").removeClass("tooltippopDeviceMobileLand");
  }
  var offsettop = offset.top + $('.preview-row-container').scrollTop();
  // $('.glossarytooltippop').css('top',offsettop+ 'px');
  if ($(this).parents().hasClass('white_center_bg_main')) {
    $('.glossarytooltippop').css('top', (offsettop + lineheight) + 'px');
  } else {
    $('.glossarytooltippop').css('top', ((offsettop - 10) + lineheight) + 'px');
  }

  var articlewidth = $('.preview-row-container').eq(0).width();
  var popupwidth = 448 //$('.glossarytooltippop').width();
  var rowfluidmargin = parseInt($('.row-fluid').css('margin-left').slice(0, -2));
  if (offset.left - rowfluidmargin > articlewidth - popupwidth) {
    var offsetleft = articlewidth - popupwidth;
  } else {
    var offsetleft = offset.left - rowfluidmargin;
  }
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1;
  if (isSafari) {
    if ($('.row-fluid').hasClass('row-fluid-margin')) {
      offsetleft = offsetleft + rowfluidmargin;
    }
  }
  $('.glossarytooltippop').css('left', offsetleft + 'px');
  $('.glossarytooltippop').css("display", "block");


});

function getAggregatedDataGlossaryList(glossaryData) {
  var tempLangList = {};
  glossaryData.forEach(item => {
    const key = item.term;
    var value = {};
    value["audioPath"] = item.audioPath;
    value["definition"] = item.definition;
    value["id"] = item.id ? item.id : item.glossaryTermId;
    value["imagePath"] = item.imagePath;
    value["lang"] = item.lang == "" || item.lang == undefined ? "Unkown" : item.lang;
    value["pronunciation"] = item.pronunciation;
    value["term"] = item.translation;
    value["url"] = item.url;
    value["videoPath"] = item.videoPath;
    value["videoTracks"] = item.videoTracks;
    if (tempLangList[key]) {
      // If key exists, push the value to the array
      tempLangList[key].push(value);
    } else {
      // If key doesn't exist, create a new array with the value
      tempLangList[key] = [value];
    }

  });
  return tempLangList;
  // aggregatedDataGlossaryList = tempLangList[glossaryData[index].term];
}

function getUserToken(variable, query) {
  var query = (!query) ? window.location.search.substring(1) : query,
    i, pair,
    vars = query.split("&");
  for (i = 0; i < vars.length; i++) {
    if (variable == 'courseId') {
      pair = vars[i].split("courseId=");
      return pair[1];
    } else if (variable == 'userToken') {
      pair = vars[i + 1].split("userToken=");
      return pair[1];
    } else if (variable == 'mode') {
      if (vars.length > 2) {
        pair = vars[i + 2].split("mode=");
        return pair[1];
      } else {
        return undefined;
      }
    }
  }
}

function fetchGlossaryAssetDetailsById(data, successCallback, errorCallback) {
  var baseUrl = window.platform == "prod" ? "https://microservices.kitaboo.com" : "https://stagmicro.kitaboo.com"
  $.ajax({
    url: baseUrl + "/v1/glossarymanager/auth/glossaryServices/fetchGlossaryAssetDetails",
    type: 'POST',
    contentType: 'application/json',
    headers: {
      'userToken': getUserToken('userToken')
    },
    data: JSON.stringify({
      keys: data
    }),
    success: function (responseData) {
      glossaryAssetsList = responseData.glossaryPaths;
      successCallback(responseData);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      errorCallback(jqXHR.status, textStatus, errorThrown);
    }
  });
}

function getAssetsUrl(id) {
  if (id) {
    return glossaryAssetsList[id]
  }
}


function hideGlossaryTab(data, isDropdown) {
  if (data.imagePath) {
    $('.icon-Image').removeClass('hide');
  } else {
    $('.icon-Image').addClass('hide');
  }
  if (data.audioPath) {
    $('.icon-audio').removeClass('hide');
  } else {
    $('.icon-audio').addClass('hide');
  }
  if (data.videoPath) {
    $('.icon-Video').removeClass('hide');
  } else {
    $('.icon-Video').addClass('hide');
  }
  if (data.url) {
    $('.icon-Link').removeClass('hide');
  } else {
    $('.icon-Link').addClass('hide');
  }
  if (isDropdown) {
    showMediaOnDropdownChange();
  }

}

function showMediaOnDropdownChange() {
  let parent = $('.glossary__tab');
  let chlds = parent.children()
  let isActiveClassSet = false;
  $(".img-container").css({
    'display': 'none'
  });
  // $(chlds).each(function(index, element) {
  for (let i = 0; i < chlds.length; i++) {
    $('.icon-Image, .icon-audio, .icon-Video, .icon-Link').removeClass('glossary_media_active_tab');
    $('.img-container,.audio-container, .video-container, .url-container').addClass('hide');
    if ($(chlds[i]).hasClass('icon-Image') && !$(chlds[i]).hasClass('hide') && !isActiveClassSet) {
      isActiveClassSet = true;
      $('.icon-Image').addClass('glossary_media_active_tab');
      $(".img-container").css({
        'display': 'block'
      });
      break;
    } else if ($(chlds[i]).hasClass('icon-audio') && !$(chlds[i]).hasClass('hide') && !isActiveClassSet) {
      isActiveClassSet = true;
      $('.icon-audio').addClass('glossary_media_active_tab');
      $('.audio-container').removeClass('hide');
      break;
    } else if ($(chlds[i]).hasClass('icon-Video') && !$(chlds[i]).hasClass('hide') && !isActiveClassSet) {
      isActiveClassSet = true;
      $('.icon-Video').addClass('glossary_media_active_tab');
      $('.video-container').removeClass('hide');
      break;
    } else if ($(chlds[i]).hasClass('icon-Link') && !$(chlds[i]).hasClass('hide') && !isActiveClassSet) {
      isActiveClassSet = true;
      $('.icon-Link').addClass('glossary_media_active_tab');
      $('.url-container').removeClass('hide');
      break;
    }
  }
  // });
}
// $( "a.glossary-element").mouseout(function(e) {  

//     $('.glossarytooltippop').css("display", "none");

// });
// $( "a.glossary-element").touchend(function(e) {  

//   $('.glossarytooltippop').css("display", "none");

// });
$('.preview-row-container').on('click touch', function (e) {
  if ($(e.target).parents('.glossarytooltippop').length == 0) {
    if (audio) {
      const audioPlayer = document.querySelector(".audio-player");
      const playBtn = audioPlayer.querySelector(".controls .toggle-play");
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
    if (videoPlayer) {
      videoPlayer.pause();
    } else if (document.getElementById('glossary_video_palyer')) {
      document.getElementById('glossary_video_palyer').pause();
    }
    $('.glossarytooltippop').css("display", "none");
    if (audio) {
      const audioPlayer = document.querySelector(".audio-player");
      const playBtn = audioPlayer.querySelector(".controls .toggle-play");
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
    if (videoPlayer) {
      videoPlayer.pause();
    } else if (document.getElementById('glossary_video_palyer')) {
      document.getElementById('glossary_video_palyer').pause();
    }
  }
});
$(document).on('click touch', '.preview-row-container', function (e) {
  if ($(e.target).parents('.glossarytooltippop').length == 0) {

    $('.glossarytooltippop').css("display", "none");
  }
});

$('.white_center_bg_main').on('click touch', function (e) {
  if ($(e.target).parents('.glossarytooltippop').length == 0) {
    if (audio) {
      const audioPlayer = document.querySelector(".audio-player");
      const playBtn = audioPlayer.querySelector(".controls .toggle-play");
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
    if (videoPlayer) {
      videoPlayer.pause();
    } else if (document.getElementById('glossary_video_palyer')) {
      document.getElementById('glossary_video_palyer').pause();
    }
    $('.glossarytooltippop').css("display", "none");
  }
});

$(document).on('click touch', '.white_center_bg_main', function (e) {
  if ($(e.target).parents('.glossarytooltippop').length == 0) {
    $('.glossarytooltippop').css("display", "none");
  }
});

$('.preview-row-container').scroll(function () {
  if ($('.glossarytooltippop:visible').length > 0 && $('.row-fluid').hasClass('row-fluid-margin')) {
    var p = $("a.glossary-element.elementActive");
    var offset = p.offset();
    $('.glossarytooltippop').css('top', (offset.top + 20) + 'px');
  }
});

var tapped = false
$(document).on('click tap', '.inputbox-selected.sort-text-selected.sort-in.draggable-div.ui-draggable', function (e) {
  $(".inputbox-selected.SortOptionView").each(function (i) {
    $(this).removeClass("SortOptionView");
  });
  if (!tapped) {
    tapped = setTimeout(function () {
      tapped = null;
      $(document).find('.inputbox-selected.SortOptionView').removeClass("SortOptionView");
    }, 500);
  } else {
    // $(".inputbox-selected.SortOptionView").each(function(i) {
    //   // $(this).parent('.form-control-wrap').css('height', '30px');
    //   $(this).removeClass("SortOptionView");
    // });
    clearTimeout(tapped);
    tapped = null;
    if ($(this)[0].innerText.length > 25) {
      $(this).addClass('SortOptionView');
    }
  }
});

$(document).off('click').on('click', '.keyboard_btn', function (e) {
  e.preventDefault()
  e.stopPropagation();
  $('.close__custom__keyBoard').addClass('hide');
  $('.open__custom__keyBoard').removeClass('hide');
  var currentKeyboardEle = $($(e.currentTarget).siblings()[0]);
  if ($(currentKeyboardEle).hasClass('hide')) {
    $('.keyboard-parent').addClass('hide');
    $($(e.currentTarget).siblings()).find('.keyboard-parent').removeClass('hide')
    $(e.currentTarget).find('.close__custom__keyBoard').removeClass('hide');
    $(e.currentTarget).find('.open__custom__keyBoard').addClass('hide');
    $('.keyboard-parent').addClass('hide');
    $(currentKeyboardEle).removeClass('hide');
      // tempScopeActiveKeyboardLanguage = customKeyboardLanguageData['spanish'];
      // bindKeybordBtn(customKeyboardLanguageData['spanish']);
      let userSubjectLang = localStorage.getItem("userSubjectLang")? localStorage.getItem("userSubjectLang") : window.parent.userSubjectLang.trim()
      ;
      let SelectLang = customKeyboardLanguageData.filter(item => item.subject === userSubjectLang);
      if(SelectLang.length){
        tempScopeActiveKeyboardLanguage = SelectLang[0][Object.keys(SelectLang[0])[1]]//con.customKeyboardLanguageData['spanish'];
        $('.custom-keyboardTabName').text(Object.keys(SelectLang[0])[1].toUpperCase())
      }
      bindKeybordBtn(tempScopeActiveKeyboardLanguage);
      // $('.tab-text').removeClass('active-Tab');
      // $('.'+userSubjectLang).addClass('active-Tab');

      // $('.tab-text').removeClass('active-Tab');
      // $('.spanish').addClass('active-Tab');
  } else {
    $('.close__custom__keyBoard').addClass('hide');
    $('.open__custom__keyBoard').removeClass('hide');
    $('.keyboard-parent').addClass('hide');
  }
});

function bindKeybordBtn(btnList) {
  $('.keys').html('');
  for (let i = 0; i < btnList.length; i++) {
    let data = '<div data-key="65" class="key__button" >' + btnList[i] + '</div>';
    $('.keys').append(data);
  }
}

function checkPopupSpaceforOpen(event) {
  const button = event.currentTarget //document.getElementsByClassName('glossary-element elementActive')[0];
  const popup = document.getElementsByClassName('glossarytooltippop')[0];
  // Get button position
  var rect = button.getBoundingClientRect();
  var buttonTop = rect.top;
  var buttonHeight = rect.height;

  // Get popup height
  var popupHeight = popup.offsetHeight;

  // Calculate space available above and below the button
  var spaceAbove = buttonTop;
  var spaceBelow = window.innerHeight - (buttonTop + buttonHeight);

  if (spaceBelow >= popupHeight) {
    // Enough space below, open the popup below the button
    popup.style.top = buttonTop + buttonHeight + 'px';
  } else if (spaceAbove >= popupHeight) {
    // Enough space above, open the popup above the button
    popup.style.top = buttonTop - popupHeight + 'px';
  } else {
    // Not enough space both above and below, open below by default
    popup.style.top = buttonTop + buttonHeight + 'px';
  }

  popup.style.display = 'block';
}

function submitAllActivityBasedOnReaderPostMessage(event){
  const iframes = window.parent.document.querySelectorAll('iframe')//document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
      // Try to access iframe content (this works if same-origin policy allows it)
      try {
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          
          // Find all submit buttons in the iframe
          const submitButtons = iframeDocument.querySelectorAll('.submit-btn');
          
          submitButtons.forEach(button => {
            button.click();
            console.log('Found submit button in iframe:', iframe.src);
            console.log(button);
          });
         
      } catch (e) {
          console.error('Could not access iframe content:', iframe.src);
      }
  });
  event.source.postMessage('All submition done', iframe.src);
}

$(document).on('click', '.tab-text',function(e){
  if(e){
    $('.tab-text').removeClass('active-Tab');
    $(e.currentTarget).addClass('active-Tab')
  }
  var tabName = e.currentTarget.textContent
  tempScopeActiveKeyboardLanguage = customKeyboardLanguageData[tabName.toLocaleLowerCase()];
  bindKeybordBtn(customKeyboardLanguageData[tabName.toLocaleLowerCase()]);
});

$(document).on('click', '.key__button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  if($(e.target).parents('.customClass[data-type="fill-in-the-blank"]').length){
    let ele = $('.active_fib_input')
    // if (ele.length) {
    //   ele[0].value += e.currentTarget.textContent;
    // } else {
    //   document.execCommand('insertText', false, e.currentTarget.textContent);
    // }
    document.execCommand('insertText', false, e.currentTarget.textContent);
  }
  
  if ($(e.currentTarget.parentNode.parentNode.parentNode.parentNode).attr('data-type') == 'shortLongAns' ||
   $(e.currentTarget.parentNode.parentNode.parentNode.parentNode).hasClass('ITCForm') ) {
    return
  } else {

    var $eventTarget = $(e.target),
      $form = $eventTarget.parents('form'),
      $inputs = $form.find('input');
    $form.find('.incorrect-attempt').removeClass('incorrect-attempt');
    $form.find(".alert.fib-pop-up").css('display', 'none');
    if (!$form.find('input.inputbox-selected.FIB_style_inputbox').attr('disabled') && $form.find('input.inputbox-selected.FIB_style_inputbox:focus').length) {
      $form.find('.submit-btn').removeClass('disabled');
      $form.find('.reset').removeClass('disabled');
      $form.find('.incorrect-tick').remove();
    }
    var isFibAttempted = false;
    $form.find('input').each(function (idx, itm) {
      if (itm.value != "") {
        isFibAttempted = true;
      }
    });
    if (isFibAttempted) {
      $form.addClass("attempted-question");
    } else {
      $form.removeClass("attempted-question");
    }
    if (!$form.parents('.customClass').attr('latencyTime') || $form.parents('.customClass').attr('activityStartTime') == $form.parents('.customClass').attr('latencyTime')) {
      let d = new Date();
      let tm = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      $form.parents('.customClass').attr('latencyTime', tm);
    }
    if ($form.parents(".group-interactivity-container").find("form.attempted-question").length == $form.parents(".group-interactivity-container").find("form").length) {
      $form.parents(".group-interactivity-container").addClass("enableSubmit");
    }
    for (var i = 0; i < $inputs.length; i++) {
      if ($($inputs[i]).val().trim() === '') {
        $form.find('.fib-submit').addClass('disabled');
      }
    }
    
    // if ((typeof apiHandle != "undefined") && $($form).parent('.fib').length > 0) {
    //   stateMainatainFIB(e);
    // }
  }


  // var ele = $(document.activeElement).find('input.inputbox-selected');
  // $(ele).keyup();
  // setTimeout(() => {
  //   $(document.activeElement).find('input.inputbox-selected').keyup();
  // }, 100);

})

$(document).on('click', '.glossary__tab__btn', function (event) {
  console.log(event);
  if (audio) {
    const audioPlayer = document.querySelector(".audio-player");
    const playBtn = audioPlayer.querySelector(".controls .toggle-play");
    playBtn.classList.remove("pause");
    playBtn.classList.add("play");
    audio.pause();
  }
  if (videoPlayer) {
    videoPlayer.pause();
  } else if (document.getElementById('glossary_video_palyer')) {
    document.getElementById('glossary_video_palyer').pause();
  }
  // document.getElementById('glossary_audio_palyer').pause();
  $('.glossary__tab__btn').removeClass('glossary_media_active_tab');
  $(event.currentTarget).addClass('glossary_media_active_tab');
  var mediaParent = $(event.currentTarget).parents('.glossarytooltippop').find('.glossary_media-container');
  $(mediaParent).find('.img-container, .audio-container, .video-container, .url-container').addClass('hide');
  if ($(event.currentTarget).hasClass('icon-Image')) {
    $(".img-container").css({
      'display': 'block'
    });
    $(mediaParent).find('.img-container').removeClass('hide');
  } else if ($(event.currentTarget).hasClass('icon-audio')) {
    initAudioPlayer();
    $(mediaParent).find('.audio-container').removeClass('hide');
    $(".img-container").css({
      'display': 'none'
    });
  } else if ($(event.currentTarget).hasClass('icon-Video')) {
    $(mediaParent).find('.video-container').removeClass('hide');
    $(".img-container").css({
      'display': 'none'
    });
  } else if ($(event.currentTarget).hasClass('icon-Link')) {
    $(mediaParent).find('.url-container').removeClass('hide');
    $(".img-container").css({
      'display': 'none'
    });
  }
  var mediaContainer = document.querySelector('.glossary_media-container');
  if (mediaContainer) {
    mediaContainer.scrollTop = 0;
  }
});

// Possible improvements:
// - Change timeline and volume slider into input sliders, reskinned
// - Change into Vue or React component
// - Be able to grab a custom title instead of "Music Song"
// - Hover over sliders to see preview of timestamp/volume change
var audio;
var audioPlayer;

function initAudioPlayer() {
  audioPlayer = document.querySelector(".audio-player");
  audio = null;
  audio = new Audio(
    activeGllasryAudio
  );
  audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
        audio.duration
      );
      audio.volume = 0.75;
    },
    false
  );


  //click on timeline to skip around
  const timeline = audioPlayer.querySelector(".timeline");
  timeline.addEventListener(
    "click",
    (e) => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = (e.offsetX / parseInt(timelineWidth)) * audio.duration;
      audio.currentTime = timeToSeek;
    },
    false
  );

  //click volume slider to change volume
  const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
  volumeSlider.addEventListener(
    "click",
    (e) => {
      const sliderWidth = window.getComputedStyle(volumeSlider).width;
      const newVolume = e.offsetX / parseInt(sliderWidth);
      audio.volume = newVolume;
      audioPlayer.querySelector(".controls .volume-percentage").style.width =
        newVolume * 100 + "%";
    },
    false
  );

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
    if (progressBar.style.width == "100%") {
      const playBtn = audioPlayer.querySelector(".controls .toggle-play");
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
    }
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  // playBtn.addEventListener(
  //   "click",
  //   (event) => {
  //     event.preventDefault();
  //     if (audio.paused) {
  //       playBtn.classList.remove("play");
  //       playBtn.classList.add("pause");
  //       audio.play();
  //     } else {
  //       playBtn.classList.remove("pause");
  //       playBtn.classList.add("play");
  //       audio.pause();
  //     }
  //   },
  //   false
  // );

  audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });
}

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

$(document).on('click', ".controls .toggle-play", function (event) {
  const audioPlayer = document.querySelector(".audio-player");
  // const audio = audioPlayer.querySelector("audio");
  const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  if (audio) {
    if (audio.paused) {
      playBtn.classList.remove("play");
      playBtn.classList.add("pause");
      audio.play();
    } else {
      playBtn.classList.remove("pause");
      playBtn.classList.add("play");
      audio.pause();
    }
  }

})

function changeGlossaryLanguage(event) {
  console.log(event);
}


$(document.body).on('change', '.glossary_lang', function (event) {
  let selectedLang = aggregatedDataGlossaryList.filter(item => item.lang == event.currentTarget.value)[0];
  if ($('.preview-row-container').length) {
    let resData = [];
    if (selectedLang.imagePath) {
      resData.push(selectedLang.imagePath)
    }
    if (selectedLang.videoPath) {
      resData.push(selectedLang.videoPath)
    }
    if (selectedLang.audioPath) {
      resData.push(selectedLang.audioPath)
    }
    fetchGlossaryAssetDetailsById(resData,
      function (responseData) {
        var videoJs = videojs;
        glossaryAssetsList = responseData.glossaryPaths;
        $(".glossaryImage").attr("src", selectedLang.audioPath ? getAssetsUrl(selectedLang.imagePath) : '');
        $(".glossary_audio_track").attr("src", selectedLang.audioPath ? getAssetsUrl(selectedLang.audioPath) : '');
        $(".glossary_video_palyer").attr("src", selectedLang.videoPath ? getAssetsUrl(selectedLang.videoPath) : "");
        $(".url-container span").text(selectedLang.url)
        $("span.glossaryPopDefinition").text(selectedLang.definition);
        setTimeout(function () {
          var video = document.getElementById('glossary_video_palyer');
          if (video) {
            videoPlayer = videoJs(video);
            videoPlayer.src({
              type: 'video/mp4',
              src: getAssetsUrl(selectedLang.videoPath)
            });
          } else {
            console.error("Video element not found or ID is incorrect.");
          }
        }, 500);
        if (selectedLang.audioPath) {
          activeGllasryAudio = getAssetsUrl(selectedLang.audioPath);
          if (audio) {
            const audioPlayer = document.querySelector(".audio-player");
            const playBtn = audioPlayer.querySelector(".controls .toggle-play");
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            audio.pause();
          }
          initAudioPlayer();
        }
        hideGlossaryTab(selectedLang, true);
        var mediaContainer = document.querySelector('.glossary_media-container');
        if (mediaContainer) {
          mediaContainer.scrollTop = 0;
        }
      },
      function (statusCode, textStatus, errorThrown) {
        console.error('Error:', statusCode, textStatus, errorThrown);
        // Handle errors here
      });
  } else {
    $(".glossaryImage").attr("src", selectedLang.imagePath);
    $(".glossary_audio_track").attr("src", selectedLang.audioPath);
    $(".url-container span").text(selectedLang.url)
    $("span.glossaryPopDefinition").text(selectedLang.definition);
    activeGllasryAudio = selectedLang.audioPath;
    if (activeGllasryAudio) {
      if (audio) {
        const audioPlayer = document.querySelector(".audio-player");
        const playBtn = audioPlayer.querySelector(".controls .toggle-play");
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
        initAudioPlayer();
      }
    }
    var videoUrl = selectedLang.videoPath;
    var video = document.getElementById("glossary_video_palyer");

    video.src = videoUrl;
    video.load();
    var mediaContainer = document.querySelector('.glossary_media-container');
    if (mediaContainer) {
      mediaContainer.scrollTop = 0;
    }
    hideGlossaryTab(selectedLang, true)
  }

});

$(document).on('click', ".url-container", function (event) {
  event.preventDefault();
  window.open(event.currentTarget.textContent);
});

$(document).on('click', ".fib_input_click", function (event) {
  $('.fib_input_click').removeClass('active_fib_input');
  $(event.currentTarget).addClass('active_fib_input');
});

$(document).ready(function(){
  if(typeof getAPIHandle != "undefined"){
    var apiHandle = getAPIHandle();
    var isSafari = /iPhone|Macintosh|iPad/g.test(navigator.userAgent);
    if(apiHandle && isSafari){
      setTimeout(() => {
        setDataOnload(); 
        initializelmsonLoad();
      }, 0);
    }
  }
});
$(window).load(function () { 
  if(typeof getAPIHandle != "undefined"){
    var apiHandle = getAPIHandle();
    var isSafari = /iPhone|Macintosh|iPad/g.test(navigator.userAgent);
    if(apiHandle && !isSafari){
      setTimeout(() => {
        setDataOnload(); 
        initializelmsonLoad();
      }, 200);
    }
  }
});
$(window).unload(function () { 
  if(typeof getAPIHandle != "undefined"){
    var apiHandle = getAPIHandle();
    if(apiHandle){
      if(typeof savesuspendData == "object" && Object.keys(savesuspendData).length == 0){ 
        let existingData = LMSCommunicator.getSuspendData(); 
        if(existingData != "" && existingData != "{}"){ 
          savesuspendData = JSON.parse(existingData); 
        } 
      } 
      LMSCommunicator.setSuspendData(JSON.stringify(savesuspendData)); 
      LMSCommunicator.finish(); 
    }
  }
});
setTimeout(function(){
  // Logic for play/pause YouTube video starts
	var allVideoList = [];
	var allAudioList = [];
	var alliframeMediaList = [];

	function createMediaList(element) {
		var allVideoElementList = [];
		var allAudioElementList = [];
		var allIframeList = [];

		// Collect video elements
		var videos = $(element).find('video');
		videos.each(function (index, video) {
			if (document.body.contains(video)) {
				allVideoElementList.push($(video));
			}
			handleVideoControls(video);
		});

		// Collect audio elements
		var audios = $(element).find('audio');
		audios.each(function (index, audio) {
			if (document.body.contains(audio)) {
				allAudioElementList.push($(audio));
			}
			handleAudioControls(audio);
		});

		// Collect iframe elements
		var iframes = $(element).find('iframe.video-iframe-container');
		iframes.each(function (index, iframe) {
			if (document.body.contains(iframe)) {
				allIframeList.push($(iframe));
			}
		});

		// Ensure each list contains only unique elements
		allVideoList = getUniqueMedia(allVideoElementList);
		allAudioList = getUniqueMedia(allAudioElementList);
		alliframeMediaList = getUniqueMedia(allIframeList);
	};

	function getUniqueMedia(mediaList) {
		var uniqueMedia = [];

		mediaList.forEach(function (element) {
			var parent = element.eq(0).parents('.customClass')[0];

			// Check if the element is present in the DOM
			if (!document.body.contains(element[0])) {
				return; // Skip this element if it's not in the DOM
			}

			// Check if the parent is already in the uniqueMedia array
			var isDuplicate = false;
			for (var i = 0; i < uniqueMedia.length; i++) {
				if (uniqueMedia[i].eq(0).parents('.customClass')[0] === parent) {
					isDuplicate = true;
					break;
				}
			}

			// Add the element to uniqueMedia if the parent is not a duplicate
			if (!isDuplicate) {
				uniqueMedia.push(element);
			}
		});

		return uniqueMedia;
	}

	function handleVideoControls(element) {
		allVideoList.forEach(function (videoElement) {
			var videoPlayer = videojs(videoElement[0]);
			if (videoPlayer) {
				// Listen for the 'pause' event
				videoPlayer.on('pause', function () {
					console.log('The video has been paused using Video.js!');
					// Add any other logic you need when the video is paused
				});
				// Optionally listen for the 'play' event
				videoPlayer.on('play', function () {
					console.log('The video is playing using Video.js!');
					pauseYTVideo();
				});
			}
		});
	};

	function handleAudioControls (element) {
		allAudioList.forEach(function (audioElement) {
			var audio = audioElement[0];
			if (audio) {
				audio.addEventListener('play', function () {
					console.log('Audio has been played!');
					pauseYTVideo();
				});
				// Listen for the 'pause' event
				audio.addEventListener('pause', function () {
					console.log('Audio has been paused!');
					if ($(this).parent('.audiojs').hasClass('playing')) {
						$(this).parent('.audiojs').removeClass('playing');
					}
				});
			}
		});
	};

	function pauseYTVideo() {
		$('.video-iframe-container').each(function () {
			var src = $(this)[0].getAttribute('src');
			if (src && src.indexOf('youtube.com/embed') !== -1) {
				$(this)[0].contentWindow.postMessage(
					'{"event":"command","func":"pauseVideo","args":""}',
					'*'
				);
			}
		});
	};

	// Check the state of YouTube videos
	function monitorYouTubeVideos() {
		createMediaList(document.getElementsByClassName('preview-container')[0] ? document.getElementsByClassName('preview-container')[0] : document.querySelector("article"));
		// createMediaList(document.querySelector("article"));


		alliframeMediaList.forEach(function (iframeElement) {
			var iframe = iframeElement[0];
			var src = iframe.getAttribute('src');
			if (src && src.indexOf('youtube.com/embed') !== -1) {
				// Request the current state of the YouTube video
				iframe.contentWindow.postMessage('{"event":"listening"}', '*');
			}
		});
	}

	// Listen for YouTube state responses
	window.addEventListener('message', function (event) {
  		if (event.origin.indexOf('youtube.com') !== -1 && event.data) {
			try {
				var data = JSON.parse(event.data);
				if (
					data.event === 'infoDelivery' &&
					data.info &&
					data.info.playerState !== undefined
				) {
					if (data.info.playerState === 1) {
						// 1 = Playing
						console.log('YouTube video is playing!');
						// Pause Video.js player if playing
						allVideoList.forEach(function (videoElement) {
							var videoPlayer = videojs(videoElement[0]);
							if (videoPlayer && !videoPlayer.paused()) {
								videoPlayer.pause();
								console.log('Video.js player paused!');
							}
						});
						// Pause audio element if playing
						allAudioList.forEach(function (audioElement) {
							var audio = audioElement[0];
							if (audio && !audio.paused) {
								audio.pause();
								console.log('Audio element paused!');
							}
						});
					} else if (data.info.playerState === 2) {
						// 2 = Paused
						console.log('YouTube video has been paused!');
					}else{
            console.log("Invalid state",data.info.playerState);
            
          }
				}
			} catch (e) {
				// Ignore non-JSON messages
        console.log("Error",e);
			}
		}
    event.stopImmediatePropagation();
	});

	setInterval(monitorYouTubeVideos, 2000);

	// Logic for play/pause youtube video ends
},1000)
/*!
 * Bootstrap v3.3.2 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.2",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.2",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.2",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.2",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.2",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||"destroy"!=b)&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.2",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.2",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.2",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()
}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.2",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);





!function(t,e){"use strict";if("undefined"!=typeof module&&module.exports){var n="undefined"!=typeof process,o=n&&"electron"in process.versions;o?t.BootstrapDialog=e(t.jQuery):module.exports=e(require("jquery"),require("bootstrap"))}else"function"==typeof define&&define.amd?define("bootstrap-dialog",["jquery","bootstrap"],function(t){return e(t)}):t.BootstrapDialog=e(t.jQuery)}(this,function(t){"use strict";var e=t.fn.modal.Constructor,n=function(t,n){e.call(this,t,n)};n.getModalVersion=function(){var e=null;return e="undefined"==typeof t.fn.modal.Constructor.VERSION?"v3.1":/3\.2\.\d+/.test(t.fn.modal.Constructor.VERSION)?"v3.2":/3\.3\.[1,2]/.test(t.fn.modal.Constructor.VERSION)?"v3.3":"v3.3.4"},n.ORIGINAL_BODY_PADDING=parseInt(t("body").css("padding-right")||0,10),n.METHODS_TO_OVERRIDE={},n.METHODS_TO_OVERRIDE["v3.1"]={},n.METHODS_TO_OVERRIDE["v3.2"]={hide:function(e){if(e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()){this.isShown=!1;var n=this.getGlobalOpenedDialogs();0===n.length&&this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()}}},n.METHODS_TO_OVERRIDE["v3.3"]={setScrollbar:function(){var t=n.ORIGINAL_BODY_PADDING;this.bodyIsOverflowing&&this.$body.css("padding-right",t+this.scrollbarWidth)},resetScrollbar:function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.css("padding-right",n.ORIGINAL_BODY_PADDING)},hideModal:function(){this.$element.hide(),this.backdrop(t.proxy(function(){var t=this.getGlobalOpenedDialogs();0===t.length&&this.$body.removeClass("modal-open"),this.resetAdjustments(),this.resetScrollbar(),this.$element.trigger("hidden.bs.modal")},this))}},n.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},n.METHODS_TO_OVERRIDE["v3.3"]),n.prototype={constructor:n,getGlobalOpenedDialogs:function(){var e=[];return t.each(o.dialogs,function(t,n){n.isRealized()&&n.isOpened()&&e.push(n)}),e}},n.prototype=t.extend(n.prototype,e.prototype,n.METHODS_TO_OVERRIDE[n.getModalVersion()]);var o=function(e){this.defaultOptions=t.extend(!0,{id:o.newGuid(),buttons:[],data:{},onshow:null,onshown:null,onhide:null,onhidden:null},o.defaultOptions),this.indexedButtons={},this.registeredButtonHotkeys={},this.draggableData={isMouseDown:!1,mouseOffset:{}},this.realized=!1,this.opened=!1,this.initOptions(e),this.holdThisInstance()};return o.BootstrapDialogModal=n,o.NAMESPACE="bootstrap-dialog",o.TYPE_DEFAULT="type-default",o.TYPE_INFO="type-info",o.TYPE_PRIMARY="type-primary",o.TYPE_SUCCESS="type-success",o.TYPE_WARNING="type-warning",o.TYPE_DANGER="type-danger",o.DEFAULT_TEXTS={},o.DEFAULT_TEXTS[o.TYPE_DEFAULT]="Information",o.DEFAULT_TEXTS[o.TYPE_INFO]="Information",o.DEFAULT_TEXTS[o.TYPE_PRIMARY]="Information",o.DEFAULT_TEXTS[o.TYPE_SUCCESS]="Success",o.DEFAULT_TEXTS[o.TYPE_WARNING]="Warning",o.DEFAULT_TEXTS[o.TYPE_DANGER]="Danger",o.DEFAULT_TEXTS.OK="OK",o.DEFAULT_TEXTS.CANCEL="Cancel",o.DEFAULT_TEXTS.CONFIRM="Confirmation",o.SIZE_NORMAL="size-normal",o.SIZE_SMALL="size-small",o.SIZE_WIDE="size-wide",o.SIZE_LARGE="size-large",o.BUTTON_SIZES={},o.BUTTON_SIZES[o.SIZE_NORMAL]="",o.BUTTON_SIZES[o.SIZE_SMALL]="",o.BUTTON_SIZES[o.SIZE_WIDE]="",o.BUTTON_SIZES[o.SIZE_LARGE]="btn-lg",o.ICON_SPINNER="glyphicon glyphicon-asterisk",o.defaultOptions={type:o.TYPE_PRIMARY,size:o.SIZE_NORMAL,cssClass:"",title:null,message:null,nl2br:!0,closable:!0,closeByBackdrop:!0,closeByKeyboard:!0,spinicon:o.ICON_SPINNER,autodestroy:!0,draggable:!1,animate:!0,description:"",tabindex:-1},o.configDefaultOptions=function(e){o.defaultOptions=t.extend(!0,o.defaultOptions,e)},o.dialogs={},o.openAll=function(){t.each(o.dialogs,function(t,e){e.open()})},o.closeAll=function(){t.each(o.dialogs,function(t,e){e.close()})},o.getDialog=function(t){var e=null;return"undefined"!=typeof o.dialogs[t]&&(e=o.dialogs[t]),e},o.setDialog=function(t){return o.dialogs[t.getId()]=t,t},o.addDialog=function(t){return o.setDialog(t)},o.moveFocus=function(){var e=null;t.each(o.dialogs,function(t,n){e=n}),null!==e&&e.isRealized()&&e.getModal().focus()},o.METHODS_TO_OVERRIDE={},o.METHODS_TO_OVERRIDE["v3.1"]={handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(t){t.target===this&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByBackdrop()&&t.data.dialog.close()}),this},updateZIndex:function(){var e=1040,n=1050,i=0;t.each(o.dialogs,function(t,e){i++});var s=this.getModal(),a=s.data("bs.modal").$backdrop;return s.css("z-index",n+20*(i-1)),a.css("z-index",e+20*(i-1)),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this.updateZIndex(),this}},o.METHODS_TO_OVERRIDE["v3.2"]={handleModalBackdropEvent:o.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,updateZIndex:o.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,open:o.METHODS_TO_OVERRIDE["v3.1"].open},o.METHODS_TO_OVERRIDE["v3.3"]={},o.METHODS_TO_OVERRIDE["v3.3.4"]=t.extend({},o.METHODS_TO_OVERRIDE["v3.1"]),o.prototype={constructor:o,initOptions:function(e){return this.options=t.extend(!0,this.defaultOptions,e),this},holdThisInstance:function(){return o.addDialog(this),this},initModalStuff:function(){return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()),this.getModal().append(this.getModalDialog()),this.getModalDialog().append(this.getModalContent()),this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()),this},createModal:function(){var e=t('<div class="modal" role="dialog" aria-hidden="true"></div>');return e.prop("id",this.getId()),e.attr("aria-labelledby",this.getId()+"_title"),e},getModal:function(){return this.$modal},setModal:function(t){return this.$modal=t,this},createModalDialog:function(){return t('<div class="modal-dialog"></div>')},getModalDialog:function(){return this.$modalDialog},setModalDialog:function(t){return this.$modalDialog=t,this},createModalContent:function(){return t('<div class="modal-content"></div>')},getModalContent:function(){return this.$modalContent},setModalContent:function(t){return this.$modalContent=t,this},createModalHeader:function(){return t('<div class="modal-header"></div>')},getModalHeader:function(){return this.$modalHeader},setModalHeader:function(t){return this.$modalHeader=t,this},createModalBody:function(){return t('<div class="modal-body"></div>')},getModalBody:function(){return this.$modalBody},setModalBody:function(t){return this.$modalBody=t,this},createModalFooter:function(){return t('<div class="modal-footer"></div>')},getModalFooter:function(){return this.$modalFooter},setModalFooter:function(t){return this.$modalFooter=t,this},createDynamicContent:function(t){var e=null;return e="function"==typeof t?t.call(t,this):t,"string"==typeof e&&(e=this.formatStringContent(e)),e},formatStringContent:function(t){return this.options.nl2br?t.replace(/\r\n/g,"<br />").replace(/[\r\n]/g,"<br />"):t},setData:function(t,e){return this.options.data[t]=e,this},getData:function(t){return this.options.data[t]},setId:function(t){return this.options.id=t,this},getId:function(){return this.options.id},getType:function(){return this.options.type},setType:function(t){return this.options.type=t,this.updateType(),this},updateType:function(){if(this.isRealized()){var t=[o.TYPE_DEFAULT,o.TYPE_INFO,o.TYPE_PRIMARY,o.TYPE_SUCCESS,o.TYPE_WARNING,o.TYPE_DANGER];this.getModal().removeClass(t.join(" ")).addClass(this.getType())}return this},getSize:function(){return this.options.size},setSize:function(t){return this.options.size=t,this.updateSize(),this},updateSize:function(){if(this.isRealized()){var e=this;this.getModal().removeClass(o.SIZE_NORMAL).removeClass(o.SIZE_SMALL).removeClass(o.SIZE_WIDE).removeClass(o.SIZE_LARGE),this.getModal().addClass(this.getSize()),this.getModalDialog().removeClass("modal-sm"),this.getSize()===o.SIZE_SMALL&&this.getModalDialog().addClass("modal-sm"),this.getModalDialog().removeClass("modal-lg"),this.getSize()===o.SIZE_WIDE&&this.getModalDialog().addClass("modal-lg"),t.each(this.options.buttons,function(n,o){var i=e.getButton(o.id),s=["btn-lg","btn-sm","btn-xs"],a=!1;if("string"==typeof o.cssClass){var d=o.cssClass.split(" ");t.each(d,function(e,n){-1!==t.inArray(n,s)&&(a=!0)})}a||(i.removeClass(s.join(" ")),i.addClass(e.getButtonSize()))})}return this},getCssClass:function(){return this.options.cssClass},setCssClass:function(t){return this.options.cssClass=t,this},getTitle:function(){return this.options.title},setTitle:function(t){return this.options.title=t,this.updateTitle(),this},updateTitle:function(){if(this.isRealized()){var t=null!==this.getTitle()?this.createDynamicContent(this.getTitle()):this.getDefaultText();this.getModalHeader().find("."+this.getNamespace("title")).html("").append(t).prop("id",this.getId()+"_title")}return this},getMessage:function(){return this.options.message},setMessage:function(t){return this.options.message=t,this.updateMessage(),this},updateMessage:function(){if(this.isRealized()){var t=this.createDynamicContent(this.getMessage());this.getModalBody().find("."+this.getNamespace("message")).html("").append(t)}return this},isClosable:function(){return this.options.closable},setClosable:function(t){return this.options.closable=t,this.updateClosable(),this},setCloseByBackdrop:function(t){return this.options.closeByBackdrop=t,this},canCloseByBackdrop:function(){return this.options.closeByBackdrop},setCloseByKeyboard:function(t){return this.options.closeByKeyboard=t,this},canCloseByKeyboard:function(){return this.options.closeByKeyboard},isAnimate:function(){return this.options.animate},setAnimate:function(t){return this.options.animate=t,this},updateAnimate:function(){return this.isRealized()&&this.getModal().toggleClass("fade",this.isAnimate()),this},getSpinicon:function(){return this.options.spinicon},setSpinicon:function(t){return this.options.spinicon=t,this},addButton:function(t){return this.options.buttons.push(t),this},addButtons:function(e){var n=this;return t.each(e,function(t,e){n.addButton(e)}),this},getButtons:function(){return this.options.buttons},setButtons:function(t){return this.options.buttons=t,this.updateButtons(),this},getButton:function(t){return"undefined"!=typeof this.indexedButtons[t]?this.indexedButtons[t]:null},getButtonSize:function(){return"undefined"!=typeof o.BUTTON_SIZES[this.getSize()]?o.BUTTON_SIZES[this.getSize()]:""},updateButtons:function(){return this.isRealized()&&(0===this.getButtons().length?this.getModalFooter().hide():this.getModalFooter().show().find("."+this.getNamespace("footer")).html("").append(this.createFooterButtons())),this},isAutodestroy:function(){return this.options.autodestroy},setAutodestroy:function(t){this.options.autodestroy=t},getDescription:function(){return this.options.description},setDescription:function(t){return this.options.description=t,this},setTabindex:function(t){return this.options.tabindex=t,this},getTabindex:function(){return this.options.tabindex},updateTabindex:function(){return this.isRealized()&&this.getModal().attr("tabindex",this.getTabindex()),this},getDefaultText:function(){return o.DEFAULT_TEXTS[this.getType()]},getNamespace:function(t){return o.NAMESPACE+"-"+t},createHeaderContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("header")),e.append(this.createTitleContent()),e.prepend(this.createCloseButton()),e},createTitleContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("title")),e},createCloseButton:function(){var e=t("<div></div>");e.addClass(this.getNamespace("close-button"));var n=t('<button class="close">&times;</button>');return e.append(n),e.on("click",{dialog:this},function(t){t.data.dialog.close()}),e},createBodyContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("body")),e.append(this.createMessageContent()),e},createMessageContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("message")),e},createFooterContent:function(){var e=t("<div></div>");return e.addClass(this.getNamespace("footer")),e},createFooterButtons:function(){var e=this,n=t("<div></div>");return n.addClass(this.getNamespace("footer-buttons")),this.indexedButtons={},t.each(this.options.buttons,function(t,i){i.id||(i.id=o.newGuid());var s=e.createButton(i);e.indexedButtons[i.id]=s,n.append(s)}),n},createButton:function(e){var n=t('<button class="btn"></button>');return n.prop("id",e.id),n.data("button",e),"undefined"!=typeof e.icon&&""!==t.trim(e.icon)&&n.append(this.createButtonIcon(e.icon)),"undefined"!=typeof e.label&&n.append(e.label),n.addClass("undefined"!=typeof e.cssClass&&""!==t.trim(e.cssClass)?e.cssClass:"btn-default"),"undefined"!=typeof e.hotkey&&(this.registeredButtonHotkeys[e.hotkey]=n),n.on("click",{dialog:this,$button:n,button:e},function(t){var e=t.data.dialog,n=t.data.$button,o=n.data("button");"function"==typeof o.action&&o.action.call(n,e,t),o.autospin&&n.toggleSpin(!0)}),this.enhanceButton(n),"undefined"!=typeof e.enabled&&n.toggleEnable(e.enabled),n},enhanceButton:function(t){return t.dialog=this,t.toggleEnable=function(t){var e=this;return"undefined"!=typeof t?e.prop("disabled",!t).toggleClass("disabled",!t):e.prop("disabled",!e.prop("disabled")),e},t.enable=function(){var t=this;return t.toggleEnable(!0),t},t.disable=function(){var t=this;return t.toggleEnable(!1),t},t.toggleSpin=function(e){var n=this,o=n.dialog,i=n.find("."+o.getNamespace("button-icon"));return"undefined"==typeof e&&(e=!(t.find(".icon-spin").length>0)),e?(i.hide(),t.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))):(i.show(),t.find(".icon-spin").remove()),n},t.spin=function(){var t=this;return t.toggleSpin(!0),t},t.stopSpin=function(){var t=this;return t.toggleSpin(!1),t},this},createButtonIcon:function(e){var n=t("<span></span>");return n.addClass(this.getNamespace("button-icon")).addClass(e),n},enableButtons:function(e){return t.each(this.indexedButtons,function(t,n){n.toggleEnable(e)}),this},updateClosable:function(){return this.isRealized()&&this.getModalHeader().find("."+this.getNamespace("close-button")).toggle(this.isClosable()),this},onShow:function(t){return this.options.onshow=t,this},onShown:function(t){return this.options.onshown=t,this},onHide:function(t){return this.options.onhide=t,this},onHidden:function(t){return this.options.onhidden=t,this},isRealized:function(){return this.realized},setRealized:function(t){return this.realized=t,this},isOpened:function(){return this.opened},setOpened:function(t){return this.opened=t,this},handleModalEvents:function(){return this.getModal().on("show.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!0),e.isModalEvent(t)&&"function"==typeof e.options.onshow){var n=e.options.onshow(e);return n===!1&&e.setOpened(!1),n}}),this.getModal().on("shown.bs.modal",{dialog:this},function(t){var e=t.data.dialog;e.isModalEvent(t)&&"function"==typeof e.options.onshown&&e.options.onshown(e)}),this.getModal().on("hide.bs.modal",{dialog:this},function(t){var e=t.data.dialog;if(e.setOpened(!1),e.isModalEvent(t)&&"function"==typeof e.options.onhide){var n=e.options.onhide(e);return n===!1&&e.setOpened(!0),n}}),this.getModal().on("hidden.bs.modal",{dialog:this},function(e){var n=e.data.dialog;n.isModalEvent(e)&&"function"==typeof n.options.onhidden&&n.options.onhidden(n),n.isAutodestroy()&&(delete o.dialogs[n.getId()],t(this).remove()),o.moveFocus()}),this.handleModalBackdropEvent(),this.getModal().on("keyup",{dialog:this},function(t){27===t.which&&t.data.dialog.isClosable()&&t.data.dialog.canCloseByKeyboard()&&t.data.dialog.close()}),this.getModal().on("keyup",{dialog:this},function(e){var n=e.data.dialog;if("undefined"!=typeof n.registeredButtonHotkeys[e.which]){var o=t(n.registeredButtonHotkeys[e.which]);!o.prop("disabled")&&o.focus().trigger("click")}}),this},handleModalBackdropEvent:function(){return this.getModal().on("click",{dialog:this},function(e){t(e.target).hasClass("modal-backdrop")&&e.data.dialog.isClosable()&&e.data.dialog.canCloseByBackdrop()&&e.data.dialog.close()}),this},isModalEvent:function(t){return"undefined"!=typeof t.namespace&&"bs.modal"===t.namespace},makeModalDraggable:function(){return this.options.draggable&&(this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown=!0;var n=e.getModalDialog().offset();e.draggableData.mouseOffset={top:t.clientY-n.top,left:t.clientX-n.left}}),this.getModal().on("mouseup mouseleave",{dialog:this},function(t){t.data.dialog.draggableData.isMouseDown=!1}),t("body").on("mousemove",{dialog:this},function(t){var e=t.data.dialog;e.draggableData.isMouseDown&&e.getModalDialog().offset({top:t.clientY-e.draggableData.mouseOffset.top,left:t.clientX-e.draggableData.mouseOffset.left})})),this},realize:function(){return this.initModalStuff(),this.getModal().addClass(o.NAMESPACE).addClass(this.getCssClass()),this.updateSize(),this.getDescription()&&this.getModal().attr("aria-describedby",this.getDescription()),this.getModalFooter().append(this.createFooterContent()),this.getModalHeader().append(this.createHeaderContent()),this.getModalBody().append(this.createBodyContent()),this.getModal().data("bs.modal",new n(this.getModal(),{backdrop:"static",keyboard:!1,show:!1})),this.makeModalDraggable(),this.handleModalEvents(),this.setRealized(!0),this.updateButtons(),this.updateType(),this.updateTitle(),this.updateMessage(),this.updateClosable(),this.updateAnimate(),this.updateSize(),this.updateTabindex(),this},open:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("show"),this},close:function(){return!this.isRealized()&&this.realize(),this.getModal().modal("hide"),this}},o.prototype=t.extend(o.prototype,o.METHODS_TO_OVERRIDE[n.getModalVersion()]),o.newGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0,n="x"===t?e:3&e|8;return n.toString(16)})},o.show=function(t){return new o(t).open()},o.alert=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},onhide:function(t){!t.getData("btnClicked")&&t.isClosable()&&"function"==typeof t.getData("callback")&&t.getData("callback")(!1)},buttons:[{label:e.buttonLabel,action:function(t){t.setData("btnClicked",!0),"function"==typeof t.getData("callback")&&t.getData("callback")(!0),t.close()}}]}).open()},o.confirm=function(){var e={},n={type:o.TYPE_PRIMARY,title:null,message:null,closable:!1,draggable:!1,btnCancelLabel:o.DEFAULT_TEXTS.CANCEL,btnOKLabel:o.DEFAULT_TEXTS.OK,btnOKClass:null,callback:null};return e="object"==typeof arguments[0]&&arguments[0].constructor==={}.constructor?t.extend(!0,n,arguments[0]):t.extend(!0,n,{message:arguments[0],closable:!1,buttonLabel:o.DEFAULT_TEXTS.OK,callback:"undefined"!=typeof arguments[1]?arguments[1]:null}),null===e.btnOKClass&&(e.btnOKClass=["btn",e.type.split("-")[1]].join("-")),new o({type:e.type,title:e.title,message:e.message,closable:e.closable,draggable:e.draggable,data:{callback:e.callback},buttons:[{label:e.btnCancelLabel,action:function(t){"function"==typeof t.getData("callback")&&t.getData("callback")(!1),t.close()}},{label:e.btnOKLabel,cssClass:e.btnOKClass,action:function(t){"function"==typeof t.getData("callback")&&t.getData("callback")(!0),t.close()}}]}).open()},o.warning=function(t,e){return new o({type:o.TYPE_WARNING,message:t}).open()},o.danger=function(t,e){return new o({type:o.TYPE_DANGER,message:t}).open()},o.success=function(t,e){return new o({type:o.TYPE_SUCCESS,message:t}).open()},o});
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-flexbox_legacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-audio-video-input-inputtypes-localstorage-sessionstorage-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
// Generated by CoffeeScript 1.3.3
(function() {
  var $, normaliseLang;

  $ = jQuery;

  normaliseLang = function(lang) {
    lang = lang.replace(/_/, '-').toLowerCase();
    if (lang.length > 3) {
      lang = lang.substring(0, 3) + lang.substring(3).toUpperCase();
    }
    return lang;
  };

  $.defaultLanguage = normaliseLang(navigator.language || navigator.userLanguage);

  $.localize = function(pkg, options) {
    var defaultCallback, fileExtension, intermediateLangData, jsonCall, lang, loadLanguage, localizeElement, localizeForSpecialKeys, localizeImageElement, localizeInputElement, localizeOptgroupElement, notifyDelegateLanguageLoaded, regexify, setAttrFromValueForKey, setTextFromValueForKey, valueForKey, wrappedSet;
    if (options == null) {
      options = {};
    }
    wrappedSet = this;
    intermediateLangData = {};
    fileExtension = options.fileExtension || "json";
    loadLanguage = function(pkg, lang, level) {
      var file;
      if (level == null) {
        level = 1;
      }
      switch (level) {
        case 1:
          intermediateLangData = {};
          if (options.loadBase) {
            file = pkg + ("." + fileExtension);
            return jsonCall(file, pkg, lang, level);
          } else {
            return loadLanguage(pkg, lang, 2);
          }
          break;
        case 2:
          if (lang.length >= 2) {
            file = "" + pkg + "-" + (lang.substring(0, 2)) + "." + fileExtension;
            return jsonCall(file, pkg, lang, level);
          }
          break;
        case 3:
          if (lang.length >= 5) {
            file = "" + pkg + "-" + (lang.substring(0, 5)) + "." + fileExtension;
            return jsonCall(file, pkg, lang, level);
          }
      }
    };
    jsonCall = function(file, pkg, lang, level) {
      var ajaxOptions, successFunc;
      if (options.pathPrefix != null) {
        file = "" + options.pathPrefix + "/" + file;
      }
      successFunc = function() {
        $.extend(intermediateLangData, window.localeJson);
        notifyDelegateLanguageLoaded(intermediateLangData);
        return loadLanguage(pkg, lang, level + 1);
      };
      ajaxOptions = {
        nope: file+"?"+new Date().getTime(),
        complete: successFunc
      };
     
      return Modernizr.load(ajaxOptions);
    };
    notifyDelegateLanguageLoaded = function(data) {
      if (options.callback != null) {
        return options.callback(data, defaultCallback);
      } else {
        return defaultCallback(data);
      }
    };
    defaultCallback = function(data) {
      $.localize.data[pkg] = data;
      return wrappedSet.each(function() {
        var elem, key, value;
        elem = $(this);
        key = elem.data("localize");
        key || (key = elem.attr("rel").match(/localize\[(.*?)\]/)[1]);
        value = valueForKey(key, data);
        return localizeElement(elem, key, value);
      });
    };
    localizeElement = function(elem, key, value) {
      if (elem.is('input')) {
        localizeInputElement(elem, key, value);
      } else if (elem.is('img')) {
        localizeImageElement(elem, key, value);
      } else if (elem.is('optgroup')) {
        localizeOptgroupElement(elem, key, value);
      }else if($(elem).attr('titleLocale')){
		$(elem).attr('title',value);
	  }else if (!$.isPlainObject(value)) {
        elem.html(value);
      }
      if ($.isPlainObject(value)) {
        return localizeForSpecialKeys(elem, value);
      }
    };
    localizeInputElement = function(elem, key, value) {
      if (elem.is("[placeholder]")) {
        return elem.attr("placeholder", value);
      } else {
        return elem.val(value);
      }
    };
    localizeForSpecialKeys = function(elem, value) {
      setAttrFromValueForKey(elem, "title", value);
      return setTextFromValueForKey(elem, "text", value);
    };
    localizeOptgroupElement = function(elem, key, value) {
      return elem.attr("label", value);
    };
    localizeImageElement = function(elem, key, value) {
      setAttrFromValueForKey(elem, "alt", value);
      return setAttrFromValueForKey(elem, "src", value);
    };
    valueForKey = function(key, data) {
      var keys, value, _i, _len;
      keys = key.split(/\./);
      value = data;
      for (_i = 0, _len = keys.length; _i < _len; _i++) {
        key = keys[_i];
        value = value != null ? value[key] : null;
      }
      return value;
    };
    setAttrFromValueForKey = function(elem, key, value) {
      value = valueForKey(key, value);
      if (value != null) {
        return elem.attr(key, value);
      }
    };
    setTextFromValueForKey = function(elem, key, value) {
      value = valueForKey(key, value);
      if (value != null) {
        return elem.text(value);
      }
    };
    regexify = function(string_or_regex_or_array) {
      var thing;
      if (typeof string_or_regex_or_array === "string") {
        return "^" + string_or_regex_or_array + "$";
      } else if (string_or_regex_or_array.length != null) {
        return ((function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = string_or_regex_or_array.length; _i < _len; _i++) {
            thing = string_or_regex_or_array[_i];
            _results.push(regexify(thing));
          }
          return _results;
        })()).join("|");
      } else {
        return string_or_regex_or_array;
      }
    };
    lang = normaliseLang(options.language ? options.language : $.defaultLanguage);
    if (!(options.skipLanguage && lang.match(regexify(options.skipLanguage)))) {
      loadLanguage(pkg, lang, 1);
    }
    return wrappedSet;
  };

  $.fn.localize = $.localize;

  $.localize.data = {};

}).call(this);


$(function(){function e(e,t){let o=t;console.log(o);try{let t="";"identify-the-clip"==e?t=$(o).find("textarea").attr("data-correct-answer"):"shortLongAns"==e&&(t=$(o).find(".shortLongAnsComponent").attr("data-pretext"));let n=$(o).find("iframe");if(n.length>0&&t){let e=n[0].contentDocument||n[0].contentWindow.document;if($(n).parent().css({border:"1px solid #C91CA5","pointer-events":"none","border-radius":"10px"}),e&&e.body){let o="";for(;e.body.firstChild;)e.body.removeChild(e.body.firstChild);try{let e=(new DOMParser).parseFromString(t,"text/html");e.querySelectorAll("[style]").forEach(e=>{e.style.color=""}),o=e.body.innerHTML||""}catch(e){console.error("Error parsing sampleAns:",e)}let n=e.createElement("span");n.innerHTML=o,n.style.color="#C91CA5",n.querySelectorAll("span").forEach(e=>{e.style.color="#C91CA5"}),e.body.appendChild(n)}else console.log("Unable to access iframe document.")}else{let e=$(o).find("input");if($(e).css({border:"1px solid #C91CA5","pointer-events":"none","border-radius":"10px",color:"#C91CA5"}),e.length>0){let t=e.attr("data-correct-answer");e.val(t)}}}catch(e){console.error("Error parsing data-sampletaginfo:",e)}}function t(e){$(e).find(".newTableHolder table").css("border","1px solid #C91CA5"),$(e).find(".newTableHolder table, .newTableHolder table td, .newTableHolder .textNode").css("color","#C91CA5"),console.log(e)}function o(e){switch($(e).find(".component-holder").attr("data-fib-type")){case"without-option":let t=$(e).find(".component-holder .fib-questions .fib-without-option input");$(t).each(function(e,t){let o=$(t).attr("data-correct-answer"),n=atob(o);$(t).val(n).css({color:"#C91CA5",border:"1px solid #C91CA5","pointer-events":"none"}).attr("style",function(e,t){return(t||"")+"border-bottom: 1px solid #C91CA5 !important;"})});break;case"with-option":$(e).find(".dropdown.fib-with-option");$(e).find(".dropdown.fib-with-option").each(function(){let e=$(this),t=e.find(".dropdown-menu").attr("data-correctoption-index");t=t.replace(/[^0-9]/g,"").trim();let o=e.find(`.dropdown-menu li[data-id="${t}"]`);e.find(".chosenAns").text(o.text().trim()).css("color","#C91CA5");let n=e.find(".dropdownbtn");n.css({border:"1px solid #C91CA5","pointer-events":"none"}).attr("style",function(e,t){return(t||"")+"; border: 1px solid #C91CA5 !important;"}),n.find(".dropdown-arrow").css("color","#C91CA5")});break;case"drag-and-drop":let o=$(e).find(".distractor-parent .preview-drop");$(e).find(".fibSentence .template-instruction .preview-drop").each(function(e,t){console.log(t),$(t).attr("style",function(e,t){return(t||"")+"background: #fff; box-shadow: none; color: #C91CA5; border: none;padding: 0pxcapitalizeLOS !important"}),$(t).find(".sort-text-selected").attr("style",(e,t)=>(t||"")+"border: 1px solid #C91CA5 !important; border-color: #C91CA5 !important; box-shadow: none; background: #fff; display: block;")}),o.each(function(e,t){console.log(t),$(t).css({"pointer-events":"none",opacity:"0.5"})})}}function n(e){$(e).find(".imageTemplateMainDiv").css("border","3px solid #C91CA5")}function r(e){$(e).find(".graphicOrganizerContainer .hotspotTextarea").each(function(e,t){$(t).css({border:"1px solid #C91CA5",color:"#C91CA5","pointer-events":"none"}),$(t).parent().css({"pointer-events":"none"})})}$(".sample-layer-parent-container").each(function(i,a){$(a).closest(".question-container").hide(),$(".sample-main-layer").hide(),$(".sample-layer-section").css("padding","0px"),$(".sample-question-container-box .customClass").css("margin","0px"),$(".sample-layer-container").css("border","none"),$(".sample-layer-container").css("padding","0px"),function(i,a){switch(console.log("identifire------",i),i){case"identify-the-clip":setTimeout(()=>{e("identify-the-clip",a)},8e3);break;case"shortLongAns":setTimeout(()=>{e("shortLongAns",a)},8e3);break;case"tablesNew":case"tableGO":t(a);break;case"layout-7":let s=$(a).find(".customClass .layout-container .customClass");$(s).each(function(i,a){let s=$(a).attr("data-type");!function(i,a){"tablesNew"==i||"tableGO"==i?t(a):"paragraph"==i?$(a).find(".paragraph-selectPrv").attr("style",function(e,t){return(t||"")+";color:#C91CA5 !important;"}):"image"==i?n(a):"video"==i?$(a).find(".videoSettings").css("border","3px solid #C91CA5"):"audio"==i?setTimeout(function(){if($(a).find(".audioBorder").length){const e=$(a).find(".audioBorder").get(0);e.style.setProperty("border","3px solid #C91CA5","important"),e.style.setProperty("border-color","3px solid #C91CA5","important")}},1e3):"identify-the-clip"==i?setTimeout(()=>{e("identify-the-clip",a)},8e3):"shortLongAns"==i?setTimeout(()=>{e("shortLongAns",a)},8e3):"fill-in-the-blank"==i?o(a):"graphicOrganizerImageHotSpot"==i&&r(a)}(s,a)});break;case"fill-in-the-blank":o(a);break;case"graphicOrganizerImageHotSpot":r(a);break;case"image":n(a);break;case"video":$(a).find(".videoSettings").css("border","2px solid #C91CA5");break;case"audio":setTimeout(function(){if($(a).find(".audioBorder").length){const e=$(a).find(".audioBorder").get(0);e.style.setProperty("border","3px solid #C91CA5","important"),e.style.setProperty("border-color","3px solid #C91CA5","important")}},1e3)}}($(a).find(".customClass").attr("data-type"),a)})});
$(function(){let t=[];function e(t){var e=(t.target?$(t.target):$(t)).parents("form"),n=e.parent(),o=e.find("input,textarea"),r=!1;o.each(function(t,e){""!==e.value.trim()&&(r=!0),n.attr("scorm-saved-ans",e.value)});var s=n.siblings(".SLA-submit").find(".submit-btn"),i=n.siblings(".SLA-submit").find(".reset-btn");r?(s.removeClass("disabled"),e.addClass("attempted-question"),i.removeClass("disabled")):(s.addClass("disabled"),e.removeClass("attempted-question"),i.addClass("disabled"));var c=e.parents(".group-interactivity-container");c.find("form.attempted-question").length===c.find("form").length?c.addClass("enableSubmit"):c.removeClass("enableSubmit");var l=$(t.target).parents('.customClass[data-type="shortLongAns"]');if(!l.attr("latencyTime")||l.attr("activityStartTime")===l.attr("latencyTime")){let t=new Date,e=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();l.attr("latencyTime",e)}"undefined"!=typeof apiHandle&&a(t)}function n(t){try{let e=t;for(;"string"==typeof e;){if(!e.trim().startsWith("{")&&!e.trim().startsWith("["))return t;if("object"==typeof(e=JSON.parse(e))&&null!==e)return e}}catch(t){}return t}function a(t){var e=$(t.target),n=0!=e.parents().find(".shortLongAnsComponent")?e.parents().find(".shortLongAnsComponent"):t.closest(".shortLongAnsComponent"),a="";if(0===n.length){var o=e.closest("section"),r=o.find("form");n=o.find(".shortLongAnsComponent")}else a=(r=n.find("form")).parent().attr("scorm-saved-ans");var s=n.hasClass("enableSubmit");s=!r.hasClass("submitted");var i=!t.target||"INPUT"!==t.target.tagName&&"TEXTAREA"!==t.target.tagName?a:t.target.value;let c={isSubmitEnable:s,inputSeleced:i||t.context.value,componentId:n.closest('.customClass[data-type="shortLongAns"]').attr("data-saved-index"),dirtyBit:"true"};saveAction(t,c)}function o(t,e,n){let a={};a.inputSeleced=t,a.componentId=n.parents('.customClass[data-type="shortLongAns"]').eq(0).attr("data-saved-index"),a.dirtyBit="true",saveAction(e,a)}$(".shortLongAnsComponent").on("keypress","input",function(t){13===(t.keyCode||t.which)&&(t.preventDefault(),t.stopPropagation())}),$(document).on("keyup paste",".characters_count",function(t){t.target.value.length>0?$(this).siblings().find(".current_characters").removeClass("hide").html(t.target.value.length+" /"):$(this).siblings().find(".current_characters").addClass("hide")}),$(document).on("input",'.customClass[data-type="shortLongAns"] input.shortAnsText, .customClass[data-type="shortLongAns"] textarea.longAnsText',function(t){e(t)}),$(document).on("keyup paste",".characters_count_extended_response_about_media",function(t){t.target.value.length>0?$(this).siblings().find(".current_characters").removeClass("hide").html(t.target.value.length+" /"):$(this).siblings().find(".current_characters").addClass("hide")}),$(".customClass[data-type='shortLongAns']").each(function(){let t=$(this).find(".shortLongAnsComponent");if("RTE"!==t.attr("answer-type")&&void 0===t.attr("scorm-saved-ans")){let e=t.attr("data-pretext")||"";e=n(e),t.find("input, textarea").each(function(){$(this).val(e)})}}),$(document).on("click",".SLA-submit .submit-btn",function(t){t.preventDefault(),function(t){t.preventDefault();var e=(t.target?$(t.target):$(t)).closest("section").find("form");$formParent=e.parent(),$inputs=e.find("input, textarea");var n=!1;$inputs.each(function(t,e){var a=e.value.trim();""!==a&&(n=!0),$formParent.attr("scorm-saved-ans",a)}),n?e.addClass("attempted-question"):e.removeClass("attempted-question");var o=e.closest(".group-interactivity-container");o.find("form.attempted-question").length===o.find("form").length&&o.remove("enableSubmit");var r=$(t.target).closest('.customClass[data-type="shortLongAns"]');if(!r.attr("latencyTime")||r.attr("activityStartTime")===r.attr("latencyTime")){let t=(new Date).toLocaleTimeString();r.attr("latencyTime",t)}$formParent.siblings(".SLA-submit").find(".submit-btn").addClass("disabled"),e.addClass("submitted"),$formParent.siblings(".SLA-custKeybCont").addClass("btn disabled"),$inputs.each(function(t,e){e.setAttribute("disabled",!0);const n=$(e).closest(".cazary");$(e).hasClass("ansRTE")&&(n.addClass("disabled-rte"),n.parent().find(".cazary").addClass("disabled-rte"))}),"undefined"!=typeof apiHandle&&a(t)}(t)});let r=$(".customClass[data-type='shortLongAns']").find(".ansRTE");for(let s=0;s<r.length;s++)setTimeout(()=>{!function(t){"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(a,r,s){"use strict";const i=r.document;function c(){const t=i.getElementsByClassName("cazary-edit");Array.from(t).forEach(t=>{t.onload=function(){try{const e=t.contentDocument||t.contentWindow.document,n=Math.max(e.body.scrollHeight,e.body.offsetHeight,e.body.clientHeight,e.documentElement.offsetHeight);t.style.height=n<150?"150px":`${n}px`}catch(t){console.error("Error adjusting iframe height:",error)}},(t.contentDocument||"complete"===t.contentWindow.document.readyState)&&t.onload()})}const l=function(){const t={},e=function(){let e=function(){try{const t=r.navigator;return t.browserLanguage||t.language||t.userLanguage}catch(t){return s}}().toLowerCase(),n=t[e];if(n!==s)return n;if(e=e.split("-")[0],(n=t[e])!==s)return n;return{}}();return function(t){return e[t]===s?t:e[t]}}(),d=function(){const t=/^[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~](\.?[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~])*@([\w\-]+\.)+(\w+)$/;return function(e){return!(e.length>256)&&(!(e.indexOf("@")>64)&&null!==e.match(t))}}(),u=function(){const t=/^https?:\/\//;return function(e){return null!==e.match(t)}}(),f=function(){const t={NORMAL:0,ACTIVE:1,DISABLED:2},e={FONTNAME:"fontname",FONTSIZE:"fontsize",BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",STRIKETHROUGH:"strikethrough",REMOVEFORMAT:"removeformat",FORECOLOR:"forecolor",BACKCOLOR:"backcolor",HILITECOLOR:"hilitecolor",SUPERSCRIPT:"superscript",SUBSCRIPT:"subscript",JUSTIFYLEFT:"justifyleft",JUSTIFYCENTER:"justifycenter",JUSTIFYRIGHT:"justifyright",JUSTIFYFULL:"justifyfull",INDENT:"indent",OUTDENT:"outdent",ORDEREDLIST:"insertorderedlist",UNORDEREDLIST:"insertunorderedlist",INSERTHORIZONTALRULE:"inserthorizontalrule",INSERTIMAGE:"insertimage",CREATELINK:"createlink",UNLINK:"unlink",UNDO:"undo",REDO:"redo"};return function(n,o,r){let i=n.contentWindow,l=i.document;n.contentDocument&&(l=n.contentDocument);let d=null;function u(t,n){t===e.BACKCOLOR&&f(e.HILITECOLOR)&&(t=e.HILITECOLOR),C(),l.execCommand(t,!1,n)}function f(t){try{return l.queryCommandEnabled(t)}catch(t){return!1}}function m(t){l.body.innerHTML=t,c()}function p(){return i.getSelection?i.getSelection().anchorNode:l.selection.createRange().parentElement()}function g(){if(i.getSelection){const t=i.getSelection();return null===t||0===t.rangeCount?"":t.getRangeAt(0).toString()}return l.selection.createRange().text}function C(){i.focus(),c(),null!==d&&d.select()}this.STATUS=t,this.COMMAND=e,this.contentWindow=i,this.contentDocument=l,this.getCurrentStatus=function(){const n={fontname:null,fontsize:null,forecolor:null,backcolor:null,bold:t.NORMAL,italic:t.NORMAL,underline:t.NORMAL,strikethrough:t.NORMAL,superscript:t.NORMAL,subscript:t.NORMAL,justifyleft:t.NORMAL,justifycenter:t.NORMAL,justifyright:t.NORMAL,justifyfull:t.NORMAL,insertorderedlist:t.NORMAL,insertunorderedlist:t.NORMAL,createlink:t.NORMAL,unlink:t.NORMAL,undo:t.NORMAL,redo:t.NORMAL};""===g()&&(n[e.CREATELINK]=t.DISABLED,n[e.UNLINK]=t.DISABLED);a.each([e.CREATELINK,e.UNLINK,e.UNDO,e.REDO],function(e,a){f(a)||(n[a]=t.DISABLED)});let o=p();for(;null!==o;){if(o.tagName!==s){const a=o.tagName.toLowerCase();switch(a){case"b":case"strong":n[e.BOLD]=t.ACTIVE;break;case"i":case"em":n[e.ITALIC]=t.ACTIVE;break;case"u":n[e.UNDERLINE]=t.ACTIVE;break;case"s":case"strike":case"del":n[e.STRIKETHROUGH]=t.ACTIVE;break;case"sup":n[e.SUPERSCRIPT]=t.ACTIVE;break;case"sub":n[e.SUBSCRIPT]=t.ACTIVE;break;case"ol":n[e.ORDEREDLIST]=t.ACTIVE;break;case"ul":n[e.UNORDEREDLIST]=t.ACTIVE;break;case"font":o.face.length>0&&null===n[e.FONTNAME]&&(n[e.FONTNAME]=o.face),o.size.length>0&&null===n[e.FONTSIZE]&&(n[e.FONTSIZE]=o.size),o.color.length>0&&null===n[e.FORECOLOR]&&(n[e.FORECOLOR]=o.color)}}if(o.align!==s){const a=o.align.toLowerCase();switch(a){case"left":n[e.JUSTIFYLEFT]=t.ACTIVE;break;case"center":n[e.JUSTIFYCENTER]=t.ACTIVE;break;case"right":n[e.JUSTIFYRIGHT]=t.ACTIVE;break;case"justify":n[e.JUSTIFYFULL]=t.ACTIVE}}if(o.style!==s){const a=o.style;if(a.fontFamily!==s){const t=a.fontFamily;t.length>0&&null===n[e.FONTNAME]&&(n[e.FONTNAME]=t)}if(a.fontWeight!==s){const o=a.fontWeight.toLowerCase();switch(o){case"bold":case"bolder":n[e.BOLD]=t.ACTIVE}}if(a.fontStyle!==s){const o=a.fontStyle.toLowerCase();switch(o){case"italic":case"oblique":n[e.ITALIC]=t.ACTIVE}}if(a.textDecoration!==s){const o=a.textDecoration.toLowerCase();-1!==o.indexOf("underline")&&(n[e.UNDERLINE]=t.ACTIVE),-1!==o.indexOf("line-through")&&(n[e.STRIKETHROUGH]=t.ACTIVE)}if(a.color!==s){const t=a.color;t.length>0&&null===n[e.FORECOLOR]&&(n[e.FORECOLOR]=t)}if(a.backgroundColor!==s){const t=a.backgroundColor;t.length>0&&null===n[e.BACKCOLOR]&&(n[e.BACKCOLOR]=t)}if(a.verticalAlign!==s){const o=a.verticalAlign.toLowerCase();switch(o){case"super":n[e.SUPERSCRIPT]=t.ACTIVE;break;case"sub":n[e.SUBSCRIPT]=t.ACTIVE}}if(a.textAlign!==s){const o=a.textAlign.toLowerCase();switch(o){case"left":n[e.JUSTIFYLEFT]=t.ACTIVE;break;case"center":n[e.JUSTIFYCENTER]=t.ACTIVE;break;case"right":n[e.JUSTIFYRIGHT]=t.ACTIVE;break;case"justify":n[e.JUSTIFYFULL]=t.ACTIVE}}}o=o.parentNode}l.selection&&(d=l.selection.createRange());return n},this.execCommand=u,this.canExecCommand=f,this.value=function(t){if(t===s)return function(){let t=l.body.innerHTML;return t=t.replace(/(<\/?)p\b/gi,"$1div").replace(/(<\/?)em\b/gi,"$1i").replace(/(<\/?)strong\b/gi,"$1b").replace(/(<\/?)del\b/gi,"$1s")}();m(t)},this.getSelectedText=g,this.insertText=function(t,n){if(i.getSelection){const e=l.createTextNode(t),n=i.getSelection();n.deleteFromDocument(),n.getRangeAt(0).insertNode(e)}else l.selection.createRange().text=t;n?u(e.REMOVEFORMAT):C()},this.setFocus=C,function(t){const e=`<!DOCTYPE html><html><head><meta charset="UTF-8" /><style type="text/css">${r}</style></head><body></body></html>`;l.designMode="on",n=e,l.open(),l.write(n),l.close(),m(t);var n}(o)}}();return a.fn.extend({cazary:function(a){const m=27,p={separator:"",fontname:"Font",fontsize:"Size",bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strike-Through",removeformat:"Remove Format",forecolor:"Foreground Color",backcolor:"Background Color",superscript:"Superscript",subscript:"Subscript",justifyleft:"Justify Left",justifycenter:"Justify Center",justifyright:"Justify Right",justifyfull:"Justify Full",indent:"Indent",outdent:"Outdent",insertorderedlist:"Ordered List",insertunorderedlist:"Unordered List",inserthorizontalrule:"Horizontal Rule",insertimage:"Insert Image",createlink:"Insert Link",unlink:"Unlink",undo:"Undo",redo:"Redo",source:"Show Source"},g={1:"Size 1",2:"Size 2",3:"Size 3",4:"Size 4",5:"Size 5",6:"Size 6",7:"Size 7"},C={MINIMAL:["bold italic underline","insertorderedlist insertunorderedlist"],STANDARD:["fontname fontsize","bold italic underline strikethrough removeformat | forecolor backcolor | superscript subscript","source"],FULL:["fontname fontsize","bold italic underline strikethrough removeformat | forecolor backcolor | superscript subscript","justifyleft justifycenter justifyright justifyfull | indent outdent | insertorderedlist insertunorderedlist","inserthorizontalrule insertimage createlink unlink","undo redo","source"]};return a(function(t){t(i).on("click",function(){h()}).on("keydown",function(t){t.keyCode===m&&h()})}),function(y){return y=a.extend({mode:"rte",style:"body{margin:0px;padding:8px;word-break: break-all;}p{margin:0px;padding:0px;}",fontnames:["sans-serif","serif","cursive","fantasy","monospace","Arial","Arial Black","Comic Sans MS","Courier New","Narrow","Garamond","Georgia","Impact","Tahoma","Times New Roman","Trebuchet MS","Verdana"],colors:[["#ffffff","#ffcccc","#ffcc99","#ffff99","#ffffcc","#99ff99","#99ffff","#ccffff","#ccccff","#ffccff"],["#cccccc","#ff6666","#ff9966","#ffff66","#ffff33","#66ff99","#33ffff","#66ffff","#9999ff","#ff99ff"],["#bbbbbb","#ff0000","#ff9900","#ffcc66","#ffff00","#33ff33","#66cccc","#33ccff","#6666cc","#cc66cc"],["#999999","#cc0000","#ff6600","#ffcc33","#ffcc00","#33cc00","#00cccc","#3366ff","#6633ff","#cc33cc"],["#666666","#990000","#cc6600","#cc9933","#999900","#009900","#339999","#3333ff","#6600cc","#993399"],["#333333","#660000","#993300","#996633","#666600","#006600","#336666","#000099","#333399","#663366"],["#000000","#330000","#663300","#663333","#333300","#003300","#003333","#000066","#330099","#330033"]],commands:"STANDARD"},y),this.each(function(){const A=parseInt(1e4*Math.random()),T=a(this),b=a('<div class="cazary"><iframe class="cazary-edit" src="javascript:" style="display:none;"></iframe></div>').css({width:T.width()});b.prepend(function(t){"string"==typeof t&&(t=C[t]!==s?C[t]:[t]);const e=a("<div />").addClass("cazary-commands-wrapper");return a.each(t,function(){const t=a("<ul />").addClass("cazary-commands-list"),n=this.toLowerCase().split(" ");a.each(n,function(){let e=this.toString();if("|"===e&&(e="separator"),p[e]===s)return;const n=l(p[e]),o=`cazary-command-${e}`,r=a("<li />").attr({unselectable:"on",title:n}).addClass(o).text(n);t.append(r)}),e.append(t)}),e}(y.commands));const L=b.find(".cazary-edit").css({height:"100%"}),O=b.find("ul.cazary-commands-list li.cazary-command-source"),E=b.find("ul.cazary-commands-list li:not(.cazary-command-source)");T.hide().before(b).insertAfter(L).addClass("cazary-source");let N=y.style,R=T.attr("placeholder");R!==s&&(N+=`body.empty:before{position:fixed;color:#888;content:'${R=R.replace("'","\\'")}';}`);const I=new f(L.get(0),T.val(),N);I.SLA_RTE_orderNo=t.length+1,a(I.contentDocument).find("body").css("font-family","'Roboto-Regular', Helvetica, Arial, sans-serif");const v=[I.COMMAND.BOLD,I.COMMAND.ITALIC,I.COMMAND.UNDERLINE,I.COMMAND.STRIKETHROUGH,I.COMMAND.REMOVEFORMAT,I.COMMAND.SUPERSCRIPT,I.COMMAND.SUBSCRIPT,I.COMMAND.JUSTIFYLEFT,I.COMMAND.JUSTIFYCENTER,I.COMMAND.JUSTIFYRIGHT,I.COMMAND.JUSTIFYFULL,I.COMMAND.INDENT,I.COMMAND.OUTDENT,I.COMMAND.ORDEREDLIST,I.COMMAND.UNORDEREDLIST,I.COMMAND.INSERTHORIZONTALRULE,I.COMMAND.UNLINK,I.COMMAND.UNDO,I.COMMAND.REDO],S=[I.COMMAND.FONTNAME,I.COMMAND.FONTSIZE,I.COMMAND.FORECOLOR,I.COMMAND.BACKCOLOR,I.COMMAND.INSERTIMAGE,I.COMMAND.CREATELINK];if("html"===y.mode?k():D(),T.parents(".shortLongAnsComponent").attr("scorm-saved-ans")==s&&T.parents(".shortLongAnsComponent").attr("data-pretext")&&T.parents(".shortLongAnsComponent").attr("scorm-saved-ans",n(T.parents(".shortLongAnsComponent").attr("data-pretext"))),T.parents(".shortLongAnsComponent").attr("scorm-saved-ans")){let t=T.parents(".shortLongAnsComponent").attr("scorm-saved-ans");I.value(t),a(I.contentDocument).find("body").html(t),T.html(t)}function M(t,e){h(),I.execCommand(t,e),z()}function D(){T.hide(),L.css("display",""),E.removeClass("cazary-disabled"),O.removeClass("cazary-active"),z()}function k(){const t=I.value();T.val(t),L.hide(),T.css("display",""),E.addClass("cazary-disabled"),O.addClass("cazary-active")}function w(){return O.hasClass("cazary-active")}function z(){const t=I.getCurrentStatus();c();for(const e in t){let n=t[e];const a=b.find(`.cazary-command-${e}`);if(e!==I.COMMAND.FONTNAME)if(e!==I.COMMAND.FONTSIZE)if(e!==I.COMMAND.FORECOLOR&&e!==I.COMMAND.BACKCOLOR)n===I.STATUS.ACTIVE?a.addClass("cazary-active"):a.removeClass("cazary-active"),n===I.STATUS.DISABLED?a.addClass("cazary-disabled"):a.removeClass("cazary-disabled");else{const t=null===n?"":n;b.find(`.cazary-command-${e}`).css("background-color",t)}else{let t=n;null===t?(n="",t=a.attr("title")):t=l(g[t]),a.text(t)}else{let t=n;null===t&&(n="",t=a.attr("title")),a.css({"font-family":n}).text(t)}}}function x(){w()?T.trigger("focus"):I.setFocus()}function $(){const t=a(I.contentDocument.body);0===t.text().length?t.addClass("empty"):t.removeClass("empty")}T.on("change",function(){const t=a(this).val();I.value(t),$()}),a(I.contentDocument).on("select",function(){z()}).on("mouseup",function(){h(),z()}).on("keydown",function(t){t.keyCode===m&&h()}).on("input",function(t){let n=T.parents(".shortLongAnsComponent").find("iframe").contents().find("body").text();n.length&&T.parents(".shortLongAnsComponent").find("iframe").contents().find("body").removeClass("empty"),n.length>5e3&&(n=n.substring(0,5e3),I.value(n),T.val(n),T.parents(".shortLongAnsComponent").find("iframe").contents().find("body").attr("style","font-family:'Roboto-Regular', Helvetica, Arial, sans-serif;")),r.setTimeout(function(){z(),$(),T.val(I.value()),T.parents(".shortLongAnsComponent").attr("scorm-saved-ans",I.value()),e(T),"undefined"!=typeof apiHandle&&o(I.value(),t,T)},10)}),a(I.contentWindow).on("focus",function(){h(),z()}).on("blur",function(){T.val(I.value()),T.trigger("blur")}),b.on("click","ul.cazary-commands-list li",function(t){a(this).hasClass("cazary-disabled")&&(t.stopImmediatePropagation(),x())}),a(i).off("click",".key_button").on("click",".key__button",function(t){if(a(this).parents(".keys").attr("data-SLA_RTE_orderNo")&&Number(a(this).parents(".keys").attr("data-SLA_RTE_orderNo"))==I.SLA_RTE_orderNo&&a(t.target).parents('.customClass[data-type="shortLongAns"]').eq(0).find("iframe").length){t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation();let e=a(t.target).parents('.customClass[data-type="shortLongAns"]').eq(0).find("iframe")[0].contentDocument;a(t.target).parents('.customClass[data-type="shortLongAns"]').eq(0).find("iframe")[0].contentWindow.focus(),e.execCommand("insertText",!1,t.currentTarget.textContent),r.setTimeout(function(){z(),$()},10)}}),O.on("click",function(){w()?D():k(),x()}),a.each(v,function(){const t=this.toLowerCase();b.on("click",`.cazary-command-${t}`,function(){M(t)})}),a.each(S,function(){const t=this.toLowerCase();b.on("click",`.cazary-command-${t}`,function(){const e=a(this);return function(t,e,n){let o=a(".cazary-panel");if(o.length>0){const e=o.data("id"),n=o.data("command");if(h(),n===t&&e===A)return void x()}let s=!1;switch(t){case I.COMMAND.FONTNAME:o=function(t,e){const n=a("<ul />").addClass("cazary-widget-select");return a.each(e,function(){const t=this.toString(),e=a("<li />").attr({unselectable:"on",title:t}).css({"font-family":t}).data("param",t).text(t);n.append(e)}),a("<div>").append(n)}(0,e.fontnames),s=!0;break;case I.COMMAND.FONTSIZE:o=function(t){const e=a("<ul />").addClass("cazary-widget-select");return a.each(g,function(t,n){const o=l(n),r=a("<li />").attr({unselectable:"on",title:o}).data("param",t),s=a("<font />").attr({size:t}).text(n);e.append(r.append(s))}),a("<div>").append(e)}(),s=!0;break;case I.COMMAND.FORECOLOR:case I.COMMAND.BACKCOLOR:o=function(t,e){const n=a("<div>");return a.each(e,function(){const t=a("<ul />").addClass("cazary-widget-select-color");a.each(this,function(){const e=this.toString(),n=a("<li />").attr({unselectable:"on",title:e}).css({"background-color":e}).data("param",e).text(e);t.append(n)}),n.append(t)}),n}(0,e.colors),s=!0;break;case I.COMMAND.INSERTIMAGE:o=function(t){const e=a("<div>").append(a("<form />").attr("action","#").append(a("<div />").append(a("<fieldset />").append(a("<legend />").text(l("Input image URL"))).append(a('<input type="text" />').addClass("cazary-widget-insertimage-url").attr({required:"required",placeholder:l("http://example.com/path/to/image.jpg")}))).append(a('<input type="submit" />').addClass("cazary-widget-submit").val(l("Insert")))).append(a("<fieldset />").addClass("cazary-widget-preview").append(a("<legend />").text(l("Preview"))).append(a("<img />").addClass("cazary-widget-preview-insertimage"))));return e.on("submit","form",n).on("click",".cazary-widget-submit",n).on("keydown paste",".cazary-widget-insertimage-url",function(){const t=a(this);r.setTimeout(function(){const n=t.val(),a=t.data("url_old");if(n===a)return;t.data("url_old",n);const o=e.find(".cazary-widget-preview");u(n)?(o.show(),e.find(".cazary-widget-preview-insertimage").attr("src",n)):o.hide()},10)});function n(){const n=e.find(".cazary-widget-insertimage-url"),a=n.val();return u(a)?(M(t,a),!1):(n.trigger("focus"),!1)}}(t);break;case I.COMMAND.CREATELINK:o=function(t){const e=a("<div>").append(a("<form />").attr("action","#").append(a("<div />").append(a("<fieldset />").append(a("<legend />").text(l("Input link URL or E-mail address"))).append(a('<input type="text" />').addClass("cazary-widget-createlink-url").attr({required:"required",placeholder:l("http://example.com/, someone@example.com")}))).append(a('<input type="button" />').addClass("cazary-widget-submit").val(l("Insert")))).append(a("<fieldset />").addClass("cazary-widget-preview").append(a("<legend />").text(l("Preview"))).append(a("<iframe />").addClass("cazary-widget-preview-createlink"))));return e.on("submit","form",n).on("click",".cazary-widget-submit",n).on("keydown paste",".cazary-widget-createlink-url",function(){const t=a(this);r.setTimeout(function(){const n=t.val(),a=t.data("url_old");if(n===a)return;t.data("url_old",n);const o=e.find(".cazary-widget-preview");u(n)?(o.show(),e.find(".cazary-widget-preview-createlink").attr("src",n)):o.hide()},10)});function n(){const n=e.find(".cazary-widget-createlink-url");let a=n.val();if(d(a))a=`mailto:${a}`;else if(!u(a))return n.trigger("focus"),!1;return M(t,a),!1}}(t);break;default:return null}s&&o.on("click","li",function(){const e=a(this),n=e.data("param");M(t,n)});const c=n.addClass("cazary-active").offset();c.top+=n.outerHeight(),o.addClass("cazary-panel").addClass(`cazary-panel-${t}`).data("id",A).data("command",t).css({left:`${c.left}px`,top:`${c.top}px`}).on("click",function(){return!1}).appendTo(a(i.body)).find(":text:first").trigger("focus")}(t,y,e),!1})})})};function h(){a(".cazary-panel").each(function(){const t=a(this).data("command");a(`.cazary-command-${t}`).removeClass("cazary-active")}).remove()}}(a)}),a}),$("textarea#"+$(r[s]).attr("id")).cazary({commands:"MINIMAL"}),t.push($('.customClass[data-type="shortLongAns"] textarea.cazary-source').eq(t.length)),$('.customClass[data-type="shortLongAns"] textarea.cazary-source').eq(t.length-1).parents('.customClass[data-type="shortLongAns"]').find(".keyboard-parent .keys").attr("data-SLA_RTE_orderNo",t.length),$(".shortLongAnsComponent").each(function(){let t=$(this).attr("cust-keyb-enabled");$(this).find("div.cazary").css("border-radius","true"==t?"8px 8px 0 0":"8px")}),$("textarea#"+$(r[s]).attr("id")).on("blur",function(t){"undefined"!=typeof apiHandle&&a(t)})},200);$(".shortLongAnsComponent .customKeybord-cantsiner").on("click",function(t){setTimeout(function(){$(".customKeybord-cantsiner .keys").find(".key__button").on("click",function(t){$(t.currentTarget).parents('.customClass[data-type="shortLongAns"]').find("textArea.ansRTE").length<1&&($(document.getSelection().anchorNode).find("textarea.longAnsTextArea").length>=1||$(document.getSelection().anchorNode).find("input").length>=1)&&s(t)})},100)});var s=function(t){document.execCommand("insertText",!1,t.currentTarget.textContent),t.preventDefault(),t.stopImmediatePropagation()}});