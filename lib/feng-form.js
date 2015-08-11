'use strict';

var React = require('react');
var Select = require('react-select');
var Switch = require('react-input-switch');
var Textarea = require('react-textarea-autosize');
var InputColor = require('react-input-color');
// var InputNumber = require('react-input-number');
var InputSlider = require('react-input-slider');

// todo: avoid e.target.value
// var InputText = require('./input-text');

var Field = require('./field');
var Form = require('./form');

function renderElement(attr, value, onChange) {
  var type = attr.type;
  var name = attr.name;
  var label = attr.label;

  var handleChange = function handleChange(e) {
    onChange(name, e.target.value);
  };

  // fix react-select options
  if (attr.options) {
    attr.options = attr.options.map(function (option) {
      return {
        value: option,
        label: option
      };
    });

    if (type === 'Array') {
      handleChange = function (value, selected) {
        onChange(name, selected.map(function (s) {
          return s.value;
        }));
      };
    } else if (type === 'Enum') {
      handleChange = function (value, selected) {
        onChange(name, value);
      };
    }
  }

  if (type === 'Boolean' || type === 'Color') {
    handleChange = function (value) {
      onChange(name, value);
    };
  }

  switch (type) {
    case 'Integer':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'span',
          { className: 'input' },
          React.createElement('input', {
            type: 'number',
            name: name,
            value: parseInt(value, 10),
            onChange: handleChange
          })
        )
      );
    case 'String':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'text',
          value: value,
          name: name,
          onChange: handleChange
        })
      );
    case 'Color':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'span',
          { className: 'input' },
          React.createElement(InputColor, {
            value: value || '#ffffff',
            onChange: handleChange
          })
        )
      );
    case 'Text':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Textarea, {
          rows: 4,
          name: name,
          value: value,
          onChange: handleChange
        })
      );
    case 'Boolean':
      return React.createElement(
        Field,
        { label: label, horizontal: true },
        React.createElement(
          'div',
          { className: 'input' },
          React.createElement(Switch, {
            checked: !!value,
            onChange: handleChange
          })
        )
      );
    case 'Enum':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Select, {
          name: name,
          options: attr.options,
          value: value,
          onChange: handleChange
        })
      );
    case 'Array':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(Select, {
          name: name,
          options: attr.options,
          value: value,
          multi: true,
          onChange: handleChange
        })
      );

    case 'Range':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(InputSlider, {
          name: name,
          x: value,
          xmin: attr.min,
          xmax: attr.max
        })
      );
  }
}

var Element = React.createClass({
  displayName: 'FengElement',

  render: function render() {
    var attr = this.props.attr;
    var value = this.props.value;
    return renderElement(attr, value, this.handleChange);
  },

  handleChange: function handleChange(name, value) {
    if (this.props.onChange) this.props.onChange(name, value);
  }
});

module.exports = React.createClass({
  displayName: 'FengForm',

  getDefaultProps: function getDefaultProps() {
    return {
      attrs: [],
      values: {}
    };
  },

  render: function render() {
    var _this = this;

    var attrs = this.props.attrs;
    var values = this.props.values;

    return React.createElement(
      Form,
      this.props,
      attrs.map(function (attr, i) {
        return React.createElement(Element, {
          key: i,
          attr: attr,
          value: values[attr.name],
          onChange: _this.handleChange
        });
      })
    );
  },

  handleChange: function handleChange(name, value) {
    if (this.props.onChange) {
      this.props.onChange(name, value);
    }
  }
});