!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(t,n,o){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var s=o.call(t,n||"default");if("object"!==e(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t}System.register(["./index-legacy.de31069a.js","./index-legacy.be4178af.js","./router-legacy.bad15a34.js","./useStore-legacy.72a3c7cd.js","./logo-legacy.1011e19b.js"],(function(e,o){"use strict";var s,i,a,c,r,l,u,d,g,p,f,m,v,b,h=document.createElement("style");return h.textContent=".menu_content[data-v-88a164d9]{width:60px;height:100%;background-color:#fff;border-right:1px solid rgb(227,230,235);box-sizing:border-box}.menu_content .menu_wraper[data-v-88a164d9]{width:48px;height:48px;margin-bottom:8px;display:flex;align-items:center;justify-content:center}.menu_content .menu_wraper .menu_logo[data-v-88a164d9]{width:26px;height:26px;cursor:pointer}.menu_content .menu_ig[data-v-88a164d9]{width:16px;height:16px;margin-bottom:4px;cursor:pointer}.menu_content .menu_text[data-v-88a164d9]{color:#333;font-size:12px;transform:scale(.833)}.menu_content .menu_list[data-v-88a164d9]{width:60px;height:60px;display:flex;align-items:center;justify-content:center;margin-bottom:4px}.menu_content .menu_box[data-v-88a164d9]{width:48px;height:48px;border-radius:8px;background-color:#fff;display:flex;align-items:center;justify-content:center;flex-direction:column;cursor:pointer}.menu_content .menu_box-select[data-v-88a164d9]{background-color:#f4f5f6}.menu_projects[data-v-88a164d9]{position:absolute;left:48px;top:48px;background:#fff;max-width:240px;max-height:500px;padding:15px 0;border-radius:4px;box-shadow:0 0 10px #ccc;z-index:666;box-sizing:border-box}.menu_projects .menu_list[data-v-88a164d9]{height:40px;min-width:180px;box-sizing:border-box;padding:0 20px;display:flex;align-items:center;font-size:14px;cursor:pointer;margin-bottom:10px}.menu_projects .menu_list[data-v-88a164d9]:hover{background:#f7f7f7}.menu_projects .menu_list-select[data-v-88a164d9]{background:#e7eaee;color:#409eff}.menu_projects .menu_list-select[data-v-88a164d9]:hover{background:#e7eaee}.menu_projects .menu_projectName[data-v-88a164d9]{margin-left:10px}.menu_back[data-v-88a164d9]{padding-top:15px;text-align:center;border-top:1px solid rgb(227,230,235);font-size:14px;cursor:pointer}.menu_back[data-v-88a164d9]:hover{color:#409eff}.core_content[data-v-6be609b2]{width:100%;height:100%;overflow:hidden;display:flex}\n",document.head.appendChild(h),{setters:[function(e){s=e.r,i=e.u,a=e.c,c=e.d,r=e.a,l=e.n,u=e.o,d=e.f,g=e.t,p=e.g},function(e){f=e.a},function(e){m=e.g},function(e){v=e.u},function(e){b=e._}],execute:function(){var o=function(){var e,t=a("updateProjectTitle").on,n=s([]),o=s(),r=s(!1),l=m().projectId,u=i(),d=v(),g=f.dataApis,p=g.getProjects,b=g.getDataSystem,h=function(e){return r.value=e},_=function(){p().then((function(e){n.value=null!=e?e:[],c((function(){var e,t,s=null!==(e=null===(t=n.value)||void 0===t?void 0:t.find((function(e){return e.id===o.value})))&&void 0!==e?e:{};s.name="自定义应用"===(null==s?void 0:s.name)?"".concat(null==s?void 0:s.name,"_").concat(s.id):s.name,d.setProjectInfo(null!=s?s:{})}))}))};return e=l,o.value=e,u.setProjectName(e),b({projectId:l}).then((function(e){return e&&u.setConfigs(null!=e?e:[])})),_(),t((function(){_()})),{active:o,list:n,show:r,changeShow:h,listHandle:function(e){if(e.id!==o.value){o.value=null==e?void 0:e.id,h(!1);var t=window.location,n=t.origin,s=t.pathname;window.location.href="".concat(n).concat(s,"?projectId=").concat(e.id)}}}},h=function(e){return new URL(Object.assign({"../../../assets/img/config.svg":"/lowcode-show/assets/config.e8703b76.svg","../../../assets/img/configSelect.svg":"/lowcode-show/assets/configSelect.135a1727.svg","../../../assets/img/data.svg":"/lowcode-show/assets/data.b418b183.svg","../../../assets/img/dataSelect.svg":"/lowcode-show/assets/dataSelect.dd45f2b7.svg","../../../assets/img/logo.svg":"/lowcode-show/assets/logo.c543e827.svg","../../../assets/img/page.svg":"/lowcode-show/assets/page.680458f7.svg","../../../assets/img/pageSelect.svg":"/lowcode-show/assets/pageSelect.f4941896.svg","../../../assets/img/resource.svg":"/lowcode-show/assets/resource.e37bb808.svg","../../../assets/img/resourceSelect.svg":"/lowcode-show/assets/resourceSelect.5487f3ed.svg"})["../../../assets/img/".concat(e,".svg")],self.location).href},_=[{tip:"页面设计",key:"editor",ig:h("page"),igs:h("pageSelect")},{tip:"数据配置",key:"data",ig:h("data"),igs:h("dataSelect")},{tip:"资源配置",key:"resource",ig:h("resource"),igs:h("resourceSelect")},{tip:"应用配置",key:"config",ig:h("config"),igs:h("configSelect")}],x={setup:function(){var e,i,a,c,l=s(null),p=o(),f=(e=r.history.current,i=e.name,a=e.meta.parent,c=s(a||i||"editor"),r.beforeEach((function(e,t,n){var o=e.meta,s=e.name;c.value=(null==o?void 0:o.parent)||s,n()})),{active:c,configs:_,selectHandle:function(e){if(e!==c.value){var t=m(),n=t.projectId,o=t.pageId;r.push({name:e,query:{projectId:n,pageId:o}})}}});u(l,(function(e){var t;(null!==(t=null==e?void 0:e.target)&&void 0!==t?t:{}).className.includes("m_i_g")||p.changeShow(!1)}));var v=d({listApis:p,selectApis:f});return function(e){for(var o=1;o<arguments.length;o++){var s=null!=arguments[o]?arguments[o]:{};o%2?t(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({target:l,backHandle:function(){r.push({name:"lowcode"})}},g(v))}},y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu_content"},[t("div",{staticClass:"menu_wraper m_i_g",on:{click:function(){return e.listApis.changeShow(!e.listApis.show)}}},[t("img",{staticClass:"menu_logo m_i_g",attrs:{src:b}})]),t("div",e._l(e.selectApis.configs,(function(n,o){return t("div",{key:o,staticClass:"menu_list"},[t("div",{staticClass:"menu_box",class:e.selectApis.active===n.key?"menu_box-select":"",on:{click:function(t){return e.selectApis.selectHandle(n.key)}}},[e.selectApis.active===n.key?t("img",{staticClass:"menu_ig",attrs:{src:n.igs}}):t("img",{staticClass:"menu_ig",attrs:{src:n.ig}}),t("span",{staticClass:"menu_text"},[e._v(e._s(n.tip))])])])})),0),e.listApis.show?t("div",{ref:"target",staticClass:"menu_projects"},[e._l(e.listApis.list,(function(n,o){return t("div",{key:o,staticClass:"menu_list",class:e.listApis.active===n.id?"menu_list-select":"",on:{click:function(){return e.listApis.listHandle(n)}}},[t("i",{staticClass:"el-icon-folder"}),t("span",{staticClass:"menu_projectName"},[e._v(e._s("自定义应用"===(null==n?void 0:n.name)?"".concat(null==n?void 0:n.name,"_").concat(n.id):n.name))])])})),t("div",{staticClass:"menu_back",on:{click:e.backHandle}},[e._v("返回主页")])],2):e._e()])},w=l(x,y,[],!1,null,"88a164d9",null,null).exports;e("default",l({components:{Menu:w},setup:function(){(0,p().setType)("pc")}},(function(){var e=this._self._c;return e("div",{staticClass:"core_content"},[e("Menu"),e("router-view")],1)}),[],!1,null,"6be609b2",null,null).exports)}}}))}();