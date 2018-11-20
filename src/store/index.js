import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// modules
import data from './modules/data';

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    data
  }
});
