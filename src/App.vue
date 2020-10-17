<template>
  <div id="app" class="bg-beige">
    <Logo />
    <section class="flex justify-between max-w-screen-xl mx-auto">
      <div class="w-2/12 mr-10">
        <Sidebar />
      </div>
      <div class="w-10/12">
        <CardList />
      </div>
    </section>
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Logo from './components/Logo.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    CardList,
    Logo,
    Sidebar
  }
}
</script>
