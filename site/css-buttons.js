var React = require('react');
var Basic = require('../examples/buttons/basic.example');
var States = require('../examples/buttons/states.example');
var Colors = require('../examples/buttons/colors.example');
var Sizes = require('../examples/buttons/sizes.example');
var Block = require('../examples/buttons/block.example');
var Icons = require('../examples/buttons/icons.example');
var Group = require('../examples/buttons/group.example');
var Loading = require('../examples/buttons/loading.example');

module.exports = () => (
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
);
