import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
interface ParentState {
  product: Product;
}
class ParentComponent extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    // Khởi tạo state với một đối tượng product
    this.state = {
      product: {
        id: 1,
        name: 'Product A',
        price: 100,
        quantity: 10
      }
    };
  }
  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <ChildComponent product={this.state.product} />
      </div>
    );
  }
}

export default ParentComponent;
