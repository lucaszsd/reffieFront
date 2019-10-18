import { Carousel, Col } from 'antd';
import React from 'react';

function onChange(a, b, c) {
    console.log(a, b, c);
  }
class ModalHeadCarousel extends React.Component {




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
        <Col span = {16}>
             <Carousel afterChange={onChange}>
             <div>
                    <img src="https://source.unsplash.com/random/800x500?kitchen" alt=""></img>
                    </div>
                    <div>
                
                    <img src="https://source.unsplash.com/random/800x500?living+room" alt=""></img>
                    </div >
                    <div>
                  
                    <img src="https://source.unsplash.com/random/800x500?bedroom" alt=""></img>
                    </div>
                    <div>
                 
                    <img src="https://source.unsplash.com/random/800x500?house" alt=""></img>
                    </div>
            </Carousel>

        </Col>
           
        )
    }
};

export default ModalHeadCarousel;