import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      product: {
        price, title, id, thumbnail,
      },
    } = this.props;
    return (
      <Link to={`/details/${id}`} className="product-card">
        <div className="product-img">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
        </div>
        <div className="product-info">
          <span>{title}</span>
          <span>R${price.toLocaleString()}</span>
        </div>
      </Link>
    );
  }
}
