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
    import { ref } from 'vue';
    import type { Ref } from 'vue';
    import { computed } from '@vue/reactivity';
    import { MtgCard } from './plugins/mtg/card/card';
    import { MtgCardCollection } from './plugins/mtg/card-collection';
    import { CardPool } from './plugins/mtg/card-pool';
    import { BoosterDraftGenerator } from './plugins/mtg/generator/booster-draft-generator';
    import collection from './plugins/mtg/cards/my-afr.collection.json'
    import Deck from './ui/generator/Deck.vue'

    const generatedDeck: Ref<MtgCard[]> = ref([])
    const pools: CardPool[] = collection.pools

    const generator = BoosterDraftGenerator(
        MtgCardCollection(pools),
    )

    const hasCards = computed(() => generatedDeck.value.length > 0)

    function onClick() {
        generatedDeck.value = generator.generate().list()
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
