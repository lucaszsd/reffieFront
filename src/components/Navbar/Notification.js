import React from 'react';
import { Card, Avatar} from 'antd';
const { Meta } = Card;
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
    
      <Card style={{ width: 300, marginTop: 16 }}>
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
      </Card> 
    
        
    );
  }
}

export default RowLinks;
