var React = require('react');
var beautify = require('js-beautify').html;

module.exports = React.createClass({
  displayName: 'Code',

  getDefaultProps() {
    return {
      format: false
    };
  },

  render() {
    var code = this.props.code;
    var format = this.props.format;

    if(__DEV__) {
      return <pre>{code}</pre>;
    } else {
      var Highlights = require('highlights');
      var highlighter = new Highlights();

      if(format) code = beautify(code, {indent_size: 2});

      var html = highlighter.highlightSync({
        fileContents: code,
        scopeName: 'source.js'
      });
      return  <pre dangerouslySetInnerHTML={{__html: html}}></pre>;
    }
  }
});
