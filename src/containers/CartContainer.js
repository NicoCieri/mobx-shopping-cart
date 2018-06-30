import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import { connect } from 'react-redux'
// import { checkout } from '../actions'
// import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

@inject('cartStore')
@inject('productsStore')
@observer
class CartContainer extends Component {
  getCartProducts = state =>
    this.props.cartStore.addedIds.map(id => ({
      ...this.props.productsStore.getProduct(id),
      quantity: this.props.cartStore.getQuantity(id)
    }));

  render() {
    const products = this.getCartProducts();
    const { checkout } = this.props.cartStore;
    const total = products.reduce((subtotal, { price, quantity }) =>
      (subtotal + price*quantity), 0);
    return (
      <Cart
        products={products}
        total={total}
        onCheckoutClicked={checkout} />
    );
  }
}

export default CartContainer;

// CartContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     quantity: PropTypes.number.isRequired
//   })).isRequired,
//   total: PropTypes.string,
//   checkout: PropTypes.func.isRequired
// }

// const mapStateToProps = (state) => ({
//   products: getCartProducts(state),
//   total: getTotal(state)
// })
//
// export default connect(
//   mapStateToProps,
//   { checkout }
// )(CartContainer)
