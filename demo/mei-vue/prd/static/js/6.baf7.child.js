webpackJsonp([6],{389:function(r,e){var a=function(){var r=this,e=r.$createElement,a=r._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs10:""}},[a("v-card",[a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("span",[r._v("Scheme")]),r._v(" "),a("v-switch",{attrs:{primary:"",label:"Dark"},model:{value:r.dark,callback:function(e){r.dark=e},expression:"dark"}})],1),r._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("span",[r._v("Drawer")]),r._v(" "),r._l(r.drawers,function(e){return a("v-radio",{key:e,attrs:{primary:"",label:e,value:e.toLowerCase()},model:{value:r.primaryDrawer.type,callback:function(e){r.$set(r.primaryDrawer,"type",e)},expression:"primaryDrawer.type"}})}),r._v(" "),a("v-switch",{attrs:{label:"Clipped",primary:""},model:{value:r.primaryDrawer.clipped,callback:function(e){r.$set(r.primaryDrawer,"clipped",e)},expression:"primaryDrawer.clipped"}}),r._v(" "),a("v-switch",{attrs:{label:"Floating",primary:""},model:{value:r.primaryDrawer.floating,callback:function(e){r.$set(r.primaryDrawer,"floating",e)},expression:"primaryDrawer.floating"}}),r._v(" "),a("v-switch",{attrs:{label:"Mini",primary:""},model:{value:r.primaryDrawer.mini,callback:function(e){r.$set(r.primaryDrawer,"mini",e)},expression:"primaryDrawer.mini"}})],2),r._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("span",[r._v("Footer")]),r._v(" "),a("v-switch",{attrs:{label:"Fixed",primary:""},model:{value:r.footer.fixed,callback:function(e){r.$set(r.footer,"fixed",e)},expression:"footer.fixed"}})],1)],1)],1),r._v(" "),a("v-card-actions",[a("v-spacer"),r._v(" "),a("v-btn",{attrs:{flat:""}},[r._v("Cancel")]),r._v(" "),a("v-btn",{attrs:{flat:"",primary:""}},[r._v("Submit")])],1)],1)],1)],1)],1)},t=[];r.exports={render:a,staticRenderFns:t}},402:function(r,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=a(17),i=a.n(t),n=a(20),l={name:"vuetifyDemo",components:{},data:function(){return{}},computed:i()({},Object(n.mapState)({drawers:function(r){return r.demoVuetify.drawers},primaryDrawer:function(r){return r.demoVuetify.primaryDrawer},footer:function(r){return r.demoVuetify.footer}})),created:function(){},mounted:function(){},methods:{}},o=a(389),s=a.n(o),c=a(15),p=!1,u=null,v=null,m=null,f=c(l,s.a,p,u,v,m);e.default=f.exports}});