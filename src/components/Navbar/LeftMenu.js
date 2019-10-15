import React, { Component } from 'react';
import { Input } from 'antd';

const { Search } = Input;

class LeftMenu extends Component {
  render() {
    return (
   
      <Search className = "search"
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 400 }}
    />
     
    );
  }
}export default LeftMenu;