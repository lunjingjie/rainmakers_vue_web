import Axios from 'axios';

export default Axios.create({
  baseURL: 'api',
  timeout: 100000,
});
