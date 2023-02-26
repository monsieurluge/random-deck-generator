<template>
    <main>
        <header class="actions">
            <button class="primary-button" @click="onClick">generate</button>
        </header>
        <article class="cards">
            <template v-if="hasCards">
                <Card v-for="card in generatedDeck" v-bind="card" v-bind:key="card.name" />
            </template>
            <p v-else>empty list</p>
        </article>
    </main>
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
        cost: string,
        name: string,
    }

    const generatedDeck: Ref<MinimalInformations[]> = ref([])
    const pools: CardPool[] = collection.pools

    const generator = BoosterDraftGenerator(
        MtgCardCollection(pools),
    )

    const hasCards = computed(() => generatedDeck.value.length > 0)

    const repeat = (char: string, times: number) => ''.padStart(times, char)

    const toString = (costs: unknown) => {
        const x = costs.xColorless ? 'X' : ''
        const generic = `${costs.colorless || ''}`
        const white = repeat('W', costs.white || 0)
        const blue = repeat('U', costs.blue || 0)
        const green = repeat('G', costs.green || 0)
        const black = repeat('B', costs.black || 0)
        const red = repeat('R', costs.red || 0)
        return [
            ...x,
            ...generic,
            ...white,
            ...blue,
            ...green,
            ...black,
            ...red,
        ]
        .filter((value) => value)
        .join('')
    }

    function onClick() {
        const deck: Deck<MtgCard> = generator.generate()
        const cards = deck.list().map(card => {
            return {
                cost: toString(card.card.cost),
                name: card.card.name,
            }
        })
        generatedDeck.value = cards
    }
</script>

<style scoped lang="css">
    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    button.primary-button {
        padding: 5px 1rem;
    }
</style>
