<template>
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="cursor-pointer relative" 
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <p class="font-light text-xl text-center text-beige">{{card.name['name-USen']}}</p>
        <img :src="card.image_uri" />
        <div v-if="hover" class="absolute bg-opacity-25 bottom-0 border h-full rounded-lg w-full" :style="{ backgroundColor: card['bubble-color'], height: '225px', opacity: '0.95' }">
          <div class="flex flex-col h-full items-center justify-center w-full">
            <p class="text-white">Personality: <span class="font-bold">{{card.personality}}</span></p>
            <p class="text-white">Birthday: <span class="font-bold">{{card['birthday-string']}}</span></p>
            <p class="text-white">Hobby: <span class="font-bold">{{card.hobby}}</span></p>
          </div>
        </div>
      </div>
      <button @click="selectCard(card)" class="bg-blue font-bold mt-5 px-8 py-2 rounded-lg text-beige text-lg text-center uppercase">Select</button>
    </div>
    
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      hover: false,
    };
  },
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
