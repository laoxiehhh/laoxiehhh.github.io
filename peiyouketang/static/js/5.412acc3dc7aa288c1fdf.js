webpackJsonp([5],{GF4k:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("Dd8w"),n=o.n(r),i={name:"SIdentify",props:{identifyCode:{type:String,default:"1234"},fontSizeMin:{type:Number,default:16},fontSizeMax:{type:Number,default:40},backgroundColorMin:{type:Number,default:180},backgroundColorMax:{type:Number,default:240},colorMin:{type:Number,default:50},colorMax:{type:Number,default:160},lineColorMin:{type:Number,default:40},lineColorMax:{type:Number,default:180},dotColorMin:{type:Number,default:0},dotColorMax:{type:Number,default:255},contentWidth:{type:Number,default:112},contentHeight:{type:Number,default:38}},methods:{randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},randomColor:function(t,e){return"rgb("+this.randomNum(t,e)+","+this.randomNum(t,e)+","+this.randomNum(t,e)+")"},drawPic:function(){var t=document.getElementById("s-canvas").getContext("2d");t.textBaseline="bottom",t.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),t.fillRect(0,0,this.contentWidth,this.contentHeight);for(var e=0;e<this.identifyCode.length;e++)this.drawText(t,this.identifyCode[e],e);this.drawLine(t),this.drawDot(t)},drawText:function(t,e,o){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";var r=(o+1)*(this.contentWidth/(this.identifyCode.length+1)),n=this.randomNum(this.fontSizeMax,this.contentHeight-5),i=this.randomNum(-45,45);t.translate(r,n),t.rotate(i*Math.PI/180),t.fillText(e,0,0),t.rotate(-i*Math.PI/180),t.translate(-r,-n)},drawLine:function(t){for(var e=0;e<8;e++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()},drawDot:function(t){for(var e=0;e<100;e++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight),1,0,2*Math.PI),t.fill()}},watch:{identifyCode:function(){this.drawPic()}},mounted:function(){this.drawPic()}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"s-canvas"},[e("canvas",{attrs:{id:"s-canvas",width:this.contentWidth,height:this.contentHeight}})])},staticRenderFns:[]},s=o("VU/8")(i,a,!1,null,null,null).exports,l=o("WyoN"),d=o("9rMa"),u={name:"Login",data:function(){return{identifyCodes:"1234567890",identifyCode:"",errorKey:!1,errInfo:"",ruleForm:{name:"",password:"",validate:"",type:[]},len:0,dot:0,eyeStyle:{transform:"rotate(0deg)"},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],validate:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},created:function(){this.ruleForm.name=localStorage.ms_username||"",0!==this.ruleForm.name.length&&(this.len=this.ruleForm.name.length,this.inputLen())},mounted:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4),Object(l.a)("Mycanvas")},updated:function(){this.len=this.ruleForm.name.length},computed:n()({},Object(d.c)(["course","grade"])),methods:n()({},Object(d.b)(["getUserInfo","hasLogin"]),{submitForm:function(t){var e=this;this.$refs[t].validate(function(t){t&&(e.ruleForm.validate===e.identifyCode?e.$http.post("https://www.easy-mock.com/mock/5afa75091483315259546162/login/checkInfo",{username:e.ruleForm.name,password:e.ruleForm.password}).then(function(t){console.log(t);t.data.data;var o=t.data.key;if(-1==o)e.errorKey=!0,e.errInfo="该用户名不存在！";else if(0==o)e.errorKey=!0,e.errInfo="密码错误";else if(1==o){var r=t.data;e.getUserInfo(r),e.hasLogin(!0),0!==e.ruleForm.type.length&&localStorage.setItem("ms_username",e.ruleForm.name),e.$router.push("/home/allcourse/"+e.grade+"/"+e.course)}}).catch(function(t){console.log(t)}):(e.errorKey=!0,e.errInfo="验证码输入不正确",e.refreshCode()))})},handleCommand:function(){this.$router.push("/register")},inputLen:function(){if(this.len<=17){var t=this.len/17*125;this.dot=-125-t,this.eyeStyle.transform="rotate("+this.dot+"deg)"}else this.eyeStyle.transform="rotate("+this.dot+"deg)"},inputFocus:function(t){"name"==t?this.eyeStyle.transform="rotate("+this.dot+"deg)":"password"==t&&(this.eyeStyle.transform="rotate(0deg)")},makeCode:function(t,e){for(var o=0;o<e;o++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)}}),components:{Identify:s}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("canvas",{attrs:{id:"Mycanvas"}}),t._v(" "),o("div",{staticClass:"login-wrap"},[o("div",{staticClass:"move-area"},[o("div",{staticClass:"container"},[o("div",{staticClass:"eye",style:t.eyeStyle}),t._v(" "),o("div",{staticClass:"eye",style:t.eyeStyle})])]),t._v(" "),o("div",{staticClass:"ms-login"},[o("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0px"}},[t.errorKey?o("div",[o("span",{staticStyle:{color:"red"}},[t._v(t._s(t.errInfo))])]):t._e(),t._v(" "),o("el-form-item",{attrs:{prop:"name"}},[o("el-input",{attrs:{placeholder:"账号"},on:{input:t.inputLen,focus:function(e){t.inputFocus("name")}},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"密码"},on:{focus:function(e){t.inputFocus("password")}},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"validate"}},[o("el-input",{staticClass:"validate-code",attrs:{placeholder:"验证码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submitForm("ruleForm")}},model:{value:t.ruleForm.validate,callback:function(e){t.$set(t.ruleForm,"validate",e)},expression:"ruleForm.validate"}}),t._v(" "),o("div",{staticClass:"code",on:{click:t.refreshCode}},[o("Identify",{attrs:{identifyCode:t.identifyCode}})],1)],1),t._v(" "),o("div",{staticClass:"login-btn"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("登录")])],1),t._v(" "),o("el-form-item",{staticClass:"login-remember"},[o("el-checkbox-group",{model:{value:t.ruleForm.type,callback:function(e){t.$set(t.ruleForm,"type",e)},expression:"ruleForm.type"}},[o("el-checkbox",{attrs:{label:"记住账号？",name:"type"}})],1)],1),t._v(" "),o("p",{staticClass:"register",on:{click:function(e){t.handleCommand()}}},[t._v("注册")])],1)],1)])])},staticRenderFns:[]};var h=o("VU/8")(u,c,!1,function(t){o("Ph9q")},"data-v-6b90ed5a",null);e.default=h.exports},Ph9q:function(t,e){},WyoN:function(t,e,o){"use strict";o.d(e,"a",function(){return r});var r=function(t){var e=window.innerWidth,o=window.innerHeight,r=35,n=document.getElementById(t);n.width=e,n.height=o;var i=n.getContext("2d");i.strokeStyle="rgba(0,0,0,0.1)",i.strokeWidth=1,i.fillStyle="rgba(0,0,0,0.1)";var a=[];function s(t,e){var o=arguments[1]||0;return Math.floor(Math.random()*(t-o+1)+o)}function l(t,e,o,r,n,i){var a=new function(t,e,o,r,n){this.x=t,this.y=e,this.r=o,this.moveX=r,this.moveY=n}(e,o,r,n,i);return t.beginPath(),t.arc(a.x,a.y,a.r,0,2*Math.PI),t.closePath(),t.fill(),a}function d(){i.clearRect(0,0,n.width,n.height);for(var t=0;t<r;t++)l(i,a[t].x,a[t].y,a[t].r);for(t=0;t<r;t++)for(var e=0;e<r;e++)if(t+e<r){var o=Math.abs(a[t+e].x-a[t].x),s=Math.abs(a[t+e].y-a[t].y),d=1/Math.sqrt(o*o+s*s)*7-.009,u=d>.03?.03:d;u>0&&(c=i,h=a[t].x,m=a[t].y,f=a[t+e].x,y=a[t+e].y,void 0,p=new function(t,e,o,r,n){this.beginX=t,this.beginY=e,this.closeX=o,this.closeY=r,this.o=n}(h,m,f,y,v=u),c.beginPath(),c.strokeStyle="rgba(0,0,0,"+v+")",c.moveTo(p.beginX,p.beginY),c.lineTo(p.closeX,p.closeY),c.closePath(),c.stroke())}var c,h,m,f,y,v,p}!function(){a=[];for(var t=0;t<r;t++)a.push(l(i,s(e),s(o),s(15,2),s(10,-10)/40,s(10,-10)/40));d()}(),setInterval(function(){for(var t=0;t<r;t++){var n=a[t];n.x+=n.moveX,n.y+=n.moveY,n.x>e?n.x=0:n.x<0&&(n.x=e),n.y>o?n.y=0:n.y<0&&(n.y=o)}d()},16)}}});
//# sourceMappingURL=5.412acc3dc7aa288c1fdf.js.map