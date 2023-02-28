<template>
    <Card v-for="card in sortedDeck" v-bind="card" v-bind:key="card.name.toString()" />
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { multiSort, sortBy } from '../../libs/sort'
    import Card from './Card.vue'

    interface CardDescription {
        name: String
        cost: String
    }

    interface CardFullDescription {
        name: String
        cost: String
        convertedManaCost: Number
    }

    const props = defineProps<{
        deck: CardDescription[]
    }>()
    const convertedManaCost = (cost: String): Number => cost.split('')
        .map(Number)
        .map((value) => isNaN(value) ? 1.01 : value)
        .reduce((value, total) => value + total, 0)

    const sortByName = sortBy<CardFullDescription, String>((card) => card.name)

    const sortByConvertedManaCost = sortBy<CardFullDescription, Number>((card) => card.convertedManaCost)

    const withConvertedManaCost = (card: CardDescription) => {
        return {
            ...card,
            convertedManaCost: convertedManaCost(card.cost),
        }
    }

    const sortedDeck = computed(() => props.deck
        .map(withConvertedManaCost)
        .sort(multiSort<CardFullDescription>(sortByConvertedManaCost, sortByName))
    )
</script>
