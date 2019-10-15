import React, { Component } from 'react';
import { Row, Icon } from 'antd';
import Styles from './menu.css';
class Navbar extends Component {
	state = {
    current: 'mail',
    visible: false
  }
  showDrawer = () => {
    this.setState({
      visible: false,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
        <Row className = "project-sublink">
			<a href = "#" >INSPIRAÇÕES</a>
			<a href = "#" ><Icon type="shopping-cart" />18 PRODUTOS SALVOS</a>
		</Row>
    );
  }
}

export default Navbar;