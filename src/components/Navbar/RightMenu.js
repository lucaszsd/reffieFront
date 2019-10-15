import React, { Component } from 'react';
import { Menu, Avatar, Badge, Popover, Icon, Button, Divider } from 'antd';
import { Link } from 'react-router-dom';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
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


            <Button type="primary">
                LOGIN
            </Button>
    
        
        <Popover placement="bottom" title={text} content={content} trigger="click">
            <Badge  className = "menu-item" dot>
              <Icon style={{ fontSize: '30px', color: '#0A78CC' }}   type="bell" />
            </Badge>
        </Popover>
        <Avatar size={30} src="https://source.unsplash.com/user/erondu" />
      </Menu>
      
    );
  }
}export default RightMenu;