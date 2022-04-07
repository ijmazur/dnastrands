import axios from 'axios';
import authHeader from './auth-header';

const API_HISTORY_URL = 'http://127.0.0.1:8000/history';

const defaultConfig = {
    headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
    }
};

class PastOrderService {
    getPastOrder(selectedOption) {
        const config = JSON.parse(JSON.stringify(defaultConfig));
        config.headers = {...config.headers, ...authHeader() };
        config.params = { option: selectedOption };
        return axios.get(API_HISTORY_URL, config).then(
            response => response.data
        );
    }

    addNewPastOrder(pastOrder) {
        const config = JSON.parse(JSON.stringify(defaultConfig));
        config.headers = {...config.headers, ...authHeader() };
        return axios.post(API_HISTORY_URL + '/', pastOrder, config).then(
            response => response.data
        );
    }

    updatePastOrder(pastOrder) {
        const config = JSON.parse(JSON.stringify(defaultConfig));
        config.headers = {...config.headers, ...authHeader() };
        return axios.put(`${API_HISTORY_URL}/${pastOrder.id}/`, pastOrder, config).then(
            response => response.data
        );
    }

    deletePastOrder(pastOrderId) {
        const config = JSON.parse(JSON.stringify(defaultConfig));
        config.headers = {...config.headers, ...authHeader() };
        return axios.delete(`${API_HISTORY_URL}/${pastOrderId}`, config).then(
            response => response.data
        );
    }
}

export default new PastOrderService();