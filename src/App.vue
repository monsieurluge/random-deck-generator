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
    import { GeneratorApi } from './ui/api/generator.api'
    import { MtgCard } from './plugins/magic-the-gathering/card/card'
    import { MtgGeneratorApi } from './plugins/magic-the-gathering/generator.api'
    import Deck from './ui/generator/Deck.vue'
    import AppDescription from './ui/AppDescription.vue'
    import GenerateButton from './ui/buttons/GenerateButton.vue'

    const api: GeneratorApi<MtgCard> = new MtgGeneratorApi()
    const generatedDeck: Ref<MtgCard[]> = ref([])
    const hasCards = computed(() => generatedDeck.value.length > 0)

    async function generateDeck() {
        const deck = await api.generate()
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
