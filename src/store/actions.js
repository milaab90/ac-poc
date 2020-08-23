export default {
    select({ commit }, cardId) {
        setTimeout(() => {
            commit('select', cardId);
        } ,1000);
    }
}