import React, { Component } from 'react';
import { Menu, Avatar, Badge, Popover, Icon, Button, Divider, Dropdown, message } from 'antd';
import { Link } from 'react-router-dom';
import Notification from './Notification';
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);


function handleMenuClick(e) {
  message.info('Abrir notificação');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Notification/>
    </Menu.Item>
    <Menu.Item key="2">
    <Notification/>
    </Menu.Item>
    <Menu.Item key="3">
    <Notification/>
    </Menu.Item>
  </Menu>
);



class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/" className="nav-link">
                INICIO
          </Link>
        </Menu.Item>
        <Menu.Item key="projects">
        <Link to="/projects" className="nav-link">
                MEUS PROJETOS
          </Link>
        </Menu.Item>
        <Divider type = "vertical"/>
        <Menu.Item key="signup">
          <Link to="/register" className="nav-link">
                REGISTRAR
          </Link>
        </Menu.Item>


            <Button class = "menu-item" type="primary">
                LOGIN
            </Button>

            <Dropdown overlay = {menu}  trigger={['click']}>
            <Badge  className = "menu-item" dot>
              <Icon style={{ fontSize: '30px', color: '#0A78CC' }}   type="bell" />
            </Badge>
    </Dropdown>
    
        
        
        <Avatar size={30} src="https://source.unsplash.com/user/erondu" />
      </Menu>
      
    );
  }
}export default RightMenu;