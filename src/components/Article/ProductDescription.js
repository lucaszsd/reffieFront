import React from 'react';
import { Button, Icon, Row, Col } from 'antd';
import Style from './article.css'
import GlobalStyle from './../globalStyle.css';
const ProductDescription = props => {
  if (!props.articles) {
    return (
        <Col className = "description-main"span = {24}>
            <h3>KABUKI Cesto de Roupa 60 cm x 40 cm x 30 cm</h3>
            <p>Cesto para roupa, conbfeccionado artesanalmente em bambu com base em compensado, estrutura em aramado e forro em tecido 60% poliéster/40% algodão</p>
            <Row>
                <a class = "description-links" href = "#"><Icon type="mail" />ESPECIFICAÇÕES</a>
                <a class = "description-links" href = "#"><Icon type="mail" />MODELO</a>
            </Row>
           
            <img class = "description-partner-logo" src="http://placehold.it/200x40" alt=""></img>
            <h6 class = "description-price">R$ 122,00</h6>
            <Row type = "flex" justify = "end">
                <Button type="primary" size={"large"}><Icon type="mail" />Ver No Site</Button>
                <Button type="primary" size={"large"}><Icon type="mail" />Salvar</Button>
            </Row>
         
        </Col>
        );
    }
};

export default ProductDescription;
