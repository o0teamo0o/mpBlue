"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={navigationBarTitleText:"完成装箱"},r.mixins=[_wxex2.default],r.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},r.data={list:[],packageInfo:{},ids:[],showFlag:1},r.methods={},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.packageInfo=t.preload?t.preload.fullPickPackageInfo:{},this.flag=t.flag?t.flag:2,this.$apply(),this.getFullPackageList()}},{key:"getFullPackageList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,i,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),t={addressId:this.packageInfo.houseId,codeSn:this.packageInfo.goodNo,ucId:this.packageInfo.ucId},e.next=4,_service2.default.Aget("package/getFullPickPackage",t);case 4:n=e.sent,r=n.res,a=n.state,i=n.msg,wx.hideLoading(),this.isEmpty=a,a?(this.list=r,this.list.forEach(function(e){o.ids.indexOf(e.packageId)>=-1&&o.ids.push(e.packageId)})):(this.list=[],this.showTips(i)),this.$apply();case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"print",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,a,i,o,s,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.ids),!(this.ids.length<=0)){e.next=4;break}return this.showTips("暂无数据"),e.abrupt("return");case 4:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,packageIds:this.ids},e.next=7,_service2.default.Apost("package/finishPackages",t);case 7:n=e.sent,r=n.res,a=n.msg,i=n.state,i?1===this.flag?(this.showFlag,this.$navigate("./result")):(o=this.backUrl("todo",!0),s=o.delta,u=o.targetPage,u.setParams({reload:!0}),wx.navigateBack({delta:s})):this.showTips(a),this.$apply();case 13:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/binning/fullpackages"));