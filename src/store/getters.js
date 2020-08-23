export default {
    unselectedCards(state) {
        return state.cards.filter(card => {
            return !card.selected;
        })
    },
    selections(state) {
        return state.selections;
    }
}