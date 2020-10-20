import data from '@/api/data'

export default {
    fetchCards(context) {
        return new Promise(function(resolve) {
          data.getCards(cards => {
            context.commit('setCards',cards)
            resolve();
          })
        })
    },
    select({ commit }, cardId) {
        setTimeout(() => {
            commit('select', cardId);
        } ,1000);
    }
}