<template>
    <div class="badge" :class="manaType">{{ value }}</div>
</template>

<script setup lang="ts">
    import { computed } from 'vue'

    const props = defineProps<{
        value: String,
    }>()

    const manaType = computed(() => {
        const value = props.value
        if (value === 'W') return 'white'
        if (value === 'U') return 'blue'
        if (value === 'B') return 'black'
        if (value === 'R') return 'red'
        if (value === 'G') return 'green'
        return 'generic'
    })
</script>

<style scoped lang="css">
    @import '../../index.css';

    .badge {
        width: 20px;
        height: 20px;
        font-size: 14px;
        color: var(--generic-foreground-color);
        line-height: 22px;
        text-align: center;
        background-color: var(--generic-background-color);
        border-radius: 50%;
        border-bottom: 2px solid rgba(0, 0, 0, 0.4);
    }

    .black {
        background-color: var(--black-background-color);
    }

    .blue {
        background-color: var(--blue-background-color);
    }

    .generic {
        background-color: var(--generic-background-color);
    }

    .green {
        background-color: var(--green-background-color);
    }

    .red {
        background-color: var(--red-background-color);
    }

    .white {
        background-color: var(--white-background-color);
    }
</style>
