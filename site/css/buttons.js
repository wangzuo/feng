import React from 'react';
import Basic from './basic.example';
import States from './states.example';
import Colors from './colors.example';
import Sizes from './sizes.example';
import Block from './block.example';
import Icons from './icons.example';
import Group from './group.example';
import Loading from './loading.example';

const Buttons = () => (
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

export default Buttons