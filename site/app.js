var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

module.exports = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div className="app">
        <Header/>
        {this.props.children}
        <Footer/>
     </div>
    );
  }
});
