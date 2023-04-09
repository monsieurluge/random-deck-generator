<template>
    <main>
        <header class="actions">
            <button class="primary-button" @click="onClick">generate</button>
        </header>
        <template v-if="hasCards">
            <Deck :deck="generatedDeck" />
        </template>
        <p v-else>empty list</p>
    </main>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
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
