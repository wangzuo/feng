module.exports = function(html) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
    <title>Feng UI</title>
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" type="text/css"/>
    <script src="/styles.bundle.js"></script>
  </head>
  <body>
    <div id="app">${html}</div>

    <script src="/site.bundle.js"></script>
  </body>
</html>`;
}


