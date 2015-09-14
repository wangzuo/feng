var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Dialogs</h3>

        <Example html={false}>
{`var App = React.createClass({
  getInitialState() {
    return {
      open: false
    };
  },

  render() {
    return (
      <div>
        <Button onClick={this.toggleDialog}>Open dialog</Button>
        <Dialog open={this.state.open} onClose={this.handleClose}/>
      </div>
    );
  },

  handleClose() {
    this.setState({open: false});
  },

  toggleDialog() {
    this.setState({open: !this.state.open});
  }
});

<App/>;`}
        </Example>
      </div>
    );
  }
});