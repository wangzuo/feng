import cx from 'classnames';
import blacklist from 'blacklist';
import React from 'react';

class Form extends React.Component {
  render() {
    var props = blacklist(this.props, 'className');
    props.className = cx('u-form', this.props.className);

    return <form {... props} />;
  }
};

Form.defaultProps = {
  horizontal: false
};

module.exports = Form;
