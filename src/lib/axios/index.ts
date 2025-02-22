import axios, { AxiosRequestConfig } from "axios";

// config: other options i.e. headers, params, etc
export const GetRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    config.params = data; // set query params to the request
    return axios.get(url, config);
};

export const PostRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.post(url, data, config);
};

export const PutRequest = (url: string, data?: any, config: AxiosRequestConfig = {}) => {
    return axios.put(url, data, config);
};

export const DeleteRequest = (url: string, config: AxiosRequestConfig = {}) => {
    return axios.delete(url, config);
};
