import React from 'react';
import { Button, Icon } from 'antd';
const ProductDescription = props => {
  if (!props.articles) {
    return (
        <div class = "col-12">
            <h3>Nome do produto</h3>
            <p>Descrição asdjalskd kj alksdj asdkjas dlaskjda sd asldkj alskdjas d</p>
            <a>
            <Icon type="mail" />
            Especificações
            </a>
            <a>
            <Icon type="mail" />
            Especificações
            </a>
            <img src="http://placehold.it/200x40" alt=""></img>
            <p>R$ 122,00</p>
            <Button type="primary">Ver No Site</Button>
            <Button type="primary">Salvar</Button>
        </div>
        );
    }
};

export default ProductDescription;
