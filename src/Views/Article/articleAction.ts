import { ArticleActionTypes } from './articleTypes';

export const loadArticleById = (id:number) => {
  return {
    type: ArticleActionTypes.LOAD_ARTICLE_BY_ID,
    payload: id,
  };
};
