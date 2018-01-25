import TestApi from '@/api/test-api';

function getUserList() {
  return TestApi.getUserList();
}

export default {
  getUserList,
};
