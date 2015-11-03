var React = require('react');

module.exports = React.createClass({
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
          {this.props.children}
        <script src="https://fb.me/react-0.13.3.js"></script>
        <script src="/feng-ui/vendors/prism.js" data-manual></script>
        <script src="/feng-ui/vendors/babel-browser.min.js"></script>
        <script src="/feng-ui/app.js"></script>
        </body>
      </html>
    );
  }
});