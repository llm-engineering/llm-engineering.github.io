(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="173",_r={ROTATE:0,DOLLY:1,PAN:2},pr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},OS=0,B_=1,PS=2,Yg=1,zS=2,$i=3,Fa=0,Fn=1,ta=2,za=0,gr=1,F_=2,I_=3,H_=4,BS=5,ds=100,FS=101,IS=102,HS=103,GS=104,VS=200,kS=201,XS=202,WS=203,Mh=204,Eh=205,qS=206,YS=207,ZS=208,jS=209,KS=210,QS=211,JS=212,$S=213,tx=214,Th=0,bh=1,Ah=2,xr=3,Rh=4,Ch=5,wh=6,Dh=7,Zg=0,ex=1,nx=2,Ba=0,ix=1,ax=2,sx=3,rx=4,ox=5,lx=6,cx=7,jg=300,yr=301,Mr=302,Uh=303,Lh=304,Dc=306,Nh=1e3,ms=1001,Oh=1002,Si=1003,ux=1004,Wl=1005,wi=1006,Hf=1007,_s=1008,aa=1009,Kg=1010,Qg=1011,Lo=1012,ud=1013,gs=1014,ea=1015,Oo=1016,fd=1017,hd=1018,Er=1020,Jg=35902,$g=1021,tv=1022,gi=1023,ev=1024,nv=1025,vr=1026,Tr=1027,iv=1028,dd=1029,av=1030,pd=1031,md=1033,_c=33776,gc=33777,vc=33778,Sc=33779,Ph=35840,zh=35841,Bh=35842,Fh=35843,Ih=36196,Hh=37492,Gh=37496,Vh=37808,kh=37809,Xh=37810,Wh=37811,qh=37812,Yh=37813,Zh=37814,jh=37815,Kh=37816,Qh=37817,Jh=37818,$h=37819,td=37820,ed=37821,xc=36492,nd=36494,id=36495,sv=36283,ad=36284,sd=36285,rd=36286,fx=3200,hx=3201,dx=0,px=1,Pa="",ri="srgb",br="srgb-linear",Tc="linear",Oe="srgb",$s=7680,G_=519,mx=512,_x=513,gx=514,rv=515,vx=516,Sx=517,xx=518,yx=519,V_=35044,k_="300 es",na=2e3,bc=2001;class xs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yc=Math.PI/180,od=180/Math.PI;function Po(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Mn[o&255]+Mn[o>>8&255]+Mn[o>>16&255]+Mn[o>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[i&63|128]+Mn[i>>8&255]+"-"+Mn[i>>16&255]+Mn[i>>24&255]+Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]).toLowerCase()}function pe(o,t,i){return Math.max(t,Math.min(i,o))}function Mx(o,t){return(o%t+t)%t}function Gf(o,t,i){return(1-i)*o+i*t}function Eo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function zn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ex={DEG2RAD:yc};class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,i,s,l,u,h,d,m,p){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p)}set(t,i,s,l,u,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],S=s[7],x=s[2],M=s[5],R=s[8],w=l[0],y=l[3],_=l[6],P=l[1],O=l[4],D=l[7],H=l[2],I=l[5],B=l[8];return u[0]=h*w+d*P+m*H,u[3]=h*y+d*O+m*I,u[6]=h*_+d*D+m*B,u[1]=p*w+g*P+S*H,u[4]=p*y+g*O+S*I,u[7]=p*_+g*D+S*B,u[2]=x*w+M*P+R*H,u[5]=x*y+M*O+R*I,u[8]=x*_+M*D+R*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*u*g+s*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=g*h-d*p,x=d*m-g*u,M=p*u-h*m,R=i*S+s*x+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=S*w,t[1]=(l*p-g*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(g*i-l*m)*w,t[5]=(l*u-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*u)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Vf.makeScale(t,i)),this}rotate(t){return this.premultiply(Vf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vf=new oe;function ov(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Tx(){const o=Ac("canvas");return o.style.display="block",o}const X_={};function dr(o){o in X_||(X_[o]=!0,console.warn(o))}function bx(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}function Ax(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Rx(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const W_=new oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cx(){const o={enabled:!0,workingColorSpace:br,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=ia(l.r),l.g=ia(l.g),l.b=ia(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Pa?Tc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[br]:{primaries:t,whitePoint:s,transfer:Tc,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:t,whitePoint:s,transfer:Oe,toXYZ:W_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),o}const Ae=Cx();function ia(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let tr;class wx{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=Ac("canvas")),tr.width=t.width,tr.height=t.height;const s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ac("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ia(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ia(i[s]/255)*255):i[s]=ia(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Dx=0;class lv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(kf(l[h].image)):u.push(kf(l[h]))}else u=kf(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ux=0;class In extends xs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ms,l=ms,u=wi,h=_s,d=gi,m=aa,p=In.DEFAULT_ANISOTROPY,g=Pa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Po(),this.name="",this.source=new lv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Nh:t.x=t.x-Math.floor(t.x);break;case ms:t.x=t.x<0?0:1;break;case Oh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Nh:t.y=t.y-Math.floor(t.y);break;case ms:t.y=t.y<0?0:1;break;case Oh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=jg;In.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,i=0,s=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],g=m[4],S=m[8],x=m[1],M=m[5],R=m[9],w=m[2],y=m[6],_=m[10];if(Math.abs(g-x)<.01&&Math.abs(S-w)<.01&&Math.abs(R-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(S+w)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,H=(_+1)/2,I=(g+x)/4,B=(S+w)/4,K=(R+y)/4;return O>D&&O>H?O<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(O),l=I/s,u=B/s):D>H?D<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),s=I/l,u=K/l):H<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),s=B/u,l=K/u),this.set(s,l,u,i),this}let P=Math.sqrt((y-R)*(y-R)+(S-w)*(S-w)+(x-g)*(x-g));return Math.abs(P)<.001&&(P=1),this.x=(y-R)/P,this.y=(S-w)/P,this.z=(x-g)/P,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this.w=pe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this.w=pe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Lx extends xs{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ze(0,0,t,i),this.scissorTest=!1,this.viewport=new Ze(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const u=new In(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);u.flipY=!1,u.generateMipmaps=s.generateMipmaps,u.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new lv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends Lx{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class cv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nx extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],S=s[l+3];const x=u[h+0],M=u[h+1],R=u[h+2],w=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=R,t[i+3]=w;return}if(S!==w||m!==x||p!==M||g!==R){let y=1-d;const _=m*x+p*M+g*R+S*w,P=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const H=Math.sqrt(O),I=Math.atan2(H,_*P);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const D=d*P;if(m=m*y+x*D,p=p*y+M*D,g=g*y+R*D,S=S*y+w*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=H,p*=H,g*=H,S*=H}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],S=u[h],x=u[h+1],M=u[h+2],R=u[h+3];return t[i]=d*R+g*S+m*M-p*x,t[i+1]=m*R+g*x+p*S-d*M,t[i+2]=p*R+g*M+d*x-m*S,t[i+3]=g*R-d*S-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),S=d(u/2),x=m(s/2),M=m(l/2),R=m(u/2);switch(h){case"XYZ":this._x=x*g*S+p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S-x*M*R;break;case"YXZ":this._x=x*g*S+p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S+x*M*R;break;case"ZXY":this._x=x*g*S-p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S-x*M*R;break;case"ZYX":this._x=x*g*S-p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S+x*M*R;break;case"YZX":this._x=x*g*S+p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S-x*M*R;break;case"XZY":this._x=x*g*S-p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S+x*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],S=i[10],x=s+d+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(s>d&&s>S){const M=2*Math.sqrt(1+s-d-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>S){const M=2*Math.sqrt(1+d-s-S);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-s-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-u*m,this._y=l*g+h*m+u*d-s*p,this._z=u*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),S=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=h*S+this._w*x,this._x=s*S+this._x*x,this._y=l*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Y_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Y_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-u*l),S=2*(u*s-h*i);return this.x=i+m*p+h*S-d*g,this.y=s+m*g+d*p-u*S,this.z=l+m*S+u*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=pe(this.x,t.x,i.x),this.y=pe(this.y,t.y,i.y),this.z=pe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=pe(this.x,t,i),this.y=pe(this.y,t,i),this.z=pe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Xf.copy(this).projectOnVector(t),this.sub(Xf)}reflect(t){return this.sub(Xf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(pe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xf=new $,Y_=new Ss;class zo{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(di.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(di.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=di.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,di):di.fromBufferAttribute(u,h),di.applyMatrix4(t.matrixWorld),this.expandByPoint(di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ql.copy(s.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,di),di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(To),Yl.subVectors(this.max,To),er.subVectors(t.a,To),nr.subVectors(t.b,To),ir.subVectors(t.c,To),Ca.subVectors(nr,er),wa.subVectors(ir,nr),rs.subVectors(er,ir);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-rs.z,rs.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,rs.z,0,-rs.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-rs.y,rs.x,0];return!Wf(i,er,nr,ir,Yl)||(i=[1,0,0,0,1,0,0,0,1],!Wf(i,er,nr,ir,Yl))?!1:(Zl.crossVectors(Ca,wa),i=[Zl.x,Zl.y,Zl.z],Wf(i,er,nr,ir,Yl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Zi=[new $,new $,new $,new $,new $,new $,new $,new $],di=new $,ql=new zo,er=new $,nr=new $,ir=new $,Ca=new $,wa=new $,rs=new $,To=new $,Yl=new $,Zl=new $,os=new $;function Wf(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){os.fromArray(o,u);const d=l.x*Math.abs(os.x)+l.y*Math.abs(os.y)+l.z*Math.abs(os.z),m=t.dot(os),p=i.dot(os),g=s.dot(os);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Ox=new zo,bo=new $,qf=new $;class Uc{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ox.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bo.subVectors(t,this.center);const i=bo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(bo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bo.copy(t.center).add(qf)),this.expandByPoint(bo.copy(t.center).sub(qf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new $,Yf=new $,jl=new $,Da=new $,Zf=new $,Kl=new $,jf=new $;class _d{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ji)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ji.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ji.copy(this.origin).addScaledVector(this.direction,i),ji.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Yf.copy(t).add(i).multiplyScalar(.5),jl.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(Yf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(jl),d=Da.dot(this.direction),m=-Da.dot(jl),p=Da.lengthSq(),g=Math.abs(1-h*h);let S,x,M,R;if(g>0)if(S=h*m-d,x=h*d-m,R=u*g,S>=0)if(x>=-R)if(x<=R){const w=1/g;S*=w,x*=w,M=S*(S+h*x+2*d)+x*(h*S+x+2*m)+p}else x=u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x=-u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;else x<=-R?(S=Math.max(0,-(-h*u+d)),x=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+x*(x+2*m)+p):x<=R?(S=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(S=Math.max(0,-(h*u+d)),x=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+x*(x+2*m)+p);else x=h>0?-u:u,S=Math.max(0,-(h*x+d)),M=-S*S+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Yf).addScaledVector(jl,x),M}intersectSphere(t,i){ji.subVectors(t.center,this.origin);const s=ji.dot(this.direction),l=ji.dot(ji)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),g>=0?(u=(t.min.y-x.y)*g,h=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,h=(t.min.y-x.y)*g),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),S>=0?(d=(t.min.z-x.z)*S,m=(t.max.z-x.z)*S):(d=(t.max.z-x.z)*S,m=(t.min.z-x.z)*S),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ji)!==null}intersectTriangle(t,i,s,l,u){Zf.subVectors(i,t),Kl.subVectors(s,t),jf.crossVectors(Zf,Kl);let h=this.direction.dot(jf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,t);const m=d*this.direction.dot(Kl.crossVectors(Da,Kl));if(m<0)return null;const p=d*this.direction.dot(Zf.cross(Da));if(p<0||m+p>h)return null;const g=-d*Da.dot(jf);return g<0?null:this.at(g/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(t,i,s,l,u,h,d,m,p,g,S,x,M,R,w,y){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,m,p,g,S,x,M,R,w,y)}set(t,i,s,l,u,h,d,m,p,g,S,x,M,R,w,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=g,_[10]=S,_[14]=x,_[3]=M,_[7]=R,_[11]=w,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/ar.setFromMatrixColumn(t,0).length(),u=1/ar.setFromMatrixColumn(t,1).length(),h=1/ar.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),S=Math.sin(u);if(t.order==="XYZ"){const x=h*g,M=h*S,R=d*g,w=d*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+R*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=R+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*g,M=m*S,R=p*g,w=p*S;i[0]=x+w*d,i[4]=R*d-M,i[8]=h*p,i[1]=h*S,i[5]=h*g,i[9]=-d,i[2]=M*d-R,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*g,M=m*S,R=p*g,w=p*S;i[0]=x-w*d,i[4]=-h*S,i[8]=R+M*d,i[1]=M+R*d,i[5]=h*g,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*g,M=h*S,R=d*g,w=d*S;i[0]=m*g,i[4]=R*p-M,i[8]=x*p+w,i[1]=m*S,i[5]=w*p+x,i[9]=M*p-R,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=w-x*S,i[8]=R*S+M,i[1]=S,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=M*S+R,i[10]=x-w*S}else if(t.order==="XZY"){const x=h*m,M=h*p,R=d*m,w=d*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=x*S+w,i[5]=h*g,i[9]=M*S-R,i[2]=R*S-M,i[6]=d*g,i[10]=w*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Px,t,zx)}lookAt(t,i,s){const l=this.elements;return Yn.subVectors(t,i),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ua.crossVectors(s,Yn),Ua.lengthSq()===0&&(Math.abs(s.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ua.crossVectors(s,Yn)),Ua.normalize(),Ql.crossVectors(Yn,Ua),l[0]=Ua.x,l[4]=Ql.x,l[8]=Yn.x,l[1]=Ua.y,l[5]=Ql.y,l[9]=Yn.y,l[2]=Ua.z,l[6]=Ql.z,l[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],S=s[5],x=s[9],M=s[13],R=s[2],w=s[6],y=s[10],_=s[14],P=s[3],O=s[7],D=s[11],H=s[15],I=l[0],B=l[4],K=l[8],C=l[12],A=l[1],F=l[5],ct=l[9],at=l[13],mt=l[2],ht=l[6],W=l[10],st=l[14],Z=l[3],xt=l[7],L=l[11],it=l[15];return u[0]=h*I+d*A+m*mt+p*Z,u[4]=h*B+d*F+m*ht+p*xt,u[8]=h*K+d*ct+m*W+p*L,u[12]=h*C+d*at+m*st+p*it,u[1]=g*I+S*A+x*mt+M*Z,u[5]=g*B+S*F+x*ht+M*xt,u[9]=g*K+S*ct+x*W+M*L,u[13]=g*C+S*at+x*st+M*it,u[2]=R*I+w*A+y*mt+_*Z,u[6]=R*B+w*F+y*ht+_*xt,u[10]=R*K+w*ct+y*W+_*L,u[14]=R*C+w*at+y*st+_*it,u[3]=P*I+O*A+D*mt+H*Z,u[7]=P*B+O*F+D*ht+H*xt,u[11]=P*K+O*ct+D*W+H*L,u[15]=P*C+O*at+D*st+H*it,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],S=t[6],x=t[10],M=t[14],R=t[3],w=t[7],y=t[11],_=t[15];return R*(+u*m*S-l*p*S-u*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*g-u*m*g)+y*(+i*p*S-i*d*M-u*h*S+s*h*M+u*d*g-s*p*g)+_*(-l*d*g-i*m*S+i*d*x+l*h*S-s*h*x+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],S=t[9],x=t[10],M=t[11],R=t[12],w=t[13],y=t[14],_=t[15],P=S*y*p-w*x*p+w*m*M-d*y*M-S*m*_+d*x*_,O=R*x*p-g*y*p-R*m*M+h*y*M+g*m*_-h*x*_,D=g*w*p-R*S*p+R*d*M-h*w*M-g*d*_+h*S*_,H=R*S*m-g*w*m-R*d*x+h*w*x+g*d*y-h*S*y,I=i*P+s*O+l*D+u*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=P*B,t[1]=(w*x*u-S*y*u-w*l*M+s*y*M+S*l*_-s*x*_)*B,t[2]=(d*y*u-w*m*u+w*l*p-s*y*p-d*l*_+s*m*_)*B,t[3]=(S*m*u-d*x*u-S*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=O*B,t[5]=(g*y*u-R*x*u+R*l*M-i*y*M-g*l*_+i*x*_)*B,t[6]=(R*m*u-h*y*u-R*l*p+i*y*p+h*l*_-i*m*_)*B,t[7]=(h*x*u-g*m*u+g*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=D*B,t[9]=(R*S*u-g*w*u-R*s*M+i*w*M+g*s*_-i*S*_)*B,t[10]=(h*w*u-R*d*u+R*s*p-i*w*p-h*s*_+i*d*_)*B,t[11]=(g*d*u-h*S*u-g*s*p+i*S*p+h*s*M-i*d*M)*B,t[12]=H*B,t[13]=(g*w*l-R*S*l+R*s*x-i*w*x-g*s*y+i*S*y)*B,t[14]=(R*d*l-h*w*l-R*s*m+i*w*m+h*s*y-i*d*y)*B,t[15]=(h*S*l-g*d*l+g*s*m-i*S*m-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,m=t.z,p=u*h,g=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,g=h+h,S=d+d,x=u*p,M=u*g,R=u*S,w=h*g,y=h*S,_=d*S,P=m*p,O=m*g,D=m*S,H=s.x,I=s.y,B=s.z;return l[0]=(1-(w+_))*H,l[1]=(M+D)*H,l[2]=(R-O)*H,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(x+_))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(R+O)*B,l[9]=(y-P)*B,l[10]=(1-(x+w))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=ar.set(l[0],l[1],l[2]).length();const h=ar.set(l[4],l[5],l[6]).length(),d=ar.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],pi.copy(this);const p=1/u,g=1/h,S=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=g,pi.elements[5]*=g,pi.elements[6]*=g,pi.elements[8]*=S,pi.elements[9]*=S,pi.elements[10]*=S,i.setFromRotationMatrix(pi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=na){const m=this.elements,p=2*u/(i-t),g=2*u/(s-l),S=(i+t)/(i-t),x=(s+l)/(s-l);let M,R;if(d===na)M=-(h+u)/(h-u),R=-2*h*u/(h-u);else if(d===bc)M=-h/(h-u),R=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=na){const m=this.elements,p=1/(i-t),g=1/(s-l),S=1/(h-u),x=(i+t)*p,M=(s+l)*g;let R,w;if(d===na)R=(h+u)*S,w=-2*S;else if(d===bc)R=u*S,w=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=w,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const ar=new $,pi=new je,Px=new $(0,0,0),zx=new $(1,1,1),Ua=new $,Ql=new $,Yn=new $,Z_=new je,j_=new Ss;class sa{constructor(t=0,i=0,s=0,l=sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],S=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(pe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(pe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-pe(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(pe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Z_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return j_.setFromEuler(this),this.setFromQuaternion(j_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sa.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bx=0;const K_=new $,sr=new Ss,Ki=new je,Jl=new $,Ao=new $,Fx=new $,Ix=new Ss,Q_=new $(1,0,0),J_=new $(0,1,0),$_=new $(0,0,1),tg={type:"added"},Hx={type:"removed"},rr={type:"childadded",child:null},Kf={type:"childremoved",child:null};class Hn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new $,i=new sa,s=new Ss,l=new $(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new je},normalMatrix:{value:new oe}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return sr.setFromAxisAngle(t,i),this.quaternion.multiply(sr),this}rotateOnWorldAxis(t,i){return sr.setFromAxisAngle(t,i),this.quaternion.premultiply(sr),this}rotateX(t){return this.rotateOnAxis(Q_,t)}rotateY(t){return this.rotateOnAxis(J_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return K_.copy(t).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Q_,t)}translateY(t){return this.translateOnAxis(J_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Jl.copy(t):Jl.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Ao,Jl,this.up):Ki.lookAt(Jl,Ao,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),sr.setFromRotationMatrix(Ki),this.quaternion.premultiply(sr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tg),rr.child=t,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Hx),Kf.child=t,this.dispatchEvent(Kf),Kf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tg),rr.child=t,this.dispatchEvent(rr),rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,Fx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,Ix,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];u(t.shapes,S)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),S=h(t.shapes),x=h(t.skeletons),M=h(t.animations),R=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),S.length>0&&(s.shapes=S),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),R.length>0&&(s.nodes=R)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new $(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new $,Qi=new $,Qf=new $,Ji=new $,or=new $,lr=new $,eg=new $,Jf=new $,$f=new $,th=new $,eh=new Ze,nh=new Ze,ih=new Ze;class _i{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),mi.subVectors(t,i),l.cross(mi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){mi.subVectors(l,i),Qi.subVectors(s,i),Qf.subVectors(t,i);const h=mi.dot(mi),d=mi.dot(Qi),m=mi.dot(Qf),p=Qi.dot(Qi),g=Qi.dot(Qf),S=h*p-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,M=(p*m-d*g)*x,R=(h*g-d*m)*x;return u.set(1-M-R,R,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,s,l,u,h,d,m){return this.getBarycoord(t,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,s,l,u,h){return eh.setScalar(0),nh.setScalar(0),ih.setScalar(0),eh.fromBufferAttribute(t,i),nh.fromBufferAttribute(t,s),ih.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(eh,u.x),h.addScaledVector(nh,u.y),h.addScaledVector(ih,u.z),h}static isFrontFacing(t,i,s,l){return mi.subVectors(s,i),Qi.subVectors(t,i),mi.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),mi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;or.subVectors(l,s),lr.subVectors(u,s),Jf.subVectors(t,s);const m=or.dot(Jf),p=lr.dot(Jf);if(m<=0&&p<=0)return i.copy(s);$f.subVectors(t,l);const g=or.dot($f),S=lr.dot($f);if(g>=0&&S<=g)return i.copy(l);const x=m*S-g*p;if(x<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(or,h);th.subVectors(t,u);const M=or.dot(th),R=lr.dot(th);if(R>=0&&M<=R)return i.copy(u);const w=M*p-m*R;if(w<=0&&p>=0&&R<=0)return d=p/(p-R),i.copy(s).addScaledVector(lr,d);const y=g*R-M*S;if(y<=0&&S-g>=0&&M-R>=0)return eg.subVectors(u,l),d=(S-g)/(S-g+(M-R)),i.copy(l).addScaledVector(eg,d);const _=1/(y+w+x);return h=w*_,d=x*_,i.copy(s).addScaledVector(or,h).addScaledVector(lr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},$l={h:0,s:0,l:0};function ah(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class we{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ri){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Mx(t,1),i=pe(i,0,1),s=pe(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=ah(h,u,t+1/3),this.g=ah(h,u,t),this.b=ah(h,u,t-1/3)}return Ae.toWorkingColorSpace(this,l),this}setStyle(t,i=ri){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ri){const s=fv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ia(t.r),this.g=ia(t.g),this.b=ia(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ri){return Ae.fromWorkingColorSpace(En.copy(this),t),Math.round(pe(En.r*255,0,255))*65536+Math.round(pe(En.g*255,0,255))*256+Math.round(pe(En.b*255,0,255))}getHexString(t=ri){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.fromWorkingColorSpace(En.copy(this),i);const s=En.r,l=En.g,u=En.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const S=h-d;switch(p=g<=.5?S/(h+d):S/(2-h-d),h){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ae.workingColorSpace){return Ae.fromWorkingColorSpace(En.copy(this),i),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=ri){Ae.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,l=En.b;return t!==ri?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(La),this.setHSL(La.h+t,La.s+i,La.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(La),t.getHSL($l);const s=Gf(La.h,$l.h,i),l=Gf(La.s,$l.s,i),u=Gf(La.l,$l.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new we;we.NAMES=fv;let Gx=0;class Bo extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=gr,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Eh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Mh&&(s.blendSrc=this.blendSrc),this.blendDst!==Eh&&(s.blendDst=this.blendDst),this.blendEquation!==ds&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==G_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(s.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lc extends Bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sa,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new $,tc=new he;let Vx=0;class Di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vx++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=V_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(t),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Eo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=zn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Eo(i,this.array)),i}setX(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Eo(i,this.array)),i}setY(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Eo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Eo(i,this.array)),i}setW(t,i){return this.normalized&&(i=zn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=zn(i,this.array),s=zn(s,this.array),l=zn(l,this.array),u=zn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==V_&&(t.usage=this.usage),t}}class hv extends Di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class dv extends Di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class xi extends Di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let kx=0;const si=new je,sh=new Hn,cr=new $,Zn=new zo,Ro=new zo,pn=new $;class yi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ov(t)?dv:hv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new oe().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return si.makeRotationFromQuaternion(t),this.applyMatrix4(si),this}rotateX(t){return si.makeRotationX(t),this.applyMatrix4(si),this}rotateY(t){return si.makeRotationY(t),this.applyMatrix4(si),this}rotateZ(t){return si.makeRotationZ(t),this.applyMatrix4(si),this}translate(t,i,s){return si.makeTranslation(t,i,s),this.applyMatrix4(si),this}scale(t,i,s){return si.makeScale(t,i,s),this.applyMatrix4(si),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Zn.setFromBufferAttribute(u),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ro.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Zn.min,Ro.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,Ro.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(Ro.min),Zn.expandByPoint(Ro.max))}Zn.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)pn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(pn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)pn.fromBufferAttribute(d,p),m&&(cr.fromBufferAttribute(t,p),pn.add(cr)),l=Math.max(l,s.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<s.count;K++)d[K]=new $,m[K]=new $;const p=new $,g=new $,S=new $,x=new he,M=new he,R=new he,w=new $,y=new $;function _(K,C,A){p.fromBufferAttribute(s,K),g.fromBufferAttribute(s,C),S.fromBufferAttribute(s,A),x.fromBufferAttribute(u,K),M.fromBufferAttribute(u,C),R.fromBufferAttribute(u,A),g.sub(p),S.sub(p),M.sub(x),R.sub(x);const F=1/(M.x*R.y-R.x*M.y);isFinite(F)&&(w.copy(g).multiplyScalar(R.y).addScaledVector(S,-M.y).multiplyScalar(F),y.copy(S).multiplyScalar(M.x).addScaledVector(g,-R.x).multiplyScalar(F),d[K].add(w),d[C].add(w),d[A].add(w),m[K].add(y),m[C].add(y),m[A].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ct=A.count;for(let at=F,mt=F+ct;at<mt;at+=3)_(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const O=new $,D=new $,H=new $,I=new $;function B(K){H.fromBufferAttribute(l,K),I.copy(H);const C=d[K];O.copy(C),O.sub(H.multiplyScalar(H.dot(C))).normalize(),D.crossVectors(I,C);const F=D.dot(m[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,F)}for(let K=0,C=P.length;K<C;++K){const A=P[K],F=A.start,ct=A.count;for(let at=F,mt=F+ct;at<mt;at+=3)B(t.getX(at+0)),B(t.getX(at+1)),B(t.getX(at+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new $,u=new $,h=new $,d=new $,m=new $,p=new $,g=new $,S=new $;if(t)for(let x=0,M=t.count;x<M;x+=3){const R=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),d.fromBufferAttribute(s,R),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(g),m.add(g),p.add(g),s.setXYZ(R,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),g.subVectors(h,u),S.subVectors(l,u),g.cross(S),s.setXYZ(x+0,g.x,g.y,g.z),s.setXYZ(x+1,g.x,g.y,g.z),s.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)pn.fromBufferAttribute(t,i),pn.normalize(),t.setXYZ(i,pn.x,pn.y,pn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,S=d.normalized,x=new p.constructor(m.length*g);let M=0,R=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*g;for(let _=0;_<g;_++)x[R++]=p[M++]}return new Di(x,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new yi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let g=0,S=p.length;g<S;g++){const x=p[g],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];g.push(M.toJSON(t.data))}g.length>0&&(l[m]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=t.morphAttributes;for(const p in u){const g=[],S=u[p];for(let x=0,M=S.length;x<M;x++)g.push(S[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const S=h[p];this.addGroup(S.start,S.count,S.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ng=new je,ls=new _d,ec=new Uc,ig=new $,nc=new $,ic=new $,ac=new $,rh=new $,sc=new $,ag=new $,rc=new $;class vi extends Hn{constructor(t=new yi,i=new Lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){sc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=d[m],S=u[m];g!==0&&(rh.fromBufferAttribute(S,t),h?sc.addScaledVector(rh,g):sc.addScaledVector(rh.sub(i),g))}i.add(sc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ec.copy(s.boundingSphere),ec.applyMatrix4(u),ls.copy(t.ray).recast(t.near),!(ec.containsPoint(ls.origin)===!1&&(ls.intersectSphere(ec,ig)===null||ls.origin.distanceToSquared(ig)>(t.far-t.near)**2))&&(ng.copy(u).invert(),ls.copy(t.ray).applyMatrix4(ng),!(s.boundingBox!==null&&ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ls)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,S=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const y=x[R],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const I=d.getX(D),B=d.getX(D+1),K=d.getX(D+2);l=oc(this,_,t,s,p,g,S,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=R,_=w;y<_;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=oc(this,h,t,s,p,g,S,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let R=0,w=x.length;R<w;R++){const y=x[R],_=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const I=D,B=D+1,K=D+2;l=oc(this,_,t,s,p,g,S,I,B,K),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=R,_=w;y<_;y+=3){const P=y,O=y+1,D=y+2;l=oc(this,h,t,s,p,g,S,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Xx(o,t,i,s,l,u,h,d){let m;if(t.side===Fn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,t.side===Fa,d),m===null)return null;rc.copy(d),rc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(rc);return p<i.near||p>i.far?null:{distance:p,point:rc.clone(),object:o}}function oc(o,t,i,s,l,u,h,d,m,p){o.getVertexPosition(d,nc),o.getVertexPosition(m,ic),o.getVertexPosition(p,ac);const g=Xx(o,t,i,s,nc,ic,ac,ag);if(g){const S=new $;_i.getBarycoord(ag,nc,ic,ac,S),l&&(g.uv=_i.getInterpolatedAttribute(l,d,m,p,S,new he)),u&&(g.uv1=_i.getInterpolatedAttribute(u,d,m,p,S,new he)),h&&(g.normal=_i.getInterpolatedAttribute(h,d,m,p,S,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new $,materialIndex:0};_i.getNormal(nc,ic,ac,x.normal),g.face=x,g.barycoord=S}return g}class Fo extends yi{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],g=[],S=[];let x=0,M=0;R("z","y","x",-1,-1,s,i,t,h,u,0),R("z","y","x",1,-1,s,i,-t,h,u,1),R("x","z","y",1,1,t,s,i,l,h,2),R("x","z","y",1,-1,t,s,-i,l,h,3),R("x","y","z",1,-1,t,i,s,l,u,4),R("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new xi(p,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(S,2));function R(w,y,_,P,O,D,H,I,B,K,C){const A=D/B,F=H/K,ct=D/2,at=H/2,mt=I/2,ht=B+1,W=K+1;let st=0,Z=0;const xt=new $;for(let L=0;L<W;L++){const it=L*F-at;for(let Et=0;Et<ht;Et++){const At=Et*A-ct;xt[w]=At*P,xt[y]=it*O,xt[_]=mt,p.push(xt.x,xt.y,xt.z),xt[w]=0,xt[y]=0,xt[_]=I>0?1:-1,g.push(xt.x,xt.y,xt.z),S.push(Et/B),S.push(1-L/K),st+=1}}for(let L=0;L<K;L++)for(let it=0;it<B;it++){const Et=x+it+ht*L,At=x+it+ht*(L+1),q=x+(it+1)+ht*(L+1),dt=x+(it+1)+ht*L;m.push(Et,At,dt),m.push(At,q,dt),Z+=6}d.addGroup(M,Z,C),M+=Z,x+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ar(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const s=Ar(o[i]);for(const l in s)t[l]=s[l]}return t}function Wx(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function pv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const qx={clone:Ar,merge:Un};var Yx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ia extends Bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ar(t.uniforms),this.uniformsGroups=Wx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class mv extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=na}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new $,sg=new he,rg=new he;class oi extends mv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return od*2*Math.atan(Math.tan(yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,i){return this.getViewBounds(t,sg,rg),i.subVectors(rg,sg)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(yc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ur=-90,fr=1;class jx extends Hn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ur,fr,t,i);l.layers=this.layers,this.add(l);const u=new oi(ur,fr,t,i);u.layers=this.layers,this.add(u);const h=new oi(ur,fr,t,i);h.layers=this.layers,this.add(h);const d=new oi(ur,fr,t,i);d.layers=this.layers,this.add(d);const m=new oi(ur,fr,t,i);m.layers=this.layers,this.add(m);const p=new oi(ur,fr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===na)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,g]=this.children,S=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),R=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(S,x,M),t.xr.enabled=R,s.texture.needsPMREMUpdate=!0}}class _v extends In{constructor(t,i,s,l,u,h,d,m,p,g){t=t!==void 0?t:[],i=i!==void 0?i:yr,super(t,i,s,l,u,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kx extends vs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new _v(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:wi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fo(5,5,5),u=new Ia({name:"CubemapFromEquirect",uniforms:Ar(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:za});u.uniforms.tEquirect.value=i;const h=new vi(l,u),d=i.minFilter;return i.minFilter===_s&&(i.minFilter=wi),new jx(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,s,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class lc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qx={type:"move"};class oh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),_=this._getHandJoint(p,w);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=g.position.distanceTo(S.position),M=.02,R=.005;p.inputState.pinching&&x>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new lc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Jx extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sa,this.environmentIntensity=1,this.environmentRotation=new sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const lh=new $,$x=new $,ty=new oe;class Oa{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=lh.subVectors(s,i).cross($x.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||ty.getNormalMatrix(t),l=this.coplanarPoint(lh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new Uc,cc=new $;class gv{constructor(t=new Oa,i=new Oa,s=new Oa,l=new Oa,u=new Oa,h=new Oa){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=na){const s=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],g=l[5],S=l[6],x=l[7],M=l[8],R=l[9],w=l[10],y=l[11],_=l[12],P=l[13],O=l[14],D=l[15];if(s[0].setComponents(m-u,x-p,y-M,D-_).normalize(),s[1].setComponents(m+u,x+p,y+M,D+_).normalize(),s[2].setComponents(m+h,x+g,y+R,D+P).normalize(),s[3].setComponents(m-h,x-g,y-R,D-P).normalize(),s[4].setComponents(m-d,x-S,y-w,D-O).normalize(),i===na)s[5].setComponents(m+d,x+S,y+w,D+O).normalize();else if(i===bc)s[5].setComponents(d,S,w,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cc.x=l.normal.x>0?t.max.x:t.min.x,cc.y=l.normal.y>0?t.max.y:t.min.y,cc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends Bo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rc=new $,Cc=new $,og=new je,Co=new _d,uc=new Uc,ch=new $,lg=new $;class ey extends Hn{constructor(t=new yi,i=new vv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Rc.fromBufferAttribute(i,l-1),Cc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Rc.distanceTo(Cc);t.setAttribute("lineDistance",new xi(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(l),uc.radius+=u,t.ray.intersectsSphere(uc)===!1)return;og.copy(l).invert(),Co.copy(t.ray).applyMatrix4(og);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,x=s.attributes.position;if(g!==null){const M=Math.max(0,h.start),R=Math.min(g.count,h.start+h.count);for(let w=M,y=R-1;w<y;w+=p){const _=g.getX(w),P=g.getX(w+1),O=fc(this,t,Co,m,_,P,w);O&&i.push(O)}if(this.isLineLoop){const w=g.getX(R-1),y=g.getX(M),_=fc(this,t,Co,m,w,y,R-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),R=Math.min(x.count,h.start+h.count);for(let w=M,y=R-1;w<y;w+=p){const _=fc(this,t,Co,m,w,w+1,w);_&&i.push(_)}if(this.isLineLoop){const w=fc(this,t,Co,m,R-1,M,R-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function fc(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(Rc.fromBufferAttribute(d,l),Cc.fromBufferAttribute(d,u),i.distanceSqToSegment(Rc,Cc,ch,lg)>s)return;ch.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(ch);if(!(p<t.near||p>t.far))return{distance:p,point:lg.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}class Sv extends In{constructor(t,i,s,l,u,h,d,m,p,g=vr){if(g!==vr&&g!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===vr&&(s=gs),s===void 0&&g===Tr&&(s=Er),super(null,l,u,h,d,m,g,s,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Si,this.minFilter=m!==void 0?m:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Nc extends yi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,S=t/d,x=i/m,M=[],R=[],w=[],y=[];for(let _=0;_<g;_++){const P=_*x-h;for(let O=0;O<p;O++){const D=O*S-u;R.push(D,-P,0),w.push(0,0,1),y.push(O/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<d;P++){const O=P+p*_,D=P+p*(_+1),H=P+1+p*(_+1),I=P+1+p*_;M.push(O,D,I),M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new xi(R,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oc extends yi{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const g=[],S=new $,x=new $,M=[],R=[],w=[],y=[];for(let _=0;_<=s;_++){const P=[],O=_/s;let D=0;_===0&&h===0?D=.5/i:_===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const I=H/i;S.x=-t*Math.cos(l+I*u)*Math.sin(h+O*d),S.y=t*Math.cos(h+O*d),S.z=t*Math.sin(l+I*u)*Math.sin(h+O*d),R.push(S.x,S.y,S.z),x.copy(S).normalize(),w.push(x.x,x.y,x.z),y.push(I+D,1-O),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const O=g[_][P+1],D=g[_][P],H=g[_+1][P],I=g[_+1][P+1];(_!==0||h>0)&&M.push(O,D,I),(_!==s-1||m<Math.PI)&&M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new xi(R,3)),this.setAttribute("normal",new xi(w,3)),this.setAttribute("uv",new xi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ny extends Bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class iy extends Bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ay extends mv{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sy extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class cg{constructor(t=1,i=0,s=0){return this.radius=t,this.phi=i,this.theta=s,this}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=pe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(pe(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ry extends xs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ug(o,t,i,s){const l=oy(s);switch(i){case $g:return o*t;case ev:return o*t;case nv:return o*t*2;case iv:return o*t/l.components*l.byteLength;case dd:return o*t/l.components*l.byteLength;case av:return o*t*2/l.components*l.byteLength;case pd:return o*t*2/l.components*l.byteLength;case tv:return o*t*3/l.components*l.byteLength;case gi:return o*t*4/l.components*l.byteLength;case md:return o*t*4/l.components*l.byteLength;case _c:case gc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case zh:case Fh:return Math.max(o,16)*Math.max(t,8)/4;case Ph:case Bh:return Math.max(o,8)*Math.max(t,8)/2;case Ih:case Hh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Xh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case qh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Yh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Zh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case jh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Jh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case $h:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case td:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ed:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case xc:case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16;case sv:case ad:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sd:case rd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oy(o){switch(o){case aa:case Kg:return{byteLength:1,components:1};case Lo:case Qg:case Oo:return{byteLength:2,components:1};case fd:case hd:return{byteLength:2,components:4};case gs:case ud:case ea:return{byteLength:4,components:1};case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function ly(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:S}}function s(d,m,p){const g=m.array,S=m.updateRanges;if(o.bindBuffer(p,d),S.length===0)o.bufferSubData(p,0,g);else{S.sort((M,R)=>M.start-R.start);let x=0;for(let M=1;M<S.length;M++){const R=S[x],w=S[M];w.start<=R.start+R.count+1?R.count=Math.max(R.count,w.start+w.count-R.start):(++x,S[x]=w)}S.length=x+1;for(let M=0,R=S.length;M<R;M++){const w=S[M];o.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var cy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,py=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,my=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,My=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ey=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Oy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,oM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,RM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,OM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,HM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,YM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ZM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_E=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,EE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:cy,alphahash_pars_fragment:uy,alphamap_fragment:fy,alphamap_pars_fragment:hy,alphatest_fragment:dy,alphatest_pars_fragment:py,aomap_fragment:my,aomap_pars_fragment:_y,batching_pars_vertex:gy,batching_vertex:vy,begin_vertex:Sy,beginnormal_vertex:xy,bsdfs:yy,iridescence_fragment:My,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Ry,color_fragment:Cy,color_pars_fragment:wy,color_pars_vertex:Dy,color_vertex:Uy,common:Ly,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Oy,displacementmap_pars_vertex:Py,displacementmap_vertex:zy,emissivemap_fragment:By,emissivemap_pars_fragment:Fy,colorspace_fragment:Iy,colorspace_pars_fragment:Hy,envmap_fragment:Gy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:ky,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:eM,envmap_vertex:Wy,fog_vertex:qy,fog_pars_vertex:Yy,fog_fragment:Zy,fog_pars_fragment:jy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Qy,lights_lambert_fragment:Jy,lights_lambert_pars_fragment:$y,lights_pars_begin:tM,lights_toon_fragment:nM,lights_toon_pars_fragment:iM,lights_phong_fragment:aM,lights_phong_pars_fragment:sM,lights_physical_fragment:rM,lights_physical_pars_fragment:oM,lights_fragment_begin:lM,lights_fragment_maps:cM,lights_fragment_end:uM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:_M,map_particle_fragment:gM,map_particle_pars_fragment:vM,metalnessmap_fragment:SM,metalnessmap_pars_fragment:xM,morphinstance_vertex:yM,morphcolor_vertex:MM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:bM,normal_fragment_begin:AM,normal_fragment_maps:RM,normal_pars_fragment:CM,normal_pars_vertex:wM,normal_vertex:DM,normalmap_pars_fragment:UM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:OM,iridescence_pars_fragment:PM,opaque_fragment:zM,packing:BM,premultiplied_alpha_fragment:FM,project_vertex:IM,dithering_fragment:HM,dithering_pars_fragment:GM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:kM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:WM,shadowmap_vertex:qM,shadowmask_pars_fragment:YM,skinbase_vertex:ZM,skinning_pars_vertex:jM,skinning_vertex:KM,skinnormal_vertex:QM,specularmap_fragment:JM,specularmap_pars_fragment:$M,tonemapping_fragment:tE,tonemapping_pars_fragment:eE,transmission_fragment:nE,transmission_pars_fragment:iE,uv_pars_fragment:aE,uv_pars_vertex:sE,uv_vertex:rE,worldpos_vertex:oE,background_vert:lE,background_frag:cE,backgroundCube_vert:uE,backgroundCube_frag:fE,cube_vert:hE,cube_frag:dE,depth_vert:pE,depth_frag:mE,distanceRGBA_vert:_E,distanceRGBA_frag:gE,equirect_vert:vE,equirect_frag:SE,linedashed_vert:xE,linedashed_frag:yE,meshbasic_vert:ME,meshbasic_frag:EE,meshlambert_vert:TE,meshlambert_frag:bE,meshmatcap_vert:AE,meshmatcap_frag:RE,meshnormal_vert:CE,meshnormal_frag:wE,meshphong_vert:DE,meshphong_frag:UE,meshphysical_vert:LE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:PE,points_vert:zE,points_frag:BE,shadow_vert:FE,shadow_frag:IE,sprite_vert:HE,sprite_frag:GE},Ut={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},envMapRotation:{value:new oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},Ci={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new we(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new oe}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Ci.physical={uniforms:Un([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const hc={r:0,b:0,g:0},us=new sa,VE=new je;function kE(o,t,i,s,l,u,h){const d=new we(0);let m=u===!0?0:1,p,g,S=null,x=0,M=null;function R(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function w(O){let D=!1;const H=R(O);H===null?_(d,m):H&&H.isColor&&(_(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const H=R(D);H&&(H.isCubeTexture||H.mapping===Dc)?(g===void 0&&(g=new vi(new Fo(1,1,1),new Ia({name:"BackgroundCubeMaterial",uniforms:Ar(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,B,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),us.copy(D.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(VE.makeRotationFromEuler(us)),g.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,(S!==H||x!==H.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=H,x=H.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new vi(new Nc(2,2),new Ia({name:"BackgroundMaterial",uniforms:Ar(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(S!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,D){O.getRGB(hc,pv(o)),s.buffers.color.setClear(hc.r,hc.g,hc.b,D,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(d,m)},render:w,addToRenderList:y,dispose:P}}function XE(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(A,F,ct,at,mt){let ht=!1;const W=S(at,ct,F);u!==W&&(u=W,p(u.object)),ht=M(A,at,ct,mt),ht&&R(A,at,ct,mt),mt!==null&&t.update(mt,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(A,F,ct,at),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function g(A){return o.deleteVertexArray(A)}function S(A,F,ct){const at=ct.wireframe===!0;let mt=s[A.id];mt===void 0&&(mt={},s[A.id]=mt);let ht=mt[F.id];ht===void 0&&(ht={},mt[F.id]=ht);let W=ht[at];return W===void 0&&(W=x(m()),ht[at]=W),W}function x(A){const F=[],ct=[],at=[];for(let mt=0;mt<i;mt++)F[mt]=0,ct[mt]=0,at[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:ct,attributeDivisors:at,object:A,attributes:{},index:null}}function M(A,F,ct,at){const mt=u.attributes,ht=F.attributes;let W=0;const st=ct.getAttributes();for(const Z in st)if(st[Z].location>=0){const L=mt[Z];let it=ht[Z];if(it===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;W++}return u.attributesNum!==W||u.index!==at}function R(A,F,ct,at){const mt={},ht=F.attributes;let W=0;const st=ct.getAttributes();for(const Z in st)if(st[Z].location>=0){let L=ht[Z];L===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(L=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(L=A.instanceColor));const it={};it.attribute=L,L&&L.data&&(it.data=L.data),mt[Z]=it,W++}u.attributes=mt,u.attributesNum=W,u.index=at}function w(){const A=u.newAttributes;for(let F=0,ct=A.length;F<ct;F++)A[F]=0}function y(A){_(A,0)}function _(A,F){const ct=u.newAttributes,at=u.enabledAttributes,mt=u.attributeDivisors;ct[A]=1,at[A]===0&&(o.enableVertexAttribArray(A),at[A]=1),mt[A]!==F&&(o.vertexAttribDivisor(A,F),mt[A]=F)}function P(){const A=u.newAttributes,F=u.enabledAttributes;for(let ct=0,at=F.length;ct<at;ct++)F[ct]!==A[ct]&&(o.disableVertexAttribArray(ct),F[ct]=0)}function O(A,F,ct,at,mt,ht,W){W===!0?o.vertexAttribIPointer(A,F,ct,mt,ht):o.vertexAttribPointer(A,F,ct,at,mt,ht)}function D(A,F,ct,at){w();const mt=at.attributes,ht=ct.getAttributes(),W=F.defaultAttributeValues;for(const st in ht){const Z=ht[st];if(Z.location>=0){let xt=mt[st];if(xt===void 0&&(st==="instanceMatrix"&&A.instanceMatrix&&(xt=A.instanceMatrix),st==="instanceColor"&&A.instanceColor&&(xt=A.instanceColor)),xt!==void 0){const L=xt.normalized,it=xt.itemSize,Et=t.get(xt);if(Et===void 0)continue;const At=Et.buffer,q=Et.type,dt=Et.bytesPerElement,St=q===o.INT||q===o.UNSIGNED_INT||xt.gpuType===ud;if(xt.isInterleavedBufferAttribute){const Tt=xt.data,Rt=Tt.stride,Kt=xt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Z.locationSize;Pt++)_(Z.location+Pt,Tt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Pt=0;Pt<Z.locationSize;Pt++)y(Z.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<Z.locationSize;Pt++)O(Z.location+Pt,it/Z.locationSize,q,L,Rt*dt,(Kt+it/Z.locationSize*Pt)*dt,St)}else{if(xt.isInstancedBufferAttribute){for(let Tt=0;Tt<Z.locationSize;Tt++)_(Z.location+Tt,xt.meshPerAttribute);A.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)y(Z.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<Z.locationSize;Tt++)O(Z.location+Tt,it/Z.locationSize,q,L,it*dt,it/Z.locationSize*Tt*dt,St)}}else if(W!==void 0){const L=W[st];if(L!==void 0)switch(L.length){case 2:o.vertexAttrib2fv(Z.location,L);break;case 3:o.vertexAttrib3fv(Z.location,L);break;case 4:o.vertexAttrib4fv(Z.location,L);break;default:o.vertexAttrib1fv(Z.location,L)}}}}P()}function H(){K();for(const A in s){const F=s[A];for(const ct in F){const at=F[ct];for(const mt in at)g(at[mt].object),delete at[mt];delete F[ct]}delete s[A]}}function I(A){if(s[A.id]===void 0)return;const F=s[A.id];for(const ct in F){const at=F[ct];for(const mt in at)g(at[mt].object),delete at[mt];delete F[ct]}delete s[A.id]}function B(A){for(const F in s){const ct=s[F];if(ct[A.id]===void 0)continue;const at=ct[A.id];for(const mt in at)g(at[mt].object),delete at[mt];delete ct[A.id]}}function K(){C(),h=!0,u!==l&&(u=l,p(u.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:w,enableAttribute:y,disableUnusedAttributes:P}}function WE(o,t,i){let s;function l(p){s=p}function u(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,S){S!==0&&(o.drawArraysInstanced(s,p,g,S),i.update(g,s,S))}function d(p,g,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,S);let M=0;for(let R=0;R<S;R++)M+=g[R];i.update(M,s,1)}function m(p,g,S,x){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)h(p[R],g[R],x[R]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,x,0,S);let R=0;for(let w=0;w<S;w++)R+=g[w]*x[w];i.update(R,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function qE(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==gi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const K=B===Oo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==aa&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!K)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=R>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:S,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:R,maxTextureSize:w,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function YE(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Oa,d=new oe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||s!==0||l;return l=x,s=S.length,M},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){i=g(S,x,0)},this.setState=function(S,x,M){const R=S.clippingPlanes,w=S.clipIntersection,y=S.clipShadows,_=o.get(S);if(!l||R===null||R.length===0||u&&!y)u?g(null):p();else{const P=u?0:s,O=P*4;let D=_.clippingState||null;m.value=D,D=g(R,x,O,M);for(let H=0;H!==O;++H)D[H]=i[H];_.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(S,x,M,R){const w=S!==null?S.length:0;let y=null;if(w!==0){if(y=m.value,R!==!0||y===null){const _=M+w*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let O=0,D=M;O!==w;++O,D+=4)h.copy(S[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function ZE(o){let t=new WeakMap;function i(h,d){return d===Uh?h.mapping=yr:d===Lh&&(h.mapping=Mr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Uh||d===Lh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Kx(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const mr=4,fg=[.125,.215,.35,.446,.526,.582],ps=20,uh=new ay,hg=new we;let fh=null,hh=0,dh=0,ph=!1;const hs=(1+Math.sqrt(5))/2,hr=1/hs,dg=[new $(-hs,hr,0),new $(hs,hr,0),new $(-hr,0,hs),new $(hr,0,hs),new $(0,hs,-hr),new $(0,hs,hr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class pg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,t.scissorTest=!1,dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===yr||t.mapping===Mr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:Oo,format:gi,colorSpace:br,depthBuffer:!1},l=mg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jE(u)),this._blurMaterial=KE(u,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,uh)}_sceneToCubeUV(t,i,s,l){const d=new oi(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(hg),g.toneMapping=Ba,g.autoClear=!1;const M=new Lc({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),R=new vi(new Fo,M);let w=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,w=!0):(M.color.copy(hg),w=!0);for(let _=0;_<6;_++){const P=_%3;P===0?(d.up.set(0,m[_],0),d.lookAt(p[_],0,0)):P===1?(d.up.set(0,0,m[_]),d.lookAt(0,p[_],0)):(d.up.set(0,m[_],0),d.lookAt(0,0,p[_]));const O=this._cubeSize;dc(l,P*O,_>2?O:0,O,O),g.setRenderTarget(l),w&&g.render(R,d),g.render(t,d)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=x,g.autoClear=S,t.background=y}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===yr||t.mapping===Mr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_g());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new vi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;dc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,uh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=dg[(l-u-1)%dg.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new vi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,R=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*ps-1),w=u/R,y=isFinite(u)?1+Math.floor(g*w):ps;y>ps&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ps}`);const _=[];let P=0;for(let B=0;B<ps;++B){const K=B/w,C=Math.exp(-K*K/2);_.push(C),B===0?P+=C:B<y&&(P+=2*C)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=R,x.mipInt.value=O-s;const D=this._sizeLods[l],H=3*D*(l>O-mr?l-O+mr:0),I=4*(this._cubeSize-D);dc(i,H,I,3*D,2*D),m.setRenderTarget(i),m.render(S,uh)}}function jE(o){const t=[],i=[],s=[];let l=o;const u=o-mr+1+fg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-mr?m=fg[h-o+mr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,S=1+p,x=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,R=6,w=3,y=2,_=1,P=new Float32Array(w*R*M),O=new Float32Array(y*R*M),D=new Float32Array(_*R*M);for(let I=0;I<M;I++){const B=I%3*2/3-1,K=I>2?0:-1,C=[B,K,0,B+2/3,K,0,B+2/3,K+1,0,B,K,0,B+2/3,K+1,0,B,K+1,0];P.set(C,w*R*I),O.set(x,y*R*I);const A=[I,I,I,I,I,I];D.set(A,_*R*I)}const H=new yi;H.setAttribute("position",new Di(P,w)),H.setAttribute("uv",new Di(O,y)),H.setAttribute("faceIndex",new Di(D,_)),t.push(H),l>mr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function mg(o,t,i){const s=new vs(o,t,i);return s.texture.mapping=Dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function dc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function KE(o,t,i){const s=new Float32Array(ps),l=new $(0,1,0);return new Ia({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function _g(){return new Ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function gg(){return new Ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function QE(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Uh||m===Lh,g=m===yr||m===Mr;if(p||g){let S=t.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new pg(o)),S=p?i.fromEquirectangular(d,S):i.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),S.texture;if(S!==void 0)return S.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new pg(o)),S=p?i.fromEquirectangular(d):i.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,t.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function JE(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&dr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function $E(o,t,i,s){const l={},u=new WeakMap;function h(S){const x=S.target;x.index!==null&&t.remove(x.index);for(const R in x.attributes)t.remove(x.attributes[R]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(S,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(S){const x=[],M=S.index,R=S.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],I=P[O+1],B=P[O+2];x.push(H,I,I,B,B,H)}}else if(R!==void 0){const P=R.array;w=R.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,I=O+1,B=O+2;x.push(H,I,I,B,B,H)}}else return;const y=new(ov(x)?dv:hv)(x,1);y.version=w;const _=u.get(S);_&&t.remove(_),u.set(S,y)}function g(S){const x=u.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:d,update:m,getWireframeAttribute:g}}function tT(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,u,x*h),i.update(M,s,1)}function p(x,M,R){R!==0&&(o.drawElementsInstanced(s,M,u,x*h,R),i.update(M,s,R))}function g(x,M,R){if(R===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,u,x,0,R);let y=0;for(let _=0;_<R;_++)y+=M[_];i.update(y,s,1)}function S(x,M,R,w){if(R===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],w[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,u,x,0,w,0,R);let _=0;for(let P=0;P<R;P++)_+=M[P]*w[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function eT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function nT(o,t,i){const s=new WeakMap,l=new Ze;function u(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=g!==void 0?g.length:0;let x=s.get(d);if(x===void 0||x.count!==S){let A=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var M=A;x!==void 0&&x.texture.dispose();const R=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;R===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*I*4*S),K=new cv(B,H,I,S);K.type=ea,K.needsUpdate=!0;const C=D*4;for(let F=0;F<S;F++){const ct=_[F],at=P[F],mt=O[F],ht=H*I*4*F;for(let W=0;W<ct.count;W++){const st=W*C;R===!0&&(l.fromBufferAttribute(ct,W),B[ht+st+0]=l.x,B[ht+st+1]=l.y,B[ht+st+2]=l.z,B[ht+st+3]=0),w===!0&&(l.fromBufferAttribute(at,W),B[ht+st+4]=l.x,B[ht+st+5]=l.y,B[ht+st+6]=l.z,B[ht+st+7]=0),y===!0&&(l.fromBufferAttribute(mt,W),B[ht+st+8]=l.x,B[ht+st+9]=l.y,B[ht+st+10]=l.z,B[ht+st+11]=mt.itemSize===4?l.w:1)}}x={count:S,texture:K,size:new he(H,I)},s.set(d,x),d.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const w=d.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function iT(o,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,g=m.geometry,S=t.get(m,g);if(l.get(S)!==p&&(t.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const yv=new In,vg=new Sv(1,1),Mv=new cv,Ev=new Nx,Tv=new _v,Sg=[],xg=[],yg=new Float32Array(16),Mg=new Float32Array(9),Eg=new Float32Array(4);function Rr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=Sg[l];if(u===void 0&&(u=new Float32Array(l),Sg[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function ln(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function cn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Pc(o,t){let i=xg[t];i===void 0&&(i=new Int32Array(t),xg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function aT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function sT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2fv(this.addr,t),cn(i,t)}}function rT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ln(i,t))return;o.uniform3fv(this.addr,t),cn(i,t)}}function oT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4fv(this.addr,t),cn(i,t)}}function lT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Eg.set(s),o.uniformMatrix2fv(this.addr,!1,Eg),cn(i,s)}}function cT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;Mg.set(s),o.uniformMatrix3fv(this.addr,!1,Mg),cn(i,s)}}function uT(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(ln(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),cn(i,t)}else{if(ln(i,s))return;yg.set(s),o.uniformMatrix4fv(this.addr,!1,yg),cn(i,s)}}function fT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function hT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2iv(this.addr,t),cn(i,t)}}function dT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3iv(this.addr,t),cn(i,t)}}function pT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4iv(this.addr,t),cn(i,t)}}function mT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _T(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ln(i,t))return;o.uniform2uiv(this.addr,t),cn(i,t)}}function gT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ln(i,t))return;o.uniform3uiv(this.addr,t),cn(i,t)}}function vT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ln(i,t))return;o.uniform4uiv(this.addr,t),cn(i,t)}}function ST(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(vg.compareFunction=rv,u=vg):u=yv,i.setTexture2D(t||u,l)}function xT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Ev,l)}function yT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Tv,l)}function MT(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Mv,l)}function ET(o){switch(o){case 5126:return aT;case 35664:return sT;case 35665:return rT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return dT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return _T;case 36295:return gT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return ST;case 35679:case 36299:case 36307:return xT;case 35680:case 36300:case 36308:case 36293:return yT;case 36289:case 36303:case 36311:case 36292:return MT}}function TT(o,t){o.uniform1fv(this.addr,t)}function bT(o,t){const i=Rr(t,this.size,2);o.uniform2fv(this.addr,i)}function AT(o,t){const i=Rr(t,this.size,3);o.uniform3fv(this.addr,i)}function RT(o,t){const i=Rr(t,this.size,4);o.uniform4fv(this.addr,i)}function CT(o,t){const i=Rr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function wT(o,t){const i=Rr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function DT(o,t){const i=Rr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function UT(o,t){o.uniform1iv(this.addr,t)}function LT(o,t){o.uniform2iv(this.addr,t)}function NT(o,t){o.uniform3iv(this.addr,t)}function OT(o,t){o.uniform4iv(this.addr,t)}function PT(o,t){o.uniform1uiv(this.addr,t)}function zT(o,t){o.uniform2uiv(this.addr,t)}function BT(o,t){o.uniform3uiv(this.addr,t)}function FT(o,t){o.uniform4uiv(this.addr,t)}function IT(o,t,i){const s=this.cache,l=t.length,u=Pc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||yv,u[h])}function HT(o,t,i){const s=this.cache,l=t.length,u=Pc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Ev,u[h])}function GT(o,t,i){const s=this.cache,l=t.length,u=Pc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Tv,u[h])}function VT(o,t,i){const s=this.cache,l=t.length,u=Pc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Mv,u[h])}function kT(o){switch(o){case 5126:return TT;case 35664:return bT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return wT;case 35676:return DT;case 5124:case 35670:return UT;case 35667:case 35671:return LT;case 35668:case 35672:return NT;case 35669:case 35673:return OT;case 5125:return PT;case 36294:return zT;case 36295:return BT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return HT;case 35680:case 36300:case 36308:case 36293:return GT;case 36289:case 36303:case 36311:case 36292:return VT}}class XT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=ET(i.type)}}class WT{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kT(i.type)}}class qT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function Tg(o,t){o.seq.push(t),o.map[t.id]=t}function YT(o,t,i){const s=o.name,l=s.length;for(mh.lastIndex=0;;){const u=mh.exec(s),h=mh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Tg(i,p===void 0?new XT(d,o,t):new WT(d,o,t));break}else{let S=i.map[d];S===void 0&&(S=new qT(d),Tg(i,S)),i=S}}}class Mc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);YT(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function bg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const ZT=37297;let jT=0;function KT(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Ag=new oe;function QT(o){Ae._getMatrix(Ag,Ae.workingColorSpace,o);const t=`mat3( ${Ag.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Tc:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Rg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+KT(o.getShaderSource(t),h)}else return l}function JT(o,t){const i=QT(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $T(o,t){let i;switch(t){case ix:i="Linear";break;case ax:i="Reinhard";break;case sx:i="Cineon";break;case rx:i="ACESFilmic";break;case lx:i="AgX";break;case cx:i="Neutral";break;case ox:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pc=new $;function tb(){Ae.getLuminanceCoefficients(pc);const o=pc.x.toFixed(4),t=pc.y.toFixed(4),i=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function nb(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function ib(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Do(o){return o!==""}function Cg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(o){return o.replace(ab,rb)}const sb=new Map;function rb(o,t){let i=le[t];if(i===void 0){const s=sb.get(t);if(s!==void 0)i=le[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ld(i)}const ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(o){return o.replace(ob,lb)}function lb(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Ug(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Yg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===zS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function ub(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yr:case Mr:t="ENVMAP_TYPE_CUBE";break;case Dc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Mr:t="ENVMAP_MODE_REFRACTION";break}return t}function hb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Zg:t="ENVMAP_BLENDING_MULTIPLY";break;case ex:t="ENVMAP_BLENDING_MIX";break;case nx:t="ENVMAP_BLENDING_ADD";break}return t}function db(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:s,maxMip:i}}function pb(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=cb(i),p=ub(i),g=fb(i),S=hb(i),x=db(i),M=eb(i),R=nb(u),w=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Do).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(y=[Ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[Ug(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?le.tonemapping_pars_fragment:"",i.toneMapping!==Ba?$T("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,JT("linearToOutputTexel",i.outputColorSpace),tb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=ld(h),h=Cg(h,i),h=wg(h,i),d=ld(d),d=Cg(d,i),d=wg(d,i),h=Dg(h),d=Dg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===k_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===k_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=P+y+h,D=P+_+d,H=bg(l,l.VERTEX_SHADER,O),I=bg(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function B(F){if(o.debug.checkShaderErrors){const ct=l.getProgramInfoLog(w).trim(),at=l.getShaderInfoLog(H).trim(),mt=l.getShaderInfoLog(I).trim();let ht=!0,W=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ht=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,I);else{const st=Rg(l,H,"vertex"),Z=Rg(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ct+`
`+st+`
`+Z)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(at===""||mt==="")&&(W=!1);W&&(F.diagnostics={runnable:ht,programLog:ct,vertexShader:{log:at,prefix:y},fragmentShader:{log:mt,prefix:_}})}l.deleteShader(H),l.deleteShader(I),K=new Mc(l,w),C=ib(l,w)}let K;this.getUniforms=function(){return K===void 0&&B(this),K};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(w,ZT)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jT++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let mb=0;class _b{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new gb(t),i.set(t,s)),s}}class gb{constructor(t){this.id=mb++,this.code=t,this.usedTimes=0}}function vb(o,t,i,s,l,u,h){const d=new uv,m=new _b,p=new Set,g=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,A,F,ct,at){const mt=ct.fog,ht=at.geometry,W=C.isMeshStandardMaterial?ct.environment:null,st=(C.isMeshStandardMaterial?i:t).get(C.envMap||W),Z=st&&st.mapping===Dc?st.image.height:null,xt=R[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,it=L!==void 0?L.length:0;let Et=0;ht.morphAttributes.position!==void 0&&(Et=1),ht.morphAttributes.normal!==void 0&&(Et=2),ht.morphAttributes.color!==void 0&&(Et=3);let At,q,dt,St;if(xt){const Me=Ci[xt];At=Me.vertexShader,q=Me.fragmentShader}else At=C.vertexShader,q=C.fragmentShader,m.update(C),dt=m.getVertexShaderID(C),St=m.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Rt=o.state.buffers.depth.getReversed(),Kt=at.isInstancedMesh===!0,Pt=at.isBatchedMesh===!0,ye=!!C.map,Re=!!C.matcap,ie=!!st,z=!!C.aoMap,mn=!!C.lightMap,se=!!C.bumpMap,ue=!!C.normalMap,kt=!!C.displacementMap,Ce=!!C.emissiveMap,Xt=!!C.metalnessMap,U=!!C.roughnessMap,E=C.anisotropy>0,et=C.clearcoat>0,ut=C.dispersion>0,vt=C.iridescence>0,ft=C.sheen>0,Ht=C.transmission>0,wt=E&&!!C.anisotropyMap,zt=et&&!!C.clearcoatMap,me=et&&!!C.clearcoatNormalMap,Mt=et&&!!C.clearcoatRoughnessMap,Bt=vt&&!!C.iridescenceMap,qt=vt&&!!C.iridescenceThicknessMap,Gt=ft&&!!C.sheenColorMap,Ft=ft&&!!C.sheenRoughnessMap,ae=!!C.specularMap,Zt=!!C.specularColorMap,De=!!C.specularIntensityMap,k=Ht&&!!C.transmissionMap,Lt=Ht&&!!C.thicknessMap,rt=!!C.gradientMap,_t=!!C.alphaMap,Ct=C.alphaTest>0,Dt=!!C.alphaHash,Jt=!!C.extensions;let He=Ba;C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:xt,shaderType:C.type,shaderName:C.name,vertexShader:At,fragmentShader:q,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:St,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&at._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&at.instanceColor!==null,instancingMorph:Kt&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:br,alphaToCoverage:!!C.alphaToCoverage,map:ye,matcap:Re,envMap:ie,envMapMode:ie&&st.mapping,envMapCubeUVHeight:Z,aoMap:z,lightMap:mn,bumpMap:se,normalMap:ue,displacementMap:x&&kt,emissiveMap:Ce,normalMapObjectSpace:ue&&C.normalMapType===px,normalMapTangentSpace:ue&&C.normalMapType===dx,metalnessMap:Xt,roughnessMap:U,anisotropy:E,anisotropyMap:wt,clearcoat:et,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:Mt,dispersion:ut,iridescence:vt,iridescenceMap:Bt,iridescenceThicknessMap:qt,sheen:ft,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:ae,specularColorMap:Zt,specularIntensityMap:De,transmission:Ht,transmissionMap:k,thicknessMap:Lt,gradientMap:rt,opaque:C.transparent===!1&&C.blending===gr&&C.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:C.combine,mapUv:ye&&w(C.map.channel),aoMapUv:z&&w(C.aoMap.channel),lightMapUv:mn&&w(C.lightMap.channel),bumpMapUv:se&&w(C.bumpMap.channel),normalMapUv:ue&&w(C.normalMap.channel),displacementMapUv:kt&&w(C.displacementMap.channel),emissiveMapUv:Ce&&w(C.emissiveMap.channel),metalnessMapUv:Xt&&w(C.metalnessMap.channel),roughnessMapUv:U&&w(C.roughnessMap.channel),anisotropyMapUv:wt&&w(C.anisotropyMap.channel),clearcoatMapUv:zt&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:me&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(C.sheenRoughnessMap.channel),specularMapUv:ae&&w(C.specularMap.channel),specularColorMapUv:Zt&&w(C.specularColorMap.channel),specularIntensityMapUv:De&&w(C.specularIntensityMap.channel),transmissionMapUv:k&&w(C.transmissionMap.channel),thicknessMapUv:Lt&&w(C.thicknessMap.channel),alphaMapUv:_t&&w(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ue||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!ht.attributes.uv&&(ye||_t),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reverseDepthBuffer:Rt,skinning:at.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Et,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:ye&&C.map.isVideoTexture===!0&&Ae.getTransfer(C.map.colorSpace)===Oe,decodeVideoTextureEmissive:Ce&&C.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(C.emissiveMap.colorSpace)===Oe,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Jt&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&C.extensions.multiDraw===!0||Pt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function _(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const F in C.defines)A.push(F),A.push(C.defines[F]);return C.isRawShaderMaterial===!1&&(P(A,C),O(A,C),A.push(o.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function P(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function O(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function D(C){const A=R[C.type];let F;if(A){const ct=Ci[A];F=qx.clone(ct.uniforms)}else F=C.uniforms;return F}function H(C,A){let F;for(let ct=0,at=g.length;ct<at;ct++){const mt=g[ct];if(mt.cacheKey===A){F=mt,++F.usedTimes;break}}return F===void 0&&(F=new pb(o,A,C,u),g.push(F)),F}function I(C){if(--C.usedTimes===0){const A=g.indexOf(C);g[A]=g[g.length-1],g.pop(),C.destroy()}}function B(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:B,programs:g,dispose:K}}function Sb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function xb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Lg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Ng(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(S,x,M,R,w,y){let _=o[t];return _===void 0?(_={id:S.id,object:S,geometry:x,material:M,groupOrder:R,renderOrder:S.renderOrder,z:w,group:y},o[t]=_):(_.id=S.id,_.object=S,_.geometry=x,_.material=M,_.groupOrder=R,_.renderOrder=S.renderOrder,_.z=w,_.group=y),t++,_}function d(S,x,M,R,w,y){const _=h(S,x,M,R,w,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(S,x,M,R,w,y){const _=h(S,x,M,R,w,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(S,x){i.length>1&&i.sort(S||xb),s.length>1&&s.sort(x||Lg),l.length>1&&l.sort(x||Lg)}function g(){for(let S=t,x=o.length;S<x;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:g,sort:p}}function yb(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new Ng,o.set(s,[h])):l>=u.length?(h=new Ng,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Mb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new we};break;case"SpotLight":i={position:new $,direction:new $,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new we,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new we,groundColor:new we};break;case"RectAreaLight":i={color:new we,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function Eb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Tb=0;function bb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Ab(o){const t=new Mb,i=Eb(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,u=new je,h=new je;function d(p){let g=0,S=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let M=0,R=0,w=0,y=0,_=0,P=0,O=0,D=0,H=0,I=0,B=0;p.sort(bb);for(let C=0,A=p.length;C<A;C++){const F=p[C],ct=F.color,at=F.intensity,mt=F.distance,ht=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)g+=ct.r*at,S+=ct.g*at,x+=ct.b*at;else if(F.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(F.sh.coefficients[W],at);B++}else if(F.isDirectionalLight){const W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const st=F.shadow,Z=i.get(F);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,s.directionalShadow[M]=Z,s.directionalShadowMap[M]=ht,s.directionalShadowMatrix[M]=F.shadow.matrix,P++}s.directional[M]=W,M++}else if(F.isSpotLight){const W=t.get(F);W.position.setFromMatrixPosition(F.matrixWorld),W.color.copy(ct).multiplyScalar(at),W.distance=mt,W.coneCos=Math.cos(F.angle),W.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),W.decay=F.decay,s.spot[w]=W;const st=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,st.updateMatrices(F),F.castShadow&&I++),s.spotLightMatrix[w]=st.matrix,F.castShadow){const Z=i.get(F);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,s.spotShadow[w]=Z,s.spotShadowMap[w]=ht,D++}w++}else if(F.isRectAreaLight){const W=t.get(F);W.color.copy(ct).multiplyScalar(at),W.halfWidth.set(F.width*.5,0,0),W.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=W,y++}else if(F.isPointLight){const W=t.get(F);if(W.color.copy(F.color).multiplyScalar(F.intensity),W.distance=F.distance,W.decay=F.decay,F.castShadow){const st=F.shadow,Z=i.get(F);Z.shadowIntensity=st.intensity,Z.shadowBias=st.bias,Z.shadowNormalBias=st.normalBias,Z.shadowRadius=st.radius,Z.shadowMapSize=st.mapSize,Z.shadowCameraNear=st.camera.near,Z.shadowCameraFar=st.camera.far,s.pointShadow[R]=Z,s.pointShadowMap[R]=ht,s.pointShadowMatrix[R]=F.shadow.matrix,O++}s.point[R]=W,R++}else if(F.isHemisphereLight){const W=t.get(F);W.skyColor.copy(F.color).multiplyScalar(at),W.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[_]=W,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=S,s.ambient[2]=x;const K=s.hash;(K.directionalLength!==M||K.pointLength!==R||K.spotLength!==w||K.rectAreaLength!==y||K.hemiLength!==_||K.numDirectionalShadows!==P||K.numPointShadows!==O||K.numSpotShadows!==D||K.numSpotMaps!==H||K.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=R,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=B,K.directionalLength=M,K.pointLength=R,K.spotLength=w,K.rectAreaLength=y,K.hemiLength=_,K.numDirectionalShadows=P,K.numPointShadows=O,K.numSpotShadows=D,K.numSpotMaps=H,K.numLightProbes=B,s.version=Tb++)}function m(p,g){let S=0,x=0,M=0,R=0,w=0;const y=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const O=p[_];if(O.isDirectionalLight){const D=s.directional[S];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),S++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[R];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),R++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function Og(o){const t=new Ab(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function u(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Rb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Og(o),t.set(l,[d])):u>=h.length?(d=new Og(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Db(o,t,i){let s=new gv;const l=new he,u=new he,h=new Ze,d=new ny({depthPacking:hx}),m=new iy,p={},g=i.maxTextureSize,S={[Fa]:Fn,[Fn]:Fa,[ta]:ta},x=new Ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Cb,fragmentShader:wb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const R=new yi;R.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vi(R,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yg;let _=this.type;this.render=function(I,B,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),ct=o.state;ct.setBlending(za),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const at=_!==$i&&this.type===$i,mt=_===$i&&this.type!==$i;for(let ht=0,W=I.length;ht<W;ht++){const st=I[ht],Z=st.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const xt=Z.getFrameExtents();if(l.multiply(xt),u.copy(Z.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/xt.x),l.x=u.x*xt.x,Z.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/xt.y),l.y=u.y*xt.y,Z.mapSize.y=u.y)),Z.map===null||at===!0||mt===!0){const it=this.type!==$i?{minFilter:Si,magFilter:Si}:{};Z.map!==null&&Z.map.dispose(),Z.map=new vs(l.x,l.y,it),Z.map.texture.name=st.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const L=Z.getViewportCount();for(let it=0;it<L;it++){const Et=Z.getViewport(it);h.set(u.x*Et.x,u.y*Et.y,u.x*Et.z,u.y*Et.w),ct.viewport(h),Z.updateMatrices(st,it),s=Z.getFrustum(),D(B,K,Z.camera,st,this.type)}Z.isPointLightShadow!==!0&&this.type===$i&&P(Z,K),Z.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(C,A,F)};function P(I,B){const K=t.update(w);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new vs(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,K,x,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,K,M,w,null)}function O(I,B,K,C){let A=null;const F=K.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)A=F;else if(A=K.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const ct=A.uuid,at=B.uuid;let mt=p[ct];mt===void 0&&(mt={},p[ct]=mt);let ht=mt[at];ht===void 0&&(ht=A.clone(),mt[at]=ht,B.addEventListener("dispose",H)),A=ht}if(A.visible=B.visible,A.wireframe=B.wireframe,C===$i?A.side=B.shadowSide!==null?B.shadowSide:B.side:A.side=B.shadowSide!==null?B.shadowSide:S[B.side],A.alphaMap=B.alphaMap,A.alphaTest=B.alphaTest,A.map=B.map,A.clipShadows=B.clipShadows,A.clippingPlanes=B.clippingPlanes,A.clipIntersection=B.clipIntersection,A.displacementMap=B.displacementMap,A.displacementScale=B.displacementScale,A.displacementBias=B.displacementBias,A.wireframeLinewidth=B.wireframeLinewidth,A.linewidth=B.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ct=o.properties.get(A);ct.light=K}return A}function D(I,B,K,C,A){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===$i)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,I.matrixWorld);const at=t.update(I),mt=I.material;if(Array.isArray(mt)){const ht=at.groups;for(let W=0,st=ht.length;W<st;W++){const Z=ht[W],xt=mt[Z.materialIndex];if(xt&&xt.visible){const L=O(I,xt,C,A);I.onBeforeShadow(o,I,B,K,at,L,Z),o.renderBufferDirect(K,null,at,L,I,Z),I.onAfterShadow(o,I,B,K,at,L,Z)}}}else if(mt.visible){const ht=O(I,mt,C,A);I.onBeforeShadow(o,I,B,K,at,ht,null),o.renderBufferDirect(K,null,at,ht,I,null),I.onAfterShadow(o,I,B,K,at,ht,null)}}const ct=I.children;for(let at=0,mt=ct.length;at<mt;at++)D(ct[at],B,K,C,A)}function H(I){I.target.removeEventListener("dispose",H);for(const K in p){const C=p[K],A=I.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const Ub={[Th]:bh,[Ah]:wh,[Rh]:Dh,[xr]:Ch,[bh]:Th,[wh]:Ah,[Dh]:Rh,[Ch]:xr};function Lb(o,t){function i(){let k=!1;const Lt=new Ze;let rt=null;const _t=new Ze(0,0,0,0);return{setMask:function(Ct){rt!==Ct&&!k&&(o.colorMask(Ct,Ct,Ct,Ct),rt=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,Dt,Jt,He,tn){tn===!0&&(Ct*=He,Dt*=He,Jt*=He),Lt.set(Ct,Dt,Jt,He),_t.equals(Lt)===!1&&(o.clearColor(Ct,Dt,Jt,He),_t.copy(Lt))},reset:function(){k=!1,rt=null,_t.set(-1,0,0,0)}}}function s(){let k=!1,Lt=!1,rt=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const Jt=t.get("EXT_clip_control");Lt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const He=Ct;Ct=null,this.setClear(He)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Tt(o.DEPTH_TEST):Rt(o.DEPTH_TEST)},setMask:function(Dt){rt!==Dt&&!k&&(o.depthMask(Dt),rt=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Ub[Dt]),_t!==Dt){switch(Dt){case Th:o.depthFunc(o.NEVER);break;case bh:o.depthFunc(o.ALWAYS);break;case Ah:o.depthFunc(o.LESS);break;case xr:o.depthFunc(o.LEQUAL);break;case Rh:o.depthFunc(o.EQUAL);break;case Ch:o.depthFunc(o.GEQUAL);break;case wh:o.depthFunc(o.GREATER);break;case Dh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){k=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){k=!1,rt=null,_t=null,Ct=null,Lt=!1}}}function l(){let k=!1,Lt=null,rt=null,_t=null,Ct=null,Dt=null,Jt=null,He=null,tn=null;return{setTest:function(Me){k||(Me?Tt(o.STENCIL_TEST):Rt(o.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(o.stencilMask(Me),Lt=Me)},setFunc:function(Me,bn,An){(rt!==Me||_t!==bn||Ct!==An)&&(o.stencilFunc(Me,bn,An),rt=Me,_t=bn,Ct=An)},setOp:function(Me,bn,An){(Dt!==Me||Jt!==bn||He!==An)&&(o.stencilOp(Me,bn,An),Dt=Me,Jt=bn,He=An)},setLocked:function(Me){k=Me},setClear:function(Me){tn!==Me&&(o.clearStencil(Me),tn=Me)},reset:function(){k=!1,Lt=null,rt=null,_t=null,Ct=null,Dt=null,Jt=null,He=null,tn=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},S={},x=new WeakMap,M=[],R=null,w=!1,y=null,_=null,P=null,O=null,D=null,H=null,I=null,B=new we(0,0,0),K=0,C=!1,A=null,F=null,ct=null,at=null,mt=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,st=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=st>=2);let xt=null,L={};const it=o.getParameter(o.SCISSOR_BOX),Et=o.getParameter(o.VIEWPORT),At=new Ze().fromArray(it),q=new Ze().fromArray(Et);function dt(k,Lt,rt,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(k,Dt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<rt;Jt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const St={};St[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Tt(o.DEPTH_TEST),h.setFunc(xr),se(!1),ue(B_),Tt(o.CULL_FACE),z(za);function Tt(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function Rt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function Kt(k,Lt){return S[k]!==Lt?(o.bindFramebuffer(k,Lt),S[k]=Lt,k===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Lt),k===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(k,Lt){let rt=M,_t=!1;if(k){rt=x.get(Lt),rt===void 0&&(rt=[],x.set(Lt,rt));const Ct=k.textures;if(rt.length!==Ct.length||rt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,Jt=Ct.length;Dt<Jt;Dt++)rt[Dt]=o.COLOR_ATTACHMENT0+Dt;rt.length=Ct.length,_t=!0}}else rt[0]!==o.BACK&&(rt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(rt)}function ye(k){return R!==k?(o.useProgram(k),R=k,!0):!1}const Re={[ds]:o.FUNC_ADD,[FS]:o.FUNC_SUBTRACT,[IS]:o.FUNC_REVERSE_SUBTRACT};Re[HS]=o.MIN,Re[GS]=o.MAX;const ie={[VS]:o.ZERO,[kS]:o.ONE,[XS]:o.SRC_COLOR,[Mh]:o.SRC_ALPHA,[KS]:o.SRC_ALPHA_SATURATE,[ZS]:o.DST_COLOR,[qS]:o.DST_ALPHA,[WS]:o.ONE_MINUS_SRC_COLOR,[Eh]:o.ONE_MINUS_SRC_ALPHA,[jS]:o.ONE_MINUS_DST_COLOR,[YS]:o.ONE_MINUS_DST_ALPHA,[QS]:o.CONSTANT_COLOR,[JS]:o.ONE_MINUS_CONSTANT_COLOR,[$S]:o.CONSTANT_ALPHA,[tx]:o.ONE_MINUS_CONSTANT_ALPHA};function z(k,Lt,rt,_t,Ct,Dt,Jt,He,tn,Me){if(k===za){w===!0&&(Rt(o.BLEND),w=!1);return}if(w===!1&&(Tt(o.BLEND),w=!0),k!==BS){if(k!==y||Me!==C){if((_!==ds||D!==ds)&&(o.blendEquation(o.FUNC_ADD),_=ds,D=ds),Me)switch(k){case gr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F_:o.blendFunc(o.ONE,o.ONE);break;case I_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case H_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case gr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case F_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case I_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case H_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}P=null,O=null,H=null,I=null,B.set(0,0,0),K=0,y=k,C=Me}return}Ct=Ct||Lt,Dt=Dt||rt,Jt=Jt||_t,(Lt!==_||Ct!==D)&&(o.blendEquationSeparate(Re[Lt],Re[Ct]),_=Lt,D=Ct),(rt!==P||_t!==O||Dt!==H||Jt!==I)&&(o.blendFuncSeparate(ie[rt],ie[_t],ie[Dt],ie[Jt]),P=rt,O=_t,H=Dt,I=Jt),(He.equals(B)===!1||tn!==K)&&(o.blendColor(He.r,He.g,He.b,tn),B.copy(He),K=tn),y=k,C=!1}function mn(k,Lt){k.side===ta?Rt(o.CULL_FACE):Tt(o.CULL_FACE);let rt=k.side===Fn;Lt&&(rt=!rt),se(rt),k.blending===gr&&k.transparent===!1?z(za):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),u.setMask(k.colorWrite);const _t=k.stencilWrite;d.setTest(_t),_t&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ce(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Rt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){A!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),A=k)}function ue(k){k!==OS?(Tt(o.CULL_FACE),k!==F&&(k===B_?o.cullFace(o.BACK):k===PS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Rt(o.CULL_FACE),F=k}function kt(k){k!==ct&&(W&&o.lineWidth(k),ct=k)}function Ce(k,Lt,rt){k?(Tt(o.POLYGON_OFFSET_FILL),(at!==Lt||mt!==rt)&&(o.polygonOffset(Lt,rt),at=Lt,mt=rt)):Rt(o.POLYGON_OFFSET_FILL)}function Xt(k){k?Tt(o.SCISSOR_TEST):Rt(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+ht-1),xt!==k&&(o.activeTexture(k),xt=k)}function E(k,Lt,rt){rt===void 0&&(xt===null?rt=o.TEXTURE0+ht-1:rt=xt);let _t=L[rt];_t===void 0&&(_t={type:void 0,texture:void 0},L[rt]=_t),(_t.type!==k||_t.texture!==Lt)&&(xt!==rt&&(o.activeTexture(rt),xt=rt),o.bindTexture(k,Lt||St[k]),_t.type=k,_t.texture=Lt)}function et(){const k=L[xt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ut(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Gt(k){At.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function Ft(k){q.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),q.copy(k))}function ae(k,Lt){let rt=p.get(Lt);rt===void 0&&(rt=new WeakMap,p.set(Lt,rt));let _t=rt.get(k);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,k.name),rt.set(k,_t))}function Zt(k,Lt){const _t=p.get(Lt).get(k);m.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,k.__bindingPointIndex),m.set(Lt,_t))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},xt=null,L={},S={},x=new WeakMap,M=[],R=null,w=!1,y=null,_=null,P=null,O=null,D=null,H=null,I=null,B=new we(0,0,0),K=0,C=!1,A=null,F=null,ct=null,at=null,mt=null,At.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Tt,disable:Rt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:ye,setBlending:z,setMaterial:mn,setFlipSided:se,setCullFace:ue,setLineWidth:kt,setPolygonOffset:Ce,setScissorTest:Xt,activeTexture:U,bindTexture:E,unbindTexture:et,compressedTexImage2D:ut,compressedTexImage3D:vt,texImage2D:Bt,texImage3D:qt,updateUBOMapping:ae,uniformBlockBinding:Zt,texStorage2D:me,texStorage3D:Mt,texSubImage2D:ft,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function Nb(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new he,g=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(U,E){return M?new OffscreenCanvas(U,E):Ac("canvas")}function w(U,E,et){let ut=1;const vt=Xt(U);if((vt.width>et||vt.height>et)&&(ut=et/Math.max(vt.width,vt.height)),ut<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(ut*vt.width),Ht=Math.floor(ut*vt.height);S===void 0&&(S=R(ft,Ht));const wt=E?R(ft,Ht):S;return wt.width=ft,wt.height=Ht,wt.getContext("2d").drawImage(U,0,0,ft,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ft+"x"+Ht+")."),wt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,et,ut,vt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=E;if(E===o.RED&&(et===o.FLOAT&&(ft=o.R32F),et===o.HALF_FLOAT&&(ft=o.R16F),et===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.R8UI),et===o.UNSIGNED_SHORT&&(ft=o.R16UI),et===o.UNSIGNED_INT&&(ft=o.R32UI),et===o.BYTE&&(ft=o.R8I),et===o.SHORT&&(ft=o.R16I),et===o.INT&&(ft=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ft=o.RG32F),et===o.HALF_FLOAT&&(ft=o.RG16F),et===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RG8UI),et===o.UNSIGNED_SHORT&&(ft=o.RG16UI),et===o.UNSIGNED_INT&&(ft=o.RG32UI),et===o.BYTE&&(ft=o.RG8I),et===o.SHORT&&(ft=o.RG16I),et===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),et===o.UNSIGNED_INT&&(ft=o.RGB32UI),et===o.BYTE&&(ft=o.RGB8I),et===o.SHORT&&(ft=o.RGB16I),et===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),et===o.UNSIGNED_INT&&(ft=o.RGBA32UI),et===o.BYTE&&(ft=o.RGBA8I),et===o.SHORT&&(ft=o.RGBA16I),et===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),E===o.RGBA){const Ht=vt?Tc:Ae.getTransfer(ut);et===o.FLOAT&&(ft=o.RGBA32F),et===o.HALF_FLOAT&&(ft=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ft=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(U,E){let et;return U?E===null||E===gs||E===Er?et=o.DEPTH24_STENCIL8:E===ea?et=o.DEPTH32F_STENCIL8:E===Lo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===gs||E===Er?et=o.DEPTH_COMPONENT24:E===ea?et=o.DEPTH_COMPONENT32F:E===Lo&&(et=o.DEPTH_COMPONENT16),et}function H(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Si&&U.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function I(U){const E=U.target;E.removeEventListener("dispose",I),K(E),E.isVideoTexture&&g.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),A(E)}function K(U){const E=s.get(U);if(E.__webglInit===void 0)return;const et=U.source,ut=x.get(et);if(ut){const vt=ut[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&C(U),Object.keys(ut).length===0&&x.delete(et)}s.remove(U)}function C(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const et=U.source,ut=x.get(et);delete ut[E.__cacheKey],h.memory.textures--}function A(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(E.__webglFramebuffer[ut]))for(let vt=0;vt<E.__webglFramebuffer[ut].length;vt++)o.deleteFramebuffer(E.__webglFramebuffer[ut][vt]);else o.deleteFramebuffer(E.__webglFramebuffer[ut]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ut])}else{if(Array.isArray(E.__webglFramebuffer))for(let ut=0;ut<E.__webglFramebuffer.length;ut++)o.deleteFramebuffer(E.__webglFramebuffer[ut]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ut=0;ut<E.__webglColorRenderbuffer.length;ut++)E.__webglColorRenderbuffer[ut]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ut]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=U.textures;for(let ut=0,vt=et.length;ut<vt;ut++){const ft=s.get(et[ut]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(et[ut])}s.remove(U)}let F=0;function ct(){F=0}function at(){const U=F;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),F+=1,U}function mt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const et=s.get(U);if(U.isVideoTexture&&kt(U),U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){const ut=U.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(et,U,E);return}}i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function W(U,E){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function st(U,E){const et=s.get(U);if(U.version>0&&et.__version!==U.version){q(et,U,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const et=s.get(U);if(U.version>0&&et.__version!==U.version){dt(et,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const xt={[Nh]:o.REPEAT,[ms]:o.CLAMP_TO_EDGE,[Oh]:o.MIRRORED_REPEAT},L={[Si]:o.NEAREST,[ux]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[wi]:o.LINEAR,[Hf]:o.LINEAR_MIPMAP_NEAREST,[_s]:o.LINEAR_MIPMAP_LINEAR},it={[mx]:o.NEVER,[yx]:o.ALWAYS,[_x]:o.LESS,[rv]:o.LEQUAL,[gx]:o.EQUAL,[xx]:o.GEQUAL,[vx]:o.GREATER,[Sx]:o.NOTEQUAL};function Et(U,E){if(E.type===ea&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===Hf||E.magFilter===Wl||E.magFilter===_s||E.minFilter===wi||E.minFilter===Hf||E.minFilter===Wl||E.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,xt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,xt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,xt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,L[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Si||E.minFilter!==Wl&&E.minFilter!==_s||E.type===ea&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function At(U,E){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",I));const ut=E.source;let vt=x.get(ut);vt===void 0&&(vt={},x.set(ut,vt));const ft=mt(E);if(ft!==U.__cacheKey){vt[ft]===void 0&&(vt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),vt[ft].usedTimes++;const Ht=vt[U.__cacheKey];Ht!==void 0&&(vt[U.__cacheKey].usedTimes--,Ht.usedTimes===0&&C(E)),U.__cacheKey=ft,U.__webglTexture=vt[ft].texture}return et}function q(U,E,et){let ut=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ut=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ut=o.TEXTURE_3D);const vt=At(U,E),ft=E.source;i.bindTexture(ut,U.__webglTexture,o.TEXTURE0+et);const Ht=s.get(ft);if(ft.version!==Ht.__version||vt===!0){i.activeTexture(o.TEXTURE0+et);const wt=Ae.getPrimaries(Ae.workingColorSpace),zt=E.colorSpace===Pa?null:Ae.getPrimaries(E.colorSpace),me=E.colorSpace===Pa||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Mt=w(E.image,!1,l.maxTextureSize);Mt=Ce(E,Mt);const Bt=u.convert(E.format,E.colorSpace),qt=u.convert(E.type);let Gt=O(E.internalFormat,Bt,qt,E.colorSpace,E.isVideoTexture);Et(ut,E);let Ft;const ae=E.mipmaps,Zt=E.isVideoTexture!==!0,De=Ht.__version===void 0||vt===!0,k=ft.dataReady,Lt=H(E,Mt);if(E.isDepthTexture)Gt=D(E.format===Tr,E.type),De&&(Zt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,qt,null));else if(E.isDataTexture)if(ae.length>0){Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],Zt?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data);E.generateMipmaps=!1}else Zt?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height),k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Bt,qt,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Mt.width,Mt.height,0,Bt,qt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Zt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,ae[0].width,ae[0].height,Mt.depth);for(let rt=0,_t=ae.length;rt<_t;rt++)if(Ft=ae[rt],E.format!==gi)if(Bt!==null)if(Zt){if(k)if(E.layerUpdates.size>0){const Ct=ug(Ft.width,Ft.height,E.format,E.type);for(const Dt of E.layerUpdates){const Jt=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,Dt,Ft.width,Ft.height,1,Bt,Jt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Mt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Mt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,rt,0,0,0,Ft.width,Ft.height,Mt.depth,Bt,qt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,rt,Gt,Ft.width,Ft.height,Mt.depth,0,Bt,qt,Ft.data)}else{Zt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ae[0].width,ae[0].height);for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],E.format!==gi?Bt!==null?Zt?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,rt,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data)}else if(E.isDataArrayTexture)if(Zt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Mt.width,Mt.height,Mt.depth),k)if(E.layerUpdates.size>0){const rt=ug(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const Ct=Mt.data.subarray(_t*rt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*rt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Bt,qt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,qt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,qt,Mt.data);else if(E.isData3DTexture)Zt?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Mt.width,Mt.height,Mt.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Bt,qt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Mt.width,Mt.height,Mt.depth,0,Bt,qt,Mt.data);else if(E.isFramebufferTexture){if(De)if(Zt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Mt.width,Mt.height);else{let rt=Mt.width,_t=Mt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,rt,_t,0,Bt,qt,null),rt>>=1,_t>>=1}}else if(ae.length>0){if(Zt&&De){const rt=Xt(ae[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}for(let rt=0,_t=ae.length;rt<_t;rt++)Ft=ae[rt],Zt?k&&i.texSubImage2D(o.TEXTURE_2D,rt,0,0,Bt,qt,Ft):i.texImage2D(o.TEXTURE_2D,rt,Gt,Bt,qt,Ft);E.generateMipmaps=!1}else if(Zt){if(De){const rt=Xt(Mt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,rt.width,rt.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,qt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,qt,Mt);y(E)&&_(ut),Ht.__version=ft.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function dt(U,E,et){if(E.image.length!==6)return;const ut=At(U,E),vt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ft=s.get(vt);if(vt.version!==ft.__version||ut===!0){i.activeTexture(o.TEXTURE0+et);const Ht=Ae.getPrimaries(Ae.workingColorSpace),wt=E.colorSpace===Pa?null:Ae.getPrimaries(E.colorSpace),zt=E.colorSpace===Pa||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!me&&!Mt?Bt[_t]=w(E.image[_t],!0,l.maxCubemapSize):Bt[_t]=Mt?E.image[_t].image:E.image[_t],Bt[_t]=Ce(E,Bt[_t]);const qt=Bt[0],Gt=u.convert(E.format,E.colorSpace),Ft=u.convert(E.type),ae=O(E.internalFormat,Gt,Ft,E.colorSpace),Zt=E.isVideoTexture!==!0,De=ft.__version===void 0||ut===!0,k=vt.dataReady;let Lt=H(E,qt);Et(o.TEXTURE_CUBE_MAP,E);let rt;if(me){Zt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,qt.width,qt.height);for(let _t=0;_t<6;_t++){rt=Bt[_t].mipmaps;for(let Ct=0;Ct<rt.length;Ct++){const Dt=rt[Ct];E.format!==gi?Gt!==null?Zt?k&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,ae,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(rt=E.mipmaps,Zt&&De){rt.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,ae,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let Ct=0;Ct<rt.length;Ct++){const Jt=rt[Ct].image[_t].image;Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Jt.width,Jt.height,Gt,Ft,Jt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,Jt.width,Jt.height,0,Gt,Ft,Jt.data)}}else{Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ae,Gt,Ft,Bt[_t]);for(let Ct=0;Ct<rt.length;Ct++){const Dt=rt[Ct];Zt?k&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Gt,Ft,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,ae,Gt,Ft,Dt.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ft.__version=vt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function St(U,E,et,ut,vt,ft){const Ht=u.convert(et.format,et.colorSpace),wt=u.convert(et.type),zt=O(et.internalFormat,Ht,wt,et.colorSpace),me=s.get(E),Mt=s.get(et);if(Mt.__renderTarget=E,!me.__hasExternalTextures){const Bt=Math.max(1,E.width>>ft),qt=Math.max(1,E.height>>ft);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ft,zt,Bt,qt,E.depth,0,Ht,wt,null):i.texImage2D(vt,ft,zt,Bt,qt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ut,vt,Mt.__webglTexture,0,se(E)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ut,vt,Mt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(U,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ut=E.depthTexture,vt=ut&&ut.isDepthTexture?ut.type:null,ft=D(E.stencilBuffer,vt),Ht=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=se(E);ue(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,ft,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,U)}else{const ut=E.textures;for(let vt=0;vt<ut.length;vt++){const ft=ut[vt],Ht=u.convert(ft.format,ft.colorSpace),wt=u.convert(ft.type),zt=O(ft.internalFormat,Ht,wt,ft.colorSpace),me=se(E);et&&ue(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,E.width,E.height):ue(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,zt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ut=s.get(E.depthTexture);ut.__renderTarget=E,(!ut.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const vt=ut.__webglTexture,ft=se(E);if(E.depthTexture.format===vr)ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Tr)ue(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Kt(U){const E=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ut=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ut){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ut.removeEventListener("dispose",vt)};ut.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=ut}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,U)}else if(et){E.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ut]),E.__webglDepthbuffer[ut]===void 0)E.__webglDepthbuffer[ut]=o.createRenderbuffer(),Tt(E.__webglDepthbuffer[ut],U,!1);else{const vt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[ut];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ft)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Tt(E.__webglDepthbuffer,U,!1);else{const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,ut,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(U,E,et){const ut=s.get(U);E!==void 0&&St(ut.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&Kt(U)}function ye(U){const E=U.texture,et=s.get(U),ut=s.get(E);U.addEventListener("dispose",B);const vt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,Ht=vt.length>1;if(Ht||(ut.__webglTexture===void 0&&(ut.__webglTexture=o.createTexture()),ut.__version=E.version,h.memory.textures++),ft){et.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[wt]=[];for(let zt=0;zt<E.mipmaps.length;zt++)et.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else et.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let wt=0;wt<E.mipmaps.length;wt++)et.__webglFramebuffer[wt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=vt.length;wt<zt;wt++){const me=s.get(vt[wt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&ue(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let wt=0;wt<vt.length;wt++){const zt=vt[wt];et.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[wt]);const me=u.convert(zt.format,zt.colorSpace),Mt=u.convert(zt.type),Bt=O(zt.internalFormat,me,Mt,zt.colorSpace,U.isXRRenderTarget===!0),qt=se(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Bt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,et.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,ut.__webglTexture),Et(o.TEXTURE_CUBE_MAP,E);for(let wt=0;wt<6;wt++)if(E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(et.__webglFramebuffer[wt][zt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else St(et.__webglFramebuffer[wt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=vt.length;wt<zt;wt++){const me=vt[wt],Mt=s.get(me);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),Et(o.TEXTURE_2D,me),St(et.__webglFramebuffer,U,me,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(me)&&_(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ut.__webglTexture),Et(wt,E),E.mipmaps&&E.mipmaps.length>0)for(let zt=0;zt<E.mipmaps.length;zt++)St(et.__webglFramebuffer[zt],U,E,o.COLOR_ATTACHMENT0,wt,zt);else St(et.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,wt,0);y(E)&&_(wt),i.unbindTexture()}U.depthBuffer&&Kt(U)}function Re(U){const E=U.textures;for(let et=0,ut=E.length;et<ut;et++){const vt=E[et];if(y(vt)){const ft=P(U),Ht=s.get(vt).__webglTexture;i.bindTexture(ft,Ht),_(ft),i.unbindTexture()}}}const ie=[],z=[];function mn(U){if(U.samples>0){if(ue(U)===!1){const E=U.textures,et=U.width,ut=U.height;let vt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=s.get(U),wt=E.length>1;if(wt)for(let zt=0;zt<E.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<E.length;zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(E[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,et,ut,0,0,et,ut,vt,o.NEAREST),m===!0&&(ie.length=0,z.length=0,ie.push(o.COLOR_ATTACHMENT0+zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ie.push(ft),z.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,z)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ie))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<E.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=s.get(E[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function se(U){return Math.min(l.maxSamples,U.samples)}function ue(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(U){const E=h.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Ce(U,E){const et=U.colorSpace,ut=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==br&&et!==Pa&&(Ae.getTransfer(et)===Oe?(ut!==gi||vt!==aa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Xt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=ct,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=Z,this.rebindTextures=Pt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ue}function Ob(o,t){function i(s,l=Pa){let u;const h=Ae.getTransfer(l);if(s===aa)return o.UNSIGNED_BYTE;if(s===fd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===hd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Jg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Kg)return o.BYTE;if(s===Qg)return o.SHORT;if(s===Lo)return o.UNSIGNED_SHORT;if(s===ud)return o.INT;if(s===gs)return o.UNSIGNED_INT;if(s===ea)return o.FLOAT;if(s===Oo)return o.HALF_FLOAT;if(s===$g)return o.ALPHA;if(s===tv)return o.RGB;if(s===gi)return o.RGBA;if(s===ev)return o.LUMINANCE;if(s===nv)return o.LUMINANCE_ALPHA;if(s===vr)return o.DEPTH_COMPONENT;if(s===Tr)return o.DEPTH_STENCIL;if(s===iv)return o.RED;if(s===dd)return o.RED_INTEGER;if(s===av)return o.RG;if(s===pd)return o.RG_INTEGER;if(s===md)return o.RGBA_INTEGER;if(s===_c||s===gc||s===vc||s===Sc)if(h===Oe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===_c)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===_c)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===vc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ph||s===zh||s===Bh||s===Fh)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Ph)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Bh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ih||s===Hh||s===Gh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Ih||s===Hh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh||s===jh||s===Kh||s===Qh||s===Jh||s===$h||s===td||s===ed)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$h)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===td)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ed)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xc||s===nd||s===id)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===xc)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===nd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===id)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===sv||s===ad||s===sd||s===rd)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===xc)return u.COMPRESSED_RED_RGTC1_EXT;if(s===ad)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Er?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new In,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Ia({vertexShader:Pb,fragmentShader:zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new Nc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fb extends xs{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,g=null,S=null,x=null,M=null,R=null;const w=new Bb,y=i.getContextAttributes();let _=null,P=null;const O=[],D=[],H=new he;let I=null;const B=new oi;B.viewport=new Ze;const K=new oi;K.viewport=new Ze;const C=[B,K],A=new sy;let F=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let dt=O[q];return dt===void 0&&(dt=new oh,O[q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(q){let dt=O[q];return dt===void 0&&(dt=new oh,O[q]=dt),dt.getGripSpace()},this.getHand=function(q){let dt=O[q];return dt===void 0&&(dt=new oh,O[q]=dt),dt.getHandSpace()};function at(q){const dt=D.indexOf(q.inputSource);if(dt===-1)return;const St=O[dt];St!==void 0&&(St.update(q.inputSource,q.frame,p||h),St.dispatchEvent({type:q.type,data:q.inputSource}))}function mt(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",mt),l.removeEventListener("inputsourceschange",ht);for(let q=0;q<O.length;q++){const dt=D[q];dt!==null&&(D[q]=null,O[q].disconnect(dt))}F=null,ct=null,w.reset(),t.setRenderTarget(_),M=null,x=null,S=null,l=null,P=null,At.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){u=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(q){if(l=q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",mt),l.addEventListener("inputsourceschange",ht),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Tt=null,Rt=null;y.depth&&(Rt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=y.stencil?Tr:vr,Tt=y.stencil?Er:gs);const Kt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new vs(x.textureWidth,x.textureHeight,{format:gi,type:aa,depthTexture:new Sv(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new vs(M.framebufferWidth,M.framebufferHeight,{format:gi,type:aa,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ht(q){for(let dt=0;dt<q.removed.length;dt++){const St=q.removed[dt],Tt=D.indexOf(St);Tt>=0&&(D[Tt]=null,O[Tt].disconnect(St))}for(let dt=0;dt<q.added.length;dt++){const St=q.added[dt];let Tt=D.indexOf(St);if(Tt===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=D.length){D.push(St),Tt=Kt;break}else if(D[Kt]===null){D[Kt]=St,Tt=Kt;break}if(Tt===-1)break}const Rt=O[Tt];Rt&&Rt.connect(St)}}const W=new $,st=new $;function Z(q,dt,St){W.setFromMatrixPosition(dt.matrixWorld),st.setFromMatrixPosition(St.matrixWorld);const Tt=W.distanceTo(st),Rt=dt.projectionMatrix.elements,Kt=St.projectionMatrix.elements,Pt=Rt[14]/(Rt[10]-1),ye=Rt[14]/(Rt[10]+1),Re=(Rt[9]+1)/Rt[5],ie=(Rt[9]-1)/Rt[5],z=(Rt[8]-1)/Rt[0],mn=(Kt[8]+1)/Kt[0],se=Pt*z,ue=Pt*mn,kt=Tt/(-z+mn),Ce=kt*-z;if(dt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(kt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Pt+kt,U=ye+kt,E=se-Ce,et=ue+(Tt-Ce),ut=Re*ye/U*Xt,vt=ie*ye/U*Xt;q.projectionMatrix.makePerspective(E,et,ut,vt,Xt,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function xt(q,dt){dt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(dt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(l===null)return;let dt=q.near,St=q.far;w.texture!==null&&(w.depthNear>0&&(dt=w.depthNear),w.depthFar>0&&(St=w.depthFar)),A.near=K.near=B.near=dt,A.far=K.far=B.far=St,(F!==A.near||ct!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,ct=A.far),B.layers.mask=q.layers.mask|2,K.layers.mask=q.layers.mask|4,A.layers.mask=B.layers.mask|K.layers.mask;const Tt=q.parent,Rt=A.cameras;xt(A,Tt);for(let Kt=0;Kt<Rt.length;Kt++)xt(Rt[Kt],Tt);Rt.length===2?Z(A,B,K):A.projectionMatrix.copy(B.projectionMatrix),L(q,A,Tt)};function L(q,dt,St){St===null?q.matrix.copy(dt.matrixWorld):(q.matrix.copy(St.matrixWorld),q.matrix.invert(),q.matrix.multiply(dt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(dt.projectionMatrix),q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=od*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(q){m=q,x!==null&&(x.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let it=null;function Et(q,dt){if(g=dt.getViewerPose(p||h),R=dt,g!==null){const St=g.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Tt=!1;St.length!==A.cameras.length&&(A.cameras.length=0,Tt=!0);for(let Pt=0;Pt<St.length;Pt++){const ye=St[Pt];let Re=null;if(M!==null)Re=M.getViewport(ye);else{const z=S.getViewSubImage(x,ye);Re=z.viewport,Pt===0&&(t.setRenderTargetTextures(P,z.colorTexture,x.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(P))}let ie=C[Pt];ie===void 0&&(ie=new oi,ie.layers.enable(Pt),ie.viewport=new Ze,C[Pt]=ie),ie.matrix.fromArray(ye.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(ye.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(Re.x,Re.y,Re.width,Re.height),Pt===0&&(A.matrix.copy(ie.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Tt===!0&&A.cameras.push(ie)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&S){const Pt=S.getDepthInformation(St[0]);Pt&&Pt.isValid&&Pt.texture&&w.init(t,Pt,l.renderState)}}for(let St=0;St<O.length;St++){const Tt=D[St],Rt=O[St];Tt!==null&&Rt!==void 0&&Rt.update(Tt,dt,p||h)}it&&it(q,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),R=null}const At=new xv;At.setAnimationLoop(Et),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}}const fs=new sa,Ib=new je;function Hb(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,pv(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,O,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),S(y,_)):_.isMeshPhongMaterial?(u(y,_),g(y,_)):_.isMeshStandardMaterial?(u(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(u(y,_),R(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),w(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,P,O):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Fn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Fn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,fs.copy(D),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),y.envMapRotation.value.setFromMatrix4(Ib.makeRotationFromEuler(fs)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,P,O){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=O*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function S(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,_){_.matcap&&(y.matcap.value=_.matcap)}function w(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Gb(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;s.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(R(P),D=g(P),l[P.id]=D,P.addEventListener("dispose",y));const H=O.program;s.updateUBOMapping(P,H);const I=t.render.frame;u[P.id]!==I&&(x(P),u[P.id]=I)}function g(P){const O=S();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function S(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,B=D.length;I<B;I++){const K=Array.isArray(D[I])?D[I]:[D[I]];for(let C=0,A=K.length;C<A;C++){const F=K[C];if(M(F,I,C,H)===!0){const ct=F.__offset,at=Array.isArray(F.value)?F.value:[F.value];let mt=0;for(let ht=0;ht<at.length;ht++){const W=at[ht],st=w(W);typeof W=="number"||typeof W=="boolean"?(F.__data[0]=W,o.bufferSubData(o.UNIFORM_BUFFER,ct+mt,F.__data)):W.isMatrix3?(F.__data[0]=W.elements[0],F.__data[1]=W.elements[1],F.__data[2]=W.elements[2],F.__data[3]=0,F.__data[4]=W.elements[3],F.__data[5]=W.elements[4],F.__data[6]=W.elements[5],F.__data[7]=0,F.__data[8]=W.elements[6],F.__data[9]=W.elements[7],F.__data[10]=W.elements[8],F.__data[11]=0):(W.toArray(F.__data,mt),mt+=st.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ct,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,D,H){const I=P.value,B=O+"_"+D;if(H[B]===void 0)return typeof I=="number"||typeof I=="boolean"?H[B]=I:H[B]=I.clone(),!0;{const K=H[B];if(typeof I=="number"||typeof I=="boolean"){if(K!==I)return H[B]=I,!0}else if(K.equals(I)===!1)return K.copy(I),!0}return!1}function R(P){const O=P.uniforms;let D=0;const H=16;for(let B=0,K=O.length;B<K;B++){const C=Array.isArray(O[B])?O[B]:[O[B]];for(let A=0,F=C.length;A<F;A++){const ct=C[A],at=Array.isArray(ct.value)?ct.value:[ct.value];for(let mt=0,ht=at.length;mt<ht;mt++){const W=at[mt],st=w(W),Z=D%H,xt=Z%st.boundary,L=Z+xt;D+=xt,L!==0&&H-L<st.storage&&(D+=H-L),ct.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=D,D+=st.storage}}}const I=D%H;return I>0&&(D+=H-I),P.__size=D,P.__cache={},this}function w(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Vb{constructor(t={}){const{canvas:i=Tx(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const R=new Uint32Array(4),w=new Int32Array(4);let y=null,_=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=Ba,this.toneMappingExposure=1;const D=this;let H=!1,I=0,B=0,K=null,C=-1,A=null;const F=new Ze,ct=new Ze;let at=null;const mt=new we(0);let ht=0,W=i.width,st=i.height,Z=1,xt=null,L=null;const it=new Ze(0,0,W,st),Et=new Ze(0,0,W,st);let At=!1;const q=new gv;let dt=!1,St=!1;this.transmissionResolutionScale=1;const Tt=new je,Rt=new je,Kt=new $,Pt=new Ze,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function ie(){return K===null?Z:1}let z=s;function mn(b,X){return i.getContext(b,X)}try{const b={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const X="webgl2";if(z=mn(X,b),z===null)throw mn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,ue,kt,Ce,Xt,U,E,et,ut,vt,ft,Ht,wt,zt,me,Mt,Bt,qt,Gt,Ft,ae,Zt,De,k;function Lt(){se=new JE(z),se.init(),Zt=new Ob(z,se),ue=new qE(z,se,t,Zt),kt=new Lb(z,se),ue.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Ce=new eT(z),Xt=new Sb,U=new Nb(z,se,kt,Xt,ue,Zt,Ce),E=new ZE(D),et=new QE(D),ut=new ly(z),De=new XE(z,ut),vt=new $E(z,ut,Ce,De),ft=new iT(z,vt,ut,Ce),Gt=new nT(z,ue,U),Mt=new YE(Xt),Ht=new vb(D,E,et,se,ue,De,Mt),wt=new Hb(D,Xt),zt=new yb,me=new Rb(se),qt=new kE(D,E,et,kt,ft,M,m),Bt=new Db(D,ft,ue),k=new Gb(z,Ce,ue,kt),Ft=new WE(z,se,Ce),ae=new tT(z,se,Ce),Ce.programs=Ht.programs,D.capabilities=ue,D.extensions=se,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=Ce}Lt();const rt=new Fb(D,z);this.xr=rt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(b){b!==void 0&&(Z=b,this.setSize(W,st,!1))},this.getSize=function(b){return b.set(W,st)},this.setSize=function(b,X,tt=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,st=X,i.width=Math.floor(b*Z),i.height=Math.floor(X*Z),tt===!0&&(i.style.width=b+"px",i.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(W*Z,st*Z).floor()},this.setDrawingBufferSize=function(b,X,tt){W=b,st=X,Z=tt,i.width=Math.floor(b*tt),i.height=Math.floor(X*tt),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,X,tt,Q){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,X,tt,Q),kt.viewport(F.copy(it).multiplyScalar(Z).round())},this.getScissor=function(b){return b.copy(Et)},this.setScissor=function(b,X,tt,Q){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,X,tt,Q),kt.scissor(ct.copy(Et).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(b){kt.setScissorTest(At=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){L=b},this.getClearColor=function(b){return b.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(b=!0,X=!0,tt=!0){let Q=0;if(b){let Y=!1;if(K!==null){const yt=K.texture.format;Y=yt===md||yt===pd||yt===dd}if(Y){const yt=K.texture.type,bt=yt===aa||yt===gs||yt===Lo||yt===Er||yt===fd||yt===hd,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),$t=Ot.r,te=Ot.g,Yt=Ot.b;bt?(R[0]=$t,R[1]=te,R[2]=Yt,R[3]=Nt,z.clearBufferuiv(z.COLOR,0,R)):(w[0]=$t,w[1]=te,w[2]=Yt,w[3]=Nt,z.clearBufferiv(z.COLOR,0,w))}else Q|=z.COLOR_BUFFER_BIT}X&&(Q|=z.DEPTH_BUFFER_BIT),tt&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),zt.dispose(),me.dispose(),Xt.dispose(),E.dispose(),et.dispose(),ft.dispose(),De.dispose(),k.dispose(),Ht.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Io),rt.removeEventListener("sessionend",Cr),Mi.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const b=Ce.autoReset,X=Bt.enabled,tt=Bt.autoUpdate,Q=Bt.needsUpdate,Y=Bt.type;Lt(),Ce.autoReset=b,Bt.enabled=X,Bt.autoUpdate=tt,Bt.needsUpdate=Q,Bt.type=Y}function Dt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const X=b.target;X.removeEventListener("dispose",Jt),He(X)}function He(b){tn(b),Xt.remove(b)}function tn(b){const X=Xt.get(b).programs;X!==void 0&&(X.forEach(function(tt){Ht.releaseProgram(tt)}),b.isShaderMaterial&&Ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,tt,Q,Y,yt){X===null&&(X=ye);const bt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ot=Bc(b,X,tt,Q,Y);kt.setMaterial(Q,bt);let Nt=tt.index,$t=1;if(Q.wireframe===!0){if(Nt=vt.getWireframeAttribute(tt),Nt===void 0)return;$t=2}const te=tt.drawRange,Yt=tt.attributes.position;let _e=te.start*$t,ge=(te.start+te.count)*$t;yt!==null&&(_e=Math.max(_e,yt.start*$t),ge=Math.min(ge,(yt.start+yt.count)*$t)),Nt!==null?(_e=Math.max(_e,0),ge=Math.min(ge,Nt.count)):Yt!=null&&(_e=Math.max(_e,0),ge=Math.min(ge,Yt.count));const Ie=ge-_e;if(Ie<0||Ie===1/0)return;De.setup(Y,Q,Ot,tt,Nt);let Ee,ee=Ft;if(Nt!==null&&(Ee=ut.get(Nt),ee=ae,ee.setIndex(Ee)),Y.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ie()),ee.setMode(z.LINES)):ee.setMode(z.TRIANGLES);else if(Y.isLine){let jt=Q.linewidth;jt===void 0&&(jt=1),kt.setLineWidth(jt*ie()),Y.isLineSegments?ee.setMode(z.LINES):Y.isLineLoop?ee.setMode(z.LINE_LOOP):ee.setMode(z.LINE_STRIP)}else Y.isPoints?ee.setMode(z.POINTS):Y.isSprite&&ee.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ee.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ee.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const jt=Y._multiDrawStarts,an=Y._multiDrawCounts,ve=Y._multiDrawCount,Ln=Nt?ut.get(Nt).bytesPerElement:1,li=Xt.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<ve;Rn++)li.setValue(z,"_gl_DrawID",Rn),ee.render(jt[Rn]/Ln,an[Rn])}else if(Y.isInstancedMesh)ee.renderInstances(_e,Ie,Y.count);else if(tt.isInstancedBufferGeometry){const jt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,an=Math.min(tt.instanceCount,jt);ee.renderInstances(_e,Ie,an)}else ee.render(_e,Ie)};function Me(b,X,tt){b.transparent===!0&&b.side===ta&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,nn(b,X,tt),b.side=Fa,b.needsUpdate=!0,nn(b,X,tt),b.side=ta):nn(b,X,tt)}this.compile=function(b,X,tt=null){tt===null&&(tt=b),_=me.get(tt),_.init(X),O.push(_),tt.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),b!==tt&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))}),_.setupLights();const Q=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const yt=Y.material;if(yt)if(Array.isArray(yt))for(let bt=0;bt<yt.length;bt++){const Ot=yt[bt];Me(Ot,tt,Y),Q.add(Ot)}else Me(yt,tt,Y),Q.add(yt)}),O.pop(),_=null,Q},this.compileAsync=function(b,X,tt=null){const Q=this.compile(b,X,tt);return new Promise(Y=>{function yt(){if(Q.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&Q.delete(bt)}),Q.size===0){Y(b);return}setTimeout(yt,10)}se.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let bn=null;function An(b){bn&&bn(b)}function Io(){Mi.stop()}function Cr(){Mi.start()}const Mi=new xv;Mi.setAnimationLoop(An),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(b){bn=b,rt.setAnimationLoop(b),b===null?Mi.stop():Mi.start()},rt.addEventListener("sessionstart",Io),rt.addEventListener("sessionend",Cr),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(X),X=rt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,X,K),_=me.get(b,O.length),_.init(X),O.push(_),Rt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q.setFromProjectionMatrix(Rt),St=this.localClippingEnabled,dt=Mt.init(this.clippingPlanes,St),y=zt.get(b,P.length),y.init(),P.push(y),rt.enabled===!0&&rt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&ys(yt,X,-1/0,D.sortObjects)}ys(b,X,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(xt,L),Re=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Re&&qt.addToRenderList(y,b),this.info.render.frame++,dt===!0&&Mt.beginShadows();const tt=_.state.shadowsArray;Bt.render(tt,b,X),dt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Y=y.transmissive;if(_.setupLights(),X.isArrayCamera){const yt=X.cameras;if(Y.length>0)for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];Ho(Q,Y,b,Nt)}Re&&qt.render(b);for(let bt=0,Ot=yt.length;bt<Ot;bt++){const Nt=yt[bt];wr(y,b,Nt,Nt.viewport)}}else Y.length>0&&Ho(Q,Y,b,X),Re&&qt.render(b),wr(y,b,X);K!==null&&B===0&&(U.updateMultisampleRenderTarget(K),U.updateRenderTargetMipmap(K)),b.isScene===!0&&b.onAfterRender(D,b,X),De.resetDefaultState(),C=-1,A=null,O.pop(),O.length>0?(_=O[O.length-1],dt===!0&&Mt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function ys(b,X,tt,Q){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)tt=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){Q&&Pt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Rt);const bt=ft.update(b),Ot=b.material;Ot.visible&&y.push(b,bt,Ot,tt,Pt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const bt=ft.update(b),Ot=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Pt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Pt.copy(bt.boundingSphere.center)),Pt.applyMatrix4(b.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ot)){const Nt=bt.groups;for(let $t=0,te=Nt.length;$t<te;$t++){const Yt=Nt[$t],_e=Ot[Yt.materialIndex];_e&&_e.visible&&y.push(b,bt,_e,tt,Pt.z,Yt)}}else Ot.visible&&y.push(b,bt,Ot,tt,Pt.z,null)}}const yt=b.children;for(let bt=0,Ot=yt.length;bt<Ot;bt++)ys(yt[bt],X,tt,Q)}function wr(b,X,tt,Q){const Y=b.opaque,yt=b.transmissive,bt=b.transparent;_.setupLightsView(tt),dt===!0&&Mt.setGlobalState(D.clippingPlanes,tt),Q&&kt.viewport(F.copy(Q)),Y.length>0&&Gn(Y,X,tt),yt.length>0&&Gn(yt,X,tt),bt.length>0&&Gn(bt,X,tt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ho(b,X,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new vs(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Oo:aa,minFilter:_s,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const yt=_.state.transmissionRenderTarget[Q.id],bt=Q.viewport||F;yt.setSize(bt.z*D.transmissionResolutionScale,bt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(yt),D.getClearColor(mt),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),Re&&qt.render(tt);const Nt=D.toneMapping;D.toneMapping=Ba;const $t=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),dt===!0&&Mt.setGlobalState(D.clippingPlanes,Q),Gn(b,tt,Q),U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt),se.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let Yt=0,_e=X.length;Yt<_e;Yt++){const ge=X[Yt],Ie=ge.object,Ee=ge.geometry,ee=ge.material,jt=ge.group;if(ee.side===ta&&Ie.layers.test(Q.layers)){const an=ee.side;ee.side=Fn,ee.needsUpdate=!0,en(Ie,tt,Q,Ee,ee,jt),ee.side=an,ee.needsUpdate=!0,te=!0}}te===!0&&(U.updateMultisampleRenderTarget(yt),U.updateRenderTargetMipmap(yt))}D.setRenderTarget(Ot),D.setClearColor(mt,ht),$t!==void 0&&(Q.viewport=$t),D.toneMapping=Nt}function Gn(b,X,tt){const Q=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,yt=b.length;Y<yt;Y++){const bt=b[Y],Ot=bt.object,Nt=bt.geometry,$t=Q===null?bt.material:Q,te=bt.group;Ot.layers.test(tt.layers)&&en(Ot,X,tt,Nt,$t,te)}}function en(b,X,tt,Q,Y,yt){b.onBeforeRender(D,X,tt,Q,Y,yt),b.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(D,X,tt,Q,b,yt),Y.transparent===!0&&Y.side===ta&&Y.forceSinglePass===!1?(Y.side=Fn,Y.needsUpdate=!0,D.renderBufferDirect(tt,X,Q,Y,b,yt),Y.side=Fa,Y.needsUpdate=!0,D.renderBufferDirect(tt,X,Q,Y,b,yt),Y.side=ta):D.renderBufferDirect(tt,X,Q,Y,b,yt),b.onAfterRender(D,X,tt,Q,Y,yt)}function nn(b,X,tt){X.isScene!==!0&&(X=ye);const Q=Xt.get(b),Y=_.state.lights,yt=_.state.shadowsArray,bt=Y.state.version,Ot=Ht.getParameters(b,Y.state,yt,X,tt),Nt=Ht.getProgramCacheKey(Ot);let $t=Q.programs;Q.environment=b.isMeshStandardMaterial?X.environment:null,Q.fog=X.fog,Q.envMap=(b.isMeshStandardMaterial?et:E).get(b.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",Jt),$t=new Map,Q.programs=$t);let te=$t.get(Nt);if(te!==void 0){if(Q.currentProgram===te&&Q.lightsStateVersion===bt)return Ms(b,Ot),te}else Ot.uniforms=Ht.getUniforms(b),b.onBeforeCompile(Ot,D),te=Ht.acquireProgram(Ot,Nt),$t.set(Nt,te),Q.uniforms=Ot.uniforms;const Yt=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Yt.clippingPlanes=Mt.uniform),Ms(b,Ot),Q.needsLights=Go(b),Q.lightsStateVersion=bt,Q.needsLights&&(Yt.ambientLightColor.value=Y.state.ambient,Yt.lightProbe.value=Y.state.probe,Yt.directionalLights.value=Y.state.directional,Yt.directionalLightShadows.value=Y.state.directionalShadow,Yt.spotLights.value=Y.state.spot,Yt.spotLightShadows.value=Y.state.spotShadow,Yt.rectAreaLights.value=Y.state.rectArea,Yt.ltc_1.value=Y.state.rectAreaLTC1,Yt.ltc_2.value=Y.state.rectAreaLTC2,Yt.pointLights.value=Y.state.point,Yt.pointLightShadows.value=Y.state.pointShadow,Yt.hemisphereLights.value=Y.state.hemi,Yt.directionalShadowMap.value=Y.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Yt.spotShadowMap.value=Y.state.spotShadowMap,Yt.spotLightMatrix.value=Y.state.spotLightMatrix,Yt.spotLightMap.value=Y.state.spotLightMap,Yt.pointShadowMap.value=Y.state.pointShadowMap,Yt.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=te,Q.uniformsList=null,te}function Ui(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Mc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ms(b,X){const tt=Xt.get(b);tt.outputColorSpace=X.outputColorSpace,tt.batching=X.batching,tt.batchingColor=X.batchingColor,tt.instancing=X.instancing,tt.instancingColor=X.instancingColor,tt.instancingMorph=X.instancingMorph,tt.skinning=X.skinning,tt.morphTargets=X.morphTargets,tt.morphNormals=X.morphNormals,tt.morphColors=X.morphColors,tt.morphTargetsCount=X.morphTargetsCount,tt.numClippingPlanes=X.numClippingPlanes,tt.numIntersection=X.numClipIntersection,tt.vertexAlphas=X.vertexAlphas,tt.vertexTangents=X.vertexTangents,tt.toneMapping=X.toneMapping}function Bc(b,X,tt,Q,Y){X.isScene!==!0&&(X=ye),U.resetTextureUnits();const yt=X.fog,bt=Q.isMeshStandardMaterial?X.environment:null,Ot=K===null?D.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:br,Nt=(Q.isMeshStandardMaterial?et:E).get(Q.envMap||bt),$t=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,te=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!tt.morphAttributes.position,_e=!!tt.morphAttributes.normal,ge=!!tt.morphAttributes.color;let Ie=Ba;Q.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const Ee=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ee=Ee!==void 0?Ee.length:0,jt=Xt.get(Q),an=_.state.lights;if(dt===!0&&(St===!0||b!==A)){const ke=b===A&&Q.id===C;Mt.setState(Q,b,ke)}let ve=!1;Q.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==an.state.version||jt.outputColorSpace!==Ot||Y.isBatchedMesh&&jt.batching===!1||!Y.isBatchedMesh&&jt.batching===!0||Y.isBatchedMesh&&jt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&jt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&jt.instancing===!1||!Y.isInstancedMesh&&jt.instancing===!0||Y.isSkinnedMesh&&jt.skinning===!1||!Y.isSkinnedMesh&&jt.skinning===!0||Y.isInstancedMesh&&jt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&jt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&jt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&jt.instancingMorph===!1&&Y.morphTexture!==null||jt.envMap!==Nt||Q.fog===!0&&jt.fog!==yt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Mt.numPlanes||jt.numIntersection!==Mt.numIntersection)||jt.vertexAlphas!==$t||jt.vertexTangents!==te||jt.morphTargets!==Yt||jt.morphNormals!==_e||jt.morphColors!==ge||jt.toneMapping!==Ie||jt.morphTargetsCount!==ee)&&(ve=!0):(ve=!0,jt.__version=Q.version);let Ln=jt.currentProgram;ve===!0&&(Ln=nn(Q,X,Y));let li=!1,Rn=!1,un=!1;const Ue=Ln.getUniforms(),Cn=jt.uniforms;if(kt.useProgram(Ln.program)&&(li=!0,Rn=!0,un=!0),Q.id!==C&&(C=Q.id,Rn=!0),li||A!==b){kt.buffers.depth.getReversed()?(Tt.copy(b.projectionMatrix),Ax(Tt),Rx(Tt),Ue.setValue(z,"projectionMatrix",Tt)):Ue.setValue(z,"projectionMatrix",b.projectionMatrix),Ue.setValue(z,"viewMatrix",b.matrixWorldInverse);const _n=Ue.map.cameraPosition;_n!==void 0&&_n.setValue(z,Kt.setFromMatrixPosition(b.matrixWorld)),ue.logarithmicDepthBuffer&&Ue.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ue.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Rn=!0,un=!0)}if(Y.isSkinnedMesh){Ue.setOptional(z,Y,"bindMatrix"),Ue.setOptional(z,Y,"bindMatrixInverse");const ke=Y.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ue.setValue(z,"boneTexture",ke.boneTexture,U))}Y.isBatchedMesh&&(Ue.setOptional(z,Y,"batchingTexture"),Ue.setValue(z,"batchingTexture",Y._matricesTexture,U),Ue.setOptional(z,Y,"batchingIdTexture"),Ue.setValue(z,"batchingIdTexture",Y._indirectTexture,U),Ue.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Ue.setValue(z,"batchingColorTexture",Y._colorsTexture,U));const xn=tt.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Gt.update(Y,tt,Ln),(Rn||jt.receiveShadow!==Y.receiveShadow)&&(jt.receiveShadow=Y.receiveShadow,Ue.setValue(z,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&X.environment!==null&&(Cn.envMapIntensity.value=X.environmentIntensity),Rn&&(Ue.setValue(z,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Fc(Cn,un),yt&&Q.fog===!0&&wt.refreshFogUniforms(Cn,yt),wt.refreshMaterialUniforms(Cn,Q,Z,st,_.state.transmissionRenderTarget[b.id]),Mc.upload(z,Ui(jt),Cn,U)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Mc.upload(z,Ui(jt),Cn,U),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ue.setValue(z,"center",Y.center),Ue.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Ue.setValue(z,"normalMatrix",Y.normalMatrix),Ue.setValue(z,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let _n=0,Es=ke.length;_n<Es;_n++){const Nn=ke[_n];k.update(Nn,Ln),k.bind(Nn,Ln)}}return Ln}function Fc(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Go(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(b,X,tt){Xt.get(b.texture).__webglTexture=X,Xt.get(b.depthTexture).__webglTexture=tt;const Q=Xt.get(b);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,X){const tt=Xt.get(b);tt.__webglFramebuffer=X,tt.__useDefaultFramebuffer=X===void 0};const Ha=z.createFramebuffer();this.setRenderTarget=function(b,X=0,tt=0){K=b,I=X,B=tt;let Q=!0,Y=null,yt=!1,bt=!1;if(b){const Nt=Xt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)U.setupRenderTarget(b);else if(Nt.__hasExternalTextures)U.rebindTextures(b,Xt.get(b.texture).__webglTexture,Xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Yt=b.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(b.width!==Yt.image.width||b.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);const te=Xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(te[X])?Y=te[X][tt]:Y=te[X],yt=!0):b.samples>0&&U.useMultisampledRTT(b)===!1?Y=Xt.get(b).__webglMultisampledFramebuffer:Array.isArray(te)?Y=te[tt]:Y=te,F.copy(b.viewport),ct.copy(b.scissor),at=b.scissorTest}else F.copy(it).multiplyScalar(Z).floor(),ct.copy(Et).multiplyScalar(Z).floor(),at=At;if(tt!==0&&(Y=Ha),kt.bindFramebuffer(z.FRAMEBUFFER,Y)&&Q&&kt.drawBuffers(b,Y),kt.viewport(F),kt.scissor(ct),kt.setScissorTest(at),yt){const Nt=Xt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Nt.__webglTexture,tt)}else if(bt){const Nt=Xt.get(b.texture),$t=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Nt.__webglTexture,tt,$t)}else if(b!==null&&tt!==0){const Nt=Xt.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Nt.__webglTexture,tt)}C=-1},this.readRenderTargetPixels=function(b,X,tt,Q,Y,yt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);try{const Nt=b.texture,$t=Nt.format,te=Nt.type;if(!ue.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-Q&&tt>=0&&tt<=b.height-Y&&z.readPixels(X,tt,Q,Y,Zt.convert($t),Zt.convert(te),yt)}finally{const Nt=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,X,tt,Q,Y,yt,bt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Ot=Ot[bt]),Ot){const Nt=b.texture,$t=Nt.format,te=Nt.type;if(!ue.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=b.width-Q&&tt>=0&&tt<=b.height-Y){kt.bindFramebuffer(z.FRAMEBUFFER,Ot);const Yt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(X,tt,Q,Y,Zt.convert($t),Zt.convert(te),0);const _e=K!==null?Xt.get(K).__webglFramebuffer:null;kt.bindFramebuffer(z.FRAMEBUFFER,_e);const ge=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await bx(z,ge,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Yt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.deleteBuffer(Yt),z.deleteSync(ge),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,X=null,tt=0){b.isTexture!==!0&&(dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,b=arguments[1]);const Q=Math.pow(2,-tt),Y=Math.floor(b.image.width*Q),yt=Math.floor(b.image.height*Q),bt=X!==null?X.x:0,Ot=X!==null?X.y:0;U.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,bt,Ot,Y,yt),kt.unbindTexture()};const Dr=z.createFramebuffer(),Li=z.createFramebuffer();this.copyTextureToTexture=function(b,X,tt=null,Q=null,Y=0,yt=null){b.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,b=arguments[1],X=arguments[2],yt=arguments[3]||0,tt=null),yt===null&&(Y!==0?(dr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Y,Y=0):yt=0);let bt,Ot,Nt,$t,te,Yt,_e,ge,Ie;const Ee=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(tt!==null)bt=tt.max.x-tt.min.x,Ot=tt.max.y-tt.min.y,Nt=tt.isBox3?tt.max.z-tt.min.z:1,$t=tt.min.x,te=tt.min.y,Yt=tt.isBox3?tt.min.z:0;else{const xn=Math.pow(2,-Y);bt=Math.floor(Ee.width*xn),Ot=Math.floor(Ee.height*xn),b.isDataArrayTexture?Nt=Ee.depth:b.isData3DTexture?Nt=Math.floor(Ee.depth*xn):Nt=1,$t=0,te=0,Yt=0}Q!==null?(_e=Q.x,ge=Q.y,Ie=Q.z):(_e=0,ge=0,Ie=0);const ee=Zt.convert(X.format),jt=Zt.convert(X.type);let an;X.isData3DTexture?(U.setTexture3D(X,0),an=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),an=z.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),an=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const ve=z.getParameter(z.UNPACK_ROW_LENGTH),Ln=z.getParameter(z.UNPACK_IMAGE_HEIGHT),li=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),un=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$t),z.pixelStorei(z.UNPACK_SKIP_ROWS,te),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Yt);const Ue=b.isDataArrayTexture||b.isData3DTexture,Cn=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const xn=Xt.get(b),ke=Xt.get(X),_n=Xt.get(xn.__renderTarget),Es=Xt.get(ke.__renderTarget);kt.bindFramebuffer(z.READ_FRAMEBUFFER,_n.__webglFramebuffer),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Es.__webglFramebuffer);for(let Nn=0;Nn<Nt;Nn++)Ue&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(b).__webglTexture,Y,Yt+Nn),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.get(X).__webglTexture,yt,Ie+Nn)),z.blitFramebuffer($t,te,bt,Ot,_e,ge,bt,Ot,z.DEPTH_BUFFER_BIT,z.NEAREST);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Xt.has(b)){const xn=Xt.get(b),ke=Xt.get(X);kt.bindFramebuffer(z.READ_FRAMEBUFFER,Dr),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Li);for(let _n=0;_n<Nt;_n++)Ue?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,xn.__webglTexture,Y,Yt+_n):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xn.__webglTexture,Y),Cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ke.__webglTexture,yt,Ie+_n):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ke.__webglTexture,yt),Y!==0?z.blitFramebuffer($t,te,bt,Ot,_e,ge,bt,Ot,z.COLOR_BUFFER_BIT,z.NEAREST):Cn?z.copyTexSubImage3D(an,yt,_e,ge,Ie+_n,$t,te,bt,Ot):z.copyTexSubImage2D(an,yt,_e,ge,$t,te,bt,Ot);kt.bindFramebuffer(z.READ_FRAMEBUFFER,null),kt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(an,yt,_e,ge,Ie,bt,Ot,Nt,ee,jt,Ee.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(an,yt,_e,ge,Ie,bt,Ot,Nt,ee,Ee.data):z.texSubImage3D(an,yt,_e,ge,Ie,bt,Ot,Nt,ee,jt,Ee):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,_e,ge,bt,Ot,ee,jt,Ee.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,_e,ge,Ee.width,Ee.height,ee,Ee.data):z.texSubImage2D(z.TEXTURE_2D,yt,_e,ge,bt,Ot,ee,jt,Ee);z.pixelStorei(z.UNPACK_ROW_LENGTH,ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ln),z.pixelStorei(z.UNPACK_SKIP_PIXELS,li),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,un),yt===0&&X.generateMipmaps&&z.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(b,X,tt=null,Q=null,Y=0){return b.isTexture!==!0&&(dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,b=arguments[2],X=arguments[3],Y=arguments[4]||0),dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,X,tt,Q,Y)},this.initRenderTarget=function(b){Xt.get(b).__webglFramebuffer===void 0&&U.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?U.setTextureCube(b,0):b.isData3DTexture?U.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?U.setTexture2DArray(b,0):U.setTexture2D(b,0),kt.unbindTexture()},this.resetState=function(){I=0,B=0,K=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return na}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const Pg={type:"change"},vd={type:"start"},bv={type:"end"},mc=new _d,zg=new Oa,kb=Math.cos(70*Ex.DEG2RAD),on=new $,Bn=2*Math.PI,Pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_h=1e-6;class Xb extends ry{constructor(t,i=null){super(t,i),this.state=Pe.NONE,this.enabled=!0,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_r.ROTATE,MIDDLE:_r.DOLLY,RIGHT:_r.PAN},this.touches={ONE:pr.ROTATE,TWO:pr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ss,this._lastTargetPosition=new $,this._quat=new Ss().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new cg,this._sphericalDelta=new cg,this._scale=1,this._panOffset=new $,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new $,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qb.bind(this),this._onPointerDown=Wb.bind(this),this._onPointerUp=Yb.bind(this),this._onContextMenu=tA.bind(this),this._onMouseWheel=Kb.bind(this),this._onKeyDown=Qb.bind(this),this._onTouchStart=Jb.bind(this),this._onTouchMove=$b.bind(this),this._onMouseDown=Zb.bind(this),this._onMouseMove=jb.bind(this),this._interceptControlDown=eA.bind(this),this._interceptControlUp=nA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pg),this.update(),this.state=Pe.NONE}update(t=null){const i=this.object.position;on.copy(i).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Bn:s>Math.PI&&(s-=Bn),l<-Math.PI?l+=Bn:l>Math.PI&&(l-=Bn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let u=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),u=h!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),i.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=on.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),u=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),u=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(mc.origin.copy(this.object.position),mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mc.direction))<kb?this.object.lookAt(this.target):(zg.setFromNormalAndCoplanarPoint(this.object.up,this.target),mc.intersectPlane(zg,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),u=!0)}return this._scale=1,this._performCursorZoom=!1,u||this._lastPosition.distanceToSquared(this.object.position)>_h||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_h||this._lastTargetPosition.distanceToSquared(this.target)>_h?(this.dispatchEvent(Pg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Bn/60*this.autoRotateSpeed*t:Bn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){on.setFromMatrixColumn(i,0),on.multiplyScalar(-t),this._panOffset.add(on)}_panUp(t,i){this.screenSpacePanning===!0?on.setFromMatrixColumn(i,1):(on.setFromMatrixColumn(i,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(t),this._panOffset.add(on)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;on.copy(l).sub(this.target);let u=on.length();u*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*u/s.clientHeight,this.object.matrix),this._panUp(2*i*u/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,u=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(u/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyStart.set(0,u)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),u=.5*(t.pageY+s.y);this._rotateEnd.set(l,u)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Bn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Bn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,u=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,u),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new he,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function Wb(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function qb(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function Yb(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bv),this.state=Pe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Zb(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Pe.DOLLY;break;case _r.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Pe.ROTATE}break;case _r.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Pe.PAN}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(vd)}function jb(o){switch(this.state){case Pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Kb(o){this.enabled===!1||this.enableZoom===!1||this.state!==Pe.NONE||(o.preventDefault(),this.dispatchEvent(vd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(bv))}function Qb(o){this.enabled!==!1&&this._handleKeyDown(o)}function Jb(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case pr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Pe.TOUCH_ROTATE;break;case pr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Pe.TOUCH_PAN;break;default:this.state=Pe.NONE}break;case 2:switch(this.touches.TWO){case pr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Pe.TOUCH_DOLLY_PAN;break;case pr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Pe.TOUCH_DOLLY_ROTATE;break;default:this.state=Pe.NONE}break;default:this.state=Pe.NONE}this.state!==Pe.NONE&&this.dispatchEvent(vd)}function $b(o){switch(this._trackPointer(o),this.state){case Pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Pe.NONE}}function tA(o){this.enabled!==!1&&o.preventDefault()}function eA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Av(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var gh={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bg;function iA(){if(Bg)return re;Bg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,w={};function y(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,it){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,it,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(L,it,Et){this.props=L,this.context=it,this.refs=w,this.updater=Et||M}var O=P.prototype=new _;O.constructor=P,R(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function B(L,it,Et,At,q,dt){return Et=dt.ref,{$$typeof:o,type:L,key:it,ref:Et!==void 0?Et:null,props:dt}}function K(L,it){return B(L.type,it,void 0,void 0,void 0,L.props)}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function A(L){var it={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Et){return it[Et]})}var F=/\/+/g;function ct(L,it){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):it.toString(36)}function at(){}function mt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(at,at):(L.status="pending",L.then(function(it){L.status==="pending"&&(L.status="fulfilled",L.value=it)},function(it){L.status==="pending"&&(L.status="rejected",L.reason=it)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function ht(L,it,Et,At,q){var dt=typeof L;(dt==="undefined"||dt==="boolean")&&(L=null);var St=!1;if(L===null)St=!0;else switch(dt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(L.$$typeof){case o:case t:St=!0;break;case g:return St=L._init,ht(St(L._payload),it,Et,At,q)}}if(St)return q=q(L),St=At===""?"."+ct(L,0):At,D(q)?(Et="",St!=null&&(Et=St.replace(F,"$&/")+"/"),ht(q,it,Et,"",function(Kt){return Kt})):q!=null&&(C(q)&&(q=K(q,Et+(q.key==null||L&&L.key===q.key?"":(""+q.key).replace(F,"$&/")+"/")+St)),it.push(q)),1;St=0;var Tt=At===""?".":At+":";if(D(L))for(var Rt=0;Rt<L.length;Rt++)At=L[Rt],dt=Tt+ct(At,Rt),St+=ht(At,it,Et,dt,q);else if(Rt=x(L),typeof Rt=="function")for(L=Rt.call(L),Rt=0;!(At=L.next()).done;)At=At.value,dt=Tt+ct(At,Rt++),St+=ht(At,it,Et,dt,q);else if(dt==="object"){if(typeof L.then=="function")return ht(mt(L),it,Et,At,q);throw it=String(L),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return St}function W(L,it,Et){if(L==null)return L;var At=[],q=0;return ht(L,At,"","",function(dt){return it.call(Et,dt,q++)}),At}function st(L){if(L._status===-1){var it=L._result;it=it(),it.then(function(Et){(L._status===0||L._status===-1)&&(L._status=1,L._result=Et)},function(Et){(L._status===0||L._status===-1)&&(L._status=2,L._result=Et)}),L._status===-1&&(L._status=0,L._result=it)}if(L._status===1)return L._result.default;throw L._result}var Z=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function xt(){}return re.Children={map:W,forEach:function(L,it,Et){W(L,function(){it.apply(this,arguments)},Et)},count:function(L){var it=0;return W(L,function(){it++}),it},toArray:function(L){return W(L,function(it){return it})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},re.Component=y,re.Fragment=i,re.Profiler=l,re.PureComponent=P,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,re.act=function(){throw Error("act(...) is not supported in production builds of React.")},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cloneElement=function(L,it,Et){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var At=R({},L.props),q=L.key,dt=void 0;if(it!=null)for(St in it.ref!==void 0&&(dt=void 0),it.key!==void 0&&(q=""+it.key),it)!I.call(it,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&it.ref===void 0||(At[St]=it[St]);var St=arguments.length-2;if(St===1)At.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];At.children=Tt}return B(L.type,q,void 0,void 0,dt,At)},re.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,it,Et){var At,q={},dt=null;if(it!=null)for(At in it.key!==void 0&&(dt=""+it.key),it)I.call(it,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(q[At]=it[At]);var St=arguments.length-2;if(St===1)q.children=Et;else if(1<St){for(var Tt=Array(St),Rt=0;Rt<St;Rt++)Tt[Rt]=arguments[Rt+2];q.children=Tt}if(L&&L.defaultProps)for(At in St=L.defaultProps,St)q[At]===void 0&&(q[At]=St[At]);return B(L,dt,void 0,void 0,null,q)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:d,render:L}},re.isValidElement=C,re.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:st}},re.memo=function(L,it){return{$$typeof:p,type:L,compare:it===void 0?null:it}},re.startTransition=function(L){var it=H.T,Et={};H.T=Et;try{var At=L(),q=H.S;q!==null&&q(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(xt,Z)}catch(dt){Z(dt)}finally{H.T=it}},re.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},re.use=function(L){return H.H.use(L)},re.useActionState=function(L,it,Et){return H.H.useActionState(L,it,Et)},re.useCallback=function(L,it){return H.H.useCallback(L,it)},re.useContext=function(L){return H.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,it){return H.H.useDeferredValue(L,it)},re.useEffect=function(L,it){return H.H.useEffect(L,it)},re.useId=function(){return H.H.useId()},re.useImperativeHandle=function(L,it,Et){return H.H.useImperativeHandle(L,it,Et)},re.useInsertionEffect=function(L,it){return H.H.useInsertionEffect(L,it)},re.useLayoutEffect=function(L,it){return H.H.useLayoutEffect(L,it)},re.useMemo=function(L,it){return H.H.useMemo(L,it)},re.useOptimistic=function(L,it){return H.H.useOptimistic(L,it)},re.useReducer=function(L,it,Et){return H.H.useReducer(L,it,Et)},re.useRef=function(L){return H.H.useRef(L)},re.useState=function(L){return H.H.useState(L)},re.useSyncExternalStore=function(L,it,Et){return H.H.useSyncExternalStore(L,it,Et)},re.useTransition=function(){return H.H.useTransition()},re.version="19.0.0",re}var Fg;function Sd(){return Fg||(Fg=1,gh.exports=iA()),gh.exports}var Ec=Sd();const Uo=Av(Ec);var vh={exports:{}},wo={},Sh={exports:{}},xh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function aA(){return Ig||(Ig=1,function(o){function t(W,st){var Z=W.length;W.push(st);t:for(;0<Z;){var xt=Z-1>>>1,L=W[xt];if(0<l(L,st))W[xt]=st,W[Z]=L,Z=xt;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var st=W[0],Z=W.pop();if(Z!==st){W[0]=Z;t:for(var xt=0,L=W.length,it=L>>>1;xt<it;){var Et=2*(xt+1)-1,At=W[Et],q=Et+1,dt=W[q];if(0>l(At,Z))q<L&&0>l(dt,At)?(W[xt]=dt,W[q]=Z,xt=q):(W[xt]=At,W[Et]=Z,xt=Et);else if(q<L&&0>l(dt,Z))W[xt]=dt,W[q]=Z,xt=q;else break t}}return st}function l(W,st){var Z=W.sortIndex-st.sortIndex;return Z!==0?Z:W.id-st.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,S=null,x=3,M=!1,R=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(W){for(var st=i(p);st!==null;){if(st.callback===null)s(p);else if(st.startTime<=W)s(p),st.sortIndex=st.expirationTime,t(m,st);else break;st=i(p)}}function D(W){if(w=!1,O(W),!R)if(i(m)!==null)R=!0,mt();else{var st=i(p);st!==null&&ht(D,st.startTime-W)}}var H=!1,I=-1,B=5,K=-1;function C(){return!(o.unstable_now()-K<B)}function A(){if(H){var W=o.unstable_now();K=W;var st=!0;try{t:{R=!1,w&&(w=!1,_(I),I=-1),M=!0;var Z=x;try{e:{for(O(W),S=i(m);S!==null&&!(S.expirationTime>W&&C());){var xt=S.callback;if(typeof xt=="function"){S.callback=null,x=S.priorityLevel;var L=xt(S.expirationTime<=W);if(W=o.unstable_now(),typeof L=="function"){S.callback=L,O(W),st=!0;break e}S===i(m)&&s(m),O(W)}else s(m);S=i(m)}if(S!==null)st=!0;else{var it=i(p);it!==null&&ht(D,it.startTime-W),st=!1}}break t}finally{S=null,x=Z,M=!1}st=void 0}}finally{st?F():H=!1}}}var F;if(typeof P=="function")F=function(){P(A)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,at=ct.port2;ct.port1.onmessage=A,F=function(){at.postMessage(null)}}else F=function(){y(A,0)};function mt(){H||(H=!0,F())}function ht(W,st){I=y(function(){W(o.unstable_now())},st)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){R||M||(R=!0,mt())},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(W){switch(x){case 1:case 2:case 3:var st=3;break;default:st=x}var Z=x;x=st;try{return W()}finally{x=Z}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,st){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var Z=x;x=W;try{return st()}finally{x=Z}},o.unstable_scheduleCallback=function(W,st,Z){var xt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?xt+Z:xt):Z=xt,W){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=Z+L,W={id:g++,callback:st,priorityLevel:W,startTime:Z,expirationTime:L,sortIndex:-1},Z>xt?(W.sortIndex=Z,t(p,W),i(m)===null&&W===i(p)&&(w?(_(I),I=-1):w=!0,ht(D,Z-xt))):(W.sortIndex=L,t(m,W),R||M||(R=!0,mt())),W},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(W){var st=x;return function(){var Z=x;x=st;try{return W.apply(this,arguments)}finally{x=Z}}}}(xh)),xh}var Hg;function sA(){return Hg||(Hg=1,Sh.exports=aA()),Sh.exports}var yh={exports:{}},Tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function rA(){if(Gg)return Tn;Gg=1;var o=Sd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Tn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,g)},Tn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Tn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Tn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Tn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:M}):g==="script"&&s.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Tn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Tn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Tn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Tn.requestFormReset=function(m){s.d.r(m)},Tn.unstable_batchedUpdates=function(m,p){return m(p)},Tn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Tn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Tn.version="19.0.0",Tn}var Vg;function oA(){if(Vg)return yh.exports;Vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),yh.exports=rA(),yh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kg;function lA(){if(kg)return wo;kg=1;var o=sA(),t=Sd(),i=oA();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),_=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var B=Symbol.for("react.client.reference");function K(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case g:return"Profiler";case p:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case R:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case _:return n=e.displayName||null,n!==null?n:K(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return K(e(n))}catch{}}return null}var C=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=Object.assign,F,ct;function at(e){if(F===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);F=n&&n[1]||"",ct=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+F+e+ct}var mt=!1;function ht(e,n){if(!e||mt)return"";mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(ot){nt=ot}e.call(gt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var N=v.split(`
`),V=T.split(`
`);for(c=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;c<V.length&&!V[c].includes("DetermineComponentFrameRoot");)c++;if(r===N.length||c===V.length)for(r=N.length-1,c=V.length-1;1<=r&&0<=c&&N[r]!==V[c];)c--;for(;1<=r&&0<=c;r--,c--)if(N[r]!==V[c]){if(r!==1||c!==1)do if(r--,c--,0>c||N[r]!==V[c]){var lt=`
`+N[r].replace(" at new "," at ");return e.displayName&&lt.includes("<anonymous>")&&(lt=lt.replace("<anonymous>",e.displayName)),lt}while(1<=r&&0<=c);break}}}finally{mt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?at(a):""}function W(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return e=ht(e.type,!1),e;case 11:return e=ht(e.type.render,!1),e;case 1:return e=ht(e.type,!0),e;default:return""}}function st(e){try{var n="";do n+=W(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Z(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function xt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function L(e){if(Z(e)!==e)throw Error(s(188))}function it(e){var n=e.alternate;if(!n){if(n=Z(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return L(c),e;if(f===r)return L(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var v=!1,T=c.child;T;){if(T===a){v=!0,a=c,r=f;break}if(T===r){v=!0,r=c,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=c;break}if(T===r){v=!0,r=f,a=c;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function Et(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=Et(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function Rt(e){return{current:e}}function Kt(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function Pt(e,n){Tt++,St[Tt]=e.current,e.current=n}var ye=Rt(null),Re=Rt(null),ie=Rt(null),z=Rt(null);function mn(e,n){switch(Pt(ie,n),Pt(Re,e),Pt(ye,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?h_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=h_(e),n=d_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(ye),Pt(ye,n)}function se(){Kt(ye),Kt(Re),Kt(ie)}function ue(e){e.memoizedState!==null&&Pt(z,e);var n=ye.current,a=d_(n,e.type);n!==a&&(Pt(Re,e),Pt(ye,a))}function kt(e){Re.current===e&&(Kt(ye),Kt(Re)),z.current===e&&(Kt(z),vo._currentValue=dt)}var Ce=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,U=o.unstable_cancelCallback,E=o.unstable_shouldYield,et=o.unstable_requestPaint,ut=o.unstable_now,vt=o.unstable_getCurrentPriorityLevel,ft=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,Mt=o.log,Bt=o.unstable_setDisableYieldValue,qt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function ae(e){if(typeof Mt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(qt,e)}catch{}}var Zt=Math.clz32?Math.clz32:Lt,De=Math.log,k=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(De(e)/k|0)|0}var rt=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,c=e.suspendedLanes,f=e.pingedLanes,v=e.warmLanes;e=e.finishedLanes!==0;var T=a&134217727;return T!==0?(a=T&~c,a!==0?r=Ct(a):(f&=T,f!==0?r=Ct(f):e||(v=T&~v,v!==0&&(r=Ct(v))))):(T=a&~c,T!==0?r=Ct(T):f!==0?r=Ct(f):e||(v=a&~v,v!==0&&(r=Ct(v)))),r===0?0:n!==0&&n!==r&&!(n&c)&&(c=r&-r,v=n&-n,c>=v||c===32&&(v&4194176)!==0)?n:r}function Jt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function He(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var e=rt;return rt<<=1,!(rt&4194176)&&(rt=128),e}function Me(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function bn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function An(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Io(e,n,a,r,c,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,N=e.expirationTimes,V=e.hiddenUpdates;for(a=v&~a;0<a;){var lt=31-Zt(a),gt=1<<lt;T[lt]=0,N[lt]=-1;var nt=V[lt];if(nt!==null)for(V[lt]=null,lt=0;lt<nt.length;lt++){var ot=nt[lt];ot!==null&&(ot.lane&=-536870913)}a&=~gt}r!==0&&Cr(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Cr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Zt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194218}function Mi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Zt(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function ys(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function wr(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function Ho(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Gn=Math.random().toString(36).slice(2),en="__reactFiber$"+Gn,nn="__reactProps$"+Gn,Ui="__reactContainer$"+Gn,Ms="__reactEvents$"+Gn,Bc="__reactListeners$"+Gn,Fc="__reactHandles$"+Gn,Go="__reactResources$"+Gn,Ha="__reactMarker$"+Gn;function Dr(e){delete e[en],delete e[nn],delete e[Ms],delete e[Bc],delete e[Fc]}function Li(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=__(e);e!==null;){if(a=e[en])return a;e=__(e)}return n}e=a,a=e.parentNode}return null}function b(e){if(e=e[en]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function tt(e){var n=e[Go];return n||(n=e[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ha]=!0}var Y=new Set,yt={};function bt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(yt[e]=n,e=0;e<n.length;e++)Y.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$t=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},Yt={};function _e(e){return Ce.call(Yt,e)?!0:Ce.call(te,e)?!1:$t.test(e)?Yt[e]=!0:(te[e]=!0,!1)}function ge(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ie(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ee(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e){var n=jt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){r=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=an(e))}function Ln(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=jt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function li(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function un(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,r,c,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ee(n)):e.value!==""+ee(n)&&(e.value=""+ee(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?xn(e,v,ee(n)):a!=null?xn(e,v,ee(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+ee(T):e.removeAttribute("name")}function Cn(e,n,a,r,c,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ee(a):"",n=n!=null?""+ee(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function xn(e,n,a){n==="number"&&li(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ke(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ee(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ee(a):""}function Es(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(At(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ee(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Nn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Uv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Uv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&xd(e,c,r)}else for(var f in n)n.hasOwnProperty(f)&&xd(e,f,n[f])}function Ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return Nv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Hc=null;function Gc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,bs=null;function Md(e){var n=b(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[nn]||null;if(!c)throw Error(s(90));Ue(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ln(r)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(e,!!a.multiple,n,!1)}}}var Vc=!1;function Ed(e,n,a){if(Vc)return e(n,a);Vc=!0;try{var r=e(n);return r}finally{if(Vc=!1,(Ts!==null||bs!==null)&&(bl(),Ts&&(n=Ts,e=bs,bs=Ts=null,Md(n),e)))for(n=0;n<e.length;n++)Md(e[n])}}function Ur(e,n){var a=e.stateNode;if(a===null)return null;var r=a[nn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var kc=!1;if(Nt)try{var Lr={};Object.defineProperty(Lr,"passive",{get:function(){kc=!0}}),window.addEventListener("test",Lr,Lr),window.removeEventListener("test",Lr,Lr)}catch{kc=!1}var oa=null,Xc=null,ko=null;function Td(){if(ko)return ko;var e,n=Xc,a=n.length,r,c="value"in oa?oa.value:oa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===c[f-r];r++);return ko=c.slice(e,1<r?1-r:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function bd(){return!1}function On(e){function n(a,r,c,f,v){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:bd,this.isPropagationStopped=bd,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=On(Ga),Nr=A({},Ga,{view:0,detail:0}),Ov=On(Nr),Wc,qc,Or,Yo=A({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Or&&(Or&&e.type==="mousemove"?(Wc=e.screenX-Or.screenX,qc=e.screenY-Or.screenY):qc=Wc=0,Or=e),Wc)},movementY:function(e){return"movementY"in e?e.movementY:qc}}),Ad=On(Yo),Pv=A({},Yo,{dataTransfer:0}),zv=On(Pv),Bv=A({},Nr,{relatedTarget:0}),Yc=On(Bv),Fv=A({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Iv=On(Fv),Hv=A({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gv=On(Hv),Vv=A({},Ga,{data:0}),Rd=On(Vv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Wv[e])?!!n[e]:!1}function Zc(){return qv}var Yv=A({},Nr,{key:function(e){if(e.key){var n=kv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zv=On(Yv),jv=A({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=On(jv),Kv=A({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),Qv=On(Kv),Jv=A({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),$v=On(Jv),t0=A({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e0=On(t0),n0=A({},Ga,{newState:0,oldState:0}),i0=On(n0),a0=[9,13,27,32],jc=Nt&&"CompositionEvent"in window,Pr=null;Nt&&"documentMode"in document&&(Pr=document.documentMode);var s0=Nt&&"TextEvent"in window&&!Pr,wd=Nt&&(!jc||Pr&&8<Pr&&11>=Pr),Dd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return a0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var As=!1;function r0(e,n){switch(e){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Ud=!0,Dd);case"textInput":return e=n.data,e===Dd&&Ud?null:e;default:return null}}function o0(e,n){if(As)return e==="compositionend"||!jc&&Ld(e,n)?(e=Td(),ko=Xc=oa=null,As=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var l0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!l0[e.type]:n==="textarea"}function Pd(e,n,a,r){Ts?bs?bs.push(r):bs=[r]:Ts=r,n=Dl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var zr=null,Br=null;function c0(e){o_(e,0)}function Zo(e){var n=X(e);if(Ln(n))return e}function zd(e,n){if(e==="change")return n}var Bd=!1;if(Nt){var Kc;if(Nt){var Qc="oninput"in document;if(!Qc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Qc=typeof Fd.oninput=="function"}Kc=Qc}else Kc=!1;Bd=Kc&&(!document.documentMode||9<document.documentMode)}function Id(){zr&&(zr.detachEvent("onpropertychange",Hd),Br=zr=null)}function Hd(e){if(e.propertyName==="value"&&Zo(Br)){var n=[];Pd(n,Br,e,Gc(e)),Ed(c0,n)}}function u0(e,n,a){e==="focusin"?(Id(),zr=n,Br=a,zr.attachEvent("onpropertychange",Hd)):e==="focusout"&&Id()}function f0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Br)}function h0(e,n){if(e==="click")return Zo(n)}function d0(e,n){if(e==="input"||e==="change")return Zo(n)}function p0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:p0;function Fr(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Ce.call(n,c)||!Vn(e[c],n[c]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,n){var a=Gd(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=li(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=li(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function m0(e,n){var a=Xd(n);n=e.focusedElem;var r=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&kd(n.ownerDocument.documentElement,n)){if(r!==null&&Jc(n)){if(e=r.start,a=r.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(r.start,c);r=r.end===void 0?f:Math.min(r.end,c),!a.extend&&f>r&&(c=r,r=f,f=c),c=Vd(n,f);var v=Vd(n,r);c&&v&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==v.node||a.focusOffset!==v.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>r?(a.addRange(e),a.extend(v.node,v.offset)):(e.setEnd(v.node,v.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var _0=Nt&&"documentMode"in document&&11>=document.documentMode,Rs=null,$c=null,Ir=null,tu=!1;function Wd(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tu||Rs==null||Rs!==li(r)||(r=Rs,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ir&&Fr(Ir,r)||(Ir=r,r=Dl($c,"onSelect"),0<r.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Rs)))}function Va(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Cs={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},eu={},qd={};Nt&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function ka(e){if(eu[e])return eu[e];if(!Cs[e])return e;var n=Cs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return eu[e]=n[a];return e}var Yd=ka("animationend"),Zd=ka("animationiteration"),jd=ka("animationstart"),g0=ka("transitionrun"),v0=ka("transitionstart"),S0=ka("transitioncancel"),Kd=ka("transitionend"),Qd=new Map,Jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ci(e,n){Qd.set(e,n),bt(n,[e])}var jn=[],ws=0,nu=0;function jo(){for(var e=ws,n=nu=ws=0;n<e;){var a=jn[n];jn[n++]=null;var r=jn[n];jn[n++]=null;var c=jn[n];jn[n++]=null;var f=jn[n];if(jn[n++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}f!==0&&$d(a,c,f)}}function Ko(e,n,a,r){jn[ws++]=e,jn[ws++]=n,jn[ws++]=a,jn[ws++]=r,nu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function iu(e,n,a,r){return Ko(e,n,a,r),Qo(e)}function la(e,n){return Ko(e,null,null,n),Qo(e)}function $d(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-Zt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Qo(e){if(50<uo)throw uo=0,uf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ds={},tp=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:st(n)},tp.set(e,n),n)}return{value:e,source:n,stack:st(n)}}var Us=[],Ls=0,Jo=null,$o=0,Qn=[],Jn=0,Xa=null,Ni=1,Oi="";function Wa(e,n){Us[Ls++]=$o,Us[Ls++]=Jo,Jo=e,$o=n}function ep(e,n,a){Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=Xa,Xa=e;var r=Ni;e=Oi;var c=32-Zt(r)-1;r&=~(1<<c),a+=1;var f=32-Zt(n)+c;if(30<f){var v=c-c%5;f=(r&(1<<v)-1).toString(32),r>>=v,c-=v,Ni=1<<32-Zt(n)+c|a<<c|r,Oi=f+e}else Ni=1<<f|a<<c|r,Oi=e}function au(e){e.return!==null&&(Wa(e,1),ep(e,1,0))}function su(e){for(;e===Jo;)Jo=Us[--Ls],Us[Ls]=null,$o=Us[--Ls],Us[Ls]=null;for(;e===Xa;)Xa=Qn[--Jn],Qn[Jn]=null,Oi=Qn[--Jn],Qn[Jn]=null,Ni=Qn[--Jn],Qn[Jn]=null}var wn=null,gn=null,Te=!1,ui=null,Ei=!1,ru=Error(s(519));function qa(e){var n=Error(s(418,""));throw Vr(Kn(n,e)),ru}function np(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[en]=e,n[nn]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)Se(ho[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Cn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ve(n);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Es(n,r.value,r.defaultValue,r.children),ve(n)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||f_(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||qa(e)}function ip(e){for(wn=e.return;wn;)switch(wn.tag){case 3:case 27:Ei=!0;return;case 5:case 13:Ei=!1;return;default:wn=wn.return}}function Hr(e){if(e!==wn)return!1;if(!Te)return ip(e),Te=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&gn&&qa(e),ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){gn=hi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}gn=null}}else gn=wn?hi(e.stateNode.nextSibling):null;return!0}function Gr(){gn=wn=null,Te=!1}function Vr(e){ui===null?ui=[e]:ui.push(e)}var kr=Error(s(460)),ap=Error(s(474)),ou={then:function(){}};function sp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function rp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===kr?Error(s(483)):e;default:if(typeof n.status=="string")n.then(tl,tl);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===kr?Error(s(483)):e}throw Xr=n,kr}}var Xr=null;function op(){if(Xr===null)throw Error(s(459));var e=Xr;return Xr=null,e}var Ns=null,Wr=0;function el(e){var n=Wr;return Wr+=1,Ns===null&&(Ns=[]),rp(Ns,e,n)}function qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nl(e,n){throw n.$$typeof===u?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lp(e){var n=e._init;return n(e._payload)}function cp(e){function n(j,G){if(e){var J=j.deletions;J===null?(j.deletions=[G],j.flags|=16):J.push(G)}}function a(j,G){if(!e)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function r(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function c(j,G){return j=xa(j,G),j.index=0,j.sibling=null,j}function f(j,G,J){return j.index=J,e?(J=j.alternate,J!==null?(J=J.index,J<G?(j.flags|=33554434,G):J):(j.flags|=33554434,G)):(j.flags|=1048576,G)}function v(j){return e&&j.alternate===null&&(j.flags|=33554434),j}function T(j,G,J,pt){return G===null||G.tag!==6?(G=ef(J,j.mode,pt),G.return=j,G):(G=c(G,J),G.return=j,G)}function N(j,G,J,pt){var It=J.type;return It===m?lt(j,G,J.props.children,pt,J.key):G!==null&&(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&lp(It)===G.type)?(G=c(G,J.props),qr(G,J),G.return=j,G):(G=xl(J.type,J.key,J.props,null,j.mode,pt),qr(G,J),G.return=j,G)}function V(j,G,J,pt){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=nf(J,j.mode,pt),G.return=j,G):(G=c(G,J.children||[]),G.return=j,G)}function lt(j,G,J,pt,It){return G===null||G.tag!==7?(G=ns(J,j.mode,pt,It),G.return=j,G):(G=c(G,J),G.return=j,G)}function gt(j,G,J){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=ef(""+G,j.mode,J),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case h:return J=xl(G.type,G.key,G.props,null,j.mode,J),qr(J,G),J.return=j,J;case d:return G=nf(G,j.mode,J),G.return=j,G;case P:var pt=G._init;return G=pt(G._payload),gt(j,G,J)}if(At(G)||I(G))return G=ns(G,j.mode,J,null),G.return=j,G;if(typeof G.then=="function")return gt(j,el(G),J);if(G.$$typeof===M)return gt(j,gl(j,G),J);nl(j,G)}return null}function nt(j,G,J,pt){var It=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:T(j,G,""+J,pt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(j,G,J,pt):null;case d:return J.key===It?V(j,G,J,pt):null;case P:return It=J._init,J=It(J._payload),nt(j,G,J,pt)}if(At(J)||I(J))return It!==null?null:lt(j,G,J,pt,null);if(typeof J.then=="function")return nt(j,G,el(J),pt);if(J.$$typeof===M)return nt(j,G,gl(j,J),pt);nl(j,J)}return null}function ot(j,G,J,pt,It){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get(J)||null,T(G,j,""+pt,It);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case h:return j=j.get(pt.key===null?J:pt.key)||null,N(G,j,pt,It);case d:return j=j.get(pt.key===null?J:pt.key)||null,V(G,j,pt,It);case P:var fe=pt._init;return pt=fe(pt._payload),ot(j,G,J,pt,It)}if(At(pt)||I(pt))return j=j.get(J)||null,lt(G,j,pt,It,null);if(typeof pt.then=="function")return ot(j,G,J,el(pt),It);if(pt.$$typeof===M)return ot(j,G,J,gl(G,pt),It);nl(G,pt)}return null}function Vt(j,G,J,pt){for(var It=null,fe=null,Wt=G,Qt=G=0,dn=null;Wt!==null&&Qt<J.length;Qt++){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var be=nt(j,Wt,J[Qt],pt);if(be===null){Wt===null&&(Wt=dn);break}e&&Wt&&be.alternate===null&&n(j,Wt),G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be,Wt=dn}if(Qt===J.length)return a(j,Wt),Te&&Wa(j,Qt),It;if(Wt===null){for(;Qt<J.length;Qt++)Wt=gt(j,J[Qt],pt),Wt!==null&&(G=f(Wt,G,Qt),fe===null?It=Wt:fe.sibling=Wt,fe=Wt);return Te&&Wa(j,Qt),It}for(Wt=r(Wt);Qt<J.length;Qt++)dn=ot(Wt,j,Qt,J[Qt],pt),dn!==null&&(e&&dn.alternate!==null&&Wt.delete(dn.key===null?Qt:dn.key),G=f(dn,G,Qt),fe===null?It=dn:fe.sibling=dn,fe=dn);return e&&Wt.forEach(function(Ra){return n(j,Ra)}),Te&&Wa(j,Qt),It}function ne(j,G,J,pt){if(J==null)throw Error(s(151));for(var It=null,fe=null,Wt=G,Qt=G=0,dn=null,be=J.next();Wt!==null&&!be.done;Qt++,be=J.next()){Wt.index>Qt?(dn=Wt,Wt=null):dn=Wt.sibling;var Ra=nt(j,Wt,be.value,pt);if(Ra===null){Wt===null&&(Wt=dn);break}e&&Wt&&Ra.alternate===null&&n(j,Wt),G=f(Ra,G,Qt),fe===null?It=Ra:fe.sibling=Ra,fe=Ra,Wt=dn}if(be.done)return a(j,Wt),Te&&Wa(j,Qt),It;if(Wt===null){for(;!be.done;Qt++,be=J.next())be=gt(j,be.value,pt),be!==null&&(G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be);return Te&&Wa(j,Qt),It}for(Wt=r(Wt);!be.done;Qt++,be=J.next())be=ot(Wt,j,Qt,be.value,pt),be!==null&&(e&&be.alternate!==null&&Wt.delete(be.key===null?Qt:be.key),G=f(be,G,Qt),fe===null?It=be:fe.sibling=be,fe=be);return e&&Wt.forEach(function(NS){return n(j,NS)}),Te&&Wa(j,Qt),It}function qe(j,G,J,pt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;G!==null;){if(G.key===It){if(It=J.type,It===m){if(G.tag===7){a(j,G.sibling),pt=c(G,J.props.children),pt.return=j,j=pt;break t}}else if(G.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&lp(It)===G.type){a(j,G.sibling),pt=c(G,J.props),qr(pt,J),pt.return=j,j=pt;break t}a(j,G);break}else n(j,G);G=G.sibling}J.type===m?(pt=ns(J.props.children,j.mode,pt,J.key),pt.return=j,j=pt):(pt=xl(J.type,J.key,J.props,null,j.mode,pt),qr(pt,J),pt.return=j,j=pt)}return v(j);case d:t:{for(It=J.key;G!==null;){if(G.key===It)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(j,G.sibling),pt=c(G,J.children||[]),pt.return=j,j=pt;break t}else{a(j,G);break}else n(j,G);G=G.sibling}pt=nf(J,j.mode,pt),pt.return=j,j=pt}return v(j);case P:return It=J._init,J=It(J._payload),qe(j,G,J,pt)}if(At(J))return Vt(j,G,J,pt);if(I(J)){if(It=I(J),typeof It!="function")throw Error(s(150));return J=It.call(J),ne(j,G,J,pt)}if(typeof J.then=="function")return qe(j,G,el(J),pt);if(J.$$typeof===M)return qe(j,G,gl(j,J),pt);nl(j,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,G!==null&&G.tag===6?(a(j,G.sibling),pt=c(G,J),pt.return=j,j=pt):(a(j,G),pt=ef(J,j.mode,pt),pt.return=j,j=pt),v(j)):a(j,G)}return function(j,G,J,pt){try{Wr=0;var It=qe(j,G,J,pt);return Ns=null,It}catch(Wt){if(Wt===kr)throw Wt;var fe=ni(29,Wt,null,j.mode);return fe.lanes=pt,fe.return=j,fe}finally{}}}var Ya=cp(!0),up=cp(!1),Os=Rt(null),il=Rt(0);function fp(e,n){e=Wi,Pt(il,e),Pt(Os,n),Wi=e|n.baseLanes}function lu(){Pt(il,Wi),Pt(Os,Os.current)}function cu(){Wi=il.current,Kt(Os),Kt(il)}var $n=Rt(null),Ti=null;function ca(e){var n=e.alternate;Pt(sn,sn.current&1),Pt($n,e),Ti===null&&(n===null||Os.current!==null||n.memoizedState!==null)&&(Ti=e)}function hp(e){if(e.tag===22){if(Pt(sn,sn.current),Pt($n,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else ua()}function ua(){Pt(sn,sn.current),Pt($n,$n.current)}function Pi(e){Kt($n),Ti===e&&(Ti=null),Kt(sn)}var sn=Rt(0);function al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var x0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},y0=o.unstable_scheduleCallback,M0=o.unstable_NormalPriority,rn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new x0,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&y0(M0,function(){e.controller.abort()})}var Zr=null,fu=0,Ps=0,zs=null;function E0(e,n){if(Zr===null){var a=Zr=[];fu=0,Ps=vf(),zs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return fu++,n.then(dp,dp),n}function dp(){if(--fu===0&&Zr!==null){zs!==null&&(zs.status="fulfilled");var e=Zr;Zr=null,Ps=0,zs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function T0(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var pp=C.S;C.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&E0(e,n),pp!==null&&pp(e,n)};var Za=Rt(null);function hu(){var e=Za.current;return e!==null?e:Be.pooledCache}function sl(e,n){n===null?Pt(Za,Za.current):Pt(Za,n.pool)}function mp(){var e=hu();return e===null?null:{parent:rn._currentValue,pool:e}}var fa=0,ce=null,Le=null,Ke=null,rl=!1,Bs=!1,ja=!1,ol=0,jr=0,Fs=null,b0=0;function Ye(){throw Error(s(321))}function du(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function pu(e,n,a,r,c,f){return fa=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Ka:ha,ja=!1,f=a(r,c),ja=!1,Bs&&(f=gp(n,a,r,c)),_p(e),f}function _p(e){C.H=bi;var n=Le!==null&&Le.next!==null;if(fa=0,Ke=Le=ce=null,rl=!1,jr=0,Fs=null,n)throw Error(s(300));e===null||fn||(e=e.dependencies,e!==null&&_l(e)&&(fn=!0))}function gp(e,n,a,r){ce=e;var c=0;do{if(Bs&&(Fs=null),jr=0,Bs=!1,25<=c)throw Error(s(301));if(c+=1,Ke=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}C.H=Qa,f=n(a,r)}while(Bs);return f}function A0(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?Kr(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ce.flags|=1024),n}function mu(){var e=ol!==0;return ol=0,e}function _u(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gu(e){if(rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}rl=!1}fa=0,Ke=Le=ce=null,Bs=!1,jr=ol=0,Fs=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ce.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Le===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Ke===null?ce.memoizedState:Ke.next;if(n!==null)Ke=n,Le=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ke===null?ce.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}var ll;ll=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Kr(e){var n=jr;return jr+=1,Fs===null&&(Fs=[]),e=rp(Fs,e,n),n=ce,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Ka:ha),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Kr(e);if(e.$$typeof===M)return yn(e)}throw Error(s(438,String(e)))}function vu(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=D;return n.index++,a}function zi(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=Qe();return Su(n,Le,e)}function Su(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var T=v=null,N=null,V=n,lt=!1;do{var gt=V.lane&-536870913;if(gt!==V.lane?(xe&gt)===gt:(fa&gt)===gt){var nt=V.revertLane;if(nt===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),gt===Ps&&(lt=!0);else if((fa&nt)===nt){V=V.next,nt===Ps&&(lt=!0);continue}else gt={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=gt,v=f):N=N.next=gt,ce.lanes|=nt,ya|=nt;gt=V.action,ja&&a(f,gt),f=V.hasEagerState?V.eagerState:a(f,gt)}else nt={lane:gt,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},N===null?(T=N=nt,v=f):N=N.next=nt,ce.lanes|=gt,ya|=gt;V=V.next}while(V!==null&&V!==n);if(N===null?v=f:N.next=T,!Vn(f,e.memoizedState)&&(fn=!0,lt&&(a=zs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=N,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xu(e){var n=Qe(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=e(f,v.action),v=v.next;while(v!==c);Vn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function vp(e,n,a){var r=ce,c=Qe(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Vn((Le||c).memoizedState,a);if(v&&(c.memoizedState=a,fn=!0),c=c.queue,Eu(yp.bind(null,r,c,e),[e]),c.getSnapshot!==n||v||Ke!==null&&Ke.memoizedState.tag&1){if(r.flags|=2048,Is(9,xp.bind(null,r,c,a,n),{destroy:void 0},null),Be===null)throw Error(s(349));f||fa&60||Sp(r,n,a)}return a}function Sp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=ll(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xp(e,n,a,r){n.value=a,n.getSnapshot=r,Mp(n)&&Ep(e)}function yp(e,n,a){return a(function(){Mp(n)&&Ep(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function Ep(e){var n=la(e,2);n!==null&&Dn(n,e,2)}function yu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),ja){ae(!0);try{a()}finally{ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},n}function Tp(e,n,a,r){return e.baseState=a,Su(e,Le,typeof r=="function"?r:zi)}function R0(e,n,a,r,c){if(dl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};C.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=C.T,v={};C.T=v;try{var T=a(c,r),N=C.S;N!==null&&N(v,T),Ap(e,n,T)}catch(V){Mu(e,n,V)}finally{C.T=f}}else try{f=a(c,r),Ap(e,n,f)}catch(V){Mu(e,n,V)}}function Ap(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Rp(e,n,r)},function(r){return Mu(e,n,r)}):Rp(e,n,a)}function Rp(e,n,a){n.status="fulfilled",n.value=a,Cp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bp(e,a)))}function Mu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==r)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Dp(e,n){if(Te){var a=Be.formState;if(a!==null){t:{var r=ce;if(Te){if(gn){e:{for(var c=gn,f=Ei;c.nodeType!==8;){if(!f){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){gn=hi(c.nextSibling),r=c.data==="F!";break t}}qa(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=r,a=Zp.bind(null,ce,r),r.dispatch=a,r=yu(!1),f=Cu.bind(null,ce,!1,r.queue),r=Pn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=R0.bind(null,ce,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function Up(e){var n=Qe();return Lp(n,Le,e)}function Lp(e,n,a){n=Su(e,n,wp)[0],e=ul(zi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Kr(n):n;var r=Qe(),c=r.queue,f=c.dispatch;return a!==r.memoizedState&&(ce.flags|=2048,Is(9,C0.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function C0(e,n){e.action=n}function Np(e){var n=Qe(),a=Le;if(a!==null)return Lp(n,a,e);Qe(),n=n.memoizedState,a=Qe();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Is(e,n,a,r){return e={tag:e,create:n,inst:a,deps:r,next:null},n=ce.updateQueue,n===null&&(n=ll(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function Op(){return Qe().memoizedState}function fl(e,n,a,r){var c=Pn();ce.flags|=e,c.memoizedState=Is(1|n,a,{destroy:void 0},r===void 0?null:r)}function hl(e,n,a,r){var c=Qe();r=r===void 0?null:r;var f=c.memoizedState.inst;Le!==null&&r!==null&&du(r,Le.memoizedState.deps)?c.memoizedState=Is(n,a,f,r):(ce.flags|=e,c.memoizedState=Is(1|n,a,f,r))}function Pp(e,n){fl(8390656,8,e,n)}function Eu(e,n){hl(2048,8,e,n)}function zp(e,n){return hl(4,2,e,n)}function Bp(e,n){return hl(4,4,e,n)}function Fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ip(e,n,a){a=a!=null?a.concat([e]):null,hl(4,4,Fp.bind(null,n,e),a)}function Tu(){}function Hp(e,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&du(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=Qe();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&du(n,r[1]))return r[0];if(r=e(),ja){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r}function bu(e,n,a){return a===void 0||fa&1073741824?e.memoizedState=n:(e.memoizedState=a,e=km(),ce.lanes|=e,ya|=e,a)}function Vp(e,n,a,r){return Vn(a,n)?a:Os.current!==null?(e=bu(e,a,r),Vn(e,n)||(fn=!0),e):fa&42?(e=km(),ce.lanes|=e,ya|=e,n):(fn=!0,e.memoizedState=a)}function kp(e,n,a,r,c){var f=q.p;q.p=f!==0&&8>f?f:8;var v=C.T,T={};C.T=T,Cu(e,!1,n,a);try{var N=c(),V=C.S;if(V!==null&&V(T,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var lt=T0(N,r);Qr(e,n,lt,qn(e))}else Qr(e,n,r,qn(e))}catch(gt){Qr(e,n,{then:function(){},status:"rejected",reason:gt},qn())}finally{q.p=f,C.T=v}}function w0(){}function Au(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Xp(e).queue;kp(e,c,n,dt,a===null?w0:function(){return Wp(e),a(r)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e).next.queue;Qr(e,n,{},qn())}function Ru(){return yn(vo)}function qp(){return Qe().memoizedState}function Yp(){return Qe().memoizedState}function D0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=qn();e=ma(a);var r=_a(n,e,a);r!==null&&(Dn(r,n,a),to(r,n,a)),n={cache:uu()},e.payload=n;return}n=n.return}}function U0(e,n,a){var r=qn();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?jp(n,a):(a=iu(e,n,a,r),a!==null&&(Dn(a,e,r),Kp(a,n,r)))}function Zp(e,n,a){var r=qn();Qr(e,n,a,r)}function Qr(e,n,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))jp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(c.hasEagerState=!0,c.eagerState=T,Vn(T,v))return Ko(e,n,c,0),Be===null&&jo(),!1}catch{}finally{}if(a=iu(e,n,c,r),a!==null)return Dn(a,e,r),Kp(a,n,r),!0}return!1}function Cu(e,n,a,r){if(r={lane:2,revertLane:vf(),action:r,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(s(479))}else n=iu(e,a,r,2),n!==null&&Dn(n,e,2)}function dl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function jp(e,n){Bs=rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if(a&4194176){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mi(e,a)}}var bi={readContext:yn,use:cl,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye};bi.useCacheRefresh=Ye,bi.useMemoCache=Ye,bi.useHostTransitionStatus=Ye,bi.useFormState=Ye,bi.useActionState=Ye,bi.useOptimistic=Ye;var Ka={readContext:yn,use:cl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Pp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(ja){ae(!0);try{e()}finally{ae(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var c=a(n);if(ja){ae(!0);try{a(n)}finally{ae(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=U0.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=yu(e);var n=e.queue,a=Zp.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Tu,useDeferredValue:function(e,n){var a=Pn();return bu(a,e,n)},useTransition:function(){var e=yu(!1);return e=kp.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,c=Pn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Be===null)throw Error(s(349));xe&60||Sp(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Pp(yp.bind(null,r,f,e),[e]),r.flags|=2048,Is(9,xp.bind(null,r,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Pn(),n=Be.identifierPrefix;if(Te){var a=Oi,r=Ni;a=(r&~(1<<32-Zt(r)-1)).toString(32)+a,n=":"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=b0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Pn().memoizedState=D0.bind(null,ce)}};Ka.useMemoCache=vu,Ka.useHostTransitionStatus=Ru,Ka.useFormState=Dp,Ka.useActionState=Dp,Ka.useOptimistic=function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Cu.bind(null,ce,!0,a),a.dispatch=n,[e,n]};var ha={readContext:yn,use:cl,useCallback:Hp,useContext:yn,useEffect:Eu,useImperativeHandle:Ip,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:ul,useRef:Op,useState:function(){return ul(zi)},useDebugValue:Tu,useDeferredValue:function(e,n){var a=Qe();return Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=ul(zi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:vp,useId:qp};ha.useCacheRefresh=Yp,ha.useMemoCache=vu,ha.useHostTransitionStatus=Ru,ha.useFormState=Up,ha.useActionState=Up,ha.useOptimistic=function(e,n){var a=Qe();return Tp(a,Le,e,n)};var Qa={readContext:yn,use:cl,useCallback:Hp,useContext:yn,useEffect:Eu,useImperativeHandle:Ip,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:xu,useRef:Op,useState:function(){return xu(zi)},useDebugValue:Tu,useDeferredValue:function(e,n){var a=Qe();return Le===null?bu(a,e,n):Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=xu(zi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Kr(e),n]},useSyncExternalStore:vp,useId:qp};Qa.useCacheRefresh=Yp,Qa.useMemoCache=vu,Qa.useHostTransitionStatus=Ru,Qa.useFormState=Np,Qa.useActionState=Np,Qa.useOptimistic=function(e,n){var a=Qe();return Le!==null?Tp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function wu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:A({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Du={isMounted:function(e){return(e=e._reactInternals)?Z(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var r=qn(),c=ma(r);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&(Dn(n,e,r),to(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=qn(),c=ma(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,r),n!==null&&(Dn(n,e,r),to(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=qn(),r=ma(a);r.tag=2,n!=null&&(r.callback=n),n=_a(e,r,a),n!==null&&(Dn(n,e,a),to(n,e,a))}};function Qp(e,n,a,r,c,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Fr(a,r)||!Fr(c,f):!0}function Jp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Du.enqueueReplaceState(n,n.state,null)}function Ja(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=A({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $p(e){pl(e)}function tm(e){console.error(e)}function em(e){pl(e)}function ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function nm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Uu(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,n)},a}function im(e){return e=ma(e),e.tag=3,e}function am(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){nm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){nm(n,a,r),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function L0(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&$r(n,a,c,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Ti===null?df():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===ou?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),mf(e,r,c)),!1;case 22:return a.flags|=65536,r===ou?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),mf(e,r,c)),!1}throw Error(s(435,a.tag))}return mf(e,r,c),df(),!1}if(Te)return n=$n.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==ru&&(e=Error(s(422),{cause:r}),Vr(Kn(e,a)))):(r!==ru&&(n=Error(s(423),{cause:r}),Vr(Kn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Kn(r,a),c=Uu(e.stateNode,r,c),qu(e,c),We!==4&&(We=2)),!1;var f=Error(s(520),{cause:r});if(f=Kn(f,a),lo===null?lo=[f]:lo.push(f),We!==4&&(We=2),n===null)return!0;r=Kn(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Uu(a.stateNode,r,e),qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=im(c),am(c,e,a,r),qu(a,c),!1}a=a.return}while(a!==null);return!1}var sm=Error(s(461)),fn=!1;function vn(e,n,a,r){n.child=e===null?up(n,null,a,r):Ya(n,e.child,a,r)}function rm(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return ts(n),r=pu(e,n,a,v,f,c),T=mu(),e!==null&&!fn?(_u(e,n,c),Bi(e,n,c)):(Te&&T&&au(n),n.flags|=1,vn(e,n,r,c),n.child)}function om(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!tf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,lm(e,n,f,r,c)):(e=xl(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Hu(e,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Fr,a(v,r)&&e.ref===n.ref)return Bi(e,n,c)}return n.flags|=1,e=xa(f,r),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(Fr(f,r)&&e.ref===n.ref)if(fn=!1,n.pendingProps=r=f,Hu(e,c))e.flags&131072&&(fn=!0);else return n.lanes=e.lanes,Bi(e,n,c)}return Lu(e,n,a,r,c)}function cm(e,n,a){var r=n.pendingProps,c=r.children,f=(n.stateNode._pendingVisibility&2)!==0,v=e!==null?e.memoizedState:null;if(Jr(e,n),r.mode==="hidden"||f){if(n.flags&128){if(r=v!==null?v.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~r}else n.childLanes=0,n.child=null;return um(e,n,r,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,v!==null?v.cachePool:null),v!==null?fp(n,v):lu(),hp(n);else return n.lanes=n.childLanes=536870912,um(e,n,v!==null?v.baseLanes|a:a,a)}else v!==null?(sl(n,v.cachePool),fp(n,v),ua(),n.memoizedState=null):(e!==null&&sl(n,null),lu(),ua());return vn(e,n,c,a),n.child}function um(e,n,a,r){var c=hu();return c=c===null?null:{parent:rn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&sl(n,null),lu(),hp(n),e!==null&&$r(e,n,r,!0),null}function Jr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Lu(e,n,a,r,c){return ts(n),a=pu(e,n,a,r,void 0,c),r=mu(),e!==null&&!fn?(_u(e,n,c),Bi(e,n,c)):(Te&&r&&au(n),n.flags|=1,vn(e,n,a,c),n.child)}function fm(e,n,a,r,c,f){return ts(n),n.updateQueue=null,a=gp(n,r,a,c),_p(e),r=mu(),e!==null&&!fn?(_u(e,n,f),Bi(e,n,f)):(Te&&r&&au(n),n.flags|=1,vn(e,n,a,f),n.child)}function hm(e,n,a,r,c){if(ts(n),n.stateNode===null){var f=Ds,v=a.contextType;typeof v=="object"&&v!==null&&(f=yn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Du,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Xu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?yn(v):Ds,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(wu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Du.enqueueReplaceState(f,f.state,null),no(n,r,f,c),eo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,N=Ja(a,T);f.props=N;var V=f.context,lt=a.contextType;v=Ds,typeof lt=="object"&&lt!==null&&(v=yn(lt));var gt=a.getDerivedStateFromProps;lt=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,lt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||V!==v)&&Jp(n,f,r,v),pa=!1;var nt=n.memoizedState;f.state=nt,no(n,r,f,c),eo(),V=n.memoizedState,T||nt!==V||pa?(typeof gt=="function"&&(wu(n,a,gt,r),V=n.memoizedState),(N=pa||Qp(n,a,N,r,nt,V,v))?(lt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=V),f.props=r,f.state=V,f.context=v,r=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Wu(e,n),v=n.memoizedProps,lt=Ja(a,v),f.props=lt,gt=n.pendingProps,nt=f.context,V=a.contextType,N=Ds,typeof V=="object"&&V!==null&&(N=yn(V)),T=a.getDerivedStateFromProps,(V=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==gt||nt!==N)&&Jp(n,f,r,N),pa=!1,nt=n.memoizedState,f.state=nt,no(n,r,f,c),eo();var ot=n.memoizedState;v!==gt||nt!==ot||pa||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof T=="function"&&(wu(n,a,T,r),ot=n.memoizedState),(lt=pa||Qp(n,a,lt,r,nt,ot,N)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=N,r=lt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Jr(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ya(n,e.child,null,c),n.child=Ya(n,null,a,c)):vn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Bi(e,n,c),e}function dm(e,n,a,r){return Gr(),n.flags|=256,vn(e,n,a,r),n.child}var Nu={dehydrated:null,treeContext:null,retryLane:0};function Ou(e){return{baseLanes:e,cachePool:mp()}}function Pu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function pm(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?ca(n):ua(),Te){var T=gn,N;if(N=T){t:{for(N=T,T=Ei;N.nodeType!==8;){if(!T){T=null;break t}if(N=hi(N.nextSibling),N===null){T=null;break t}}T=N}T!==null?(n.memoizedState={dehydrated:T,treeContext:Xa!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},N=ni(18,null,null,0),N.stateNode=T,N.return=n,n.child=N,wn=n,gn=null,N=!0):N=!1}N||qa(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return T.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return T=r.children,r=r.fallback,c?(ua(),c=n.mode,T=Bu({mode:"hidden",children:T},c),r=ns(r,c,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,c=n.child,c.memoizedState=Ou(a),c.childLanes=Pu(e,v,a),n.memoizedState=Nu,r):(ca(n),zu(n,T))}if(N=e.memoizedState,N!==null&&(T=N.dehydrated,T!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Fu(e,n,a)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,n=null):(ua(),c=r.fallback,T=n.mode,r=Bu({mode:"visible",children:r.children},T),c=ns(c,T,a,null),c.flags|=2,r.return=n,c.return=n,r.sibling=c,n.child=r,Ya(n,e.child,null,a),r=n.child,r.memoizedState=Ou(a),r.childLanes=Pu(e,v,a),n.memoizedState=Nu,n=c);else if(ca(n),T.data==="$!"){if(v=T.nextSibling&&T.nextSibling.dataset,v)var V=v.dgst;v=V,r=Error(s(419)),r.stack="",r.digest=v,Vr({value:r,source:null,stack:null}),n=Fu(e,n,a)}else if(fn||$r(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=Be,v!==null){if(r=a&-a,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(v.suspendedLanes|a)?0:r,r!==0&&r!==N.retryLane)throw N.retryLane=r,la(e,r),Dn(v,e,r),sm}T.data==="$?"||df(),n=Fu(e,n,a)}else T.data==="$?"?(n.flags|=128,n.child=e.child,n=Y0.bind(null,e),T._reactRetry=n,n=null):(e=N.treeContext,gn=hi(T.nextSibling),wn=n,Te=!0,ui=null,Ei=!1,e!==null&&(Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=Xa,Ni=e.id,Oi=e.overflow,Xa=n),n=zu(n,r.children),n.flags|=4096);return n}return c?(ua(),c=r.fallback,T=n.mode,N=e.child,V=N.sibling,r=xa(N,{mode:"hidden",children:r.children}),r.subtreeFlags=N.subtreeFlags&31457280,V!==null?c=xa(V,c):(c=ns(c,T,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,r=c,c=n.child,T=e.child.memoizedState,T===null?T=Ou(a):(N=T.cachePool,N!==null?(V=rn._currentValue,N=N.parent!==V?{parent:V,pool:V}:N):N=mp(),T={baseLanes:T.baseLanes|a,cachePool:N}),c.memoizedState=T,c.childLanes=Pu(e,v,a),n.memoizedState=Nu,r):(ca(n),a=e.child,e=a.sibling,a=xa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function zu(e,n){return n=Bu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bu(e,n){return Hm(e,n,0,null)}function Fu(e,n,a){return Ya(n,e.child,null,a),e=zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Vu(e.return,n,a)}function Iu(e,n,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function _m(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;if(vn(e,n,r.children,a),r=sn.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,a,n);else if(e.tag===19)mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Pt(sn,r),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Iu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Iu(n,!0,a,null,f);break;case"together":Iu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,!(a&n.childLanes))if(e!==null){if($r(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=xa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Hu(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function N0(e,n,a){switch(n.tag){case 3:mn(n,n.stateNode.containerInfo),da(n,rn,e.memoizedState.cache),Gr();break;case 27:case 5:ue(n);break;case 4:mn(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ca(n),n.flags|=128,null):a&n.child.childLanes?pm(e,n,a):(ca(n),e=Bi(e,n,a),e!==null?e.sibling:null);ca(n);break;case 19:var c=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||($r(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return _m(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(sn,sn.current),r)break;return null;case 22:case 23:return n.lanes=0,cm(e,n,a);case 24:da(n,rn,e.memoizedState.cache)}return Bi(e,n,a)}function gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Hu(e,a)&&!(n.flags&128))return fn=!1,N0(e,n,a);fn=!!(e.flags&131072)}else fn=!1,Te&&n.flags&1048576&&ep(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var r=n.elementType,c=r._init;if(r=c(r._payload),n.type=r,typeof r=="function")tf(r)?(e=Ja(r,e),n.tag=1,n=hm(null,n,r,e,a)):(n.tag=0,n=Lu(null,n,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===R){n.tag=11,n=rm(null,n,r,e,a);break t}else if(c===_){n.tag=14,n=om(null,n,r,e,a);break t}}throw n=K(r)||r,Error(s(306,n,""))}}return n;case 0:return Lu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ja(r,n.pendingProps),hm(e,n,r,c,a);case 3:t:{if(mn(n,n.stateNode.containerInfo),e===null)throw Error(s(387));var f=n.pendingProps;c=n.memoizedState,r=c.element,Wu(e,n),no(n,f,null,a);var v=n.memoizedState;if(f=v.cache,da(n,rn,f),f!==c.cache&&ku(n,[rn],a,!0),eo(),f=v.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=dm(e,n,f,a);break t}else if(f!==r){r=Kn(Error(s(424)),n),Vr(r),n=dm(e,n,f,a);break t}else for(gn=hi(n.stateNode.containerInfo.firstChild),wn=n,Te=!0,ui=null,Ei=!0,a=up(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gr(),f===r){n=Bi(e,n,a);break t}vn(e,n,f,a)}n=n.child}return n;case 26:return Jr(e,n),e===null?(a=x_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,r=Ll(ie.current).createElement(a),r[en]=n,r[nn]=e,Sn(r,a,e),Q(r),n.stateNode=r):n.memoizedState=x_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ue(n),e===null&&Te&&(r=n.stateNode=g_(n.type,n.pendingProps,ie.current),wn=n,Ei=!0,gn=hi(r.firstChild)),r=n.pendingProps.children,e!==null||Te?vn(e,n,r,a):n.child=Ya(n,null,r,a),Jr(e,n),n.child;case 5:return e===null&&Te&&((c=r=gn)&&(r=cS(r,n.type,n.pendingProps,Ei),r!==null?(n.stateNode=r,wn=n,gn=hi(r.firstChild),Ei=!1,c=!0):c=!1),c||qa(n)),ue(n),c=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Rf(c,f)?r=null:v!==null&&Rf(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=pu(e,n,A0,null,null,a),vo._currentValue=c),Jr(e,n),vn(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=gn)&&(a=uS(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,wn=n,gn=null,e=!0):e=!1),e||qa(n)),null;case 13:return pm(e,n,a);case 4:return mn(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ya(n,null,r,a):vn(e,n,r,a),n.child;case 11:return rm(e,n,n.type,n.pendingProps,a);case 7:return vn(e,n,n.pendingProps,a),n.child;case 8:return vn(e,n,n.pendingProps.children,a),n.child;case 12:return vn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,da(n,n.type,r.value),vn(e,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,ts(n),c=yn(c),r=r(c),n.flags|=1,vn(e,n,r,a),n.child;case 14:return om(e,n,n.type,n.pendingProps,a);case 15:return lm(e,n,n.type,n.pendingProps,a);case 19:return _m(e,n,a);case 22:return cm(e,n,a);case 24:return ts(n),r=yn(rn),e===null?(c=hu(),c===null&&(c=Be,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Xu(n),da(n,rn,c)):(e.lanes&a&&(Wu(e,n),no(n,null,null,a),eo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,rn,r)):(r=f.cache,da(n,rn,r),r!==c.cache&&ku(n,[rn],a,!0))),vn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}var Gu=Rt(null),$a=null,Fi=null;function da(e,n,a){Pt(Gu,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=Gu.current,Kt(Gu)}function Vu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function ku(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=c;for(var N=0;N<n.length;N++)if(T.context===n[N]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Vu(f.return,a,e),r||(v=null);break t}f=T.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Vu(v,a,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function $r(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=c.type;Vn(c.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(c===z.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&ku(n,e,a,r),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ts(e){$a=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return vm($a,e)}function gl(e,n){return $a===null&&ts(e),vm(e,n)}function vm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(s(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var pa=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ve&2){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Qo(e),$d(e,null,a),n}return Ko(e,r,n,a),Qo(e)}function to(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Mi(e,a)}}function qu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yu=!1;function eo(){if(Yu){var e=zs;if(e!==null)throw e}}function no(e,n,a,r){Yu=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var N=T,V=N.next;N.next=null,v===null?f=V:v.next=V,v=N;var lt=e.alternate;lt!==null&&(lt=lt.updateQueue,T=lt.lastBaseUpdate,T!==v&&(T===null?lt.firstBaseUpdate=V:T.next=V,lt.lastBaseUpdate=N))}if(f!==null){var gt=c.baseState;v=0,lt=V=N=null,T=f;do{var nt=T.lane&-536870913,ot=nt!==T.lane;if(ot?(xe&nt)===nt:(r&nt)===nt){nt!==0&&nt===Ps&&(Yu=!0),lt!==null&&(lt=lt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=e,ne=T;nt=n;var qe=a;switch(ne.tag){case 1:if(Vt=ne.payload,typeof Vt=="function"){gt=Vt.call(qe,gt,nt);break t}gt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ne.payload,nt=typeof Vt=="function"?Vt.call(qe,gt,nt):Vt,nt==null)break t;gt=A({},gt,nt);break t;case 2:pa=!0}}nt=T.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},lt===null?(V=lt=ot,N=gt):lt=lt.next=ot,v|=nt;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);lt===null&&(N=gt),c.baseState=N,c.firstBaseUpdate=V,c.lastBaseUpdate=lt,f===null&&(c.shared.lanes=0),ya|=v,e.lanes=v,e.memoizedState=gt}}function Sm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function xm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Sm(a[e],n)}function io(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==c)}}catch(T){ze(n,n.return,T)}}function ga(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,c=n;var N=a;try{T()}catch(V){ze(c,N,V)}}}r=r.next}while(r!==f)}}catch(V){ze(n,n.return,V)}}function ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xm(n,a)}catch(r){ze(e,e.return,r)}}}function Mm(e,n,a){a.props=Ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function es(e,n){try{var a=e.ref;if(a!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=r;break;default:c=r}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){ze(e,n,f)}}function kn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(e,n,c)}else a.current=null}function Em(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ze(e,e.return,c)}}function Tm(e,n,a){try{var r=e.stateNode;aS(r,e.type,a,n),r[nn]=n}catch(c){ze(e,e.return,c)}}function bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Zu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ju(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(ju(e,n,a),e=e.sibling;e!==null;)ju(e,n,a),e=e.sibling}function vl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(vl(e,n,a),e=e.sibling;e!==null;)vl(e,n,a),e=e.sibling}var Hi=!1,Xe=!1,Ku=!1,Am=typeof WeakSet=="function"?WeakSet:Set,hn=null,Rm=!1;function O0(e,n){if(e=e.containerInfo,bf=Fl,e=Xd(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,N=-1,V=0,lt=0,gt=e,nt=null;e:for(;;){for(var ot;gt!==a||c!==0&&gt.nodeType!==3||(T=v+c),gt!==f||r!==0&&gt.nodeType!==3||(N=v+r),gt.nodeType===3&&(v+=gt.nodeValue.length),(ot=gt.firstChild)!==null;)nt=gt,gt=ot;for(;;){if(gt===e)break e;if(nt===a&&++V===c&&(T=v),nt===f&&++lt===r&&(N=v),(ot=gt.nextSibling)!==null)break;gt=nt,nt=gt.parentNode}gt=ot}a=T===-1||N===-1?null:{start:T,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},Fl=!1,hn=n;hn!==null;)if(n=hn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,hn=e;else for(;hn!==null;){switch(n=hn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=Ja(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Df(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Df(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,hn=e;break}hn=n.return}return Vt=Rm,Rm=!1,Vt}function Cm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),r&4&&io(5,a);break;case 1:if(Vi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(T){ze(a,a.return,T)}else{var c=Ja(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(T){ze(a,a.return,T)}}r&64&&ym(a),r&512&&es(a,a.return);break;case 3:if(Vi(e,a),r&64&&(r=a.updateQueue,r!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{xm(r,e)}catch(T){ze(a,a.return,T)}}break;case 26:Vi(e,a),r&512&&es(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&r&4&&Em(a),r&512&&es(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),r&4&&Um(e,a);break;case 22:if(c=a.memoizedState!==null||Hi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=Hi,v=Xe;Hi=c,(Xe=n)&&!v?va(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=f,Xe=v}r&512&&(a.memoizedProps.mode==="manual"?es(a,a.return):kn(a,a.return));break;default:Vi(e,a)}}function wm(e){var n=e.alternate;n!==null&&(e.alternate=null,wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Dr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Xn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)Dm(e,n,a),a=a.sibling}function Dm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:Xe||kn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||kn(a,n);var r=Je,c=Xn;for(Je=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Dr(a),Je=r,Xn=c;break;case 5:Xe||kn(a,n);case 6:c=Je;var f=Xn;if(Je=null,Gi(e,n,a),Je=c,Xn=f,Je!==null)if(Xn)try{e=Je,r=a.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(v){ze(a,n,v)}else try{Je.removeChild(a.stateNode)}catch(v){ze(a,n,v)}break;case 18:Je!==null&&(Xn?(n=Je,a=a.stateNode,n.nodeType===8?wf(n.parentNode,a):n.nodeType===1&&wf(n,a),Mo(n)):wf(Je,a.stateNode));break;case 4:r=Je,c=Xn,Je=a.stateNode.containerInfo,Xn=!0,Gi(e,n,a),Je=r,Xn=c;break;case 0:case 11:case 14:case 15:Xe||ga(2,a,n),Xe||ga(4,a,n),Gi(e,n,a);break;case 1:Xe||(kn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Mm(a,n,r)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:Xe||kn(a,n),Xe=(r=Xe)||a.memoizedState!==null,Gi(e,n,a),Xe=r;break;default:Gi(e,n,a)}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(a){ze(n,n.return,a)}}function P0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Am),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Am),n;default:throw Error(s(435,e.tag))}}function Qu(e,n){var a=P0(e);n.forEach(function(r){var c=Z0.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:case 5:Je=T.stateNode,Xn=!1;break t;case 3:Je=T.stateNode.containerInfo,Xn=!0;break t;case 4:Je=T.stateNode.containerInfo,Xn=!0;break t}T=T.return}if(Je===null)throw Error(s(160));Dm(f,v,c),Je=null,Xn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lm(n,e),n=n.sibling}var fi=null;function Lm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),r&4&&(ga(3,e,e.return),io(3,e),ga(5,e,e.return));break;case 1:ti(n,e),ei(e),r&512&&(Xe||a===null||kn(a,a.return)),r&64&&Hi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=fi;if(ti(n,e),ei(e),r&512&&(Xe||a===null||kn(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ha]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),Sn(f,r,a),f[en]=e,Q(f),r=f;break t;case"link":var v=E_("link","href",c).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=c.createElement(r),Sn(f,r,a),c.head.appendChild(f);break;case"meta":if(v=E_("meta","content",c).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=c.createElement(r),Sn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[en]=e,Q(f),r=f}e.stateNode=r}else T_(c,e.type,e.stateNode);else e.stateNode=M_(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?T_(c,e.type,e.stateNode):M_(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Tm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var V=N.nextSibling,lt=N.nodeName;N[Ha]||lt==="HEAD"||lt==="BODY"||lt==="SCRIPT"||lt==="STYLE"||lt==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=V}for(var gt=e.type,nt=c.attributes;nt.length;)c.removeAttributeNode(nt[0]);Sn(c,gt,f),c[en]=e,c[nn]=f}catch(Vt){ze(e,e.return,Vt)}}case 5:if(ti(n,e),ei(e),r&512&&(Xe||a===null||kn(a,a.return)),e.flags&32){c=e.stateNode;try{Nn(c,"")}catch(Vt){ze(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,Tm(e,c,a!==null?a.memoizedProps:c)),r&1024&&(Ku=!0);break;case 6:if(ti(n,e),ei(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){ze(e,e.return,Vt)}}break;case 3:if(Pl=null,c=fi,fi=Nl(n.containerInfo),ti(n,e),fi=c,ei(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(n.containerInfo)}catch(Vt){ze(e,e.return,Vt)}Ku&&(Ku=!1,Nm(e));break;case 4:r=fi,fi=Nl(e.stateNode.containerInfo),ti(n,e),ei(e),fi=r;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(of=ut()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 22:if(r&512&&(Xe||a===null||kn(a,a.return)),N=e.memoizedState!==null,V=a!==null&&a.memoizedState!==null,lt=Hi,gt=Xe,Hi=lt||N,Xe=gt||V,ti(n,e),Xe=gt,Hi=lt,ei(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,r&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Hi||Xe,a===null||V||n||Hs(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){V=a=n;try{if(c=V.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{v=V.stateNode,T=V.memoizedProps.style;var ot=T!=null&&T.hasOwnProperty("display")?T.display:null;v.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Vt){ze(V,V.return,Vt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=N?"":V.memoizedProps}catch(Vt){ze(V,V.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Qu(e,a))));break;case 19:ti(n,e),ei(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Qu(e,r)));break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(bm(a)){var r=a;break t}a=a.return}throw Error(s(160))}switch(r.tag){case 27:var c=r.stateNode,f=Zu(e);vl(e,f,c);break;case 5:var v=r.stateNode;r.flags&32&&(Nn(v,""),r.flags&=-33);var T=Zu(e);vl(e,T,v);break;case 3:case 4:var N=r.stateNode.containerInfo,V=Zu(e);ju(e,V,N);break;default:throw Error(s(161))}}}catch(lt){ze(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(e,n.alternate,n),n=n.sibling}function Hs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),Hs(n);break;case 1:kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mm(n,n.return,a),Hs(n);break;case 26:case 27:case 5:kn(n,n.return),Hs(n);break;case 22:kn(n,n.return),n.memoizedState===null&&Hs(n);break;default:Hs(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),io(4,f);break;case 1:if(va(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(V){ze(r,r.return,V)}if(r=f,c=r.updateQueue,c!==null){var T=r.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)Sm(N[c],T)}catch(V){ze(r,r.return,V)}}a&&v&64&&ym(f),es(f,f.return);break;case 26:case 27:case 5:va(c,f,a),a&&r===null&&v&4&&Em(f),es(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&v&4&&Um(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),es(f,f.return);break;default:va(c,f,a)}n=n.sibling}}function Ju(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function $u(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e))}function Sa(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(e,n,a,r),n=n.sibling}function Om(e,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Sa(e,n,a,r),c&2048&&io(9,n);break;case 3:Sa(e,n,a,r),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e)));break;case 12:if(c&2048){Sa(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ze(n,n.return,N)}}else Sa(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?Sa(e,n,a,r):ao(e,n):f._visibility&4?Sa(e,n,a,r):(f._visibility|=4,Gs(e,n,a,r,(n.subtreeFlags&10256)!==0)),c&2048&&Ju(n.alternate,n);break;case 24:Sa(e,n,a,r),c&2048&&$u(n.alternate,n);break;default:Sa(e,n,a,r)}}function Gs(e,n,a,r,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,v=n,T=a,N=r,V=v.flags;switch(v.tag){case 0:case 11:case 15:Gs(f,v,T,N,c),io(8,v);break;case 23:break;case 22:var lt=v.stateNode;v.memoizedState!==null?lt._visibility&4?Gs(f,v,T,N,c):ao(f,v):(lt._visibility|=4,Gs(f,v,T,N,c)),c&&V&2048&&Ju(v.alternate,v);break;case 24:Gs(f,v,T,N,c),c&&V&2048&&$u(v.alternate,v);break;default:Gs(f,v,T,N,c)}n=n.sibling}}function ao(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:ao(a,r),c&2048&&Ju(r.alternate,r);break;case 24:ao(a,r),c&2048&&$u(r.alternate,r);break;default:ao(a,r)}n=n.sibling}}var so=8192;function Vs(e){if(e.subtreeFlags&so)for(e=e.child;e!==null;)Pm(e),e=e.sibling}function Pm(e){switch(e.tag){case 26:Vs(e),e.flags&so&&e.memoizedState!==null&&ES(fi,e.memoizedState,e.memoizedProps);break;case 5:Vs(e);break;case 3:case 4:var n=fi;fi=Nl(e.stateNode.containerInfo),Vs(e),fi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=so,so=16777216,Vs(e),so=n):Vs(e));break;default:Vs(e)}}function zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ro(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Fm(r,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bm(e),e=e.sibling}function Bm(e){switch(e.tag){case 0:case 11:case 15:ro(e),e.flags&2048&&ga(9,e,e.return);break;case 3:ro(e);break;case 12:ro(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,Sl(e)):ro(e);break;default:ro(e)}}function Sl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];hn=r,Fm(r,e)}zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Sl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,Sl(n));break;default:Sl(n)}e=e.sibling}}function Fm(e,n){for(;hn!==null;){var a=hn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,hn=r;else t:for(a=e;hn!==null;){r=hn;var c=r.sibling,f=r.return;if(wm(r),r===a){hn=null;break t}if(c!==null){c.return=f,hn=c;break t}hn=f}}}function z0(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,r){return new z0(e,n,a,r)}function tf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xa(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Im(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function xl(e,n,a,r,c,f){var v=0;if(r=e,typeof e=="function")tf(e)&&(v=1);else if(typeof e=="string")v=yS(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return ns(a.children,c,f,n);case p:v=8,c|=24;break;case g:return e=ni(12,a,n,c|2),e.elementType=g,e.lanes=f,e;case w:return e=ni(13,a,n,c),e.elementType=w,e.lanes=f,e;case y:return e=ni(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return Hm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case M:v=10;break t;case x:v=9;break t;case R:v=11;break t;case _:v=14;break t;case P:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ni(v,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function ns(e,n,a,r){return e=ni(7,e,r,n),e.lanes=a,e}function Hm(e,n,a,r){e=ni(22,e,r,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(s(456));if(!(c._pendingVisibility&2)){var v=la(f,2);v!==null&&(c._pendingVisibility|=2,Dn(v,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(s(456));if(c._pendingVisibility&2){var v=la(f,2);v!==null&&(c._pendingVisibility&=-3,Dn(v,f,2))}}};return e.stateNode=c,e}function ef(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function nf(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function Gm(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!b_(n)){if(n=$n.current,n!==null&&((xe&4194176)===xe?Ti!==null:(xe&62914560)!==xe&&!(xe&536870912)||n!==Ti))throw Xr=ou,ap;e.flags|=8192}}function yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,Xs|=n)}function oo(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&31457280,r|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function B0(e,n,a){var r=n.pendingProps;switch(su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ii(rn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?ki(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,ui!==null&&(ff(ui),ui=null))),Ge(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(Ge(n),Gm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),Ge(n),Gm(n,a)):(Ge(n),n.flags&=-16777217):(e.memoizedProps!==r&&ki(n),Ge(n),n.flags&=-16777217),null;case 27:kt(n),a=ie.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ge(n),null}e=ye.current,Hr(n)?np(n):(e=g_(c,r,a),n.stateNode=e,ki(n))}return Ge(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ge(n),null}if(e=ye.current,Hr(n))np(n);else{switch(c=Ll(ie.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[en]=n,e[nn]=r;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(Sn(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ki(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ie.current,Hr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=wn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||f_(e.nodeValue,a)),e||qa(n)}else e=Ll(e).createTextNode(r),e[en]=n,n.stateNode=e}return Ge(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[en]=n}else Gr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else ui!==null&&(ff(ui),ui=null),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),n.flags&128)return n.lanes=a,n;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Ge(n),null;case 4:return se(),e===null&&Mf(n.stateNode.containerInfo),Ge(n),null;case 10:return Ii(n.type),Ge(n),null;case 19:if(Kt(sn),c=n.memoizedState,c===null)return Ge(n),null;if(r=(n.flags&128)!==0,f=c.rendering,f===null)if(r)oo(c,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=al(e),f!==null){for(n.flags|=128,oo(c,!1),e=f.updateQueue,n.updateQueue=e,yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Im(a,e),a=a.sibling;return Pt(sn,sn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ut()>Ml&&(n.flags|=128,r=!0,oo(c,!1),n.lanes=4194304)}else{if(!r)if(e=al(f),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,yl(n,e),oo(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Te)return Ge(n),null}else 2*ut()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,r=!0,oo(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ut(),n.sibling=null,e=sn.current,Pt(sn,r?e&1|2:e&1),n):(Ge(n),null);case 22:case 23:return Pi(n),cu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?a&536870912&&!(n.flags&128)&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Kt(Za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(rn),Ge(n),null;case 25:return null}throw Error(s(156,n.tag))}function F0(e,n){switch(su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(rn),se(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Gr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Kt(sn),null;case 4:return se(),null;case 10:return Ii(n.type),null;case 22:case 23:return Pi(n),cu(),e!==null&&Kt(Za),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(rn),null;case 25:return null;default:return null}}function Vm(e,n){switch(su(n),n.tag){case 3:Ii(rn),se();break;case 26:case 27:case 5:kt(n);break;case 4:se();break;case 13:Pi(n);break;case 19:Kt(sn);break;case 10:Ii(n.type);break;case 22:case 23:Pi(n),cu(),e!==null&&Kt(Za);break;case 24:Ii(rn)}}var I0={getCacheForType:function(e){var n=yn(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},H0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,de=null,xe=0,Fe=0,Wn=null,Xi=!1,ks=!1,af=!1,Wi=0,We=0,ya=0,is=0,sf=0,ii=0,Xs=0,lo=null,Ai=null,rf=!1,of=0,Ml=1/0,El=null,Ma=null,Tl=!1,as=null,co=0,lf=0,cf=null,uo=0,uf=null;function qn(){if(Ve&2&&xe!==0)return xe&-xe;if(C.T!==null){var e=Ps;return e!==0?e:vf()}return wr()}function km(){ii===0&&(ii=!(xe&536870912)||Te?tn():536870912);var e=$n.current;return e!==null&&(e.flags|=32),ii}function Dn(e,n,a){(e===Be&&Fe===2||e.cancelPendingCommit!==null)&&(Ws(e,0),qi(e,xe,ii,!1)),An(e,a),(!(Ve&2)||e!==Be)&&(e===Be&&(!(Ve&2)&&(is|=a),We===4&&qi(e,xe,ii,!1)),Ri(e))}function Xm(e,n,a){if(Ve&6)throw Error(s(327));var r=!a&&(n&60)===0&&(n&e.expiredLanes)===0||Jt(e,n),c=r?k0(e,n):pf(e,n,!0),f=r;do{if(c===0){ks&&!r&&qi(e,n,0,!1);break}else if(c===6)qi(e,n,0,!Xi);else{if(a=e.current.alternate,f&&!G0(a)){c=pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;c=lo;var N=T.current.memoizedState.isDehydrated;if(N&&(Ws(T,v).flags|=256),v=pf(T,v,!1),v!==2){if(af&&!N){T.errorRecoveryDisabledLanes|=f,is|=f,c=4;break t}f=Ai,Ai=c,f!==null&&ff(f)}c=v}if(f=!1,c!==2)continue}}if(c===1){Ws(e,0),qi(e,n,0,!0);break}t:{switch(r=e,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194176)===n){qi(r,n,ii,!Xi);break t}break;case 2:Ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if(r.finishedWork=a,r.finishedLanes=n,(n&62914560)===n&&(f=of+300-ut(),10<f)){if(qi(r,n,ii,!Xi),Dt(r,0)!==0)break t;r.timeoutHandle=p_(Wm.bind(null,r,a,Ai,El,rf,n,ii,is,Xs,Xi,2,-0,0),f);break t}Wm(r,a,Ai,El,rf,n,ii,is,Xs,Xi,0,-0,0)}}break}while(!0);Ri(e)}function ff(e){Ai===null?Ai=e:Ai.push.apply(Ai,e)}function Wm(e,n,a,r,c,f,v,T,N,V,lt,gt,nt){var ot=n.subtreeFlags;if((ot&8192||(ot&16785408)===16785408)&&(go={stylesheets:null,count:0,unsuspend:MS},Pm(n),n=TS(),n!==null)){e.cancelPendingCommit=n(Jm.bind(null,e,a,r,c,v,T,N,1,gt,nt)),qi(e,f,v,!V);return}Jm(e,a,r,c,v,T,N,lt,gt,nt)}function G0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,r){n&=~sf,n&=~is,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Zt(c),v=1<<f;r[f]=-1,c&=~v}a!==0&&Cr(e,a,n)}function bl(){return Ve&6?!0:(fo(0),!1)}function hf(){if(de!==null){if(Fe===0)var e=de.return;else e=de,Fi=$a=null,gu(e),Ns=null,Wr=0,e=de;for(;e!==null;)Vm(e.alternate,e),e=e.return;de=null}}function Ws(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,rS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),hf(),Be=e,de=a=xa(e.current,null),xe=n,Fe=0,Wn=null,Xi=!1,ks=Jt(e,n),af=!1,Xs=ii=sf=is=ya=We=0,Ai=lo=null,rf=!1,n&8&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var c=31-Zt(r),f=1<<c;n|=e[c],r&=~f}return Wi=n,jo(),a}function qm(e,n){ce=null,C.H=bi,n===kr?(n=op(),Fe=3):n===ap?(n=op(),Fe=4):Fe=n===sm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,de===null&&(We=1,ml(e,Kn(n,e.current)))}function Ym(){var e=C.H;return C.H=bi,e===null?bi:e}function Zm(){var e=C.A;return C.A=I0,e}function df(){We=4,Xi||(xe&4194176)!==xe&&$n.current!==null||(ks=!0),!(ya&134217727)&&!(is&134217727)||Be===null||qi(Be,xe,ii,!1)}function pf(e,n,a){var r=Ve;Ve|=2;var c=Ym(),f=Zm();(Be!==e||xe!==n)&&(El=null,Ws(e,n)),n=!1;var v=We;t:do try{if(Fe!==0&&de!==null){var T=de,N=Wn;switch(Fe){case 8:hf(),v=6;break t;case 3:case 2:case 6:$n.current===null&&(n=!0);var V=Fe;if(Fe=0,Wn=null,qs(e,T,N,V),a&&ks){v=0;break t}break;default:V=Fe,Fe=0,Wn=null,qs(e,T,N,V)}}V0(),v=We;break}catch(lt){qm(e,lt)}while(!0);return n&&e.shellSuspendCounter++,Fi=$a=null,Ve=r,C.H=c,C.A=f,de===null&&(Be=null,xe=0,jo()),v}function V0(){for(;de!==null;)jm(de)}function k0(e,n){var a=Ve;Ve|=2;var r=Ym(),c=Zm();Be!==e||xe!==n?(El=null,Ml=ut()+500,Ws(e,n)):ks=Jt(e,n);t:do try{if(Fe!==0&&de!==null){n=de;var f=Wn;e:switch(Fe){case 1:Fe=0,Wn=null,qs(e,n,f,1);break;case 2:if(sp(f)){Fe=0,Wn=null,Km(n);break}n=function(){Fe===2&&Be===e&&(Fe=7),Ri(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:sp(f)?(Fe=0,Wn=null,Km(n)):(Fe=0,Wn=null,qs(e,n,f,7));break;case 5:var v=null;switch(de.tag){case 26:v=de.memoizedState;case 5:case 27:var T=de;if(!v||b_(v)){Fe=0,Wn=null;var N=T.sibling;if(N!==null)de=N;else{var V=T.return;V!==null?(de=V,Al(V)):de=null}break e}}Fe=0,Wn=null,qs(e,n,f,5);break;case 6:Fe=0,Wn=null,qs(e,n,f,6);break;case 8:hf(),We=6;break t;default:throw Error(s(462))}}X0();break}catch(lt){qm(e,lt)}while(!0);return Fi=$a=null,C.H=r,C.A=c,Ve=a,de!==null?0:(Be=null,xe=0,jo(),We)}function X0(){for(;de!==null&&!E();)jm(de)}function jm(e){var n=gm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Al(e):de=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=fm(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=fm(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:gu(n);default:Vm(a,n),n=de=Im(n,Wi),n=gm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Al(e):de=n}function qs(e,n,a,r){Fi=$a=null,gu(n),Ns=null,Wr=0;var c=n.return;try{if(L0(e,c,n,a,xe)){We=1,ml(e,Kn(a,e.current)),de=null;return}}catch(f){if(c!==null)throw de=c,f;We=1,ml(e,Kn(a,e.current)),de=null;return}n.flags&32768?(Te||r===1?e=!0:ks||xe&536870912?e=!1:(Xi=e=!0,(r===2||r===3||r===6)&&(r=$n.current,r!==null&&r.tag===13&&(r.flags|=16384))),Qm(n,e)):Al(n)}function Al(e){var n=e;do{if(n.flags&32768){Qm(n,Xi);return}e=n.return;var a=B0(n.alternate,n,Wi);if(a!==null){de=a;return}if(n=n.sibling,n!==null){de=n;return}de=n=e}while(n!==null);We===0&&(We=5)}function Qm(e,n){do{var a=F0(e.alternate,e);if(a!==null){a.flags&=32767,de=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){de=e;return}de=e=a}while(e!==null);We=6,de=null}function Jm(e,n,a,r,c,f,v,T,N,V){var lt=C.T,gt=q.p;try{q.p=2,C.T=null,W0(e,n,a,r,gt,c,f,v,T,N,V)}finally{C.T=lt,q.p=gt}}function W0(e,n,a,r,c,f,v,T){do Ys();while(as!==null);if(Ve&6)throw Error(s(327));var N=e.finishedWork;if(r=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var V=N.lanes|N.childLanes;if(V|=nu,Io(e,r,V,f,v,T),e===Be&&(de=Be=null,xe=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||Tl||(Tl=!0,lf=V,cf=a,j0(wt,function(){return Ys(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=C.T,C.T=null,f=q.p,q.p=2,v=Ve,Ve|=4,O0(e,N),Lm(N,e),m0(Af,e.containerInfo),Fl=!!bf,Af=bf=null,e.current=N,Cm(e,N.alternate,N),et(),Ve=v,q.p=f,C.T=a):e.current=N,Tl?(Tl=!1,as=e,co=r):$m(e,V),V=e.pendingLanes,V===0&&(Ma=null),Ft(N.stateNode),Ri(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)V=n[N],c(V.value,{componentStack:V.stack});return co&3&&Ys(),V=e.pendingLanes,r&4194218&&V&42?e===uf?uo++:(uo=0,uf=e):uo=0,fo(0),null}function $m(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yr(n)))}function Ys(){if(as!==null){var e=as,n=lf;lf=0;var a=ys(co),r=C.T,c=q.p;try{if(q.p=32>a?32:a,C.T=null,as===null)var f=!1;else{a=cf,cf=null;var v=as,T=co;if(as=null,co=0,Ve&6)throw Error(s(331));var N=Ve;if(Ve|=4,Bm(v.current),Om(v,v.current,T,a),Ve=N,fo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(qt,v)}catch{}f=!0}return f}finally{q.p=c,C.T=r,$m(e,n)}}return!1}function t_(e,n,a){n=Kn(a,n),n=Uu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(An(e,2),Ri(e))}function ze(e,n,a){if(e.tag===3)t_(e,e,a);else for(;n!==null;){if(n.tag===3){t_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ma===null||!Ma.has(r))){e=Kn(a,e),a=im(2),r=_a(n,a,2),r!==null&&(am(a,r,n,e),An(r,2),Ri(r));break}}n=n.return}}function mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new H0;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(af=!0,c.add(a),e=q0.bind(null,e,n,a),n.then(e,e))}function q0(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(xe&a)===a&&(We===4||We===3&&(xe&62914560)===xe&&300>ut()-of?!(Ve&2)&&Ws(e,0):sf|=a,Xs===xe&&(Xs=0)),Ri(e)}function e_(e,n){n===0&&(n=Me()),e=la(e,n),e!==null&&(An(e,n),Ri(e))}function Y0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function Z0(e,n){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),e_(e,a)}function j0(e,n){return Xt(e,n)}var Rl=null,Zs=null,_f=!1,Cl=!1,gf=!1,ss=0;function Ri(e){e!==Zs&&e.next===null&&(Zs===null?Rl=Zs=e:Zs=Zs.next=e),Cl=!0,_f||(_f=!0,Q0(K0))}function fo(e,n){if(!gf&&Cl){gf=!0;do for(var a=!1,r=Rl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Zt(42|e)+1)-1,f&=c&~(v&~T),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,a_(r,f))}else f=xe,f=Dt(r,r===Be?f:0),!(f&3)||Jt(r,f)||(a=!0,a_(r,f));r=r.next}while(a);gf=!1}}function K0(){Cl=_f=!1;var e=0;ss!==0&&(sS()&&(e=ss),ss=0);for(var n=ut(),a=null,r=Rl;r!==null;){var c=r.next,f=n_(r,n);f===0?(r.next=null,a===null?Rl=c:a.next=c,c===null&&(Zs=a)):(a=r,(e!==0||f&3)&&(Cl=!0)),r=c}fo(e)}function n_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Zt(f),T=1<<v,N=c[v];N===-1?(!(T&a)||T&r)&&(c[v]=He(T,n)):N<=n&&(e.expiredLanes|=T),f&=~T}if(n=Be,a=xe,a=Dt(e,e===n?a:0),r=e.callbackNode,a===0||e===n&&Fe===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&U(r),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||Jt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&U(r),ys(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return r=i_.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&U(r),e.callbackPriority=2,e.callbackNode=null,2}function i_(e,n){var a=e.callbackNode;if(Ys()&&e.callbackNode!==a)return null;var r=xe;return r=Dt(e,e===Be?r:0),r===0?null:(Xm(e,r,n),n_(e,ut()),e.callbackNode!=null&&e.callbackNode===a?i_.bind(null,e):null)}function a_(e,n){if(Ys())return null;Xm(e,n,!0)}function Q0(e){oS(function(){Ve&6?Xt(ft,e):e()})}function vf(){return ss===0&&(ss=tn()),ss}function s_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function r_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function J0(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=s_((c[nn]||null).action),v=r.submitter;v&&(n=(n=v[nn]||null)?s_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new qo("action","action",null,r,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ss!==0){var N=v?r_(c,v):new FormData(c);Au(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(T.preventDefault(),N=v?r_(c,v):new FormData(c),Au(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var Sf=0;Sf<Jd.length;Sf++){var xf=Jd[Sf],$0=xf.toLowerCase(),tS=xf[0].toUpperCase()+xf.slice(1);ci($0,"on"+tS)}ci(Yd,"onAnimationEnd"),ci(Zd,"onAnimationIteration"),ci(jd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(g0,"onTransitionRun"),ci(v0,"onTransitionStart"),ci(S0,"onTransitionCancel"),ci(Kd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function o_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],N=T.instance,V=T.currentTarget;if(T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){pl(lt)}c.currentTarget=null,f=N}else for(v=0;v<r.length;v++){if(T=r[v],N=T.instance,V=T.currentTarget,T=T.listener,N!==f&&c.isPropagationStopped())break t;f=T,c.currentTarget=V;try{f(c)}catch(lt){pl(lt)}c.currentTarget=null,f=N}}}}function Se(e,n){var a=n[Ms];a===void 0&&(a=n[Ms]=new Set);var r=e+"__bubble";a.has(r)||(l_(n,e,2,!1),a.add(r))}function yf(e,n,a){var r=0;n&&(r|=4),l_(a,e,r,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function Mf(e){if(!e[wl]){e[wl]=!0,Y.forEach(function(a){a!=="selectionchange"&&(eS.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wl]||(n[wl]=!0,yf("selectionchange",!1,n))}}function l_(e,n,a,r){switch(U_(n)){case 2:var c=RS;break;case 8:c=CS;break;default:c=Pf}a=c.bind(null,n,a,e),c=void 0,!kc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Ef(e,n,a,r,c){var f=r;if(!(n&1)&&!(n&2)&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===c||T.nodeType===8&&T.parentNode===c)break;if(v===4)for(v=r.return;v!==null;){var N=v.tag;if((N===3||N===4)&&(N=v.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;v=v.return}for(;T!==null;){if(v=Li(T),v===null)return;if(N=v.tag,N===5||N===6||N===26||N===27){r=f=v;continue t}T=T.parentNode}}r=r.return}Ed(function(){var V=f,lt=Gc(a),gt=[];t:{var nt=Qd.get(e);if(nt!==void 0){var ot=qo,Vt=e;switch(e){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":ot=Zv;break;case"focusin":Vt="focus",ot=Yc;break;case"focusout":Vt="blur",ot=Yc;break;case"beforeblur":case"afterblur":ot=Yc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=zv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Qv;break;case Yd:case Zd:case jd:ot=Iv;break;case Kd:ot=$v;break;case"scroll":case"scrollend":ot=Ov;break;case"wheel":ot=e0;break;case"copy":case"cut":case"paste":ot=Gv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Cd;break;case"toggle":case"beforetoggle":ot=i0}var ne=(n&4)!==0,qe=!ne&&(e==="scroll"||e==="scrollend"),j=ne?nt!==null?nt+"Capture":null:nt;ne=[];for(var G=V,J;G!==null;){var pt=G;if(J=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||J===null||j===null||(pt=Ur(G,j),pt!=null&&ne.push(po(G,pt,J))),qe)break;G=G.return}0<ne.length&&(nt=new ot(nt,Vt,null,a,lt),gt.push({event:nt,listeners:ne}))}}if(!(n&7)){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&a!==Hc&&(Vt=a.relatedTarget||a.fromElement)&&(Li(Vt)||Vt[Ui]))break t;if((ot||nt)&&(nt=lt.window===lt?lt:(nt=lt.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Vt=a.relatedTarget||a.toElement,ot=V,Vt=Vt?Li(Vt):null,Vt!==null&&(qe=Z(Vt),ne=Vt.tag,Vt!==qe||ne!==5&&ne!==27&&ne!==6)&&(Vt=null)):(ot=null,Vt=V),ot!==Vt)){if(ne=Ad,pt="onMouseLeave",j="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Cd,pt="onPointerLeave",j="onPointerEnter",G="pointer"),qe=ot==null?nt:X(ot),J=Vt==null?nt:X(Vt),nt=new ne(pt,G+"leave",ot,a,lt),nt.target=qe,nt.relatedTarget=J,pt=null,Li(lt)===V&&(ne=new ne(j,G+"enter",Vt,a,lt),ne.target=J,ne.relatedTarget=qe,pt=ne),qe=pt,ot&&Vt)e:{for(ne=ot,j=Vt,G=0,J=ne;J;J=js(J))G++;for(J=0,pt=j;pt;pt=js(pt))J++;for(;0<G-J;)ne=js(ne),G--;for(;0<J-G;)j=js(j),J--;for(;G--;){if(ne===j||j!==null&&ne===j.alternate)break e;ne=js(ne),j=js(j)}ne=null}else ne=null;ot!==null&&c_(gt,nt,ot,ne,!1),Vt!==null&&qe!==null&&c_(gt,qe,Vt,ne,!0)}}t:{if(nt=V?X(V):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var It=zd;else if(Od(nt))if(Bd)It=d0;else{It=f0;var fe=u0}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?V&&Ic(V.elementType)&&(It=zd):It=h0;if(It&&(It=It(e,V))){Pd(gt,It,a,lt);break t}fe&&fe(e,nt,V),e==="focusout"&&V&&nt.type==="number"&&V.memoizedProps.value!=null&&xn(nt,"number",nt.value)}switch(fe=V?X(V):window,e){case"focusin":(Od(fe)||fe.contentEditable==="true")&&(Rs=fe,$c=V,Ir=null);break;case"focusout":Ir=$c=Rs=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,Wd(gt,a,lt);break;case"selectionchange":if(_0)break;case"keydown":case"keyup":Wd(gt,a,lt)}var Wt;if(jc)t:{switch(e){case"compositionstart":var Qt="onCompositionStart";break t;case"compositionend":Qt="onCompositionEnd";break t;case"compositionupdate":Qt="onCompositionUpdate";break t}Qt=void 0}else As?Ld(e,a)&&(Qt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Qt="onCompositionStart");Qt&&(wd&&a.locale!=="ko"&&(As||Qt!=="onCompositionStart"?Qt==="onCompositionEnd"&&As&&(Wt=Td()):(oa=lt,Xc="value"in oa?oa.value:oa.textContent,As=!0)),fe=Dl(V,Qt),0<fe.length&&(Qt=new Rd(Qt,e,null,a,lt),gt.push({event:Qt,listeners:fe}),Wt?Qt.data=Wt:(Wt=Nd(a),Wt!==null&&(Qt.data=Wt)))),(Wt=s0?r0(e,a):o0(e,a))&&(Qt=Dl(V,"onBeforeInput"),0<Qt.length&&(fe=new Rd("onBeforeInput","beforeinput",null,a,lt),gt.push({event:fe,listeners:Qt}),fe.data=Wt)),J0(gt,e,V,a,lt)}o_(gt,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dl(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ur(e,a),c!=null&&r.unshift(po(e,c,f)),c=Ur(e,n),c!=null&&r.push(po(e,c,f))),e=e.return}return r}function js(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c_(e,n,a,r,c){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,N=T.alternate,V=T.stateNode;if(T=T.tag,N!==null&&N===r)break;T!==5&&T!==26&&T!==27||V===null||(N=V,c?(V=Ur(a,f),V!=null&&v.unshift(po(a,V,N))):c||(V=Ur(a,f),V!=null&&v.push(po(a,V,N)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var nS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function u_(e){return(typeof e=="string"?e:""+e).replace(nS,`
`).replace(iS,"")}function f_(e,n){return n=u_(n),u_(e)===n}function Ul(){}function Ne(e,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Nn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Nn(e,""+r);break;case"className":Ie(e,"class",r);break;case"tabIndex":Ie(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(e,a,r);break;case"style":yd(e,r,f);break;case"data":if(n!=="object"){Ie(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Vo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ul);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Se("beforetoggle",e),Se("toggle",e),ge(e,"popover",r);break;case"xlinkActuate":Ee(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ee(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ee(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ee(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ee(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ee(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ee(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ge(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lv.get(a)||a,ge(e,a,r))}}function Tf(e,n,a,r,c,f){switch(a){case"style":yd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Nn(e,r):(typeof r=="number"||typeof r=="bigint")&&Nn(e,""+r);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!yt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,c);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ge(e,a,r)}}}function Sn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,f,v,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),r&&Ne(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var T=f=v=c=null,N=null,V=null;for(r in a)if(a.hasOwnProperty(r)){var lt=a[r];if(lt!=null)switch(r){case"name":c=lt;break;case"type":v=lt;break;case"checked":N=lt;break;case"defaultChecked":V=lt;break;case"value":f=lt;break;case"defaultValue":T=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:Ne(e,n,r,lt,a,null)}}Cn(e,f,T,N,V,v,c,!1),ve(e);return;case"select":Se("invalid",e),r=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Ne(e,n,c,T,a,null)}n=f,a=v,e.multiple=!!r,n!=null?ke(e,!!r,n,!1):a!=null&&ke(e,!!r,a,!0);return;case"textarea":Se("invalid",e),f=c=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":c=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ne(e,n,v,T,a,null)}Es(e,r,c,f),ve(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(r=a[N],r!=null))switch(N){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ne(e,n,N,r,a,null)}return;case"dialog":Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)Se(ho[r],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(r=a[V],r!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ne(e,n,V,r,a,null)}return;default:if(Ic(n)){for(lt in a)a.hasOwnProperty(lt)&&(r=a[lt],r!==void 0&&Tf(e,n,lt,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ne(e,n,T,r,a,null))}function aS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,T=null,N=null,V=null,lt=null;for(ot in a){var gt=a[ot];if(a.hasOwnProperty(ot)&&gt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":N=gt;default:r.hasOwnProperty(ot)||Ne(e,n,ot,null,r,gt)}}for(var nt in r){var ot=r[nt];if(gt=a[nt],r.hasOwnProperty(nt)&&(ot!=null||gt!=null))switch(nt){case"type":f=ot;break;case"name":c=ot;break;case"checked":V=ot;break;case"defaultChecked":lt=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==gt&&Ne(e,n,nt,ot,r,gt)}}Ue(e,v,T,N,V,lt,f,c);return;case"select":ot=v=T=nt=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ot=N;default:r.hasOwnProperty(f)||Ne(e,n,f,null,r,N)}for(c in r)if(f=r[c],N=a[c],r.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":nt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==N&&Ne(e,n,c,f,r,N)}n=T,a=v,r=ot,nt!=null?ke(e,!!a,nt,!1):!!r!=!!a&&(n!=null?ke(e,!!a,n,!0):ke(e,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(e,n,T,null,r,c)}for(v in r)if(c=r[v],f=a[v],r.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":nt=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ne(e,n,v,c,r,f)}_n(e,nt,ot);return;case"option":for(var Vt in a)if(nt=a[Vt],a.hasOwnProperty(Vt)&&nt!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ne(e,n,Vt,null,r,nt)}for(N in r)if(nt=r[N],ot=a[N],r.hasOwnProperty(N)&&nt!==ot&&(nt!=null||ot!=null))switch(N){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ne(e,n,N,nt,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)nt=a[ne],a.hasOwnProperty(ne)&&nt!=null&&!r.hasOwnProperty(ne)&&Ne(e,n,ne,null,r,nt);for(V in r)if(nt=r[V],ot=a[V],r.hasOwnProperty(V)&&nt!==ot&&(nt!=null||ot!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ne(e,n,V,nt,r,ot)}return;default:if(Ic(n)){for(var qe in a)nt=a[qe],a.hasOwnProperty(qe)&&nt!==void 0&&!r.hasOwnProperty(qe)&&Tf(e,n,qe,void 0,r,nt);for(lt in r)nt=r[lt],ot=a[lt],!r.hasOwnProperty(lt)||nt===ot||nt===void 0&&ot===void 0||Tf(e,n,lt,nt,r,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!r.hasOwnProperty(j)&&Ne(e,n,j,null,r,nt);for(gt in r)nt=r[gt],ot=a[gt],!r.hasOwnProperty(gt)||nt===ot||nt==null&&ot==null||Ne(e,n,gt,nt,r,ot)}var bf=null,Af=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function h_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function sS(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var p_=typeof setTimeout=="function"?setTimeout:void 0,rS=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(e){return m_.resolve(null).then(e).catch(lS)}:p_;function lS(e){setTimeout(function(){throw e})}function wf(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(r===0){e.removeChild(c),Mo(n);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=c}while(a);Mo(n)}function Df(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Df(a),Dr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function cS(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ha])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function uS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function __(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=Ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}var ai=new Map,v_=new Set;function Nl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=q.d;q.d={f:fS,r:hS,D:dS,C:pS,L:mS,m:_S,X:vS,S:gS,M:SS};function fS(){var e=Yi.f(),n=bl();return e||n}function hS(e){var n=b(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):Yi.r(e)}var Ks=typeof document>"u"?null:document;function S_(e,n,a){var r=Ks;if(r&&typeof n=="string"&&n){var c=un(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),v_.has(c)||(v_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),Sn(n,"link",e),Q(n),r.head.appendChild(n)))}}function dS(e){Yi.D(e),S_("dns-prefetch",e,null)}function pS(e,n){Yi.C(e,n),S_("preconnect",e,n)}function mS(e,n,a){Yi.L(e,n,a);var r=Ks;if(r&&e&&n){var c='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+un(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+un(a.imageSizes)+'"]')):c+='[href="'+un(e)+'"]';var f=c;switch(n){case"style":f=Qs(e);break;case"script":f=Js(e)}ai.has(f)||(e=A({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(mo(f))||n==="script"&&r.querySelector(_o(f))||(n=r.createElement("link"),Sn(n,"link",e),Q(n),r.head.appendChild(n)))}}function _S(e,n){Yi.m(e,n);var a=Ks;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+un(r)+'"][href="'+un(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Js(e)}if(!ai.has(f)&&(e=A({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}r=a.createElement("link"),Sn(r,"link",e),Q(r),a.head.appendChild(r)}}}function gS(e,n,a){Yi.S(e,n,a);var r=Ks;if(r&&e){var c=tt(r).hoistableStyles,f=Qs(e);n=n||"default";var v=c.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(mo(f)))T.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&Uf(e,a);var N=v=r.createElement("link");Q(N),Sn(N,"link",e),N._p=new Promise(function(V,lt){N.onload=V,N.onerror=lt}),N.addEventListener("load",function(){T.loading|=1}),N.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ol(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},c.set(f,v)}}}function vS(e,n){Yi.X(e,n);var a=Ks;if(a&&e){var r=tt(a).hoistableScripts,c=Js(e),f=r.get(c);f||(f=a.querySelector(_o(c)),f||(e=A({src:e,async:!0},n),(n=ai.get(c))&&Lf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function SS(e,n){Yi.M(e,n);var a=Ks;if(a&&e){var r=tt(a).hoistableScripts,c=Js(e),f=r.get(c);f||(f=a.querySelector(_o(c)),f||(e=A({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&Lf(e,n),f=a.createElement("script"),Q(f),Sn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function x_(e,n,a,r){var c=(c=ie.current)?Nl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Qs(a.href),a=tt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qs(a.href);var f=tt(c).hoistableStyles,v=f.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=c.querySelector(mo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||xS(c,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Js(a),a=tt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qs(e){return'href="'+un(e)+'"'}function mo(e){return'link[rel="stylesheet"]['+e+"]"}function y_(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function xS(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Sn(n,"link",a),Q(n),e.head.appendChild(n))}function Js(e){return'[src="'+un(e)+'"]'}function _o(e){return"script[async]"+e}function M_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+un(a.href)+'"]');if(r)return n.instance=r,Q(r),r;var c=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Q(r),Sn(r,"style",c),Ol(r,a.precedence,e),n.instance=r;case"stylesheet":c=Qs(a.href);var f=e.querySelector(mo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;r=y_(a),(c=ai.get(c))&&Uf(r,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var v=f;return v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),Sn(f,"link",r),n.state.loading|=4,Ol(f,a.precedence,e),n.instance=f;case"script":return f=Js(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,Q(c),c):(r=a,(c=ai.get(f))&&(r=A({},a),Lf(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),Sn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(r=n.instance,n.state.loading|=4,Ol(r,a.precedence,e));return n.instance}function Ol(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Uf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pl=null;function E_(e,n,a){if(Pl===null){var r=new Map,c=Pl=new Map;c.set(a,r)}else c=Pl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ha]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function T_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var go=null;function MS(){}function ES(e,n,a){if(go===null)throw Error(s(475));var r=go;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Qs(a.href),f=e.querySelector(mo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=zl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=y_(a),(c=ai.get(c))&&Uf(a,c),f=f.createElement("link"),Q(f);var v=f;v._p=new Promise(function(T,N){v.onload=T,v.onerror=N}),Sn(f,"link",a),n.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(r.count++,n=zl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function TS(){if(go===null)throw Error(s(475));var e=go;return e.stylesheets&&e.count===0&&Nf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Nf(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Nf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Nf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,n.forEach(bS,e),Bl=null,zl.call(e))}function bS(e,n){if(!(n.state.loading&4)){var a=Bl.get(e);if(a)var r=a.get(null);else{a=new Map,Bl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,c),a.set(v,c),this.count++,r=zl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:M,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function AS(e,n,a,r,c,f,v,T){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.hiddenUpdates=bn(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function A_(e,n,a,r,c,f,v,T,N,V,lt,gt){return e=new AS(e,n,a,v,T,N,V,gt),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=uu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Xu(f),e}function R_(e){return e?(e=Ds,e):Ds}function C_(e,n,a,r,c,f){c=R_(c),r.context===null?r.context=c:r.pendingContext=c,r=ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=_a(e,r,n),a!==null&&(Dn(a,e,n),to(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Of(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function D_(e){if(e.tag===13){var n=la(e,67108864);n!==null&&Dn(n,e,67108864),Of(e,67108864)}}var Fl=!0;function RS(e,n,a,r){var c=C.T;C.T=null;var f=q.p;try{q.p=2,Pf(e,n,a,r)}finally{q.p=f,C.T=c}}function CS(e,n,a,r){var c=C.T;C.T=null;var f=q.p;try{q.p=8,Pf(e,n,a,r)}finally{q.p=f,C.T=c}}function Pf(e,n,a,r){if(Fl){var c=zf(r);if(c===null)Ef(e,n,r,Il,a),L_(e,r);else if(DS(c,e,n,a,r))r.stopPropagation();else if(L_(e,r),n&4&&-1<wS.indexOf(e)){for(;c!==null;){var f=b(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var N=1<<31-Zt(v);T.entanglements[1]|=N,v&=~N}Ri(f),!(Ve&6)&&(Ml=ut()+500,fo(0))}}break;case 13:T=la(f,2),T!==null&&Dn(T,f,2),bl(),Of(f,2)}if(f=zf(r),f===null&&Ef(e,n,r,Il,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Ef(e,n,r,null,a)}}function zf(e){return e=Gc(e),Bf(e)}var Il=null;function Bf(e){if(Il=null,e=Li(e),e!==null){var n=Z(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=xt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Il=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(vt()){case ft:return 2;case Ht:return 8;case wt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Ff=!1,Ea=null,Ta=null,ba=null,So=new Map,xo=new Map,Aa=[],wS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(n.pointerId)}}function yo(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=b(n),n!==null&&D_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function DS(e,n,a,r,c){switch(n){case"focusin":return Ea=yo(Ea,e,n,a,r,c),!0;case"dragenter":return Ta=yo(Ta,e,n,a,r,c),!0;case"mouseover":return ba=yo(ba,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,yo(So.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,yo(xo.get(f)||null,e,n,a,r,c)),!0}return!1}function N_(e){var n=Li(e.target);if(n!==null){var a=Z(n);if(a!==null){if(n=a.tag,n===13){if(n=xt(a),n!==null){e.blockedOn=n,Ho(e.priority,function(){if(a.tag===13){var r=qn(),c=la(a,r);c!==null&&Dn(c,a,r),Of(a,r)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Hc=r,a.target.dispatchEvent(r),Hc=null}else return n=b(a),n!==null&&D_(n),e.blockedOn=a,!1;n.shift()}return!0}function O_(e,n,a){Hl(e)&&a.delete(n)}function US(){Ff=!1,Ea!==null&&Hl(Ea)&&(Ea=null),Ta!==null&&Hl(Ta)&&(Ta=null),ba!==null&&Hl(ba)&&(ba=null),So.forEach(O_),xo.forEach(O_)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,Ff||(Ff=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,US)))}var Vl=null;function P_(e){Vl!==e&&(Vl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Bf(r||a)===null)continue;break}var f=b(a);f!==null&&(e.splice(n,3),n-=3,Au(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Mo(e){function n(N){return Gl(N,e)}Ea!==null&&Gl(Ea,e),Ta!==null&&Gl(Ta,e),ba!==null&&Gl(ba,e),So.forEach(n),xo.forEach(n);for(var a=0;a<Aa.length;a++){var r=Aa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],v=c[nn]||null;if(typeof f=="function")v||P_(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[nn]||null)T=v.formAction;else if(Bf(c)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),P_(a)}}}function If(e){this._internalRoot=e}kl.prototype.render=If.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=qn();C_(a,r,e,n,null,null)},kl.prototype.unmount=If.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Ys(),C_(e.current,2,null,e,null,null),bl(),n[Ui]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=wr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&N_(e)}};var z_=t.version;if(z_!=="19.0.0")throw Error(s(527,z_,"19.0.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=it(n),e=e!==null?Et(e):null,e=e===null?null:e.stateNode,e};var LS={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:C,findFiberByHostInstance:Li,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{qt=Xl.inject(LS),Gt=Xl}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=$p,f=tm,v=em,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=A_(e,1,!1,null,null,a,r,c,f,v,T,null),e[Ui]=n.current,Mf(e.nodeType===8?e.parentNode:e),new If(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=$p,v=tm,T=em,N=null,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(V=a.formState)),n=A_(e,1,!0,n,a??null,r,c,f,v,T,N,V),n.context=R_(null),a=n.current,r=qn(),c=ma(r),c.callback=null,_a(a,c,r),n.current.lanes=r,An(n,r),Ri(n),e[Ui]=n.current,Mf(e),new kl(n)},wo.version="19.0.0",wo}var Xg;function cA(){if(Xg)return vh.exports;Xg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),vh.exports=lA(),vh.exports}var uA=cA();const fA=Av(uA),zc=new Jx,No=new oi(75,window.innerWidth/window.innerHeight,.1,1e3),hA=document.getElementById("webgl-container"),ra=new Vb({antialias:!0,alpha:!0});ra.setSize(window.innerWidth,window.innerHeight);hA.appendChild(ra.domElement);ra.domElement.style.position="fixed";ra.domElement.style.top="10em";ra.domElement.style.left="0";ra.domElement.style.zIndex="-1";const Rv=new Xb(No,ra.domElement);No.position.set(0,0,50);Rv.update();const wc=[],dA=10,pA=1.5,mA=new Lc({color:0,emissive:65484});for(let o=0;o<dA;o++){const t=new Oc(pA,16,16),i=new vi(t,mA);i.position.set(Math.random()*30-15,Math.random()*30-15,Math.random()*30-15),zc.add(i),wc.push(i)}const Cv=[],_A=new vv({color:0,linewidth:3}),Wg=new yi;wc.forEach((o,t)=>{wc.forEach((i,s)=>{if(t!==s&&Math.random()>.7){const l=[o.position.clone(),i.position.clone()];Wg.setFromPoints(l);const u=new ey(Wg.clone(),_A);zc.add(u),Cv.push({line:u,start:o,end:i,progress:0})}})});const wv=[],gA=new Lc({color:0});wc.forEach(o=>{for(let t=0;t<3;t++){const i=new Oc(.3,8,8),s=new vi(i,gA);zc.add(s),wv.push({orbiter:s,neuron:o,angle:Math.random()*Math.PI*2})}});function Dv(){requestAnimationFrame(Dv),wv.forEach(o=>{o.angle+=.02;const t=2.5;o.orbiter.position.set(o.neuron.position.x+t*Math.cos(o.angle),o.neuron.position.y+t*Math.sin(o.angle),o.neuron.position.z+t*Math.sin(o.angle*.5))}),Cv.forEach(o=>{o.progress+=.02,o.progress>1&&(o.progress=0);const t=o.start.position,i=o.end.position,s=t.clone().lerp(i,o.progress),l=new yi().setFromPoints([t,s]);o.line.geometry.dispose(),o.line.geometry=l}),Rv.update(),ra.render(zc,No)}Dv();window.addEventListener("resize",()=>{ra.setSize(window.innerWidth,window.innerHeight),No.aspect=window.innerWidth/window.innerHeight,No.updateProjectionMatrix()});const qg=["Exploring alternative model architectures","Surgery of manifolds associated with reasoning","Information theory based mechanistic interpretation","Alternatives to RL scaling","Discovery of new inductive biases","Diving deep into automated theorem proving","Resurrecting of Solomonoff induction"];function vA(){const[o,t]=Ec.useState(0),[i,s]=Ec.useState(950);return Ec.useEffect(()=>{const l=setInterval(()=>{t(u=>(u+1)%qg.length)},i);return()=>clearInterval(l)},[o,i]),Uo.createElement("div",{style:{textAlign:"center",marginTop:"20vh",fontFamily:"Arial, sans-serif"}},Uo.createElement("h1",{style:{fontSize:"2.5em",fontWeight:"bold"}},"LLM-Engineering"),Uo.createElement("p",{style:{fontSize:"1.5em",marginTop:"10px"}},qg[o]),Uo.createElement("h3",{style:{fontSize:"1.5em",fontWeight:"bold"}},"Engineering better reasoning models to build the future"))}fA.createRoot(document.getElementById("root")).render(Uo.createElement(vA,null));
