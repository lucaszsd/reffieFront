import React from 'react';

const Products = props => {
  if (!props.articles) {
    return (
        <div class = "col-12">
            <div class = "row">
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
            </div>
            <div class = "row">
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
            </div>
            <div class = "row">
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
                <div class = "col-4">
                    <a href = "#">
                        <img class = "img-fluid" src="http://placehold.it/200x200" alt=""></img>
                    </a>
                </div>
            </div>
        </div>
        );
    }
};

export default Products;
