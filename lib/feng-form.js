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
var Button = require('./button');

function renderElement(attr, value, onChange) {
  var type = attr.type;
  var name = attr.name;
  var label = attr.label;

  var handleChange = function handleChange(e) {
    onChange(name, e.target.value);
  };

  // fix react-select options
  // if(attr.options) {
  //   attr.options = attr.options.map((option) => ({
  //     value: option,
  //     label: option
  //   }));

  //   if(type === 'Array') {
  //     handleChange = function(value, selected) {
  //       onChange(name, selected.map((s) => s.value));
  //     };
  //   } else if(type === 'Enum') {
  //     handleChange = function(value, selected) {
  //       onChange(name, value);
  //     };
  //   }
  // }

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

    case 'Image':
    case 'File':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'file',
          value: value,
          name: name,
          onChange: handleChange,
          multiple: attr.multiple
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

    case 'Model':
      return React.createElement(
        Field,
        { label: label },
        React.createElement(
          'select',
          {
            name: name,
            onChange: handleChange },
          attr.options.map(function (option, i) {
            return React.createElement(
              'option',
              {
                selected: option.id === value,
                value: option.id,
                key: i },
              option.name
            );
          })
        )
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

    case 'Email':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          type: 'email',
          value: value,
          name: name,
          onChange: handleChange
        })
      );
    case 'Password':
      return React.createElement(
        Field,
        { label: label },
        React.createElement('input', {
          autocomplete: 'false',
          type: 'password',
          value: value,
          name: name,
          onChange: handleChange
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
      model: {
        attrs: [],
        values: {}
      }
    };
  },

  renderAttr: function renderAttr(attr, i) {
    var model = this.props.model;
    var values = model.values || {};

    if (attr.name === model.user) return null;

    return React.createElement(Element, {
      key: i,
      attr: attr,
      value: values[attr.name],
      onChange: this.handleChange
    });
  },

  render: function render() {
    var model = this.props.model;
    var attrs = model.attrs;

    return React.createElement(
      Form,
      this.props,
      attrs.map(this.renderAttr),
      React.createElement('input', { name: '_model', type: 'hidden', value: model.table }),
      React.createElement(
        Button,
        { type: 'submit', color: 'blue' },
        'Submit'
      )
    );
  },

  handleChange: function handleChange(name, value) {
    if (this.props.onChange) {
      this.props.onChange(name, value);
    }
  }
});