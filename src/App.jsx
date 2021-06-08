import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/LoginPage';

import './css/App.css';
import searchProductByText from './service/API';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getUsername = this.getUsername.bind(this);

    this.state = {
      products: [],
      cartProducts: [],
      username: '',
    };
  }

  componentDidMount() {
    console.log('renderizou App');
  }

  async onClick(searchText) {
    this.setState({ loading: true });
    const { results } = await searchProductByText(searchText);
    this.setState({ products: results, loading: false });
  }

  getUsername(username) {
    console.log(username);
    this.setState({ username });
  }

  render() {
    const {
      products, cartProducts, loading, username,
    } = this.state;
    return (
      <div className="App">
        <Header onClick={this.onClick} username={username} />
        <Switch>
          <Route exact path="/" render={() => <Login getUsername={this.getUsername} />} />
          <Route exact path="/products" render={() => <MainPage products={products} loading={loading} />} />
          <Route exact path="/cart" render={() => <CartPage products={cartProducts} />} />
          <Route path="/details/:id" render={(props) => <DetailsPage {...props} products={products} />} />
        </Switch>
      </div>
    );
  }
}
