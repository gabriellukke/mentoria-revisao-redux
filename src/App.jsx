import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import DetailsPage from './pages/DetailsPage';
import Login from './pages/LoginPage';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/products" component={MainPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="/details/:id" component={DetailsPage} />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = ({ productReducer: { products } }) => ({
//   products,
// });

export default App;
