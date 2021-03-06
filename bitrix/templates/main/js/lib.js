/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/*

     _ _      _       _

 ___| (_) ___| | __  (_)___

/ __| | |/ __| |/ /  | / __|

\__ \ | | (__|   < _ | \__ \

|___/_|_|\___|_|\_(_)/ |___/

                   |__/



 Version: 1.8.0

  Author: Ken Wheeler

 Website: http://kenwheeler.github.io

    Docs: http://kenwheeler.github.io/slick

    Repo: http://github.com/kenwheeler/slick

  Issues: http://github.com/kenwheeler/slick/issues



 */

/* global window, document, define, jQuery, setInterval, clearInterval */

;(function(factory) {

    'use strict';

    if (typeof define === 'function' && define.amd) {

        define(['jquery'], factory);

    } else if (typeof exports !== 'undefined') {

        module.exports = factory(require('jquery'));

    } else {

        factory(jQuery);

    }



}(function($) {

    'use strict';

    var Slick = window.Slick || {};



    Slick = (function() {



        var instanceUid = 0;



        function Slick(element, settings) {



            var _ = this, dataSettings;



            _.defaults = {

                accessibility: true,

                adaptiveHeight: false,

                appendArrows: $(element),

                appendDots: $(element),

                arrows: true,

                asNavFor: null,

                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',

                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',

                autoplay: false,

                autoplaySpeed: 3000,

                centerMode: false,

                centerPadding: '50px',

                cssEase: 'ease',

                customPaging: function(slider, i) {

                    return $('<button type="button" />').text(i + 1);

                },

                dots: false,

                dotsClass: 'slick-dots',

                draggable: true,

                easing: 'linear',

                edgeFriction: 0.35,

                fade: false,

                focusOnSelect: false,

                focusOnChange: false,

                infinite: true,

                initialSlide: 0,

                lazyLoad: 'ondemand',

                mobileFirst: false,

                pauseOnHover: true,

                pauseOnFocus: true,

                pauseOnDotsHover: false,

                respondTo: 'window',

                responsive: null,

                rows: 1,

                rtl: false,

                slide: '',

                slidesPerRow: 1,

                slidesToShow: 1,

                slidesToScroll: 1,

                speed: 500,

                swipe: true,

                swipeToSlide: false,

                touchMove: true,

                touchThreshold: 5,

                useCSS: true,

                useTransform: true,

                variableWidth: false,

                vertical: false,

                verticalSwiping: false,

                waitForAnimate: true,

                zIndex: 1000

            };



            _.initials = {

                animating: false,

                dragging: false,

                autoPlayTimer: null,

                currentDirection: 0,

                currentLeft: null,

                currentSlide: 0,

                direction: 1,

                $dots: null,

                listWidth: null,

                listHeight: null,

                loadIndex: 0,

                $nextArrow: null,

                $prevArrow: null,

                scrolling: false,

                slideCount: null,

                slideWidth: null,

                $slideTrack: null,

                $slides: null,

                sliding: false,

                slideOffset: 0,

                swipeLeft: null,

                swiping: false,

                $list: null,

                touchObject: {},

                transformsEnabled: false,

                unslicked: false

            };



            $.extend(_, _.initials);



            _.activeBreakpoint = null;

            _.animType = null;

            _.animProp = null;

            _.breakpoints = [];

            _.breakpointSettings = [];

            _.cssTransitions = false;

            _.focussed = false;

            _.interrupted = false;

            _.hidden = 'hidden';

            _.paused = true;

            _.positionProp = null;

            _.respondTo = null;

            _.rowCount = 1;

            _.shouldClick = true;

            _.$slider = $(element);

            _.$slidesCache = null;

            _.transformType = null;

            _.transitionType = null;

            _.visibilityChange = 'visibilitychange';

            _.windowWidth = 0;

            _.windowTimer = null;



            dataSettings = $(element).data('slick') || {};



            _.options = $.extend({}, _.defaults, settings, dataSettings);



            _.currentSlide = _.options.initialSlide;



            _.originalSettings = _.options;



            if (typeof document.mozHidden !== 'undefined') {

                _.hidden = 'mozHidden';

                _.visibilityChange = 'mozvisibilitychange';

            } else if (typeof document.webkitHidden !== 'undefined') {

                _.hidden = 'webkitHidden';

                _.visibilityChange = 'webkitvisibilitychange';

            }



            _.autoPlay = $.proxy(_.autoPlay, _);

            _.autoPlayClear = $.proxy(_.autoPlayClear, _);

            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

            _.changeSlide = $.proxy(_.changeSlide, _);

            _.clickHandler = $.proxy(_.clickHandler, _);

            _.selectHandler = $.proxy(_.selectHandler, _);

            _.setPosition = $.proxy(_.setPosition, _);

            _.swipeHandler = $.proxy(_.swipeHandler, _);

            _.dragHandler = $.proxy(_.dragHandler, _);

            _.keyHandler = $.proxy(_.keyHandler, _);



            _.instanceUid = instanceUid++;



            // A simple way to check for HTML strings

            // Strict HTML recognition (must start with <)

            // Extracted from jQuery v1.11 source

            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;





            _.registerBreakpoints();

            _.init(true);



        }



        return Slick;



    }());



    Slick.prototype.activateADA = function() {

        var _ = this;



        _.$slideTrack.find('.slick-active').attr({

            'aria-hidden': 'false'

        }).find('a, input, button, select').attr({

            'tabindex': '0'

        });



    };



    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {



        var _ = this;



        if (typeof(index) === 'boolean') {

            addBefore = index;

            index = null;

        } else if (index < 0 || (index >= _.slideCount)) {

            return false;

        }



        _.unload();



        if (typeof(index) === 'number') {

            if (index === 0 && _.$slides.length === 0) {

                $(markup).appendTo(_.$slideTrack);

            } else if (addBefore) {

                $(markup).insertBefore(_.$slides.eq(index));

            } else {

                $(markup).insertAfter(_.$slides.eq(index));

            }

        } else {

            if (addBefore === true) {

                $(markup).prependTo(_.$slideTrack);

            } else {

                $(markup).appendTo(_.$slideTrack);

            }

        }



        _.$slides = _.$slideTrack.children(this.options.slide);



        _.$slideTrack.children(this.options.slide).detach();



        _.$slideTrack.append(_.$slides);



        _.$slides.each(function(index, element) {

            $(element).attr('data-slick-index', index);

        });



        _.$slidesCache = _.$slides;



        _.reinit();



    };



    Slick.prototype.animateHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {

            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

            _.$list.animate({

                height: targetHeight

            }, _.options.speed);

        }

    };



    Slick.prototype.animateSlide = function(targetLeft, callback) {



        var animProps = {},

            _ = this;



        _.animateHeight();



        if (_.options.rtl === true && _.options.vertical === false) {

            targetLeft = -targetLeft;

        }

        if (_.transformsEnabled === false) {

            if (_.options.vertical === false) {

                _.$slideTrack.animate({

                    left: targetLeft

                }, _.options.speed, _.options.easing, callback);

            } else {

                _.$slideTrack.animate({

                    top: targetLeft

                }, _.options.speed, _.options.easing, callback);

            }



        } else {



            if (_.cssTransitions === false) {

                if (_.options.rtl === true) {

                    _.currentLeft = -(_.currentLeft);

                }

                $({

                    animStart: _.currentLeft

                }).animate({

                    animStart: targetLeft

                }, {

                    duration: _.options.speed,

                    easing: _.options.easing,

                    step: function(now) {

                        now = Math.ceil(now);

                        if (_.options.vertical === false) {

                            animProps[_.animType] = 'translate(' +

                                now + 'px, 0px)';

                            _.$slideTrack.css(animProps);

                        } else {

                            animProps[_.animType] = 'translate(0px,' +

                                now + 'px)';

                            _.$slideTrack.css(animProps);

                        }

                    },

                    complete: function() {

                        if (callback) {

                            callback.call();

                        }

                    }

                });



            } else {



                _.applyTransition();

                targetLeft = Math.ceil(targetLeft);



                if (_.options.vertical === false) {

                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';

                } else {

                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';

                }

                _.$slideTrack.css(animProps);



                if (callback) {

                    setTimeout(function() {



                        _.disableTransition();



                        callback.call();

                    }, _.options.speed);

                }



            }



        }



    };



    Slick.prototype.getNavTarget = function() {



        var _ = this,

            asNavFor = _.options.asNavFor;



        if ( asNavFor && asNavFor !== null ) {

            asNavFor = $(asNavFor).not(_.$slider);

        }



        return asNavFor;



    };



    Slick.prototype.asNavFor = function(index) {



        var _ = this,

            asNavFor = _.getNavTarget();



        if ( asNavFor !== null && typeof asNavFor === 'object' ) {

            asNavFor.each(function() {

                var target = $(this).slick('getSlick');

                if(!target.unslicked) {

                    target.slideHandler(index, true);

                }

            });

        }



    };



    Slick.prototype.applyTransition = function(slide) {



        var _ = this,

            transition = {};



        if (_.options.fade === false) {

            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;

        } else {

            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;

        }



        if (_.options.fade === false) {

            _.$slideTrack.css(transition);

        } else {

            _.$slides.eq(slide).css(transition);

        }



    };



    Slick.prototype.autoPlay = function() {



        var _ = this;



        _.autoPlayClear();



        if ( _.slideCount > _.options.slidesToShow ) {

            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );

        }



    };



    Slick.prototype.autoPlayClear = function() {



        var _ = this;



        if (_.autoPlayTimer) {

            clearInterval(_.autoPlayTimer);

        }



    };



    Slick.prototype.autoPlayIterator = function() {



        var _ = this,

            slideTo = _.currentSlide + _.options.slidesToScroll;



        if ( !_.paused && !_.interrupted && !_.focussed ) {



            if ( _.options.infinite === false ) {



                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {

                    _.direction = 0;

                }



                else if ( _.direction === 0 ) {



                    slideTo = _.currentSlide - _.options.slidesToScroll;



                    if ( _.currentSlide - 1 === 0 ) {

                        _.direction = 1;

                    }



                }



            }



            _.slideHandler( slideTo );



        }



    };



    Slick.prototype.buildArrows = function() {



        var _ = this;



        if (_.options.arrows === true ) {



            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');

            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');



            if( _.slideCount > _.options.slidesToShow ) {



                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');



                if (_.htmlExpr.test(_.options.prevArrow)) {

                    _.$prevArrow.prependTo(_.options.appendArrows);

                }



                if (_.htmlExpr.test(_.options.nextArrow)) {

                    _.$nextArrow.appendTo(_.options.appendArrows);

                }



                if (_.options.infinite !== true) {

                    _.$prevArrow

                        .addClass('slick-disabled')

                        .attr('aria-disabled', 'true');

                }



            } else {



                _.$prevArrow.add( _.$nextArrow )



                    .addClass('slick-hidden')

                    .attr({

                        'aria-disabled': 'true',

                        'tabindex': '-1'

                    });



            }



        }



    };



    Slick.prototype.buildDots = function() {



        var _ = this,

            i, dot;



        if (_.options.dots === true) {



            _.$slider.addClass('slick-dotted');



            dot = $('<ul />').addClass(_.options.dotsClass);



            for (i = 0; i <= _.getDotCount(); i += 1) {

                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));

            }



            _.$dots = dot.appendTo(_.options.appendDots);



            _.$dots.find('li').first().addClass('slick-active');



        }



    };



    Slick.prototype.buildOut = function() {



        var _ = this;



        _.$slides =

            _.$slider

                .children( _.options.slide + ':not(.slick-cloned)')

                .addClass('slick-slide');



        _.slideCount = _.$slides.length;



        _.$slides.each(function(index, element) {

            $(element)

                .attr('data-slick-index', index)

                .data('originalStyling', $(element).attr('style') || '');

        });



        _.$slider.addClass('slick-slider');



        _.$slideTrack = (_.slideCount === 0) ?

            $('<div class="slick-track"/>').appendTo(_.$slider) :

            _.$slides.wrapAll('<div class="slick-track"/>').parent();



        _.$list = _.$slideTrack.wrap(

            '<div class="slick-list"/>').parent();

        _.$slideTrack.css('opacity', 0);



        if (_.options.centerMode === true || _.options.swipeToSlide === true) {

            _.options.slidesToScroll = 1;

        }



        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');



        _.setupInfinite();



        _.buildArrows();



        _.buildDots();



        _.updateDots();





        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);



        if (_.options.draggable === true) {

            _.$list.addClass('draggable');

        }



    };



    Slick.prototype.buildRows = function() {



        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;



        newSlides = document.createDocumentFragment();

        originalSlides = _.$slider.children();



        if(_.options.rows > 1) {



            slidesPerSection = _.options.slidesPerRow * _.options.rows;

            numOfSlides = Math.ceil(

                originalSlides.length / slidesPerSection

            );



            for(a = 0; a < numOfSlides; a++){

                var slide = document.createElement('div');

                for(b = 0; b < _.options.rows; b++) {

                    var row = document.createElement('div');

                    for(c = 0; c < _.options.slidesPerRow; c++) {

                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));

                        if (originalSlides.get(target)) {

                            row.appendChild(originalSlides.get(target));

                        }

                    }

                    slide.appendChild(row);

                }

                newSlides.appendChild(slide);

            }



            _.$slider.empty().append(newSlides);

            _.$slider.children().children().children()

                .css({

                    'width':(100 / _.options.slidesPerRow) + '%',

                    'display': 'inline-block'

                });



        }



    };



    Slick.prototype.checkResponsive = function(initial, forceUpdate) {



        var _ = this,

            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;

        var sliderWidth = _.$slider.width();

        var windowWidth = window.innerWidth || $(window).width();



        if (_.respondTo === 'window') {

            respondToWidth = windowWidth;

        } else if (_.respondTo === 'slider') {

            respondToWidth = sliderWidth;

        } else if (_.respondTo === 'min') {

            respondToWidth = Math.min(windowWidth, sliderWidth);

        }



        if ( _.options.responsive &&

            _.options.responsive.length &&

            _.options.responsive !== null) {



            targetBreakpoint = null;



            for (breakpoint in _.breakpoints) {

                if (_.breakpoints.hasOwnProperty(breakpoint)) {

                    if (_.originalSettings.mobileFirst === false) {

                        if (respondToWidth < _.breakpoints[breakpoint]) {

                            targetBreakpoint = _.breakpoints[breakpoint];

                        }

                    } else {

                        if (respondToWidth > _.breakpoints[breakpoint]) {

                            targetBreakpoint = _.breakpoints[breakpoint];

                        }

                    }

                }

            }



            if (targetBreakpoint !== null) {

                if (_.activeBreakpoint !== null) {

                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {

                        _.activeBreakpoint =

                            targetBreakpoint;

                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {

                            _.unslick(targetBreakpoint);

                        } else {

                            _.options = $.extend({}, _.originalSettings,

                                _.breakpointSettings[

                                    targetBreakpoint]);

                            if (initial === true) {

                                _.currentSlide = _.options.initialSlide;

                            }

                            _.refresh(initial);

                        }

                        triggerBreakpoint = targetBreakpoint;

                    }

                } else {

                    _.activeBreakpoint = targetBreakpoint;

                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {

                        _.unslick(targetBreakpoint);

                    } else {

                        _.options = $.extend({}, _.originalSettings,

                            _.breakpointSettings[

                                targetBreakpoint]);

                        if (initial === true) {

                            _.currentSlide = _.options.initialSlide;

                        }

                        _.refresh(initial);

                    }

                    triggerBreakpoint = targetBreakpoint;

                }

            } else {

                if (_.activeBreakpoint !== null) {

                    _.activeBreakpoint = null;

                    _.options = _.originalSettings;

                    if (initial === true) {

                        _.currentSlide = _.options.initialSlide;

                    }

                    _.refresh(initial);

                    triggerBreakpoint = targetBreakpoint;

                }

            }



            // only trigger breakpoints during an actual break. not on initialize.

            if( !initial && triggerBreakpoint !== false ) {

                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);

            }

        }



    };



    Slick.prototype.changeSlide = function(event, dontAnimate) {



        var _ = this,

            $target = $(event.currentTarget),

            indexOffset, slideOffset, unevenOffset;



        // If target is a link, prevent default action.

        if($target.is('a')) {

            event.preventDefault();

        }



        // If target is not the <li> element (ie: a child), find the <li>.

        if(!$target.is('li')) {

            $target = $target.closest('li');

        }



        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);

        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;



        switch (event.data.message) {



            case 'previous':

                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

                if (_.slideCount > _.options.slidesToShow) {

                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);

                }

                break;



            case 'next':

                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

                if (_.slideCount > _.options.slidesToShow) {

                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);

                }

                break;



            case 'index':

                var index = event.data.index === 0 ? 0 :

                    event.data.index || $target.index() * _.options.slidesToScroll;



                _.slideHandler(_.checkNavigable(index), false, dontAnimate);

                $target.children().trigger('focus');

                break;



            default:

                return;

        }



    };



    Slick.prototype.checkNavigable = function(index) {



        var _ = this,

            navigables, prevNavigable;



        navigables = _.getNavigableIndexes();

        prevNavigable = 0;

        if (index > navigables[navigables.length - 1]) {

            index = navigables[navigables.length - 1];

        } else {

            for (var n in navigables) {

                if (index < navigables[n]) {

                    index = prevNavigable;

                    break;

                }

                prevNavigable = navigables[n];

            }

        }



        return index;

    };



    Slick.prototype.cleanUpEvents = function() {



        var _ = this;



        if (_.options.dots && _.$dots !== null) {



            $('li', _.$dots)

                .off('click.slick', _.changeSlide)

                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))

                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));



            if (_.options.accessibility === true) {

                _.$dots.off('keydown.slick', _.keyHandler);

            }

        }



        _.$slider.off('focus.slick blur.slick');



        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);

            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);



            if (_.options.accessibility === true) {

                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);

                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);

            }

        }



        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);



        _.$list.off('click.slick', _.clickHandler);



        $(document).off(_.visibilityChange, _.visibility);



        _.cleanUpSlideEvents();



        if (_.options.accessibility === true) {

            _.$list.off('keydown.slick', _.keyHandler);

        }



        if (_.options.focusOnSelect === true) {

            $(_.$slideTrack).children().off('click.slick', _.selectHandler);

        }



        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);



        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);



        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);



        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);



    };



    Slick.prototype.cleanUpSlideEvents = function() {



        var _ = this;



        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));



    };



    Slick.prototype.cleanUpRows = function() {



        var _ = this, originalSlides;



        if(_.options.rows > 1) {

            originalSlides = _.$slides.children().children();

            originalSlides.removeAttr('style');

            _.$slider.empty().append(originalSlides);

        }



    };



    Slick.prototype.clickHandler = function(event) {



        var _ = this;



        if (_.shouldClick === false) {

            event.stopImmediatePropagation();

            event.stopPropagation();

            event.preventDefault();

        }



    };



    Slick.prototype.destroy = function(refresh) {



        var _ = this;



        _.autoPlayClear();



        _.touchObject = {};



        _.cleanUpEvents();



        $('.slick-cloned', _.$slider).detach();



        if (_.$dots) {

            _.$dots.remove();

        }



        if ( _.$prevArrow && _.$prevArrow.length ) {



            _.$prevArrow

                .removeClass('slick-disabled slick-arrow slick-hidden')

                .removeAttr('aria-hidden aria-disabled tabindex')

                .css('display','');



            if ( _.htmlExpr.test( _.options.prevArrow )) {

                _.$prevArrow.remove();

            }

        }



        if ( _.$nextArrow && _.$nextArrow.length ) {



            _.$nextArrow

                .removeClass('slick-disabled slick-arrow slick-hidden')

                .removeAttr('aria-hidden aria-disabled tabindex')

                .css('display','');



            if ( _.htmlExpr.test( _.options.nextArrow )) {

                _.$nextArrow.remove();

            }

        }





        if (_.$slides) {



            _.$slides

                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')

                .removeAttr('aria-hidden')

                .removeAttr('data-slick-index')

                .each(function(){

                    $(this).attr('style', $(this).data('originalStyling'));

                });



            _.$slideTrack.children(this.options.slide).detach();



            _.$slideTrack.detach();



            _.$list.detach();



            _.$slider.append(_.$slides);

        }



        _.cleanUpRows();



        _.$slider.removeClass('slick-slider');

        _.$slider.removeClass('slick-initialized');

        _.$slider.removeClass('slick-dotted');



        _.unslicked = true;



        if(!refresh) {

            _.$slider.trigger('destroy', [_]);

        }



    };



    Slick.prototype.disableTransition = function(slide) {



        var _ = this,

            transition = {};



        transition[_.transitionType] = '';



        if (_.options.fade === false) {

            _.$slideTrack.css(transition);

        } else {

            _.$slides.eq(slide).css(transition);

        }



    };



    Slick.prototype.fadeSlide = function(slideIndex, callback) {



        var _ = this;



        if (_.cssTransitions === false) {



            _.$slides.eq(slideIndex).css({

                zIndex: _.options.zIndex

            });



            _.$slides.eq(slideIndex).animate({

                opacity: 1

            }, _.options.speed, _.options.easing, callback);



        } else {



            _.applyTransition(slideIndex);



            _.$slides.eq(slideIndex).css({

                opacity: 1,

                zIndex: _.options.zIndex

            });



            if (callback) {

                setTimeout(function() {



                    _.disableTransition(slideIndex);



                    callback.call();

                }, _.options.speed);

            }



        }



    };



    Slick.prototype.fadeSlideOut = function(slideIndex) {



        var _ = this;



        if (_.cssTransitions === false) {



            _.$slides.eq(slideIndex).animate({

                opacity: 0,

                zIndex: _.options.zIndex - 2

            }, _.options.speed, _.options.easing);



        } else {



            _.applyTransition(slideIndex);



            _.$slides.eq(slideIndex).css({

                opacity: 0,

                zIndex: _.options.zIndex - 2

            });



        }



    };



    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {



        var _ = this;



        if (filter !== null) {



            _.$slidesCache = _.$slides;



            _.unload();



            _.$slideTrack.children(this.options.slide).detach();



            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);



            _.reinit();



        }



    };



    Slick.prototype.focusHandler = function() {



        var _ = this;



        _.$slider

            .off('focus.slick blur.slick')

            .on('focus.slick blur.slick', '*', function(event) {



            event.stopImmediatePropagation();

            var $sf = $(this);



            setTimeout(function() {



                if( _.options.pauseOnFocus ) {

                    _.focussed = $sf.is(':focus');

                    _.autoPlay();

                }



            }, 0);



        });

    };



    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {



        var _ = this;

        return _.currentSlide;



    };



    Slick.prototype.getDotCount = function() {



        var _ = this;



        var breakPoint = 0;

        var counter = 0;

        var pagerQty = 0;



        if (_.options.infinite === true) {

            if (_.slideCount <= _.options.slidesToShow) {

                 ++pagerQty;

            } else {

                while (breakPoint < _.slideCount) {

                    ++pagerQty;

                    breakPoint = counter + _.options.slidesToScroll;

                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;

                }

            }

        } else if (_.options.centerMode === true) {

            pagerQty = _.slideCount;

        } else if(!_.options.asNavFor) {

            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);

        }else {

            while (breakPoint < _.slideCount) {

                ++pagerQty;

                breakPoint = counter + _.options.slidesToScroll;

                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;

            }

        }



        return pagerQty - 1;



    };



    Slick.prototype.getLeft = function(slideIndex) {



        var _ = this,

            targetLeft,

            verticalHeight,

            verticalOffset = 0,

            targetSlide,

            coef;



        _.slideOffset = 0;

        verticalHeight = _.$slides.first().outerHeight(true);



        if (_.options.infinite === true) {

            if (_.slideCount > _.options.slidesToShow) {

                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;

                coef = -1



                if (_.options.vertical === true && _.options.centerMode === true) {

                    if (_.options.slidesToShow === 2) {

                        coef = -1.5;

                    } else if (_.options.slidesToShow === 1) {

                        coef = -2

                    }

                }

                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;

            }

            if (_.slideCount % _.options.slidesToScroll !== 0) {

                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {

                    if (slideIndex > _.slideCount) {

                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;

                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;

                    } else {

                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;

                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;

                    }

                }

            }

        } else {

            if (slideIndex + _.options.slidesToShow > _.slideCount) {

                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;

                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;

            }

        }



        if (_.slideCount <= _.options.slidesToShow) {

            _.slideOffset = 0;

            verticalOffset = 0;

        }



        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {

            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);

        } else if (_.options.centerMode === true && _.options.infinite === true) {

            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;

        } else if (_.options.centerMode === true) {

            _.slideOffset = 0;

            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);

        }



        if (_.options.vertical === false) {

            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;

        } else {

            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;

        }



        if (_.options.variableWidth === true) {



            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {

                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);

            } else {

                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);

            }



            if (_.options.rtl === true) {

                if (targetSlide[0]) {

                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;

                } else {

                    targetLeft =  0;

                }

            } else {

                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

            }



            if (_.options.centerMode === true) {

                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {

                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);

                } else {

                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);

                }



                if (_.options.rtl === true) {

                    if (targetSlide[0]) {

                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;

                    } else {

                        targetLeft =  0;

                    }

                } else {

                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

                }



                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;

            }

        }



        return targetLeft;



    };



    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {



        var _ = this;



        return _.options[option];



    };



    Slick.prototype.getNavigableIndexes = function() {



        var _ = this,

            breakPoint = 0,

            counter = 0,

            indexes = [],

            max;



        if (_.options.infinite === false) {

            max = _.slideCount;

        } else {

            breakPoint = _.options.slidesToScroll * -1;

            counter = _.options.slidesToScroll * -1;

            max = _.slideCount * 2;

        }



        while (breakPoint < max) {

            indexes.push(breakPoint);

            breakPoint = counter + _.options.slidesToScroll;

            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;

        }



        return indexes;



    };



    Slick.prototype.getSlick = function() {



        return this;



    };



    Slick.prototype.getSlideCount = function() {



        var _ = this,

            slidesTraversed, swipedSlide, centerOffset;



        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;



        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function(index, slide) {

                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {

                    swipedSlide = slide;

                    return false;

                }

            });



            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;



            return slidesTraversed;



        } else {

            return _.options.slidesToScroll;

        }



    };



    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {



        var _ = this;



        _.changeSlide({

            data: {

                message: 'index',

                index: parseInt(slide)

            }

        }, dontAnimate);



    };



    Slick.prototype.init = function(creation) {



        var _ = this;



        if (!$(_.$slider).hasClass('slick-initialized')) {



            $(_.$slider).addClass('slick-initialized');



            _.buildRows();

            _.buildOut();

            _.setProps();

            _.startLoad();

            _.loadSlider();

            _.initializeEvents();

            _.updateArrows();

            _.updateDots();

            _.checkResponsive(true);

            _.focusHandler();



        }



        if (creation) {

            _.$slider.trigger('init', [_]);

        }



        if (_.options.accessibility === true) {

            _.initADA();

        }



        if ( _.options.autoplay ) {



            _.paused = false;

            _.autoPlay();



        }



    };



    Slick.prototype.initADA = function() {

        var _ = this,

                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),

                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {

                    return (val >= 0) && (val < _.slideCount);

                });



        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({

            'aria-hidden': 'true',

            'tabindex': '-1'

        }).find('a, input, button, select').attr({

            'tabindex': '-1'

        });



        if (_.$dots !== null) {

            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {

                var slideControlIndex = tabControlIndexes.indexOf(i);



                $(this).attr({

                    'role': 'tabpanel',

                    'id': 'slick-slide' + _.instanceUid + i,

                    'tabindex': -1

                });



                if (slideControlIndex !== -1) {

                    $(this).attr({

                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex

                    });

                }

            });



            _.$dots.attr('role', 'tablist').find('li').each(function(i) {

                var mappedSlideIndex = tabControlIndexes[i];



                $(this).attr({

                    'role': 'presentation'

                });



                $(this).find('button').first().attr({

                    'role': 'tab',

                    'id': 'slick-slide-control' + _.instanceUid + i,

                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,

                    'aria-label': (i + 1) + ' of ' + numDotGroups,

                    'aria-selected': null,

                    'tabindex': '-1'

                });



            }).eq(_.currentSlide).find('button').attr({

                'aria-selected': 'true',

                'tabindex': '0'

            }).end();

        }



        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {

            _.$slides.eq(i).attr('tabindex', 0);

        }



        _.activateADA();



    };



    Slick.prototype.initArrowEvents = function() {



        var _ = this;



        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow

               .off('click.slick')

               .on('click.slick', {

                    message: 'previous'

               }, _.changeSlide);

            _.$nextArrow

               .off('click.slick')

               .on('click.slick', {

                    message: 'next'

               }, _.changeSlide);



            if (_.options.accessibility === true) {

                _.$prevArrow.on('keydown.slick', _.keyHandler);

                _.$nextArrow.on('keydown.slick', _.keyHandler);

            }

        }



    };



    Slick.prototype.initDotEvents = function() {



        var _ = this;



        if (_.options.dots === true) {

            $('li', _.$dots).on('click.slick', {

                message: 'index'

            }, _.changeSlide);



            if (_.options.accessibility === true) {

                _.$dots.on('keydown.slick', _.keyHandler);

            }

        }



        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {



            $('li', _.$dots)

                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))

                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));



        }



    };



    Slick.prototype.initSlideEvents = function() {



        var _ = this;



        if ( _.options.pauseOnHover ) {



            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));



        }



    };



    Slick.prototype.initializeEvents = function() {



        var _ = this;



        _.initArrowEvents();



        _.initDotEvents();

        _.initSlideEvents();



        _.$list.on('touchstart.slick mousedown.slick', {

            action: 'start'

        }, _.swipeHandler);

        _.$list.on('touchmove.slick mousemove.slick', {

            action: 'move'

        }, _.swipeHandler);

        _.$list.on('touchend.slick mouseup.slick', {

            action: 'end'

        }, _.swipeHandler);

        _.$list.on('touchcancel.slick mouseleave.slick', {

            action: 'end'

        }, _.swipeHandler);



        _.$list.on('click.slick', _.clickHandler);



        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));



        if (_.options.accessibility === true) {

            _.$list.on('keydown.slick', _.keyHandler);

        }



        if (_.options.focusOnSelect === true) {

            $(_.$slideTrack).children().on('click.slick', _.selectHandler);

        }



        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));



        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));



        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);



        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);

        $(_.setPosition);



    };



    Slick.prototype.initUI = function() {



        var _ = this;



        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {



            _.$prevArrow.show();

            _.$nextArrow.show();



        }



        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {



            _.$dots.show();



        }



    };



    Slick.prototype.keyHandler = function(event) {



        var _ = this;

         //Dont slide if the cursor is inside the form fields and arrow keys are pressed

        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {

            if (event.keyCode === 37 && _.options.accessibility === true) {

                _.changeSlide({

                    data: {

                        message: _.options.rtl === true ? 'next' :  'previous'

                    }

                });

            } else if (event.keyCode === 39 && _.options.accessibility === true) {

                _.changeSlide({

                    data: {

                        message: _.options.rtl === true ? 'previous' : 'next'

                    }

                });

            }

        }



    };



    Slick.prototype.lazyLoad = function() {



        var _ = this,

            loadRange, cloneRange, rangeStart, rangeEnd;



        function loadImages(imagesScope) {



            $('img[data-lazy]', imagesScope).each(function() {



                var image = $(this),

                    imageSource = $(this).attr('data-lazy'),

                    imageSrcSet = $(this).attr('data-srcset'),

                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),

                    imageToLoad = document.createElement('img');



                imageToLoad.onload = function() {



                    image

                        .animate({ opacity: 0 }, 100, function() {



                            if (imageSrcSet) {

                                image

                                    .attr('srcset', imageSrcSet );



                                if (imageSizes) {

                                    image

                                        .attr('sizes', imageSizes );

                                }

                            }



                            image

                                .attr('src', imageSource)

                                .animate({ opacity: 1 }, 200, function() {

                                    image

                                        .removeAttr('data-lazy data-srcset data-sizes')

                                        .removeClass('slick-loading');

                                });

                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

                        });



                };



                imageToLoad.onerror = function() {



                    image

                        .removeAttr( 'data-lazy' )

                        .removeClass( 'slick-loading' )

                        .addClass( 'slick-lazyload-error' );



                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);



                };



                imageToLoad.src = imageSource;



            });



        }



        if (_.options.centerMode === true) {

            if (_.options.infinite === true) {

                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);

                rangeEnd = rangeStart + _.options.slidesToShow + 2;

            } else {

                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));

                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;

            }

        } else {

            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;

            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

            if (_.options.fade === true) {

                if (rangeStart > 0) rangeStart--;

                if (rangeEnd <= _.slideCount) rangeEnd++;

            }

        }



        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);



        if (_.options.lazyLoad === 'anticipated') {

            var prevSlide = rangeStart - 1,

                nextSlide = rangeEnd,

                $slides = _.$slider.find('.slick-slide');



            for (var i = 0; i < _.options.slidesToScroll; i++) {

                if (prevSlide < 0) prevSlide = _.slideCount - 1;

                loadRange = loadRange.add($slides.eq(prevSlide));

                loadRange = loadRange.add($slides.eq(nextSlide));

                prevSlide--;

                nextSlide++;

            }

        }



        loadImages(loadRange);



        if (_.slideCount <= _.options.slidesToShow) {

            cloneRange = _.$slider.find('.slick-slide');

            loadImages(cloneRange);

        } else

        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {

            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);

            loadImages(cloneRange);

        } else if (_.currentSlide === 0) {

            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);

            loadImages(cloneRange);

        }



    };



    Slick.prototype.loadSlider = function() {



        var _ = this;



        _.setPosition();



        _.$slideTrack.css({

            opacity: 1

        });



        _.$slider.removeClass('slick-loading');



        _.initUI();



        if (_.options.lazyLoad === 'progressive') {

            _.progressiveLazyLoad();

        }



    };



    Slick.prototype.next = Slick.prototype.slickNext = function() {



        var _ = this;



        _.changeSlide({

            data: {

                message: 'next'

            }

        });



    };



    Slick.prototype.orientationChange = function() {



        var _ = this;



        _.checkResponsive();

        _.setPosition();



    };



    Slick.prototype.pause = Slick.prototype.slickPause = function() {



        var _ = this;



        _.autoPlayClear();

        _.paused = true;



    };



    Slick.prototype.play = Slick.prototype.slickPlay = function() {



        var _ = this;



        _.autoPlay();

        _.options.autoplay = true;

        _.paused = false;

        _.focussed = false;

        _.interrupted = false;



    };



    Slick.prototype.postSlide = function(index) {



        var _ = this;



        if( !_.unslicked ) {



            _.$slider.trigger('afterChange', [_, index]);



            _.animating = false;



            if (_.slideCount > _.options.slidesToShow) {

                _.setPosition();

            }



            _.swipeLeft = null;



            if ( _.options.autoplay ) {

                _.autoPlay();

            }



            if (_.options.accessibility === true) {

                _.initADA();

                

                if (_.options.focusOnChange) {

                    var $currentSlide = $(_.$slides.get(_.currentSlide));

                    $currentSlide.attr('tabindex', 0).focus();

                }

            }



        }



    };



    Slick.prototype.prev = Slick.prototype.slickPrev = function() {



        var _ = this;



        _.changeSlide({

            data: {

                message: 'previous'

            }

        });



    };



    Slick.prototype.preventDefault = function(event) {



        event.preventDefault();



    };



    Slick.prototype.progressiveLazyLoad = function( tryCount ) {



        tryCount = tryCount || 1;



        var _ = this,

            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),

            image,

            imageSource,

            imageSrcSet,

            imageSizes,

            imageToLoad;



        if ( $imgsToLoad.length ) {



            image = $imgsToLoad.first();

            imageSource = image.attr('data-lazy');

            imageSrcSet = image.attr('data-srcset');

            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');

            imageToLoad = document.createElement('img');



            imageToLoad.onload = function() {



                if (imageSrcSet) {

                    image

                        .attr('srcset', imageSrcSet );



                    if (imageSizes) {

                        image

                            .attr('sizes', imageSizes );

                    }

                }



                image

                    .attr( 'src', imageSource )

                    .removeAttr('data-lazy data-srcset data-sizes')

                    .removeClass('slick-loading');



                if ( _.options.adaptiveHeight === true ) {

                    _.setPosition();

                }



                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);

                _.progressiveLazyLoad();



            };



            imageToLoad.onerror = function() {



                if ( tryCount < 3 ) {



                    /**

                     * try to load the image 3 times,

                     * leave a slight delay so we don't get

                     * servers blocking the request.

                     */

                    setTimeout( function() {

                        _.progressiveLazyLoad( tryCount + 1 );

                    }, 500 );



                } else {



                    image

                        .removeAttr( 'data-lazy' )

                        .removeClass( 'slick-loading' )

                        .addClass( 'slick-lazyload-error' );



                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);



                    _.progressiveLazyLoad();



                }



            };



            imageToLoad.src = imageSource;



        } else {



            _.$slider.trigger('allImagesLoaded', [ _ ]);



        }



    };



    Slick.prototype.refresh = function( initializing ) {



        var _ = this, currentSlide, lastVisibleIndex;



        lastVisibleIndex = _.slideCount - _.options.slidesToShow;



        // in non-infinite sliders, we don't want to go past the

        // last visible index.

        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {

            _.currentSlide = lastVisibleIndex;

        }



        // if less slides than to show, go to start.

        if ( _.slideCount <= _.options.slidesToShow ) {

            _.currentSlide = 0;



        }



        currentSlide = _.currentSlide;



        _.destroy(true);



        $.extend(_, _.initials, { currentSlide: currentSlide });



        _.init();



        if( !initializing ) {



            _.changeSlide({

                data: {

                    message: 'index',

                    index: currentSlide

                }

            }, false);



        }



    };



    Slick.prototype.registerBreakpoints = function() {



        var _ = this, breakpoint, currentBreakpoint, l,

            responsiveSettings = _.options.responsive || null;



        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {



            _.respondTo = _.options.respondTo || 'window';



            for ( breakpoint in responsiveSettings ) {



                l = _.breakpoints.length-1;



                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;



                    // loop through the breakpoints and cut out any existing

                    // ones with the same breakpoint number, we don't want dupes.

                    while( l >= 0 ) {

                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {

                            _.breakpoints.splice(l,1);

                        }

                        l--;

                    }



                    _.breakpoints.push(currentBreakpoint);

                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;



                }



            }



            _.breakpoints.sort(function(a, b) {

                return ( _.options.mobileFirst ) ? a-b : b-a;

            });



        }



    };



    Slick.prototype.reinit = function() {



        var _ = this;



        _.$slides =

            _.$slideTrack

                .children(_.options.slide)

                .addClass('slick-slide');



        _.slideCount = _.$slides.length;



        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {

            _.currentSlide = _.currentSlide - _.options.slidesToScroll;

        }



        if (_.slideCount <= _.options.slidesToShow) {

            _.currentSlide = 0;

        }



        _.registerBreakpoints();



        _.setProps();

        _.setupInfinite();

        _.buildArrows();

        _.updateArrows();

        _.initArrowEvents();

        _.buildDots();

        _.updateDots();

        _.initDotEvents();

        _.cleanUpSlideEvents();

        _.initSlideEvents();



        _.checkResponsive(false, true);



        if (_.options.focusOnSelect === true) {

            $(_.$slideTrack).children().on('click.slick', _.selectHandler);

        }



        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);



        _.setPosition();

        _.focusHandler();



        _.paused = !_.options.autoplay;

        _.autoPlay();



        _.$slider.trigger('reInit', [_]);



    };



    Slick.prototype.resize = function() {



        var _ = this;



        if ($(window).width() !== _.windowWidth) {

            clearTimeout(_.windowDelay);

            _.windowDelay = window.setTimeout(function() {

                _.windowWidth = $(window).width();

                _.checkResponsive();

                if( !_.unslicked ) { _.setPosition(); }

            }, 50);

        }

    };



    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {



        var _ = this;



        if (typeof(index) === 'boolean') {

            removeBefore = index;

            index = removeBefore === true ? 0 : _.slideCount - 1;

        } else {

            index = removeBefore === true ? --index : index;

        }



        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {

            return false;

        }



        _.unload();



        if (removeAll === true) {

            _.$slideTrack.children().remove();

        } else {

            _.$slideTrack.children(this.options.slide).eq(index).remove();

        }



        _.$slides = _.$slideTrack.children(this.options.slide);



        _.$slideTrack.children(this.options.slide).detach();



        _.$slideTrack.append(_.$slides);



        _.$slidesCache = _.$slides;



        _.reinit();



    };



    Slick.prototype.setCSS = function(position) {



        var _ = this,

            positionProps = {},

            x, y;



        if (_.options.rtl === true) {

            position = -position;

        }

        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';

        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';



        positionProps[_.positionProp] = position;



        if (_.transformsEnabled === false) {

            _.$slideTrack.css(positionProps);

        } else {

            positionProps = {};

            if (_.cssTransitions === false) {

                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

                _.$slideTrack.css(positionProps);

            } else {

                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

                _.$slideTrack.css(positionProps);

            }

        }



    };



    Slick.prototype.setDimensions = function() {



        var _ = this;



        if (_.options.vertical === false) {

            if (_.options.centerMode === true) {

                _.$list.css({

                    padding: ('0px ' + _.options.centerPadding)

                });

            }

        } else {

            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

            if (_.options.centerMode === true) {

                _.$list.css({

                    padding: (_.options.centerPadding + ' 0px')

                });

            }

        }



        _.listWidth = _.$list.width();

        _.listHeight = _.$list.height();





        if (_.options.vertical === false && _.options.variableWidth === false) {

            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));



        } else if (_.options.variableWidth === true) {

            _.$slideTrack.width(5000 * _.slideCount);

        } else {

            _.slideWidth = Math.ceil(_.listWidth);

            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));

        }



        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);



    };



    Slick.prototype.setFade = function() {



        var _ = this,

            targetLeft;



        _.$slides.each(function(index, element) {

            targetLeft = (_.slideWidth * index) * -1;

            if (_.options.rtl === true) {

                $(element).css({

                    position: 'relative',

                    right: targetLeft,

                    top: 0,

                    zIndex: _.options.zIndex - 2,

                    opacity: 0

                });

            } else {

                $(element).css({

                    position: 'relative',

                    left: targetLeft,

                    top: 0,

                    zIndex: _.options.zIndex - 2,

                    opacity: 0

                });

            }

        });



        _.$slides.eq(_.currentSlide).css({

            zIndex: _.options.zIndex - 1,

            opacity: 1

        });



    };



    Slick.prototype.setHeight = function() {



        var _ = this;



        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {

            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

            _.$list.css('height', targetHeight);

        }



    };



    Slick.prototype.setOption =

    Slick.prototype.slickSetOption = function() {



        /**

         * accepts arguments in format of:

         *

         *  - for changing a single option's value:

         *     .slick("setOption", option, value, refresh )

         *

         *  - for changing a set of responsive options:

         *     .slick("setOption", 'responsive', [{}, ...], refresh )

         *

         *  - for updating multiple values at once (not responsive)

         *     .slick("setOption", { 'option': value, ... }, refresh )

         */



        var _ = this, l, item, option, value, refresh = false, type;



        if( $.type( arguments[0] ) === 'object' ) {



            option =  arguments[0];

            refresh = arguments[1];

            type = 'multiple';



        } else if ( $.type( arguments[0] ) === 'string' ) {



            option =  arguments[0];

            value = arguments[1];

            refresh = arguments[2];



            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {



                type = 'responsive';



            } else if ( typeof arguments[1] !== 'undefined' ) {



                type = 'single';



            }



        }



        if ( type === 'single' ) {



            _.options[option] = value;





        } else if ( type === 'multiple' ) {



            $.each( option , function( opt, val ) {



                _.options[opt] = val;



            });





        } else if ( type === 'responsive' ) {



            for ( item in value ) {



                if( $.type( _.options.responsive ) !== 'array' ) {



                    _.options.responsive = [ value[item] ];



                } else {



                    l = _.options.responsive.length-1;



                    // loop through the responsive object and splice out duplicates.

                    while( l >= 0 ) {



                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {



                            _.options.responsive.splice(l,1);



                        }



                        l--;



                    }



                    _.options.responsive.push( value[item] );



                }



            }



        }



        if ( refresh ) {



            _.unload();

            _.reinit();



        }



    };



    Slick.prototype.setPosition = function() {



        var _ = this;



        _.setDimensions();



        _.setHeight();



        if (_.options.fade === false) {

            _.setCSS(_.getLeft(_.currentSlide));

        } else {

            _.setFade();

        }



        _.$slider.trigger('setPosition', [_]);



    };



    Slick.prototype.setProps = function() {



        var _ = this,

            bodyStyle = document.body.style;



        _.positionProp = _.options.vertical === true ? 'top' : 'left';



        if (_.positionProp === 'top') {

            _.$slider.addClass('slick-vertical');

        } else {

            _.$slider.removeClass('slick-vertical');

        }



        if (bodyStyle.WebkitTransition !== undefined ||

            bodyStyle.MozTransition !== undefined ||

            bodyStyle.msTransition !== undefined) {

            if (_.options.useCSS === true) {

                _.cssTransitions = true;

            }

        }



        if ( _.options.fade ) {

            if ( typeof _.options.zIndex === 'number' ) {

                if( _.options.zIndex < 3 ) {

                    _.options.zIndex = 3;

                }

            } else {

                _.options.zIndex = _.defaults.zIndex;

            }

        }



        if (bodyStyle.OTransform !== undefined) {

            _.animType = 'OTransform';

            _.transformType = '-o-transform';

            _.transitionType = 'OTransition';

            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;

        }

        if (bodyStyle.MozTransform !== undefined) {

            _.animType = 'MozTransform';

            _.transformType = '-moz-transform';

            _.transitionType = 'MozTransition';

            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;

        }

        if (bodyStyle.webkitTransform !== undefined) {

            _.animType = 'webkitTransform';

            _.transformType = '-webkit-transform';

            _.transitionType = 'webkitTransition';

            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;

        }

        if (bodyStyle.msTransform !== undefined) {

            _.animType = 'msTransform';

            _.transformType = '-ms-transform';

            _.transitionType = 'msTransition';

            if (bodyStyle.msTransform === undefined) _.animType = false;

        }

        if (bodyStyle.transform !== undefined && _.animType !== false) {

            _.animType = 'transform';

            _.transformType = 'transform';

            _.transitionType = 'transition';

        }

        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);

    };





    Slick.prototype.setSlideClasses = function(index) {



        var _ = this,

            centerOffset, allSlides, indexOffset, remainder;



        allSlides = _.$slider

            .find('.slick-slide')

            .removeClass('slick-active slick-center slick-current')

            .attr('aria-hidden', 'true');



        _.$slides

            .eq(index)

            .addClass('slick-current');



        if (_.options.centerMode === true) {



            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;



            centerOffset = Math.floor(_.options.slidesToShow / 2);



            if (_.options.infinite === true) {



                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides

                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)

                        .addClass('slick-active')

                        .attr('aria-hidden', 'false');



                } else {



                    indexOffset = _.options.slidesToShow + index;

                    allSlides

                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)

                        .addClass('slick-active')

                        .attr('aria-hidden', 'false');



                }



                if (index === 0) {



                    allSlides

                        .eq(allSlides.length - 1 - _.options.slidesToShow)

                        .addClass('slick-center');



                } else if (index === _.slideCount - 1) {



                    allSlides

                        .eq(_.options.slidesToShow)

                        .addClass('slick-center');



                }



            }



            _.$slides

                .eq(index)

                .addClass('slick-center');



        } else {



            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {



                _.$slides

                    .slice(index, index + _.options.slidesToShow)

                    .addClass('slick-active')

                    .attr('aria-hidden', 'false');



            } else if (allSlides.length <= _.options.slidesToShow) {



                allSlides

                    .addClass('slick-active')

                    .attr('aria-hidden', 'false');



            } else {



                remainder = _.slideCount % _.options.slidesToShow;

                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;



                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {



                    allSlides

                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)

                        .addClass('slick-active')

                        .attr('aria-hidden', 'false');



                } else {



                    allSlides

                        .slice(indexOffset, indexOffset + _.options.slidesToShow)

                        .addClass('slick-active')

                        .attr('aria-hidden', 'false');



                }



            }



        }



        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {

            _.lazyLoad();

        }

    };



    Slick.prototype.setupInfinite = function() {



        var _ = this,

            i, slideIndex, infiniteCount;



        if (_.options.fade === true) {

            _.options.centerMode = false;

        }



        if (_.options.infinite === true && _.options.fade === false) {



            slideIndex = null;



            if (_.slideCount > _.options.slidesToShow) {



                if (_.options.centerMode === true) {

                    infiniteCount = _.options.slidesToShow + 1;

                } else {

                    infiniteCount = _.options.slidesToShow;

                }



                for (i = _.slideCount; i > (_.slideCount -

                        infiniteCount); i -= 1) {

                    slideIndex = i - 1;

                    $(_.$slides[slideIndex]).clone(true).attr('id', '')

                        .attr('data-slick-index', slideIndex - _.slideCount)

                        .prependTo(_.$slideTrack).addClass('slick-cloned');

                }

                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {

                    slideIndex = i;

                    $(_.$slides[slideIndex]).clone(true).attr('id', '')

                        .attr('data-slick-index', slideIndex + _.slideCount)

                        .appendTo(_.$slideTrack).addClass('slick-cloned');

                }

                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {

                    $(this).attr('id', '');

                });



            }



        }



    };



    Slick.prototype.interrupt = function( toggle ) {



        var _ = this;



        if( !toggle ) {

            _.autoPlay();

        }

        _.interrupted = toggle;



    };



    Slick.prototype.selectHandler = function(event) {



        var _ = this;



        var targetElement =

            $(event.target).is('.slick-slide') ?

                $(event.target) :

                $(event.target).parents('.slick-slide');



        var index = parseInt(targetElement.attr('data-slick-index'));



        if (!index) index = 0;



        if (_.slideCount <= _.options.slidesToShow) {



            _.slideHandler(index, false, true);

            return;



        }



        _.slideHandler(index);



    };



    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {



        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,

            _ = this, navTarget;



        sync = sync || false;



        if (_.animating === true && _.options.waitForAnimate === true) {

            return;

        }



        if (_.options.fade === true && _.currentSlide === index) {

            return;

        }



        if (sync === false) {

            _.asNavFor(index);

        }



        targetSlide = index;

        targetLeft = _.getLeft(targetSlide);

        slideLeft = _.getLeft(_.currentSlide);



        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;



        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {

            if (_.options.fade === false) {

                targetSlide = _.currentSlide;

                if (dontAnimate !== true) {

                    _.animateSlide(slideLeft, function() {

                        _.postSlide(targetSlide);

                    });

                } else {

                    _.postSlide(targetSlide);

                }

            }

            return;

        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {

            if (_.options.fade === false) {

                targetSlide = _.currentSlide;

                if (dontAnimate !== true) {

                    _.animateSlide(slideLeft, function() {

                        _.postSlide(targetSlide);

                    });

                } else {

                    _.postSlide(targetSlide);

                }

            }

            return;

        }



        if ( _.options.autoplay ) {

            clearInterval(_.autoPlayTimer);

        }



        if (targetSlide < 0) {

            if (_.slideCount % _.options.slidesToScroll !== 0) {

                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);

            } else {

                animSlide = _.slideCount + targetSlide;

            }

        } else if (targetSlide >= _.slideCount) {

            if (_.slideCount % _.options.slidesToScroll !== 0) {

                animSlide = 0;

            } else {

                animSlide = targetSlide - _.slideCount;

            }

        } else {

            animSlide = targetSlide;

        }



        _.animating = true;



        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);



        oldSlide = _.currentSlide;

        _.currentSlide = animSlide;



        _.setSlideClasses(_.currentSlide);



        if ( _.options.asNavFor ) {



            navTarget = _.getNavTarget();

            navTarget = navTarget.slick('getSlick');



            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {

                navTarget.setSlideClasses(_.currentSlide);

            }



        }



        _.updateDots();

        _.updateArrows();



        if (_.options.fade === true) {

            if (dontAnimate !== true) {



                _.fadeSlideOut(oldSlide);



                _.fadeSlide(animSlide, function() {

                    _.postSlide(animSlide);

                });



            } else {

                _.postSlide(animSlide);

            }

            _.animateHeight();

            return;

        }



        if (dontAnimate !== true) {

            _.animateSlide(targetLeft, function() {

                _.postSlide(animSlide);

            });

        } else {

            _.postSlide(animSlide);

        }



    };



    Slick.prototype.startLoad = function() {



        var _ = this;



        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {



            _.$prevArrow.hide();

            _.$nextArrow.hide();



        }



        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {



            _.$dots.hide();



        }



        _.$slider.addClass('slick-loading');



    };



    Slick.prototype.swipeDirection = function() {



        var xDist, yDist, r, swipeAngle, _ = this;



        xDist = _.touchObject.startX - _.touchObject.curX;

        yDist = _.touchObject.startY - _.touchObject.curY;

        r = Math.atan2(yDist, xDist);



        swipeAngle = Math.round(r * 180 / Math.PI);

        if (swipeAngle < 0) {

            swipeAngle = 360 - Math.abs(swipeAngle);

        }



        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {

            return (_.options.rtl === false ? 'left' : 'right');

        }

        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {

            return (_.options.rtl === false ? 'left' : 'right');

        }

        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {

            return (_.options.rtl === false ? 'right' : 'left');

        }

        if (_.options.verticalSwiping === true) {

            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {

                return 'down';

            } else {

                return 'up';

            }

        }



        return 'vertical';



    };



    Slick.prototype.swipeEnd = function(event) {



        var _ = this,

            slideCount,

            direction;



        _.dragging = false;

        _.swiping = false;



        if (_.scrolling) {

            _.scrolling = false;

            return false;

        }



        _.interrupted = false;

        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;



        if ( _.touchObject.curX === undefined ) {

            return false;

        }



        if ( _.touchObject.edgeHit === true ) {

            _.$slider.trigger('edge', [_, _.swipeDirection() ]);

        }



        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {



            direction = _.swipeDirection();



            switch ( direction ) {



                case 'left':

                case 'down':



                    slideCount =

                        _.options.swipeToSlide ?

                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :

                            _.currentSlide + _.getSlideCount();



                    _.currentDirection = 0;



                    break;



                case 'right':

                case 'up':



                    slideCount =

                        _.options.swipeToSlide ?

                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :

                            _.currentSlide - _.getSlideCount();



                    _.currentDirection = 1;



                    break;



                default:





            }



            if( direction != 'vertical' ) {



                _.slideHandler( slideCount );

                _.touchObject = {};

                _.$slider.trigger('swipe', [_, direction ]);



            }



        } else {



            if ( _.touchObject.startX !== _.touchObject.curX ) {



                _.slideHandler( _.currentSlide );

                _.touchObject = {};



            }



        }



    };



    Slick.prototype.swipeHandler = function(event) {



        var _ = this;



        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {

            return;

        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {

            return;

        }



        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?

            event.originalEvent.touches.length : 1;



        _.touchObject.minSwipe = _.listWidth / _.options

            .touchThreshold;



        if (_.options.verticalSwiping === true) {

            _.touchObject.minSwipe = _.listHeight / _.options

                .touchThreshold;

        }



        switch (event.data.action) {



            case 'start':

                _.swipeStart(event);

                break;



            case 'move':

                _.swipeMove(event);

                break;



            case 'end':

                _.swipeEnd(event);

                break;



        }



    };



    Slick.prototype.swipeMove = function(event) {



        var _ = this,

            edgeWasHit = false,

            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;



        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;



        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {

            return false;

        }



        curLeft = _.getLeft(_.currentSlide);



        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;

        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;



        _.touchObject.swipeLength = Math.round(Math.sqrt(

            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));



        verticalSwipeLength = Math.round(Math.sqrt(

            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));



        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {

            _.scrolling = true;

            return false;

        }



        if (_.options.verticalSwiping === true) {

            _.touchObject.swipeLength = verticalSwipeLength;

        }



        swipeDirection = _.swipeDirection();



        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {

            _.swiping = true;

            event.preventDefault();

        }



        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

        if (_.options.verticalSwiping === true) {

            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;

        }





        swipeLength = _.touchObject.swipeLength;



        _.touchObject.edgeHit = false;



        if (_.options.infinite === false) {

            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {

                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;

                _.touchObject.edgeHit = true;

            }

        }



        if (_.options.vertical === false) {

            _.swipeLeft = curLeft + swipeLength * positionOffset;

        } else {

            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;

        }

        if (_.options.verticalSwiping === true) {

            _.swipeLeft = curLeft + swipeLength * positionOffset;

        }



        if (_.options.fade === true || _.options.touchMove === false) {

            return false;

        }



        if (_.animating === true) {

            _.swipeLeft = null;

            return false;

        }



        _.setCSS(_.swipeLeft);



    };



    Slick.prototype.swipeStart = function(event) {



        var _ = this,

            touches;



        _.interrupted = true;



        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {

            _.touchObject = {};

            return false;

        }



        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {

            touches = event.originalEvent.touches[0];

        }



        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;

        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;



        _.dragging = true;



    };



    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {



        var _ = this;



        if (_.$slidesCache !== null) {



            _.unload();



            _.$slideTrack.children(this.options.slide).detach();



            _.$slidesCache.appendTo(_.$slideTrack);



            _.reinit();



        }



    };



    Slick.prototype.unload = function() {



        var _ = this;



        $('.slick-cloned', _.$slider).remove();



        if (_.$dots) {

            _.$dots.remove();

        }



        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {

            _.$prevArrow.remove();

        }



        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {

            _.$nextArrow.remove();

        }



        _.$slides

            .removeClass('slick-slide slick-active slick-visible slick-current')

            .attr('aria-hidden', 'true')

            .css('width', '');



    };



    Slick.prototype.unslick = function(fromBreakpoint) {



        var _ = this;

        _.$slider.trigger('unslick', [_, fromBreakpoint]);

        _.destroy();



    };



    Slick.prototype.updateArrows = function() {



        var _ = this,

            centerOffset;



        centerOffset = Math.floor(_.options.slidesToShow / 2);



        if ( _.options.arrows === true &&

            _.slideCount > _.options.slidesToShow &&

            !_.options.infinite ) {



            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');



            if (_.currentSlide === 0) {



                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');



            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {



                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');



            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {



                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');



            }



        }



    };



    Slick.prototype.updateDots = function() {



        var _ = this;



        if (_.$dots !== null) {



            _.$dots

                .find('li')

                    .removeClass('slick-active')

                    .end();



            _.$dots

                .find('li')

                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))

                .addClass('slick-active');



        }



    };



    Slick.prototype.visibility = function() {



        var _ = this;



        if ( _.options.autoplay ) {



            if ( document[_.hidden] ) {



                _.interrupted = true;



            } else {



                _.interrupted = false;



            }



        }



    };



    $.fn.slick = function() {

        var _ = this,

            opt = arguments[0],

            args = Array.prototype.slice.call(arguments, 1),

            l = _.length,

            i,

            ret;

        for (i = 0; i < l; i++) {

            if (typeof opt == 'object' || typeof opt == 'undefined')

                _[i].slick = new Slick(_[i], opt);

            else

                ret = _[i].slick[opt].apply(_[i].slick, args);

            if (typeof ret != 'undefined') return ret;

        }

        return _;

    };



}));



// ==================================================

// fancyBox v3.1.20

//

// Licensed GPLv3 for open source use

// or fancyBox Commercial License for commercial use

//

// http://fancyapps.com/fancybox/

// Copyright 2017 fancyApps

//

// ==================================================

!function(t,e,n,o){"use strict";function i(t){var e=t.currentTarget,o=t.data?t.data.options:{},i=t.data?t.data.items:[],a=n(e).attr("data-fancybox")||"",s=0;t.preventDefault(),t.stopPropagation(),a?(i=i.length?i.filter('[data-fancybox="'+a+'"]'):n('[data-fancybox="'+a+'"]'),s=i.index(e),s<0&&(s=0)):i=[e],n.fancybox.open(i,o,s)}if(n){if(n.fn.fancybox)return void n.error("fancyBox already initialized");var a={loop:!1,margin:[44,0],gutter:50,keyboard:!0,arrows:!0,infobar:!1,toolbar:!0,buttons:["slideShow","fullScreen","thumbs","close"],idleTime:4,smallBtn:"auto",protect:!1,modal:!1,image:{preload:"auto"},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}<p></div>',btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',smallBtn:'<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'},parentEl:"body",autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:4e3},thumbs:{autoStart:!1,hideOnClose:!0},onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails"},de:{CLOSE:"Schliessen",NEXT:"Weiter",PREV:"Zurück",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},u=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),d=function(){var t,n=e.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(n.style[t]!==o)return i[t]}(),f=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,o,i){var s=this;s.opts=n.extend(!0,{index:i},a,o||{}),o&&n.isArray(o.buttons)&&(s.opts.buttons=o.buttons),s.id=s.opts.id||++c,s.group=[],s.currIndex=parseInt(s.opts.index,10)||0,s.prevIndex=null,s.prevPos=null,s.currPos=0,s.firstRun=null,s.createGroup(t),s.group.length&&(s.$lastFocus=n(e.activeElement).blur(),s.slides={},s.init(t))};n.extend(h.prototype,{init:function(){var t,e,o,i=this,a=i.group[i.currIndex].opts;i.scrollTop=r.scrollTop(),i.scrollLeft=r.scrollLeft(),n.fancybox.getInstance()||n.fancybox.isMobile||"hidden"===n("body").css("overflow")||(t=n("body").width(),n("html").addClass("fancybox-enabled"),t=n("body").width()-t,t>1&&n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: '+t+"px; }</style>")),o="",n.each(a.buttons,function(t,e){o+=a.btnTpl[e]||""}),e=n(i.translate(i,a.baseTpl.replace("{{BUTTONS}}",o))).addClass("fancybox-is-hidden").attr("id","fancybox-container-"+i.id).addClass(a.baseClass).data("FancyBox",i).prependTo(a.parentEl),i.$refs={container:e},["bg","inner","infobar","toolbar","stage","caption"].forEach(function(t){i.$refs[t]=e.find(".fancybox-"+t)}),(!a.arrows||i.group.length<2)&&e.find(".fancybox-navigation").remove(),a.infobar||i.$refs.infobar.remove(),a.toolbar||i.$refs.toolbar.remove(),i.trigger("onInit"),i.activate(),i.jumpTo(i.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang];return e.replace(/\{\{(\w+)\}\}/g,function(t,e){var i=n[e];return i===o?t:i})},createGroup:function(t){var e=this,i=n.makeArray(t);n.each(i,function(t,i){var a,s,r,c,l={},u={},d=[];n.isPlainObject(i)?(l=i,u=i.opts||i):"object"===n.type(i)&&n(i).length?(a=n(i),d=a.data(),u="options"in d?d.options:{},u="object"===n.type(u)?u:{},l.src="src"in d?d.src:u.src||a.attr("href"),["width","height","thumb","type","filter"].forEach(function(t){t in d&&(u[t]=d[t])}),"srcset"in d&&(u.image={srcset:d.srcset}),u.$orig=a,l.type||l.src||(l.type="inline",l.src=i)):l={type:"html",src:i+""},l.opts=n.extend(!0,{},e.opts,u),n.fancybox.isMobile&&(l.opts=n.extend(!0,{},l.opts,l.opts.mobile)),s=l.type||l.opts.type,r=l.src||"",!s&&r&&(r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?s="image":r.match(/\.(pdf)((\?|#).*)?$/i)?s="pdf":"#"===r.charAt(0)&&(s="inline")),l.type=s,l.index=e.group.length,l.opts.$orig&&!l.opts.$orig.length&&delete l.opts.$orig,!l.opts.$thumb&&l.opts.$orig&&(l.opts.$thumb=l.opts.$orig.find("img:first")),l.opts.$thumb&&!l.opts.$thumb.length&&delete l.opts.$thumb,"function"===n.type(l.opts.caption)?l.opts.caption=l.opts.caption.apply(i,[e,l]):"caption"in d&&(l.opts.caption=d.caption),l.opts.caption=l.opts.caption===o?"":l.opts.caption+"","ajax"===s&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),"auto"==l.opts.smallBtn&&(n.inArray(s,["html","inline","ajax"])>-1?(l.opts.toolbar=!1,l.opts.smallBtn=!0):l.opts.smallBtn=!1),"pdf"===s&&(l.type="iframe",l.opts.iframe.preload=!1),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),e.group.push(l)})},addEvents:function(){var o=this;o.removeEvents(),o.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),o.close(t)}).on("click.fb-prev touchend.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),o.previous()}).on("click.fb-next touchend.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),o.next()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?u(function(){o.update()}):(o.$refs.stage.hide(),setTimeout(function(){o.$refs.stage.show(),o.update()},500))}),r.on("focusin.fb",function(t){var i=n.fancybox?n.fancybox.getInstance():null;i.isClosing||!i.current||!i.current.opts.trapFocus||n(t.target).hasClass("fancybox-container")||n(t.target).is(e)||i&&"fixed"!==n(t.target).css("position")&&!i.$refs.container.has(t.target).length&&(t.stopPropagation(),i.focus(),s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft))}),r.on("keydown.fb",function(t){var e=o.current,i=t.keyCode||t.which;if(e&&e.opts.keyboard&&!n(t.target).is("input")&&!n(t.target).is("textarea"))return 8===i||27===i?(t.preventDefault(),void o.close(t)):37===i||38===i?(t.preventDefault(),void o.previous()):39===i||40===i?(t.preventDefault(),void o.next()):void o.trigger("afterKeydown",t,i)}),o.group[o.currIndex].opts.idleTime&&(o.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(){o.idleSecondsCounter=0,o.isIdle&&o.showControls(),o.isIdle=!1}),o.idleInterval=t.setInterval(function(){o.idleSecondsCounter++,o.idleSecondsCounter>=o.group[o.currIndex].opts.idleTime&&(o.isIdle=!0,o.idleSecondsCounter=0,o.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("focusin.fb keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e,i){var a,s,r,c,l,u,d,h=this,p=h.group.length;if(!(h.isSliding||h.isClosing||h.isAnimating&&h.firstRun)){if(t=parseInt(t,10),s=h.current?h.current.opts.loop:h.opts.loop,!s&&(t<0||t>=p))return!1;if(a=h.firstRun=null===h.firstRun,!(p<2&&!a&&h.isSliding)){if(c=h.current,h.prevIndex=h.currIndex,h.prevPos=h.currPos,r=h.createSlide(t),p>1&&((s||r.index>0)&&h.createSlide(t-1),(s||r.index<p-1)&&h.createSlide(t+1)),h.current=r,h.currIndex=r.index,h.currPos=r.pos,h.trigger("beforeShow",a),h.updateControls(),u=n.fancybox.getTranslate(r.$slide),r.isMoved=(0!==u.left||0!==u.top)&&!r.$slide.hasClass("fancybox-animated"),r.forcedDuration=o,n.isNumeric(e)?r.forcedDuration=e:e=r.opts[a?"animationDuration":"transitionDuration"],e=parseInt(e,10),a)return r.opts.animationEffect&&e&&h.$refs.container.css("transition-duration",e+"ms"),h.$refs.container.removeClass("fancybox-is-hidden"),f(h.$refs.container),h.$refs.container.addClass("fancybox-is-open"),r.$slide.addClass("fancybox-slide--current"),h.loadSlide(r),void h.preload();n.each(h.slides,function(t,e){n.fancybox.stop(e.$slide)}),r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"),r.isMoved?(l=Math.round(r.$slide.width()),n.each(h.slides,function(t,o){var i=o.pos-r.pos;n.fancybox.animate(o.$slide,{top:0,left:i*l+i*o.opts.gutter},e,function(){o.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===h.currPos&&(r.isMoved=!1,h.complete())})})):h.$refs.stage.children().removeAttr("style"),r.isLoaded?h.revealContent(r):h.loadSlide(r),h.preload(),c.pos!==r.pos&&(d="fancybox-slide--"+(c.pos>r.pos?"next":"previous"),c.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"),c.isComplete=!1,e&&(r.isMoved||r.opts.transitionEffect)&&(r.isMoved?c.$slide.addClass(d):(d="fancybox-animated "+d+" fancybox-fx-"+r.opts.transitionEffect,n.fancybox.animate(c.$slide,d,e,function(){c.$slide.removeClass(d).removeAttr("style")}))))}}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,i){var a,s,r,c,l,u=this,d=u.current,f=d.$content,h=parseInt(d.$slide.width(),10),p=parseInt(d.$slide.height(),10),g=d.width,b=d.height;"image"!=d.type||d.hasError||!f||u.isAnimating||(n.fancybox.stop(f),u.isAnimating=!0,t=t===o?.5*h:t,e=e===o?.5*p:e,a=n.fancybox.getTranslate(f),c=g/a.width,l=b/a.height,s=.5*h-.5*g,r=.5*p-.5*b,g>h&&(s=a.left*c-(t*c-t),s>0&&(s=0),s<h-g&&(s=h-g)),b>p&&(r=a.top*l-(e*l-e),r>0&&(r=0),r<p-b&&(r=p-b)),u.updateCursor(g,b),n.fancybox.animate(f,{top:r,left:s,scaleX:c,scaleY:l},i||330,function(){u.isAnimating=!1}),u.SlideShow&&u.SlideShow.isActive&&u.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;"image"!=i.type||i.hasError||!a||o.isAnimating||(n.fancybox.stop(a),o.isAnimating=!0,e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||330,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,r,c=this,l=t.$content,u=t.width,d=t.height,f=t.opts.margin;return!(!l||!l.length||!u&&!d)&&("number"===n.type(f)&&(f=[f,f]),2==f.length&&(f=[f[0],f[1],f[0],f[1]]),s.width()<800&&(f=[0,0,0,0]),e=parseInt(c.$refs.stage.width(),10)-(f[1]+f[3]),o=parseInt(c.$refs.stage.height(),10)-(f[0]+f[2]),i=Math.min(1,e/u,o/d),a=Math.floor(i*u),r=Math.floor(i*d),{top:Math.floor(.5*(o-r))+f[0],left:Math.floor(.5*(e-a))+f[3],width:a,height:r})},update:function(){var t=this;n.each(t.slides,function(e,n){t.updateSlide(n)})},updateSlide:function(t){var e=this,o=t.$content;o&&(t.width||t.height)&&(n.fancybox.stop(o),n.fancybox.setTranslate(o,e.getFitPos(t)),t.pos===e.currPos&&e.updateCursor()),t.$slide.trigger("refresh"),e.trigger("onUpdate",t)},updateCursor:function(t,e){var n,i=this,a=i.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");i.current&&!i.isClosing&&(i.isZoomable()?(a.addClass("fancybox-is-zoomable"),n=t!==o&&e!==o?t<i.current.width&&e<i.current.height:i.isScaledDown(),n?a.addClass("fancybox-can-zoomIn"):i.current.opts.touch?a.addClass("fancybox-can-drag"):a.addClass("fancybox-can-zoomOut")):i.current.opts.touch&&a.addClass("fancybox-can-drag"))},isZoomable:function(){var t,e=this,o=e.current;if(o&&!e.isClosing)return!!("image"===o.type&&o.isLoaded&&!o.hasError&&("zoom"===o.opts.clickContent||n.isFunction(o.opts.clickContent)&&"zoom"===o.opts.clickContent(o))&&(t=e.getFitPos(o),o.width>t.width||o.height>t.height))},isScaledDown:function(){var t=this,e=t.current,o=e.$content,i=!1;return o&&(i=n.fancybox.getTranslate(o),i=i.width<e.width||i.height<e.height),i},canPan:function(){var t=this,e=t.current,n=e.$content,o=!1;return n&&(o=t.getFitPos(e),o=Math.abs(n.width()-o.width)>1||Math.abs(n.height()-o.height)>1),o},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){switch(t.isLoading=!0,a.trigger("beforeLoad",t),e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass("fancybox-slide--"+(e||"unknown")).addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(e){var o,i,a,s,r=this,c=e.opts.image.srcset;if(c){a=t.devicePixelRatio||1,s=t.innerWidth*a,i=c.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);return 0===n?e.url=t:void(o&&(e.value=o,e.postfix=t[t.length-1]))}),e}),i.sort(function(t,e){return t.value-e.value});for(var l=0;l<i.length;l++){var u=i[l];if("w"===u.postfix&&u.value>=s||"x"===u.postfix&&u.value>=a){o=u;break}}!o&&i.length&&(o=i[i.length-1]),o&&(e.src=o.url,e.width&&e.height&&"w"==o.postfix&&(e.height=e.width/e.height*o.value,e.width=o.value))}e.$content=n('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide),e.opts.preload!==!1&&e.opts.width&&e.opts.height&&(e.opts.thumb||e.opts.$thumb)?(e.width=e.opts.width,e.height=e.opts.height,e.$ghost=n("<img />").one("error",function(){n(this).remove(),e.$ghost=null,r.setBigImage(e)}).one("load",function(){r.afterLoad(e),r.setBigImage(e)}).addClass("fancybox-image").appendTo(e.$content).attr("src",e.opts.thumb||e.opts.$thumb.attr("src"))):r.setBigImage(e)},setBigImage:function(t){var e=this,o=n("<img />");t.$image=o.one("error",function(){e.setError(t)}).one("load",function(){clearTimeout(t.timouts),t.timouts=null,e.isClosing||(t.width=this.naturalWidth,t.height=this.naturalHeight,t.opts.image.srcset&&o.attr("sizes","100vw").attr("srcset",t.opts.image.srcset),e.hideLoading(t),t.$ghost?t.timouts=setTimeout(function(){t.timouts=null,t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))):e.afterLoad(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),o[0].complete?o.trigger("load"):o[0].error?o.trigger("error"):t.timouts=setTimeout(function(){o[0].complete||t.hasError||e.showLoading(t)},100)},setIframe:function(t){var e,i=this,a=t.opts.iframe,s=t.$slide;t.$content=n('<div class="fancybox-content'+(a.preload?" fancybox-is-hidden":"")+'"></div>').css(a.css).appendTo(s),e=n(a.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(a.attr).appendTo(t.$content),a.preload?(i.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),i.afterLoad(t)}),s.on("refresh.fb",function(){var n,i,s,r,c,l=t.$content;if(1===e[0].isReady){try{n=e.contents(),i=n.find("body")}catch(t){}i&&i.length&&(a.css.width===o||a.css.height===o)&&(s=e[0].contentWindow.document.documentElement.scrollWidth,r=Math.ceil(i.outerWidth(!0)+(l.width()-s)),c=Math.ceil(i.outerHeight(!0)),l.css({width:a.css.width===o?r+(l.outerWidth()-l.innerWidth()):a.css.width,height:a.css.height===o?c+(l.outerHeight()-l.innerHeight()):a.css.height})),l.removeClass("fancybox-is-hidden")}})):this.afterLoad(t),e.attr("src",t.src),t.opts.smallBtn===!0&&t.$content.prepend(i.translate(t,t.opts.btnTpl.smallBtn)),s.one("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank")}catch(t){}n(this).empty(),t.isLoaded=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$slide.empty(),l(e)&&e.parent().length?(e.parent(".fancybox-slide--inline").trigger("onReset"),t.$placeholder=n("<div></div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents(),3===e[0].nodeType&&(e=n("<div>").html(e))),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){t.$placeholder&&(t.$placeholder.after(e.hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1)}),t.$content=n(e).appendTo(t.$slide),t.opts.smallBtn&&!t.$smallBtn&&(t.$smallBtn=n(o.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),this.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.removeClass("fancybox-slide--"+t.type),this.setContent(t,this.translate(t,t.opts.errorTpl))},showLoading:function(t){var e=this;t=t||e.current,t&&!t.$spinner&&(t.$spinner=n(e.opts.spinnerTpl).appendTo(t.$slide))},hideLoading:function(t){var e=this;t=t||e.current,t&&t.$spinner&&(t.$spinner.remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.revealContent(t))},revealContent:function(t){var e,i,a,s,r,c=this,l=t.$slide,u=!1;return e=t.opts[c.firstRun?"animationEffect":"transitionEffect"],a=t.opts[c.firstRun?"animationDuration":"transitionDuration"],a=parseInt(t.forcedDuration===o?a:t.forcedDuration,10),!t.isMoved&&t.pos===c.currPos&&a||(e=!1),"zoom"!==e||t.pos===c.currPos&&a&&"image"===t.type&&!t.hasError&&(u=c.getThumbPos(t))||(e="fade"),"zoom"===e?(r=c.getFitPos(t),r.scaleX=Math.round(r.width/u.width*100)/100,r.scaleY=Math.round(r.height/u.height*100)/100,delete r.width,delete r.height,s=t.opts.zoomOpacity,"auto"==s&&(s=Math.abs(t.width/t.height-u.width/u.height)>.1),s&&(u.opacity=.1,r.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),u),f(t.$content),void n.fancybox.animate(t.$content,r,a,function(){c.complete()})):(c.updateSlide(t),e?(n.fancybox.stop(l),i="fancybox-animated fancybox-slide--"+(t.pos>c.prevPos?"next":"previous")+" fancybox-fx-"+e,l.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(i),t.$content.removeClass("fancybox-is-hidden"),f(l),void n.fancybox.animate(l,"fancybox-slide--current",a,function(e){l.removeClass(i).removeAttr("style"),t.pos===c.currPos&&c.complete()},!0)):(f(l),t.$content.removeClass("fancybox-is-hidden"),void(t.pos===c.currPos&&c.complete())))},getThumbPos:function(o){var i,a=this,s=!1,r=function(e){for(var o,i=e[0],a=i.getBoundingClientRect(),s=[];null!==i.parentElement;)"hidden"!==n(i.parentElement).css("overflow")&&"auto"!==n(i.parentElement).css("overflow")||s.push(i.parentElement.getBoundingClientRect()),i=i.parentElement;return o=s.every(function(t){var e=Math.min(a.right,t.right)-Math.max(a.left,t.left),n=Math.min(a.bottom,t.bottom)-Math.max(a.top,t.top);return e>0&&n>0}),o&&a.bottom>0&&a.right>0&&a.left<n(t).width()&&a.top<n(t).height()},c=o.opts.$thumb,l=c?c.offset():0;return l&&c[0].ownerDocument===e&&r(c)&&(i=a.$refs.stage.offset(),s={top:l.top-i.top+parseFloat(c.css("border-top-width")||0),left:l.left-i.left+parseFloat(c.css("border-left-width")||0),width:c.width(),height:c.height(),scaleX:1,scaleY:1}),s},complete:function(){var t=this,o=t.current,i={};o.isMoved||!o.isLoaded||o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),f(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(t.slides,function(e,o){o.pos>=t.currPos-1&&o.pos<=t.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.unbind().remove())}),t.slides=i,t.updateCursor(),t.trigger("afterShow"),(n(e.activeElement).is("[disabled]")||o.opts.autoFocus&&"image"!=o.type&&"iframe"!==o.type)&&t.focus())},preload:function(){var t,e,n=this;n.group.length<2||(t=n.slides[n.currPos+1],e=n.slides[n.currPos-1],t&&"image"===t.type&&n.loadSlide(t),e&&"image"===e.type&&n.loadSlide(e))},focus:function(){var t,e=this.current;this.isClosing||(t=e&&e.isComplete?e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first"):null,t=t&&t.length?t:this.$refs.container,t.focus())},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.uid!==t.uid&&!e.isClosing&&e.trigger("onDeactivate")}),t.current&&(t.$refs.container.index()>0&&t.$refs.container.prependTo(e.body),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l=this,f=l.current,h=function(){l.cleanUp(t)};return!l.isClosing&&(l.isClosing=!0,l.trigger("beforeClose",t)===!1?(l.isClosing=!1,u(function(){l.update()}),!1):(l.removeEvents(),f.timouts&&clearTimeout(f.timouts),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.off(d).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),f.$slide.siblings().trigger("onReset").remove(),i&&l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"),l.hideLoading(f),l.hideControls(),l.updateCursor(),"zoom"!==o||t!==!0&&a&&i&&"image"===f.type&&!f.hasError&&(c=l.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),r=n.fancybox.getTranslate(a),r.width=r.width*r.scaleX,r.height=r.height*r.scaleY,s=f.opts.zoomOpacity,"auto"==s&&(s=Math.abs(f.width/f.height-c.width/c.height)>.1),s&&(c.opacity=0),r.scaleX=r.width/c.width,r.scaleY=r.height/c.height,r.width=c.width,r.height=c.height,n.fancybox.setTranslate(f.$content,r),n.fancybox.animate(f.$content,c,i,h),!0):(o&&i?t===!0?setTimeout(h,i):n.fancybox.animate(f.$slide.removeClass("fancybox-slide--current"),"fancybox-animated fancybox-slide--previous fancybox-fx-"+o,i,h):h(),!0)))},cleanUp:function(t){var e,o=this;o.current.$slide.trigger("onReset"),o.$refs.container.empty().remove(),o.trigger("afterClose",t),o.$lastFocus&&!o.current.focusBack&&o.$lastFocus.focus(),o.current=null,e=n.fancybox.getInstance(),e?e.activate():(s.scrollTop(o.scrollTop).scrollLeft(o.scrollLeft),n("html").removeClass("fancybox-enabled"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;return s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),o===!1?o:void("afterClose"===t?r.trigger(t+".fb",i):a.$refs.container.trigger(t+".fb",i))},updateControls:function(t){var e=this,o=e.current,i=o.index,a=o.opts,s=a.caption,r=e.$refs.caption;o.$slide.trigger("refresh"),e.$caption=s&&s.length?r.html(s):null,e.isHiddenControls||e.showControls(),n("[data-fancybox-count]").html(e.group.length),n("[data-fancybox-index]").html(i+1),n("[data-fancybox-prev]").prop("disabled",!a.loop&&i<=0),n("[data-fancybox-next]").prop("disabled",!a.loop&&i>=e.group.length-1)},hideControls:function(){this.isHiddenControls=!0,this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.isHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal),t.$caption?n.addClass("fancybox-show-caption "):n.removeClass("fancybox-show-caption")},toggleControls:function(){this.isHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.1.20",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof h&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new h(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),t===!0&&this.close())},destroy:function(){this.close(!0),r.off("click.fb-start")},isMobile:e.createTouch!==o&&/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;if(!t||!t.length)return!1;if(e=t.eq(0).css("transform"),e&&e.indexOf("matrix")!==-1?(e=e.split("(")[1],e=e.split(")")[0],e=e.split(",")):e=[],e.length)e=e.length>10?[e[13],e[12],e[0],e[5]]:[e[5],e[4],e[0],e[3]],e=e.map(parseFloat);else{e=[0,0,1,1];var n=/\.*translate\((.*)px,(.*)px\)/i,o=n.exec(t.eq(0).attr("style"));o&&(e[0]=parseFloat(o[2]),e[1]=parseFloat(o[1]))}return{top:e[0],left:e[1],scaleX:e[2],scaleY:e[3],opacity:parseFloat(t.css("opacity")),width:t.width(),height:t.height()}},setTranslate:function(t,e){var n="",i={};if(t&&e)return e.left===o&&e.top===o||(n=(e.left===o?t.position().left:e.left)+"px, "+(e.top===o?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),e.scaleX!==o&&e.scaleY!==o&&(n=(n.length?n+" ":"")+"scale("+e.scaleX+", "+e.scaleY+")"),n.length&&(i.transform=n),e.opacity!==o&&(i.opacity=e.opacity),e.width!==o&&(i.width=e.width),e.height!==o&&(i.height=e.height),t.css(i)},animate:function(t,e,i,a,s){var r=d||"transitionend";n.isFunction(i)&&(a=i,i=null),n.isPlainObject(e)||t.removeAttr("style"),t.on(r,function(i){(!i||!i.originalEvent||t.is(i.originalEvent.target)&&"z-index"!=i.originalEvent.propertyName)&&(t.off(r),n.isPlainObject(e)?e.scaleX!==o&&e.scaleY!==o&&(t.css("transition-duration","0ms"),e.width=t.width()*e.scaleX,e.height=t.height()*e.scaleY,e.scaleX=1,e.scaleY=1,n.fancybox.setTranslate(t,e)):s!==!0&&t.removeClass(e),n.isFunction(a)&&a(i))}),n.isNumeric(i)&&t.css("transition-duration",i+"ms"),n.isPlainObject(e)?n.fancybox.setTranslate(t,e):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger("transitionend")},i+16))},stop:function(t){clearTimeout(t.data("timer")),t.off(d)}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{items:n(e),options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i)}}(window,document,window.jQuery),function(t){"use strict";var e=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e},n={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"//www.youtube.com/embed/$4",thumb:"//img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1,api:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},metacafe:{matcher:/metacafe.com\/watch\/(\d+)\/(.*)?/,type:"iframe",url:"//www.metacafe.com/embed/$1/?ap=1"},dailymotion:{matcher:/dailymotion.com\/video\/(.*)\/?(.*)/,params:{additionalInfos:0,autoStart:1},type:"iframe",url:"//www.dailymotion.com/embed/video/$1"},vine:{matcher:/vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,type:"iframe",url:"//vine.co/v/$1/embed/simple"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},google_maps:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12])+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}}};t(document).on("onInit.fb",function(o,i){t.each(i.group,function(o,i){var a,s,r,c,l,u,d,f=i.src||"",h=!1;i.type||(a=t.extend(!0,{},n,i.opts.media),t.each(a,function(n,o){if(r=f.match(o.matcher),u={},d=n,r){if(h=o.type,o.paramPlace&&r[o.paramPlace]){l=r[o.paramPlace],"?"==l[0]&&(l=l.substring(1)),l=l.split("&");for(var a=0;a<l.length;++a){var p=l[a].split("=",2);2==p.length&&(u[p[0]]=decodeURIComponent(p[1].replace(/\+/g," ")))}}return c=t.extend(!0,{},o.params,i.opts[n],u),f="function"===t.type(o.url)?o.url.call(this,r,c,i):e(o.url,r,c),s="function"===t.type(o.thumb)?o.thumb.call(this,r,c,i):e(o.thumb,r),"vimeo"===d&&(f=f.replace("&%23","#")),!1}}),h?(i.src=f,i.type=h,i.opts.thumb||i.opts.$thumb&&i.opts.$thumb.length||(i.opts.thumb=s),"iframe"===h&&(t.extend(!0,i.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}}),i.contentProvider=d,i.opts.slideClass+=" fancybox-slide--"+("google_maps"==d?"map":"video"))):i.type="image")})})}(window.jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){

return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is("a,button,input,select,textarea")||n.isFunction(t.get(0).onclick))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},u=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};u.prototype.destroy=function(){this.$container.off(".fb.touch")},u.prototype.ontouchstart=function(o){var i=this,c=n(o.target),u=i.instance,d=u.current,f=d.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),!d||i.instance.isAnimating||i.instance.isClosing)return o.stopPropagation(),void o.preventDefault();if((!o.originalEvent||2!=o.originalEvent.button)&&c.length&&!r(c)&&!r(c.parent())&&!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left)&&(i.startPoints=a(o),i.startPoints&&!(i.startPoints.length>1&&u.isSliding))){if(i.$target=c,i.$content=f,i.canTap=!0,n(e).off(".fb.touch"),n(e).on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")),n(e).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),o.stopPropagation(),!u.current.opts.touch&&!u.canPan()||!c.is(i.$stage)&&!i.$stage.find(c).length)return void(c.is("img")&&o.preventDefault());n.fancybox.isMobile&&(l(i.$target)||l(i.$target.parent()))||o.preventDefault(),i.canvasWidth=Math.round(d.$slide[0].clientWidth),i.canvasHeight=Math.round(d.$slide[0].clientHeight),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.sliderStartPos=i.sliderLastPos||{top:0,left:0},i.contentStartPos=n.fancybox.getTranslate(i.$content),i.contentLastPos=null,1!==i.startPoints.length||i.isZooming||(i.canTap=!u.isSliding,"image"===d.type&&(i.contentStartPos.width>i.canvasWidth+1||i.contentStartPos.height>i.canvasHeight+1)?(n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-controls--isGrabbing")),2!==i.startPoints.length||u.isAnimating||d.hasError||"image"!==d.type||!d.isLoaded&&!d.$ghost||(i.isZooming=!0,i.isSwiping=!1,i.isPanning=!1,n.fancybox.stop(i.$content),i.$content.css("transition-duration","0ms"),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))}},u.prototype.ontouchmove=function(t){var e=this;if(e.newPoints=a(t),n.fancybox.isMobile&&(l(e.$target)||l(e.$target.parent())))return t.stopPropagation(),void(e.canTap=!1);if((e.instance.current.opts.touch||e.instance.canPan())&&e.newPoints&&e.newPoints.length&&(e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0)){if(!e.$target.is(e.$stage)&&!e.$stage.find(e.$target).length)return;t.stopPropagation(),t.preventDefault(),e.isSwiping?e.onSwipe():e.isPanning?e.onPan():e.isZooming&&e.onZoom()}},u.prototype.onSwipe=function(){var e,a=this,s=a.isSwiping,r=a.sliderStartPos.left||0;s===!0?Math.abs(a.distance)>10&&(a.canTap=!1,a.instance.group.length<2&&a.instance.opts.touch.vertical?a.isSwiping="y":a.instance.isSliding||a.instance.opts.touch.vertical===!1||"auto"===a.instance.opts.touch.vertical&&n(t).width()>800?a.isSwiping="x":(e=Math.abs(180*Math.atan2(a.distanceY,a.distanceX)/Math.PI),a.isSwiping=e>45&&e<135?"y":"x"),a.instance.isSliding=a.isSwiping,a.startPoints=a.newPoints,n.each(a.instance.slides,function(t,e){n.fancybox.stop(e.$slide),e.$slide.css("transition-duration","0ms"),e.inTransition=!1,e.pos===a.instance.current.pos&&(a.sliderStartPos.left=n.fancybox.getTranslate(e.$slide).left)}),a.instance.SlideShow&&a.instance.SlideShow.isActive&&a.instance.SlideShow.stop()):("x"==s&&(a.distanceX>0&&(a.instance.group.length<2||0===a.instance.current.index&&!a.instance.current.opts.loop)?r+=Math.pow(a.distanceX,.8):a.distanceX<0&&(a.instance.group.length<2||a.instance.current.index===a.instance.group.length-1&&!a.instance.current.opts.loop)?r-=Math.pow(-a.distanceX,.8):r+=a.distanceX),a.sliderLastPos={top:"x"==s?0:a.sliderStartPos.top+a.distanceY,left:r},a.requestId&&(i(a.requestId),a.requestId=null),a.requestId=o(function(){a.sliderLastPos&&(n.each(a.instance.slides,function(t,e){var o=e.pos-a.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:a.sliderLastPos.top,left:a.sliderLastPos.left+o*a.canvasWidth+o*e.opts.gutter})}),a.$container.addClass("fancybox-is-sliding"))}))},u.prototype.onPan=function(){var t,e,a,s=this;s.canTap=!1,t=s.contentStartPos.width>s.canvasWidth?s.contentStartPos.left+s.distanceX:s.contentStartPos.left,e=s.contentStartPos.top+s.distanceY,a=s.limitMovement(t,e,s.contentStartPos.width,s.contentStartPos.height),a.scaleX=s.contentStartPos.scaleX,a.scaleY=s.contentStartPos.scaleY,s.contentLastPos=a,s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){n.fancybox.setTranslate(s.$content,s.contentLastPos)})},u.prototype.limitMovement=function(t,e,n,o){var i,a,s,r,c=this,l=c.canvasWidth,u=c.canvasHeight,d=c.contentStartPos.left,f=c.contentStartPos.top,h=c.distanceX,p=c.distanceY;return i=Math.max(0,.5*l-.5*n),a=Math.max(0,.5*u-.5*o),s=Math.min(l-n,.5*l-.5*n),r=Math.min(u-o,.5*u-.5*o),n>l&&(h>0&&t>i&&(t=i-1+Math.pow(-i+d+h,.8)||0),h<0&&t<s&&(t=s+1-Math.pow(s-d-h,.8)||0)),o>u&&(p>0&&e>a&&(e=a-1+Math.pow(-a+f+p,.8)||0),p<0&&e<r&&(e=r+1-Math.pow(r-f-p,.8)||0)),{top:e,left:t}},u.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},u.prototype.onZoom=function(){var e=this,a=e.contentStartPos.width,r=e.contentStartPos.height,c=e.contentStartPos.left,l=e.contentStartPos.top,u=s(e.newPoints[0],e.newPoints[1]),d=u/e.startDistanceBetweenFingers,f=Math.floor(a*d),h=Math.floor(r*d),p=(a-f)*e.percentageOfImageAtPinchPointX,g=(r-h)*e.percentageOfImageAtPinchPointY,b=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),m=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=b-e.centerPointStartX,v=m-e.centerPointStartY,x=c+(p+y),w=l+(g+v),$={top:w,left:x,scaleX:e.contentStartPos.scaleX*d,scaleY:e.contentStartPos.scaleY*d};e.canTap=!1,e.newWidth=f,e.newHeight=h,e.contentLastPos=$,e.requestId&&(i(e.requestId),e.requestId=null),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},u.prototype.ontouchend=function(t){var o=this,s=Math.max((new Date).getTime()-o.startTime,1),r=o.isSwiping,c=o.isPanning,l=o.isZooming;return o.endPoints=a(t),o.$container.removeClass("fancybox-controls--isGrabbing"),n(e).off(".fb.touch"),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.canTap?o.onTap(t):(o.speed=366,o.velocityX=o.distanceX/s*.5,o.velocityY=o.distanceY/s*.5,o.speedX=Math.max(.5*o.speed,Math.min(1.5*o.speed,1/Math.abs(o.velocityX)*o.speed)),void(c?o.endPanning():l?o.endZooming():o.endSwiping(r)))},u.prototype.endSwiping=function(t){var e=this,o=!1;e.instance.isSliding=!1,e.sliderLastPos=null,"y"==t&&Math.abs(e.distanceY)>50?(n.fancybox.animate(e.instance.current.$slide,{top:e.sliderStartPos.top+e.distanceY+150*e.velocityY,opacity:0},150),o=e.instance.close(!0,300)):"x"==t&&e.distanceX>50&&e.instance.group.length>1?o=e.instance.previous(e.speedX):"x"==t&&e.distanceX<-50&&e.instance.group.length>1&&(o=e.instance.next(e.speedX)),o!==!1||"x"!=t&&"y"!=t||e.instance.jumpTo(e.instance.current.index,150),e.$container.removeClass("fancybox-is-sliding")},u.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(i.instance.current.opts.touch.momentum===!1?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+i.velocityX*i.speed,e=i.contentLastPos.top+i.velocityY*i.speed),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,330))},u.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.setTranslate(a.content,n.fancybox.getTranslate(a.$content)),n.fancybox.animate(a.$content,o,150)))},u.prototype.onTap=function(t){var e,o=this,i=n(t.target),s=o.instance,r=s.current,c=t&&a(t)||o.startPoints,l=c[0]?c[0].x-o.$stage.offset().left:0,u=c[0]?c[0].y-o.$stage.offset().top:0,d=function(e){var i=r.opts[e];if(n.isFunction(i)&&(i=i.apply(s,[r,t])),i)switch(i){case"close":s.close(o.startEvent);break;case"toggleControls":s.toggleControls(!0);break;case"next":s.next();break;case"nextOrClose":s.group.length>1?s.next():s.close(o.startEvent);break;case"zoom":"image"==r.type&&(r.isLoaded||r.$ghost)&&(s.canPan()?s.scaleToFit():s.isScaledDown()?s.scaleToActual(l,u):s.group.length<2&&s.close(o.startEvent))}};if(!(t.originalEvent&&2==t.originalEvent.button||s.isSliding||l>i[0].clientWidth+i.offset().left)){if(i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))e="Outside";else if(i.is(".fancybox-slide"))e="Slide";else{if(!s.current.$content||!s.current.$content.has(t.target).length)return;e="Content"}if(o.tapped){if(clearTimeout(o.tapped),o.tapped=null,Math.abs(l-o.tapX)>50||Math.abs(u-o.tapY)>50||s.isSliding)return this;d("dblclick"+e)}else o.tapX=l,o.tapY=u,r.opts["dblclick"+e]&&r.opts["dblclick"+e]!==r.opts["click"+e]?o.tapped=setTimeout(function(){o.tapped=null,d("click"+e)},300):d("click"+e);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new u(e))}),n(e).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,speed:3e3,init:function(){var t=this;t.$button=t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),(t.instance.group.length<2||!t.instance.group[t.instance.currIndex].opts.slideShow)&&t.$button.hide()},set:function(){var t=this;t.instance&&t.instance.current&&(t.instance.current.opts.loop||t.instance.currIndex<t.instance.group.length-1)?t.timer=setTimeout(function(){t.instance.next()},t.instance.current.opts.slideShow.speed||t.speed):(t.stop(),t.instance.idleSecondsCounter=0,t.instance.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null},start:function(){var t=this,e=t.instance.current;t.instance&&e&&(e.opts.loop||e.index<t.instance.group.length-1)&&(t.isActive=!0,t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"),e.isComplete&&t.set())},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",e.opts.i18n[e.opts.lang].PLAY_START).removeClass("fancybox-button--pause"),t.isActive=!1},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,window.jQuery),function(t,e){"use strict";var n=function(){var e,n,o,i=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],a={};for(n=0;n<i.length;n++)if(e=i[n],e&&e[1]in t){for(o=0;o<e.length;o++)a[i[0][o]]=e[o];return a}return!1}();if(!n)return void(e.fancybox.defaults.btnTpl.fullScreen=!1);var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e(t).on({"onInit.fb":function(t,e){var n,i=e.$refs.toolbar.find("[data-fancybox-fullscreen]");e&&!e.FullScreen&&e.group[e.currIndex].opts.fullScreen?(n=e.$refs.container,n.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle(n[0])}),e.opts.fullScreen&&e.opts.fullScreen.autoStart===!0&&o.request(n[0]),e.FullScreen=o):i.hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle(e.$refs.container[0]))},"beforeClose.fb":function(t){t&&t.FullScreen&&o.exit()}}),e(t).on(n.fullscreenchange,function(){var t=e.fancybox.getInstance();t.current&&"image"===t.current.type&&t.isAnimating&&(t.current.$content.css("transition","none"),t.isAnimating=!1,t.update(!0,!0,0))})}(document,window.jQuery),function(t,e){"use strict";var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,init:function(){var t=this,e=t.instance.group[0],n=t.instance.group[1];t.$button=t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"),t.instance.group.length>1&&t.instance.group[t.instance.currIndex].opts.thumbs&&("image"==e.type||e.opts.thumb||e.opts.$thumb)&&("image"==n.type||n.opts.thumb||n.opts.$thumb)?(t.$button.on("click",function(){t.toggle()}),t.isActive=!0):(t.$button.hide(),t.isActive=!1)},create:function(){var t,n,o=this.instance;this.$grid=e('<div class="fancybox-thumbs"></div>').appendTo(o.$refs.container),t="<ul>",e.each(o.group,function(e,o){n=o.opts.thumb||(o.opts.$thumb?o.opts.$thumb.attr("src"):null),n||"image"!==o.type||(n=o.src),n&&n.length&&(t+='<li data-index="'+e+'"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="'+n+'" /></li>')}),t+="</ul>",this.$list=e(t).appendTo(this.$grid).on("click","li",function(){o.jumpTo(e(this).data("index"))}),this.$list.find("img").hide().one("load",function(){var t,n,o,i,a=e(this).parent().removeClass("fancybox-thumbs-loading"),s=a.outerWidth(),r=a.outerHeight();t=this.naturalWidth||this.width,n=this.naturalHeight||this.height,o=t/s,i=n/r,o>=1&&i>=1&&(o>i?(t/=i,n=r):(t=s,n/=o)),e(this).css({width:Math.floor(t),height:Math.floor(n),"margin-top":Math.min(0,Math.floor(.3*r-.3*n)),"margin-left":Math.min(0,Math.floor(.5*s-.5*t))}).show()}).each(function(){this.src=e(this).data("src")})},focus:function(){this.instance.current&&this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+this.instance.current.index+'"]').addClass("fancybox-thumbs-active").focus()},close:function(){this.$grid.hide()},update:function(){this.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),this.isVisible?(this.$grid||this.create(),this.instance.trigger("onThumbsShow"),this.focus()):this.$grid&&this.instance.trigger("onThumbsHide"),this.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.Thumbs&&(e.Thumbs=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;if(i&&i.isActive){if(n.modal)return i.$button.hide(),void i.hide();o&&e.opts.thumbs.autoStart===!0&&i.show(),i.isVisible&&i.focus()}},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&e.opts.thumbs.hideOnClose!==!1&&n.close()}})}(document,window.jQuery),function(t,e,n){"use strict";function o(){var t=e.location.hash.substr(1),n=t.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return o<1&&(o=1),{hash:t,index:o,gallery:i}}function i(t){var e;""!==t.gallery&&(e=n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1),e.length?e.trigger("click"):n("#"+n.escapeSelector(t.gallery)).trigger("click"))}function a(t){var e;return!!t&&(e=t.current?t.current.opts:t.opts,e.$orig?e.$orig.data("fancybox"):e.hash||"")}n.escapeSelector||(n.escapeSelector=function(t){var e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,n=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t};return(t+"").replace(e,n)});var s=null,r=null;n(function(){setTimeout(function(){n.fancybox.defaults.hash!==!1&&(n(t).on({"onInit.fb":function(t,e){var n,i;e.group[e.currIndex].opts.hash!==!1&&(n=o(),i=a(e),i&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,c){var l;i.opts.hash!==!1&&(l=a(o),l&&""!==l&&(e.location.hash.indexOf(l)<0&&(o.opts.origHash=e.location.hash),s=l+(o.group.length>1?"-"+(i.index+1):""),"replaceState"in e.history?(r&&clearTimeout(r),r=setTimeout(function(){e.history[c?"pushState":"replaceState"]({},t.title,e.location.pathname+e.location.search+"#"+s),r=null},300)):e.location.hash=s))},"beforeClose.fb":function(o,i,c){var l,u;r&&clearTimeout(r),c.opts.hash!==!1&&(l=a(i),u=i&&i.opts.origHash?i.opts.origHash:"",l&&""!==l&&("replaceState"in history?e.history.replaceState({},t.title,e.location.pathname+e.location.search+u):(e.location.hash=u,n(e).scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))),s=null)}}),n(e).on("hashchange.fb",function(){var t=o();n.fancybox.getInstance()?!s||s===t.gallery+"-"+t.index||1===t.index&&s==t.gallery||(s=null,n.fancybox.close()):""!==t.gallery&&i(t)}),n(e).one("unload.fb popstate.fb",function(){n.fancybox.getInstance("close",!0,0)}),i(o()))},50)})}(document,window,window.jQuery);

/*!

* jquery.inputmask.bundle.js

* https://github.com/RobinHerbots/Inputmask

* Copyright (c) 2010 - 2017 Robin Herbots

* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)

* Version: 3.3.11

*/



!function(modules) {

    function __webpack_require__(moduleId) {

        if (installedModules[moduleId]) return installedModules[moduleId].exports;

        var module = installedModules[moduleId] = {

            i: moduleId,

            l: !1,

            exports: {}

        };

        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 

        module.l = !0, module.exports;

    }

    var installedModules = {};

    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.d = function(exports, name, getter) {

        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {

            configurable: !1,

            enumerable: !0,

            get: getter

        });

    }, __webpack_require__.n = function(module) {

        var getter = module && module.__esModule ? function() {

            return module.default;

        } : function() {

            return module;

        };

        return __webpack_require__.d(getter, "a", getter), getter;

    }, __webpack_require__.o = function(object, property) {

        return Object.prototype.hasOwnProperty.call(object, property);

    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 3);

}([ function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($) {

        return $;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {

        return typeof obj;

    } : function(obj) {

        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;

    };

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(10), __webpack_require__(11) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, window, document, undefined) {

        function Inputmask(alias, options, internal) {

            if (!(this instanceof Inputmask)) return new Inputmask(alias, options, internal);

            this.el = undefined, this.events = {}, this.maskset = undefined, this.refreshValue = !1, 

            !0 !== internal && ($.isPlainObject(alias) ? options = alias : (options = options || {}).alias = alias, 

            this.opts = $.extend(!0, {}, this.defaults, options), this.noMasksCache = options && options.definitions !== undefined, 

            this.userOptions = options || {}, this.isRTL = this.opts.numericInput, resolveAlias(this.opts.alias, options, this.opts));

        }

        function resolveAlias(aliasStr, options, opts) {

            var aliasDefinition = Inputmask.prototype.aliases[aliasStr];

            return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, undefined, opts), 

            $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), 

            !1);

        }

        function generateMaskSet(opts, nocache) {

            function generateMask(mask, metadata, opts) {

                var regexMask = !1;

                if (null !== mask && "" !== mask || ((regexMask = null !== opts.regex) ? mask = (mask = opts.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (regexMask = !0, 

                mask = ".*")), 1 === mask.length && !1 === opts.greedy && 0 !== opts.repeat && (opts.placeholder = ""), 

                opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {

                    var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;

                    mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;

                }

                var masksetDefinition, maskdefKey = regexMask ? "regex_" + opts.regex : opts.numericInput ? mask.split("").reverse().join("") : mask;

                return Inputmask.prototype.masksCache[maskdefKey] === undefined || !0 === nocache ? (masksetDefinition = {

                    mask: mask,

                    maskToken: Inputmask.prototype.analyseMask(mask, regexMask, opts),

                    validPositions: {},

                    _buffer: undefined,

                    buffer: undefined,

                    tests: {},

                    metadata: metadata,

                    maskLength: undefined

                }, !0 !== nocache && (Inputmask.prototype.masksCache[maskdefKey] = masksetDefinition, 

                masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[maskdefKey]), 

                masksetDefinition;

            }

            if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {

                if (opts.mask.length > 1) {

                    opts.keepStatic = null === opts.keepStatic || opts.keepStatic;

                    var altMask = opts.groupmarker.start;

                    return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {

                        altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start), 

                        msk.mask === undefined || $.isFunction(msk.mask) ? altMask += msk : altMask += msk.mask;

                    }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);

                }

                opts.mask = opts.mask.pop();

            }

            return opts.mask && opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask) ? generateMask(opts.mask.mask, opts.mask, opts) : generateMask(opts.mask, opts.mask, opts);

        }

        function maskScope(actionObj, maskset, opts) {

            function getMaskTemplate(baseOnInput, minimalPos, includeMode) {

                minimalPos = minimalPos || 0;

                var ndxIntlzr, test, testPos, maskTemplate = [], pos = 0, lvp = getLastValidPosition();

                do {

                    !0 === baseOnInput && getMaskSet().validPositions[pos] ? (test = (testPos = getMaskSet().validPositions[pos]).match, 

                    ndxIntlzr = testPos.locator.slice(), maskTemplate.push(!0 === includeMode ? testPos.input : !1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))) : (test = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).match, 

                    ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(!1 === includeMode ? test.nativeDef : getPlaceholder(pos, test))), 

                    pos++;

                } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);

                return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1, 

                maskTemplate;

            }

            function getMaskSet() {

                return maskset;

            }

            function resetMaskSet(soft) {

                var maskset = getMaskSet();

                maskset.buffer = undefined, !0 !== soft && (maskset.validPositions = {}, maskset.p = 0);

            }

            function getLastValidPosition(closestTo, strict, validPositions) {

                var before = -1, after = -1, valids = validPositions || getMaskSet().validPositions;

                closestTo === undefined && (closestTo = -1);

                for (var posNdx in valids) {

                    var psNdx = parseInt(posNdx);

                    valids[psNdx] && (strict || !0 !== valids[psNdx].generatedInput) && (psNdx <= closestTo && (before = psNdx), 

                    psNdx >= closestTo && (after = psNdx));

                }

                return -1 !== before && closestTo - before > 1 || after < closestTo ? before : after;

            }

            function stripValidPositions(start, end, nocheck, strict) {

                var i, startPos = start, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), needsValidation = !1;

                for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) getMaskSet().validPositions[i] !== undefined && (!0 !== nocheck && (!getMaskSet().validPositions[i].match.optionality && function(pos) {

                    var posMatch = getMaskSet().validPositions[pos];

                    if (posMatch !== undefined && null === posMatch.match.fn) {

                        var prevMatch = getMaskSet().validPositions[pos - 1], nextMatch = getMaskSet().validPositions[pos + 1];

                        return prevMatch !== undefined && nextMatch !== undefined;

                    }

                    return !1;

                }(i) || !1 === opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts)) || delete getMaskSet().validPositions[i]);

                for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition(); ) {

                    for (;getMaskSet().validPositions[startPos] !== undefined; ) startPos++;

                    if (i < startPos && (i = startPos + 1), getMaskSet().validPositions[i] === undefined && isMask(i)) i++; else {

                        var t = getTestTemplate(i);

                        !1 === needsValidation && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]), 

                        getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i], 

                        i++) : positionCanMatchDefinition(startPos, t.match.def) ? !1 !== isValid(startPos, t.input || getPlaceholder(i), !0) && (delete getMaskSet().validPositions[i], 

                        i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;

                    }

                }

                resetMaskSet(!0);

            }

            function determineTestTemplate(tests, guessNextBest) {

                for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (!((testPos = testPositions[ndx]).match && (opts.greedy && !0 !== testPos.match.optionalQuantifier || (!1 === testPos.match.optionality || !1 === testPos.match.newBlockMarker) && !0 !== testPos.match.optionalQuantifier) && (lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation || testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || !0 === guessNextBest && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++) ;

                return testPos;

            }

            function getTestTemplate(pos, ndxIntlzr, tstPs) {

                return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));

            }

            function getTest(pos) {

                return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];

            }

            function positionCanMatchDefinition(pos, def) {

                for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++) if (tests[tndx].match && tests[tndx].match.def === def) {

                    valid = !0;

                    break;

                }

                return valid;

            }

            function getTests(pos, ndxIntlzr, tstPs) {

                function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {

                    function handleMatch(match, loopNdx, quantifierRecurse) {

                        function isFirstMatch(latestMatch, tokenGroup) {

                            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);

                            return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {

                                if (!0 === match.isQuantifier && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;

                            }), firstMatch;

                        }

                        function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {

                            var bestMatch, indexPos;

                            if (getMaskSet().validPositions[pos - 1] && targetAlternation && getMaskSet().tests[pos]) for (var vpAlternation = getMaskSet().validPositions[pos - 1].locator, tpAlternation = getMaskSet().tests[pos][0].locator, i = 0; i < targetAlternation; i++) if (vpAlternation[i] !== tpAlternation[i]) return vpAlternation.slice(targetAlternation + 1);

                            return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [ getMaskSet().validPositions[pos] ], function(ndx, lmnt) {

                                var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation, ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;

                                (indexPos === undefined || ndxPos < indexPos) && -1 !== ndxPos && (bestMatch = lmnt, 

                                indexPos = ndxPos);

                            }), bestMatch ? bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) : targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;

                        }

                        if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;

                        if (testPos === pos && match.matches === undefined) return matches.push({

                            match: match,

                            locator: loopNdx.reverse(),

                            cd: cacheDependency

                        }), !0;

                        if (match.matches !== undefined) {

                            if (match.isGroup && quantifierRecurse !== match) {

                                if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;

                            } else if (match.isOptional) {

                                var optionalToken = match;

                                if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {

                                    if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;

                                    insertStop = !0, testPos = pos;

                                }

                            } else if (match.isAlternator) {

                                var maltMatches, alternateToken = match, malternateMatches = [], currentMatches = matches.slice(), loopNdxCnt = loopNdx.length, altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;

                                if (-1 === altIndex || "string" == typeof altIndex) {

                                    var amndx, currentPos = testPos, ndxInitializerClone = ndxInitializer.slice(), altIndexArr = [];

                                    if ("string" == typeof altIndex) altIndexArr = altIndex.split(","); else for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);

                                    for (var ndx = 0; ndx < altIndexArr.length; ndx++) {

                                        if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice(), 

                                        !0 !== (match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [ amndx ].concat(loopNdx), quantifierRecurse) || match) && match !== undefined && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {

                                            var ntndx = $.inArray(match, maskToken.matches) + 1;

                                            maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ ntndx ].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse)) && (altIndexArr.push(ntndx.toString()), 

                                            $.each(matches, function(ndx, lmnt) {

                                                lmnt.alternation = loopNdx.length - 1;

                                            }));

                                        }

                                        maltMatches = matches.slice(), testPos = currentPos, matches = [];

                                        for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {

                                            var altMatch = maltMatches[ndx1], dropMatch = !1;

                                            altMatch.alternation = altMatch.alternation || loopNdxCnt;

                                            for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {

                                                var altMatch2 = malternateMatches[ndx2];

                                                if ("string" != typeof altIndex || -1 !== $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr)) {

                                                    if (function(source, target) {

                                                        return source.match.nativeDef === target.match.nativeDef || source.match.def === target.match.nativeDef || source.match.nativeDef === target.match.def;

                                                    }(altMatch, altMatch2)) {

                                                        dropMatch = !0, altMatch.alternation === altMatch2.alternation && -1 === altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) && (altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation], 

                                                        altMatch2.alternation = altMatch.alternation), altMatch.match.nativeDef === altMatch2.match.def && (altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation], 

                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 1, altMatch));

                                                        break;

                                                    }

                                                    if (altMatch.match.def === altMatch2.match.def) {

                                                        dropMatch = !1;

                                                        break;

                                                    }

                                                    if (function(source, target) {

                                                        return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);

                                                    }(altMatch, altMatch2) || function(source, target) {

                                                        return null !== source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def.replace(/[\[\]]/g, ""), getMaskSet(), pos, !1, opts, !1);

                                                    }(altMatch, altMatch2)) {

                                                        altMatch.alternation === altMatch2.alternation && -1 === altMatch.locator[altMatch.alternation].toString().indexOf(altMatch2.locator[altMatch2.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na || altMatch.locator[altMatch.alternation].toString(), 

                                                        -1 === altMatch.na.indexOf(altMatch.locator[altMatch.alternation].toString().split("")[0]) && (altMatch.na = altMatch.na + "," + altMatch.locator[altMatch2.alternation].toString().split("")[0]), 

                                                        dropMatch = !0, altMatch.locator[altMatch.alternation] = altMatch2.locator[altMatch2.alternation].toString().split("")[0] + "," + altMatch.locator[altMatch.alternation], 

                                                        malternateMatches.splice(malternateMatches.indexOf(altMatch2), 0, altMatch));

                                                        break;

                                                    }

                                                }

                                            }

                                            dropMatch || malternateMatches.push(altMatch);

                                        }

                                    }

                                    "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {

                                        if (isFinite(ndx)) {

                                            var alternation = lmnt.alternation, altLocArr = lmnt.locator[alternation].toString().split(",");

                                            lmnt.locator[alternation] = undefined, lmnt.alternation = undefined;

                                            for (var alndx = 0; alndx < altLocArr.length; alndx++) -1 !== $.inArray(altLocArr[alndx], altIndexArr) && (lmnt.locator[alternation] !== undefined ? (lmnt.locator[alternation] += ",", 

                                            lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]), 

                                            lmnt.alternation = alternation);

                                            if (lmnt.locator[alternation] !== undefined) return lmnt;

                                        }

                                    })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0, 

                                    match = malternateMatches.length > 0, ndxInitializer = ndxInitializerClone.slice();

                                } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [ altIndex ].concat(loopNdx), quantifierRecurse);

                                if (match) return !0;

                            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {

                                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];

                                if (match = handleMatch(tokenGroup, [ qndx ].concat(loopNdx), tokenGroup)) {

                                    if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1, 

                                    isFirstMatch(latestMatch, tokenGroup)) {

                                        if (qndx > qt.quantifier.min - 1) {

                                            insertStop = !0, testPos = pos;

                                            break;

                                        }

                                        return !0;

                                    }

                                    return !0;

                                }

                            } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;

                        } else testPos++;

                    }

                    for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++) if (!0 !== maskToken.matches[tndx].isQuantifier) {

                        var match = handleMatch(maskToken.matches[tndx], [ tndx ].concat(loopNdx), quantifierRecurse);

                        if (match && testPos === pos) return match;

                        if (testPos > pos) break;

                    }

                }

                function filterTests(tests) {

                    if (opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && !0 !== tests[0].match.optionality && !0 !== tests[0].match.optionalQuantifier && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {

                        if (getMaskSet().validPositions[pos - 1] === undefined) return [ determineTestTemplate(tests) ];

                        if (getMaskSet().validPositions[pos - 1].alternation === tests[0].alternation) return [ determineTestTemplate(tests) ];

                        if (getMaskSet().validPositions[pos - 1]) return [ determineTestTemplate(tests) ];

                    }

                    return tests;

                }

                var latestMatch, maskTokens = getMaskSet().maskToken, testPos = ndxIntlzr ? tstPs : 0, ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [ 0 ], matches = [], insertStop = !1, cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

                if (pos > -1) {

                    if (ndxIntlzr === undefined) {

                        for (var test, previousPos = pos - 1; (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1; ) previousPos--;

                        test !== undefined && previousPos > -1 && (ndxInitializer = function(tests) {

                            var locator = [];

                            return $.isArray(tests) || (tests = [ tests ]), tests.length > 0 && (tests[0].alternation === undefined ? 0 === (locator = determineTestTemplate(tests.slice()).locator.slice()).length && (locator = tests[0].locator.slice()) : $.each(tests, function(ndx, tst) {

                                if ("" !== tst.def) if (0 === locator.length) locator = tst.locator.slice(); else for (var i = 0; i < locator.length; i++) tst.locator[i] && -1 === locator[i].toString().indexOf(tst.locator[i]) && (locator[i] += "," + tst.locator[i]);

                            })), locator;

                        }(test), cacheDependency = ndxInitializer.join(""), testPos = previousPos);

                    }

                    if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);

                    for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length && !(resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [ mtndx ]) && testPos === pos || testPos > pos); mtndx++) ;

                }

                return (0 === matches.length || insertStop) && matches.push({

                    match: {

                        fn: null,

                        cardinality: 0,

                        optionality: !0,

                        casing: null,

                        def: "",

                        placeholder: ""

                    },

                    locator: [],

                    cd: cacheDependency

                }), ndxIntlzr !== undefined && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches), 

                filterTests(getMaskSet().tests[pos]));

            }

            function getBufferTemplate() {

                return getMaskSet()._buffer === undefined && (getMaskSet()._buffer = getMaskTemplate(!1, 1), 

                getMaskSet().buffer === undefined && (getMaskSet().buffer = getMaskSet()._buffer.slice())), 

                getMaskSet()._buffer;

            }

            function getBuffer(noCache) {

                return getMaskSet().buffer !== undefined && !0 !== noCache || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)), 

                getMaskSet().buffer;

            }

            function refreshFromBuffer(start, end, buffer) {

                var i, p;

                if (!0 === start) resetMaskSet(), start = 0, end = buffer.length; else for (i = start; i < end; i++) delete getMaskSet().validPositions[i];

                for (p = start, i = start; i < end; i++) if (resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter) {

                    var valResult = isValid(p, buffer[i], !0, !0);

                    !1 !== valResult && (resetMaskSet(!0), p = valResult.caret !== undefined ? valResult.caret : valResult.pos + 1);

                }

            }

            function casing(elem, test, pos) {

                switch (opts.casing || test.casing) {

                  case "upper":

                    elem = elem.toUpperCase();

                    break;



                  case "lower":

                    elem = elem.toLowerCase();

                    break;



                  case "title":

                    var posBefore = getMaskSet().validPositions[pos - 1];

                    elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();

                    break;



                  default:

                    if ($.isFunction(opts.casing)) {

                        var args = Array.prototype.slice.call(arguments);

                        args.push(getMaskSet().validPositions), elem = opts.casing.apply(this, args);

                    }

                }

                return elem;

            }

            function checkAlternationMatch(altArr1, altArr2, na) {

                for (var naNdx, altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, naArr = na !== undefined ? na.split(",") : [], i = 0; i < naArr.length; i++) -1 !== (naNdx = altArr1.indexOf(naArr[i])) && altArr1.splice(naNdx, 1);

                for (var alndx = 0; alndx < altArr1.length; alndx++) if (-1 !== $.inArray(altArr1[alndx], altArrC)) {

                    isMatch = !0;

                    break;

                }

                return isMatch;

            }

            function isValid(pos, c, strict, fromSetValid, fromAlternate, validateOnly) {

                function isSelection(posObj) {

                    var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end == 1 : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin == 1;

                    return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;

                }

                function _isValid(position, c, strict) {

                    var rslt = !1;

                    return $.each(getTests(position), function(ndx, tst) {

                        for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));

                        if (c && (chrs += c), getBuffer(!0), !1 !== (rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {

                            c: getPlaceholder(position, test, !0) || test.def,

                            pos: position

                        })) {

                            var elem = rslt.c !== undefined ? rslt.c : c;

                            elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? getPlaceholder(position, test, !0) || test.def : elem;

                            var validatedPos = position, possibleModifiedBuffer = getBuffer();

                            if (rslt.remove !== undefined && ($.isArray(rslt.remove) || (rslt.remove = [ rslt.remove ]), 

                            $.each(rslt.remove.sort(function(a, b) {

                                return b - a;

                            }), function(ndx, lmnt) {

                                stripValidPositions(lmnt, lmnt + 1, !0);

                            })), rslt.insert !== undefined && ($.isArray(rslt.insert) || (rslt.insert = [ rslt.insert ]), 

                            $.each(rslt.insert.sort(function(a, b) {

                                return a - b;

                            }), function(ndx, lmnt) {

                                isValid(lmnt.pos, lmnt.c, !0, fromSetValid);

                            })), rslt.refreshFromBuffer) {

                                var refresh = rslt.refreshFromBuffer;

                                if (refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, possibleModifiedBuffer), 

                                rslt.pos === undefined && rslt.c === undefined) return rslt.pos = getLastValidPosition(), 

                                !1;

                                if ((validatedPos = rslt.pos !== undefined ? rslt.pos : position) !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), 

                                !1;

                            } else if (!0 !== rslt && rslt.pos !== undefined && rslt.pos !== position && (validatedPos = rslt.pos, 

                            refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), 

                            !1;

                            return (!0 === rslt || rslt.pos !== undefined || rslt.c !== undefined) && (ndx > 0 && resetMaskSet(!0), 

                            setValidPosition(validatedPos, $.extend({}, tst, {

                                input: casing(elem, test, validatedPos)

                            }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);

                        }

                    }), rslt;

                }

                function setValidPosition(pos, validTest, fromSetValid, isSelection) {

                    if (isSelection || opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined) {

                        var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions), lvp = getLastValidPosition(undefined, !0);

                        for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];

                        getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);

                        var j, valid = !0, vps = getMaskSet().validPositions, needsValidation = !1, initialLength = getMaskSet().maskLength;

                        for (i = j = pos; i <= lvp; i++) {

                            var t = positionsClone[i];

                            if (t !== undefined) for (var posMatch = j; posMatch < getMaskSet().maskLength && (null === t.match.fn && vps[i] && (!0 === vps[i].match.optionalQuantifier || !0 === vps[i].match.optionality) || null != t.match.fn); ) {

                                if (posMatch++, !1 === needsValidation && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]), 

                                getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch), 

                                j = posMatch, valid = !0; else if (positionCanMatchDefinition(posMatch, t.match.def)) {

                                    var result = isValid(posMatch, t.input, !0, !0);

                                    valid = !1 !== result, j = result.caret || result.insert ? getLastValidPosition() : posMatch, 

                                    needsValidation = !0;

                                } else if (!(valid = !0 === t.generatedInput) && posMatch >= getMaskSet().maskLength - 1) break;

                                if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength), 

                                valid) break;

                            }

                            if (!valid) break;

                        }

                        if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone), 

                        resetMaskSet(!0), !1;

                    } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);

                    return resetMaskSet(!0), !0;

                }

                function fillMissingNonMask(maskPos) {

                    for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--) ;

                    var testTemplate, testsFromPos;

                    for (pndx++; pndx < maskPos; pndx++) getMaskSet().validPositions[pndx] === undefined && (!1 === opts.jitMasking || opts.jitMasking > pndx) && ("" === (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice())[testsFromPos.length - 1].match.def && testsFromPos.pop(), 

                    (testTemplate = determineTestTemplate(testsFromPos)) && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && !1 !== (result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, !0) || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0)) && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0));

                }

                strict = !0 === strict;

                var maskPos = pos;

                pos.begin !== undefined && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);

                var result = !0, positionsClone = $.extend(!0, {}, getMaskSet().validPositions);

                if ($.isFunction(opts.preValidation) && !strict && !0 !== fromSetValid && !0 !== validateOnly && (result = opts.preValidation(getBuffer(), maskPos, c, isSelection(pos), opts)), 

                !0 === result) {

                    if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(undefined, Inputmask.keyCode.DELETE, pos, !0, !0), 

                    maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (maxLength === undefined || maskPos < maxLength) && (result = _isValid(maskPos, c, strict), 

                    (!strict || !0 === fromSetValid) && !1 === result && !0 !== validateOnly)) {

                        var currentPosValid = getMaskSet().validPositions[maskPos];

                        if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {

                            if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, !0)) for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) if (!1 !== (result = _isValid(nPos, c, strict))) {

                                !function(originalPos, newPos) {

                                    var vp = getMaskSet().validPositions[newPos];

                                    if (vp) for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++) if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, !0)) {

                                        var tests = getTests(ps).slice(), bestMatch = determineTestTemplate(tests, !0), equality = -1;

                                        "" === tests[tests.length - 1].match.def && tests.pop(), $.each(tests, function(ndx, tst) {

                                            for (var i = 0; i < tll; i++) {

                                                if (tst.locator[i] === undefined || !checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {

                                                    var targetAI = targetLocator[i], bestMatchAI = bestMatch.locator[i], tstAI = tst.locator[i];

                                                    targetAI - bestMatchAI > Math.abs(targetAI - tstAI) && (bestMatch = tst);

                                                    break;

                                                }

                                                equality < i && (equality = i, bestMatch = tst);

                                            }

                                        }), (bestMatch = $.extend({}, bestMatch, {

                                            input: getPlaceholder(ps, bestMatch.match, !0) || bestMatch.match.def

                                        })).generatedInput = !0, setValidPosition(ps, bestMatch, !0), getMaskSet().validPositions[newPos] = undefined, 

                                        _isValid(newPos, vp.input, !0);

                                    }

                                }(maskPos, result.pos !== undefined ? result.pos : nPos), maskPos = nPos;

                                break;

                            }

                        } else result = {

                            caret: seekNext(maskPos)

                        };

                    }

                    !1 === result && opts.keepStatic && !strict && !0 !== fromAlternate && (result = function(pos, c, strict) {

                        var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions), isValidRslt = !1, lAltPos = getLastValidPosition();

                        for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--) if ((altPos = getMaskSet().validPositions[lAltPos]) && altPos.alternation !== undefined) {

                            if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation, 

                            prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;

                            prevAltPos = altPos;

                        }

                        if (alternation !== undefined) {

                            decisionPos = parseInt(lastAlt);

                            var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];

                            decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);

                            var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];

                            $.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function(ndx, test) {

                                altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];

                                for (var mndx = 0; mndx < altNdxs.length; mndx++) {

                                    var validInputs = [], staticInputsBeforePos = 0, staticInputsBeforePosAlternate = 0, verifyValidInput = !1;

                                    if (decisionTaker < altNdxs[mndx] && (test.na === undefined || -1 === $.inArray(altNdxs[mndx], test.na.split(",")) || -1 === $.inArray(decisionTaker.toString(), altNdxs))) {

                                        getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);

                                        var possibilities = getMaskSet().validPositions[decisionPos].locator;

                                        for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]), 

                                        null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0, 

                                        !0 !== possibilityPos.generatedInput && validInputs.push(possibilityPos.input)), 

                                        staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def), 

                                        getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input, 

                                        i = decisionPos + 1; i < getLastValidPosition(undefined, !0) + 1; i++) (validPos = getMaskSet().validPositions[i]) && !0 !== validPos.generatedInput && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++, 

                                        delete getMaskSet().validPositions[i];

                                        for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(), 

                                        resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0; ) {

                                            var input = validInputs.shift();

                                            if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(undefined, !0) + 1, input, !1, fromSetValid, !0))) break;

                                        }

                                        if (isValidRslt) {

                                            getMaskSet().validPositions[decisionPos].locator = possibilities;

                                            var targetLvp = getLastValidPosition(pos) + 1;

                                            for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) ((validPos = getMaskSet().validPositions[i]) === undefined || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;

                                            isValidRslt = isValid((pos += staticInputsBeforePosAlternate - staticInputsBeforePos) > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);

                                        }

                                        if (isValidRslt) return !1;

                                        resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);

                                    }

                                }

                            });

                        }

                        return isValidRslt;

                    }(maskPos, c, strict)), !0 === result && (result = {

                        pos: maskPos

                    });

                }

                if ($.isFunction(opts.postValidation) && !1 !== result && !strict && !0 !== fromSetValid && !0 !== validateOnly) {

                    var postResult = opts.postValidation(getBuffer(!0), result, opts);

                    if (postResult.refreshFromBuffer && postResult.buffer) {

                        var refresh = postResult.refreshFromBuffer;

                        refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, postResult.buffer);

                    }

                    result = !0 === postResult ? result : postResult;

                }

                return result && result.pos === undefined && (result.pos = maskPos), !1 !== result && !0 !== validateOnly || (resetMaskSet(!0), 

                getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;

            }

            function isMask(pos, strict) {

                var test = getTestTemplate(pos).match;

                if ("" === test.def && (test = getTest(pos).match), null != test.fn) return test.fn;

                if (!0 !== strict && pos > -1) {

                    var tests = getTests(pos);

                    return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);

                }

                return !1;

            }

            function seekNext(pos, newBlock) {

                var maskL = getMaskSet().maskLength;

                if (pos >= maskL) return maskL;

                var position = pos;

                for (getTests(maskL + 1).length > 1 && (getMaskTemplate(!0, maskL + 1, !0), maskL = getMaskSet().maskLength); ++position < maskL && (!0 === newBlock && (!0 !== getTest(position).match.newBlockMarker || !isMask(position)) || !0 !== newBlock && !isMask(position)); ) ;

                return position;

            }

            function seekPrevious(pos, newBlock) {

                var tests, position = pos;

                if (position <= 0) return 0;

                for (;--position > 0 && (!0 === newBlock && !0 !== getTest(position).match.newBlockMarker || !0 !== newBlock && !isMask(position) && ((tests = getTests(position)).length < 2 || 2 === tests.length && "" === tests[1].match.def)); ) ;

                return position;

            }

            function getBufferElement(position) {

                return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;

            }

            function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {

                if (event && $.isFunction(opts.onBeforeWrite)) {

                    var result = opts.onBeforeWrite.call(inputmask, event, buffer, caretPos, opts);

                    if (result) {

                        if (result.refreshFromBuffer) {

                            var refresh = result.refreshFromBuffer;

                            refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer || buffer), 

                            buffer = getBuffer(!0);

                        }

                        caretPos !== undefined && (caretPos = result.caret !== undefined ? result.caret : caretPos);

                    }

                }

                input !== undefined && (input.inputmask._valueSet(buffer.join("")), caretPos === undefined || event !== undefined && "blur" === event.type ? renderColorMask(input, caretPos, 0 === buffer.length) : android && event && "input" === event.type ? setTimeout(function() {

                    caret(input, caretPos);

                }, 0) : caret(input, caretPos), !0 === triggerInputEvent && (skipInputEvent = !0, 

                $(input).trigger("input")));

            }

            function getPlaceholder(pos, test, returnPL) {

                if ((test = test || getTest(pos).match).placeholder !== undefined || !0 === returnPL) return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;

                if (null === test.fn) {

                    if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {

                        var prevTest, tests = getTests(pos), staticAlternations = [];

                        if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0)) for (var i = 0; i < tests.length; i++) if (!0 !== tests[i].match.optionality && !0 !== tests[i].match.optionalQuantifier && (null === tests[i].match.fn || prevTest === undefined || !1 !== tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts)) && (staticAlternations.push(tests[i]), 

                        null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);

                    }

                    return test.def;

                }

                return opts.placeholder.charAt(pos % opts.placeholder.length);

            }

            function checkVal(input, writeOut, strict, nptvl, initiatingEvent) {

                function isTemplateMatch(ndx, charCodes) {

                    return -1 !== getBufferTemplate().slice(ndx, seekNext(ndx)).join("").indexOf(charCodes) && !isMask(ndx) && getTest(ndx).match.nativeDef === charCodes.charAt(charCodes.length - 1);

                }

                var inputValue = nptvl.slice(), charCodes = "", initialNdx = -1, result = undefined;

                if (resetMaskSet(), strict || !0 === opts.autoUnmask) initialNdx = seekNext(initialNdx); else {

                    var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""), matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));

                    matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length), 

                    initialNdx = seekNext(initialNdx));

                }

                if (-1 === initialNdx ? (getMaskSet().p = seekNext(initialNdx), initialNdx = 0) : getMaskSet().p = initialNdx, 

                $.each(inputValue, function(ndx, charCode) {

                    if (charCode !== undefined) if (getMaskSet().validPositions[ndx] === undefined && inputValue[ndx] === getPlaceholder(ndx) && isMask(ndx, !0) && !1 === isValid(ndx, inputValue[ndx], !0, undefined, undefined, !0)) getMaskSet().p++; else {

                        var keypress = new $.Event("_checkval");

                        keypress.which = charCode.charCodeAt(0), charCodes += charCode;

                        var lvp = getLastValidPosition(undefined, !0), lvTest = getMaskSet().validPositions[lvp], nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);

                        if (!isTemplateMatch(initialNdx, charCodes) || strict || opts.autoUnmask) {

                            var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;

                            result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, strict, pos), 

                            initialNdx = pos + 1, charCodes = "";

                        } else result = EventHandlers.keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);

                        if (!1 !== result && !strict && $.isFunction(opts.onBeforeWrite)) {

                            var origResult = result;

                            if (result = opts.onBeforeWrite.call(inputmask, keypress, getBuffer(), result.forwardPosition, opts), 

                            (result = $.extend(origResult, result)) && result.refreshFromBuffer) {

                                var refresh = result.refreshFromBuffer;

                                refreshFromBuffer(!0 === refresh ? refresh : refresh.start, refresh.end, result.buffer), 

                                resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret, result.forwardPosition = result.caret);

                            }

                        }

                    }

                }), writeOut) {

                    var caretPos = undefined;

                    document.activeElement === input && result && (caretPos = opts.numericInput ? seekPrevious(result.forwardPosition) : result.forwardPosition), 

                    writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"), initiatingEvent && "input" === initiatingEvent.type);

                }

            }

            function unmaskedvalue(input) {

                if (input) {

                    if (input.inputmask === undefined) return input.value;

                    input.inputmask && input.inputmask.refreshValue && EventHandlers.setValueEvent.call(input);

                }

                var umValue = [], vps = getMaskSet().validPositions;

                for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);

                var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");

                if ($.isFunction(opts.onUnMask)) {

                    var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");

                    unmaskedValue = opts.onUnMask.call(inputmask, bufferValue, unmaskedValue, opts);

                }

                return unmaskedValue;

            }

            function caret(input, begin, end, notranslate) {

                function translatePosition(pos) {

                    return !0 === notranslate || !isRTL || "number" != typeof pos || opts.greedy && "" === opts.placeholder || (pos = getBuffer().join("").length - pos), 

                    pos;

                }

                var range;

                if (begin === undefined) return input.setSelectionRange ? (begin = input.selectionStart, 

                end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset, 

                end = range.endOffset) : document.selection && document.selection.createRange && (end = (begin = 0 - (range = document.selection.createRange()).duplicate().moveStart("character", -input.inputmask._valueGet().length)) + range.text.length), 

                {

                    begin: translatePosition(begin),

                    end: translatePosition(end)

                };

                if (begin.begin !== undefined && (end = begin.end, begin = begin.begin), "number" == typeof begin) {

                    begin = translatePosition(begin), end = "number" == typeof (end = translatePosition(end)) ? end : begin;

                    var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;

                    if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || !1 !== opts.insertMode || begin !== end || end++, 

                    input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end; else if (window.getSelection) {

                        if (range = document.createRange(), input.firstChild === undefined || null === input.firstChild) {

                            var textNode = document.createTextNode("");

                            input.appendChild(textNode);

                        }

                        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length), 

                        range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length), 

                        range.collapse(!0);

                        var sel = window.getSelection();

                        sel.removeAllRanges(), sel.addRange(range);

                    } else input.createTextRange && ((range = input.createTextRange()).collapse(!0), 

                    range.moveEnd("character", end), range.moveStart("character", begin), range.select());

                    renderColorMask(input, {

                        begin: begin,

                        end: end

                    });

                }

            }

            function determineLastRequiredPosition(returnDefinition) {

                var pos, testPos, buffer = getBuffer(), bl = buffer.length, lvp = getLastValidPosition(), positions = {}, lvTest = getMaskSet().validPositions[lvp], ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined;

                for (pos = lvp + 1; pos < buffer.length; pos++) ndxIntlzr = (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1)).locator.slice(), 

                positions[pos] = $.extend(!0, {}, testPos);

                var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;

                for (pos = bl - 1; pos > lvp && (((testPos = positions[pos]).match.optionality || testPos.match.optionalQuantifier && testPos.match.newBlockMarker || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;

                return returnDefinition ? {

                    l: bl,

                    def: positions[bl] ? positions[bl].match : undefined

                } : bl;

            }

            function clearOptionalTail(buffer) {

                for (var validPos, rl = determineLastRequiredPosition(), bl = buffer.length, lv = getMaskSet().validPositions[getLastValidPosition()]; rl < bl && !isMask(rl, !0) && (validPos = lv !== undefined ? getTestTemplate(rl, lv.locator.slice(""), lv) : getTest(rl)) && !0 !== validPos.match.optionality && (!0 !== validPos.match.optionalQuantifier && !0 !== validPos.match.newBlockMarker || rl + 1 === bl && "" === (lv !== undefined ? getTestTemplate(rl + 1, lv.locator.slice(""), lv) : getTest(rl + 1)).match.def); ) rl++;

                for (;(validPos = getMaskSet().validPositions[rl - 1]) && validPos && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter; ) rl--;

                return buffer.splice(rl), buffer;

            }

            function isComplete(buffer) {

                if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);

                if ("*" === opts.repeat) return undefined;

                var complete = !1, lrp = determineLastRequiredPosition(!0), aml = seekPrevious(lrp.l);

                if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {

                    complete = !0;

                    for (var i = 0; i <= aml; i++) {

                        var test = getTestTemplate(i).match;

                        if (null !== test.fn && getMaskSet().validPositions[i] === undefined && !0 !== test.optionality && !0 !== test.optionalQuantifier || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {

                            complete = !1;

                            break;

                        }

                    }

                }

                return complete;

            }

            function handleRemove(input, k, pos, strict, fromIsValid) {

                if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE), 

                isRTL)) {

                    var pend = pos.end;

                    pos.end = pos.begin, pos.begin = pend;

                }

                k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || !1 === opts.insertMode) ? (pos.begin = seekPrevious(pos.begin), 

                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) && getMaskSet().validPositions[pos.end] && getMaskSet().validPositions[pos.end].input !== opts.radixPoint ? pos.end + 1 : seekNext(pos.end) + 1, 

                getMaskSet().validPositions[pos.begin] !== undefined && getMaskSet().validPositions[pos.begin].input === opts.groupSeparator && pos.end++), 

                stripValidPositions(pos.begin, pos.end, !1, strict), !0 !== strict && function() {

                    if (opts.keepStatic) {

                        for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {

                            var altPos = getMaskSet().validPositions[lastAlt];

                            if (altPos) {

                                if (!0 !== altPos.generatedInput && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input), 

                                delete getMaskSet().validPositions[lastAlt], altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;

                                prevAltPos = altPos;

                            }

                        }

                        if (lastAlt > -1) for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0; ) {

                            var keypress = new $.Event("keypress");

                            keypress.which = validInputs.pop().charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);

                        } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);

                    }

                }();

                var lvp = getLastValidPosition(pos.begin, !0);

                if (lvp < pos.begin) getMaskSet().p = seekNext(lvp); else if (!0 !== strict && (getMaskSet().p = pos.begin, 

                !0 !== fromIsValid)) for (;getMaskSet().p < lvp && getMaskSet().validPositions[getMaskSet().p] === undefined; ) getMaskSet().p++;

            }

            function initializeColorMask(input) {

                function findCaretPos(clientx) {

                    var caretPos, e = document.createElement("span");

                    for (var style in computedStyle) isNaN(style) && -1 !== style.indexOf("font") && (e.style[style] = computedStyle[style]);

                    e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing, 

                    e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", 

                    e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);

                    var itl, inputText = input.inputmask._valueGet(), previousWidth = 0;

                    for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {

                        if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {

                            var offset1 = clientx - previousWidth, offset2 = e.offsetWidth - clientx;

                            e.innerHTML = inputText.charAt(caretPos), caretPos = (offset1 -= e.offsetWidth / 3) < offset2 ? caretPos - 1 : caretPos;

                            break;

                        }

                        previousWidth = e.offsetWidth;

                    }

                    return document.body.removeChild(e), caretPos;

                }

                var computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null), template = document.createElement("div");

                template.style.width = computedStyle.width, template.style.textAlign = computedStyle.textAlign, 

                (colorMask = document.createElement("div")).className = "im-colormask", input.parentNode.insertBefore(colorMask, input), 

                input.parentNode.removeChild(input), colorMask.appendChild(template), colorMask.appendChild(input), 

                input.style.left = template.offsetLeft + "px", $(input).on("click", function(e) {

                    return caret(input, findCaretPos(e.clientX)), EventHandlers.clickEvent.call(input, [ e ]);

                }), $(input).on("keydown", function(e) {

                    e.shiftKey || !1 === opts.insertMode || setTimeout(function() {

                        renderColorMask(input);

                    }, 0);

                });

            }

            function renderColorMask(input, caretPos, clear) {

                function handleStatic() {

                    isStatic || null !== test.fn && testPos.input !== undefined ? isStatic && (null !== test.fn && testPos.input !== undefined || "" === test.def) && (isStatic = !1, 

                    maskTemplate += "</span>") : (isStatic = !0, maskTemplate += "<span class='im-static'>");

                }

                function handleCaret(force) {

                    !0 !== force && pos !== caretPos.begin || document.activeElement !== input || (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>");

                }

                var test, testPos, ndxIntlzr, maskTemplate = "", isStatic = !1, pos = 0;

                if (colorMask !== undefined) {

                    var buffer = getBuffer();

                    if (caretPos === undefined ? caretPos = caret(input) : caretPos.begin === undefined && (caretPos = {

                        begin: caretPos,

                        end: caretPos

                    }), !0 !== clear) {

                        var lvp = getLastValidPosition();

                        do {

                            handleCaret(), getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos], 

                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += buffer[pos]) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1), 

                            test = testPos.match, ndxIntlzr = testPos.locator.slice(), (!1 === opts.jitMasking || pos < lvp || "number" == typeof opts.jitMasking && isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(), 

                            maskTemplate += getPlaceholder(pos, test))), pos++;

                        } while ((maxLength === undefined || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos || isStatic);

                        -1 === maskTemplate.indexOf("im-caret") && handleCaret(!0), isStatic && handleStatic();

                    }

                    var template = colorMask.getElementsByTagName("div")[0];

                    template.innerHTML = maskTemplate, input.inputmask.positionColorMask(input, template);

                }

            }

            maskset = maskset || this.maskset, opts = opts || this.opts;

            var undoValue, $el, maxLength, colorMask, inputmask = this, el = this.el, isRTL = this.isRTL, skipKeyPressEvent = !1, skipInputEvent = !1, ignorable = !1, mouseEnter = !1, EventRuler = {

                on: function(input, eventName, eventHandler) {

                    var ev = function(e) {

                        if (this.inputmask === undefined && "FORM" !== this.nodeName) {

                            var imOpts = $.data(this, "_inputmask_opts");

                            imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);

                        } else {

                            if ("setvalue" === e.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || !1 === opts.tabThrough && e.keyCode === Inputmask.keyCode.TAB))) {

                                switch (e.type) {

                                  case "input":

                                    if (!0 === skipInputEvent) return skipInputEvent = !1, e.preventDefault();

                                    break;



                                  case "keydown":

                                    skipKeyPressEvent = !1, skipInputEvent = !1;

                                    break;



                                  case "keypress":

                                    if (!0 === skipKeyPressEvent) return e.preventDefault();

                                    skipKeyPressEvent = !0;

                                    break;



                                  case "click":

                                    if (iemobile || iphone) {

                                        var that = this, args = arguments;

                                        return setTimeout(function() {

                                            eventHandler.apply(that, args);

                                        }, 0), !1;

                                    }

                                }

                                var returnVal = eventHandler.apply(this, arguments);

                                return !1 === returnVal && (e.preventDefault(), e.stopPropagation()), returnVal;

                            }

                            e.preventDefault();

                        }

                    };

                    input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev), 

                    -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);

                },

                off: function(input, event) {

                    if (input.inputmask && input.inputmask.events) {

                        var events;

                        event ? (events = [])[event] = input.inputmask.events[event] : events = input.inputmask.events, 

                        $.each(events, function(eventName, evArr) {

                            for (;evArr.length > 0; ) {

                                var ev = evArr.pop();

                                -1 !== $.inArray(eventName, [ "submit", "reset" ]) ? null !== input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);

                            }

                            delete input.inputmask.events[eventName];

                        });

                    }

                }

            }, EventHandlers = {

                keydownEvent: function(e) {

                    var input = this, $input = $(input), k = e.keyCode, pos = caret(input);

                    if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !function(eventName) {

                        var el = document.createElement("input"), evName = "on" + eventName, isSupported = evName in el;

                        return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]), 

                        el = null, isSupported;

                    }("cut")) e.preventDefault(), handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")), 

                    input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : !0 === isComplete(getBuffer()) && $input.trigger("complete"); else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {

                        e.preventDefault();

                        var caretPos = seekNext(getLastValidPosition());

                        opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--, 

                        caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);

                    } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(), 

                    caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && !0 !== e.altKey ? (checkVal(input, !0, !1, undoValue.split("")), 

                    $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? !0 === opts.tabThrough && k === Inputmask.keyCode.TAB ? (!0 === e.shiftKey ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)), 

                    pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0), 

                    pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--), 

                    pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || !1 === opts.insertMode && (k === Inputmask.keyCode.RIGHT ? setTimeout(function() {

                        var caretPos = caret(input);

                        caret(input, caretPos.begin);

                    }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {

                        var caretPos = caret(input);

                        caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);

                    }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));

                    opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = -1 !== $.inArray(k, opts.ignorables);

                },

                keypressEvent: function(e, checkval, writeOut, strict, ndx) {

                    var input = this, $input = $(input), k = e.which || e.charCode || e.keyCode;

                    if (!(!0 === checkval || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""), 

                    setTimeout(function() {

                        $input.trigger("change");

                    }, 0)), !0;

                    if (k) {

                        46 === k && !1 === e.shiftKey && "" !== opts.radixPoint && (k = opts.radixPoint.charCodeAt(0));

                        var forwardPosition, pos = checkval ? {

                            begin: ndx,

                            end: ndx

                        } : caret(input), c = String.fromCharCode(k);

                        getMaskSet().writeOutBuffer = !0;

                        var valResult = isValid(pos, c, strict);

                        if (!1 !== valResult && (resetMaskSet(!0), forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos), 

                        getMaskSet().p = forwardPosition), !1 !== writeOut && (setTimeout(function() {

                            opts.onKeyValidation.call(input, k, valResult, opts);

                        }, 0), getMaskSet().writeOutBuffer && !1 !== valResult)) {

                            var buffer = getBuffer();

                            writeBuffer(input, buffer, opts.numericInput && valResult.caret === undefined ? seekPrevious(forwardPosition) : forwardPosition, e, !0 !== checkval), 

                            !0 !== checkval && setTimeout(function() {

                                !0 === isComplete(buffer) && $input.trigger("complete");

                            }, 0);

                        }

                        if (e.preventDefault(), checkval) return !1 !== valResult && (valResult.forwardPosition = forwardPosition), 

                        valResult;

                    }

                },

                pasteEvent: function(e) {

                    var tempValue, input = this, ev = e.originalEvent || e, $input = $(input), inputValue = input.inputmask._valueGet(!0), caretPos = caret(input);

                    isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);

                    var valueBeforeCaret = inputValue.substr(0, caretPos.begin), valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

                    if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""), 

                    valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""), 

                    isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue), 

                    window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret; else {

                        if (!ev.clipboardData || !ev.clipboardData.getData) return !0;

                        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;

                    }

                    var pasteValue = inputValue;

                    if ($.isFunction(opts.onBeforePaste)) {

                        if (!1 === (pasteValue = opts.onBeforePaste.call(inputmask, inputValue, opts))) return e.preventDefault();

                        pasteValue || (pasteValue = inputValue);

                    }

                    return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")), 

                    writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")), 

                    !0 === isComplete(getBuffer()) && $input.trigger("complete"), e.preventDefault();

                },

                inputFallBackEvent: function(e) {

                    var input = this, inputValue = input.inputmask._valueGet();

                    if (getBuffer().join("") !== inputValue) {

                        var caretPos = caret(input);

                        if (!1 === function(input, inputValue, caretPos) {

                            if ("." === inputValue.charAt(caretPos.begin - 1) && "" !== opts.radixPoint && ((inputValue = inputValue.split(""))[caretPos.begin - 1] = opts.radixPoint.charAt(0), 

                            inputValue = inputValue.join("")), inputValue.charAt(caretPos.begin - 1) === opts.radixPoint && inputValue.length > getBuffer().length) {

                                var keypress = new $.Event("keypress");

                                return keypress.which = opts.radixPoint.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, caretPos.begin - 1), 

                                !1;

                            }

                        }(input, inputValue, caretPos)) return !1;

                        if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""), 

                        !1 === function(input, inputValue, caretPos) {

                            if (iemobile) {

                                var inputChar = inputValue.replace(getBuffer().join(""), "");

                                if (1 === inputChar.length) {

                                    var keypress = new $.Event("keypress");

                                    return keypress.which = inputChar.charCodeAt(0), EventHandlers.keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), 

                                    !1;

                                }

                            }

                        }(input, inputValue, caretPos)) return !1;

                        caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input));

                        var buffer = getBuffer().join(""), frontPart = inputValue.substr(0, caretPos.begin), backPart = inputValue.substr(caretPos.begin), frontBufferPart = buffer.substr(0, caretPos.begin), backBufferPart = buffer.substr(caretPos.begin), selection = caretPos, entries = "", isEntry = !1;

                        if (frontPart !== frontBufferPart) {

                            selection.begin = 0;

                            for (var fpl = (isEntry = frontPart.length >= frontBufferPart.length) ? frontPart.length : frontBufferPart.length, i = 0; frontPart.charAt(i) === frontBufferPart.charAt(i) && i < fpl; i++) selection.begin++;

                            isEntry && (entries += frontPart.slice(selection.begin, selection.end));

                        }

                        backPart !== backBufferPart && (backPart.length > backBufferPart.length ? isEntry && (selection.end = selection.begin) : backPart.length < backBufferPart.length ? selection.end += backBufferPart.length - backPart.length : backPart.charAt(0) !== backBufferPart.charAt(0) && selection.end++), 

                        writeBuffer(input, getBuffer(), selection), entries.length > 0 ? $.each(entries.split(""), function(ndx, entry) {

                            var keypress = new $.Event("keypress");

                            keypress.which = entry.charCodeAt(0), ignorable = !1, EventHandlers.keypressEvent.call(input, keypress);

                        }) : (selection.begin === selection.end - 1 && caret(input, seekPrevious(selection.begin + 1), selection.end), 

                        e.keyCode = Inputmask.keyCode.DELETE, EventHandlers.keydownEvent.call(input, e)), 

                        e.preventDefault();

                    }

                },

                setValueEvent: function(e) {

                    this.inputmask.refreshValue = !1;

                    var input = this, value = input.inputmask._valueGet(!0);

                    $.isFunction(opts.onBeforeMask) && (value = opts.onBeforeMask.call(inputmask, value, opts) || value), 

                    value = value.split(""), checkVal(input, !0, !1, isRTL ? value.reverse() : value), 

                    undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");

                },

                focusEvent: function(e) {

                    var input = this, nptValue = input.inputmask._valueGet();

                    opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : !1 === mouseEnter && caret(input, seekNext(getLastValidPosition()))), 

                    !0 === opts.positionCaretOnTab && !1 === mouseEnter && "" !== nptValue && (writeBuffer(input, getBuffer(), caret(input)), 

                    EventHandlers.clickEvent.apply(input, [ e, !0 ])), undoValue = getBuffer().join("");

                },

                mouseleaveEvent: function(e) {

                    var input = this;

                    if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {

                        var buffer = getBuffer().slice(), nptValue = input.inputmask._valueGet();

                        nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer), 

                        writeBuffer(input, buffer));

                    }

                },

                clickEvent: function(e, tabbed) {

                    function doRadixFocus(clickPos) {

                        if ("" !== opts.radixPoint) {

                            var vps = getMaskSet().validPositions;

                            if (vps[clickPos] === undefined || vps[clickPos].input === getPlaceholder(clickPos)) {

                                if (clickPos < seekNext(-1)) return !0;

                                var radixPos = $.inArray(opts.radixPoint, getBuffer());

                                if (-1 !== radixPos) {

                                    for (var vp in vps) if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;

                                    return !0;

                                }

                            }

                        }

                        return !1;

                    }

                    var input = this;

                    setTimeout(function() {

                        if (document.activeElement === input) {

                            var selectedCaret = caret(input);

                            if (tabbed && (isRTL ? selectedCaret.end = selectedCaret.begin : selectedCaret.begin = selectedCaret.end), 

                            selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {

                              case "none":

                                break;



                              case "radixFocus":

                                if (doRadixFocus(selectedCaret.begin)) {

                                    var radixPos = getBuffer().join("").indexOf(opts.radixPoint);

                                    caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);

                                    break;

                                }



                              default:

                                var clickPosition = selectedCaret.begin, lvclickPosition = getLastValidPosition(clickPosition, !0), lastPosition = seekNext(lvclickPosition);

                                if (clickPosition < lastPosition) caret(input, isMask(clickPosition, !0) || isMask(clickPosition - 1, !0) ? clickPosition : seekNext(clickPosition)); else {

                                    var lvp = getMaskSet().validPositions[lvclickPosition], tt = getTestTemplate(lastPosition, lvp ? lvp.match.locator : undefined, lvp), placeholder = getPlaceholder(lastPosition, tt.match);

                                    if ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && !0 !== tt.match.optionalQuantifier && !0 !== tt.match.newBlockMarker || !isMask(lastPosition, !0) && tt.match.def === placeholder) {

                                        var newPos = seekNext(lastPosition);

                                        (clickPosition >= newPos || clickPosition === lastPosition) && (lastPosition = newPos);

                                    }

                                    caret(input, lastPosition);

                                }

                            }

                        }

                    }, 0);

                },

                dblclickEvent: function(e) {

                    var input = this;

                    setTimeout(function() {

                        caret(input, 0, seekNext(getLastValidPosition()));

                    }, 0);

                },

                cutEvent: function(e) {

                    var input = this, $input = $(input), pos = caret(input), ev = e.originalEvent || e, clipboardData = window.clipboardData || ev.clipboardData, clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);

                    clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")), 

                    document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos), 

                    writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")), 

                    input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared");

                },

                blurEvent: function(e) {

                    var $input = $(this), input = this;

                    if (input.inputmask) {

                        var nptValue = input.inputmask._valueGet(), buffer = getBuffer().slice();

                        "" !== nptValue && (opts.clearMaskOnLostFocus && (-1 === getLastValidPosition() && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)), 

                        !1 === isComplete(buffer) && (setTimeout(function() {

                            $input.trigger("incomplete");

                        }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())), 

                        writeBuffer(input, buffer, undefined, e)), undoValue !== getBuffer().join("") && (undoValue = buffer.join(""), 

                        $input.trigger("change"));

                    }

                },

                mouseenterEvent: function(e) {

                    var input = this;

                    mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());

                },

                submitEvent: function(e) {

                    undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && -1 === getLastValidPosition() && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""), 

                    opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0), 

                    setTimeout(function() {

                        writeBuffer(el, getBuffer());

                    }, 0));

                },

                resetEvent: function(e) {

                    el.inputmask.refreshValue = !0, setTimeout(function() {

                        $el.trigger("setvalue");

                    }, 0);

                }

            };

            Inputmask.prototype.positionColorMask = function(input, template) {

                input.style.left = template.offsetLeft + "px";

            };

            var valueBuffer;

            if (actionObj !== undefined) switch (actionObj.action) {

              case "isComplete":

                return el = actionObj.el, isComplete(getBuffer());



              case "unmaskedvalue":

                return el !== undefined && actionObj.value === undefined || (valueBuffer = actionObj.value, 

                valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, valueBuffer, opts) || valueBuffer : valueBuffer).split(""), 

                checkVal(undefined, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite.call(inputmask, undefined, getBuffer(), 0, opts)), 

                unmaskedvalue(el);



              case "mask":

                !function(elem) {

                    EventRuler.off(elem);

                    var isSupported = function(input, opts) {

                        var elementType = input.getAttribute("type"), isSupported = "INPUT" === input.tagName && -1 !== $.inArray(elementType, opts.supportsInputType) || input.isContentEditable || "TEXTAREA" === input.tagName;

                        if (!isSupported) if ("INPUT" === input.tagName) {

                            var el = document.createElement("input");

                            el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;

                        } else isSupported = "partial";

                        return !1 !== isSupported ? function(npt) {

                            function getter() {

                                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== getLastValidPosition() || !0 !== opts.nullable ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);

                            }

                            function setter(value) {

                                valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");

                            }

                            var valueGet, valueSet;

                            if (!npt.inputmask.__valueGet) {

                                if (!0 !== opts.noValuePatching) {

                                    if (Object.getOwnPropertyDescriptor) {

                                        "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === _typeof("test".__proto__) ? function(object) {

                                            return object.__proto__;

                                        } : function(object) {

                                            return object.constructor.prototype;

                                        });

                                        var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;

                                        valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get, 

                                        valueSet = valueProperty.set, Object.defineProperty(npt, "value", {

                                            get: getter,

                                            set: setter,

                                            configurable: !0

                                        })) : "INPUT" !== npt.tagName && (valueGet = function() {

                                            return this.textContent;

                                        }, valueSet = function(value) {

                                            this.textContent = value;

                                        }, Object.defineProperty(npt, "value", {

                                            get: getter,

                                            set: setter,

                                            configurable: !0

                                        }));

                                    } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"), 

                                    valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter), 

                                    npt.__defineSetter__("value", setter));

                                    npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;

                                }

                                npt.inputmask._valueGet = function(overruleRTL) {

                                    return isRTL && !0 !== overruleRTL ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);

                                }, npt.inputmask._valueSet = function(value, overruleRTL) {

                                    valueSet.call(this.el, null === value || value === undefined ? "" : !0 !== overruleRTL && isRTL ? value.split("").reverse().join("") : value);

                                }, valueGet === undefined && (valueGet = function() {

                                    return this.value;

                                }, valueSet = function(value) {

                                    this.value = value;

                                }, function(type) {

                                    if ($.valHooks && ($.valHooks[type] === undefined || !0 !== $.valHooks[type].inputmaskpatch)) {

                                        var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {

                                            return elem.value;

                                        }, valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {

                                            return elem.value = value, elem;

                                        };

                                        $.valHooks[type] = {

                                            get: function(elem) {

                                                if (elem.inputmask) {

                                                    if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();

                                                    var result = valhookGet(elem);

                                                    return -1 !== getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) || !0 !== opts.nullable ? result : "";

                                                }

                                                return valhookGet(elem);

                                            },

                                            set: function(elem, value) {

                                                var result, $elem = $(elem);

                                                return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"), 

                                                result;

                                            },

                                            inputmaskpatch: !0

                                        };

                                    }

                                }(npt.type), function(npt) {

                                    EventRuler.on(npt, "mouseenter", function(event) {

                                        var $input = $(this);

                                        this.inputmask._valueGet() !== getBuffer().join("") && $input.trigger("setvalue");

                                    });

                                }(npt));

                            }

                        }(input) : input.inputmask = undefined, isSupported;

                    }(elem, opts);

                    if (!1 !== isSupported && (el = elem, $el = $(el), -1 === (maxLength = el !== undefined ? el.maxLength : undefined) && (maxLength = undefined), 

                    !0 === opts.colorMask && initializeColorMask(el), android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, 

                    el.setAttribute("inputmode", opts.inputmode)), "rtfm" === opts.androidHack && (!0 !== opts.colorMask && initializeColorMask(el), 

                    el.type = "password")), !0 === isSupported && (EventRuler.on(el, "submit", EventHandlers.submitEvent), 

                    EventRuler.on(el, "reset", EventHandlers.resetEvent), EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent), 

                    EventRuler.on(el, "blur", EventHandlers.blurEvent), EventRuler.on(el, "focus", EventHandlers.focusEvent), 

                    EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent), !0 !== opts.colorMask && EventRuler.on(el, "click", EventHandlers.clickEvent), 

                    EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent), EventRuler.on(el, "paste", EventHandlers.pasteEvent), 

                    EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent), EventRuler.on(el, "drop", EventHandlers.pasteEvent), 

                    EventRuler.on(el, "cut", EventHandlers.cutEvent), EventRuler.on(el, "complete", opts.oncomplete), 

                    EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared), 

                    android || !0 === opts.inputEventOnly ? el.removeAttribute("maxLength") : (EventRuler.on(el, "keydown", EventHandlers.keydownEvent), 

                    EventRuler.on(el, "keypress", EventHandlers.keypressEvent)), EventRuler.on(el, "compositionstart", $.noop), 

                    EventRuler.on(el, "compositionupdate", $.noop), EventRuler.on(el, "compositionend", $.noop), 

                    EventRuler.on(el, "keyup", $.noop), EventRuler.on(el, "input", EventHandlers.inputFallBackEvent), 

                    EventRuler.on(el, "beforeinput", $.noop)), EventRuler.on(el, "setvalue", EventHandlers.setValueEvent), 

                    undoValue = getBufferTemplate().join(""), "" !== el.inputmask._valueGet(!0) || !1 === opts.clearMaskOnLostFocus || document.activeElement === el)) {

                        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, el.inputmask._valueGet(!0), opts) || el.inputmask._valueGet(!0) : el.inputmask._valueGet(!0);

                        "" !== initialValue && checkVal(el, !0, !1, isRTL ? initialValue.split("").reverse() : initialValue.split(""));

                        var buffer = getBuffer().slice();

                        undoValue = buffer.join(""), !1 === isComplete(buffer) && opts.clearIncomplete && resetMaskSet(), 

                        opts.clearMaskOnLostFocus && document.activeElement !== el && (-1 === getLastValidPosition() ? buffer = [] : clearOptionalTail(buffer)), 

                        writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));

                    }

                }(el);

                break;



              case "format":

                return valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(inputmask, actionObj.value, opts) || actionObj.value : actionObj.value).split(""), 

                checkVal(undefined, !0, !1, isRTL ? valueBuffer.reverse() : valueBuffer), actionObj.metadata ? {

                    value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),

                    metadata: maskScope.call(this, {

                        action: "getmetadata"

                    }, maskset, opts)

                } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");



              case "isValid":

                actionObj.value ? (valueBuffer = actionObj.value.split(""), checkVal(undefined, !0, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");

                for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--) ;

                return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");



              case "getemptymask":

                return getBufferTemplate().join("");



              case "remove":

                if (el && el.inputmask) {

                    $el = $(el), el.inputmask._valueSet(opts.autoUnmask ? unmaskedvalue(el) : el.inputmask._valueGet(!0)), 

                    EventRuler.off(el);

                    Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value") && el.inputmask.__valueGet && Object.defineProperty(el, "value", {

                        get: el.inputmask.__valueGet,

                        set: el.inputmask.__valueSet,

                        configurable: !0

                    }) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet), 

                    el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = undefined;

                }

                return el;



              case "getmetadata":

                if ($.isArray(maskset.metadata)) {

                    var maskTarget = getMaskTemplate(!0, 0, !1).join("");

                    return $.each(maskset.metadata, function(ndx, mtdt) {

                        if (mtdt.mask === maskTarget) return maskTarget = mtdt, !1;

                    }), maskTarget;

                }

                return maskset.metadata;

            }

        }

        var ua = navigator.userAgent, mobile = /mobile/i.test(ua), iemobile = /iemobile/i.test(ua), iphone = /iphone/i.test(ua) && !iemobile, android = /android/i.test(ua) && !iemobile;

        return Inputmask.prototype = {

            dataAttribute: "data-inputmask",

            defaults: {

                placeholder: "_",

                optionalmarker: {

                    start: "[",

                    end: "]"

                },

                quantifiermarker: {

                    start: "{",

                    end: "}"

                },

                groupmarker: {

                    start: "(",

                    end: ")"

                },

                alternatormarker: "|",

                escapeChar: "\\",

                mask: null,

                regex: null,

                oncomplete: $.noop,

                onincomplete: $.noop,

                oncleared: $.noop,

                repeat: 0,

                greedy: !0,

                autoUnmask: !1,

                removeMaskOnSubmit: !1,

                clearMaskOnLostFocus: !0,

                insertMode: !0,

                clearIncomplete: !1,

                alias: null,

                onKeyDown: $.noop,

                onBeforeMask: null,

                onBeforePaste: function(pastedValue, opts) {

                    return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask.call(this, pastedValue, opts) : pastedValue;

                },

                onBeforeWrite: null,

                onUnMask: null,

                showMaskOnFocus: !0,

                showMaskOnHover: !0,

                onKeyValidation: $.noop,

                skipOptionalPartCharacter: " ",

                numericInput: !1,

                rightAlign: !1,

                undoOnEscape: !0,

                radixPoint: "",

                radixPointDefinitionSymbol: undefined,

                groupSeparator: "",

                keepStatic: null,

                positionCaretOnTab: !0,

                tabThrough: !1,

                supportsInputType: [ "text", "tel", "password" ],

                ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229 ],

                isComplete: null,

                canClearPosition: $.noop,

                preValidation: null,

                postValidation: null,

                staticDefinitionSymbol: undefined,

                jitMasking: !1,

                nullable: !0,

                inputEventOnly: !1,

                noValuePatching: !1,

                positionCaretOnClick: "lvp",

                casing: null,

                inputmode: "verbatim",

                colorMask: !1,

                androidHack: !1,

                importDataAttributes: !0

            },

            definitions: {

                "9": {

                    validator: "[0-9１-９]",

                    cardinality: 1,

                    definitionSymbol: "*"

                },

                a: {

                    validator: "[A-Za-zА-яЁёÀ-ÿµ]",

                    cardinality: 1,

                    definitionSymbol: "*"

                },

                "*": {

                    validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]",

                    cardinality: 1

                }

            },

            aliases: {},

            masksCache: {},

            mask: function(elems) {

                function importAttributeOptions(npt, opts, userOptions, dataAttribute) {

                    if (!0 === opts.importDataAttributes) {

                        var option, dataoptions, optionData, p, importOption = function(option, optionData) {

                            null !== (optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option)) && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)), 

                            userOptions[option] = optionData);

                        }, attrOptions = npt.getAttribute(dataAttribute);

                        if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'), 

                        dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {

                            optionData = undefined;

                            for (p in dataoptions) if ("alias" === p.toLowerCase()) {

                                optionData = dataoptions[p];

                                break;

                            }

                        }

                        importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);

                        for (option in opts) {

                            if (dataoptions) {

                                optionData = undefined;

                                for (p in dataoptions) if (p.toLowerCase() === option.toLowerCase()) {

                                    optionData = dataoptions[p];

                                    break;

                                }

                            }

                            importOption(option, optionData);

                        }

                    }

                    return $.extend(!0, opts, userOptions), ("rtl" === npt.dir || opts.rightAlign) && (npt.style.textAlign = "right"), 

                    ("rtl" === npt.dir || opts.numericInput) && (npt.dir = "ltr", npt.removeAttribute("dir"), 

                    opts.isRTL = !0), opts;

                }

                var that = this;

                return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)), 

                elems = elems.nodeName ? [ elems ] : elems, $.each(elems, function(ndx, el) {

                    var scopedOpts = $.extend(!0, {}, that.opts);

                    importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);

                    var maskset = generateMaskSet(scopedOpts, that.noMasksCache);

                    maskset !== undefined && (el.inputmask !== undefined && (el.inputmask.opts.autoUnmask = !0, 

                    el.inputmask.remove()), el.inputmask = new Inputmask(undefined, undefined, !0), 

                    el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions), 

                    el.inputmask.isRTL = scopedOpts.isRTL || scopedOpts.numericInput, el.inputmask.el = el, 

                    el.inputmask.maskset = maskset, $.data(el, "_inputmask_opts", scopedOpts), maskScope.call(el.inputmask, {

                        action: "mask"

                    }));

                }), elems && elems[0] ? elems[0].inputmask || this : this;

            },

            option: function(options, noremask) {

                return "string" == typeof options ? this.opts[options] : "object" === (void 0 === options ? "undefined" : _typeof(options)) ? ($.extend(this.userOptions, options), 

                this.el && !0 !== noremask && this.mask(this.el), this) : void 0;

            },

            unmaskedvalue: function(value) {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "unmaskedvalue",

                    value: value

                });

            },

            remove: function() {

                return maskScope.call(this, {

                    action: "remove"

                });

            },

            getemptymask: function() {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "getemptymask"

                });

            },

            hasMaskedValue: function() {

                return !this.opts.autoUnmask;

            },

            isComplete: function() {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "isComplete"

                });

            },

            getmetadata: function() {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "getmetadata"

                });

            },

            isValid: function(value) {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "isValid",

                    value: value

                });

            },

            format: function(value, metadata) {

                return this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache), 

                maskScope.call(this, {

                    action: "format",

                    value: value,

                    metadata: metadata

                });

            },

            analyseMask: function(mask, regexMask, opts) {

                function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {

                    this.matches = [], this.openGroup = isGroup || !1, this.alternatorGroup = !1, this.isGroup = isGroup || !1, 

                    this.isOptional = isOptional || !1, this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1, 

                    this.quantifier = {

                        min: 1,

                        max: 1

                    };

                }

                function insertTestDefinition(mtoken, element, position) {

                    position = position !== undefined ? position : mtoken.matches.length;

                    var prevMatch = mtoken.matches[position - 1];

                    if (regexMask) 0 === element.indexOf("[") || escaped && /\\d|\\s|\\w]/i.test(element) || "." === element ? mtoken.matches.splice(position++, 0, {

                        fn: new RegExp(element, opts.casing ? "i" : ""),

                        cardinality: 1,

                        optionality: mtoken.isOptional,

                        newBlockMarker: prevMatch === undefined || prevMatch.def !== element,

                        casing: null,

                        def: element,

                        placeholder: undefined,

                        nativeDef: element

                    }) : (escaped && (element = element[element.length - 1]), $.each(element.split(""), function(ndx, lmnt) {

                        prevMatch = mtoken.matches[position - 1], mtoken.matches.splice(position++, 0, {

                            fn: null,

                            cardinality: 0,

                            optionality: mtoken.isOptional,

                            newBlockMarker: prevMatch === undefined || prevMatch.def !== lmnt && null !== prevMatch.fn,

                            casing: null,

                            def: opts.staticDefinitionSymbol || lmnt,

                            placeholder: opts.staticDefinitionSymbol !== undefined ? lmnt : undefined,

                            nativeDef: lmnt

                        });

                    })), escaped = !1; else {

                        var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];

                        if (maskdef && !escaped) {

                            for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {

                                var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [], validator = prevalidator.validator, cardinality = prevalidator.cardinality;

                                mtoken.matches.splice(position++, 0, {

                                    fn: validator ? "string" == typeof validator ? new RegExp(validator, opts.casing ? "i" : "") : new function() {

                                        this.test = validator;

                                    }() : new RegExp("."),

                                    cardinality: cardinality || 1,

                                    optionality: mtoken.isOptional,

                                    newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),

                                    casing: maskdef.casing,

                                    def: maskdef.definitionSymbol || element,

                                    placeholder: maskdef.placeholder,

                                    nativeDef: element

                                }), prevMatch = mtoken.matches[position - 1];

                            }

                            mtoken.matches.splice(position++, 0, {

                                fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator, opts.casing ? "i" : "") : new function() {

                                    this.test = maskdef.validator;

                                }() : new RegExp("."),

                                cardinality: maskdef.cardinality,

                                optionality: mtoken.isOptional,

                                newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),

                                casing: maskdef.casing,

                                def: maskdef.definitionSymbol || element,

                                placeholder: maskdef.placeholder,

                                nativeDef: element

                            });

                        } else mtoken.matches.splice(position++, 0, {

                            fn: null,

                            cardinality: 0,

                            optionality: mtoken.isOptional,

                            newBlockMarker: prevMatch === undefined || prevMatch.def !== element && null !== prevMatch.fn,

                            casing: null,

                            def: opts.staticDefinitionSymbol || element,

                            placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,

                            nativeDef: element

                        }), escaped = !1;

                    }

                }

                function verifyGroupMarker(maskToken) {

                    maskToken && maskToken.matches && $.each(maskToken.matches, function(ndx, token) {

                        var nextToken = maskToken.matches[ndx + 1];

                        (nextToken === undefined || nextToken.matches === undefined || !1 === nextToken.isQuantifier) && token && token.isGroup && (token.isGroup = !1, 

                        regexMask || (insertTestDefinition(token, opts.groupmarker.start, 0), !0 !== token.openGroup && insertTestDefinition(token, opts.groupmarker.end))), 

                        verifyGroupMarker(token);

                    });

                }

                function defaultCase() {

                    if (openenings.length > 0) {

                        if (currentOpeningToken = openenings[openenings.length - 1], insertTestDefinition(currentOpeningToken, m), 

                        currentOpeningToken.isAlternator) {

                            alternator = openenings.pop();

                            for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;

                            openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);

                        }

                    } else insertTestDefinition(currentToken, m);

                }

                function reverseTokens(maskToken) {

                    maskToken.matches = maskToken.matches.reverse();

                    for (var match in maskToken.matches) if (maskToken.matches.hasOwnProperty(match)) {

                        var intMatch = parseInt(match);

                        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {

                            var qt = maskToken.matches[match];

                            maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);

                        }

                        maskToken.matches[match].matches !== undefined ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = function(st) {

                            return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start), 

                            st;

                        }(maskToken.matches[match]);

                    }

                    return maskToken;

                }

                var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, regexTokenizer = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = [];

                for (regexMask && (opts.optionalmarker.start = undefined, opts.optionalmarker.end = undefined); match = regexMask ? regexTokenizer.exec(mask) : tokenizer.exec(mask); ) {

                    if (m = match[0], regexMask) switch (m.charAt(0)) {

                      case "?":

                        m = "{0,1}";

                        break;



                      case "+":

                      case "*":

                        m = "{" + m + "}";

                    }

                    if (escaped) defaultCase(); else switch (m.charAt(0)) {

                      case opts.escapeChar:

                        escaped = !0, regexMask && defaultCase();

                        break;



                      case opts.optionalmarker.end:

                      case opts.groupmarker.end:

                        if (openingToken = openenings.pop(), openingToken.openGroup = !1, openingToken !== undefined) if (openenings.length > 0) {

                            if ((currentOpeningToken = openenings[openenings.length - 1]).matches.push(openingToken), 

                            currentOpeningToken.isAlternator) {

                                alternator = openenings.pop();

                                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1, 

                                alternator.matches[mndx].alternatorGroup = !1;

                                openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1]).matches.push(alternator) : currentToken.matches.push(alternator);

                            }

                        } else currentToken.matches.push(openingToken); else defaultCase();

                        break;



                      case opts.optionalmarker.start:

                        openenings.push(new MaskToken(!1, !0));

                        break;



                      case opts.groupmarker.start:

                        openenings.push(new MaskToken(!0));

                        break;



                      case opts.quantifiermarker.start:

                        var quantifier = new MaskToken(!1, !1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);

                        if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {

                            min: mq0,

                            max: mq1

                        }, openenings.length > 0) {

                            var matches = openenings[openenings.length - 1].matches;

                            (match = matches.pop()).isGroup || ((groupToken = new MaskToken(!0)).matches.push(match), 

                            match = groupToken), matches.push(match), matches.push(quantifier);

                        } else (match = currentToken.matches.pop()).isGroup || (regexMask && null === match.fn && "." === match.def && (match.fn = new RegExp(match.def, opts.casing ? "i" : "")), 

                        (groupToken = new MaskToken(!0)).matches.push(match), match = groupToken), currentToken.matches.push(match), 

                        currentToken.matches.push(quantifier);

                        break;



                      case opts.alternatormarker:

                        if (openenings.length > 0) {

                            var subToken = (currentOpeningToken = openenings[openenings.length - 1]).matches[currentOpeningToken.matches.length - 1];

                            lastMatch = currentOpeningToken.openGroup && (subToken.matches === undefined || !1 === subToken.isGroup && !1 === subToken.isAlternator) ? openenings.pop() : currentOpeningToken.matches.pop();

                        } else lastMatch = currentToken.matches.pop();

                        if (lastMatch.isAlternator) openenings.push(lastMatch); else if (lastMatch.alternatorGroup ? (alternator = openenings.pop(), 

                        lastMatch.alternatorGroup = !1) : alternator = new MaskToken(!1, !1, !1, !0), alternator.matches.push(lastMatch), 

                        openenings.push(alternator), lastMatch.openGroup) {

                            lastMatch.openGroup = !1;

                            var alternatorGroup = new MaskToken(!0);

                            alternatorGroup.alternatorGroup = !0, openenings.push(alternatorGroup);

                        }

                        break;



                      default:

                        defaultCase();

                    }

                }

                for (;openenings.length > 0; ) openingToken = openenings.pop(), currentToken.matches.push(openingToken);

                return currentToken.matches.length > 0 && (verifyGroupMarker(currentToken), maskTokens.push(currentToken)), 

                (opts.numericInput || opts.isRTL) && reverseTokens(maskTokens[0]), maskTokens;

            }

        }, Inputmask.extendDefaults = function(options) {

            $.extend(!0, Inputmask.prototype.defaults, options);

        }, Inputmask.extendDefinitions = function(definition) {

            $.extend(!0, Inputmask.prototype.definitions, definition);

        }, Inputmask.extendAliases = function(alias) {

            $.extend(!0, Inputmask.prototype.aliases, alias);

        }, Inputmask.format = function(value, options, metadata) {

            return Inputmask(options).format(value, metadata);

        }, Inputmask.unmask = function(value, options) {

            return Inputmask(options).unmaskedvalue(value);

        }, Inputmask.isValid = function(value, options) {

            return Inputmask(options).isValid(value);

        }, Inputmask.remove = function(elems) {

            $.each(elems, function(ndx, el) {

                el.inputmask && el.inputmask.remove();

            });

        }, Inputmask.escapeRegex = function(str) {

            var specials = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];

            return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");

        }, Inputmask.keyCode = {

            ALT: 18,

            BACKSPACE: 8,

            BACKSPACE_SAFARI: 127,

            CAPS_LOCK: 20,

            COMMA: 188,

            COMMAND: 91,

            COMMAND_LEFT: 91,

            COMMAND_RIGHT: 93,

            CONTROL: 17,

            DELETE: 46,

            DOWN: 40,

            END: 35,

            ENTER: 13,

            ESCAPE: 27,

            HOME: 36,

            INSERT: 45,

            LEFT: 37,

            MENU: 93,

            NUMPAD_ADD: 107,

            NUMPAD_DECIMAL: 110,

            NUMPAD_DIVIDE: 111,

            NUMPAD_ENTER: 108,

            NUMPAD_MULTIPLY: 106,

            NUMPAD_SUBTRACT: 109,

            PAGE_DOWN: 34,

            PAGE_UP: 33,

            PERIOD: 190,

            RIGHT: 39,

            SHIFT: 16,

            SPACE: 32,

            TAB: 9,

            UP: 38,

            WINDOWS: 91,

            X: 88

        }, Inputmask;

    });

}, function(module, exports) {

    module.exports = jQuery;

}, function(module, exports, __webpack_require__) {

    "use strict";

    function _interopRequireDefault(obj) {

        return obj && obj.__esModule ? obj : {

            default: obj

        };

    }

    __webpack_require__(4), __webpack_require__(9), __webpack_require__(12), __webpack_require__(13), 

    __webpack_require__(14), __webpack_require__(15);

    var _inputmask2 = _interopRequireDefault(__webpack_require__(1)), _inputmask4 = _interopRequireDefault(__webpack_require__(0)), _jquery2 = _interopRequireDefault(__webpack_require__(2));

    _inputmask4.default === _jquery2.default && __webpack_require__(16), window.Inputmask = _inputmask2.default;

}, function(module, exports, __webpack_require__) {

    var content = __webpack_require__(5);

    "string" == typeof content && (content = [ [ module.i, content, "" ] ]);

    var options = {

        hmr: !0

    };

    options.transform = void 0;

    __webpack_require__(7)(content, options);

    content.locals && (module.exports = content.locals);

}, function(module, exports, __webpack_require__) {

    (module.exports = __webpack_require__(6)(void 0)).push([ module.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", "" ]);

}, function(module, exports) {

    function cssWithMappingToString(item, useSourceMap) {

        var content = item[1] || "", cssMapping = item[3];

        if (!cssMapping) return content;

        if (useSourceMap && "function" == typeof btoa) {

            var sourceMapping = toComment(cssMapping), sourceURLs = cssMapping.sources.map(function(source) {

                return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";

            });

            return [ content ].concat(sourceURLs).concat([ sourceMapping ]).join("\n");

        }

        return [ content ].join("\n");

    }

    function toComment(sourceMap) {

        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))) + " */";

    }

    module.exports = function(useSourceMap) {

        var list = [];

        return list.toString = function() {

            return this.map(function(item) {

                var content = cssWithMappingToString(item, useSourceMap);

                return item[2] ? "@media " + item[2] + "{" + content + "}" : content;

            }).join("");

        }, list.i = function(modules, mediaQuery) {

            "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);

            for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {

                var id = this[i][0];

                "number" == typeof id && (alreadyImportedModules[id] = !0);

            }

            for (i = 0; i < modules.length; i++) {

                var item = modules[i];

                "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 

                list.push(item));

            }

        }, list;

    };

}, function(module, exports, __webpack_require__) {

    function addStylesToDom(styles, options) {

        for (var i = 0; i < styles.length; i++) {

            var item = styles[i], domStyle = stylesInDom[item.id];

            if (domStyle) {

                domStyle.refs++;

                for (j = 0; j < domStyle.parts.length; j++) domStyle.parts[j](item.parts[j]);

                for (;j < item.parts.length; j++) domStyle.parts.push(addStyle(item.parts[j], options));

            } else {

                for (var parts = [], j = 0; j < item.parts.length; j++) parts.push(addStyle(item.parts[j], options));

                stylesInDom[item.id] = {

                    id: item.id,

                    refs: 1,

                    parts: parts

                };

            }

        }

    }

    function listToStyles(list, options) {

        for (var styles = [], newStyles = {}, i = 0; i < list.length; i++) {

            var item = list[i], id = options.base ? item[0] + options.base : item[0], part = {

                css: item[1],

                media: item[2],

                sourceMap: item[3]

            };

            newStyles[id] ? newStyles[id].parts.push(part) : styles.push(newStyles[id] = {

                id: id,

                parts: [ part ]

            });

        }

        return styles;

    }

    function insertStyleElement(options, style) {

        var target = getElement(options.insertInto);

        if (!target) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");

        var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

        if ("top" === options.insertAt) lastStyleElementInsertedAtTop ? lastStyleElementInsertedAtTop.nextSibling ? target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling) : target.appendChild(style) : target.insertBefore(style, target.firstChild), 

        stylesInsertedAtTop.push(style); else if ("bottom" === options.insertAt) target.appendChild(style); else {

            if ("object" != typeof options.insertAt || !options.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");

            var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);

            target.insertBefore(style, nextSibling);

        }

    }

    function removeStyleElement(style) {

        if (null === style.parentNode) return !1;

        style.parentNode.removeChild(style);

        var idx = stylesInsertedAtTop.indexOf(style);

        idx >= 0 && stylesInsertedAtTop.splice(idx, 1);

    }

    function createStyleElement(options) {

        var style = document.createElement("style");

        return options.attrs.type = "text/css", addAttrs(style, options.attrs), insertStyleElement(options, style), 

        style;

    }

    function createLinkElement(options) {

        var link = document.createElement("link");

        return options.attrs.type = "text/css", options.attrs.rel = "stylesheet", addAttrs(link, options.attrs), 

        insertStyleElement(options, link), link;

    }

    function addAttrs(el, attrs) {

        Object.keys(attrs).forEach(function(key) {

            el.setAttribute(key, attrs[key]);

        });

    }

    function addStyle(obj, options) {

        var style, update, remove, result;

        if (options.transform && obj.css) {

            if (!(result = options.transform(obj.css))) return function() {};

            obj.css = result;

        }

        if (options.singleton) {

            var styleIndex = singletonCounter++;

            style = singleton || (singleton = createStyleElement(options)), update = applyToSingletonTag.bind(null, style, styleIndex, !1), 

            remove = applyToSingletonTag.bind(null, style, styleIndex, !0);

        } else obj.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (style = createLinkElement(options), 

        update = updateLink.bind(null, style, options), remove = function() {

            removeStyleElement(style), style.href && URL.revokeObjectURL(style.href);

        }) : (style = createStyleElement(options), update = applyToTag.bind(null, style), 

        remove = function() {

            removeStyleElement(style);

        });

        return update(obj), function(newObj) {

            if (newObj) {

                if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) return;

                update(obj = newObj);

            } else remove();

        };

    }

    function applyToSingletonTag(style, index, remove, obj) {

        var css = remove ? "" : obj.css;

        if (style.styleSheet) style.styleSheet.cssText = replaceText(index, css); else {

            var cssNode = document.createTextNode(css), childNodes = style.childNodes;

            childNodes[index] && style.removeChild(childNodes[index]), childNodes.length ? style.insertBefore(cssNode, childNodes[index]) : style.appendChild(cssNode);

        }

    }

    function applyToTag(style, obj) {

        var css = obj.css, media = obj.media;

        if (media && style.setAttribute("media", media), style.styleSheet) style.styleSheet.cssText = css; else {

            for (;style.firstChild; ) style.removeChild(style.firstChild);

            style.appendChild(document.createTextNode(css));

        }

    }

    function updateLink(link, options, obj) {

        var css = obj.css, sourceMap = obj.sourceMap, autoFixUrls = void 0 === options.convertToAbsoluteUrls && sourceMap;

        (options.convertToAbsoluteUrls || autoFixUrls) && (css = fixUrls(css)), sourceMap && (css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */");

        var blob = new Blob([ css ], {

            type: "text/css"

        }), oldSrc = link.href;

        link.href = URL.createObjectURL(blob), oldSrc && URL.revokeObjectURL(oldSrc);

    }

    var stylesInDom = {}, isOldIE = function(fn) {

        var memo;

        return function() {

            return void 0 === memo && (memo = fn.apply(this, arguments)), memo;

        };

    }(function() {

        return window && document && document.all && !window.atob;

    }), getElement = function(fn) {

        var memo = {};

        return function(selector) {

            if (void 0 === memo[selector]) {

                var styleTarget = fn.call(this, selector);

                if (styleTarget instanceof window.HTMLIFrameElement) try {

                    styleTarget = styleTarget.contentDocument.head;

                } catch (e) {

                    styleTarget = null;

                }

                memo[selector] = styleTarget;

            }

            return memo[selector];

        };

    }(function(target) {

        return document.querySelector(target);

    }), singleton = null, singletonCounter = 0, stylesInsertedAtTop = [], fixUrls = __webpack_require__(8);

    module.exports = function(list, options) {

        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");

        (options = options || {}).attrs = "object" == typeof options.attrs ? options.attrs : {}, 

        options.singleton || (options.singleton = isOldIE()), options.insertInto || (options.insertInto = "head"), 

        options.insertAt || (options.insertAt = "bottom");

        var styles = listToStyles(list, options);

        return addStylesToDom(styles, options), function(newList) {

            for (var mayRemove = [], i = 0; i < styles.length; i++) {

                var item = styles[i];

                (domStyle = stylesInDom[item.id]).refs--, mayRemove.push(domStyle);

            }

            newList && addStylesToDom(listToStyles(newList, options), options);

            for (i = 0; i < mayRemove.length; i++) {

                var domStyle = mayRemove[i];

                if (0 === domStyle.refs) {

                    for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                    delete stylesInDom[domStyle.id];

                }

            }

        };

    };

    var replaceText = function() {

        var textStore = [];

        return function(index, replacement) {

            return textStore[index] = replacement, textStore.filter(Boolean).join("\n");

        };

    }();

}, function(module, exports) {

    module.exports = function(css) {

        var location = "undefined" != typeof window && window.location;

        if (!location) throw new Error("fixUrls requires window.location");

        if (!css || "string" != typeof css) return css;

        var baseUrl = location.protocol + "//" + location.host, currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

        return css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {

            var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function(o, $1) {

                return $1;

            }).replace(/^'(.*)'$/, function(o, $1) {

                return $1;

            });

            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) return fullMatch;

            var newUrl;

            return newUrl = 0 === unquotedOrigUrl.indexOf("//") ? unquotedOrigUrl : 0 === unquotedOrigUrl.indexOf("/") ? baseUrl + unquotedOrigUrl : currentDir + unquotedOrigUrl.replace(/^\.\//, ""), 

            "url(" + JSON.stringify(newUrl) + ")";

        });

    };

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask) {

        function isLeapYear(year) {

            return isNaN(year) || 29 === new Date(year, 2, 0).getDate();

        }

        return Inputmask.extendAliases({

            "dd/mm/yyyy": {

                mask: "1/2/y",

                placeholder: "dd/mm/yyyy",

                regex: {

                    val1pre: new RegExp("[0-3]"),

                    val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),

                    val2pre: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");

                    },

                    val2: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");

                    }

                },

                leapday: "29/02/",

                separator: "/",

                yearrange: {

                    minyear: 1900,

                    maxyear: 2099

                },

                isInYearRange: function(chrs, minyear, maxyear) {

                    if (isNaN(chrs)) return !1;

                    var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))), enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));

                    return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);

                },

                determinebaseyear: function(minyear, maxyear, hint) {

                    var currentyear = new Date().getFullYear();

                    if (minyear > currentyear) return minyear;

                    if (maxyear < currentyear) {

                        for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint; ) maxYearPrefix--;

                        var maxxYear = maxYearPrefix + maxYearPostfix;

                        return minyear > maxxYear ? minyear : maxxYear;

                    }

                    if (minyear <= currentyear && currentyear <= maxyear) {

                        for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint; ) currentYearPrefix--;

                        var currentYearAndHint = currentYearPrefix + hint;

                        return currentYearAndHint < minyear ? minyear : currentYearAndHint;

                    }

                    return currentyear;

                },

                onKeyDown: function(e, buffer, caretPos, opts) {

                    var $input = $(this);

                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {

                        var today = new Date();

                        $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()), 

                        $input.trigger("setvalue");

                    }

                },

                getFrontValue: function(mask, buffer, opts) {

                    for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {

                        var definition = opts.definitions[mask.charAt(i)];

                        definition ? (start += length, length = definition.cardinality) : length++;

                    }

                    return buffer.join("").substr(start, length);

                },

                postValidation: function(buffer, currentResult, opts) {

                    var dayMonthValue, year, bufferStr = buffer.join("");

                    return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substring(4, 10)) : (year = bufferStr.substring(6, 10), 

                    dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));

                },

                definitions: {

                    "1": {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            var isValid = opts.regex.val1.test(chrs);

                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 

                            {

                                refreshFromBuffer: {

                                    start: pos - 1,

                                    end: pos

                                },

                                pos: pos,

                                c: chrs.charAt(0)

                            });

                        },

                        cardinality: 2,

                        prevalidator: [ {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                var pchrs = chrs;

                                isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);

                                var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);

                                if (isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), 

                                !strict && !isValid) {

                                    if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs, 

                                    maskset.buffer[++pos] = "0", {

                                        pos: pos,

                                        c: "0"

                                    };

                                    if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0", 

                                    pos++, {

                                        pos: pos

                                    };

                                }

                                return isValid;

                            },

                            cardinality: 1

                        } ]

                    },

                    "2": {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);

                            -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);

                            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);

                            return strict || isValid || chrs.charAt(1) !== opts.separator && -1 === "-./".indexOf(chrs.charAt(1)) || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", 

                            {

                                refreshFromBuffer: {

                                    start: pos - 1,

                                    end: pos

                                },

                                pos: pos,

                                c: chrs.charAt(0)

                            });

                        },

                        cardinality: 2,

                        prevalidator: [ {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);

                                var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);

                                -1 !== frontValue.indexOf(opts.placeholder[0]) && (frontValue = "01" + opts.separator);

                                var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);

                                return isValid && maskset.validPositions[pos] && (opts.regex.val2(opts.separator).test(chrs + maskset.validPositions[pos].input) || (maskset.validPositions[pos].input = "0" === chrs ? "1" : "0")), 

                                strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 

                                pos++, {

                                    pos: pos

                                });

                            },

                            cardinality: 1

                        } ]

                    },

                    y: {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);

                        },

                        cardinality: 4,

                        prevalidator: [ {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);

                                if (!strict && !isValid) {

                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);

                                    if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 

                                    {

                                        pos: pos

                                    };

                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2), 

                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), 

                                    maskset.buffer[pos++] = yearPrefix.charAt(1), {

                                        pos: pos

                                    };

                                }

                                return isValid;

                            },

                            cardinality: 1

                        }, {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);

                                if (!strict && !isValid) {

                                    var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);

                                    if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), 

                                    {

                                        pos: pos

                                    };

                                    if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2), 

                                    isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0), 

                                    maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), 

                                    {

                                        refreshFromBuffer: {

                                            start: pos - 3,

                                            end: pos

                                        },

                                        pos: pos

                                    };

                                }

                                return isValid;

                            },

                            cardinality: 2

                        }, {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);

                            },

                            cardinality: 3

                        } ]

                    }

                },

                insertMode: !1,

                autoUnmask: !1

            },

            "mm/dd/yyyy": {

                placeholder: "mm/dd/yyyy",

                alias: "dd/mm/yyyy",

                regex: {

                    val2pre: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");

                    },

                    val2: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");

                    },

                    val1pre: new RegExp("[01]"),

                    val1: new RegExp("0[1-9]|1[012]")

                },

                leapday: "02/29/",

                onKeyDown: function(e, buffer, caretPos, opts) {

                    var $input = $(this);

                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {

                        var today = new Date();

                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 

                        $input.trigger("setvalue");

                    }

                }

            },

            "yyyy/mm/dd": {

                mask: "y/1/2",

                placeholder: "yyyy/mm/dd",

                alias: "mm/dd/yyyy",

                leapday: "/02/29",

                onKeyDown: function(e, buffer, caretPos, opts) {

                    var $input = $(this);

                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {

                        var today = new Date();

                        $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()), 

                        $input.trigger("setvalue");

                    }

                }

            },

            "dd.mm.yyyy": {

                mask: "1.2.y",

                placeholder: "dd.mm.yyyy",

                leapday: "29.02.",

                separator: ".",

                alias: "dd/mm/yyyy"

            },

            "dd-mm-yyyy": {

                mask: "1-2-y",

                placeholder: "dd-mm-yyyy",

                leapday: "29-02-",

                separator: "-",

                alias: "dd/mm/yyyy"

            },

            "mm.dd.yyyy": {

                mask: "1.2.y",

                placeholder: "mm.dd.yyyy",

                leapday: "02.29.",

                separator: ".",

                alias: "mm/dd/yyyy"

            },

            "mm-dd-yyyy": {

                mask: "1-2-y",

                placeholder: "mm-dd-yyyy",

                leapday: "02-29-",

                separator: "-",

                alias: "mm/dd/yyyy"

            },

            "yyyy.mm.dd": {

                mask: "y.1.2",

                placeholder: "yyyy.mm.dd",

                leapday: ".02.29",

                separator: ".",

                alias: "yyyy/mm/dd"

            },

            "yyyy-mm-dd": {

                mask: "y-1-2",

                placeholder: "yyyy-mm-dd",

                leapday: "-02-29",

                separator: "-",

                alias: "yyyy/mm/dd"

            },

            datetime: {

                mask: "1/2/y h:s",

                placeholder: "dd/mm/yyyy hh:mm",

                alias: "dd/mm/yyyy",

                regex: {

                    hrspre: new RegExp("[012]"),

                    hrs24: new RegExp("2[0-4]|1[3-9]"),

                    hrs: new RegExp("[01][0-9]|2[0-4]"),

                    ampm: new RegExp("^[a|p|A|P][m|M]"),

                    mspre: new RegExp("[0-5]"),

                    ms: new RegExp("[0-5][0-9]")

                },

                timeseparator: ":",

                hourFormat: "24",

                definitions: {

                    h: {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0", 

                            maskset.buffer[pos] = "0", {

                                refreshFromBuffer: {

                                    start: pos - 1,

                                    end: pos

                                },

                                c: "0"

                            };

                            var isValid = opts.regex.hrs.test(chrs);

                            if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || -1 !== "-.:".indexOf(chrs.charAt(1))) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0", 

                            maskset.buffer[pos] = chrs.charAt(0), pos++, {

                                refreshFromBuffer: {

                                    start: pos - 2,

                                    end: pos

                                },

                                pos: pos,

                                c: opts.timeseparator

                            };

                            if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {

                                var tmp = parseInt(chrs, 10);

                                return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p", 

                                maskset.buffer[pos + 6] = "m"), (tmp -= 12) < 10 ? (maskset.buffer[pos] = tmp.toString(), 

                                maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1), 

                                maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {

                                    refreshFromBuffer: {

                                        start: pos - 1,

                                        end: pos + 6

                                    },

                                    c: maskset.buffer[pos]

                                };

                            }

                            return isValid;

                        },

                        cardinality: 2,

                        prevalidator: [ {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                var isValid = opts.regex.hrspre.test(chrs);

                                return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 

                                pos++, {

                                    pos: pos

                                });

                            },

                            cardinality: 1

                        } ]

                    },

                    s: {

                        validator: "[0-5][0-9]",

                        cardinality: 2,

                        prevalidator: [ {

                            validator: function(chrs, maskset, pos, strict, opts) {

                                var isValid = opts.regex.mspre.test(chrs);

                                return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0", 

                                pos++, {

                                    pos: pos

                                });

                            },

                            cardinality: 1

                        } ]

                    },

                    t: {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            return opts.regex.ampm.test(chrs + "m");

                        },

                        casing: "lower",

                        cardinality: 1

                    }

                },

                insertMode: !1,

                autoUnmask: !1

            },

            datetime12: {

                mask: "1/2/y h:s t\\m",

                placeholder: "dd/mm/yyyy hh:mm xm",

                alias: "datetime",

                hourFormat: "12"

            },

            "mm/dd/yyyy hh:mm xm": {

                mask: "1/2/y h:s t\\m",

                placeholder: "mm/dd/yyyy hh:mm xm",

                alias: "datetime12",

                regex: {

                    val2pre: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");

                    },

                    val2: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");

                    },

                    val1pre: new RegExp("[01]"),

                    val1: new RegExp("0[1-9]|1[012]")

                },

                leapday: "02/29/",

                onKeyDown: function(e, buffer, caretPos, opts) {

                    var $input = $(this);

                    if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {

                        var today = new Date();

                        $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()), 

                        $input.trigger("setvalue");

                    }

                }

            },

            "hh:mm t": {

                mask: "h:s t\\m",

                placeholder: "hh:mm xm",

                alias: "datetime",

                hourFormat: "12"

            },

            "h:s t": {

                mask: "h:s t\\m",

                placeholder: "hh:mm xm",

                alias: "datetime",

                hourFormat: "12"

            },

            "hh:mm:ss": {

                mask: "h:s:s",

                placeholder: "hh:mm:ss",

                alias: "datetime",

                autoUnmask: !1

            },

            "hh:mm": {

                mask: "h:s",

                placeholder: "hh:mm",

                alias: "datetime",

                autoUnmask: !1

            },

            date: {

                alias: "dd/mm/yyyy"

            },

            "mm/yyyy": {

                mask: "1/y",

                placeholder: "mm/yyyy",

                leapday: "donotuse",

                separator: "/",

                alias: "mm/dd/yyyy"

            },

            shamsi: {

                regex: {

                    val2pre: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");

                    },

                    val2: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");

                    },

                    val1pre: new RegExp("[01]"),

                    val1: new RegExp("0[1-9]|1[012]")

                },

                yearrange: {

                    minyear: 1300,

                    maxyear: 1499

                },

                mask: "y/1/2",

                leapday: "/12/30",

                placeholder: "yyyy/mm/dd",

                alias: "mm/dd/yyyy",

                clearIncomplete: !0

            },

            "yyyy-mm-dd hh:mm:ss": {

                mask: "y-1-2 h:s:s",

                placeholder: "yyyy-mm-dd hh:mm:ss",

                alias: "datetime",

                separator: "-",

                leapday: "-02-29",

                regex: {

                    val2pre: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");

                    },

                    val2: function(separator) {

                        var escapedSeparator = Inputmask.escapeRegex.call(this, separator);

                        return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");

                    },

                    val1pre: new RegExp("[01]"),

                    val1: new RegExp("0[1-9]|1[012]")

                },

                onKeyDown: function(e, buffer, caretPos, opts) {}

            }

        }), Inputmask;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {

        return window;

    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function() {

        return document;

    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask) {

        return Inputmask.extendDefinitions({

            A: {

                validator: "[A-Za-zА-яЁёÀ-ÿµ]",

                cardinality: 1,

                casing: "upper"

            },

            "&": {

                validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",

                cardinality: 1,

                casing: "upper"

            },

            "#": {

                validator: "[0-9A-Fa-f]",

                cardinality: 1,

                casing: "upper"

            }

        }), Inputmask.extendAliases({

            url: {

                definitions: {

                    i: {

                        validator: ".",

                        cardinality: 1

                    }

                },

                mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",

                insertMode: !1,

                autoUnmask: !1,

                inputmode: "url"

            },

            ip: {

                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",

                definitions: {

                    i: {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs, 

                            chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs, 

                            new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);

                        },

                        cardinality: 1

                    }

                },

                onUnMask: function(maskedValue, unmaskedValue, opts) {

                    return maskedValue;

                },

                inputmode: "numeric"

            },

            email: {

                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",

                greedy: !1,

                onBeforePaste: function(pastedValue, opts) {

                    return (pastedValue = pastedValue.toLowerCase()).replace("mailto:", "");

                },

                definitions: {

                    "*": {

                        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",

                        cardinality: 1,

                        casing: "lower"

                    },

                    "-": {

                        validator: "[0-9A-Za-z-]",

                        cardinality: 1,

                        casing: "lower"

                    }

                },

                onUnMask: function(maskedValue, unmaskedValue, opts) {

                    return maskedValue;

                },

                inputmode: "email"

            },

            mac: {

                mask: "##:##:##:##:##:##"

            },

            vin: {

                mask: "V{13}9{4}",

                definitions: {

                    V: {

                        validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",

                        cardinality: 1,

                        casing: "upper"

                    }

                },

                clearIncomplete: !0,

                autoUnmask: !0

            }

        }), Inputmask;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask, undefined) {

        function autoEscape(txt, opts) {

            for (var escapedTxt = "", i = 0; i < txt.length; i++) Inputmask.prototype.definitions[txt.charAt(i)] || opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? escapedTxt += "\\" + txt.charAt(i) : escapedTxt += txt.charAt(i);

            return escapedTxt;

        }

        return Inputmask.extendAliases({

            numeric: {

                mask: function(opts) {

                    if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat), 

                    opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""), 

                    " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = undefined), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator, 

                    opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)), 

                    isFinite(opts.integerDigits))) {

                        var seps = Math.floor(opts.integerDigits / opts.groupSize), mod = opts.integerDigits % opts.groupSize;

                        opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps), 

                        opts.integerDigits < 1 && (opts.integerDigits = "*");

                    }

                    opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)), 

                    "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && !1 === opts.integerOptional && (opts.positionCaretOnClick = "lvp"), 

                    opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~", 

                    !0 === opts.numericInput && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick, 

                    opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);

                    var mask = "[+]";

                    if (mask += autoEscape(opts.prefix, opts), !0 === opts.integerOptional ? mask += "~{1," + opts.integerDigits + "}" : mask += "~{" + opts.integerDigits + "}", 

                    opts.digits !== undefined) {

                        opts.radixPointDefinitionSymbol = opts.decimalProtect ? ":" : opts.radixPoint;

                        var dq = opts.digits.toString().split(",");

                        isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (opts.digitsOptional ? mask += "[" + opts.radixPointDefinitionSymbol + ";{1," + opts.digits + "}]" : mask += opts.radixPointDefinitionSymbol + ";{" + opts.digits + "}");

                    }

                    return mask += autoEscape(opts.suffix, opts), mask += "[-]", opts.greedy = !1, mask;

                },

                placeholder: "",

                greedy: !1,

                digits: "*",

                digitsOptional: !0,

                enforceDigitsOnBlur: !1,

                radixPoint: ".",

                positionCaretOnClick: "radixFocus",

                groupSize: 3,

                groupSeparator: "",

                autoGroup: !1,

                allowMinus: !0,

                negationSymbol: {

                    front: "-",

                    back: ""

                },

                integerDigits: "+",

                integerOptional: !0,

                prefix: "",

                suffix: "",

                rightAlign: !0,

                decimalProtect: !0,

                min: null,

                max: null,

                step: 1,

                insertMode: !0,

                autoUnmask: !1,

                unmaskAsNumber: !1,

                inputmode: "numeric",

                preValidation: function(buffer, pos, c, isSelection, opts) {

                    if ("-" === c || c === opts.negationSymbol.front) return !0 === opts.allowMinus && (opts.isNegative = opts.isNegative === undefined || !opts.isNegative, 

                    "" === buffer.join("") || {

                        caret: pos,

                        dopost: !0

                    });

                    if (!1 === isSelection && c === opts.radixPoint && opts.digits !== undefined && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {

                        var radixPos = $.inArray(opts.radixPoint, buffer);

                        if (-1 !== radixPos) return !0 === opts.numericInput ? pos === radixPos : {

                            caret: radixPos + 1

                        };

                    }

                    return !0;

                },

                postValidation: function(buffer, currentResult, opts) {

                    var suffix = opts.suffix.split(""), prefix = opts.prefix.split("");

                    if (currentResult.pos === undefined && currentResult.caret !== undefined && !0 !== currentResult.dopost) return currentResult;

                    var caretPos = currentResult.caret !== undefined ? currentResult.caret : currentResult.pos, maskedValue = buffer.slice();

                    opts.numericInput && (caretPos = maskedValue.length - caretPos - 1, maskedValue = maskedValue.reverse());

                    var charAtPos = maskedValue[caretPos];

                    if (charAtPos === opts.groupSeparator && (charAtPos = maskedValue[caretPos += 1]), 

                    caretPos === maskedValue.length - opts.suffix.length - 1 && charAtPos === opts.radixPoint) return currentResult;

                    charAtPos !== undefined && charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back && (maskedValue[caretPos] = "?", 

                    opts.prefix.length > 0 && caretPos >= (!1 === opts.isNegative ? 1 : 0) && caretPos < opts.prefix.length - 1 + (!1 === opts.isNegative ? 1 : 0) ? prefix[caretPos - (!1 === opts.isNegative ? 1 : 0)] = "?" : opts.suffix.length > 0 && caretPos >= maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0) && (suffix[caretPos - (maskedValue.length - opts.suffix.length - (!1 === opts.isNegative ? 1 : 0))] = "?")), 

                    prefix = prefix.join(""), suffix = suffix.join("");

                    var processValue = maskedValue.join("").replace(prefix, "");

                    if (processValue = processValue.replace(suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                    processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""), 

                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 

                    isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")), 

                    processValue.length > 1 && 1 !== processValue.indexOf(opts.radixPoint) && ("0" === charAtPos && (processValue = processValue.replace(/^\?/g, "")), 

                    processValue = processValue.replace(/^0/g, "")), processValue.charAt(0) === opts.radixPoint && "" !== opts.radixPoint && !0 !== opts.numericInput && (processValue = "0" + processValue), 

                    "" !== processValue) {

                        if (processValue = processValue.split(""), (!opts.digitsOptional || opts.enforceDigitsOnBlur && "blur" === currentResult.event) && isFinite(opts.digits)) {

                            var radixPosition = $.inArray(opts.radixPoint, processValue), rpb = $.inArray(opts.radixPoint, maskedValue);

                            -1 === radixPosition && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);

                            for (var i = 1; i <= opts.digits; i++) opts.digitsOptional && (!opts.enforceDigitsOnBlur || "blur" !== currentResult.event) || processValue[radixPosition + i] !== undefined && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? -1 !== rpb && maskedValue[rpb + i] !== undefined && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = currentResult.placeholder || opts.placeholder.charAt(0);

                        }

                        if (!0 !== opts.autoGroup || "" === opts.groupSeparator || charAtPos === opts.radixPoint && currentResult.pos === undefined && !currentResult.dopost) processValue = processValue.join(""); else {

                            var addRadix = processValue[processValue.length - 1] === opts.radixPoint && currentResult.c === opts.radixPoint;

                            processValue = Inputmask(function(buffer, opts) {

                                var postMask = "";

                                if (postMask += "(" + opts.groupSeparator + "*{" + opts.groupSize + "}){*}", "" !== opts.radixPoint) {

                                    var radixSplit = buffer.join("").split(opts.radixPoint);

                                    radixSplit[1] && (postMask += opts.radixPoint + "*{" + radixSplit[1].match(/^\d*\??\d*/)[0].length + "}");

                                }

                                return postMask;

                            }(processValue, opts), {

                                numericInput: !0,

                                jitMasking: !0,

                                definitions: {

                                    "*": {

                                        validator: "[0-9?]",

                                        cardinality: 1

                                    }

                                }

                            }).format(processValue.join("")), addRadix && (processValue += opts.radixPoint), 

                            processValue.charAt(0) === opts.groupSeparator && processValue.substr(1);

                        }

                    }

                    if (opts.isNegative && "blur" === currentResult.event && (opts.isNegative = "0" !== processValue), 

                    processValue = prefix + processValue, processValue += suffix, opts.isNegative && (processValue = opts.negationSymbol.front + processValue, 

                    processValue += opts.negationSymbol.back), processValue = processValue.split(""), 

                    charAtPos !== undefined) if (charAtPos !== opts.radixPoint && charAtPos !== opts.negationSymbol.front && charAtPos !== opts.negationSymbol.back) (caretPos = $.inArray("?", processValue)) > -1 ? processValue[caretPos] = charAtPos : caretPos = currentResult.caret || 0; else if (charAtPos === opts.radixPoint || charAtPos === opts.negationSymbol.front || charAtPos === opts.negationSymbol.back) {

                        var newCaretPos = $.inArray(charAtPos, processValue);

                        -1 !== newCaretPos && (caretPos = newCaretPos);

                    }

                    opts.numericInput && (caretPos = processValue.length - caretPos - 1, processValue = processValue.reverse());

                    var rslt = {

                        caret: charAtPos === undefined || currentResult.pos !== undefined ? caretPos + (opts.numericInput ? -1 : 1) : caretPos,

                        buffer: processValue,

                        refreshFromBuffer: currentResult.dopost || buffer.join("") !== processValue.join("")

                    };

                    return rslt.refreshFromBuffer ? rslt : currentResult;

                },

                onBeforeWrite: function(e, buffer, caretPos, opts) {

                    if (e) switch (e.type) {

                      case "keydown":

                        return opts.postValidation(buffer, {

                            caret: caretPos,

                            dopost: !0

                        }, opts);



                      case "blur":

                      case "checkval":

                        var unmasked;

                        if (function(opts) {

                            opts.parseMinMaxOptions === undefined && (null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                            "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, ".")), 

                            opts.min = isFinite(opts.min) ? parseFloat(opts.min) : NaN, isNaN(opts.min) && (opts.min = Number.MIN_VALUE)), 

                            null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, ".")), 

                            opts.max = isFinite(opts.max) ? parseFloat(opts.max) : NaN, isNaN(opts.max) && (opts.max = Number.MAX_VALUE)), 

                            opts.parseMinMaxOptions = "done");

                        }(opts), null !== opts.min || null !== opts.max) {

                            if (unmasked = opts.onUnMask(buffer.join(""), undefined, $.extend({}, opts, {

                                unmaskAsNumber: !0

                            })), null !== opts.min && unmasked < opts.min) return opts.isNegative = opts.min < 0, 

                            opts.postValidation(opts.min.toString().replace(".", opts.radixPoint).split(""), {

                                caret: caretPos,

                                dopost: !0,

                                placeholder: "0"

                            }, opts);

                            if (null !== opts.max && unmasked > opts.max) return opts.isNegative = opts.max < 0, 

                            opts.postValidation(opts.max.toString().replace(".", opts.radixPoint).split(""), {

                                caret: caretPos,

                                dopost: !0,

                                placeholder: "0"

                            }, opts);

                        }

                        return opts.postValidation(buffer, {

                            caret: caretPos,

                            placeholder: "0",

                            event: "blur"

                        }, opts);



                      case "_checkval":

                        return {

                            caret: caretPos

                        };

                    }

                },

                regex: {

                    integerPart: function(opts, emptyCheck) {

                        return emptyCheck ? new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?") : new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");

                    },

                    integerNPart: function(opts) {

                        return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");

                    }

                },

                definitions: {

                    "~": {

                        validator: function(chrs, maskset, pos, strict, opts, isSelection) {

                            var isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs);

                            if (!0 === isValid) {

                                if (!0 !== opts.numericInput && maskset.validPositions[pos] !== undefined && "~" === maskset.validPositions[pos].match.def && !isSelection) {

                                    var processValue = maskset.buffer.join(""), pvRadixSplit = (processValue = (processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")).split(opts.radixPoint);

                                    pvRadixSplit.length > 1 && (pvRadixSplit[1] = pvRadixSplit[1].replace(/0/g, opts.placeholder.charAt(0))), 

                                    "0" === pvRadixSplit[0] && (pvRadixSplit[0] = pvRadixSplit[0].replace(/0/g, opts.placeholder.charAt(0))), 

                                    processValue = pvRadixSplit[0] + opts.radixPoint + pvRadixSplit[1] || "";

                                    var bufferTemplate = maskset._buffer.join("");

                                    for (processValue === opts.radixPoint && (processValue = bufferTemplate); null === processValue.match(Inputmask.escapeRegex(bufferTemplate) + "$"); ) bufferTemplate = bufferTemplate.slice(1);

                                    isValid = (processValue = (processValue = processValue.replace(bufferTemplate, "")).split(""))[pos] === undefined ? {

                                        pos: pos,

                                        remove: pos

                                    } : {

                                        pos: pos

                                    };

                                }

                            } else strict || chrs !== opts.radixPoint || maskset.validPositions[pos - 1] !== undefined || (maskset.buffer[pos] = "0", 

                            isValid = {

                                pos: pos + 1

                            });

                            return isValid;

                        },

                        cardinality: 1

                    },

                    "+": {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            return opts.allowMinus && ("-" === chrs || chrs === opts.negationSymbol.front);

                        },

                        cardinality: 1,

                        placeholder: ""

                    },

                    "-": {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            return opts.allowMinus && chrs === opts.negationSymbol.back;

                        },

                        cardinality: 1,

                        placeholder: ""

                    },

                    ":": {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]", isValid = new RegExp(radix).test(chrs);

                            return isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {

                                caret: pos + 1

                            }), isValid;

                        },

                        cardinality: 1,

                        placeholder: function(opts) {

                            return opts.radixPoint;

                        }

                    }

                },

                onUnMask: function(maskedValue, unmaskedValue, opts) {

                    if ("" === unmaskedValue && !0 === opts.nullable) return unmaskedValue;

                    var processValue = maskedValue.replace(opts.prefix, "");

                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                    "" !== opts.placeholder.charAt(0) && (processValue = processValue.replace(new RegExp(opts.placeholder.charAt(0), "g"), "0")), 

                    opts.unmaskAsNumber ? ("" !== opts.radixPoint && -1 !== processValue.indexOf(opts.radixPoint) && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")), 

                    processValue = processValue.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), "-"), 

                    processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""), 

                    Number(processValue)) : processValue;

                },

                isComplete: function(buffer, opts) {

                    var maskedValue = buffer.join("");

                    if (buffer.slice().join("") !== maskedValue) return !1;

                    var processValue = maskedValue.replace(opts.prefix, "");

                    return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                    "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")), 

                    isFinite(processValue);

                },

                onBeforeMask: function(initialValue, opts) {

                    if (opts.isNegative = undefined, initialValue = initialValue.toString().charAt(initialValue.length - 1) === opts.radixPoint ? initialValue.toString().substr(0, initialValue.length - 1) : initialValue.toString(), 

                    "" !== opts.radixPoint && isFinite(initialValue)) {

                        var vs = initialValue.split("."), groupSize = "" !== opts.groupSeparator ? parseInt(opts.groupSize) : 0;

                        2 === vs.length && (vs[0].length > groupSize || vs[1].length > groupSize || vs[0].length <= groupSize && vs[1].length < groupSize) && (initialValue = initialValue.replace(".", opts.radixPoint));

                    }

                    var kommaMatches = initialValue.match(/,/g), dotMatches = initialValue.match(/\./g);

                    if (initialValue = dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, "")).replace(",", opts.radixPoint) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, "")).replace(".", opts.radixPoint) : initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue.replace(/,/g, "") : initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""), 

                    0 === opts.digits && (-1 !== initialValue.indexOf(".") ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : -1 !== initialValue.indexOf(",") && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))), 

                    "" !== opts.radixPoint && isFinite(opts.digits) && -1 !== initialValue.indexOf(opts.radixPoint)) {

                        var decPart = initialValue.split(opts.radixPoint)[1].match(new RegExp("\\d*"))[0];

                        if (parseInt(opts.digits) < decPart.toString().length) {

                            var digitsFactor = Math.pow(10, parseInt(opts.digits));

                            initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."), 

                            initialValue = (initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor).toString().replace(".", opts.radixPoint);

                        }

                    }

                    return initialValue;

                },

                canClearPosition: function(maskset, position, lvp, strict, opts) {

                    var vp = maskset.validPositions[position], canClear = vp.input !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && !1 === opts.decimalProtect || vp.input === opts.radixPoint && maskset.validPositions[position + 1] && null === maskset.validPositions[position + 1].match.fn || isFinite(vp.input) || position === lvp || vp.input === opts.groupSeparator || vp.input === opts.negationSymbol.front || vp.input === opts.negationSymbol.back;

                    return !canClear || "+" !== vp.match.nativeDef && "-" !== vp.match.nativeDef || (opts.isNegative = !1), 

                    canClear;

                },

                onKeyDown: function(e, buffer, caretPos, opts) {

                    var $input = $(this);

                    if (e.ctrlKey) switch (e.keyCode) {

                      case Inputmask.keyCode.UP:

                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");

                        break;



                      case Inputmask.keyCode.DOWN:

                        $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");

                    }

                }

            },

            currency: {

                prefix: "$ ",

                groupSeparator: ",",

                alias: "numeric",

                placeholder: "0",

                autoGroup: !0,

                digits: 2,

                digitsOptional: !1,

                clearMaskOnLostFocus: !1

            },

            decimal: {

                alias: "numeric"

            },

            integer: {

                alias: "numeric",

                digits: 0,

                radixPoint: ""

            },

            percentage: {

                alias: "numeric",

                digits: 2,

                digitsOptional: !0,

                radixPoint: ".",

                placeholder: "0",

                autoGroup: !1,

                min: 0,

                max: 100,

                suffix: " %",

                allowMinus: !1

            }

        }), Inputmask;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask) {

        function maskSort(a, b) {

            var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), maskas = (a.mask || a).split("#")[0], maskbs = (b.mask || b).split("#")[0];

            return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);

        }

        var analyseMaskBase = Inputmask.prototype.analyseMask;

        return Inputmask.prototype.analyseMask = function(mask, regexMask, opts) {

            function reduceVariations(masks, previousVariation, previousmaskGroup) {

                previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups, 

                "" !== previousVariation && (previousmaskGroup[previousVariation] = {});

                for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) maskGroup[variation = (mask = masks[i].mask || masks[i]).substr(0, 1)] = maskGroup[variation] || [], 

                maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);

                for (var ndx in maskGroup) maskGroup[ndx].length > 500 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);

            }

            function rebuild(maskGroup) {

                var mask = "", submasks = [];

                for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));

                return 1 === submasks.length ? mask += submasks[0] : mask += opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end, 

                mask;

            }

            var maskGroups = {};

            return opts.phoneCodes && (opts.phoneCodes && opts.phoneCodes.length > 1e3 && (reduceVariations((mask = mask.substr(1, mask.length - 2)).split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)), 

            mask = rebuild(maskGroups)), mask = mask.replace(/9/g, "\\9")), analyseMaskBase.call(this, mask, regexMask, opts);

        }, Inputmask.extendAliases({

            abstractphone: {

                groupmarker: {

                    start: "<",

                    end: ">"

                },

                countrycode: "",

                phoneCodes: [],

                mask: function(opts) {

                    return opts.definitions = {

                        "#": Inputmask.prototype.definitions[9]

                    }, opts.phoneCodes.sort(maskSort);

                },

                keepStatic: !0,

                onBeforeMask: function(value, opts) {

                    var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");

                    return (processedValue.indexOf(opts.countrycode) > 1 || -1 === processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 

                    processedValue;

                },

                onUnMask: function(maskedValue, unmaskedValue, opts) {

                    return maskedValue.replace(/[()#-]/g, "");

                },

                inputmode: "tel"

            }

        }), Inputmask;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    "function" == typeof Symbol && Symbol.iterator;

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(0), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask) {

        return Inputmask.extendAliases({

            Regex: {

                mask: "r",

                greedy: !1,

                repeat: "*",

                regex: null,

                regexTokens: null,

                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,

                quantifierFilter: /[0-9]+[^,]/,

                isComplete: function(buffer, opts) {

                    return new RegExp(opts.regex, opts.casing ? "i" : "").test(buffer.join(""));

                },

                definitions: {

                    r: {

                        validator: function(chrs, maskset, pos, strict, opts) {

                            function RegexToken(isGroup, isQuantifier) {

                                this.matches = [], this.isGroup = isGroup || !1, this.isQuantifier = isQuantifier || !1, 

                                this.quantifier = {

                                    min: 1,

                                    max: 1

                                }, this.repeaterPart = void 0;

                            }

                            function validateRegexToken(token, fromGroup) {

                                var isvalid = !1;

                                fromGroup && (regexPart += "(", openGroupCount++);

                                for (var mndx = 0; mndx < token.matches.length; mndx++) {

                                    var matchToken = token.matches[mndx];

                                    if (!0 === matchToken.isGroup) isvalid = validateRegexToken(matchToken, !0); else if (!0 === matchToken.isQuantifier) {

                                        var crrntndx = $.inArray(matchToken, token.matches), matchGroup = token.matches[crrntndx - 1], regexPartBak = regexPart;

                                        if (isNaN(matchToken.quantifier.max)) {

                                            for (;matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length && !(isvalid = validateRegexToken(matchGroup, !0)); ) ;

                                            (isvalid = isvalid || validateRegexToken(matchGroup, !0)) && (matchToken.repeaterPart = regexPart), 

                                            regexPart = regexPartBak + matchToken.quantifier.max;

                                        } else {

                                            for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm && !(isvalid = validateRegexToken(matchGroup, !0)); i++) ;

                                            regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";

                                        }

                                    } else if (void 0 !== matchToken.matches) for (var k = 0; k < matchToken.length && !(isvalid = validateRegexToken(matchToken[k], fromGroup)); k++) ; else {

                                        var testExp;

                                        if ("[" == matchToken.charAt(0)) {

                                            testExp = regexPart, testExp += matchToken;

                                            for (j = 0; j < openGroupCount; j++) testExp += ")";

                                            isvalid = (exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "")).test(bufferStr);

                                        } else for (var l = 0, tl = matchToken.length; l < tl; l++) if ("\\" !== matchToken.charAt(l)) {

                                            testExp = regexPart, testExp = (testExp += matchToken.substr(0, l + 1)).replace(/\|$/, "");

                                            for (var j = 0; j < openGroupCount; j++) testExp += ")";

                                            var exp = new RegExp("^(" + testExp + ")$", opts.casing ? "i" : "");

                                            if (isvalid = exp.test(bufferStr)) break;

                                        }

                                        regexPart += matchToken;

                                    }

                                    if (isvalid) break;

                                }

                                return fromGroup && (regexPart += ")", openGroupCount--), isvalid;

                            }

                            var bufferStr, groupToken, cbuffer = maskset.buffer.slice(), regexPart = "", isValid = !1, openGroupCount = 0;

                            null === opts.regexTokens && function() {

                                var match, m, currentToken = new RegexToken(), opengroups = [];

                                for (opts.regexTokens = []; match = opts.tokenizer.exec(opts.regex); ) switch ((m = match[0]).charAt(0)) {

                                  case "(":

                                    opengroups.push(new RegexToken(!0));

                                    break;



                                  case ")":

                                    groupToken = opengroups.pop(), opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(groupToken) : currentToken.matches.push(groupToken);

                                    break;



                                  case "{":

                                  case "+":

                                  case "*":

                                    var quantifierToken = new RegexToken(!1, !0), mq = (m = m.replace(/[{}]/g, "")).split(","), mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]), mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);

                                    if (quantifierToken.quantifier = {

                                        min: mq0,

                                        max: mq1

                                    }, opengroups.length > 0) {

                                        var matches = opengroups[opengroups.length - 1].matches;

                                        (match = matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), 

                                        match = groupToken), matches.push(match), matches.push(quantifierToken);

                                    } else (match = currentToken.matches.pop()).isGroup || ((groupToken = new RegexToken(!0)).matches.push(match), 

                                    match = groupToken), currentToken.matches.push(match), currentToken.matches.push(quantifierToken);

                                    break;



                                  default:

                                    opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(m) : currentToken.matches.push(m);

                                }

                                currentToken.matches.length > 0 && opts.regexTokens.push(currentToken);

                            }(), cbuffer.splice(pos, 0, chrs), bufferStr = cbuffer.join("");

                            for (var i = 0; i < opts.regexTokens.length; i++) {

                                var regexToken = opts.regexTokens[i];

                                if (isValid = validateRegexToken(regexToken, regexToken.isGroup)) break;

                            }

                            return isValid;

                        },

                        cardinality: 1

                    }

                }

            }

        }), Inputmask;

    });

}, function(module, exports, __webpack_require__) {

    "use strict";

    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {

        return typeof obj;

    } : function(obj) {

        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;

    };

    !function(factory) {

        __WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(1) ], 

        void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof (__WEBPACK_AMD_DEFINE_FACTORY__ = factory) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);

    }(function($, Inputmask) {

        return void 0 === $.fn.inputmask && ($.fn.inputmask = function(fn, options) {

            var nptmask, input = this[0];

            if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {

              case "unmaskedvalue":

                return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();



              case "remove":

                return this.each(function() {

                    this.inputmask && this.inputmask.remove();

                });



              case "getemptymask":

                return input && input.inputmask ? input.inputmask.getemptymask() : "";



              case "hasMaskedValue":

                return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();



              case "isComplete":

                return !input || !input.inputmask || input.inputmask.isComplete();



              case "getmetadata":

                return input && input.inputmask ? input.inputmask.getmetadata() : void 0;



              case "setvalue":

                $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");

                break;



              case "option":

                if ("string" != typeof options) return this.each(function() {

                    if (void 0 !== this.inputmask) return this.inputmask.option(options);

                });

                if (input && void 0 !== input.inputmask) return input.inputmask.option(options);

                break;



              default:

                return options.alias = fn, nptmask = new Inputmask(options), this.each(function() {

                    nptmask.mask(this);

                });

            } else {

                if ("object" == (void 0 === fn ? "undefined" : _typeof(fn))) return nptmask = new Inputmask(fn), 

                void 0 === fn.mask && void 0 === fn.alias ? this.each(function() {

                    if (void 0 !== this.inputmask) return this.inputmask.option(fn);

                    nptmask.mask(this);

                }) : this.each(function() {

                    nptmask.mask(this);

                });

                if (void 0 === fn) return this.each(function() {

                    (nptmask = new Inputmask(options)).mask(this);

                });

            }

        }), $.fn.inputmask;

    });

} ]);
/*!
 * jquery.sumoselect - v3.0.3
 * http://hemantnegi.github.io/jquery.sumoselect
 */

!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"namespace sumo";e.fn.SumoSelect=function(t){var l=e.extend({placeholder:"Select Here",csvDispCount:3,captionFormat:"{0} Selected",captionFormatAllSelected:"{0} all selected!",floatWidth:400,forceCustomRendering:!1,nativeOnDevice:["Android","BlackBerry","iPhone","iPad","iPod","Opera Mini","IEMobile","Silk"],outputAsCSV:!1,csvSepChar:",",okCancelInMulti:!1,isClickAwayOk:!1,triggerChangeCombined:!0,selectAll:!1,search:!1,searchText:"Search...",noMatch:'No matches for "{0}"',prefix:"",locale:["OK","Cancel","Select All"],up:!1,showTitle:!0},t),s=this.each(function(){var t=this;!this.sumo&&e(this).is("select")&&(this.sumo={E:e(t),is_multi:e(t).attr("multiple"),select:"",caption:"",placeholder:"",optDiv:"",CaptionCont:"",ul:"",is_floating:!1,is_opened:!1,mob:!1,Pstate:[],createElems:function(){var t=this;return t.E.wrap('<div class="SumoSelect" tabindex="0" role="button" aria-expanded="false">'),t.select=t.E.parent(),t.caption=e("<span>"),t.CaptionCont=e('<p class="CaptionCont SelectBox" ><label><i></i></label></p>').attr("style",t.E.attr("style")).prepend(t.caption),t.select.append(t.CaptionCont),t.is_multi||(l.okCancelInMulti=!1),t.E.attr("disabled")&&t.select.addClass("disabled").removeAttr("tabindex"),l.outputAsCSV&&t.is_multi&&t.E.attr("name")&&(t.select.append(e('<input class="HEMANT123" type="hidden" />').attr("name",t.E.attr("name")).val(t.getSelStr())),t.E.removeAttr("name")),t.isMobile()&&!l.forceCustomRendering?void t.setNativeMobile():(t.E.attr("name")&&t.select.addClass("sumo_"+t.E.attr("name").replace(/\[\]/,"")),t.E.addClass("SumoUnder").attr("tabindex","-1"),t.optDiv=e('<div class="optWrapper '+(l.up?"up":"")+'">'),t.floatingList(),t.ul=e('<ul class="options">'),t.optDiv.append(t.ul),l.selectAll&&t.is_multi&&t.SelAll(),l.search&&t.Search(),t.ul.append(t.prepItems(t.E.children())),t.is_multi&&t.multiSelelect(),t.select.append(t.optDiv),t.basicEvents(),void t.selAllState())},prepItems:function(t,l){var i=[],s=this;return e(t).each(function(t,n){n=e(n),i.push(n.is("optgroup")?e('<li class="group '+(n[0].disabled?"disabled":"")+'"><label>'+n.attr("label")+"</label><ul></ul></li>").find("ul").append(s.prepItems(n.children(),n[0].disabled)).end():s.createLi(n,l))}),i},createLi:function(t,l){var i=this;t.attr("value")||t.attr("value",t.val());var s=e('<li class="opt"><label>'+t.text()+"</label></li>");return s.data("opt",t),t.data("li",s),i.is_multi&&s.prepend("<span><i></i></span>"),(t[0].disabled||l)&&(s=s.addClass("disabled")),i.onOptClick(s),t[0].selected&&s.addClass("selected"),t.attr("class")&&s.addClass(t.attr("class")),t.attr("title")&&s.attr("title",t.attr("title")),s},getSelStr:function(){return sopt=[],this.E.find("option:selected").each(function(){sopt.push(e(this).val())}),sopt.join(l.csvSepChar)},multiSelelect:function(){var t=this;t.optDiv.addClass("multiple"),t.okbtn=e('<p tabindex="0" class="btnOk">'+l.locale[0]+"</p>").click(function(){t._okbtn(),t.hideOpts()}),t.cancelBtn=e('<p tabindex="0" class="btnCancel">'+l.locale[1]+"</p>").click(function(){t._cnbtn(),t.hideOpts()});var i=t.okbtn.add(t.cancelBtn);t.optDiv.append(e('<div class="MultiControls">').append(i)),i.on("keydown.sumo",function(l){var i=e(this);switch(l.which){case 32:case 13:i.trigger("click");break;case 9:if(i.hasClass("btnOk"))return;case 27:return t._cnbtn(),void t.hideOpts()}l.stopPropagation(),l.preventDefault()})},_okbtn:function(){var e=this,t=0;l.triggerChangeCombined&&(e.E.find("option:selected").length!=e.Pstate.length?t=1:e.E.find("option").each(function(l,i){i.selected&&e.Pstate.indexOf(l)<0&&(t=1)}),t&&(e.callChange(),e.setText()))},_cnbtn:function(){var e=this;e.E.find("option:selected").each(function(){this.selected=!1}),e.optDiv.find("li.selected").removeClass("selected");for(var t=0;t<e.Pstate.length;t++)e.E.find("option")[e.Pstate[t]].selected=!0,e.ul.find("li.opt").eq(e.Pstate[t]).addClass("selected");e.selAllState()},SelAll:function(){var t=this;t.is_multi&&(t.selAll=e('<p class="select-all"><span><i></i></span><label>'+l.locale[2]+"</label></p>"),t.optDiv.addClass("selall"),t.selAll.on("click",function(){t.selAll.toggleClass("selected"),t.toggSelAll(t.selAll.hasClass("selected"),1)}),t.optDiv.prepend(t.selAll))},Search:function(){var t=this,i=t.CaptionCont.addClass("search"),s=e('<p class="no-match">');t.ftxt=e('<input type="text" class="search-txt" value="" placeholder="'+l.searchText+'">').on("click",function(e){e.stopPropagation()}),i.append(t.ftxt),t.optDiv.children("ul").after(s),t.ftxt.on("keyup.sumo",function(){var i=t.optDiv.find("ul.options li.opt").each(function(l,i){var i=e(i),s=i.data("opt")[0];s.hidden=i.text().toLowerCase().indexOf(t.ftxt.val().toLowerCase())<0,i.toggleClass("hidden",s.hidden)}).not(".hidden");s.html(l.noMatch.replace(/\{0\}/g,"<em></em>")).toggle(!i.length),s.find("em").text(t.ftxt.val()),t.selAllState()})},selAllState:function(){var t=this;if(l.selectAll&&t.is_multi){var i=0,s=0;t.optDiv.find("li.opt").not(".hidden").each(function(t,l){e(l).hasClass("selected")&&i++,e(l).hasClass("disabled")||s++}),i==s?t.selAll.removeClass("partial").addClass("selected"):0==i?t.selAll.removeClass("selected partial"):t.selAll.addClass("partial")}},showOpts:function(){var t=this;t.E.attr("disabled")||(t.E.trigger("sumo:opening",t),t.is_opened=!0,t.select.addClass("open").attr("aria-expanded","true"),t.E.trigger("sumo:opened",t),t.ftxt?t.ftxt.focus():t.select.focus(),e(document).on("click.sumo",function(e){if(!t.select.is(e.target)&&0===t.select.has(e.target).length){if(!t.is_opened)return;t.hideOpts(),l.okCancelInMulti&&(l.isClickAwayOk?t._okbtn():t._cnbtn())}}),t.is_floating&&(H=t.optDiv.children("ul").outerHeight()+2,t.is_multi&&(H+=parseInt(t.optDiv.css("padding-bottom"))),t.optDiv.css("height",H),e("body").addClass("sumoStopScroll")),t.setPstate())},setPstate:function(){var e=this;e.is_multi&&(e.is_floating||l.okCancelInMulti)&&(e.Pstate=[],e.E.find("option").each(function(t,l){l.selected&&e.Pstate.push(t)}))},callChange:function(){this.E.trigger("change").trigger("click")},hideOpts:function(){var t=this;t.is_opened&&(t.E.trigger("sumo:closing",t),t.is_opened=!1,t.select.removeClass("open").attr("aria-expanded","true").find("ul li.sel").removeClass("sel"),t.E.trigger("sumo:closed",t),e(document).off("click.sumo"),t.select.focus(),e("body").removeClass("sumoStopScroll"),l.search&&(t.ftxt.val(""),t.ftxt.trigger("keyup.sumo")))},setOnOpen:function(){var e=this,t=e.optDiv.find("li.opt:not(.hidden)").eq(l.search?0:e.E[0].selectedIndex);t.hasClass("disabled")&&(t=t.next(":not(disabled)"),!t.length)||(e.optDiv.find("li.sel").removeClass("sel"),t.addClass("sel"),e.showOpts())},nav:function(e){var t,l=this,i=l.ul.find("li.opt:not(.disabled, .hidden)"),s=l.ul.find("li.opt.sel:not(.hidden)"),n=i.index(s);if(l.is_opened&&s.length){if(e&&n>0)t=i.eq(n-1);else{if(!(!e&&n<i.length-1&&n>-1))return;t=i.eq(n+1)}s.removeClass("sel"),s=t.addClass("sel");var a=l.ul,o=a.scrollTop(),c=s.position().top+o;c>=o+a.height()-s.outerHeight()&&a.scrollTop(c-a.height()+s.outerHeight()),o>c&&a.scrollTop(c)}else l.setOnOpen()},basicEvents:function(){var t=this;t.CaptionCont.click(function(e){t.E.trigger("click"),t.is_opened?t.hideOpts():t.showOpts(),e.stopPropagation()}),t.select.on("keydown.sumo",function(e){switch(e.which){case 38:t.nav(!0);break;case 40:t.nav(!1);break;case 65:if(t.is_multi&&e.ctrlKey){t.toggSelAll(!e.shiftKey,1);break}return;case 32:if(l.search&&t.ftxt.is(e.target))return;case 13:t.is_opened?t.optDiv.find("ul li.sel").trigger("click"):t.setOnOpen();break;case 9:return void(l.okCancelInMulti||t.hideOpts());case 27:return l.okCancelInMulti&&t._cnbtn(),void t.hideOpts();default:return}e.preventDefault()}),e(window).on("resize.sumo",function(){t.floatingList()})},onOptClick:function(t){var i=this;t.click(function(){var t=e(this);if(!t.hasClass("disabled")){i.is_multi?(t.toggleClass("selected"),t.data("opt")[0].selected=t.hasClass("selected"),i.selAllState()):(t.parent().find("li.selected").removeClass("selected"),t.toggleClass("selected"),t.data("opt")[0].selected=!0),i.is_multi&&l.triggerChangeCombined&&(i.is_floating||l.okCancelInMulti)||(i.setText(),i.callChange()),i.is_multi||i.hideOpts()}})},setText:function(){var t=this;if(t.placeholder="",t.is_multi){for(sels=t.E.find(":selected").not(":disabled"),i=0;i<sels.length;i++){if(i+1>=l.csvDispCount&&l.csvDispCount){sels.length==t.E.find("option").length&&l.captionFormatAllSelected?t.placeholder=l.captionFormatAllSelected.replace(/\{0\}/g,sels.length)+",":t.placeholder=l.captionFormat.replace(/\{0\}/g,sels.length)+",";break}t.placeholder+=e(sels[i]).text()+", "}t.placeholder=t.placeholder.replace(/,([^,]*)$/,"$1")}else t.placeholder=t.E.find(":selected").not(":disabled").text();var s=!1;t.placeholder||(s=!0,t.placeholder=t.E.attr("placeholder"),t.placeholder||(t.placeholder=t.E.find("option:disabled:selected").text())),t.placeholder=t.placeholder?l.prefix+" "+t.placeholder:l.placeholder,t.caption.html(t.placeholder),l.showTitle&&t.CaptionCont.attr("title",t.placeholder);var n=t.select.find("input.HEMANT123");return n.length&&n.val(t.getSelStr()),s?t.caption.addClass("placeholder"):t.caption.removeClass("placeholder"),t.placeholder},isMobile:function(){for(var e=navigator.userAgent||navigator.vendor||window.opera,t=0;t<l.nativeOnDevice.length;t++)if(e.toString().toLowerCase().indexOf(l.nativeOnDevice[t].toLowerCase())>0)return l.nativeOnDevice[t];return!1},setNativeMobile:function(){var e=this;e.E.addClass("SelectClass"),e.mob=!0,e.E.change(function(){e.setText()})},floatingList:function(){var t=this;t.is_floating=e(window).width()<=l.floatWidth,t.optDiv.toggleClass("isFloating",t.is_floating),t.is_floating||t.optDiv.css("height",""),t.optDiv.toggleClass("okCancelInMulti",l.okCancelInMulti&&!t.is_floating)},vRange:function(e){var t=this,l=t.E.find("option");if(l.length<=e||0>e)throw"index out of bounds";return t},toggSel:function(t,l){var i,s=this;"number"==typeof l?(s.vRange(l),i=s.E.find("option")[l]):i=s.E.find('option[value="'+l+'"]')[0]||0,i&&!i.disabled&&i.selected!=t&&(i.selected=t,s.mob||e(i).data("li").toggleClass("selected",t),s.callChange(),s.setPstate(),s.setText(),s.selAllState())},toggDis:function(e,t){var l=this.vRange(t);l.E.find("option")[t].disabled=e,e&&(l.E.find("option")[t].selected=!1),l.mob||l.optDiv.find("ul.options li").eq(t).toggleClass("disabled",e).removeClass("selected"),l.setText()},toggSumo:function(e){var t=this;return t.enabled=e,t.select.toggleClass("disabled",e),e?(t.E.attr("disabled","disabled"),t.select.removeAttr("tabindex")):(t.E.removeAttr("disabled"),t.select.attr("tabindex","0")),t},toggSelAll:function(t,l){var i=this;i.E.find("option:not(:disabled,:hidden)").each(function(l,i){var s=i.selected,i=e(i).data("li");i.hasClass("hidden")||(t?s||i.trigger("click"):s&&i.trigger("click"))}),l||(!i.mob&&i.selAll&&i.selAll.removeClass("partial").toggleClass("selected",!!t),i.callChange(),i.setText(),i.setPstate())},reload:function(){var t=this.unload();return e(t).SumoSelect(l)},unload:function(){var e=this;return e.select.before(e.E),e.E.show(),l.outputAsCSV&&e.is_multi&&e.select.find("input.HEMANT123").length&&e.E.attr("name",e.select.find("input.HEMANT123").attr("name")),e.select.remove(),delete t.sumo,t},add:function(l,i,s){if("undefined"==typeof l)throw"No value to add";var n=this;if(opts=n.E.find("option"),"number"==typeof i&&(s=i,i=l),"undefined"==typeof i&&(i=l),opt=e("<option></option>").val(l).html(i),opts.length<s)throw"index out of bounds";return"undefined"==typeof s||opts.length==s?(n.E.append(opt),n.mob||n.ul.append(n.createLi(opt))):(opts.eq(s).before(opt),n.mob||n.ul.find("li.opt").eq(s).before(n.createLi(opt))),t},remove:function(e){var t=this.vRange(e);t.E.find("option").eq(e).remove(),t.mob||t.optDiv.find("ul.options li").eq(e).remove(),t.setText()},selectItem:function(e){this.toggSel(!0,e)},unSelectItem:function(e){this.toggSel(!1,e)},selectAll:function(){this.toggSelAll(!0)},unSelectAll:function(){this.toggSelAll(!1)},disableItem:function(e){this.toggDis(!0,e)},enableItem:function(e){this.toggDis(!1,e)},enabled:!0,enable:function(){return this.toggSumo(!1)},disable:function(){return this.toggSumo(!0)},init:function(){var e=this;return e.createElems(),e.setText(),e}},t.sumo.init())});return 1==s.length?s[0]:s}});