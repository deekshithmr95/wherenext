import { HomeActionTypes } from './homeTypes';

const initialState = {
  loading: false,
  articles: [],
  error: '',
};

const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case HomeActionTypes.LOAD_ARTICLE: {
      return {
        ...state,
        loading: true,
        error: '',
      };
    }
    case HomeActionTypes.LOAD_ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: '',
      };
    }
    case HomeActionTypes.LOAD_ARTICLE_FAILED: {
      return {
        ...state,
        loading: false,
        articles: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default ArticleReducer;
