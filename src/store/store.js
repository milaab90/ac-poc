import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selections: [],
        cards: [],
        highprice: 360000,
        hobby: ''
      },
    getters,
    mutations,
    actions
});