import React from 'react';
import RowLinks from '../Navbar/RowLinks';
import Photo from './Photo'
import Styles from './project.css'
import ProjectNavbar from './../Navbar/ProjectNavbar'
import { Row, Col } from 'antd';
const Projects = props => {
    if (!props.articles) {
      return (
      <div>
       <div  class = "container ">
          <Row>
            <Col span={12} >
              <h1 class = "title" >Residencial Silva</h1>
              <ProjectNavbar/>

            </Col>
          
          </Row>
         
         
       </div>
        <div> 
          <RowLinks/>
          <div class = "js-masonry">
            <div className ="dark-bg">
              <div class = "content">
                <Photo/>
                <Photo/>
                <Photo/>
                <Photo/>
                <Photo/>
                <Photo/>
                <Photo/>
                <Photo/>
              </div>
            </div>
          </div>
        </div>  
      </div>
      );
    }
}

export default Projects;