<template>
    <div class="w-full">
        <div class="w-full">
            <label for="pricerange" class="block mb-2 text-md text-left text-darkBlue">Max. Price: <span class="font-bold font-serif">${{ pricerange }} bells</span></label>
            <input
                class="m-priceSlider"
                id="pricerange"
                tabindex="0"
                :value="pricerange"
                type="range"
                :min="min"
                :max="max"
                step="0.1"
                @input="updateHighPrice($event)"
            />
            <div class="flex font-bold justify-between text-xs text-center text-darkBlue">
                <span>${{ min }}</span>
                <span>${{ max }}</span>
            </div>
        </div>
        <span class="block border-t border-blue mt-10 mb-5 w-full"></span>
        <div class="mt-2 w-full">
            <label for="pricerange" class="block mb-2 text-md text-left text-darkBlue">Hobby:</label>
            <select v-model="hobbySelect" class="border-darkBlue border bg-beige font-sans px-1 py-2 text-darkBlue w-full" @input="updateHobby($event)">
                <option disabled selected value>- Select -</option>
                <option :value="hobby">All Hobbies</option>
                <option v-for="(hobby, index) in uniqueHobby" :key="index" :value="hobby">{{hobby}}</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
        return {
            hobbySelect: "",
            min: 60000,
            max: 400000
        }
    },
    computed: {
        pricerange() {
            return this.$store.state.highprice
        },
        uniqueHobby: function() {
            var filtered_hobby = [];
            var cards = this.$store.getters.unselectedCards;
            for(var i =0; i < cards.length; i++) {
                if(filtered_hobby.indexOf(cards[i].hobby) === -1) {
                    filtered_hobby.push(cards[i].hobby)
                }
            }
            return filtered_hobby;
        },
    },
    methods: {
        updateHighPrice($event) {
            this.$store.commit('setHighPrice', $event.target.value)
        },
        updateHobby($event) {
            this.$store.commit('setHobby', $event.target.value)
        }
    }
}
</script>