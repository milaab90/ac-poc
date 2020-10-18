<template>
    <section class="o-cardList w-full">
        <div class="flex">
            <div class="border-l border-r border-blue w-9/12">
                <h1 class="bg-blue font-serif p-5 text-center text-darkBlue text-3xl uppercase">available Villagers</h1>
                    <ul class="w-full"> 
                        <transition-group name="card" class="grid grid-cols-3 gap-4 mt-10 px-5">
                            <li v-for="card in cards" :key="card.id" v-show="filterHobby === card.hobby || filterHobby === ''">
                                    <Card :card="card"/>
                            </li>
                        </transition-group>
                    </ul>
            </div>
            <div class="border-l border-r border-blue ml-10 w-3/12">
            <h1 class="bg-blue font-serif p-5 text-center text-darkBlue text-3xl uppercase">Cart</h1>
            <transition name="fade" v-show="selections">
                <ul class="w-full">
                    <transition-group name="card" class="grid grid-cols-2 gap-1 mt-10 px-1">
                        <li v-for="selection in selections" :key="selection.name" class="border border-blue flex flex-col items-center m-3 px-3 relative">
                            <SelectedCard :selection="selection"/>
                        </li>
                    </transition-group>
                </ul>
            </transition>
        </div>
        </div>
  </section>
</template>

<script>

import {mapGetters} from 'vuex';
import Card from './Card.vue';
import SelectedCard from './SelectedCard.vue';

export default {
  name: 'Layout',
    components: {
        Card,
        SelectedCard
    },
    data() {
        return {
            highprice: '',
            hobby: ''
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
