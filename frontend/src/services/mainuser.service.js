import axios from 'axios';
import authHeader from './auth-header';

const API_SECONDUSER_URL = 'http://127.0.0.1:8000/seconduser';
const API_USER_URL = 'http://127.0.0.1:8000/api/token/user';

const defaultConfig = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
  }
};

class SecondUserService {
  getSecondUserList() {
    const config = JSON.parse(JSON.stringify(defaultConfig));
    config.headers = { ...config.headers, ...authHeader() };
    return axios.get(API_SECONDUSER_URL, config).then(
      response => response.data
    );
  }

  updateUser(user) {
    const config = JSON.parse(JSON.stringify(defaultConfig));
    config.headers = { ...config.headers, ...authHeader() };
    return axios.put(`${API_SECONDUSER_URL}/${user.id}/`, user, config).then(
      response => response.data
    );
  }

  getUserInfo() {
    const config = JSON.parse(JSON.stringify(defaultConfig));
    config.headers = { ...config.headers, ...authHeader() };
    return axios.get(API_USER_URL, config).then(
      response => response.data
    );
  }
}

export default new SecondUserService();