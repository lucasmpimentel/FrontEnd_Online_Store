import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderCheckbox extends Component {
  render() {
    return (
      <header>
        <Link to="/" clasName="link-clear">
          <h1 className="title-store">Lojinha do seu Zé!</h1>
        </Link>
      </header>
    );
  }
}
