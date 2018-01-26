import axios from '@/api/axios';

function getUserList(api) {
  return axios.get(api);
}

export default {
  getUserList,
};
