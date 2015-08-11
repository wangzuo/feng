var React = require('react');
var Example = require('../example');

module.exports = React.createClass({
  render() {
    return (
      <div>
        <Example>
{`<Card
  label="NYHETER"
  title="Ornare Parturient Ridiculus Nibh"
  leadtext="Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod."
  link="#"
  image="http://yoo.io//gk/GkkemmjxHGXIdrNi4Nv8Ig.jpg"
  authorName="Wang Zuo"
  authorEmail="wzuoadjusted@gmail.com"
  time="3 days ago"
/>`}
        </Example>

        <Example>
{`<Slat
  title="Egestas Adipiscing Malesuada Euismod Bibendum"
  image="http://yoo.io//qm/QM30YAEXXaGTmfAZK0jl0w.jpg">
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit.
</Slat>`}
        </Example>
      </div>
    );
  }
});
