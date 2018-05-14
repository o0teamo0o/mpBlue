"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var s=t[o](i),a=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(a).then(function(e){r("next",e)},function(e){r("throw",e)});e(a)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,s=Array(i),a=0;a<i;a++)s[a]=arguments[a];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.config={navigationBarTitleText:"容器"},r.mixins=[_wxex2.default],r.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},r.data={list:[],deviceInfo:{}},r.methods={createInventory:function(e){console.log(e),r.createInventory(e.goodNo)},unshellf:function(e){r.$preload("goodInfo",e),r.$preload("goto","detail"),r.$navigate("./toDevice")},handleSubmit:function(e){if(1==r.deviceInfo.deviceSn.slice(2,3))return void r.showTips("虚拟容器不能下架");wx.showModal({content:"确认下架容器吗?",title:"确认",confirmText:"确认",cancelText:"取消",success:function(e){e.confirm&&r.unshelfDevice()}})}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.deviceInfo=t.preload?t.preload.deviceInfo:{},this.$apply(),this.getStockList()}},{key:"getStockList",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),t={addressId:this.deviceInfo.houseId,deviceId:this.deviceInfo.deviceId},e.next=4,_service2.default.Aget("device/getDeviceGoods",t);case 4:n=e.sent,r=n.res,o=n.state,wx.hideLoading(),this.isEmpty=o,o?this.list=r:(this.list=[],this.showTips(r)),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"unshelfDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n,r,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),t={addressId:this.deviceInfo.houseId,deviceId:this.deviceInfo.deviceId},e.next=4,_service2.default.Apost("device/unshelfDevice",t);case 4:n=e.sent,r=n.res,o=n.msg,i=n.state,wx.hideLoading(),i?this.$navigate("./result"):this.showTips(o),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()},{key:"createInventory",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,o,i,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return wx.showLoading({title:"加载中",mask:!0}),n={houseId:this.deviceInfo.houseId,deviceId:this.deviceInfo.deviceId,goodNo:t},e.next=4,_service2.default.Apost("inventory/activeCreateInventory",n);case 4:r=e.sent,o=r.res,i=r.msg,s=r.state,wx.hideLoading(),this.showTips(i),this.$apply();case 11:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/device/detail"));