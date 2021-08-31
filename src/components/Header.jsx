import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getProductsThunk } from '../actions';

import mercadoTrybe from '../images/mercadoTrybe.png';
import trybeLogo from '../images/trybeLogo.png';
import searchIcon from '../images/searchIcon.png';
import userIcon from '../images/userIcon.png';
import cartIcon from '../images/cartIcon.png';

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
    const { state: { searchText }, props: { username, getProducts } } = this;
    return (
      <header>
        <div>
          <Link to={username ? '/products' : '/'}>
            <img src={trybeLogo} alt="Trybe logo" className="header-img logo" />
            <img src={mercadoTrybe} alt="mercado trybe title" className="header-img title" />
          </Link>
        </div>
        <input
          type="text"
          placeholder="Buscar produtos, marcas e muito mais…"
          value={searchText}
          onChange={this.onType}
          className={username ? '' : 'disabled'}
        />
        <button type="button" onClick={() => getProducts(searchText)} className={username ? '' : 'disabled'}>
          <img src={searchIcon} alt="search icon" />
        </button>
        <div className="user-info">
          {
          username
            ? (
              <>
                <Link to="cart"><img src={cartIcon} alt="user icon" /></Link>
                {username}
              </>
            )
            : (
              <>
                <img src={userIcon} alt="user icon" />
                <Link to="/">Log in</Link>
              </>
            )
        }
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  username: state.userReducer.username,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (payload) => dispatch(getProductsThunk(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
