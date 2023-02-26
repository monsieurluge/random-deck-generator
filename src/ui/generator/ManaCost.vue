<template>
    <ul class="badges" v-if="hasCost">
        <li class="badge" v-for="value in costDetails">
            <CostBadge :value="value" />
        </li>
    </ul>
</template>

<script setup lang="ts">
    import { computed } from 'vue'
    import CostBadge from './CostBadge.vue'

    const props = defineProps<{
        cost: String,
    }>()

    const costDetails = computed(() => [...props.cost])

    const hasCost = computed(() => props.cost.length > 0)
</script>

<style scoped lang="css">
    .badges {
        display: flex;
        flex-direction: row;
        margin: 0;
        list-style-type: none;
        gap: 4px;
    }
</style>
