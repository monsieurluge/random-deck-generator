<template>
    <div v-if="isSymbol" class="badge badge-symbol" :class="symbol"></div>
    <div v-else class="badge colorless">{{ value }}</div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        value: String,
    }>()

    const isSymbol = computed(() => {
        const symbols = ['B', 'G', 'R', 'U', 'W', 'X']
        return symbols.includes(props.value.toString())
    })

    const symbol = computed(() => {
        const value = props.value
        if (value === 'B') return 'symbol-black'
        if (value === 'G') return 'symbol-green'
        if (value === 'P') return 'symbol-phyrexian'
        if (value === 'R') return 'symbol-red'
        if (value === 'U') return 'symbol-blue'
        if (value === 'W') return 'symbol-white'
        if (value === 'X') return 'symbol-x'
        return 'colorless'
    })
</script>

<style scoped lang="css">
    @import '../../index.css';

    .badge {
        width: 20px;
        height: 20px;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        background-color: var(--generic-background-color);
        border-radius: 50%;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
    }

    .badge-symbol {
        background-size: 85%;
        background-repeat: no-repeat;
        background-position: center;
    }

    .symbol-black {
        background-image: url('./symbols/black.svg');
        background-color: var(--black-background-color);
    }

    .symbol-blue {
        background-image: url('./symbols/blue.svg');
        background-color: var(--blue-background-color);
    }

    .symbol-colorless {
        color: var(--generic-foreground-color);
        background-color: var(--generic-background-color);
    }

    .symbol-green {
        background-image: url('./symbols/green.svg');
        background-color: var(--green-background-color);
    }

    .symbol-phyrexian {
        background-image: url('./symbols/phyrexian.svg');
        background-color: var(--black-background-color);
    }

    .symbol-red {
        background-image: url('./symbols/red.svg');
        background-color: var(--red-background-color);
    }

    .symbol-white {
        background-image: url('./symbols/white.svg');
        background-color: var(--white-background-color);
    }

    .symbol-x {
        background-image: url('./symbols/x.svg');
        background-color: var(--generic-background-color);
    }
</style>
