import React from 'react';
const RelatedImages = props => {
  if (!props.articles) {
    return (
        <div>
            <h2>Imagens Relacionadas</h2>
            <div class = "container-fluid">
                <div class = "row">
                    <div class = "col-3">
                        <a href = "#">
                            <img class = "img-fluid" src="http://placehold.it/400x400" alt=""></img>
                        </a>
                    </div>
                    <div class = "col-3">
                        <a href = "#">
                            <img class = "img-fluid" src="http://placehold.it/400x400" alt=""></img>
                        </a>
                    </div>
                    <div class = "col-3">
                        <a href = "#">
                            <img class = "img-fluid" src="http://placehold.it/400x400" alt=""></img>
                        </a>
                    </div>
                    <div class = "col-3">
                        <a href = "#">
                            <img class = "img-fluid" src="http://placehold.it/400x400" alt=""></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
};

export default RelatedImages;
