var React = require('react');
var babel = require('babel-core/browser');
var Grid = require('../lib/grid');
var Button = require('../lib/button');
var ButtonGroup = require('../lib/button-group');
var Form = require('../lib/form');
var Card = require('../lib/card');
var Field = require('../lib/field');
var Checkbox = require('../lib/checkbox');
var Label = require('../lib/label');
var Tabs = require('../lib/tabs');
// var Gravatar = require('../lib/Gravatar');
var FengForm = require('../lib/feng-form');

module.exports = React.createClass({
  displayName: 'Example',

  getDefaultProps() {
    return {
      html: true
    };
  },

  getInitialState() {
    return {
      active: 0
    };
  },

  render() {
    var showHtml = this.props.html;
    var code = this.props.children;
    var active = this.state.active;

    var transformed = babel.transform(code).code;
    var el = eval(transformed);

    return (
      <div {... this.props} className="m-example">
        <div className="preview">
          {el}
        </div>

        <Tabs.Tabs className="codes">
          <Tabs.Nav>
            <Tabs.Tab active={active === 0} onClick={this.changeTab.bind(null, 0)}>React</Tabs.Tab>
            <Tabs.Tab active={active === 1} onClick={this.changeTab.bind(null, 1)}>Html</Tabs.Tab>
          </Tabs.Nav>

          <Tabs.Contents>
            <Tabs.Content active={active === 0}>
              <pre>
                {code}
              </pre>
            </Tabs.Content>

            <Tabs.Content active={active === 1}>
              {showHtml ?
              <pre>
                {React.renderToStaticMarkup(el)}
              </pre> : null}
            </Tabs.Content>
          </Tabs.Contents>
        </Tabs.Tabs>
      </div>
    );
  },

  changeTab(i) {
    this.setState({
      active: i
    });
  }
});
