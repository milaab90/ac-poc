export default {
    unselectedCards(state) {
        return state.cards.filter(card => {
            return !card.selected;
        })
    },
    filteredHobby(state){
        return state.cards.filter(card => {
            return card.hobby == 'Education';
        })
    },
    selections(state) {
        return state.selections;
    }
}