import React from 'react';



const Project = props => {
    if (!props.articles) {
      return (
        <div class = "container">
            <h3>Nome do Projeto</h3>
            <div class = "row">
                <div class = "col-8">
                    <img class = "img-fluid" src="http://placehold.it/400x400" alt=""></img>
                </div>
                <div class = "col-4">
                    <div class = "row">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </div>
                    <div class = "row">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </div>
                </div>
              
            </div>
        </div>
      );
    }
}

export default Project;