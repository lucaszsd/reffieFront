import React from 'react';
import { Button, Icon, Avatar, Row, Col } from 'antd';



class NavPartner extends React.Component {


  render() {
    return (
    <Row type="flex" justify="space-between">
      <Col span = {3}>
        <Row type="flex" > 
        <Avatar size={60} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Col>
            <a href="italinea.com">Italinea Torre</a>
            <p>@italineatorre</p>
          </Col>
        </Row>
      </Col>
         
         
     
     
      <Col span = {2}>
        <Button type="primary"><Icon type="plus" />Salvar</Button>
      </Col>
   
            
   
          
    </Row>
        
          
    
     
      
    );
  }
}

export default NavPartner;
