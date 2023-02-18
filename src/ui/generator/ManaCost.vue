<template>
    <template v-if="hasCost">[{{ condensedNotation }}]</template>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    type ManaCost = {
        black?: number,
        blue?: number,
        green?: number,
        red?: number,
        white?: number,
        colorless?: number,
        xColorless?: boolean,
        nothing?: boolean,
    }

    const cost = defineProps<ManaCost>()

    const repeat = (char: string, times: number) => ''.padStart(times, char)

    const condensedNotation = computed(() => {
        return [
            cost.xColorless ? 'X' : '',
            cost.colorless || '',
            cost.white ? repeat('W', cost.white) : '',
            cost.blue ? repeat('W', cost.blue) : '',
            cost.green ? repeat('W', cost.green) : '',
            cost.black ? repeat('W', cost.black) : '',
            cost.red ? repeat('W', cost.red) : '',
        ].join('')
    })

    const hasCost = computed(() => Object.values(cost).some(value => value))
</script>
