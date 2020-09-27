<template>
    <section class="max-w-screen-xl mx-auto">
        <div class="flex mb-10">
            <Filter-btn
                v-for="f in cards"
                :key="f.id"
                :filter-text="f.hobby"
            />
        </div>
        <div class="flex">
            <div class="bg-green w-7/12">
                <h1 class="bg-blue font-serif p-5 text-center text-yellow text-3xl uppercase">available Cards</h1>
                <ul class="grid grid-cols-3 gap-4 mt-10 px-5"> 
                    <li v-for="card in cards" :key="card.id">
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
import FilterBtn from './FilterBtn.vue';

export default {
  name: 'CardList',
    components: {
        Card,
        FilterBtn
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
        filteredCards() {
            return this.$store.getters.filteredHobby;
        }
    }
}
</script>
