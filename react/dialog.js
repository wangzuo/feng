var React = require('react');

module.exports = React.createClass({
  displayName: 'Dialog',

  render() {
    return (
      <div className="u-dialog-wrap">
        <div className="u-dialog-bg"/>
        <div className="u-dialog">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </div>
        </div>
      </div>
    );
  }
});