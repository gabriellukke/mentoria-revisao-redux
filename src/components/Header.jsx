import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import mercadoTrybe from '../images/mercadoTrybe.png';
import trybeLogo from '../images/trybeLogo.png';
import searchIcon from '../images/searchIcon.png';
import userIcon from '../images/userIcon.png';

import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };

    this.onType = this.onType.bind(this);
  }

  onType(event) {
    const { target: { value } } = event;
    this.setState({ searchText: value });
  }

  render() {
    const { state: { searchText }, props: { onClick, username } } = this;
    return (
      <header>
        <div>
          <img src={trybeLogo} alt="Trybe logo" className="header-img logo" />
          <img src={mercadoTrybe} alt="mercado trybe title" className="header-img title" />
        </div>
        <input
          type="text"
          placeholder="Buscar produtos, marcas e muito mais…"
          value={searchText}
          onChange={this.onType}
          className={username ? '' : 'disabled'}
        />
        <button type="button" onClick={() => onClick(searchText)} className={username ? '' : 'disabled'}>
          <img src={searchIcon} alt="search icon" />
        </button>
        <div className="user-info">
          <img src={userIcon} alt="user icon" />
          {username || <Link to="/">Log in</Link>}
        </div>
      </header>
    );
  }
}

export default Header;
