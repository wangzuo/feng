import React from 'react';
import { Link } from 'react-router';

module.exports = () => (
  <div className="m-header">
    <div className="g-c">
      <h1>
        <Link to="/">feng-ui</Link>
      </h1>

      <nav className="f-fr">
        <Link activeClassName="is-active" to="/">Getting started</Link>
        <Link activeClassName="is-active" to="/css">CSS</Link>
        <Link activeClassName="is-active" to="#">React</Link>
        <a href="http://github.com/wangzuo/feng-ui">Github</a>
      </nav>

      {/*<Nav className="u-nav-x f-fr" items={pages}/>*/}
    </div>
  </div>
);