<template>
  <section>
      <div class="row" v-for="card in cards" :key="card.id">
        <p>{{card.name}}</p>
        <img :src="card.imgThumb" />
        <button @click="selectCard(card)">Select</button>
      </div>
  </section>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    selectCard(card) {
      this.$store.commit('select', card.id);
    }        
  },
  computed: {
    cards() {
      return this.$store.getters.unselectedCards;
    }
  }
}
</script>
