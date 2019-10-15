import React from 'react';
import Project from './ProjectPreview';
import { Button, Icon, Row, Col} from 'antd';
const Projects = props => {
    if (!props.articles) {
      return (
        <div>
          
          <Row  >
            <Col className = "title-margin" span={12} >
              <h1 class = "title" >Meus Projetos</h1>
              <Button className = "btn-new-project" type="primary" icon="plus" onClick={this.enterIconLoading}>Novo Projeto</Button>
            </Col>
          </Row>
            
          
         
         
            <div class = "js-masonry">
              <div className ="projects-section">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
              </div>
            </div>
        </div>  
      );
    }
}

export default Projects;