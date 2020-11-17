import { combineReducers } from 'redux';

//reducers
import ArticleReducer from '../Views/Home/homeReducer';

export default combineReducers({
  article: ArticleReducer,
});
