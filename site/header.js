import React from 'react';
import { Link } from 'react-router';

module.exports = () => (
  <div className="m-header">
    <div className="g-c">
      <h1>
        <Link to="/">feng-ui</Link>
      </h1>

      <nav className="f-fr">
        <a className="is-active" href="/">Getting started</a>
        <a href="/css/avatars">CSS</a>
        <a href="#">React</a>
        <a href="http://github.com/wangzuo/feng-ui">Github</a>
      </nav>

      {/*<Nav className="u-nav-x f-fr" items={pages}/>*/}
    </div>
  </div>
);