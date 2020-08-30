export default {
    select(state, cardId) {
        const card = state.cards.find(card => {
            return card.id == cardId;
        });
        card.selected = true;
        const selection = {
            cardId: card.id, 
            name: card.name.["name-USen"], 
            img: card.icon_uri, 
            selected: card.selected
        };
        state.selections.push(selection);
    },
    deselect(state, payload) {
        const card = state.cards.find(card => {
            return card.id == payload.cardId;
        });
        card.selected = false;
        const selection = state.selections.find(selection => {
            return selection.cardId == payload.cardId;
        })
        state.selections.splice(state.selections.indexOf(selection), 1);
    }
}