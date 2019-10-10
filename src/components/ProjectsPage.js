import React from 'react';



const ProjectsPage = props => {
    if (!props.articles) {
      return (
        <div class = "container">
          <h2>Projetos</h2>
          <div class = "row">
            <Project/>
            <Project/>
            <Project/>
          </div>  
        </div>
       
      );
    }
}

export default ProjectsPage;