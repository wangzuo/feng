var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'Avatar',

  getDefaultProps() {
    return {
      round: false,
      circle: false
    };
  },

  getStyle() {
    var name = this.props.name;
    var hex = backgroundColor(name);
    var style = {
      backgroundColor: `#${hex}`,
      color: fontColor(hex + '')
    };

    return style;
  },

  render() {
    var name = this.props.name;
    var round = this.props.round;
    var circle = this.props.circle;
    var style = this.getStyle();

    var cn = cx('u-avatar', {
      'is-round': round,
      'is-circle': circle
    });

    return (
      <div className={cn} style={style}>
        {name[0]}
      </div>
    );
  }
});

function backgroundColor(str) {
  var hash = 0;
  for(var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function fontColor(hex) {
  var r = parseInt(hex.substr(0, 2), 16);
  var g = parseInt(hex.substr(2, 2), 16);
  var b = parseInt(hex.substr(4, 2), 16);
  var yiq = ((r*299) + (g*587) + (b*114)) / 1000;

  return (yiq >= 128) ? 'black' : 'white';
}