<template>
    <section class="max-w-screen-xl mx-auto">
        <div class="mb-10">
            <p class="font-serif text-blue text-3xl uppercase">Filter by Hobby:</p>
            <select v-model="hobbySelect" class="w-1/5 font-sans text-blue">
                <option disabled selected value>- Select -</option>
                <option v-for="(hobby, index) in uniqueHobby" :key="index" :value="hobby">{{hobby}}</option>
            </select>
        </div>
        <div class="flex">
            <div class="bg-green w-7/12">
                <h1 class="bg-blue font-serif p-5 text-center text-yellow text-3xl uppercase">available Cards</h1>
                <ul class="grid grid-cols-3 gap-4 mt-10 px-5"> 
                    <li v-for="card in filterCards" :key="card.id">
                        <Card :card="card" />
                    </li>
                </ul>
            </div>
            <div class="bg-green ml-20 w-5/12">
            <h1 class="bg-blue font-serif p-5 text-center text-yellow text-3xl uppercase">selected Cards</h1>
            <ul class="grid grid-cols-3 gap-4 mt-10 px-5">
                <li v-for="selection in selections" :key="selection.name" class="border border-beige flex flex-col items-center m-3 p-3 relative">
                    <h4 class="font-light text-xl text-center text-beige">{{selection.name}}</h4>
                    <img :src="selection.img">
                    <button @click="deselect(selection)" class="absolute bg-blue font-light right-0 top-0 text-xs text-center text-beige"><span class="material-icons">close</span></button>
                </li>
            </ul>
        </div>
        </div>
  </section>
</template>

<script>

import {mapGetters} from 'vuex';
import Card from './Card.vue';

export default {
  name: 'CardList',
    components: {
        Card
    },
    data() {
        return {
            hobbySelect: ""
        }
    },
    methods: { 
        deselect(selection) {
            this.$store.commit({
                type: 'deselect',
                cardId: selection.cardId
            });            
        }
    },
    computed: {
        ...mapGetters({
            selections: 'selections'
        }),
        cards() {
            return this.$store.getters.unselectedCards;
        },
        uniqueHobby: function() {
            var filtered_hobby = [];
            var cards = this.$store.getters.unselectedCards;
            for(var i =0; i < cards.length; i++) {
                if(filtered_hobby.indexOf(cards[i].hobby) === -1) {
                    filtered_hobby.push(cards[i].hobby)
                }
            }
            return filtered_hobby;
        },
        filterCards: function() {
            let filtered = this.$store.getters.unselectedCards;
            if (this.hobbySelect) {
                filtered = filtered.filter(card => {
                    return card.hobby == this.hobbySelect;
                });
            }
            return filtered;
        }
    }
}
</script>
