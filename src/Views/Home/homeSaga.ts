import { all, put, takeLatest, call } from 'redux-saga/effects';
import { HomeActionTypes } from './homeTypes';
import HomeApi from './homeApi';
import Image from '../../Assets/profile.jpg';

function* getArticle() {
  try {
    // const response = yield call(HomeApi.getArticleApi);
    // console.log('res', response);
    const payload = [
      {
        id: 1,
        title: 'Mysore',
        text:
          'Mysore is one of the marvelous city in karnataka state, which is also knows as Heritage city, Its 140km away from the capital of karnataka bangalore',
        img: Image,
        time: '5 min ago',
      },
      {
        id: 2,
        title: 'Bangalore',
        text:
          'Bangalore is one of the capital city in karnataka state, which is also knows as Silicon valley of India, Its famous for its start ups',
        img: Image,
        time: '5 min ago',
      },
      {
        id: 3,
        title: 'Mangalore',
        text:
          'Mangalore is one of the marvelous city in karnataka state, which is also knows as city of Beach, It is in the west cost of India, attached to Arbian sea',
        img: Image,
        time: '5 min ago',
      },
      {
        id: 4,
        title: 'Chamarajanagar',
        text:
          'Chamarajanagar is one of the small town in karnataka state, which is also knows as city of hills, Its consist of nearly 5 hills',
        img: Image,
        time: '5 min ago',
      },
    ];
    yield put({
      type: HomeActionTypes.LOAD_ARTICLE_SUCCESS,
      payload: payload,
    });
  } catch (error) {}
}

export function* HomeSaga() {
  yield takeLatest(HomeActionTypes.LOAD_ARTICLE, getArticle);
}
