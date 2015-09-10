var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <Example>
{`<form className="u-form">
  <Field label="First Name">
    <input type="text" placeholder="First Name"/>
  </Field>
  <Field label="Last Name">
    <input type="text" placeholder="Last Name"/>
  </Field>
  <Field label="About">
    <textarea placeholder="About" rows={4}></textarea>
  </Field>
  <Field>
    <Checkbox>
      I agree to Terms and Conditions
    </Checkbox>
  </Field>
  <Button color="blue">Submit</Button>
</form>`}
      </Example>
    );
  }
});
