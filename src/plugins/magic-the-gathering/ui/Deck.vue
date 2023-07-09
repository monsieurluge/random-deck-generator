<template>
    <ul class="deck">
        <template
            v-for="stack in stackedCards"
            v-bind:key="stack.item.name.toString()"
        >
            <li v-if="stack.occurrences > 1" class="card stack">
                <CardComponent v-bind="stack.item" />
                <CardComponent v-bind="stack.item" class="stacked-card" />
                <p class="nb-badge">{{ stack.occurrences }}</p>
            </li>
            <li v-else class="card">
                <CardComponent v-bind="stack.item" />
            </li>
        </template>
    </ul>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import { multiSort, sortBy } from '../../../libs/sort'
    import { CheckIdentityMethod, stackItems } from '../../../libs/stack'
    import CardComponent from './Card.vue'

    interface Card {
        convertedManaCost: Number
        cost: String
        name: String
    }

    const props = defineProps<{ deck: Card[] }>()

    const checkSameCard: CheckIdentityMethod<Card> = (left: Card, right: Card) => left.name === right.name
    const sortByName = sortBy<Card, String>((card) => card.name)
    const sortByConvertedManaCost = sortBy<Card, Number>((card) => card.convertedManaCost)

    const stackedCards = computed(() => props.deck
        .sort(multiSort<Card>(sortByConvertedManaCost, sortByName))
        .reduce(stackItems(checkSameCard), [])
    )
</script>

<style scoped lang="css">
    .deck {
        margin: 0;
        padding: 0;
        width: 360px;
        list-style-type: none;
    }

    .card {
        margin-bottom: 4px;
    }

    .stack {
        position: relative;
        margin-bottom: 10px;
    }

    .stacked-card {
        position: absolute;
        top: 6px;
        left: 6px;
        z-index: -1;
    }

    .nb-badge {
        position: absolute;
        top: 13px;
        right: -34px;
        margin: 0;
        padding: 0;
        width: 1.8em;
        height: 1.8em;
        text-align: center;
        font-size: 0.8em;
        font-weight: bolder;
        line-height: 1.8em;
        color: #313131;
        background-color: #ffb400;
        border-radius: 50%;
    }
</style>
