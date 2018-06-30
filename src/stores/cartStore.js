import { observable, action, computed } from 'mobx';

class CartStore {
  @observable addedIds;
  @observable quantityById;

  constructor() {
    this.addedIds = [];
    this.quantityById = {};
  }

  @action addToCart = (id) => {
    if (this.addedIds.indexOf(id) === -1) {
      this.addedIds.push(id);
    }
    this.quantityById[id] = (this.quantityById[id] || 0) + 1
  }

  @action checkout = () => {
    this.addedIds = [];
    this.quantityById = {};
  };

  @action getQuantity(productId) {
    // console.log('getQuantity', productId, this.quantityById[productId]);
    return this.quantityById[productId] || 0
  }

  @computed get getAddedIds() {
    return this.addedIds;
  }
}

const cartStore = new CartStore();

export default cartStore;
export { CartStore };
