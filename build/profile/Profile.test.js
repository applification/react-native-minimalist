var _jsxFileName='src/profile/Profile.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);var _Profile=require('./Profile');var _Profile2=_interopRequireDefault(_Profile);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}describe('PROFILE',function(){it('Renders profile image with DefaultProps',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_Profile2.default,{__source:{fileName:_jsxFileName,lineNumber:8}}))).toMatchSnapshot();});it('Renders profile image from URI',function(){expect(_reactTestRenderer2.default.create(_react2.default.createElement(_Profile2.default,{source:{uri:'https://pbs.twimg.com/profile_images/941645845409226752/Lt1apZ3Q_400x400.jpg'},__source:{fileName:_jsxFileName,lineNumber:14}}))).toMatchSnapshot();});it('Always renders with size 50dp, borderRadius 25dp and a margin of 10dp',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Profile2.default,{__source:{fileName:_jsxFileName,lineNumber:25}})).toJSON();var _component$props$styl=component.props.style,width=_component$props$styl.width,height=_component$props$styl.height,borderRadius=_component$props$styl.borderRadius,margin=_component$props$styl.margin;expect(width&&height).toBe(50);expect(borderRadius).toBe(25);expect(margin).toBe(10);});it('Renders small profile image with small prop',function(){var component=_reactTestRenderer2.default.create(_react2.default.createElement(_Profile2.default,{small:true,__source:{fileName:_jsxFileName,lineNumber:34}})).toJSON();var _component$props$styl2=component.props.style,width=_component$props$styl2.width,height=_component$props$styl2.height,borderRadius=_component$props$styl2.borderRadius,margin=_component$props$styl2.margin;expect(width&&height).toBe(30);expect(borderRadius).toBe(15);expect(margin).toBe(7);});});