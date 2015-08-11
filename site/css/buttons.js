var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Basic</h3>
        <Example>
{`<div className="example-buttons">
  <Button>Button</Button>
  <Button href="https://github.com" target="_blank" a>Link</Button>
</div>`}
        </Example>

        <h3>States</h3>
        <Example>
{`<div className="example-buttons">
  <Button color="blue">normal</Button>
  <Button color="blue" active>active</Button>
  <Button color="blue" hover>hover</Button>
  <Button color="blue" disabled>disabled</Button>
</div>`}
        </Example>

        <h3>Colors</h3>
        <Example>
{`<div className="example-buttons">
  <Button color="blue">hello world</Button>
  <Button color="red">hello world</Button>
  <Button color="green">hello world</Button>
  <Button color="yellow">hello world</Button>
</div>`}
        </Example>

        <h3>Sizes</h3>

        <Example>
{`<div className="example-buttons">
  <Button>hello world</Button>
  <Button size="lg">hello world</Button>
  <Button size="xlg">hello world</Button>
</div>`}
        </Example>

        <h3>Block</h3>

        <Example>
{`<div className="example-buttons">
  <Button size="lg" block>hello world</Button>
  <Button size="lg" color="blue" block>hello world</Button>
</div>`}
        </Example>

        <h3>Icons</h3>
        <p>Powered by <a href="http://ionicons.com/">ionicons</a></p>
        <Example>
{`<div className="example-buttons">
  <Button icon="ion-checkmark-round">hello world</Button>
  <Button icon="ion-checkmark-round" size="lg">hello world</Button>
  <Button icon="ion-checkmark-round" size="xlg">hello world</Button>
  <Button icon="ion-checkmark-round" size="xlg" block>hello world</Button>
  <Button icon="ion-checkmark-round"/>
  <Button icon="ion-checkmark-round" size="lg"/>
  <Button icon="ion-checkmark-round" size="xlg"/>
  <Button color="blue" icon="ion-social-github" size="lg" href="https://github.com" target="_blank" a>github</Button>
</div>`}
        </Example>


        <h3>Button group</h3>
        <Example>
{`<div className="example-button-groups">
  <ButtonGroup>
    <Button>hello</Button>
    <Button>hello</Button>
    <Button>hello</Button>
    <Button>hello</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button size="lg">hello</Button>
    <Button size="lg">hello</Button>
    <Button size="lg">hello</Button>
    <Button size="lg">hello</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button icon="ion-laptop">Desktop</Button>
    <Button icon="ion-ipad">Tablet</Button>
    <Button icon="ion-iphone">Mobile</Button>
  </ButtonGroup>

  <ButtonGroup>
    <Button color="blue" icon="ion-laptop">Desktop</Button>
    <Button color="blue" icon="ion-ipad">Tablet</Button>
    <Button color="blue" icon="ion-iphone">Mobile</Button>
  </ButtonGroup>
</div>`}
        </Example>

        <h3>Loading Button</h3>
        <Example>
{`<div className="example-buttons">
  <Button><Spinner/></Button>
  <Button loading disabled>Saving</Button>
  <Button color="blue" loading disabled>Saving</Button>
  <Button color="yellow" loading disabled>Saving</Button>
  <Button color="red" loading disabled>Saving</Button>
</div>`}
        </Example>
      </div>
    )
  }
});
