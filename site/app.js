var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
import { Container, Row, Column } from '../react/grid';

module.exports = React.createClass({
  displayName: 'App',

  render() {
    return (
      <div>
         <Header/>

          <Container>
            <Row>
              <Column d={6}>
                <nav className="u-nav u-nav-y">
                  <a href="/css/avatars">avatars</a>
                  <a href="/css/buttons">buttons</a>
                  <a href="/css/forms">forms</a>
                </nav>
              </Column>

              <Column d={18}>
              {this.props.children}
              </Column>
            </Row>
          </Container>
          <Footer/>
      </div>
    );
  }
});
