import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductAttributes from '../components/ProductAttributes';

import '../css/DetailsPage.css';
import { getProductById } from '../service/API';
import LoadingPage from './LoadingPage';

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);
    this.setState({ product, loading: false });
  }

  render() {
    const {
      product: {
        warranty, attributes, thumbnail, price, title,
      },
      loading,
    } = this.state;

    if (loading) {
      return <LoadingPage />;
    }

    return (
      <div className="product-details-card">
        <div className="product-details">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          <div className="product-details-info">
            <Link to="/">Voltar para tela inicial</Link>
            <h2>{title}</h2>
            <span>{warranty}</span>
            <span>R${price.toLocaleString()}</span>
          </div>
        </div>
        <ProductAttributes attributes={attributes} />
      </div>
    );
  }
}
