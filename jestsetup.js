jest.mock('TextInput', () => {
  const RealComponent = require.requireActual('TextInput');
  const React = require('react');

  class TextInput extends React.Component {
    render() {
      delete this.props.autoFocus;
      return React.createElement('TextInput', this.props, this.props.children);
    }
  }
  TextInput.propTypes = RealComponent.propTypes;
  return TextInput;
});
