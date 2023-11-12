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
    import { MtgCard } from '@plugins/magic-the-gathering/card/card'
    import { MtgCardCollection } from '@plugins/magic-the-gathering/collection/card-collection'
    import { DumbLimitedDeck } from '@plugins/magic-the-gathering/deck/dumb-limited.deck'
    import Deck from '@plugins/magic-the-gathering/ui/Deck.vue'
    import AppDescription from '@ui/AppDescription.vue'
    import GenerateButton from '@ui/GenerateButton.vue'
    import collection from './example-afr.collection.json'

    const generatedDeck: Ref<MtgCard[]> = ref([])
    const hasCards = computed(() => generatedDeck.value.length > 0)

    async function onGenerateClicked() {
        const deck = DumbLimitedDeck(MtgCardCollection(collection.pools))
        generatedDeck.value = deck.list()
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
