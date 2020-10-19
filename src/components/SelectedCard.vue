<template>
    <div class="w-full">
        <h4 class="font-bold text-tiny text-center text-darkBlue">{{selection.name}}</h4>
        <img :src="selection.img">
        <span class="block font-bold text-tiny text-center text-darkBlue">${{selection.price}} bells</span>
        <button @click="deselect(selection)" class="absolute bg-blue font-light right-0 top-0 text-xs text-center text-beige"><span class="material-icons">close</span></button>
    </div>
</template>

<script>

export default {
    name: 'SelectedCard',
      props: {
        selection: Object
    },
    methods: { 
        deselect(selection) {
            this.$store.commit({
                type: 'deselect',
                cardId: selection.cardId
            });            
        }
    }
}
</script>