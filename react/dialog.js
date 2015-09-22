var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Dialog',

  getDefaultProps() {
    return {
      open: false
    };
  },

  render() {
    var cn = cx('u-dialog-wrap', {
      'is-open': this.props.open
    }, this.props.className);

    return (
      <div className={cn}>
        <div className="u-dialog-bg"/>
        <div className="u-dialog">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          <span onClick={this.handleClickClose}>x</span>
          </div>
        </div>
      </div>
    );
  },

  handleClickClose() {
    if(this.props.onClose) this.props.onClose();
  }
});
