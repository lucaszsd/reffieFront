import { Col, Row } from 'antd';
import React from 'react';
const RelatedImages = props => {
  if (!props.articles) {
    return (
        <Row type = "flex" justify = "space-around">
            <Col span = {5}>
                <a href = "#">
                    <img class = "img-fluid" src="https://source.unsplash.com/random/400x400?kitchen" alt=""></img>
                </a>
            </Col>
            <Col span = {5}>
                <a href = "#">
                    <img class = "img-fluid" src="https://source.unsplash.com/random/400x400?bedroom" alt=""></img>
                </a>
            </Col>
            <Col span = {5}>
                <a href = "#">
                    <img class = "img-fluid" src="https://source.unsplash.com/random/400x400?living+room" alt=""></img>
                </a>
            </Col>
            <Col span = {5}>
                <a href = "#">
                    <img class = "img-fluid" src="https://source.unsplash.com/random/400x400?washroom" alt=""></img>
                </a>
            </Col>
        </Row>
        );
    }
};

export default RelatedImages;
