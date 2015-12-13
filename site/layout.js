var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');

module.exports = React.createClass({
  displayName: 'Layout',

  render() {
    return (
      <html>
        <head>
          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
          <title>Feng UI</title>
          <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
          <link rel="stylesheet" type="text/css" href="/vendors/prism.css"/>
          <link rel="stylesheet" href="/feng.min.css" type="text/css"/>
          <link rel="stylesheet" href="/example.css" type="text/css"/>
        </head>
        <body>

        <div className="app">
          <Header/>

          <Grid.Container>
            <Grid.Row>
              <Grid.Column d={6}>
                <nav className="u-nav u-nav-y">
                  <a href="/css/buttons">buttons</a>
                </nav>
              </Grid.Column>

              <Grid.Column d={18}>
              {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid.Container>
          <Footer/>
        </div>

        <script src="https://fb.me/react-0.13.3.js"></script>
        <script src="/feng-ui/vendors/prism.js" data-manual></script>
        <script src="/feng-ui/vendors/babel-browser.min.js"></script>
        <script src="/feng-ui/app.js"></script>
        </body>
      </html>
    );
  }
});
