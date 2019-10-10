import React from 'react';
import { Button, Icon, Avatar } from 'antd';



class NavPartner extends React.Component {


  render() {
    return (
      <div class = "container-fluid">
        <div class = "container">
          <div class = "row">
            <Avatar size="large" icon="user" />
            <div>
              <a href="italinea.com">Italinea Torre</a>
              <p>@italineatorre</p>
            </div>
          </div>
          <div class = "float-right"><Button type="primary"><Icon type="plus" />Salvar</Button></div>
        </div>  
      </div>
      
    );
  }
}

export default NavPartner;
