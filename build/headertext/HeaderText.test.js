'use strict';var _jsxFileName='src/headertext/HeaderText.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);var _HeaderText=require('./HeaderText');var _HeaderText2=_interopRequireDefault(_HeaderText);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}describe('HEADER TEXT',function(){it('Renders with DefaultProps',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{__source:{fileName:_jsxFileName,lineNumber:9}},'Big Header'))).toMatchSnapshot();});it('should have text as children',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{__source:{fileName:_jsxFileName,lineNumber:15}},'Children should be text')).toJSON();expect(component.children[0]).toBe('Children should be text');});it('Renders with color prop (red)',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{color:'red',__source:{fileName:_jsxFileName,lineNumber:23}},'Red Header'))).toMatchSnapshot();});it('Always render on a single line',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{__source:{fileName:_jsxFileName,lineNumber:29}},'Longish Header')).toJSON();var numberOfLines=component.props.numberOfLines;expect(numberOfLines).toBe(1);});it('Always renders with paddingLeft, paddingBottom & paddingRight of 25',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{__source:{fileName:_jsxFileName,lineNumber:38}},'Padded Header')).toJSON();var _component$props$styl=component.props.style,paddingLeft=_component$props$styl.paddingLeft,paddingBottom=_component$props$styl.paddingBottom,paddingRight=_component$props$styl.paddingRight,paddingTop=_component$props$styl.paddingTop;expect(paddingLeft).toBe(25);expect(paddingRight).toBe(25);expect(paddingBottom).toBe(25);expect(paddingTop).toBe(25);expect(component).toMatchSnapshot();});it('Always renders with a fontsize of 35 in bold',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_HeaderText2.default,{__source:{fileName:_jsxFileName,lineNumber:56}},'Header 50px')).toJSON();var _component$props$styl2=component.props.style,fontSize=_component$props$styl2.fontSize,fontWeight=_component$props$styl2.fontWeight;expect(fontSize).toBe(35);expect(fontWeight).toBe('bold');});});