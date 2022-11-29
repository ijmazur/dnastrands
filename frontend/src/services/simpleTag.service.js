import axios from 'axios';

const API_SIMPLETAG_URL = 'http://127.0.0.1:8000/simple-tag/';
const API_BITS_URL = 'http://127.0.0.1:8000/generate-bits/';

const defaultConfig = {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json',
  }
};

class SimpleTagService {

  generateTag() {
    const config = defaultConfig;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.get(API_SIMPLETAG_URL, config)
      .then(response => response.data)
  }

  generateBits(input) {
    const config = defaultConfig;
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('user');
    return axios.post(API_BITS_URL, input, config)
      .then(response => response.data)
  }
}

export default new SimpleTagService();