import { Carousel, Col, Row } from 'antd';
import React from 'react';


class ModalProductCarousel extends React.Component {

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
      
               
                <Carousel  autoplay>
                    <div>
                    
                    <img src="https://source.unsplash.com/random/300x300?kitchen" alt=""></img>
                    </div>
                    <div>
                
                    <img src="https://source.unsplash.com/random//300x300?living+room" alt=""></img>
                    </div >
                    <div>
                  
                    <img src="https://source.unsplash.com/random//300x300?bedroom" alt=""></img>
                    </div>
                    <div>
                 
                    <img src="https://source.unsplash.com/random//300x300?house" alt=""></img>
                    </div>
                 </Carousel>

           

        )
    }
};

export default ModalProductCarousel;