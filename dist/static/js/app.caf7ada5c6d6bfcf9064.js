webpackJsonp([1],{"0P2k":function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i=s("NYxO"),r=s("mtWM"),n=s.n(r),o=s("Rf8U"),c=s.n(o),l=s("ZZvs"),d=s.n(l),u=(s("kAs5"),s("K3J8"),s("Dd8w")),f=s.n(u),v={name:"App",data:function(){return{}},methods:f()({removeCart:function(t){this.$store.dispatch("cartModules/removeCart",t)}},Object(i.b)("cartModules",["getCart"])),computed:f()({},Object(i.c)("cartModules",["cart"]),Object(i.c)(["isLoading"])),created:function(){this.getCart()}},p={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[s("i",{staticClass:"fa fa-heart text-info",attrs:{"aria-hidden":"true"}}),t._v("\n      六角血拼賣賣\n    ")]),t._v(" "),s("div",{staticClass:"dropdown ml-auto"},[s("button",{staticClass:"btn btn-sm btn-cart",attrs:{"data-toggle":"dropdown","data-flip":"false"}},[s("i",{staticClass:"fa fa-shopping-cart text-dark fa-2x",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("unread messages")])]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[s("h6",[t._v("已選擇商品")]),t._v(" "),s("table",{staticClass:"table table-sm"},[s("tbody",t._l(t.cart.carts,function(a){return t.cart.carts.length?s("tr",{key:a.id},[s("td",{staticClass:"align-middle text-center"},[s("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.removeCart(a.id)}}},[s("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+t._s(a.product.unit))]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.total))])]):t._e()}))]),t._v(" "),t._m(0)])])],1),t._v(" "),t._m(1),t._v(" "),s("Loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t._v(" "),s("router-view"),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-primary btn-block"},[a("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),this._v(" 結帳去\n        ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end"},[a("div",{staticClass:"container"},[a("div",{staticClass:"p-3 bg-lighter"},[a("h1",{staticClass:"display-3 font-weight-bold"},[this._v("買到剁手手！最後出清")]),this._v(" "),a("p",{staticClass:"lead"},[this._v("This is a modified jumbotron that occupies\n          the entire horizontal space of its parent.")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"bg-light text-muted py-5"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"list-inline text-center"},[s("li",{staticClass:"list-inline-item"},[t._v("© Copright 2017 六角血拼賣賣")]),t._v(" "),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-info",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-instagram",attrs:{"aria-hidden":"true"}}),t._v(" Instagrame")])]),t._v(" "),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-info",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-facebook-square",attrs:{"aria-hidden":"true"}}),t._v(" Facebook")])]),t._v(" "),s("li",{staticClass:"list-inline-item"},[s("a",{staticClass:"text-info",attrs:{href:"#"}},[t._v("About")])])]),t._v(" "),s("p",{staticClass:"text-center"},[t._v("Made with Bootstrap4")])])])}]};var m=s("VU/8")(v,p,!1,function(t){s("0P2k")},null,null).exports,h=s("/ocq"),C={name:"Home",data:function(){return{searchText:""}},computed:f()({filterData:function(){var t=this;return t.searchText?t.products.filter(function(a){return a.title.toLowerCase().includes(t.searchText.toLowerCase())}):this.products}},Object(i.c)("productsModules",["categories","products"])),methods:f()({addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("cartModules/addtoCart",{id:t,qty:a})}},Object(i.b)("productsModules",["getProducts"])),created:function(){this.getProducts()}},g={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"container main-content mb-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"list-group sticky-top"},[t._l(t.categories,function(a){return s("a",{key:a,staticClass:"list-group-item list-group-item-action",class:{active:a===t.searchText},attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.searchText=a}}},[s("i",{staticClass:"fa fa-street-view",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(a)+"\n          ")])}),t._v(" "),s("a",{staticClass:"list-group-item list-group-item-action",class:{active:""===t.searchText},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.searchText=""}}},[t._v("\n            全部顯示\n          ")])],2)]),t._v(" "),s("div",{staticClass:"col-md-9"},[s("div",{staticClass:"d-flex mb-4"},[s("form",{staticClass:"form-inline my-3 my-lg-0"},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){t.searchText=""}}},[s("i",{staticClass:"fa fa-times"})])])])]),t._v(" "),s("button",{staticClass:"btn btn-outline-primary ml-auto",attrs:{type:"button"},on:{click:t.getProducts}},[t._v("\n            重新取得資料\n          ")])]),t._v(" "),s("div",{staticClass:"tab-pane",attrs:{id:"list-gift"}},[s("div",{staticClass:"row align-items-stretch"},t._l(t.filterData,function(a){return s("div",{key:a.id,staticClass:"col-md-4 mb-4"},[s("div",{staticClass:"card border-0 box-shadow text-center h-100"},[s("img",{staticClass:"card-img-top",attrs:{src:a.image||a.imageUrl,alt:"Card image cap"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v(t._s(a.title))]),t._v(" "),s("p",{staticClass:"card-text text-left"},[t._v(t._s(a.content))])]),t._v(" "),s("div",{staticClass:"card-footer border-top-0 bg-white"},[s("button",{staticClass:"btn btn-outline-secondary btn-block btn-sm",on:{click:function(s){t.addtoCart(a.id)}}},[s("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 加到購物車\n                  ")])])])])}))])])])])])},staticRenderFns:[]};var _=s("VU/8")(C,g,!1,function(t){s("SayG")},"data-v-6db0f64b",null).exports;e.default.use(h.a);var b=new h.a({routes:[{path:"/",name:"Home",component:_}]});e.default.use(i.a);var x=s("c/Tr"),y=s.n(x),w=s("lHA8"),L=s.n(w);e.default.use(i.a);var k={namespaced:!0,state:{products:[],categories:[]},actions:{getProducts:function(t){t.commit("LOADING",!0,{root:!0}),n.a.get("https://vue-course-api.hexschool.io/api/eden90267/products/all").then(function(a){t.commit("PRODUCTS",a.data.products),t.commit("CATEGORIES",a.data.products),console.log("取得產品列表:",a),t.commit("LOADING",!1,{root:!0})})}},mutations:{PRODUCTS:function(t,a){t.products=a},CATEGORIES:function(t,a){var s=new L.a;a.forEach(function(t){s.add(t.category)}),t.categories=y()(s)}},getters:{categories:function(t){return t.categories},products:function(t){return t.products}}};e.default.use(i.a);var A={namespaced:!0,state:{cart:{carts:[]}},actions:{getCart:function(t){t.commit("LOADING",!0,{root:!0}),n.a.get("https://vue-course-api.hexschool.io/api/eden90267/cart").then(function(a){a.data.data.carts&&t.commit("CART",a.data.data),t.commit("LOADING",!1,{root:!0})})},removeCart:function(t,a){var s="https://vue-course-api.hexschool.io/api/eden90267/cart/"+a;t.commit("LOADING",!0,{root:!0}),n.a.delete(s).then(function(){t.dispatch("getCart"),t.commit("LOADING",!1,{root:!0})})},addtoCart:function(t,a){t.commit("LOADING",!0,{root:!0});var s={product_id:a.id,qty:a.qty};n.a.post("https://vue-course-api.hexschool.io/api/eden90267/cart",{data:s}).then(function(){t.dispatch("getCart"),t.commit("LOADING",!1,{root:!0})})}},mutations:{CART:function(t,a){t.cart=a}},getters:{cart:function(t){return t.cart}}};e.default.use(i.a);var O=new i.a.Store({strict:!0,modules:{loadingModules:{state:{isLoading:!0},actions:{updateLoading:function(t,a){t.commit("LOADING",a)}},mutations:{LOADING:function(t,a){t.isLoading=a}},getters:{isLoading:function(t){return t.isLoading}}},productsModules:k,cartModules:A}});e.default.config.productionTip=!1,e.default.use(i.a),e.default.use(c.a,n.a),e.default.component("Loading",d.a),new e.default({el:"#app",router:b,store:O,components:{App:m},template:"<App/>"})},SayG:function(t,a){},kAs5:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.caf7ada5c6d6bfcf9064.js.map