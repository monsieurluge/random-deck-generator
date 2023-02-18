<template>
    <ul class="badges" v-if="hasCost">
        <li class="badge" v-for="cost in costs">{{ cost }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const cost = defineProps({
        black: Number,
        blue: Number,
        green: Number,
        red: Number,
        white: Number,
        colorless: Number,
        xColorless: Boolean,
        nothing: Boolean,
    })

    const repeat = (char: string, times: number) => Array(times).fill(char) || []

    const costs = computed(() => {
        const xColorless = cost.xColorless ? ['X'] : []
        const colorless = [cost.colorless] || []
        const white = repeat('W', cost.white || 0)
        const blue = repeat('U', cost.blue || 0)
        const green = repeat('G', cost.green || 0)
        const black = repeat('B', cost.black || 0)
        const red = repeat('R', cost.red || 0)
        return [
            ...xColorless,
            ...colorless,
            ...white,
            ...blue,
            ...green,
            ...black,
            ...red,
        ].filter((value) => value)
    })

    const hasCost = computed(() => Object.values(cost).some(value => value))
</script>

<style scoped lang="css">
    .badges {
        display: flex;
        flex-direction: row;
        margin: 0;
        list-style-type: none;
        gap: 4px;
    }

    .badge {
        margin: 0;
        padding: 0;
        width: 20px;
        height: 20px;
        font-size: 14px;
        color: #313131;
        line-height: 20px;
        text-align: center;
        background-color: #e0e0e0;
        border-radius: 50%;
        border-bottom: 3px solid #d0d0d0;
    }
</style>
