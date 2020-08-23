<template>
    <div class="row">
      <p>{{card.name}}</p>
      <img :src="card.imgThumb" />
      <button @click="selectCard(card)">Select</button>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  },
  methods: {
    selectCard(card) {
      this.$store.dispatch('select', card.id);
    }        
  }
}
</script>
