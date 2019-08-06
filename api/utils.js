import axios from 'axios'

const API_URL = 'http://localhost:3001/api/';
const API2_URL = 'http://localhost:8888/api/';

//API LOOPBACK
export function getApiNoAuth() {
    return axios.create ({
        baseURL : API_URL,
        timeout : 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'aplication/json'
        }
    })
}

export function getApi (token, params) {
    if (params) { params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL : API_URL,
        timeout : 100000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'aplication/json; charset=utf-8'
        }
    })
}

//API SPRINGBOT
export function getApiAuth() {
    return axios.create ({
        baseURL : API2_URL,
        timeout : 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'aplication/json'
        }
    })
}

export function getApi2 (token, params) {
    if (params) { params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL : API2_URL,
        timeout : 100000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'aplication/json; charset=utf-8'
        }
    })
}