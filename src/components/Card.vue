<template>
    <div class="flex flex-col justify-center items-center mb-10">
      <div class="cursor-pointer relative" 
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <img :src="card.image_uri" />
        <div v-if="hover" class="absolute bg-opacity-25 bottom-0 border h-full rounded-lg w-full" :style="{ backgroundColor: card['bubble-color'], opacity: '0.95' }">
          <div class="flex flex-col h-full items-center justify-center w-full">
            <p class="text-white">Personality: <span class="font-bold">{{card.personality}}</span></p>
            <p class="text-white">Birthday: <span class="font-bold">{{card['birthday-string']}}</span></p>
            <p class="text-white">Hobby: <span class="font-bold">{{card.hobby}}</span></p>
            <button @click="selectCard(card); isSelected = true" class="bg-white font-bold mt-5 px-8 py-2 rounded-lg text-blue text-lg text-center uppercase">Select</button>
          </div>
        </div>
         <p class="font-light text-xl text-center text-beige">{{card.name['name-USen']}}</p>
        <p class="font-bold font-serif text-md text-center text-yellow">{{card.price}} bells</p>
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      hover: false
    };
  },
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
