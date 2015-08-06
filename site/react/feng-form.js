var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
      <Example html={false}>
        {`var attrs = [
          { name: 'range', type: 'Range', label: 'Range', max: 360, min: 100},
          { name: 'array', type: 'Array', label: 'Aray', options: ['Ornare', 'Vehicula', 'Dolor', 'Lorem'] },
          { name: 'boolean', type: 'Boolean', label: 'Boolean' },
          { name: 'integer', type: 'Integer', label: 'Integer' },
          { name: 'enum', type: "Enum", label: 'Enum', options: ['Ornare', 'Vehicula', 'Dolor', 'Lorem'] },
          { name: 'string', type: 'String', label: 'String' },
          { name: 'text', type: 'Text', label: 'Text' },
          { name: 'color', type: 'Color', label: 'Color'}
        ];

        var values = {
          range: 250,
          array: ['Ornare'],
          boolean: true,
          integer: 12,
          enum: 'Ornare',
          string: 'hello',
          text: 'hello world',
          color: '#3498db'
        };

        <FengForm
          attrs={attrs}
          values={values}
        />`}
        </Example>
        </div>
      );
    }
  });
