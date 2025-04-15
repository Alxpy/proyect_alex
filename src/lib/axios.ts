import axios from 'axios';
import { URL_BACK } from '@/config/global';

const instance = axios.create({
  baseURL: URL_BACK + "/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;