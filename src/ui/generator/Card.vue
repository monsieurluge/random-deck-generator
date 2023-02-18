<template>
    <article>
        <div class="card-header">
            <div class="card-header-item">
                <span class="card-name">{{ name }}</span>
            </div>
            <ManaCost class="card-header-item" v-bind="card.cost" />
        </div>
    </article>
</template>

<script setup lang="ts">
    import ManaCost from './ManaCost.vue'

    type Card = {
        name: String,
        cost: {
            black?: number,
            blue?: number,
            green?: number,
            red?: number,
            white?: number,
            colorless?: number,
            xColorless?: boolean,
            nothing?: boolean,
        },
    }

    const card = defineProps<Card>()
</script>

<style scoped>
    article {
        padding: 8px;
        color: #313131;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 10px #00000050;
    }

    .card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .card-id {
        font-weight: bold;
    }
</style>
