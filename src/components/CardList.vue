<template>
  <section class="flex max-w-xl mx-auto">
      <div class="row">
        <h1>available Cards</h1>
        <ul> 
            <li v-for="card in cards" :key="card.id">
                <Card :card="card" />
            </li>
        </ul>
      </div>
      <div class="row ml-20">
          <h1>selected Cards</h1>
          <ul>
              <li v-for="selection in selections" :key="selection.name">
                    <h4>{{selection.name}}</h4>
                    <img :src="selection.img">
                    <button @click="deselect(selection)">Remove</button>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>

import {mapGetters} from 'vuex';
import Card from './Card.vue'

export default {
  name: 'CardList',
    components: {
        Card
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
        }
    }
}
</script>
