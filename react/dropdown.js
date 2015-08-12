var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Dropdown',

  getDefaultProps() {
    return {
      open: false,
      items: []
    }
  },

  render() {
    var open = this.props.open;
    var items = this.props.items;
    var cn = cx('u-dropdown', {
      'is-open': open
    }, this.props.className);

    return (
      <div className={cn}>
        {this.props.children}

        <ul className="items">
          {items.map((item, i) => (
            <li key={i} className="item">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
});