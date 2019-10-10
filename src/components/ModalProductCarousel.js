import { Carousel } from 'antd';
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
            <Carousel autoplay>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
            </Carousel>

        )
    }
};

export default ModalProductCarousel;