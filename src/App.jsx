import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/LoginPage';

import searchProductByText from './service/API';

import './css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.removeProductOfCart = this.removeProductOfCart.bind(this);

    this.state = {
      products: [],
      cartProducts: [],
      username: '',
    };
  }

  async onClick(searchText) {
    this.setState({ loading: true });
    const { results } = await searchProductByText(searchText);
    this.setState({ products: results, loading: false });
  }

  setUsername(username) {
    this.setState({ username });
  }

  addProductToCart(id) {
    const { products } = this.state;
    const product = products.find((prod) => prod.id === id);
    this.setState((prevState) => ({
      cartProducts: [...prevState.cartProducts, product],
    }));
  }

  removeProductOfCart(id) {
    const { cartProducts: products } = this.state;
    const cartProducts = products.filter((prod) => prod.id !== id);
    this.setState({ cartProducts });
  }

  render() {
    const {
      products, cartProducts, loading, username,
    } = this.state;
    return (
      <div className="App">
        <Header onClick={this.onClick} username={username} />
        <Switch>
          <Route exact path="/" render={() => <Login setUsername={this.setUsername} />} />
          <Route exact path="/products" render={() => <MainPage products={products} loading={loading} addToCart={this.addProductToCart} />} />
          <Route exact path="/cart" render={() => <CartPage products={cartProducts} onClick={this.removeProductOfCart} />} />
          <Route path="/details/:id" render={(props) => <DetailsPage {...props} products={products} addToCart={this.addProductToCart} />} />
        </Switch>
      </div>
    );
  }
}
