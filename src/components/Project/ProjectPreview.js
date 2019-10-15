import React from 'react';
import { Avatar } from 'antd';
import { Row, Col } from 'antd';

const Project = props => {
    if (!props.articles) {
      return (
       <Col className = "project-preview" span={6}>

       
            <Col span={18}>
                <h3 class = "project-preview-title">Residencial Silva</h3>
            </Col>
            <Row>
                <Col span={16}>
                    <img class = "img-fluid project-preview-image" src="https://source.unsplash.com/random/400x400" alt=""></img>
                </Col>
                <Col span={8} >
                    <img class = "img-fluid project-preview-image" src="https://source.unsplash.com/random/180x180" alt=""></img>
                    <img class = "img-fluid project-preview-image" src="https://source.unsplash.com/random/180x180" alt=""></img>
                </Col>
            </Row>
            <div class = "project-preview-description">
                <p class = "project-preview-photo-count">26 imagens</p>
                <Row>
                    <Avatar className = "avatar" src="https://source.unsplash.com/user/erondu" />
                    <Avatar className = "avatar" src="https://source.unsplash.com/user/erondu" />
                    <Avatar className = "avatar" src="https://source.unsplash.com/user/erondu" />
                    <Avatar className = "avatar" src="https://source.unsplash.com/user/erondu" />
                </Row>
            </div>
            
            </Col>
      
      );
    }
}

export default Project;