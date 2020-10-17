<template>
    <section class="o-cardList w-full">
        <div class="flex">
            <div class="bg-green w-9/12">
                <h1 class="bg-blue font-serif p-5 text-center text-darkBlue text-3xl uppercase">available Villagers</h1>
                <transition name="fade">
                    <ul class="grid grid-cols-3 gap-4 mt-10 px-5"> 
                        <li v-for="card in cards" :key="card.id" v-show="filterHobby === card.hobby || filterHobby === ''">
                                <Card :card="card"/>
                        </li>
                    </ul>
                </transition>
            </div>
            <div class="bg-green ml-20 w-3/12">
            <h1 class="bg-blue font-serif p-5 text-center text-darkBlue text-3xl uppercase">selected Villagers</h1>
            <ul class="mt-10 px-5">
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
            highprice: '',
            hobby: ''
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
            return this.$store.getters.unselectedCards.filter(el =>
                this.$store.state.highprice
                ? el.price < this.$store.state.highprice
                : el.price < this.$store.state.highprice
            )
        },
        filterHobby() {
            return this.$store.state.hobby
        }
    }
}
</script>
