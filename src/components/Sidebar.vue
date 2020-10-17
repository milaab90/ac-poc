<template>
    <div class="w-full">
        <div class="w-full">
            <label for="pricerange">Maximum Price: <span>${{ pricerange }}</span></label>
            <input
                class="slider"
                id="pricerange"
                tabindex="0"
                :value="pricerange"
                type="range"
                :min="min"
                :max="max"
                step="0.1"
                @input="updateHighPrice($event)"
            />
            <span class="min">${{ min }}</span>
            <span class="max">${{ max }}</span>
        </div>
        <div class="w-full">
            <select v-model="hobbySelect" class="w-full font-sans text-blue" @input="updateHobby($event)">
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