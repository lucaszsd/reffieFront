import React from 'react';
import Project from './ProjectPreview';
import { Button, Icon, Row, Col} from 'antd';
const Projects = props => {
    if (!props.articles) {
      return (
        <div>
          

          <div  class = "container ">
          <Row>
            <Col span={12} >
              <h1 class = "title" >Meus Projetos</h1>
              <Button className = "btn-new-project" type="primary" icon="plus" onClick={this.enterIconLoading}>Novo Projeto</Button>


            </Col>
          
          </Row>
</div>
        
          
         
         
            <div class = "js-masonry">
              <Row className = "content" type="flex" justify="center">
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
                  <Project/>
              </Row>
              
            </div>
        </div>  
      );
    }
}

export default Projects;