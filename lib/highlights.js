var React = require('react');
var Highlights = require('highlights');
var highlighter = new Highlights();

module.exports = React.createClass({
  displayName: 'Highlights',

  render() {
    var html = highlighter.highlightSync({
      fileContents: this.props.children
    });

    return (
      <div dangerouslySetInnerHTML={{__html: html}}></div> 
    );
  }
});
