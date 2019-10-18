import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';
import Mansory from './mansory.css'

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        Sem artigos ainda
      </div>
    );
  }

  return (
    <div class = "masonry">

      <div class = "grid js-masonry">
        {
          props.articles.map(article => {
            return (
              <ArticlePreview article={article} key={article.slug} />
            );
          })
        }
      </div>
      <div>
      <ListPagination
          pager={props.pager}
          articlesCount={props.articlesCount}
          currentPage={props.currentPage} />
      </div>
        

    </div>
   
  );
};

export default ArticleList;
