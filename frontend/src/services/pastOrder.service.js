import axios from 'axios';
import authHeader from './auth-header';

const API_HISTORY_URL = 'http://127.0.0.1:8000/simple-tag/my-tags';
const API_BITS_URL = 'http://127.0.0.1:8000/generate-bits/my-bits';

const defaultConfig = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
  }
};

class PastOrderService {
  getMyTags() {
    const config = defaultConfig;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get(API_HISTORY_URL, config).then(response => response.data);
  }

  getMyBits() {
    const config = defaultConfig;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get(API_BITS_URL, config).then(response => response.data);
  }

  getTagById(id) {
    return axios.get(API_HISTORY_URL + `/${id}`, defaultConfig).then(response => response.data);
  }
  
  getBitById(id) {
    return axios.get(API_BITS_URL + `/${id}`, defaultConfig).then(response => response.data);
  }

  deleteTagById(id) {
    return axios.delete(API_HISTORY_URL + `/${id}`, defaultConfig).then(response => response.data);
  }

  deleteBitById(id) {
    return axios.delete(API_BITS_URL + `/${id}`, defaultConfig).then(response => response.data);
  }
}

export default new PastOrderService();