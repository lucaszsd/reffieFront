import { Carousel } from 'antd';
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
        
            <Carousel afterChange={onChange}>
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

export default ModalHeadCarousel;