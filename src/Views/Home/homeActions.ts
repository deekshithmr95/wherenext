import { HomeActionTypes } from './homeTypes';

export const loadArticle = () => {
  return {
    type: HomeActionTypes.LOAD_ARTICLE,
    payload: {},
  };
};
