var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <h3>Gravatar</h3>
<Example>
{`<div className="example-avatars">
  <Avatar email="wzuoadjusted@gmail.com"/>
  <Avatar email="wzuoadjusted@gmail.com" round/>
  <Avatar email="wzuoadjusted@gmail.com" circle/>
  <Avatar email="wzuoadjusted@gmail.com" size="lg"/>
  <Avatar email="wzuoadjusted@gmail.com" size="lg" round/>
  <Avatar email="wzuoadjusted@gmail.com" size="lg" circle/>
</div>`}
</Example>

        <h3>Sqaure (default)</h3>
        <Example>
{`<div className="example-avatars">
  <Avatar name="David"/>
  <Avatar name="唐僧"/>
  <Avatar name="おだ"/>
  <Avatar name="David" size="lg"/>
  <Avatar name="唐僧" size="lg"/>
  <Avatar name="おだ" size="lg"/>
</div>`}
        </Example>

        <h3>Round</h3>
        <Example>
{`<div className="example-avatars">
  <Avatar name="David" round/>
  <Avatar name="唐僧" round/>
  <Avatar name="おだ" round/>
  <Avatar name="David" size="lg" round/>
  <Avatar name="唐僧" size="lg" round/>
  <Avatar name="おだ" size="lg" round/>
</div>`}
        </Example>

        <h3>Circle</h3>
        <Example>
{`<div className="example-avatars">
  <Avatar name="David" circle/>
  <Avatar name="唐僧" circle/>
  <Avatar name="おだ" circle/>
  <Avatar name="David" size="lg" circle/>
  <Avatar name="唐僧" size="lg" circle/>
  <Avatar name="おだ" size="lg" circle/>
</div>`}
        </Example>
      </div>
    );
  }
});
