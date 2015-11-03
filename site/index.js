var React = require('react');
var Html = require('./html');
var Markdown = require('../react/markdown');

module.exports = React.createClass({
  render() {
    return (
      <Html>
        <Markdown>
{`# feng-ui

[![Build Status](https://travis-ci.org/wangzuo/feng-ui.svg)](https://travis-ci.org/wangzuo/feng-ui)

- [github](http://github.com/wangzuo/feng-ui)
- [npm](https://www.npmjs.com/package/feng-ui)

feng-ui is a styleguide built with reactjs and postcss

- [Getting started](/feng-ui/getting-started)
- [CSS](/feng-ui/css)
- [React](/feng-ui/react)

Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.

Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.

Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.

Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas sed diam eget risus varius blandit sit amet non magna.

### License
ISC`}
        </Markdown>
      </Html>
    );
  }
});
