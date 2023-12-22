/*!
 * Physics2DPlugin 3.8.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e=e||self).window=e.window||{})}(this,function(e){"use strict";function h(){return s||"undefined"!=typeof window&&(s=window.gsap)&&s.registerPlugin&&s}function i(e){return Math.round(1e4*e)/1e4}function l(){return String.fromCharCode.apply(null,arguments)}function o(e){s=e||h(),u||(r=s.utils.getUnit,u=1)}function p(e,i,t,n,l){var s=e._gsap,o=s.get(e,i);this.p=i,this.set=s.set(e,i),this.s=this.val=parseFloat(o),this.u=r(o)||0,this.vel=t||0,this.v=this.vel/l,n||0===n?(this.acc=n,this.a=this.acc/(l*l)):this.acc=this.a=0}var s,u,r,d=Math.PI/180,a="Physics2DPlugin",c=l(103,114,101,101,110,115,111,99,107,46,99,111,109),t=(function(e){var i=0===(window?window.location.href:"").indexOf(l(102,105,108,101,58,47,47))||-1!==e.indexOf(l(108,111,99,97,108,104,111,115,116))||-1!==e.indexOf(l(49,50,55,46,48,32,48,46,49)),t=[c,l(99,111,100,101,112,101,110,46,105,111),l(99,111,100,101,112,101,110,46,112,108,117,109,98,105,110,103),l(99,111,100,101,112,101,110,46,100,101,118),l(99,111,100,101,112,101,110,46,97,112,112),l(112,101,110,115,46,99,108,111,117,100),l(99,115,115,45,116,114,105,99,107,115,46,99,111,109),l(99,100,112,110,46,105,111),l(112,101,110,115,46,105,111),l(103,97,110,110,111,110,46,116,118),l(99,111,100,101,99,97,110,121,111,110,46,110,101,116),l(116,104,101,109,101,102,111,114,101,115,116,46,110,101,116),l(99,101,114,101,98,114,97,120,46,99,111,46,117,107),l(116,121,109,112,97,110,117,115,46,110,101,116),l(116,119,101,101,110,109,97,120,46,99,111,109),l(116,119,101,101,110,108,105,116,101,46,99,111,109),l(112,108,110,107,114,46,99,111),l(104,111,116,106,97,114,46,99,111,109),l(119,101,98,112,97,99,107,98,105,110,46,99,111,109),l(97,114,99,104,105,118,101,46,111,114,103),l(99,111,100,101,115,97,110,100,98,111,120,46,105,111),l(99,115,98,46,97,112,112),l(115,116,97,99,107,98,108,105,116,122,46,99,111,109),l(99,111,100,105,101,114,46,105,111),l(109,111,116,105,111,110,116,114,105,99,107,115,46,99,111,109),l(115,116,97,99,107,111,118,101,114,102,108,111,119,46,99,111,109),l(115,116,97,99,107,101,120,99,104,97,110,103,101,46,99,111,109),l(106,115,102,105,100,100,108,101,46,110,101,116)],n=t.length;for(setTimeout(function(){window&&window.console&&!window._gsapWarned&&s&&!1!==s.config().trialWarn&&(console.log(l(37,99,87,97,114,110,105,110,103),l(102,111,110,116,45,115,105,122,101,58,51,48,112,120,59,99,111,108,111,114,58,114,101,100,59)),console.log(l(65,32,116,114,105,97,108,32,118,101,114,115,105,111,110,32,111,102,32)+a+l(32,105,115,32,108,111,97,100,101,100,32,116,104,97,116,32,111,110,108,121,32,119,111,114,107,115,32,108,111,99,97,108,108,121,32,97,110,100,32,111,110,32,100,111,109,97,105,110,115,32,108,105,107,101,32,99,111,100,101,112,101,110,46,105,111,32,97,110,100,32,99,111,100,101,115,97,110,100,98,111,120,46,105,111,46,32,42,42,42,32,68,79,32,78,79,84,32,68,69,80,76,79,89,32,84,72,73,83,32,70,73,76,69,32,42,42,42,32,76,111,97,100,105,110,103,32,105,116,32,111,110,32,97,110,32,117,110,97,117,116,104,111,114,105,122,101,100,32,115,105,116,101,32,118,105,111,108,97,116,101,115,32,116,104,101,32,108,105,99,101,110,115,101,32,97,110,100,32,119,105,108,108,32,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,46,32,80,108,101,97,115,101,32,106,111,105,110,32,67,108,117,98,32,71,114,101,101,110,83,111,99,107,32,116,111,32,103,101,116,32,102,117,108,108,32,97,99,99,101,115,115,32,116,111,32,116,104,101,32,98,111,110,117,115,32,112,108,117,103,105,110,115,32,116,104,97,116,32,98,111,111,115,116,32,121,111,117,114,32,97,110,105,109,97,116,105,111,110,32,115,117,112,101,114,112,111,119,101,114,115,46,32,68,105,115,97,98,108,101,32,116,104,105,115,32,119,97,114,110,105,110,103,32,119,105,116,104,32,103,115,97,112,46,99,111,110,102,105,103,40,123,116,114,105,97,108,87,97,114,110,58,32,102,97,108,115,101,125,41,59)),console.log(l(37,99,71,101,116,32,117,110,114,101,115,116,114,105,99,116,101,100,32,102,105,108,101,115,32,97,116,32,104,116,116,112,115,58,47,47,103,114,101,101,110,115,111,99,107,46,99,111,109,47,99,108,117,98),l(102,111,110,116,45,115,105,122,101,58,49,54,112,120,59,99,111,108,111,114,58,35,52,101,57,56,49,53)),window._gsapWarned=1)},50);-1<--n;)if(-1!==e.indexOf(t[n]))return;i||setTimeout(function(){window.location.href=l(104,116,116,112,115,58,47,47)+c+l(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47)+"?plugin="+a+"&source=codepen"},3e3)}(window?window.location.host:""),{version:"3.8.0",name:"physics2D",register:o,init:function init(e,i,t){u||o();var n=this,l=+i.angle||0,s=+i.velocity||0,r=+i.acceleration||0,a=i.xProp||"x",c=i.yProp||"y",f=i.accelerationAngle||0===i.accelerationAngle?+i.accelerationAngle:l;n.target=e,n.tween=t,n.step=0,n.sps=30,i.gravity&&(r=+i.gravity,f=90),l*=d,f*=d,n.fr=1-(+i.friction||0),n._props.push(a,c),n.xp=new p(e,a,Math.cos(l)*s,Math.cos(f)*r,n.sps),n.yp=new p(e,c,Math.sin(l)*s,Math.sin(f)*r,n.sps),n.skipX=n.skipY=0},render:function render(e,t){var n,l,s,o,r,a,c=t.xp,p=t.yp,f=t.tween,u=t.target,d=t.step,h=t.sps,v=t.fr,w=t.skipX,g=t.skipY,y=f._from?f._dur-f._time:f._time;if(1===v)s=y*y*.5,n=c.s+c.vel*y+c.acc*s,l=p.s+p.vel*y+p.acc*s;else{for(o=a=(0|(y*=h))-d,a<0&&(c.v=c.vel/h,p.v=p.vel/h,c.val=c.s,p.val=p.s,o=a=(t.step=0)|y),r=y%1*v;a--;)c.v+=c.a,p.v+=p.a,c.v*=v,p.v*=v,c.val+=c.v,p.val+=p.v;n=c.val+c.v*r,l=p.val+p.v*r,t.step+=o}w||c.set(u,c.p,i(n)+c.u),g||p.set(u,p.p,i(l)+p.u)},kill:function kill(e){this.xp.p===e&&(this.skipX=1),this.yp.p===e&&(this.skipY=1)}});h()&&s.registerPlugin(t),e.Physics2DPlugin=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});