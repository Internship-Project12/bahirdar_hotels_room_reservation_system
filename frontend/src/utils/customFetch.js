import axios from 'axios';

const customFetch = axios.create({
  baseUrls: '/api/v1'
})

export default customFetch;