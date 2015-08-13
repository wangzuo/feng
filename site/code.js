var cx = require('classnames');
var React = require('react');
var beautify = require('js-beautify').html;

module.exports = React.createClass({
  displayName: 'Code',

  getDefaultProps() {
    return {
      language: 'markup',
      format: false
    };
  },

  highlight() {
    Prism.highlightElement(this.refs.code.getDOMNode(), true);
  },

  componentDidMount() {
    this.highlight();
  },

  componentDidUpdate() {
    this.highlight();
  },

  render() {
    var code = this.props.code;
    var format = this.props.format;

    if(format) {
      code = beautify(code, {
        indent_size: 2,
        wrap_line_length: 80,
        unformatted: []
      });
    }

    return (
      <pre {... this.props}>
        <code ref="code" className={`language-${this.props.language}`}>
          {code}
        </code>
      </pre>
    );
  }
});
