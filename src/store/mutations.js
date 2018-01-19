/* eslint-disable no-param-reassign */

import { LOGIN, LOGOUT } from './mutations-type';

export default {
  [LOGIN](state, username) {
    state.username = username;
  },

  [LOGOUT](state) {
    state.username = null;
  },
};
