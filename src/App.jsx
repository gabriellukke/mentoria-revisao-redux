import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import DetailsPage from './pages/DetailsPage';

import './css/App.css';
import { searchProductByText } from './service/API';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);

    this.state = {
      products: [],
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

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Header onClick={this.onClick} />
        <Switch>
          <Route exact path="/" render={() => <MainPage products={products} loading={loading} />} />
          <Route path="/details/:id" render={(props) => <DetailsPage {...props} />} />
        </Switch>
      </div>
    );
  }
}
