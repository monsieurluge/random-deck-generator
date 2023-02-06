<template>
    <button @click="onClick">generate</button>
    <h1>Result</h1>
    <pre v-if="hasCards">{{ generatedDeck }}</pre>
    <p v-else>empty list</p>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { MtgCard } from './plugins/mtg/card/card';
import { Deck } from './generator/deck';
import { MtgCardCollection } from './plugins/mtg/card-collection';
import { CardPool } from './plugins/mtg/card-pool';
import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator';
import collection from './cards-collections/my-mtg-collection.json'
import { computed } from '@vue/reactivity';

const generatedDeck: string[] = reactive([])
const pools: CardPool[] = collection.pools

const generator = BoosterDraftGenerator(
    MtgCardCollection(pools),
)

const hasCards = computed(() => generatedDeck.length > 0)

function onClick() {
    const deck: Deck<MtgCard> = generator.generate()

    generatedDeck.push('test')

    // generatedDeck = deck.list()

    // deck
    //     .list()
    //     .map((occurrence: CardOccurrence) => `${occurrence.total} __ ${occurrence.card.name}`)
    //     .join('<br/>')
}
</script>




<!-- import collection from './cards-collections/my-mtg-collection.json'
import { HtmlUi } from './html-ui'
import { MtgCardCollection } from './plugins/mtg/card-collection'
import { CardPool } from './plugins/mtg/card-pool'
import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator'

const pools: CardPool[] = collection.pools
const ui = HtmlUi(
    BoosterDraftGenerator(
        MtgCardCollection(pools),
    ),
)

ui.boot() -->
