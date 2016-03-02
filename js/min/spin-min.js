!function(t,e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Spinner=e()}(this,function(){"use strict";function t(t,e){var i=document.createElement(t||"div"),o;for(o in e)i[o]=e[o];return i}function e(t){for(var e=1,i=arguments.length;i>e;e++)t.appendChild(arguments[e]);return t}function i(t,e,i,o){var n=["opacity",e,~~(100*t),i,o].join("-"),r=.01+i/o*100,s=Math.max(1-(1-t)/e*(100-r),t),a=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=a&&"-"+a+"-"||"";return d[n]||(p.insertRule("@"+l+"keyframes "+n+"{0%{opacity:"+s+"}"+r+"%{opacity:"+t+"}"+(r+.01)+"%{opacity:1}"+(r+e)%100+"%{opacity:"+t+"}100%{opacity:"+s+"}}",p.cssRules.length),d[n]=1),n}function o(t,e){var i=t.style,o,n;if(e=e.charAt(0).toUpperCase()+e.slice(1),void 0!==i[e])return e;for(n=0;n<c.length;n++)if(o=c[n]+e,void 0!==i[o])return o}function n(t,e){for(var i in e)t.style[o(t,i)||i]=e[i];return t}function r(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)void 0===t[o]&&(t[o]=i[o])}return t}function s(t,e){return"string"==typeof t?t:t[e%t.length]}function a(t){this.opts=r(t||{},a.defaults,f)}function l(){function i(e,i){return t("<"+e+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',i)}p.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(t,o){function r(){return n(i("group",{coordsize:c+" "+c,coordorigin:-l+" "+-l}),{width:c,height:c})}function a(t,a,c){e(u,e(n(r(),{rotation:360/o.lines*t+"deg",left:~~a}),e(n(i("roundrect",{arcsize:o.corners}),{width:l,height:o.scale*o.width,left:o.scale*o.radius,top:-o.scale*o.width>>1,filter:c}),i("fill",{color:s(o.color,t),opacity:o.opacity}),i("stroke",{opacity:0}))))}var l=o.scale*(o.length+o.width),c=2*o.scale*l,d=-(o.width+o.length)*o.scale*2+"px",u=n(r(),{position:"absolute",top:d,left:d}),p;if(o.shadow)for(p=1;p<=o.lines;p++)a(p,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(p=1;p<=o.lines;p++)a(p);return e(t,u)},a.prototype.opacity=function(t,e,i,o){var n=t.firstChild;o=o.shadow&&o.lines||0,n&&e+o<n.childNodes.length&&(n=n.childNodes[e+o],n=n&&n.firstChild,n=n&&n.firstChild,n&&(n.opacity=i))}}var c=["webkit","Moz","ms","O"],d={},u,p,f={lines:12,length:7,width:5,radius:10,scale:1,corners:1,color:"#000",opacity:.25,rotate:0,direction:1,speed:1,trail:100,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",shadow:!1,hwaccel:!1,position:"absolute"};if(a.defaults={},r(a.prototype,{spin:function(e){this.stop();var i=this,o=i.opts,r=i.el=t(null,{className:o.className});if(n(r,{position:o.position,width:0,zIndex:o.zIndex,left:o.left,top:o.top}),e&&e.insertBefore(r,e.firstChild||null),r.setAttribute("role","progressbar"),i.lines(r,i.opts),!u){var s=0,a=(o.lines-1)*(1-o.direction)/2,l,c=o.fps,d=c/o.speed,p=(1-o.opacity)/(d*o.trail/100),f=d/o.lines;!function h(){s++;for(var t=0;t<o.lines;t++)l=Math.max(1-(s+(o.lines-t)*f)%d*p,o.opacity),i.opacity(r,t*o.direction+a,l,o);i.timeout=i.el&&setTimeout(h,~~(1e3/c))}()}return i},stop:function(){var t=this.el;return t&&(clearTimeout(this.timeout),t.parentNode&&t.parentNode.removeChild(t),this.el=void 0),this},lines:function(o,r){function a(e,i){return n(t(),{position:"absolute",width:r.scale*(r.length+r.width)+"px",height:r.scale*r.width+"px",background:e,boxShadow:i,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*l+r.rotate)+"deg) translate("+r.scale*r.radius+"px,0)",borderRadius:(r.corners*r.scale*r.width>>1)+"px"})}for(var l=0,c=(r.lines-1)*(1-r.direction)/2,d;l<r.lines;l++)d=n(t(),{position:"absolute",top:1+~(r.scale*r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:u&&i(r.opacity,r.trail,c+l*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&e(d,n(a("#000","0 0 4px #000"),{top:"2px"})),e(o,e(d,a(s(r.color,l),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(t,e,i){e<t.childNodes.length&&(t.childNodes[e].style.opacity=i)}}),"undefined"!=typeof document){p=function(){var i=t("style",{type:"text/css"});return e(document.getElementsByTagName("head")[0],i),i.sheet||i.styleSheet}();var h=n(t("group"),{behavior:"url(#default#VML)"});!o(h,"transform")&&h.adj?l():u=o(h,"animation")}return a});