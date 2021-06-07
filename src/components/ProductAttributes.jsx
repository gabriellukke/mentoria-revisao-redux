import React, { Component } from 'react';

export default class ProductAttributes extends Component {
  render() {
    const { attributes } = this.props;
    return (
      <>
        <h4>Características</h4>
        <ul className="attributes-list">
          {attributes.map(({ name, value_name: value }) => (
            <li className="attribute">
              {name}:  {value}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
