import React, { Component } from 'react';

class Exercises01 extends Component {
  constructor(props) {
    super(props);
    // Khởi tạo state với tên của bản thân
    this.state = {
      name: 'Nguyễn Minh Sơn'
    };
  }
  render() {
    return (
      <div>
        <h1>Họ và tên: {this.state.name}</h1>
      </div>
    );
  }
}
export default Exercises01;
