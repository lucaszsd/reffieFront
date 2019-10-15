import React from 'react';
import RowLinks from '../Navbar/RowLinks';
import { Row, Col, Card, Icon, Avatar} from 'antd';
const {Meta} = Card;

const Projects = props => {
    if (!props.articles) {
      return (
        
    

       
        <Card avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} className = "item" title="Teste" extra={<a><Icon type="star" /></a>} style={{ width: 300, margin: 20 }} hoverable cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
            <p><Icon type="appstore" />3 Comentários</p>
        </Card>
 
      );
    }
}

export default Projects;