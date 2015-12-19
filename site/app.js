import React from 'react';
import Header from './header';
import Footer from './footer';
import Nav from './nav';
import { Link } from 'react-router';
import { Container, Row, Column } from '../react/grid';

module.exports = (props) => (
  <div>
    <Header/>

    <Container>
      <Row>
        <Column d={6}>
          <nav className="u-nav u-nav-y">
            <Link to="/css/avatars">avatars</Link>
            <Link to="/css/buttons">buttons</Link>
            <Link to="/css/forms">forms</Link>
            <Link to="/css/boxes">boxes</Link>
          </nav>
        </Column>

        <Column d={18}>
        {props.children}
        </Column>
      </Row>
    </Container>
    <Footer/>
  </div>
);
