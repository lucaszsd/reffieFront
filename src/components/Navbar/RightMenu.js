import React, { Component } from 'react';
import { Menu, Icon, Button, Divider } from 'antd';


class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
            <a href="https://ant.design" rel="noopener noreferrer">
            <Icon type="home" />
            INICIO    
            </a>
        </Menu.Item>
        <Menu.Item key="projects">
            <a href="https://ant.design" rel="noopener noreferrer">
                MEUS PROJETOS
            </a>
        </Menu.Item>
        <Divider type = "vertical"/>
        <Menu.Item key="signup">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                REGISTRAR
            </a>
        </Menu.Item>
        <Menu.Item key="login">
            <Button type="primary">
                LOGIN
            </Button>
        </Menu.Item>
      </Menu>
    );
  }
}export default RightMenu;