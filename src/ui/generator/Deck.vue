<template>
    <CardComponent v-for="card in sortedDeck" v-bind="card" v-bind:key="card.name.toString()" />
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { multiSort, sortBy } from '../../libs/sort'
    import CardComponent from './Card.vue'

    interface Card {
        convertedManaCost: Number
        cost: String
        name: String
    }

    const props = defineProps<{ deck: Card[] }>()

    const sortByName = sortBy<Card, String>((card) => card.name)

    const sortByConvertedManaCost = sortBy<Card, Number>((card) => card.convertedManaCost)

    const sortedDeck = computed(() => props.deck
        .sort(multiSort<Card>(sortByConvertedManaCost, sortByName))
    )
</script>
