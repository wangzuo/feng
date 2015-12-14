var React = require('react');
var Basic = require('./basic.example');
var States = require('./states.example');
var Colors = require('./colors.example');
var Sizes = require('./sizes.example');
var Block = require('./block.example');
var Icons = require('./icons.example');
var Group = require('./group.example');
var Loading = require('./loading.example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Basic</h3>
        <Basic/>

        <h3>States</h3>
        <States/>

        <h3>Colors</h3>
        <Colors/>

        <h3>Sizes</h3>
        <Sizes/>

        <h3>Block</h3>
        <Block/>

        <h3>Icons</h3>
        <p>Powered by <a href="http://ionicons.com/">ionicons</a></p>
        <Icons/>


        <h3>Button group</h3>
        <Group/>

        <h3>Loading Button</h3>
        <Loading/>
      </div>
    )
  }
});
