import React from 'react';
import { Menu, Icon, Divider, Button, Input} from 'antd';

const { Search } = Input;


class Head extends React.Component {

state = {
    current: 'mail',
    };

    handleClick = e => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    };
  render() {
    return (
        <div  class = "nav">
            <div  class = "row">
                <div>
                    <img class = "logo" src = "./../assets/reffie.PNG" alt = "reffie logo"></img>
                </div>
                <Search placeholder="input search text" onSearch={value => console.log(value)} style={{ width: 400 }}/>
            </div>
           
           
                
            <Menu  style={{float: 'right'}} onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
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
            
      </div>
    );
  }
}

export default Head;
