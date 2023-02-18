<template>
    <button @click="onClick">generate</button>
    <h1>Result</h1>
    <template v-if="hasCards">
        <Card v-for="card in generatedDeck" v-bind="card" v-bind:key="card.name" />
    </template>
    <p v-else>empty list</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { MtgCard } from './plugins/mtg/card/card';
    import { Deck } from './generator/deck';
    import { MtgCardCollection } from './plugins/mtg/card-collection';
    import { CardPool } from './plugins/mtg/card-pool';
    import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator';
    import collection from './cards-collections/my-mtg-collection.json'
    import { computed } from '@vue/reactivity';

    import Card from './ui/generator/Card.vue'

    type MinimalInformations = {
        cost: {
            black?: number,
            blue?: number,
            green?: number,
            red?: number,
            white?: number,
            colorless?: number,
            xColorless?: boolean,
            nothing?: boolean,
        },
        name: string,
    }

    const generatedDeck: Ref<MinimalInformations[]> = ref([])
    const pools: CardPool[] = collection.pools

    const generator = BoosterDraftGenerator(
        MtgCardCollection(pools),
    )

    const hasCards = computed(() => generatedDeck.value.length > 0)

    function onClick() {
        const deck: Deck<MtgCard> = generator.generate()
        const cards = deck.list().map(card => {
            const cost = card.card.cost
            const name = card.card.name
            return { cost, name }
        })
        generatedDeck.value = cards
    }
</script>
