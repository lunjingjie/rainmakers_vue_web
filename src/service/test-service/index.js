import TestApi from '@/api/test-api';

function getUserList(api) {
  return TestApi.getUserList(api);
}

export default {
  getUserList,
};
