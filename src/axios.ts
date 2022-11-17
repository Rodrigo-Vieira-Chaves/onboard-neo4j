import axios from 'axios';

export const axiosConn = axios.create({ baseURL: 'http:localhost:8065/api/v4' });
