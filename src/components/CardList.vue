<template>
  <section>
      <h1>selected Cards</h1>
      <div class="row" v-for="selection in selections" :key="selection.name">
          <h4>{{selection.name}}</h4>
          <img :src="selection.img">
          <button @click="deselect(selection)">Remove</button>
      </div>
  </section>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
  name: 'CardList',
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
        })
    }
}
</script>
