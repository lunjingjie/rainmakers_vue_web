import axios from '@/api/axios';
import { USERLIST } from '@/api/api-path';

function getUserList() {
  return axios.get(USERLIST);
}

export default {
  getUserList,
};
