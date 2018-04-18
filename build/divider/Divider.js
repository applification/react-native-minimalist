'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/divider/Divider.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactPrimitives=require('react-primitives');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Divider=function Divider(_ref){var fullWidth=_ref.fullWidth,color=_ref.color;return _react2.default.createElement(_reactPrimitives.View,{style:{backgroundColor:color,marginTop:10,marginLeft:fullWidth?0:30,height:1,width:'100%'},__source:{fileName:_jsxFileName,lineNumber:6}});};Divider.propTypes={fullWidth:_propTypes2.default.bool.isRequired,color:_propTypes2.default.string.isRequired};Divider.defaultProps={fullWidth:false,color:'#DADADA'};exports.default=Divider;