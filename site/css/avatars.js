var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
<Example>
{`<div className="example-avatars">
  <Avatar email="wzuoadjusted@gmail.com"/>
  <Avatar email="wzuoadjusted@gmail.com" round/>
  <Avatar email="wzuoadjusted@gmail.com" circle/>
</div>`}
</Example>

        <Example>
{`<div className="example-avatars">
  <Avatar name="David"/>
  <Avatar name="唐僧"/>
  <Avatar name="おだ"/>
</div>`}
        </Example>

        <Example>
{`<div className="example-avatars">
  <Avatar name="David" round/>
  <Avatar name="唐僧" round/>
  <Avatar name="おだ" round/>
</div>`}
        </Example>

        <Example>
{`<div className="example-avatars">
  <Avatar name="David" circle/>
  <Avatar name="唐僧" circle/>
  <Avatar name="おだ" circle/>
</div>`}
        </Example>
      </div>
    );
  }
});
