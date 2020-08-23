import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        selections: [],
        cards: [
            { 'id': 1, 'name': 'Lily', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/155', selected: false},
            { 'id': 2, 'name': 'Apple', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/191', selected: false },
            { 'id': 3, 'name': 'Alice', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/221', selected: false },
            { 'id': 4, 'name': 'Beau', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/108', selected: false },
            { 'id': 5, 'name': 'Bunnie', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/317', selected: false },
            { 'id': 6, 'name': 'Megan', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/22', selected: false },
            { 'id': 7, 'name': 'Melba', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/222', selected: false },
            { 'id': 8, 'name': 'Roald', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/290', selected: false },
            { 'id': 9, 'name': 'Shep', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/126', selected: false },
            { 'id': 10, 'name': 'Rosie', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/44', selected: false },
            { 'id': 11, 'name': 'Henry', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/172', selected: false },
            { 'id': 12, 'name': 'Goldie', 'imgThumb': 'https://acnhapi.com/v1/images/villagers/111', selected: false }
        ]
    },
    getters,
    mutations,
    actions
});