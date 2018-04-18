'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/profile/Profile.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactPrimitives=require('react-primitives');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ProfileElement=function(_Component){_inherits(ProfileElement,_Component);function ProfileElement(){_classCallCheck(this,ProfileElement);return _possibleConstructorReturn(this,(ProfileElement.__proto__||Object.getPrototypeOf(ProfileElement)).apply(this,arguments));}_createClass(ProfileElement,[{key:'render',value:function render(){var _props=this.props,source=_props.source,small=_props.small;return _react2.default.createElement(_reactPrimitives.Image,{style:{width:small?30:50,height:small?30:50,borderRadius:small?15:25,margin:small?7:10},source:source,__source:{fileName:_jsxFileName,lineNumber:21}});}}]);return ProfileElement;}(_react.Component);ProfileElement.propTypes={source:_propTypes2.default.any.isRequired,small:_propTypes2.default.bool};ProfileElement.defaultProps={source:{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'},small:false};exports.default=ProfileElement;