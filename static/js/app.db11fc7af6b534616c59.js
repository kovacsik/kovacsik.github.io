webpackJsonp([0],{"+MFH":function(e,i,t){e.exports=t.p+"static/img/cordova.d6328d6.png"},"+p9D":function(e,i){},"/DYm":function(e,i,t){e.exports=t.p+"static/img/css3.4ba6ee8.png"},"2E5M":function(e,i,t){e.exports=t.p+"static/img/js.dff36ba.png"},"2szS":function(e,i,t){e.exports=t.p+"static/img/html5.8cce726.png"},CqB0:function(e,i){},EOZu:function(e,i,t){e.exports=t.p+"static/img/nodejs.6453241.png"},G9H6:function(e,i){},IzwK:function(e,i,t){e.exports=t.p+"static/img/pwa.8262741.png"},NHnr:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=t("7+uW"),s={name:"Menu",data:function(){return{slide:{in:!1,out:!1}}},created:function(){var e=this;window.addEventListener("resize",function(){e.menuHideHelper()})},methods:{menuHideHelper:function(){window.innerWidth>=500&&(this.slide.in||this.slide.out)&&(this.slide.in=!1,this.slide.out=!1)},hideMenu:function(){this.slide.in&&this.slideMenuOut()},slideMenuIn:function(){this.slide.in=!0,this.slide.out=!1},slideMenuOut:function(){this.slide.out=!0,this.slide.in=!1}}},a={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"menu-wrapper"},[t("div",{staticClass:"menu-icon",on:{click:function(i){return e.slideMenuIn()}}},[t("i",{staticClass:"fas fa-bars"})]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.slide.in,expression:"slide.in"}],staticClass:"menu-background",on:{click:function(i){return e.slideMenuOut()}}}),e._v(" "),t("div",{staticClass:"menu-body-wrapper",class:{menu_slide_in:e.slide.in,menu_slide_out:e.slide.out}},[t("div",[t("ul",[t("li",[t("router-link",{attrs:{to:"/about"},nativeOn:{click:function(i){return e.hideMenu(i)}}},[e._v("About")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/projectexperience"},nativeOn:{click:function(i){return e.hideMenu(i)}}},[e._v("Project Experience")])],1),e._v(" "),t("li",[t("router-link",{attrs:{to:"/interactivesamples"},nativeOn:{click:function(i){return e.hideMenu(i)}}},[e._v("Interactive Samples")])],1)])])])])},staticRenderFns:[]};var r={name:"App",components:{Menu:t("VU/8")(s,a,!1,function(e){t("+p9D")},"data-v-1dabee10",null).exports}},o={render:function(){var e=this.$createElement,i=this._self._c||e;return i("div",{attrs:{id:"app"}},[i("Menu"),this._v(" "),i("router-view")],1)},staticRenderFns:[]};var v=t("VU/8")(r,o,!1,function(e){t("CqB0")},null,null).exports,c=t("/ocq"),l={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("div",{staticClass:"flexy title"},[n("div",[n("h1",[e._v("Michael Kovacsik")]),e._v(" "),n("p",[n("a",{attrs:{href:"mailto:michaelkovacsik@yahoo.com"}},[e._v("michaelkovacsik@yahoo.com")])])]),e._v(" "),n("div",[n("img",{staticClass:"self",attrs:{src:"https://s3.amazonaws.com/kov-img/img/self.jpg"}})])]),e._v(" "),n("div",[n("div",[n("h2",[e._v("I am a Web Developer")]),e._v(" "),n("div",[e._v("With over 3 years experience in:")]),e._v(" "),n("div",{staticClass:"flexy skills"},[n("div",[n("img",{attrs:{src:t("2szS")}}),e._v(" "),n("h3",[e._v("HTML5")]),e._v(" "),n("ul",[n("li",[e._v("Web forms")]),e._v(" "),n("li",[e._v("Validation")]),e._v(" "),n("li",[e._v("HTML5 tags")])])]),e._v(" "),n("div",[n("img",{attrs:{src:t("/DYm")}}),e._v(" "),n("h3",[e._v("CSS3")]),e._v(" "),n("ul",[n("li",[e._v("Mobile first responsive pages")]),e._v(" "),n("li",[e._v("Flexbox")]),e._v(" "),n("li",[e._v("Bootstrap")])])]),e._v(" "),n("div",[n("img",{attrs:{src:t("2E5M")}}),e._v(" "),n("h3",[e._v("JavaScript")]),e._v(" "),n("ul",[n("li",[e._v("ES2015 syntax")]),e._v(" "),n("li",[e._v("MVC frameworks (VueJS)")]),e._v(" "),n("li",[e._v("Visual charting libraries (Highcharts)")]),e._v(" "),n("li",[e._v("Front End networking")]),e._v(" "),n("li",[e._v("Debugging")])])]),e._v(" "),n("div",[n("img",{attrs:{src:t("EOZu")}}),e._v(" "),n("h3",[e._v("NodeJS")]),e._v(" "),n("ul",[n("li",[e._v("ExpressJS")]),e._v(" "),n("li",[e._v("RESTful APIs")]),e._v(" "),n("li",[e._v("CRON")])])]),e._v(" "),n("div",[n("img",{attrs:{src:t("wOL9")}}),e._v(" "),n("h3",[e._v("Cloud")]),e._v(" "),n("ul",[n("li",[e._v("AWS EC2 instances")]),e._v(" "),n("li",[e._v("AWS Lambda")]),e._v(" "),n("li",[e._v("AWS DynamoDB")]),e._v(" "),n("li",[e._v("Virtual machines")])])]),e._v(" "),n("div",[n("img",{attrs:{src:t("+MFH")}}),e._v(" "),n("h3",[e._v("Mobile")]),e._v(" "),n("ul",[n("li",[e._v("Hybrid Apps (Cordova / PhoneGap)")]),e._v(" "),n("li",[e._v("Mobile specific styling")])])])])])]),e._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[e._v("Modern Web Tech Skills")]),e._v(" "),n("img",{attrs:{src:t("IzwK")}}),e._v(" "),n("ul",[n("li",[e._v("Progressive web apps")]),e._v(" "),n("li",[e._v("Performance optimization")]),e._v(" "),n("li",[e._v("Caching")]),e._v(" "),n("li",[e._v("Service workers")]),e._v(" "),n("li",[e._v("Real time data display")])])])]),e._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[e._v("Education")]),e._v(" "),n("img",{attrs:{src:t("g4wL")}}),e._v(" "),n("p",[e._v("\n        B.A. in Multimedia from the University of Advancing Technology\n      ")])])]),e._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[e._v("Non Web Dev")]),e._v(" "),n("img",{attrs:{src:t("t/w3")}}),e._v(" "),n("p",[e._v("\n        In my spare time, I enjoy playing and developing video games.\n        I developed and published a mobile Android game using Unity3D and C# scripting called Blind Path:\n        ")]),n("p",[n("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.kovacsik.blind_path2",target:"_blank"}},[e._v("Blind Path on Google Play Store")])]),e._v("\n        I am currently developing another mobile Android game.\n      "),n("p")])])])}]};var u=t("VU/8")({name:"About",data:function(){return{img:{html:"./assets/img/logos/html5.png"}}}},l,!1,function(e){t("G9H6")},"data-v-7950cf50",null).exports,d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h1",[this._v("Project Experience")])])}]};var _=t("VU/8")({name:"ProjectExperience",data:function(){return{}}},d,!1,function(e){t("sfai")},"data-v-d356e578",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,i=this._self._c||e;return i("div",[i("h1",[this._v("Interactive Samples")])])}]};var m=t("VU/8")({name:"InteractiveSamples",data:function(){return{}}},p,!1,function(e){t("s/nB")},"data-v-2376739c",null).exports;n.a.use(c.a);var h=new c.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",redirect:{name:"about"}},{path:"/about",name:"about",component:u},{path:"/projectexperience",name:"projectexperience",component:_},{path:"/interactivesamples",name:"interactivesamples",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:h,components:{App:v},template:"<App/>"})},g4wL:function(e,i,t){e.exports=t.p+"static/img/uat.0f76f0e.png"},"s/nB":function(e,i){},sfai:function(e,i){},"t/w3":function(e,i,t){e.exports=t.p+"static/img/unity3d.a8908d7.png"},wOL9:function(e,i,t){e.exports=t.p+"static/img/aws.c158a2e.png"}},["NHnr"]);
//# sourceMappingURL=app.db11fc7af6b534616c59.js.map