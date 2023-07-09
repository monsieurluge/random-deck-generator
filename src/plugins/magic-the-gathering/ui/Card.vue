<template>
    <article class="card">
        <div class="card-header">
            <div class="card-header-item">
                <span class="card-name">{{ name }}</span>
            </div>
            <ManaCost class="card-header-item" :cost="cost" />
        </div>
    </article>
</template>

<script setup lang="ts">
    import ManaCost from './ManaCost.vue'

    defineProps<{
        name: String,
        cost: String,
    }>()
</script>

<style scoped>
    .card {
        /*aspect-ratio: 2.5/3.5;*/
        width: 360px;
        padding: 8px;
        color: #313131;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 0 10px #00000050;
        box-sizing: border-box;
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
