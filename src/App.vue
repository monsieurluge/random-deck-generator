<template>
    <main>
        <Deck v-if="hasCards" class="deck" :deck="generatedDeck" />
        <AppDescription v-else />
    </main>
    <footer>
        <GenerateButton @click="onGenerateClicked" />
    </footer>
</template>

<script setup lang="ts">
    import type { Ref } from 'vue'
    import { ref } from 'vue'
    import { computed } from '@vue/reactivity'
    import { DeckGenerator } from '_generator/deck-generator'
    import { MtgCard } from '_plugins/magic-the-gathering/card/card'
    import { DumbGenerator } from '_plugins/magic-the-gathering/dumb-generator'
    import Deck from '_plugins/magic-the-gathering/ui/Deck.vue'
    import { MtgCardCollection } from '_plugins/magic-the-gathering/collection/card-collection'
    import collection from '_plugins/magic-the-gathering/collection/my-afr.collection.json'
    import AppDescription from '_ui/AppDescription.vue'
    import GenerateButton from '_ui/GenerateButton.vue'

    const generator: DeckGenerator<MtgCard> = DumbGenerator()
    const generatedDeck: Ref<MtgCard[]> = ref([])
    const hasCards = computed(() => generatedDeck.value.length > 0)

    async function generateDeck() {
        const deck = await generator.deckFrom(
            MtgCardCollection(collection.pools)
        )
        generatedDeck.value = deck.list()
    }

    async function onGenerateClicked() {
        generateDeck();
    }
</script>

<style scoped lang="css">
    main {
        width: 100%;
        overflow: scroll;
    }

    .deck {
        margin: 34px auto;
    }

    footer {
        flex-shrink: 0;
        flex-grow: 0;
        height: 50px;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-top: 1px solid #44413c;
        background-color: #3b3a36;
    }
</style>
