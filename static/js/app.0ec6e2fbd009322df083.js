webpackJsonp([0],{"+MFH":function(t,e,i){t.exports=i.p+"static/img/cordova.d6328d6.png"},"+p9D":function(t,e){},"/DYm":function(t,e,i){t.exports=i.p+"static/img/css3.4ba6ee8.png"},"1B1C":function(t,e){},"2E5M":function(t,e,i){t.exports=i.p+"static/img/js.dff36ba.png"},"2szS":function(t,e,i){t.exports=i.p+"static/img/html5.8cce726.png"},EOZu:function(t,e,i){t.exports=i.p+"static/img/nodejs.6453241.png"},IzwK:function(t,e,i){t.exports=i.p+"static/img/pwa.8262741.png"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={name:"Menu",data:function(){return{slide:{in:!1,out:!1}}},created:function(){var t=this;window.addEventListener("resize",function(){t.menuHideHelper()})},methods:{menuHideHelper:function(){window.innerWidth>=500&&(this.slide.in||this.slide.out)&&(this.slide.in=!1,this.slide.out=!1)},hideMenu:function(){this.slide.in&&this.slideMenuOut()},slideMenuIn:function(){this.slide.in=!0,this.slide.out=!1},slideMenuOut:function(){this.slide.out=!0,this.slide.in=!1}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu-wrapper"},[i("div",{staticClass:"menu-icon",on:{click:function(e){return t.slideMenuIn()}}},[i("i",{staticClass:"fas fa-bars"})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.slide.in,expression:"slide.in"}],staticClass:"menu-background",on:{click:function(e){return t.slideMenuOut()}}}),t._v(" "),i("div",{staticClass:"menu-body-wrapper",class:{menu_slide_in:t.slide.in,menu_slide_out:t.slide.out}},[i("div",[i("ul",[i("li",[i("router-link",{attrs:{to:"/about"},nativeOn:{click:function(e){return t.hideMenu(e)}}},[t._v("About")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/projectexperience"},nativeOn:{click:function(e){return t.hideMenu(e)}}},[t._v("Project Experience")])],1),t._v(" "),i("li",[i("router-link",{attrs:{to:"/interactivesamples"},nativeOn:{click:function(e){return t.hideMenu(e)}}},[t._v("Interactive Samples")])],1)])])])])},staticRenderFns:[]};var o={name:"App",created:function(){var t=window.location.href.split("?")[1];console.log("possible_redirect ",t),t&&("/projectexperience"===t||"/interactivesamples"===t?this.$router.push("/"+t):this.$router.push("/about"))},components:{Menu:i("VU/8")(a,s,!1,function(t){i("+p9D")},"data-v-1dabee10",null).exports}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Menu"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var l=i("VU/8")(o,r,!1,function(t){i("1B1C")},null,null).exports,v=i("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flexy title"},[n("div",[n("h1",[t._v("Michael Kovacsik")]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:michaelkovacsik@yahoo.com"}},[t._v("michaelkovacsik@yahoo.com")])])]),t._v(" "),n("div",[n("img",{staticClass:"self",attrs:{src:"https://s3.amazonaws.com/kov-img/img/self.jpg"}})])]),t._v(" "),n("div",[n("div",[n("h2",[t._v("I am a Web Developer")]),t._v(" "),n("div",[t._v("With over 3 years experience in:")]),t._v(" "),n("div",{staticClass:"flexy skills"},[n("div",[n("img",{attrs:{src:i("2szS")}}),t._v(" "),n("h3",[t._v("HTML5")]),t._v(" "),n("ul",[n("li",[t._v("Web forms")]),t._v(" "),n("li",[t._v("Validation")]),t._v(" "),n("li",[t._v("HTML5 tags")])])]),t._v(" "),n("div",[n("img",{attrs:{src:i("/DYm")}}),t._v(" "),n("h3",[t._v("CSS3")]),t._v(" "),n("ul",[n("li",[t._v("Mobile first responsive pages")]),t._v(" "),n("li",[t._v("Flexbox")]),t._v(" "),n("li",[t._v("Bootstrap")])])]),t._v(" "),n("div",[n("img",{attrs:{src:i("2E5M")}}),t._v(" "),n("h3",[t._v("JavaScript")]),t._v(" "),n("ul",[n("li",[t._v("ES2015 syntax")]),t._v(" "),n("li",[t._v("MVC frameworks (VueJS)")]),t._v(" "),n("li",[t._v("Visual charting libraries (Highcharts)")]),t._v(" "),n("li",[t._v("Front End networking")]),t._v(" "),n("li",[t._v("Debugging")])])]),t._v(" "),n("div",[n("img",{attrs:{src:i("EOZu")}}),t._v(" "),n("h3",[t._v("NodeJS")]),t._v(" "),n("ul",[n("li",[t._v("ExpressJS")]),t._v(" "),n("li",[t._v("RESTful APIs")]),t._v(" "),n("li",[t._v("CRON")])])]),t._v(" "),n("div",[n("img",{attrs:{src:i("wOL9")}}),t._v(" "),n("h3",[t._v("Cloud")]),t._v(" "),n("ul",[n("li",[t._v("AWS EC2 instances")]),t._v(" "),n("li",[t._v("AWS Lambda")]),t._v(" "),n("li",[t._v("AWS DynamoDB")]),t._v(" "),n("li",[t._v("Virtual machines")])])]),t._v(" "),n("div",[n("img",{attrs:{src:i("+MFH")}}),t._v(" "),n("h3",[t._v("Mobile")]),t._v(" "),n("ul",[n("li",[t._v("Hybrid Apps (Cordova / PhoneGap)")]),t._v(" "),n("li",[t._v("Mobile specific styling")])])])])])]),t._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[t._v("Modern Web Tech Skills")]),t._v(" "),n("img",{attrs:{src:i("IzwK")}}),t._v(" "),n("ul",[n("li",[t._v("Progressive web apps")]),t._v(" "),n("li",[t._v("Performance optimization")]),t._v(" "),n("li",[t._v("Caching")]),t._v(" "),n("li",[t._v("Service workers")]),t._v(" "),n("li",[t._v("Real time data display")])])])]),t._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[t._v("Education")]),t._v(" "),n("img",{attrs:{src:i("g4wL")}}),t._v(" "),n("p",[t._v("\n        B.A. in Multimedia from the University of Advancing Technology\n      ")])])]),t._v(" "),n("div",{staticClass:"flexy"},[n("div",[n("h2",[t._v("Non Web Dev")]),t._v(" "),n("img",{attrs:{src:i("t/w3")}}),t._v(" "),n("p",[t._v("\n        In my spare time, I enjoy playing and developing video games.\n        I developed and published a mobile Android game using Unity3D and C# scripting called Blind Path:\n        ")]),n("p",[n("a",{attrs:{href:"https://play.google.com/store/apps/details?id=com.kovacsik.blind_path2",target:"_blank"}},[t._v("Blind Path on Google Play Store")])]),t._v("\n        I am currently developing another mobile Android game.\n      "),n("p")])])])}]};var d=i("VU/8")({name:"About",data:function(){return{img:{html:"./assets/img/logos/html5.png"}}}},c,!1,function(t){i("lXsF")},"data-v-64258147",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",[t._v("Project Experience")]),t._v(" "),i("p",[t._v("Most recently worked as a Software Developer at an international bank")]),t._v(" "),i("div",{staticClass:"flexy"},[i("div",{staticClass:"left"},[i("h2",[t._v("Dashboards")]),t._v(" "),i("p",[t._v("\n        Developed multiple dashboards including the Front End UI / UX, Back End server / RESTful APIs, and database implementation.\n        Built using HTML, CSS, JavaScript, VueJS, NodeJS, MongoDB, and AWS.\n      ")])]),t._v(" "),i("div",[i("figure",[i("picture",[i("a",{attrs:{href:"https://s3.amazonaws.com/kov-img/img/dashboards/full_size/mk_internal_dashboard.png",target:"_blank"}},[i("img",{attrs:{src:"https://s3.amazonaws.com/kov-img/img/dashboards/thumbnails/mk_internal_dashboard.png",alt:"sample dashboard with mock data"}})])]),t._v(" "),i("figcaption",[i("strong",[t._v("Sample dashboard with mock data")])])])])]),t._v(" "),i("div",{staticClass:"flexy flexy-opposite"},[i("div",[i("figure",[i("picture",[i("a",{attrs:{href:"https://s3.amazonaws.com/kov-img/img/dashboards/full_size/mk_analytic_tools.png",target:"_blank"}},[i("img",{attrs:{src:"https://s3.amazonaws.com/kov-img/img/dashboards/full_size/mk_analytic_tools.png",alt:"sample web tool with mock data"}})])]),t._v(" "),i("figcaption",[i("strong",[t._v("Sample web tool with mock data")])])])]),t._v(" "),i("div",{staticClass:"right"},[i("h2",[t._v("Web Tools")]),t._v(" "),i("p",[t._v("\n        Developed multiple UI tools for daily task management, internal operations, and analytical analysis for multiple mobile apps.\n        Built using HTML, CSS, JavaScript, VueJS, NodeJS, MongoDB, and AWS.\n      ")])])]),t._v(" "),i("div",{staticClass:"flexy"},[i("div",{staticClass:"left"},[i("h2",[t._v("Mobile")]),t._v(" "),i("p",[t._v("\n        Worked with a team of developers and designers to develop a hybrid mobile app.\n      ")])]),t._v(" "),i("div",[i("figure",[i("picture",[i("a",{attrs:{href:"https://www.tuyyo.love/",target:"_blank"}},[i("img",{attrs:{src:"https://s3.amazonaws.com/kov-img/img/tuyyo/tuyyo.png",alt:"Tuyyo Money Transfer app"}})])]),t._v(" "),i("figcaption",[i("strong",[t._v("Tuyyo Money Transfer app")])])])])])])}]};var u=i("VU/8")({name:"ProjectExperience",data:function(){return{}}},p,!1,function(t){i("SrGc")},"data-v-4b09eacd",null).exports,_={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Interactive Samples")])])}]};var m=i("VU/8")({name:"InteractiveSamples",data:function(){return{}}},_,!1,function(t){i("s/nB")},"data-v-2376739c",null).exports;n.a.use(v.a);var h=new v.a({mode:"history",base:Object({NODE_ENV:"production"}).BASE_URL,routes:[{path:"/",redirect:{name:"about"}},{path:"/about",name:"about",component:d},{path:"/projectexperience",name:"projectexperience",component:u},{path:"/interactivesamples",name:"interactivesamples",component:m}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:h,components:{App:l},template:"<App/>"})},SrGc:function(t,e){},g4wL:function(t,e,i){t.exports=i.p+"static/img/uat.0f76f0e.png"},lXsF:function(t,e){},"s/nB":function(t,e){},"t/w3":function(t,e,i){t.exports=i.p+"static/img/unity3d.a8908d7.png"},wOL9:function(t,e,i){t.exports=i.p+"static/img/aws.c158a2e.png"}},["NHnr"]);
//# sourceMappingURL=app.0ec6e2fbd009322df083.js.map