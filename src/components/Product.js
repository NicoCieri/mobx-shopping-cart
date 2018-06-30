import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ price, inventory, title, quantity }) => (
  <div>
    {title} - &#36;{price}
    {inventory ? ` x ${inventory}` : null}
    {quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
