import axios from 'axios';

class HomeApi {
  getArticleApi = () => axios.get(`/api/v1`);
}
export default new HomeApi();
