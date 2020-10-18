<template>
    <div class="border-b border-l border-r border-t border-gray flex flex-col justify-center items-center mb-10 pb-2 relative">
      <div class="cursor-pointer" 
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <img :src="card.image_uri" />
        <div v-if="hover" class="absolute bg-opacity-25 bottom-0 h-full w-full" :style="{ backgroundColor: card['bubble-color'], opacity: '0.95'}">
          <div class="flex flex-col h-full items-center justify-center w-full">
            <p class="text-darkGray">Personality: <span class="font-bold">{{card.personality}}</span></p>
            <p class="text-darkGray">Birthday: <span class="font-bold">{{card['birthday-string']}}</span></p>
            <p class="text-darkGray">Hobby: <span class="font-bold">{{card.hobby}}</span></p>
            <button @click="selectCard(card); isSelected = true" class="bg-green font-bold mt-5 px-8 py-2 rounded-lg text-beige text-lg text-center uppercase">Select</button>
          </div>
        </div>
         <p class="font-light text-xl text-center text-darkBlue">{{card.name['name-USen']}}</p>
        <p class="font-bold font-serif text-md text-center text-green">${{card.price}} bells</p>
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
