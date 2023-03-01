<template>
    <main>
        <header class="actions">
            <button class="primary-button" @click="onClick">generate</button>
        </header>
        <article class="cards">
            <template v-if="hasCards">
                <Deck :deck="generatedDeck" />
            </template>
            <p v-else>empty list</p>
        </article>
    </main>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { MtgCard } from './plugins/mtg/card/card';
    import { CardOccurrence } from './generator/card-occurrence';
    import Deck from './ui/generator/Deck.vue'
    import { MtgCardCollection } from './plugins/mtg/card-collection';
    import { CardPool } from './plugins/mtg/card-pool';
    import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator';
    import collection from './cards-collections/my-mtg-collection.json'
    import { computed } from '@vue/reactivity';

    interface Card {
        convertedManaCost: Number
        cost: String,
        name: String,
    }

    const generatedDeck: Ref<Card[]> = ref([])
    const pools: CardPool[] = collection.pools

    const generator = BoosterDraftGenerator(
        MtgCardCollection(pools),
    )

    const hasCards = computed(() => generatedDeck.value.length > 0)

    const convertedManaCost = (cost: String): Number => cost.split('')
        .map(Number)
        .map((value) => isNaN(value) ? 1.01 : value)
        .reduce((value, total) => value + total, 0)

    const poolToCard = (pool: CardOccurrence<MtgCard>): Card => ({
        convertedManaCost: convertedManaCost(pool.card.cost),
        cost: pool.card.cost,
        name: String(pool.card.name),
    })

    function onClick() {
        generatedDeck.value = generator.generate().list().map(poolToCard)
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
