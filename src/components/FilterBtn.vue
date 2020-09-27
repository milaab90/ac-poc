<template>
    <button class="bg-brown font-bold px-8 rounded-lg text-beige text-base text-center uppercase" :class="filterClass">{{filterText}}</button>     
</template>

<script>
export default {
    name: 'FilterBtn',
    props: {
        filterText: {
            type: String,
            default: 'filter'
        },
        filterClass: {
            type: String,
            default: ''
        }
    }
}
</script>
