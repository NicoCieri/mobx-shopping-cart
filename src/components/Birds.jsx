import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('BirdStore')
@inject('productsStore')
@observer
export default class Birds extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.birdInput.value);
    e.target.reset();
  };

  render() {
    const { BirdStore, productsStore } = this.props;

    return (
      <div>
        <h2>You have {BirdStore.birdCount} birds</h2>
        <h2>You have {productsStore.products.length} birds</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            type="text"
            ref={input => (this.birdInput = input)}
            placeholder="Add a bird"
          />
        </form>

        <ul>{BirdStore.birds.map(bird => <li key={bird}>{bird}</li>)}</ul>
      </div>
    );
  }
}
