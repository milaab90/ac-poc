<template>
  <div id="app" class="bg-beige">
    <header class="mx-auto max-w-screen-xl">
      <Logo />
    </header> 
    <section class="flex justify-between max-w-screen-xl mx-auto">
      <div class="w-2/12 mr-10">
        <Sidebar />
      </div>
      <div class="w-10/12">
        <ShoppingSection />
      </div>
    </section>
  </div>
</template>

<script>
import ShoppingSection from './components/ShoppingSection.vue'
import Logo from './components/Logo.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    ShoppingSection,
    Logo,
    Sidebar
  }
}
</script>
