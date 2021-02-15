import axios from 'axios'

const BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'

const getPayload = async (name, data, id) => {
    switch (name) {
        case 'all':
            return {
                method: 'get',
                url: `${BASE_URL}/all.json`,
                data
            }
        default:
            const errorMessage = 'Error api not found'
            throw errorMessage
    }
}

async function request({
    method, url, headers, data
}) {
    const res = await axios({
        headers,
        method,
        url,
        data
    });
    return res.data;
}

export const httpClient = async (name, data, id) => {
    const payload = await getPayload(name, data, id);
    return await request(payload);
}