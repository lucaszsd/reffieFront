import React from 'react';
import { Row , Menu,  } from 'antd';


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
    
      <div class = "categories">
        <div class = "rowlinks">
            <a href = "#">Tudo</a>
            <a href = "#">Estar</a>
            <a href = "#">Jantar</a>
            <a href = "#">Cozinha</a>
            <a href = "#">Escritório</a>
            <a href = "#">Instalações</a>
            <a href = "#">Casas</a>
            <a href = "#">Apartamentos</a>
            <a href = "#">Lofts</a>     
        </div>
      </div>
        
    );
  }
}

export default RowLinks;
