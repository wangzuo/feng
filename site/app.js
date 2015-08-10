var React = require('react');
var Router = require('react-router');
var Header = require('./header');
var Footer = require('./footer');
var RouteHandler = Router.RouteHandler;

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
