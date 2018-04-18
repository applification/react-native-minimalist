'use strict';var _jsxFileName='src/bodytext/BodyText.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);var _BodyText=require('./BodyText');var _BodyText2=_interopRequireDefault(_BodyText);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}describe('HEADER TEXT',function(){it('Renders with DefaultProps',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_BodyText2.default,{__source:{fileName:_jsxFileName,lineNumber:8}},'Body text'))).toMatchSnapshot();});it('Renders with color prop (red)',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_BodyText2.default,{color:'red',__source:{fileName:_jsxFileName,lineNumber:13}},'Red text'))).toMatchSnapshot();});it('Always renders with a fontsize of 17 in normal',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_BodyText2.default,{__source:{fileName:_jsxFileName,lineNumber:19}},'Header 50px')).toJSON();var _component$props$styl=component.props.style,fontSize=_component$props$styl.fontSize,fontWeight=_component$props$styl.fontWeight;expect(fontSize).toBe(17);expect(fontWeight).toBe('normal');});it('Always renders with paddingLeft: 25, paddingRight: 25, paddingBottom: 15',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_BodyText2.default,{__source:{fileName:_jsxFileName,lineNumber:29}},'Correctly padded')).toJSON();var _component$props$styl2=component.props.style,paddingLeft=_component$props$styl2.paddingLeft,paddingRight=_component$props$styl2.paddingRight,paddingBottom=_component$props$styl2.paddingBottom;expect(paddingLeft).toBe(25);expect(paddingRight).toBe(25);expect(paddingBottom).toBe(15);});});