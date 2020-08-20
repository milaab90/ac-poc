<template>
  <div id="app">
    <Card />
    <CardList />
  </div>
</template>

<script>
import Card from './components/Card.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    Card,
    CardList
  }
}
</script>
