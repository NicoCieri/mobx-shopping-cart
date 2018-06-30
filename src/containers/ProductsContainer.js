import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'

@inject('cartStore')
@inject('productsStore')
@observer
class ProductsContainer extends Component {
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps', newProps);
  }
  addToCart = id => {
    const { productsStore, cartStore } = this.props;
    productsStore.addToCart(id);
    cartStore.addToCart(id);
  }
  render() {
    // console.log('render');
    const { productsStore: { products } } = this.props;
    // console.log('products', products);
    return (
      <ProductsList title="Products">
        {products.map(product =>
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => this.addToCart(product.id)} />
        )}
      </ProductsList>
    )
  }
}

export default ProductsContainer;
