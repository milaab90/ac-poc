<template>
    <div class="row">
      <p>{{card.name['name-USen']}}</p>
      <img :src="card.image_uri" />
      <button @click="selectCard(card)">Select</button>
    </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object,
  },
  methods: {
    selectCard(card) {
      this.$store.dispatch('select', card.id);
    }    
  }
}
</script>
