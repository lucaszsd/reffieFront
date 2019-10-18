import ArticleMeta from './ArticleMeta';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import marked from 'marked';
import { ARTICLE_PAGE_LOADED, ARTICLE_PAGE_UNLOADED } from '../../constants/actionTypes';
import NavPartner from './NavPartner';


import ModalProductCarousel from './ModalProductCarousel';
import ModalHeadCarousel from './ModalHeadCarousel';
import Products from './Products';
import ProductDescription from './ProductDescription';
import RelatedImages from './RelatedImages';
import {Col, Row} from 'antd';

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Article extends React.Component {
  componentWillMount() {
    this.props.onLoad(Promise.all([
      agent.Articles.get(this.props.match.params.id),
      agent.Comments.forArticle(this.props.match.params.id)
    ]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    const markup = { __html: marked(this.props.article.body, { sanitize: true }) };
    const canModify = this.props.currentUser &&
      this.props.currentUser.username === this.props.article.author.username;
    return (
      <div>

          <NavPartner/>
          
          <Row type="flex" justify="space-around">
            <ModalHeadCarousel/>
          </Row>
          <Row>
            <h2 class = "description-info">Itens na imagem</h2>
          </Row>
          <Row className = "description-info" type="flex" justify="space-around">
            <Col span = {6}>
             
              <ModalProductCarousel/>
            </Col>
            <Col span = {7}>
              <ProductDescription/>
              </Col>
            <Col span = {7}>
              <Products/>
              </Col>
          </Row>
          
          <Row>
            <h2 class = "description-info">Itens na imagem</h2>
          </Row>
          <RelatedImages/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
