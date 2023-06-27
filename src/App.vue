<template>
    <main>
        <template v-if="hasCards">
            <Deck class="deck" :deck="generatedDeck" />
        </template>
        <p v-else>empty list</p>
    </main>
    <footer class="actions">
        <button class="primary-button" @click="onClick">generate</button>
    </footer>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import type { Ref } from 'vue'
    import { computed } from '@vue/reactivity'
    import { MtgCard } from './plugins/mtg/card/card'
    import { MtgGeneratorApi } from './plugins/mtg/mtg-generator.api'
    import { GeneratorApi } from './ui/api/generator.api'
    import Deck from './ui/generator/Deck.vue'

    const api: GeneratorApi<MtgCard> = new MtgGeneratorApi()
    const generatedDeck: Ref<MtgCard[]> = ref([])
    const hasCards = computed(() => generatedDeck.value.length > 0)

    async function onClick() {
        const deck = await api.generate()
        generatedDeck.value = deck.list()
    }

    onMounted(async () => {
        const deck = await api.generate()
        generatedDeck.value = deck.list()
    })
</script>

<style scoped lang="css">
    main {
        width: 100%;
        overflow: scroll;
    }

    .deck {
        margin: 0 auto;
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

    button.primary-button {
        height: 34px;
        padding: 6px 18px;
    }
</style>
