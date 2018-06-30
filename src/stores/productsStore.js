import { observable, action, computed } from 'mobx';
import shop from '../api/shop';

class ProductsStore {
  @observable byId = {};
  @observable visibleIds = [];

  @action getAllProducts = () => {
    shop.getProducts(products => {
      this.receiveProducts(products);
    });
  };

  @action receiveProducts = products => {
    this.byId = {
      ...this.byId,
      ...products.reduce((obj, product) => {
        obj[product.id] = product
        return obj
      }, {})
    };
    this.visibleIds = products.map(({ id }) => id );
  };

  @action addToCart = id => {
    if (this.byId[id].inventory > 0) {
      this.addToCartUnsafe(id);
    }
  };

  @action addToCartUnsafe = id => {
    this.byId[id].inventory -= 1;
  };

  @action getProduct(id) {
    return this.byId[id];
  };

  @computed get products() {
    return this.visibleIds.map(id => this.byId[id]);
  };
}

const productsStore = new ProductsStore();

export default productsStore;
// export { ProductsStore };
