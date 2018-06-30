import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'mobx-react';
import productsStore from './stores/productsStore';
import cartStore from './stores/cartStore';
import App from './containers/App'

const stores = { productsStore, cartStore };

productsStore.getAllProducts();

render(
  <Provider {...stores} >
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
