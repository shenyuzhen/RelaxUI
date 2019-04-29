(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d218038"],{c8d1:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._m(0),e("div",{staticClass:"components-button-demo"},[e("RelaxTag",{attrs:{name:"基础按钮"}},[e("template",{slot:"temp"},[e("Button",[t._v("default")]),e("Button",{attrs:{type:"primary"}},[t._v("primary")]),e("Button",{attrs:{type:"success"}},[t._v("success")]),e("Button",{attrs:{type:"info"}},[t._v("info")]),e("Button",{attrs:{type:"danger"}},[t._v("danger")]),e("Button",{attrs:{type:"warning"}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        按钮可以根据"),e("i",[t._v("type")]),t._v("来设置不同的颜色，提供了6种类型的按钮"),e("i",[t._v("primary")]),e("i",[t._v("success")]),e("i",[t._v("info")]),e("i",[t._v("danger")]),e("i",[t._v("warning")])]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button>default</Button>\n          <Button type='primary'>primary</Button>\n          <Button type='success'>success</Button>\n          <Button type='info'>info</Button>\n          <Button type='danger'>danger</Button>\n          <Button type='danger'>danger</Button>\n          <Button type='warning'>warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"镂空按钮"}},[e("template",{slot:"temp"},[e("Button",{attrs:{plain:""}},[t._v("default")]),e("Button",{attrs:{type:"primary",plain:""}},[t._v("primary")]),e("Button",{attrs:{type:"success",plain:""}},[t._v("success")]),e("Button",{attrs:{type:"info",plain:""}},[t._v("info")]),e("Button",{attrs:{type:"danger",plain:""}},[t._v("danger")]),e("Button",{attrs:{type:"warning",plain:""}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        设置"),e("i",[t._v("plain")]),t._v("属性可以设置镂空按钮\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button plain>default</Button>\n          <Button type='primary' plain>primary</Button>\n          <Button type='success' plain>success</Button>\n          <Button type='info' plain>info</Button>\n          <Button type='danger' plain>danger</Button>\n          <Button type='warning' plain>warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"加载中状态"}},[e("template",{slot:"temp"},[e("Button",{attrs:{type:"warning",size:"sm",round:"",loading:!0}},[t._v("loading")]),e("Button",{attrs:{type:"danger",round:"",loading:!0}},[t._v("loading")]),e("Button",{attrs:{type:"info",round:"",plain:"",loading:!0}},[t._v("loading")]),e("Button",{attrs:{type:"success",plain:"",loading:!0}},[t._v("loading")]),e("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.enterLoading}},[t._v("Click loading")])],1),e("template",{slot:"desc"},[t._v("\n        添加 "),e("i",[t._v("loading")]),t._v(" 属性即可让按钮处于加载状态\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v('        <template>\n          <Button type=\'warning\' size="sm" round :loading="true">loading</Button>\n          <Button type=\'danger\' round :loading="true">loading</Button>\n          <Button type=\'info\' round plain :loading="true">loading</Button>\n          <Button type=\'success\' plain :loading="true">loading</Button>\n          <Button type=\'primary\' :loading="loading" @click="enterLoading">Click loading</Button>\n        </template>\n        <script>\n          export default {\n            data () {\n              return {\n                loading: false,\n              }\n            },\n            methods: {\n              enterLoading(){\n                this.loading = true\n\n                setTimeout(() => {\n                  this.loading = false\n                }, 2000)\n              }\n            }\n          }\n        <\/script>\n        \n      ')])],2),e("RelaxTag",{attrs:{name:"圆角按钮"}},[e("template",{slot:"temp"},[e("Button",{attrs:{round:""}},[t._v("default")]),e("Button",{attrs:{type:"primary",round:""}},[t._v("primary")]),e("Button",{attrs:{type:"success",round:""}},[t._v("success")]),e("Button",{attrs:{type:"info",round:""}},[t._v("info")]),e("Button",{attrs:{type:"danger",round:""}},[t._v("danger")]),e("Button",{attrs:{type:"warning",round:""}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        设置"),e("i",[t._v("round")]),t._v("属性可以设置圆角按钮\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button round>default</Button>\n          <Button type='primary' round>primary</Button>\n          <Button type='success' round>success</Button>\n          <Button type='info' round>info</Button>\n          <Button type='danger' round>danger</Button>\n          <Button type='warning' round>warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"不可点击"}},[e("template",{slot:"temp"},[e("Button",{attrs:{plain:"",round:"",disabled:""}},[t._v("default")]),e("Button",{attrs:{type:"primary",plain:"",round:"",disabled:""}},[t._v("primary")]),e("Button",{attrs:{type:"success",plain:"",round:"",disabled:""}},[t._v("success")]),e("Button",{attrs:{type:"info",plain:"",round:"",disabled:""}},[t._v("info")]),e("Button",{attrs:{type:"danger",plain:"",round:"",disabled:""}},[t._v("danger")]),e("Button",{attrs:{type:"warning",plain:"",round:"",disabled:""}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        设置"),e("i",[t._v("disabled")]),t._v("属性达到按钮不可点击状态\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button plain round disabled>default</Button>\n          <Button type='primary' plain round disabled>primary</Button>\n          <Button type='success' plain round disabled>success</Button>\n          <Button type='info' plain round disabled>info</Button>\n          <Button type='danger' plain round disabled>danger</Button>\n          <Button type='warning' plain round disabled>warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"按钮尺寸"}},[e("template",{slot:"temp"},[e("Button",{attrs:{type:"primary",size:"sm"}},[t._v("small")]),e("Button",{attrs:{type:"warning"}},[t._v("normal")]),e("Button",{attrs:{size:"lg"}},[t._v("large")])],1),e("template",{slot:"desc"},[t._v("\n        按钮根据"),e("i",[t._v("size")]),t._v("来变换尺寸，提供了"),e("i",[t._v("sm")]),e("i",[t._v("lg")]),t._v("和默认的三种\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button type='primary' size='sm'>small</Button>\n          <Button type='warning'>normal</Button>\n          <Button size='lg'>large</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"图标按钮"}},[e("template",{slot:"temp"},[e("Button",{attrs:{icon:"re-icon-heart-on",circle:""}}),e("Button",{attrs:{type:"primary",icon:"re-icon-x",circle:""}}),e("Button",{attrs:{type:"info",icon:"re-icon-mic",circle:""}}),e("Button",{attrs:{type:"danger",icon:"re-icon-music",circle:""}}),e("Button",{attrs:{type:"warning",icon:"re-icon-thumbs-down",circle:""}}),e("Button",{attrs:{type:"success",icon:"re-icon-thumbs-up",circle:""}})],1),e("template",{slot:"desc"},[t._v("\n        圆形的图标按钮\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v('        <template>\n          <Button icon="re-icon-heart-on" circle></Button>\n          <Button type="primary" icon="re-icon-x" circle></Button>\n          <Button type="info" icon="re-icon-mic" circle></Button>\n          <Button type="danger" icon="re-icon-music" circle></Button>\n          <Button type="warning" icon="re-icon-thumbs-down" circle></Button>\n          <Button type="success" icon="re-icon-thumbs-up" circle></Button>\n        </template>\n      ')])],2),e("RelaxTag",{attrs:{name:"图标按钮"}},[e("template",{slot:"temp"},[e("Button",{attrs:{icon:"re-icon-home"}},[t._v("default")]),e("Button",{attrs:{type:"primary",icon:"re-icon-star-on"}},[t._v("primary")]),e("Button",{attrs:{type:"success",icon:"re-icon-search"}},[t._v("success")]),e("Button",{attrs:{type:"info",icon:"re-icon-user"}},[t._v("info")]),e("Button",{attrs:{type:"danger",icon:"re-icon-zap"}},[t._v("danger")]),e("Button",{attrs:{type:"warning",icon:"re-icon-triangle"}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        有文字信息的图标按钮\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button icon=\"re-icon-home\">default</Button>\n          <Button type=\"primary\" icon='re-icon-star-on'>primary</Button>\n          <Button type='success' icon='re-icon-search'>success</Button>\n          <Button type='info' icon=\"re-icon-user\">info</Button>\n          <Button type='danger' icon=\"re-icon-zap\">danger</Button>\n          <Button type='warning' icon=\"re-icon-triangle\">warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"块级按钮"}},[e("template",{slot:"temp"},[e("Button",{attrs:{block:""}},[t._v("default")]),e("Button",{attrs:{type:"primary",block:""}},[t._v("primary")]),e("Button",{attrs:{type:"success",block:""}},[t._v("success")]),e("Button",{attrs:{type:"info",block:""}},[t._v("info")]),e("Button",{attrs:{type:"danger",block:""}},[t._v("danger")]),e("Button",{attrs:{type:"warning",block:""}},[t._v("warning")])],1),e("template",{slot:"desc"},[t._v("\n        设置"),e("i",[t._v("block")]),t._v("属性变成块级按钮\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <Button block>default</Button>\n          <Button type='primary' block>primary</Button>\n          <Button type='success' block>success</Button>\n          <Button type='info' block>info</Button>\n          <Button type='danger' block>danger</Button>\n          <Button type='warning' block>warning</Button>\n        </template>\n      ")])],2),e("RelaxTag",{attrs:{name:"按钮组"}},[e("template",{slot:"temp"},[e("ButtonGroup",[e("Button",[t._v("primary")]),e("Button",[t._v("success")]),e("Button",[t._v("info")])],1)],1),e("template",{slot:"desc"},[t._v("\n        包裹"),e("i",[t._v("ButtonGroup")]),t._v("标签变成按钮组\n      ")]),e("textarea",{attrs:{slot:"code"},slot:"code"},[t._v("        <template>\n          <ButtonGroup>\n            <Button>primary</Button>\n            <Button>success</Button>\n            <Button>info</Button>\n          </ButtonGroup>\n        </template>\n      ")])],2)],1),t._m(1)])},a=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topbar"},[e("div",{staticClass:"page-title-box"},[e("h4",{staticClass:"page-title"},[t._v("Buttons 按钮")]),e("p",{staticClass:"page-title-decs"},[t._v("按钮用于开始一个即时操作")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"relax-document"},[e("div",{staticClass:"document-title"},[e("h4",[t._v("API")])]),e("table",{staticClass:"document-api"},[e("thead",[e("th",[t._v("属性")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("默认值")])]),e("tbody",[e("tr",[e("td",[t._v("type")]),e("td",[t._v("设置按钮类型，可选值为 primary success info danger warning")]),e("td",[t._v("string")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("plain")]),e("td",[t._v("设置按钮镂空状态")]),e("td",[t._v("boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("loading")]),e("td",[t._v("设置按钮载入状态")]),e("td",[t._v("boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("round")]),e("td",[t._v("设置按钮圆角状态")]),e("td",[t._v("boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("disabled")]),e("td",[t._v("按钮失效状态")]),e("td",[t._v("boolean")]),e("td",[t._v("false")])]),e("tr",[e("td",[t._v("size")]),e("td",[t._v("设置按钮尺寸, 可选值为 sm lg")]),e("td",[t._v("string")]),e("td",[t._v("-")])]),e("tr",[e("td",[e("span",[t._v("icon")])]),e("td",[t._v("设置按钮的图标类型")]),e("td",[t._v("string")]),e("td",[t._v("-")])]),e("tr",[e("td",[t._v("block")]),e("td",[t._v("将按钮宽度调整为其父宽度的选项")]),e("td",[t._v("boolean")]),e("td",[t._v("false")])])])]),e("div",{staticClass:"document-title"},[e("h4",[t._v("事件")])]),e("table",{staticClass:"document-event"},[e("thead",[e("th",[t._v("事件名称")]),e("th",[t._v("说明")]),e("th",[t._v("回调函数")])]),e("tbody",[e("tr",[e("td",[t._v("click")]),e("td",[t._v("点击按钮时的回调")]),e("td",[t._v("(event) => void")])])])])])}],r={data:function(){return{loading:!1}},methods:{enterLoading:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1},2e3)}}},s=r,i=e("2877"),u=Object(i["a"])(s,o,a,!1,null,"701ac21a",null);n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d218038.4f9bb3b6.js.map