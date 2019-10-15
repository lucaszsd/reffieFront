import React from 'react';
import { Row} from 'antd';
class RowLinks extends React.Component {

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
    
      <Row className = "categories" type="flex" justify="space-around">
        <div class = "rowlinks">
            <a href = "#">TUDO</a>   
            <a href = "#">ESTAR</a>
            <a href = "#">JANTAR</a>
            <a href = "#">COZINHA</a>
            <a href = "#">ESCRITÓRIO</a>
            <a href = "#">INSTALAÇÕES</a>
            <a href = "#">CASAS</a>
            <a href = "#">APARTAMENTOS</a>
            <a href = "#">LOFTS</a>     
        </div>
      </Row>
        
    );
  }
}

export default RowLinks;
