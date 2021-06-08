import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductCard.css';

export default class ProductCard extends Component {
  render() {
    const {
      onClick,
      isCart,
      product: {
        price, title, id, thumbnail,
      },
    } = this.props;
    return (
      <div className="product-card">
        <Link to={`/details/${id}`}>
          <div className="product-img">
            <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          </div>
          <div className="product-info">
            <span>{title}</span>
            <span>R${price.toLocaleString()}</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={() => onClick(id)}
          className={isCart ? 'remove' : 'add'}
        >
          { isCart ? 'Remover Item' : 'Adicionar Item' }
        </button>
      </div>
    );
  }
}
