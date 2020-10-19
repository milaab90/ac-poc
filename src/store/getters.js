export default {
    unselectedCards(state) {
        return state.cards.filter(card => {
            return !card.selected;
        })
    },
    selections(state) {
        return state.selections;
    },
    cartTotal(state,getters) {
        return getters.selections.reduce((total,card) => total + card.price, 0)
    }
}