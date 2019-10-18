import React from 'react';
import { Col, Row} from 'antd';
const Products = props => {
  if (!props.articles) {
    return (
        <Col className = "description-products-list" span = {24}>
            <Row type = "flex" justify = "space-around">
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?knife" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?spoon" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?fork" alt=""></img>
                    </a>
                </Col>
            </Row>

            <Row type = "flex" justify = "space-around">
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?cup" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?plate" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?bowl" alt=""></img>
                    </a>
                </Col>
            </Row>

            <Row type = "flex" justify = "space-around">
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?cutting+table" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?tea+pot" alt=""></img>
                    </a>
                </Col>
                <Col className = "description-product" span = {7}>
                    <a href = "#">
                        <img class = "img-fluid" src="https://source.unsplash.com/random/300x300?trash+can" alt=""></img>
                    </a>
                </Col>
            </Row>
          
        </Col>
        );
    }
};

export default Products;
