"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function o(n,i){try{var a=t[n](i),s=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(s).then(function(e){o("next",e)},function(e){o("throw",e)});e(s)}return o("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),_wepy=require("./../../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../../mixins/service.js"),_service2=_interopRequireDefault(_service),_wxex=require("./../../../mixins/wxex.js"),_wxex2=_interopRequireDefault(_wxex),_zanToptips=require("./../../../components/zan-toptips.js"),_zanToptips2=_interopRequireDefault(_zanToptips),_zanLoadmore=require("./../../../components/zan-loadmore.js"),_zanLoadmore2=_interopRequireDefault(_zanLoadmore),Index=function(e){function t(){var e,r,o,n;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return r=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),o.config={navigationBarTitleText:"入库-放置于"},o.components={zanToptips:_zanToptips2.default,zanLoadmore:_zanLoadmore2.default},o.mixins=[_wxex2.default],o.data={areaList:[],areaId:"",potisonList:[],positionId:"",positionSn:"",deviceList:[],barCodeinfo:"",test:"",flag:1,focusinfo:!0,workId:""},o.events={},o.methods={code:function(e){var t=e.detail.value;o.barCodeinfo=t,o.$apply()},getEmpty:function(e){o.$preload("addressId",o.work.addressId),o.$preload("barCode",o.barCodeinfo),o.$preload("goto","chooseC"),o.$navigate("../emptyDeviceList")}},n=r,_possibleConstructorReturn(o,n)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(e,t){this.work=t.preload?t.preload.work:{},this.focusinfo=!0,this.$apply(),this.scanQr()}},{key:"onHide",value:function(){this.params=null,this.$apply()}},{key:"scanQr",value:function(){var e=this;wx.scanCode({success:function(t){console.log(t),e.barCodeinfo=t.result,e.$apply()}})}},{key:"checkDevice",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r,o,n,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={ucId:this.userInfo.ucId,tk:this.userInfo.token,addressId:this.work.addressId,barCode:this.barCodeinfo.toUpperCase()},e.next=3,_service2.default.Aget("device/getDevice",t);case 3:r=e.sent,o=r.res,n=r.msg,i=r.state,i?(this.$preload("deviceInfo",o),this.$preload("work",this.work),this.$preload("barCode",this.barCodeinfo),this.$preload("goto","chooseD"),this.$navigate("./chooseD")):this.showTips(n),this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"setParams",value:function(e){this.params=e,e.deviceSn&&(this.barCodeinfo=e.deviceSn),this.$apply()}}]),t}(_wepy2.default.page);Page(require("./../../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/workbench/instorage/chooseC"));