import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductAttributes from '../components/ProductAttributes';

import '../css/DetailsPage.css';

export default class DetailsPage extends Component {
  constructor(props) {
    super(props);
    // destructuring da lista de produtos e do id passado pela URL
    const { products, match: { params: { id } } } = this.props;

    // filtragem do produto pelo id
    const product = products.find((prod) => prod.id === id);

    this.state = {
      product,
    };
  }

  render() {
    const {
      product: {
        warranty, attributes, thumbnail, price, title,
      },
    } = this.state;

    const { addToCart, match: { params: { id } } } = this.props;

    return (
      <div className="product-details-card">
        <div className="product-details">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          <div className="product-details-info">
            <Link to="/products">Voltar para tela inicial</Link>
            <h2>{title}</h2>
            <span>{warranty}</span>
            <span>R${price.toLocaleString()}</span>
          </div>
        </div>
        <ProductAttributes attributes={attributes} />
        <button type="button" onClick={() => addToCart(id)}>
          Adicionar Item
        </button>
      </div>
    );
  }
}
