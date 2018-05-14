"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_service=require("./../../mixins/service.js"),_service2=_interopRequireDefault(_service),app=getApp(),Index=function(e){function n(){var e,t,r,o;_classCallCheck(this,n);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return t=r=_possibleConstructorReturn(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"编辑我的信息"},r.components={},r.mixins=[],r.data={mynum:20,acounts:["男","女"],userInfo:{nickName:"加载中...",sex:0,adverInfo:""}},r.computed={},r.methods={handleBack:function(){_wepy2.default.navigateBack()},bindAccountChange:function(e){r.userInfo.sex=Number.parseInt(e.detail.value),r.$apply()},inputTyping:function(e){var n=e.detail.value;r.userInfo.adverInfo=n},inputName:function(e){var n=e.detail.value;r.userInfo.nickName=n},handleSubmit:function(e){var n=r,t=r.userInfo;Object.assign(r.userInfo,{tk:r.userInfo.token,"content-type":"application/json"});var o={ucId:t.ucId,tk:t.token,logoUrl:t.logoUrl,sex:Number.parseInt(t.sex+1),nickName:t.nickName,sign:t.adverInfo};console.info(o),_service2.default.requestPost("user/update",o,function(e,t){t?wx.showToast({title:"编辑成功",icon:"success",duration:2e3,success:function(){n.$parent.globalData.userInfo=null,wx.navigateBack()}}):console.info("err")})}},r.events={},o=t,_possibleConstructorReturn(r,o)}return _inherits(n,e),_createClass(n,[{key:"onLoad",value:function(e,n){this.userInfo=Object.assign({},n.preload.userInfo);var t=Number.parseInt(this.userInfo.sex);t>0&&(this.userInfo.sex=t-1)}}]),n}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(Index,"pages/mine/me-edit"));