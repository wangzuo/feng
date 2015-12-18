var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Basic</h3>
        <p>Feng-ui comes up with a very simple grid.</p>
        <Example>
{`var Container = Grid.Container;
var Row = Grid.Row;
var Column = Grid.Column;

<div className="example-grid">
  <Container className="container">
    <Row className="row">
      <Column d={1}><div className="col">1</div></Column>
      <Column d={11}><div className="col">11</div></Column>
    </Row>

    <Row className="row">
      <Column d={2}><div className="col">2</div></Column>
      <Column d={10}><div className="col">10</div></Column>
    </Row>
  </Container>
</div>`}
        </Example>
      </div>
    );
  }
});
