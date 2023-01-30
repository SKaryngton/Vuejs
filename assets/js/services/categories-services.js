import axios from 'axios';

/**
 * @return {Promise}
 * */
export function fetchCategories() {
    return axios.get('/api/categories');
}
