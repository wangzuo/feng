var cx = require('classnames');
var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
  displayName: 'Dropdown',

  getDefaultProps() {
    return {
      items: ['dog', 'pig', 'moose']
    }
  },

  getInitialState() {
    return {
      open: true
    };
  },

  render() {
    var open = this.state.open;
    var items = this.props.items;
    var cn = cx('u-dropdown', {
      'is-open': open
    }, this.props.className);

    return (
      <div className={cn}>
        <Button onClick={this.handleClick}>More <i className="ion-chevron-down"></i></Button>

        <ul className="items">
          {items.map((item, i) => (
            <li key={i} className="item">{item}</li>
          ))}
        </ul>
      </div>
    );
  },

  handleClick(e) {
    this.setState({
      open: !this.state.open
    });
  }
});
