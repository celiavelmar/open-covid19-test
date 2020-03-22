import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    filledInTest: false,
    hasSympthoms: false
  },
  mutations: {
    filledInTest(state) {
      state.filledInTest = true;
    },
    hasSympthoms(state, hasSympthoms) {
      state.hasSympthoms = hasSympthoms;
    }
  },
  actions: {},
  modules: {}
});
